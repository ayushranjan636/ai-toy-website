/**
 * Central site configuration.
 *
 * Only confirmed facts belong here.
 * Optional fields (contact email, policy links) are read from env vars and
 * are hidden from the site when blank, rather than filled with placeholders.
 */

const clean = (value: string | undefined) => (value && value.trim() ? value.trim() : undefined);

/** Verified production origin (apex and http variants 308-redirect here). */
export const PRODUCTION_ORIGIN = "https://www.zivootoy.in";

/** Normalises an origin: valid http(s) URL, no path, no trailing slash. */
function origin(value: string | undefined) {
  const v = clean(value);
  if (!v) return undefined;
  try {
    const u = new URL(v);
    return u.protocol === "https:" || u.protocol === "http:" ? u.origin : undefined;
  } catch {
    return undefined;
  }
}

export const site = {
  name: "Zivoo",
  company: "Cogniveda LLP",
  // NEXT_PUBLIC_SITE_URL overrides (e.g. for a staging domain). Without it we
  // fall back to the real domain, never localhost, so canonicals, sitemap and
  // social URLs are correct even if the variable is missing on the host.
  url: origin(process.env.NEXT_PUBLIC_SITE_URL) ?? PRODUCTION_ORIGIN,
  description:
    "Zivoo is a screen-free learning toy children talk to, being designed for practising words, spelling, maths and stories by voice. In development; needs Wi-Fi.",
  contactEmail: clean(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
  privacyUrl: clean(process.env.NEXT_PUBLIC_PRIVACY_URL),
  termsUrl: clean(process.env.NEXT_PUBLIC_TERMS_URL),
} as const;

export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/about", label: "About us" },
] as const;

export const productHref = "/product/zivoo";
export const waitlistHref = "#waitlist";

/** Shared social sharing image. Pages that override `openGraph` must include it. */
export const ogImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "The Zivoo learning toy beside the Zivoo logo",
};
