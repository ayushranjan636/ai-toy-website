import { posts } from "@/content/blog";
import { plain, type Block, type Section } from "@/content/blog/types";
import { landings } from "@/content/landing";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

/**
 * /llms-full.txt — every buying guide, comparison and article as plain
 * Markdown, so AI assistants can read the full text in one fetch.
 * The concise summary lives at /llms.txt.
 */
function block(b: Block): string {
  switch (b.type) {
    case "p":
      return plain(b.text);
    case "ul":
      return b.items.map((i) => `- ${plain(i)}`).join("\n");
    case "ol":
      return b.items.map((i, n) => `${n + 1}. ${plain(i)}`).join("\n");
    case "callout":
      return `> **${b.title}.** ${plain(b.text)}`;
    case "table":
      return [
        b.caption ? `*${b.caption}*` : "",
        `| ${b.head.map(plain).join(" | ")} |`,
        `| ${b.head.map(() => "---").join(" | ")} |`,
        ...b.rows.map((r) => `| ${r.map(plain).join(" | ")} |`),
      ]
        .filter(Boolean)
        .join("\n");
  }
}

const sections = (ss: Section[]) => ss.map((s) => `### ${s.heading}\n\n${s.blocks.map(block).join("\n\n")}`).join("\n\n");
const faqs = (fs: { q: string; a: string }[]) => fs.map((f) => `**${f.q}** ${plain(f.a)}`).join("\n\n");

export function GET() {
  const guideText = landings
    .map(
      (l) =>
        `## ${l.title}\n\nURL: ${absoluteUrl(l.path)}\n\n${plain(l.answer)}\n\n${l.highlights.map((h) => `- ${plain(h)}`).join("\n")}\n\n${sections(l.sections)}\n\n### FAQs\n\n${faqs(l.faqs)}`,
    )
    .join("\n\n---\n\n");

  const postText = posts
    .map(
      (p) =>
        `## ${p.title}\n\nURL: ${absoluteUrl(`/blog/${p.slug}`)}\n\n${plain(p.answer)}\n\n${p.takeaways.map((t) => `- ${plain(t)}`).join("\n")}\n\n${sections(p.sections)}\n\n### FAQs\n\n${faqs(p.faqs)}`,
    )
    .join("\n\n---\n\n");

  const body = `# Zivoo: full text\n\nFacts summary: ${absoluteUrl("/llms.txt")}\n\n# Buying guides and comparisons\n\n${guideText}\n\n# Articles for parents\n\n${postText}\n`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
