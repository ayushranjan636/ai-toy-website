#!/usr/bin/env node
/**
 * Production-output checks (run after `npm run build`):
 *   npm test
 *
 * Starts `next start` on a free port with no NEXT_PUBLIC_SITE_URL, so it also
 * proves the production-origin fallback, then asserts on real HTTP output.
 */
import { spawn } from "node:child_process";
import assert from "node:assert/strict";
import { test, after, before } from "node:test";

const ORIGIN = "https://www.zivootoy.in";
const PORT = 3217;
const base = `http://127.0.0.1:${PORT}`;
const PAGES = [
  "/",
  "/features",
  "/about",
  "/product/zivoo",
  "/pre-order",
  "/safety",
  "/blog",
  "/toys/ai-toy-for-kids",
  "/toys/shloka-learning-toy",
  "/compare/zivoo-vs-alexa-smart-speakers",
];
let server;

before(async () => {
  const env = { ...process.env, PORT: String(PORT) };
  delete env.NEXT_PUBLIC_SITE_URL;
  env.WAITLIST_STORE = ""; // never write real sign-ups during tests
  server = spawn("npx", ["next", "start", "-p", String(PORT)], { env, stdio: "ignore" });
  for (let i = 0; i < 60; i++) {
    try {
      if ((await fetch(base + "/robots.txt")).ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error("server did not start");
});
after(() => server?.kill());

const get = async (p) => {
  const r = await fetch(base + p, { redirect: "manual" });
  return { status: r.status, headers: r.headers, body: await r.text() };
};
const attr = (html, re) => (html.match(re) || [])[1];

for (const path of PAGES) {
  test(`${path}: 200, self-canonical, one h1, valid JSON-LD, all imgs have alt`, async () => {
    const { status, body } = await get(path);
    assert.equal(status, 200);
    const canonicals = body.match(/<link rel="canonical"[^>]*>/g) || [];
    assert.equal(canonicals.length, 1, "exactly one canonical");
    assert.equal(attr(body, /<link rel="canonical" href="([^"]+)"/), ORIGIN + (path === "/" ? "" : path));
    assert.equal((body.match(/<h1[\s>]/g) || []).length, 1);
    assert.equal((body.match(/<title>/g) || []).length, 1);
    assert.ok(!body.includes("localhost"), "no localhost URLs in HTML");
    assert.match(attr(body, /<meta property="og:image" content="([^"]+)"/) ?? "", /^https:\/\/www\.zivootoy\.in\//);
    assert.match(attr(body, /<meta property="og:url" content="([^"]+)"/) ?? "", /^https:\/\/www\.zivootoy\.in/);
    for (const img of body.match(/<img\b[^>]*>/g) || []) assert.match(img, /\balt="/, img.slice(0, 90));
    for (const m of body.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(m[1]);
    assert.doesNotMatch(body, /noindex/);
  });
}

test("titles and descriptions are unique across pages", async () => {
  const seen = { title: new Set(), desc: new Set() };
  for (const p of PAGES) {
    const { body } = await get(p);
    const t = attr(body, /<title>([^<]+)<\/title>/);
    const d = attr(body, /<meta name="description" content="([^"]+)"/);
    assert.ok(!seen.title.has(t), `duplicate title ${t}`);
    assert.ok(!seen.desc.has(d), `duplicate description on ${p}`);
    seen.title.add(t);
    seen.desc.add(d);
  }
});

test("Product JSON-LD has the confirmed India pre-order offer and no invented ratings", async () => {
  const { body } = await get("/product/zivoo");
  assert.match(body, /"@type":"Product"/);
  assert.match(body, /"price":5999,"priceCurrency":"INR"/);
  assert.match(body, /"availabilityStarts":"2026-11-23"/);
  assert.match(body, /"availability":"https:\/\/schema.org\/PreOrder"/);
  assert.match(body, /"priceValidUntil":"2026-12-31"/);
  assert.match(body, /"suggestedMinAge":3,"suggestedMaxAge":9/);
  assert.doesNotMatch(body, /"(aggregateRating|review)"/);
});

test("sitemap lists only canonical, successful URLs on the production origin", async () => {
  const { body } = await get("/sitemap.xml");
  const locs = [...body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  assert.ok(locs.length >= PAGES.length);
  for (const loc of locs) {
    assert.ok(loc.startsWith(ORIGIN), loc);
    const { status } = await get(loc.slice(ORIGIN.length) || "/");
    assert.equal(status, 200, loc);
  }
});

test("robots.txt allows crawling, blocks only /api/, names AI crawlers, points to production sitemap", async () => {
  const { body } = await get("/robots.txt");
  for (const bot of ["GPTBot", "OAI-SearchBot", "PerplexityBot", "ClaudeBot", "Google-Extended"]) assert.match(body, new RegExp(`User-Agent: ${bot}`));
  assert.match(body, /User-Agent: \*\nAllow: \/\nDisallow: \/api\//);
  assert.match(body, /Sitemap: https:\/\/www\.zivootoy\.in\/sitemap\.xml/);
});

test("llms.txt and llms-full.txt carry the current launch facts", async () => {
  const { status, body } = await get("/llms.txt");
  assert.equal(status, 200);
  for (const fact of ["23 November 2026", "₹5,999", "₹9,999", "Shlokas", "Phonics", "3 to 9"]) assert.ok(body.includes(fact), fact);
  assert.doesNotMatch(body, /in development|(?<!\d)1 December|₹4,999/i);
  const full = await get("/llms-full.txt");
  assert.equal(full.status, 200);
  assert.match(full.body, /Zivoo vs Alexa/);
});

test("no stale launch facts on any page", async () => {
  for (const p of PAGES) {
    const { body } = await get(p);
    assert.doesNotMatch(body, /(?<!\d)1 December 2026|₹4,999|In development/, p);
  }
});

test("IndexNow key file is served", async () => {
  const { status, body } = await get("/c7947d57d56265d3e34e472839f16d74.txt");
  assert.equal(status, 200);
  assert.equal(body.trim(), "c7947d57d56265d3e34e472839f16d74");
});

test("unknown pages return 404 (not redirected to the homepage)", async () => {
  const { status } = await get("/definitely-not-a-page");
  assert.equal(status, 404);
});

test("apple-touch-icon is linked and served as a PNG", async () => {
  const { body } = await get("/");
  const href = attr(body, /<link rel="apple-touch-icon" href="([^"]+)"/);
  assert.ok(href, "apple-touch-icon link present");
  const r = await fetch(base + href);
  assert.equal(r.headers.get("content-type"), "image/png");
});

test("waitlist API: rejects cross-origin, validates input, never fakes success when unconfigured", async () => {
  const post = (body, origin = base) =>
    fetch(base + "/api/waitlist", { method: "POST", headers: { "Content-Type": "application/json", Origin: origin }, body: JSON.stringify(body) });
  assert.equal((await post({ email: "a@example.com" }, "https://evil.example")).status, 403);
  assert.equal((await post({ email: "nope", marketingConsent: false, company: "" })).status, 422);
  const r = await post({ email: "parent@example.com", marketingConsent: false, company: "" });
  assert.equal(r.status, 503);
  assert.equal((await r.json()).ok, false);
});
