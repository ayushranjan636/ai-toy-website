#!/usr/bin/env node
/**
 * Checks the Supabase waitlist connection using the values in .env.local.
 *   npm run check:supabase
 *
 * 1. Confirms the env vars are present (never prints the key).
 * 2. Reads from the table to confirm the URL, key and table are correct.
 * 3. Inserts a clearly-marked test row, confirms the duplicate rule works,
 *    then deletes the test row again.
 */
import { readFileSync, existsSync } from "node:fs";

const envFile = existsSync(".env.local") ? ".env.local" : null;
if (envFile) {
  for (const line of readFileSync(envFile, "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

const url = process.env.SUPABASE_URL?.replace(/\/$/, "");
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
const table = process.env.SUPABASE_WAITLIST_TABLE || "waitlist_signups";
const store = process.env.WAITLIST_STORE;

const ok = (m) => console.log(`  ✓ ${m}`);
const fail = (m) => {
  console.log(`  ✗ ${m}`);
  process.exit(1);
};

console.log(`\nSupabase waitlist check (${envFile ?? "no .env.local found"})\n`);

if (!url) fail("SUPABASE_URL is empty");
if (!key) fail("SUPABASE_SERVICE_ROLE_KEY is empty");
ok(`SUPABASE_URL set (${new URL(url).host})`);
if (key.startsWith("sb_publishable_")) {
  fail(
    "SUPABASE_SERVICE_ROLE_KEY is the publishable (public) key. Use the Secret key (sb_secret_…) or the legacy service_role key from Project Settings → API Keys.",
  );
}
ok(`SUPABASE_SERVICE_ROLE_KEY set (${key.length} characters, not shown)`);
if (store !== "supabase") console.log(`  ! WAITLIST_STORE is "${store ?? ""}" — set it to "supabase" or the site won't use Supabase`);
else ok('WAITLIST_STORE = "supabase"');

const headers = { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json" };
const endpoint = `${url}/rest/v1/${encodeURIComponent(table)}`;

let res = await fetch(`${endpoint}?select=id&limit=1`, { headers }).catch((e) => fail(`Could not reach Supabase: ${e.message}`));
if (res.status === 401 || res.status === 403) fail(`Key rejected (${res.status}). Use the service_role key, not the anon key.`);
if (res.status === 404) fail(`Table "${table}" not found. Run supabase/waitlist.sql in the Supabase SQL editor.`);
if (!res.ok) fail(`Read failed (${res.status}): ${(await res.text()).slice(0, 200)}`);
ok(`Table "${table}" is reachable`);

const testEmail = `connection-test+${Date.now()}@zivoo.invalid`;
const row = { email: testEmail, first_name: null, marketing_consent: false, source: "connection-check" };

res = await fetch(endpoint, { method: "POST", headers: { ...headers, Prefer: "return=minimal" }, body: JSON.stringify(row) });
if (!res.ok) {
  const body = await res.text();
  if (body.includes("42501")) {
    fail(
      "Insert blocked by row-level security. This means the key is not the secret/service_role key. Replace SUPABASE_SERVICE_ROLE_KEY with the Secret key (sb_secret_…) — don't loosen the table's security.",
    );
  }
  fail(`Insert failed (${res.status}): ${body.slice(0, 200)}`);
}
ok("Test row inserted");

res = await fetch(endpoint, { method: "POST", headers: { ...headers, Prefer: "return=minimal" }, body: JSON.stringify(row) });
if (res.status === 409) ok("Duplicate emails are rejected (unique rule works)");
else console.log(`  ! Duplicate insert returned ${res.status} — check the unique constraint on email`);

res = await fetch(`${endpoint}?email=eq.${encodeURIComponent(testEmail)}`, { method: "DELETE", headers });
if (res.ok) ok("Test row removed");
else console.log(`  ! Could not delete the test row (${res.status}); remove ${testEmail} manually`);

console.log("\nSupabase is working. Restart the dev server so the site picks up .env.local.\n");
