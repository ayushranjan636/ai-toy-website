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

> Zivoo is a screen-free, voice-based learning toy that children talk to. It is being designed to help children practise words (pronunciation and meaning), spelling, basic maths, storytelling and story reflection through spoken conversation. It is designed for children aged 3 to 9, has no screen, needs a home Wi-Fi connection to work, and comes with the planned Zivoo Parents app. Zivoo is being built and tested; pre-orders are planned to open on 1 December 2026 at ₹4,999 (50% off ₹9,999). Made by ${site.company} (LLPIN ACX-8838, Tirupati, Andhra Pradesh, India), founded by S. V. Bharathi, a teacher with more than 15 years of experience.

## Key facts

- Product type: screen-free educational toy; talking / conversational learning toy for children
- Age range: 3 to 9 years
- Interaction: entirely by voice, started with the wake word "Hey Zivoo". No screen, nothing to tap.
- Languages: English first; more Indian languages planned
- Battery: designed for up to 50 hours on a full charge
- Planned activities: word practice, spelling (letters asked for one at a time), basic maths (counting, adding, taking away), storytelling, story reflection
- Parent app (planned, Zivoo Parents app): set up Zivoo, choose activities, follow the child's growth and performance
- Connectivity: requires Wi-Fi; not designed to work offline
- Status: being built and tested; no safety certifications yet. A free pre-order waitlist is open; joining is not an order or payment.
- Pre-order: India only, planned to open 1 December 2026; planned price ₹4,999 (regular price ₹9,999) until 31 December 2026
- Voice data: recordings are kept temporarily on the device only; the parent app shows insights, not recordings. Full privacy policy not yet published.
- Speech recognition note: recognising a word is not the same as confirming correct pronunciation. Zivoo is a practice partner, not an assessment.

## Main pages

- [Home](${absoluteUrl("/")}): overview, short film, how it works, FAQ, waitlist
- [Features](${absoluteUrl("/features")}): each planned learning activity in detail
- [Product](${absoluteUrl("/product/zivoo")}): gallery, design details, product FAQ
- [About](${absoluteUrl("/about")}): why learning through conversation, and the founder
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
