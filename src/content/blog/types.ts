/**
 * Blog content model.
 *
 * Inline text supports two tiny pieces of markup:
 *   [link text](/path-or-https-url)   and   **bold**
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "table"; head: string[]; rows: string[][]; caption?: string };

export type Section = { id: string; heading: string; blocks: Block[] };

export type Post = {
  slug: string;
  title: string;
  /** <title> tag. Keep ≤ 60 characters where possible. */
  seoTitle: string;
  /** Meta description. Aim for 140–160 characters. */
  description: string;
  category: "Screen time" | "Language" | "Learning at home" | "Choosing toys";
  published: string; // ISO date
  updated?: string;
  keywords: string[];
  image: { src: string; alt: string; width: number; height: number };
  /** Two-to-four sentence direct answer shown at the top — written for readers and AI answer engines. */
  answer: string;
  takeaways: string[];
  sections: Section[];
  faqs: { q: string; a: string }[];
  sources: { label: string; url: string }[];
};

export function wordCount(post: Post) {
  const text = [
    post.answer,
    ...post.takeaways,
    ...post.sections.flatMap((s) => [
      s.heading,
      ...s.blocks.flatMap((b) => {
        switch (b.type) {
          case "p":
            return [b.text];
          case "ul":
          case "ol":
            return b.items;
          case "callout":
            return [b.title, b.text];
          case "table":
            return [...b.head, ...b.rows.flat()];
        }
      }),
    ]),
    ...post.faqs.flatMap((f) => [f.q, f.a]),
  ].join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

export const readingMinutes = (post: Post) => Math.max(3, Math.round(wordCount(post) / 220));

/** Strips inline markup for plain-text contexts (JSON-LD, RSS, llms.txt). */
export const plain = (text: string) => text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1");
