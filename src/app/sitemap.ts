import type { MetadataRoute } from "next";
import { posts } from "@/content/blog";
import { absoluteUrl } from "@/lib/seo";

const SITE_UPDATED = "2026-10-10";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: SITE_UPDATED, changeFrequency: "weekly", priority: 1 },
    {
      url: absoluteUrl("/product/zivoo"),
      lastModified: SITE_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        absoluteUrl("/images/zivoo-front.webp"),
        absoluteUrl("/images/zivoo-side.webp"),
        absoluteUrl("/images/zivoo-back.webp"),
        absoluteUrl("/images/zivoo-facing.webp"),
      ],
      videos: [
        {
          title: "Meet Zivoo in 25 seconds",
          description: "A short concept film introducing Zivoo, a screen-free learning toy children talk to.",
          thumbnail_loc: absoluteUrl("/video/zivoo-film-poster.webp"),
          content_loc: absoluteUrl("/video/zivoo-film-1080.mp4"),
          duration: 25,
        },
      ],
    },
    { url: absoluteUrl("/features"), lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/about"), lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/blog"), lastModified: posts[0]?.updated ?? posts[0]?.published, changeFrequency: "weekly", priority: 0.8 },
  ];

  const articles: MetadataRoute.Sitemap = posts.map((p) => ({
    url: absoluteUrl(`/blog/${p.slug}`),
    lastModified: p.updated ?? p.published,
    changeFrequency: "monthly",
    priority: 0.7,
    images: [absoluteUrl(p.image.src)],
  }));

  return [...pages, ...articles];
}
