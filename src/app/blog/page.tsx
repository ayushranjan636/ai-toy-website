import { JsonLd } from "@/components/JsonLd";
import { PostCard } from "@/components/PostCard";
import Link from "next/link";
import { posts } from "@/content/blog";
import { landings } from "@/content/landing";
import { absoluteUrl, breadcrumbLd, ldGraph, ORG_ID, pageMetadata, WEBSITE_ID } from "@/lib/seo";

const title = "Screen-free learning guides for parents in India";
const description =
  "Practical guides for parents on screen time, shlokas for kids, phonics at home, spelling games, vocabulary, screen-free gifts and choosing educational toys.";

export const metadata = pageMetadata({ title, description, path: "/blog" });

export default function BlogIndexPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="blog-title">
        <div className="hero-wash" aria-hidden="true" />
        <div className="container page-hero-inner">
          <p className="glass-chip">
            <span className="status-dot" aria-hidden="true" /> The Zivoo journal
          </p>
          <h1 id="blog-title">Screen-free learning, explained for parents.</h1>
          <p className="lede">
            Practical ideas for talking, playing and learning together, with sources you can check.
          </p>
        </div>
      </section>

      <section className="section blog-list-section" aria-label="Articles">
        <div className="container">
          <div className="post-grid">
            {posts.map((post, i) => (
              <PostCard key={post.slug} post={post} eager={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="blog-guides-title">
        <div className="container narrow">
          <div className="section-head">
            <p className="eyebrow">Choosing a learning toy?</p>
            <h2 id="blog-guides-title">Buying guides and comparisons</h2>
          </div>
          <ul className="link-list">
            {landings.map((l) => (
              <li key={l.path}>
                <Link href={l.path} className="link-arrow">
                  {l.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <JsonLd
        data={ldGraph(
          {
            "@type": "Blog",
            "@id": `${absoluteUrl("/blog")}#blog`,
            name: title,
            description,
            url: absoluteUrl("/blog"),
            inLanguage: "en-IN",
            isPartOf: { "@id": WEBSITE_ID },
            publisher: { "@id": ORG_ID },
            blogPost: posts.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              url: absoluteUrl(`/blog/${p.slug}`),
              datePublished: p.published,
              dateModified: p.updated ?? p.published,
            })),
          },
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        )}
      />
    </>
  );
}
