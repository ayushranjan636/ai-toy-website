import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { formatDate, PostCard } from "@/components/PostCard";
import { RichText } from "@/components/RichText";
import { BlockView } from "@/components/Blocks";
import { WaitlistSection } from "@/components/WaitlistSection";
import { getPost, posts, relatedPosts } from "@/content/blog";
import { plain, readingMinutes, wordCount } from "@/content/blog/types";
import { absoluteUrl, breadcrumbLd, faqLd, ldGraph, ORG_ID, pageMetadata, PRODUCT_ID, WEBSITE_ID } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.seoTitle,
    absoluteTitle: true,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.published,
    modifiedTime: post.updated ?? post.published,
    tags: post.keywords,
    image: { url: post.image.src, width: post.image.width, height: post.image.height, alt: post.image.alt },
  });
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = absoluteUrl(`/blog/${post.slug}`);
  const minutes = readingMinutes(post);
  const related = relatedPosts(post);

  const articleLd = {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    abstract: post.answer,
    image: absoluteUrl(post.image.src),
    datePublished: post.published,
    dateModified: post.updated ?? post.published,
    inLanguage: "en-IN",
    articleSection: post.category,
    keywords: post.keywords.join(", "),
    wordCount: wordCount(post),
    timeRequired: `PT${minutes}M`,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    isPartOf: { "@id": WEBSITE_ID },
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    mentions: { "@id": PRODUCT_ID },
    audience: { "@type": "PeopleAudience", audienceType: "Parents and carers of young children" },
    ...(post.sources.length ? { citation: post.sources.map((s) => ({ "@type": "CreativeWork", name: s.label, url: s.url })) } : {}),
    speakable: { "@type": "SpeakableSpecification", cssSelector: [".post-answer", ".post-takeaways"] },
  };

  return (
    <>
      <article className="post" aria-labelledby="post-title">
        <header className="post-header">
          <div className="hero-wash" aria-hidden="true" />
          <div className="container post-header-inner">
            <nav aria-label="Breadcrumb" className="breadcrumbs">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li aria-current="page">{post.category}</li>
              </ol>
            </nav>
            <h1 id="post-title">{post.title}</h1>
            <p className="post-meta">
              <span>By the Zivoo team</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.published}>{formatDate(post.published)}</time>
              {post.updated ? (
                <>
                  <span aria-hidden="true">·</span>
                  <span>
                    Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                  </span>
                </>
              ) : null}
              <span aria-hidden="true">·</span>
              <span>{minutes} min read</span>
            </p>
          </div>
        </header>

        <div className="container post-layout">
          <div className="post-main">
            <div className="post-answer glass">
              <p className="post-answer-label">The short answer</p>
              <p>{post.answer}</p>
            </div>

            <figure className="post-figure">
              <div className="post-figure-frame">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  width={post.image.width}
                  height={post.image.height}
                  sizes="(min-width: 1000px) 720px, 100vw"
                  loading="eager"
                  fetchPriority="high"
                />
                <span className="glass-tag">Illustration</span>
              </div>
            </figure>

            <section className="post-takeaways" aria-labelledby="takeaways-title">
              <h2 id="takeaways-title">Key takeaways</h2>
              <ul>
                {post.takeaways.map((t) => (
                  <li key={t}>
                    <RichText text={t} />
                  </li>
                ))}
              </ul>
            </section>

            <div className="prose">
              {post.sections.map((section) => (
                <section key={section.id} id={section.id} aria-labelledby={`${section.id}-h`}>
                  <h2 id={`${section.id}-h`}>{section.heading}</h2>
                  {section.blocks.map((block, i) => (
                    <BlockView key={i} block={block} />
                  ))}
                </section>
              ))}
            </div>

            <section className="post-faq" aria-labelledby="post-faq-title">
              <h2 id="post-faq-title">Frequently asked questions</h2>
              <Faq items={post.faqs} />
            </section>

            {post.sources.length ? (
              <section className="post-sources" aria-labelledby="sources-title">
                <h2 id="sources-title">Sources</h2>
                <ol>
                  {post.sources.map((s) => (
                    <li key={s.url}>
                      <a href={s.url} target="_blank" rel="noopener noreferrer">
                        {s.label}
                        <span className="visually-hidden"> (opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </section>
            ) : null}

            <p className="post-disclaimer">
              This article is general information for parents, not medical or developmental advice. If you have concerns
              about your child&rsquo;s development, speak to your health visitor, GP or paediatrician.
            </p>
          </div>

          <aside className="post-aside" aria-label="On this page">
            <nav className="post-toc">
              <p className="post-toc-title">On this page</p>
              <ol>
                {post.sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>{s.heading}</a>
                  </li>
                ))}
                <li>
                  <a href="#post-faq-title">FAQs</a>
                </li>
              </ol>
            </nav>
          </aside>
        </div>
      </article>

      <section className="section section-tint" aria-labelledby="related-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Keep reading</p>
            <h2 id="related-title">More guides for parents</h2>
          </div>
          <div className="post-grid">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} headingLevel="h3" />
            ))}
          </div>
        </div>
      </section>

      <WaitlistSection source={`blog:${post.slug}`} />

      <JsonLd
        data={ldGraph(
          articleLd,
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          faqLd(post.faqs.map((f) => ({ q: f.q, a: plain(f.a) }))),
        )}
      />
    </>
  );
}
