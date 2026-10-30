import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Every crawler may fetch public pages; only the API is excluded (the unlisted
 * owners' page /app is kept out of results by its noindex header). AI search and
 * assistant crawlers are named explicitly so
 * a future blanket rule (or a host-level bot filter) can't silently shut Zivoo
 * out of AI answers. robots.txt is not access control; the API enforces its
 * own checks.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "Bingbot",
  "DuckAssistBot",
  "meta-externalagent",
  "MistralAI-User",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/api/"];
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      { userAgent: AI_CRAWLERS, allow: "/", disallow },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
