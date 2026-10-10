import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Owner's existing choice preserved: every crawler may fetch public pages;
 * only the API is excluded. robots.txt is not access control. The API
 * enforces its own checks.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
