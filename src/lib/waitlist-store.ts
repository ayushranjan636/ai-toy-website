import "server-only";
import { promises as fs } from "node:fs";
import path from "node:path";
import type { WaitlistInput } from "./waitlist-validation";
import { MARKETING_CONSENT_TEXT } from "./waitlist-validation";

/**
 * Server-only waitlist storage.
 *
 * - "supabase": production. Inserts via the Supabase REST API using the
 *   service-role key, which never leaves the server.
 * - "file": local testing only. Appends to data/waitlist.json.
 *
 * If no store is configured we report that honestly; the UI never shows a
 * success message unless a row was actually written.
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

export function waitlistStoreKind(): "supabase" | "file" | null {
  const kind = process.env.WAITLIST_STORE?.trim().toLowerCase();
  if (kind === "supabase" && process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return "supabase";
  }
  if (kind === "file") return "file";
  return null;
}

async function saveToSupabase(row: Row): Promise<SaveResult> {
  const base = process.env.SUPABASE_URL!.replace(/\/$/, "");
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  const table = process.env.SUPABASE_WAITLIST_TABLE?.trim() || "waitlist_signups";

  const res = await fetch(`${base}/rest/v1/${encodeURIComponent(table)}`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(row),
    cache: "no-store",
    signal: AbortSignal.timeout(8000),
  });

  if (res.ok) return { status: "created" };

  const text = await res.text().catch(() => "");
  // 23505 = unique_violation (email already on the list)
  if (res.status === 409 || text.includes("23505")) return { status: "duplicate" };
  return { status: "error", detail: `Supabase ${res.status}: ${text.slice(0, 200)}` };
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
    return kind === "supabase" ? await saveToSupabase(row) : await saveToFile(row);
  } catch (err) {
    return { status: "error", detail: err instanceof Error ? err.message : String(err) };
  }
}
