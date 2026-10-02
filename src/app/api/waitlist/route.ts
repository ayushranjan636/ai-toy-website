import { NextResponse, type NextRequest } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import { saveSignup } from "@/lib/waitlist-store";
import { parseWaitlistInput } from "@/lib/waitlist-validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const json = (body: Record<string, unknown>, status: number, headers?: HeadersInit) =>
  NextResponse.json(body, { status, headers: { "Cache-Control": "no-store", ...headers } });

function clientIp(req: NextRequest) {
  const fwd = req.headers.get("x-forwarded-for");
  return fwd?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
}

export async function POST(req: NextRequest) {
  // Reject cross-site form posts. Compare against the Host the browser used
  // (respecting proxies), since nextUrl.origin can differ behind a proxy.
  const origin = req.headers.get("origin");
  if (origin) {
    const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
    let originHost: string | null = null;
    try {
      originHost = new URL(origin).host;
    } catch {
      /* malformed origin */
    }
    if (!host || originHost !== host) {
      return json({ ok: false, code: "forbidden", message: "This request could not be accepted." }, 403);
    }
  }

  if (!req.headers.get("content-type")?.includes("application/json")) {
    return json({ ok: false, code: "bad_request", message: "Please submit the form again." }, 415);
  }

  const ip = clientIp(req);
  const burst = rateLimit(`ip:${ip}`, 5, 10 * 60 * 1000);
  if (!burst.allowed) {
    return json(
      {
        ok: false,
        code: "rate_limited",
        message: "That's a few too many attempts. Please wait a few minutes and try again.",
      },
      429,
      { "Retry-After": String(burst.retryAfterSeconds) },
    );
  }

  let body: unknown;
  try {
    const raw = await req.text();
    if (raw.length > 2000) throw new Error("too large");
    body = JSON.parse(raw);
  } catch {
    return json({ ok: false, code: "bad_request", message: "Please submit the form again." }, 400);
  }

  // Honeypot: real people never fill the hidden "company" field.
  const b = body as Record<string, unknown>;
  if (typeof b?.company === "string" && b.company.trim() !== "") {
    return json({ ok: false, code: "bad_request", message: "Please submit the form again." }, 400);
  }

  const parsed = parseWaitlistInput(body);
  if (!parsed.ok) {
    return json(
      { ok: false, code: "invalid", message: "Please check the highlighted field.", fieldErrors: parsed.errors },
      422,
    );
  }

  const perEmail = rateLimit(`email:${parsed.data.email}`, 3, 60 * 60 * 1000);
  if (!perEmail.allowed) {
    return json(
      { ok: false, code: "rate_limited", message: "Please wait a little while before trying this email again." },
      429,
      { "Retry-After": String(perEmail.retryAfterSeconds) },
    );
  }

  const source = typeof b.source === "string" ? b.source.slice(0, 80) : "website";
  const result = await saveSignup(parsed.data, source);

  switch (result.status) {
    case "created":
      return json({ ok: true, code: "created" }, 201);
    case "duplicate":
      return json({ ok: true, code: "duplicate" }, 200);
    case "unconfigured":
      console.error("[waitlist] No storage configured. Set WAITLIST_STORE (see .env.example).");
      return json(
        {
          ok: false,
          code: "unavailable",
          message:
            "Sign-ups aren't open on this site just yet, so we couldn't save your details. Please check back soon.",
        },
        503,
      );
    default:
      console.error("[waitlist] Save failed:", result.detail);
      return json(
        {
          ok: false,
          code: "server_error",
          message: "Something went wrong on our side and your details weren't saved. Please try again.",
        },
        500,
      );
  }
}

export function GET() {
  return json({ ok: false, message: "Method not allowed" }, 405, { Allow: "POST" });
}
