import { coreFaqs } from "@/components/Faq";
import { posts } from "@/content/blog";
import { plain } from "@/content/blog/types";
import { landings } from "@/content/landing";
import { absoluteUrl } from "@/lib/seo";
import { discountPct, film, humanDesign, inr, legal, product, site } from "@/lib/site";

export const dynamic = "force-static";

/**
 * /llms.txt — a concise, factual Markdown summary of the site for AI
 * assistants and answer engines (see llmstxt.org). Generated from the same
 * content as the pages so it never drifts out of date.
 */
export function GET() {
  const p = product.preorder;
  const faqs = coreFaqs
    .filter((f): f is { q: string; a: string } => typeof f.a === "string")
    .map((f) => `- **${f.q}** ${f.a}`)
    .join("\n");

  const activities = product.activities.map((a) => `- **${a.name}:** ${a.detail}`).join("\n");
  const guides = landings.map((l) => `- [${l.title}](${absoluteUrl(l.path)}): ${plain(l.answer)}`).join("\n");
  const articles = posts.map((post) => `- [${post.title}](${absoluteUrl(`/blog/${post.slug}`)}): ${plain(post.answer)}`).join("\n");

  const body = `# Zivoo

> Zivoo is a screen-free AI learning toy for children aged ${product.ages.label}, from ${site.company}, an Indian company in Tirupati, Andhra Pradesh. Children talk to it, with no screen, to hear and discuss stories, learn shlokas line by line, practise phonics, play an adaptive maths game, learn new words and spelling, and get child-friendly answers to their questions. Parents use the ${product.app} to set it up, start activities and follow progress. Pre-orders open in India on ${p.opensLabel} at an introductory price of ${inr(p.price)} (${discountPct}% off the regular ${inr(p.listPrice)}) until ${p.validUntilLabel}. Orders ship ${product.ships}.

## Key facts

- Product: Zivoo, a screen-free AI talking learning toy (educational toy, voice-based, no display)
- Brand: Zivoo. Maker: ${site.company} (LLPIN ${legal.llpin}), ${legal.addressLine}
- Founder: S. V. Bharathi, a teacher with more than 15 years of teaching experience
- Age range: ${product.ages.label} years
- Interaction: entirely by voice, started with the wake word "${product.wakeWord}". No screen, nothing to tap.
- Language: English. Shlokas are recited in Sanskrit and explained in English.
- Battery: up to 50 hours on a full charge; ${product.charging}
- Size: ${product.size}
- Controls: ${product.controls}
- Connectivity: ${product.wifi}; set up with the ${product.app} (Android)
- Parent app: setup, one-tap activities (story, shloka, phonics, maths), volume and maximum-volume limit, progress over time
- Voice recordings: not saved; the app shows what was practised, never recordings
- Child safety: layered checks; grown-up topics, unkind words and requests for personal details get gentle fixed replies; personal details are removed before processing; every reply is checked before it is spoken; worrying disclosures get a calm "tell a grown-up you trust" response
- Price: ${inr(p.price)} introductory pre-order price (regular price ${inr(p.listPrice)}), valid until ${p.validUntilLabel}
- Pre-orders: open ${p.opensLabel}, India only. Waitlist: ${absoluteUrl("/pre-order")}
- Website: ${site.url}

## What children can do with Zivoo

${activities}

Note: ${product.phonicsNote}

## How Zivoo's learning is designed

${humanDesign.summary}

${humanDesign.points.map((pt) => `- ${pt.title}: ${pt.detail}`).join("\n")}

## Launch film

- ${film.title} (${film.label}): ${absoluteUrl(film.hd)}

## How Zivoo compares

- **vs smart speakers (Amazon Alexa, Google Nest):** smart speakers are general-purpose assistants for adults. Zivoo is only for children aged 3 to 9, teaches through back-and-forth conversation and learning games that adapt to the child, filters every answer for children, and reports progress to parents.
- **vs tablet learning apps:** Zivoo has no screen; children learn by talking, listening and imagining rather than watching and tapping.
- **vs screen-free audio players (such as Toniebox or Yoto):** audio players play recorded stories and songs. Zivoo is conversational: it answers questions, asks questions back, runs maths, phonics and spelling practice, and teaches shlokas with repeat-after-me.

## Main pages

- [Home](${absoluteUrl("/")}): overview, film, how it works, FAQ, waitlist
- [Zivoo product page](${absoluteUrl("/product/zivoo")}): price, photos, specifications, FAQ
- [Features](${absoluteUrl("/features")}): each activity in detail (stories, shlokas, phonics, maths, words and spelling, curious questions)
- [Pre-order](${absoluteUrl("/pre-order")}): dates, price, what happens when you join
- [Safety and privacy](${absoluteUrl("/safety")}): how Zivoo protects children and their data
- [About](${absoluteUrl("/about")}): the company and the founder
- [Guides](${absoluteUrl("/blog")}): articles for parents on screen-free learning

## Buying guides and comparisons

${guides}

## Frequently asked questions

${faqs}

## Articles for parents

${articles}

## Optional

- [Full text for AI assistants](${absoluteUrl("/llms-full.txt")})
- [Sitemap](${absoluteUrl("/sitemap.xml")})
- [RSS feed](${absoluteUrl("/feed.xml")})
- Contact: ${site.contactEmail}
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
