#!/usr/bin/env node
/**
 * Checks the Google Sheets waitlist connection using .env.local.
 *   npm run check:sheets
 *
 * Sends an authenticated "ping" — nothing is written to the sheet.
 */
import { existsSync, readFileSync } from "node:fs";

if (existsSync(".env.local")) {
  for (const line of readFileSync(".env.local", "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
const secret = process.env.GOOGLE_SHEETS_SECRET;
const ok = (m) => console.log(`  ✓ ${m}`);
const fail = (m) => {
  console.log(`  ✗ ${m}\n`);
  process.exit(1);
};

console.log("\nGoogle Sheets waitlist check\n");
if (process.env.WAITLIST_STORE !== "google-sheets") {
  console.log(`  ! WAITLIST_STORE is "${process.env.WAITLIST_STORE ?? ""}" — set it to "google-sheets"`);
} else ok('WAITLIST_STORE = "google-sheets"');
if (!url) fail("GOOGLE_SHEETS_WEBHOOK_URL is empty");
if (!/^https:\/\/script\.google\.com\/macros\/s\/.+\/exec$/.test(url)) {
  fail("GOOGLE_SHEETS_WEBHOOK_URL should look like https://script.google.com/macros/s/…/exec (the Web app URL)");
}
ok("Web app URL looks right");
if (!secret || secret.length < 24) fail("GOOGLE_SHEETS_SECRET is missing or shorter than 24 characters");
ok(`Secret set (${secret.length} characters, not shown)`);

let res;
try {
  res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ secret, action: "ping" }),
    redirect: "follow",
  });
} catch (e) {
  fail(`Could not reach Google: ${e.message}`);
}
const text = await res.text();
let data;
try {
  data = JSON.parse(text);
} catch {
  fail(
    'Google returned a web page instead of JSON. Re-deploy the script as a Web app with "Execute as: Me" and "Who has access: Anyone".',
  );
}
if (data.status === "unauthorized") fail("Secret rejected. GOOGLE_SHEETS_SECRET must match WAITLIST_SECRET in Script Properties.");
if (data.status !== "ok") fail(`Unexpected reply: ${text.slice(0, 200)}`);
ok(`Script responded and can write to the "${data.sheet}" tab`);
console.log("\nGoogle Sheets is connected. Restart the dev server to use it.\n");
