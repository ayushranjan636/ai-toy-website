#!/usr/bin/env node
/**
 * On-page SEO audit against a running server.
 *   npm run build && npm start   (in another terminal)
 *   npm run audit:seo            (defaults to http://localhost:3000)
 *
 * Checks every URL in the sitemap for: title and description length,
 * canonical, single H1, lang, valid JSON-LD, image alt text, Open Graph
 * tags and broken internal links.
 */
const base = (process.argv[2] || process.env.AUDIT_URL || "http://localhost:3000").replace(/\/$/, "");

const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname).filter((p, i, a) => a.indexOf(p) === i);

const pick = (html, re) => (html.match(re) || [])[1];
const decode = (s = "") => s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");

let problems = 0;
const linkSet = new Set();
const rows = [];

for (const path of urls) {
  const res = await fetch(base + path);
  const html = await res.text();
  const issues = [];

  const title = decode(pick(html, /<title>([^<]*)<\/title>/));
  const desc = decode(pick(html, /<meta name="description" content="([^"]*)"/));
  const canonical = pick(html, /<link rel="canonical" href="([^"]*)"/);
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  const ogTitle = pick(html, /<meta property="og:title" content="([^"]*)"/);
  const ogImage = pick(html, /<meta property="og:image" content="([^"]*)"/);

  if (res.status !== 200) issues.push(`HTTP ${res.status}`);
  if (!title) issues.push("missing <title>");
  else if (title.length > 65) issues.push(`title ${title.length} chars (>65)`);
  if (!desc) issues.push("missing meta description");
  else if (desc.length < 110 || desc.length > 165) issues.push(`description ${desc.length} chars (aim 110–165)`);
  if (!canonical) issues.push("missing canonical");
  else if (new URL(canonical).pathname.replace(/\/$/, "") !== path.replace(/\/$/, "")) issues.push(`canonical points elsewhere: ${canonical}`);
  if (h1s !== 1) issues.push(`${h1s} <h1> elements`);
  if (!/<html[^>]+lang="/.test(html)) issues.push("missing html lang");
  if (!ogTitle || !ogImage) issues.push("missing og:title / og:image");

  const types = [];
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const data = JSON.parse(m[1]);
      for (const node of data["@graph"] || [data]) types.push(node["@type"]);
    } catch {
      issues.push("invalid JSON-LD");
    }
  }

  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="/.test(m[0])) issues.push(`img without alt: ${m[0].slice(0, 80)}`);
  }
  for (const m of html.matchAll(/<a\b[^>]*href="(\/[^"#?]*)/g)) linkSet.add(m[1] || "/");

  problems += issues.length;
  rows.push({ path, title: title?.length, desc: desc?.length, h1s, schema: [...new Set(types)].join(", "), issues });
}

// Internal link check
const broken = [];
for (const href of linkSet) {
  const r = await fetch(base + href, { redirect: "manual" });
  if (r.status >= 400) broken.push(`${href} → ${r.status}`);
}
problems += broken.length;

console.log(`\nSEO audit: ${base}  (${urls.length} URLs from sitemap, ${linkSet.size} internal links)\n`);
for (const r of rows) {
  console.log(`${r.issues.length ? "✗" : "✓"} ${r.path}`);
  console.log(`    title ${r.title} · description ${r.desc} · h1 ${r.h1s} · schema: ${r.schema || "none"}`);
  for (const i of r.issues) console.log(`    ! ${i}`);
}
if (broken.length) console.log(`\nBroken internal links:\n  ${broken.join("\n  ")}`);
console.log(problems ? `\n${problems} issue(s) found.\n` : "\nNo issues found.\n");
process.exit(problems ? 1 : 0);
