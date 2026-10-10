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
    "Zivoo is a screen-free learning toy for children aged 3 to 9. Kids talk with it to practise words, spelling, maths and stories. In development; needs Wi-Fi.",
  // Founder-confirmed public contact; NEXT_PUBLIC_CONTACT_EMAIL can override it
  // (e.g. once a hello@zivootoy.in mailbox exists).
  contactEmail: clean(process.env.NEXT_PUBLIC_CONTACT_EMAIL) ?? "sistlavenkatabharathi@gmail.com",
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

/**
 * Product facts confirmed by the founder (10 Oct 2026). Everything that
 * describes Zivoo on the site reads from here so pages and structured data
 * never disagree. Zivoo is still being built and tested, so these are design
 * targets and plans, and the copy says so.
 */
export const product = {
  ages: { min: 3, max: 9, label: "3 to 9" },
  languages: "English first, with more Indian languages planned",
  wakeWord: "Hey Zivoo",
  battery: "Up to 50 hours on a full charge (design target)",
  app: "Zivoo Parents app",
  preorder: {
    opensOn: "2026-12-01",
    opensLabel: "1 December 2026",
    price: 4999,
    listPrice: 9999,
    currency: "INR",
    validUntil: "2026-12-31",
    validUntilLabel: "31 December 2026",
    region: "IN",
  },
} as const;

/** Company registration details (Ministry of Corporate Affairs record). */
export const legal = {
  name: "Cogniveda LLP",
  llpin: "ACX-8838",
  incorporated: "2026-05-04",
  address: {
    street: "Flat No. 106, Garuda Tower, Lakshmipuram",
    locality: "Tirupati (Urban)",
    district: "Chittoor",
    region: "Andhra Pradesh",
    postalCode: "517501",
    country: "IN",
  },
  addressLine:
    "Flat No. 106, Garuda Tower, Lakshmipuram, Tirupati (Urban), Chittoor, Andhra Pradesh, India 517501",
} as const;

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

/** Shared social sharing image. Pages that override `openGraph` must include it. */
export const ogImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "The Zivoo learning toy beside the Zivoo logo",
};
