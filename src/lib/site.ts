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
    "Zivoo is a screen-free AI learning toy for kids aged 3 to 9. Children talk to it to learn words, spelling, phonics, maths, shlokas and stories. Pre-orders open 23 Nov 2026 in India.",
  // Founder-confirmed public contact; NEXT_PUBLIC_CONTACT_EMAIL can override it
  // (e.g. once a hello@zivootoy.in mailbox exists).
  contactEmail: clean(process.env.NEXT_PUBLIC_CONTACT_EMAIL) ?? "sistlavenkatabharathi@gmail.com",
  privacyUrl: clean(process.env.NEXT_PUBLIC_PRIVACY_URL),
  termsUrl: clean(process.env.NEXT_PUBLIC_TERMS_URL),
} as const;

export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pre-order", label: "Pre-order" },
  { href: "/blog", label: "Guides" },
  { href: "/about", label: "About us" },
] as const;

/**
 * Public profiles of Zivoo / Cogniveda LLP (used for Organization `sameAs`,
 * which helps search engines and AI assistants recognise the brand as one
 * entity). Comma-separated full URLs in NEXT_PUBLIC_SAME_AS, e.g.
 * "https://www.instagram.com/zivootoy,https://www.youtube.com/@zivoo".
 */
export const sameAs: string[] = (clean(process.env.NEXT_PUBLIC_SAME_AS) ?? "")
  .split(",")
  .map((s) => s.trim())
  .filter((s) => /^https:\/\//.test(s));

export const productHref = "/product/zivoo";
export const waitlistHref = "#waitlist";

/**
 * Parent app downloads shown on the unlisted /app page (the QR code in the box).
 * /app/android always serves the latest APK (see next.config.ts), so printed QR codes
 * and shared links never go stale. NEXT_PUBLIC_ANDROID_APP_URL can point it at
 * Google Play once the app is listed there.
 */
export const appDownloads = {
  android: {
    href: clean(process.env.NEXT_PUBLIC_ANDROID_APP_URL) ?? "/app/android",
    size: "about 52 MB",
  },
} as const;

/** Where /app/android redirects: the latest signed APK (public, read-only S3 object). */
export const ANDROID_APK_URL = "https://zivoo-app-downloads.s3.ap-south-1.amazonaws.com/android/Zivoo.apk";

/**
 * Product facts confirmed by the founder (10 Oct 2026, updated 29 Oct 2026:
 * pre-orders open 23 Nov 2026 at ₹5,999; the toy works and ships in 2026;
 * English at launch). Everything that describes Zivoo on the site reads from
 * here so pages, llms.txt and structured data never disagree.
 */
export const product = {
  ages: { min: 3, max: 9, label: "3 to 9" },
  languages: "English",
  languagesNote: "English at launch",
  wakeWord: "Hey Zivoo",
  battery: "Up to 50 hours on a full charge",
  /** Hardware facts, as shown on the product feature cards (public/features). */
  size: "16 × 14 × 9.4 cm (160 × 140 × 94 mm)",
  charging: "USB-C, rechargeable battery inside",
  wifi: "Home Wi-Fi (2.4 GHz)",
  controls: "A glowing talk button on top and a physical microphone switch on the back",
  app: "Zivoo Parents app",
  status: "Launching in India: pre-orders open 23 November 2026",
  ships: "in 2026",
  /** What children can do with Zivoo today. Order = importance for parents. */
  activities: [
    { name: "Stories", detail: "Built-in stories told with feeling, plus new stories on any topic a child asks for, and questions about the story afterwards." },
    { name: "Shlokas", detail: "Nine well-loved shlokas and mantras, such as the Ganesha shloka and the Gayatri mantra: Zivoo recites them, explains what they mean and teaches them line by line, repeat-after-me." },
    { name: "Phonics", detail: "A phonics coach that listens to each sound: blending sounds into words, breaking words into sounds and saying them back." },
    { name: "Maths", detail: "A maths game that gets harder as your child improves, from counting to adding, taking away and times tables, with hints when an answer is wrong." },
    { name: "Words and spelling", detail: "New words and what they mean, and spelling out loud, one letter at a time." },
    { name: "Curious questions", detail: "Child-friendly answers to everyday \"why\" questions, followed by a question back to keep your child thinking." },
    { name: "Play and feelings", detail: "Riddles, jokes, rhymes, fun facts and animal sounds, plus calm breathing and movement breaks when a child feels sad, cross or wiggly." },
  ],
  /** Phonics coaching rolls out to every Zivoo in a free over-the-air update shortly after launch. */
  phonicsNote: "Phonics coaching reaches every Zivoo in a free software update shortly after launch.",
  preorder: {
    opensOn: "2026-11-23",
    opensLabel: "23 November 2026",
    price: 5999,
    listPrice: 9999,
    currency: "INR",
    validUntil: "2026-12-31",
    validUntilLabel: "31 December 2026",
    region: "IN",
  },
} as const;

/** The launch film (source: public/video/Zivoo_Launch_Film_1080p.mp4, compressed for the web). */
export const film = {
  title: "Zivoo launch film",
  description:
    "Meet Zivoo, the screen-free AI learning toy for children aged 3 to 9: say \"Hey Zivoo\", and practise stories, spelling, phonics and maths out loud, with a physical mic switch and the Zivoo Parents app.",
  hd: "/video/zivoo-launch-film-1080.mp4",
  sd: "/video/zivoo-launch-film-720.mp4",
  poster: "/video/zivoo-launch-film-poster.webp",
  seconds: 104,
  label: "1:44",
  iso: "PT1M44S",
  uploadDate: "2026-10-25",
} as const;

/**
 * How Zivoo's learning is made: people design it, AI only holds the conversation.
 * Worded carefully: Zivoo does invent new stories and answers open questions live,
 * so we never claim every sentence is pre-written; we claim (truthfully) that
 * people choose what is taught, in what order, and the rules every answer follows.
 */
export const humanDesign = {
  headline: "Designed by people. Spoken by Zivoo.",
  summary:
    "Every activity on Zivoo is chosen and designed by people, led by a teacher with 15+ years in the classroom, around how young children learn to talk, read, count and think. AI is only how Zivoo holds the conversation: it follows the lessons, levels and rules people wrote.",
  points: [
    {
      title: "Chosen by a teacher",
      detail:
        "What Zivoo teaches, and in what order, was picked by our founder, a teacher with 15+ years of classroom experience: stories, shlokas, phonics, maths, words and spelling.",
    },
    {
      title: "Built step by step",
      detail:
        "Phonics goes sound by sound before whole words. Maths starts with counting and moves to adding, taking away and times tables only when a child is ready. Each level was planned by hand.",
    },
    {
      title: "Selected with care",
      detail:
        "The nine shlokas and mantras, their meanings and the built-in stories were selected and checked by people, not generated on the spot.",
    },
    {
      title: "Designed to make children think",
      detail:
        "Zivoo asks a question back after every answer, gives hints instead of answers and never rushes. That pattern is a teaching choice, made by people to build language, memory, attention and confidence.",
    },
    {
      title: "Rules written by people",
      detail:
        "When Zivoo makes up a new story or answers a curious question, it works inside rules people wrote: child-friendly words, short answers, kind replies and safety checks before it speaks.",
    },
  ],
} as const;

/** Introductory discount, e.g. 40 (%). Derived so copy never disagrees with the prices. */
export const discountPct = Math.round((1 - product.preorder.price / product.preorder.listPrice) * 100);

/** Comma list of activity names, e.g. "Stories, Shlokas, Phonics…" (lower-cased after the first). */
export const activityList = product.activities.map((a) => a.name.toLowerCase()).join(", ");

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
