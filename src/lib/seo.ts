import type { Metadata } from "next";
import { activityList, film, ogImage, legal, product, sameAs, site } from "./site";

/**
 * SEO helpers. Every page builds metadata through `pageMetadata` so canonical
 * URLs, Open Graph and Twitter cards stay consistent and complete.
 */

export const absoluteUrl = (path = "/") => `${site.url}${path === "/" ? "" : path}`;

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** Use an absolute title (skips the "· Zivoo" template). */
  absoluteTitle?: boolean;
  image?: { url: string; width: number; height: number; alt: string };
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
};

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle,
  image = ogImage,
  type = "website",
  publishedTime,
  modifiedTime,
  tags,
}: PageMetaInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} · Zivoo`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: "Zivoo",
      title: fullTitle,
      description,
      images: [image],
      locale: "en_IN",
      ...(type === "article" ? { publishedTime, modifiedTime, tags, authors: [`${site.name} team`] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
  };
}

/* ------------------------------------------------------------------ */
/* Structured data (schema.org JSON-LD)                                */
/* ------------------------------------------------------------------ */

export const ORG_ID = `${site.url}/#organization`;
export const WEBSITE_ID = `${site.url}/#website`;
export const PRODUCT_ID = `${site.url}/product/zivoo#product`;
export const FOUNDER_ID = `${site.url}/about#founder`;
export const BRAND_ID = `${site.url}/#brand`;

/** Only founder-confirmed facts: name, role, teaching background. */
export const founderLd = {
  "@type": "Person",
  "@id": FOUNDER_ID,
  name: "S. V. Bharathi",
  jobTitle: "Founder",
  description: "Founder of Zivoo, with more than 15 years of experience in teaching.",
  knowsAbout: ["Teaching", "Early childhood learning", "Language development", "Phonics", "Curriculum design for young children"],
  worksFor: { "@id": ORG_ID },
  url: `${site.url}/about#founder`,
};

export const organizationLd = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: site.company,
  alternateName: ["Zivoo", "Cogniveda"],
  description:
    "Cogniveda LLP is an Indian children's learning company in Tirupati, Andhra Pradesh. It makes Zivoo, a screen-free AI learning toy for children aged 3 to 9.",
  url: site.url,
  logo: { "@type": "ImageObject", url: `${site.url}/images/zivoo-logo-dark.png` },
  brand: { "@id": BRAND_ID },
  founder: { "@id": FOUNDER_ID },
  legalName: "COGNIVEDA LLP",
  foundingDate: legal.incorporated,
  foundingLocation: { "@type": "Place", name: "Tirupati, Andhra Pradesh, India" },
  identifier: { "@type": "PropertyValue", propertyID: "LLPIN", value: legal.llpin },
  address: {
    "@type": "PostalAddress",
    streetAddress: legal.address.street,
    addressLocality: legal.address.locality,
    addressRegion: legal.address.region,
    postalCode: legal.address.postalCode,
    addressCountry: legal.address.country,
  },
  areaServed: { "@type": "Country", name: "India" },
  knowsAbout: [
    "Screen-free learning",
    "Educational toys",
    "AI toys for children",
    "Early childhood education",
    "Phonics",
    "Shlokas for children",
  ],
  ...(site.contactEmail
    ? {
        email: site.contactEmail,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: site.contactEmail,
          areaServed: "IN",
          availableLanguage: ["English"],
        },
      }
    : {}),
  ...(sameAs.length ? { sameAs } : {}),
};

export const brandLd = {
  "@type": "Brand",
  "@id": BRAND_ID,
  name: "Zivoo",
  slogan: "Big questions. Little conversations.",
  logo: `${site.url}/images/zivoo-logo-dark.png`,
  url: site.url,
  ...(sameAs.length ? { sameAs } : {}),
};

/**
 * The canonical Product node. Defined once and referenced by @id from every
 * page that mentions Zivoo, so search engines and AI assistants see one
 * consistent product. No rating or review is published until real customer
 * reviews exist.
 */
