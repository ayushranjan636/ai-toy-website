import type { Metadata } from "next";
import { ogImage, site } from "./site";

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
      locale: "en_GB",
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

export const organizationLd = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: site.company,
  url: site.url,
  logo: { "@type": "ImageObject", url: `${site.url}/images/zivoo-logo-dark.png` },
  brand: { "@type": "Brand", name: "Zivoo" },
  ...(site.contactEmail ? { email: site.contactEmail } : {}),
};

export const websiteLd = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "Zivoo",
  alternateName: "Zivoo screen-free learning toy",
  url: site.url,
  inLanguage: "en-GB",
  publisher: { "@id": ORG_ID },
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
