/**
 * Central site configuration.
 *
 * Only confirmed facts belong here.
 * Optional fields (contact email, policy links) are read from env vars and
 * are hidden from the site when blank, rather than filled with placeholders.
 */

const clean = (value: string | undefined) => (value && value.trim() ? value.trim() : undefined);

export const site = {
  name: "Zivoo",
  company: "Cogniveda LLP",
  url: clean(process.env.NEXT_PUBLIC_SITE_URL) ?? "http://localhost:3000",
  description:
    "Zivoo is a screen-free learning toy in development. Children talk with it to practise words, spelling, basic maths and stories. Requires Wi-Fi.",
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