export const productImages = [
  "/images/zivoo-hero.webp",
  "/images/zivoo-angle-front-left.webp",
  "/images/zivoo-angle-back.webp",
  "/images/zivoo-angle-left.webp",
  "/images/zivoo-angle-top.webp",
  "/images/zivoo-feature-hey-zivoo.webp",
  "/images/zivoo-feature-size.webp",
  "/images/zivoo-on-shelf.webp",
  "/images/packed-product.webp",
];

export function productLd(images: string[] = productImages) {
  const p = product.preorder;
  return {
    "@type": "Product",
    "@id": PRODUCT_ID,
    name: "Zivoo",
    alternateName: ["Zivoo AI learning toy", "Zivoo talking toy"],
    description: site.description,
    slogan: "Big questions. Little conversations.",
    category: "Toys & Games > Toys > Educational Toys",
    brand: { "@id": BRAND_ID },
    manufacturer: { "@id": ORG_ID },
    image: images.map((src) => absoluteUrl(src)),
    url: absoluteUrl("/product/zivoo"),
    audience: {
      "@type": "PeopleAudience",
      audienceType: "Children aged 3 to 9 and their parents",
      suggestedMinAge: product.ages.min,
      suggestedMaxAge: product.ages.max,
    },
    keywords:
      "screen-free learning toy, AI toy for kids, talking toy, educational toy India, shloka toy, phonics toy, learning toy for 3 to 9 year olds",
    offers: {
      "@type": "Offer",
      url: absoluteUrl("/pre-order"),
      price: p.price,
      priceCurrency: p.currency,
      availability: "https://schema.org/PreOrder",
      availabilityStarts: p.opensOn,
      priceValidUntil: p.validUntil,
      eligibleRegion: { "@type": "Country", name: "India" },
      areaServed: { "@type": "Country", name: "India" },
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@id": ORG_ID },
      priceSpecification: [
        { "@type": "UnitPriceSpecification", price: p.price, priceCurrency: p.currency },
        {
          "@type": "UnitPriceSpecification",
          priceType: "https://schema.org/StrikethroughPrice",
          price: p.listPrice,
          priceCurrency: p.currency,
        },
      ],
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Screen", value: "None (screen-free, voice-based)" },
      { "@type": "PropertyValue", name: "Activities", value: activityList },
      { "@type": "PropertyValue", name: "Age range", value: `${product.ages.label} years` },
      { "@type": "PropertyValue", name: "Language", value: product.languages },
      { "@type": "PropertyValue", name: "Wake word", value: product.wakeWord },
      { "@type": "PropertyValue", name: "Battery", value: product.battery },
      { "@type": "PropertyValue", name: "Charging", value: product.charging },
      { "@type": "PropertyValue", name: "Size", value: product.size },
      { "@type": "PropertyValue", name: "Controls", value: product.controls },
      { "@type": "PropertyValue", name: "Connectivity", value: product.wifi },
      { "@type": "PropertyValue", name: "Parent app", value: `${product.app}: setup, one-tap activities, volume limit, progress` },
      { "@type": "PropertyValue", name: "Voice recordings", value: "Not saved" },
      {
        "@type": "PropertyValue",
        name: "Learning design",
        value: "Activities chosen and designed by people, led by a teacher with 15+ years of classroom experience; AI only holds the conversation",
      },
      { "@type": "PropertyValue", name: "Made by", value: `${site.company}, Tirupati, India` },
    ],
    depth: { "@type": "QuantitativeValue", value: 9.4, unitCode: "CMT" },
    width: { "@type": "QuantitativeValue", value: 16, unitCode: "CMT" },
    height: { "@type": "QuantitativeValue", value: 14, unitCode: "CMT" },
    subjectOf: {
      "@type": "VideoObject",
      name: film.title,
      description: film.description,
      thumbnailUrl: absoluteUrl(film.poster),
      contentUrl: absoluteUrl(film.hd),
      uploadDate: film.uploadDate,
      duration: film.iso,
      inLanguage: "en-IN",
    },
  };
}

export const websiteLd = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "Zivoo",
  alternateName: ["Zivoo screen-free learning toy", "zivootoy.in"],
  url: site.url,
  inLanguage: "en-IN",
  publisher: { "@id": ORG_ID },
  about: { "@id": PRODUCT_ID },
};

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Wraps one or more nodes in a single @graph document. */
export function ldGraph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
