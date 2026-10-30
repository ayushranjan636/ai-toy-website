import type { Section } from "@/content/blog/types";

/**
 * Buying-guide and comparison pages ("/toys/…" and "/compare/…").
 *
 * Each page targets one thing parents search for ("AI toy for kids",
 * "shloka toy", "Zivoo vs Alexa"), opens with a short direct answer that
 * search snippets and AI assistants can quote, then gives facts, a table and
 * FAQs. Inline markup is the same as the blog: [text](/path) and **bold**.
 */
export type Landing = {
  kind: "toys" | "compare";
  slug: string;
  /** Visible H1. */
  title: string;
  /** <title> tag, ≤ 65 characters where possible. */
  seoTitle: string;
  /** Meta description, 140–160 characters. */
  description: string;
  eyebrow: string;
  /** Two-to-four sentence direct answer at the top. */
  answer: string;
  highlights: string[];
  sections: Section[];
  faqs: { q: string; a: string }[];
  keywords: string[];
  published: string;
  updated?: string;
  image: { src: string; alt: string; width: number; height: number };
};

export const landingPath = (l: Pick<Landing, "kind" | "slug">) => `/${l.kind}/${l.slug}`;
