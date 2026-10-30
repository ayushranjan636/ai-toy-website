import type { MetadataRoute } from "next";
import { posts } from "@/content/blog";
import { landings } from "@/content/landing";
import { absoluteUrl } from "@/lib/seo";
import { film } from "@/lib/site";

const SITE_UPDATED = "2026-10-29";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: SITE_UPDATED, changeFrequency: "weekly", priority: 1 },
    {
      url: absoluteUrl("/product/zivoo"),
      lastModified: SITE_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        absoluteUrl("/images/zivoo-hero.webp"),
        absoluteUrl("/images/zivoo-angle-front-left.webp"),
        absoluteUrl("/images/zivoo-angle-back.webp"),
        absoluteUrl("/images/zivoo-angle-left.webp"),
        absoluteUrl("/images/zivoo-angle-top.webp"),
        absoluteUrl("/images/zivoo-feature-hey-zivoo.webp"),
        absoluteUrl("/images/zivoo-feature-privacy.webp"),
        absoluteUrl("/images/zivoo-feature-size.webp"),
      ],
      videos: [
        {
          title: film.title,
          description: film.description,
          thumbnail_loc: absoluteUrl(film.poster),
          content_loc: absoluteUrl(film.hd),
          duration: film.seconds,
        },
      ],
    },
    { url: absoluteUrl("/pre-order"), lastModified: SITE_UPDATED, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/features"), lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/safety"), lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.7 },
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

  const guides: MetadataRoute.Sitemap = landings.map((l) => ({
    url: absoluteUrl(l.path),
    lastModified: l.updated ?? l.published,
    changeFrequency: "monthly",
    priority: 0.8,
    images: [absoluteUrl(l.image.src)],
  }));

  return [...pages, ...guides, ...articles];
}
