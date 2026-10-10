import { coreFaqs } from "@/components/Faq";
import { posts } from "@/content/blog";
import { plain } from "@/content/blog/types";
import { absoluteUrl } from "@/lib/seo";
import { site } from "@/lib/site";

export const dynamic = "force-static";

/**
 * /llms.txt — a concise, factual Markdown summary of the site for AI
 * assistants and answer engines (see llmstxt.org). Generated from the same
 * content as the pages so it never drifts out of date.
 */
export function GET() {
  const faqs = coreFaqs
    .filter((f): f is { q: string; a: string } => typeof f.a === "string")
    .map((f) => `- **${f.q}** ${f.a}`)
    .join("\n");

  const articles = posts.map((p) => `- [${p.title}](${absoluteUrl(`/blog/${p.slug}`)}): ${plain(p.answer)}`).join("\n");

  const body = `# Zivoo

> Zivoo is a screen-free, voice-based learning toy that children talk to. It is being designed to help children practise words (pronunciation and meaning), spelling, basic maths, storytelling and story reflection through spoken conversation. It has no screen, needs a home Wi-Fi connection to work, and comes with a planned companion app for parents. Zivoo is in development and not yet available to buy. Made by ${site.company}.

## Key facts

- Product type: screen-free educational toy; talking / conversational learning toy for children
- Interaction: entirely by voice. No screen, nothing to tap.
- Planned activities: word practice, spelling (letters asked for one at a time), basic maths (counting, adding, taking away), storytelling, story reflection
- Parent app (planned): set up Zivoo, choose which activities are available, see what was practised
- Connectivity: requires Wi-Fi; not designed to work offline
- Status: in development. A free pre-order waitlist is open; joining is not an order or payment.
- Privacy policy: not yet finalised; will be published on the website when ready
- Speech recognition note: recognising a word is not the same as confirming correct pronunciation. Zivoo is a practice partner, not an assessment.

## Main pages

- [Home](${absoluteUrl("/")}): overview, short film, how it works, FAQ, waitlist
- [Features](${absoluteUrl("/features")}): each planned learning activity in detail
- [Product](${absoluteUrl("/product/zivoo")}): gallery, design details, product FAQ
- [About](${absoluteUrl("/about")}): why learning through conversation
- [Blog](${absoluteUrl("/blog")}): guides for parents on screen-free learning

## Frequently asked questions

${faqs}

## Guides for parents

${articles}

## Optional

- [Sitemap](${absoluteUrl("/sitemap.xml")})
- [RSS feed](${absoluteUrl("/feed.xml")})
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
