import "server-only";
import { promises as fs } from "node:fs";
import path from "node:path";
import type { WaitlistInput } from "./waitlist-validation";
import { MARKETING_CONSENT_TEXT } from "./waitlist-validation";

/**
 * Server-only waitlist storage.
 *
 * - "google-sheets": production. Posts to a Google Apps Script web app that
 *   appends a row to the waitlist sheet. The shared secret never leaves the
 *   server. See google-sheets/Code.gs and README.md.
 * - "file": local testing only. Appends to data/waitlist.json.
 *
 * If no store is configured we say so honestly; the UI never shows success
 * unless a row was actually written.
 */

export type SaveResult =
  | { status: "created" }
  | { status: "duplicate" }
  | { status: "unconfigured" }
  | { status: "error"; detail: string };

type Row = {
  email: string;
  first_name: string | null;
  marketing_consent: boolean;
  consent_text: string | null;
  source: string;
  created_at: string;
};

function toRow(input: WaitlistInput, source: string): Row {
  return {
    email: input.email,
    first_name: input.firstName ?? null,
    marketing_consent: input.marketingConsent,
    consent_text: input.marketingConsent ? MARKETING_CONSENT_TEXT : null,
    source,
    created_at: new Date().toISOString(),
  };
}

/** Neutralise spreadsheet formula injection (=, +, -, @ at the start of a cell). */
function sheetSafe(value: string | null): string {
  if (!value) return "";
  return /^[=+\-@\t\r]/.test(value) ? `'${value}` : value;
}

export function waitlistStoreKind(): "google-sheets" | "file" | null {
  const kind = process.env.WAITLIST_STORE?.trim().toLowerCase();
  if (kind === "google-sheets" && process.env.GOOGLE_SHEETS_WEBHOOK_URL && process.env.GOOGLE_SHEETS_SECRET) {
    return "google-sheets";
  }
  if (kind === "file") return "file";
  return null;
}

async function saveToGoogleSheets(row: Row): Promise<SaveResult> {
  const res = await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL!, {
    method: "POST",
    // text/plain avoids a CORS preflight on Apps Script and is parsed as JSON there.
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      secret: process.env.GOOGLE_SHEETS_SECRET,
      email: row.email,
      firstName: sheetSafe(row.first_name),
      marketingConsent: row.marketing_consent,
      consentText: row.consent_text,
      source: sheetSafe(row.source),
    }),
    redirect: "follow", // Apps Script answers via a one-time redirect
    cache: "no-store",
    signal: AbortSignal.timeout(12000),
  });

  const text = await res.text();
  let data: { status?: string; message?: string } = {};
  try {
    data = JSON.parse(text);
  } catch {
    return { status: "error", detail: `Google Sheets returned non-JSON (${res.status}): ${text.slice(0, 160)}` };
  }

  switch (data.status) {
    case "created":
      return { status: "created" };
    case "duplicate":
      return { status: "duplicate" };
    case "unauthorized":
      return { status: "error", detail: "Google Sheets rejected the secret (check GOOGLE_SHEETS_SECRET)" };
    default:
      return { status: "error", detail: `Google Sheets: ${data.status ?? res.status} ${data.message ?? ""}`.trim() };
  }
}

// Serialise file writes so concurrent requests cannot clobber each other.
let fileQueue: Promise<unknown> = Promise.resolve();

async function saveToFile(row: Row): Promise<SaveResult> {
  const dir = path.join(process.cwd(), "data");
  const file = path.join(dir, "waitlist.json");

  const task = fileQueue.then(async (): Promise<SaveResult> => {
    await fs.mkdir(dir, { recursive: true });
    let rows: Row[] = [];
    try {
      rows = JSON.parse(await fs.readFile(file, "utf8")) as Row[];
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code !== "ENOENT") throw err;
    }
    if (rows.some((r) => r.email === row.email)) return { status: "duplicate" };
    rows.push(row);
    const tmp = `${file}.${process.pid}.tmp`;
    await fs.writeFile(tmp, JSON.stringify(rows, null, 2), "utf8");
    await fs.rename(tmp, file);
    return { status: "created" };
  });
  fileQueue = task.catch(() => undefined);
  return task;
}

export async function saveSignup(input: WaitlistInput, source: string): Promise<SaveResult> {
  const kind = waitlistStoreKind();
  if (!kind) return { status: "unconfigured" };
  const row = toRow(input, source);
  try {
    return kind === "google-sheets" ? await saveToGoogleSheets(row) : await saveToFile(row);
  } catch (err) {
    return { status: "error", detail: err instanceof Error ? err.message : String(err) };
  }
}
