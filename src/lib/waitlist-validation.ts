/**
 * Shared waitlist validation. Used by the client for inline feedback and —
 * authoritatively — by the API route before anything is stored.
 */

export const EMAIL_MAX = 254;
export const NAME_MAX = 60;

// Pragmatic email check: one @, a dot in the domain, no spaces.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export type WaitlistInput = {
  email: string;
  firstName?: string;
  marketingConsent: boolean;
};

export type FieldErrors = Partial<Record<"email" | "firstName", string>>;

export function validateEmail(raw: string): string | undefined {
  const email = raw.trim();
  if (!email) return "Please enter your email address.";
  if (email.length > EMAIL_MAX) return "That email address is too long.";
  if (!EMAIL_RE.test(email)) return "Please enter a valid email address, like name@example.com.";
  return undefined;
}

export function validateFirstName(raw: string | undefined): string | undefined {
  const name = (raw ?? "").trim();
  if (!name) return undefined;
  if (name.length > NAME_MAX) return `Please keep your first name under ${NAME_MAX} characters.`;
  // Letters (any script), spaces, apostrophes, hyphens and full stops.
  if (!/^[\p{L}\p{M}' .-]+$/u.test(name)) return "Please use letters only in your first name.";
  return undefined;
}

export function parseWaitlistInput(
  body: unknown,
): { ok: true; data: WaitlistInput } | { ok: false; errors: FieldErrors } {
  const obj = (typeof body === "object" && body !== null ? body : {}) as Record<string, unknown>;
  const email = typeof obj.email === "string" ? obj.email : "";
  const firstName = typeof obj.firstName === "string" ? obj.firstName : "";

  const errors: FieldErrors = {};
  const emailError = validateEmail(email);
  const nameError = validateFirstName(firstName);
  if (emailError) errors.email = emailError;
  if (nameError) errors.firstName = nameError;
  if (Object.keys(errors).length) return { ok: false, errors };

  return {
    ok: true,
    data: {
      email: email.trim().toLowerCase(),
      firstName: firstName.trim() || undefined,
      marketingConsent: obj.marketingConsent === true,
    },
  };
}

export const MARKETING_CONSENT_TEXT =
  "Also send me occasional updates about Zivoo's development. I can unsubscribe at any time.";
