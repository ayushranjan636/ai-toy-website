import Image from "next/image";
import Link from "next/link";
import { BlockView } from "@/components/Blocks";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { formatDate } from "@/components/PostCard";
import { RichText } from "@/components/RichText";
import { WaitlistSection } from "@/components/WaitlistSection";
import { landings, type LandingWithPath } from "@/content/landing";
import { plain } from "@/content/blog/types";
import { absoluteUrl, breadcrumbLd, faqLd, ldGraph, ORG_ID, pageMetadata, PRODUCT_ID, WEBSITE_ID } from "@/lib/seo";
import { inr, product, productHref } from "@/lib/site";

export function landingMetadata(l: LandingWithPath) {
  return pageMetadata({
    title: l.seoTitle,
    absoluteTitle: true,
    description: l.description,
    path: l.path,
    type: "article",
    publishedTime: l.published,
    modifiedTime: l.updated ?? l.published,
    tags: l.keywords,
    image: { url: l.image.src, width: l.image.width, height: l.image.height, alt: l.image.alt },
  });
}

/** Buying guide / comparison page. One H1, a direct answer, key points, sections, CTA, FAQ. */
export function LandingView({ landing: l }: { landing: LandingWithPath }) {
  const url = absoluteUrl(l.path);
  const related = landings.filter((x) => x.path !== l.path).slice(0, 6);
  const crumb = l.kind === "compare" ? "Comparisons" : "Buying guides";

  const pageLd = {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: l.title,
    description: l.description,
    abstract: plain(l.answer),
    image: absoluteUrl(l.image.src),
    datePublished: l.published,
    dateModified: l.updated ?? l.published,
    inLanguage: "en-IN",
    keywords: l.keywords.join(", "),
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    isPartOf: { "@id": WEBSITE_ID },
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    about: { "@id": PRODUCT_ID },
    mentions: { "@id": PRODUCT_ID },
    speakable: { "@type": "SpeakableSpecification", cssSelector: [".post-answer", ".post-takeaways"] },
  };

  return (
    <>
      <article className="post" aria-labelledby="landing-title">
        <header className="post-header">
          <div className="hero-wash" aria-hidden="true" />
          <div className="container post-header-inner">
            <nav aria-label="Breadcrumb" className="breadcrumbs">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li aria-current="page">{crumb}</li>
              </ol>
            </nav>
            <p className="eyebrow">{l.eyebrow}</p>
            <h1 id="landing-title">{l.title}</h1>
            <p className="post-meta">
              <span>By the Zivoo team</span>
              <span aria-hidden="true">·</span>
              <span>
                Updated <time dateTime={l.updated ?? l.published}>{formatDate(l.updated ?? l.published)}</time>
              </span>
            </p>
          </div>
        </header>

        <div className="container post-layout">
          <div className="post-main">
            <div className="post-answer glass">
              <p className="post-answer-label">The short answer</p>
              <p>
                <RichText text={l.answer} />
              </p>
            </div>

            <figure className="post-figure">
              <div className="post-figure-frame">
                <Image
                  src={l.image.src}
                  alt={l.image.alt}
                  width={l.image.width}
                  height={l.image.height}
                  sizes="(min-width: 1000px) 720px, 100vw"
                  loading="eager"
                  fetchPriority="high"
                />
                <span className="glass-tag">Illustration</span>
              </div>
            </figure>

            <section className="post-takeaways" aria-labelledby="takeaways-title">
              <h2 id="takeaways-title">Key points</h2>
              <ul>
                {l.highlights.map((t) => (
                  <li key={t}>
                    <RichText text={t} />
                  </li>
                ))}
              </ul>
            </section>

            <div className="prose">
              {l.sections.map((section) => (
                <section key={section.id} id={section.id} aria-labelledby={`${section.id}-h`}>
                  <h2 id={`${section.id}-h`}>{section.heading}</h2>
                  {section.blocks.map((block, i) => (
                    <BlockView key={i} block={block} />
                  ))}
                </section>
              ))}
            </div>

            <aside className="post-callout" aria-labelledby="landing-cta">
              <p className="post-callout-title" id="landing-cta">
                Zivoo at a glance
              </p>
              <p>
                Screen-free AI learning toy for ages {product.ages.label}: stories, shlokas, phonics, maths, words and
                spelling, all by voice. {inr(product.preorder.price)} <s>{inr(product.preorder.listPrice)}</s>,
                pre-orders open {product.preorder.opensLabel} in India. <Link href={productHref}>See Zivoo</Link> ·{" "}
                <a href="#waitlist">Join the waitlist</a>
              </p>
            </aside>

            <section className="post-faq" aria-labelledby="landing-faq-title">
              <h2 id="landing-faq-title">Frequently asked questions</h2>
              <Faq items={l.faqs} />
            </section>
          </div>

          <aside className="post-aside" aria-label="On this page">
            <nav className="post-toc">
              <p className="post-toc-title">On this page</p>
              <ol>
                {l.sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>{s.heading}</a>
                  </li>
                ))}
                <li>
                  <a href="#landing-faq-title">FAQs</a>
                </li>
              </ol>
            </nav>
          </aside>
        </div>
      </article>

      <section className="section section-tint" aria-labelledby="more-guides-title">
        <div className="container narrow">
          <div className="section-head">
            <p className="eyebrow">Keep reading</p>
            <h2 id="more-guides-title">More buying guides and comparisons</h2>
          </div>
          <ul className="link-list">
            {related.map((r) => (
              <li key={r.path}>
                <Link href={r.path} className="link-arrow">
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <WaitlistSection source={`${l.kind}:${l.slug}`} />

      <JsonLd
        data={ldGraph(
          pageLd,
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: l.title, path: l.path },
          ]),
          faqLd(l.faqs.map((f) => ({ q: f.q, a: plain(f.a) }))),
        )}
      />
    </>
  );
}
