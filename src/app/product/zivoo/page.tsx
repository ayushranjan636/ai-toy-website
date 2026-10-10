import Link from "next/link";
import { coreFaqs, Faq } from "@/components/Faq";
import { FilmPlayer } from "@/components/FilmPlayer";
import { JsonLd } from "@/components/JsonLd";
import { ProductGallery, type GalleryItem } from "@/components/ProductGallery";
import { WaitlistSection } from "@/components/WaitlistSection";
import { absoluteUrl, breadcrumbLd, ldGraph, ORG_ID, pageMetadata, PRODUCT_ID } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Zivoo talking learning toy: design, activities and status",
  absoluteTitle: true,
  description:
    "See Zivoo, a screen-free talking learning toy in development: its design from every angle, planned word, spelling, maths and story activities, and parent app.",
  path: "/product/zivoo",
});

const gallery: GalleryItem[] = [
  {
    kind: "image",
    src: "/images/zivoo-front.webp",
    width: 1165,
    height: 1028,
    cutout: true,
    label: "Front",
    alt: "Front of Zivoo: a rounded teal body with a cream face panel, two eyes and a small smile, a speaker grille on the lower left and a coral button on top.",
    caption: "Front view of the concept design.",
  },
  {
    kind: "image",
    src: "/images/zivoo-back.webp",
    width: 1157,
    height: 1032,
    cutout: true,
    label: "Rear",
    alt: "Back of Zivoo: smooth teal shell with a coral button on top, a small switch beside a microphone symbol, and a large panel across the lower back.",
    caption: "Rear view of the concept design.",
  },
  {
    kind: "image",
    src: "/images/zivoo-side.webp",
    width: 1536,
    height: 1024,
    label: "Side",
    alt: "Side of Zivoo: a rounded teal body with a round speaker grille, the edge of the cream face panel and the coral button on top.",
    caption: "Side view of the concept design.",
  },
  {
    kind: "image",
    src: "/images/zivoo-facing.webp",
    width: 1536,
    height: 1024,
    label: "Detail",
    alt: "Close view of Zivoo's face panel, speaker grille and coral button against a plain cream background.",
    caption: "Concept render showing the face panel, speaker grille and button.",
  },
  {
    kind: "image",
    src: "/images/zivoo-on-shelf.webp",
    width: 1536,
    height: 1024,
    label: "At home",
    alt: "Zivoo on a wooden shelf beside a row of children's books.",
    caption: "Concept render showing Zivoo at home beside books.",
  },
  {
    kind: "image",
    src: "/images/packed-product.webp",
    width: 1536,
    height: 1024,
    label: "Packaging",
    alt: "Concept render of Zivoo packaging: a cream box with the Zivoo logo, and an open box showing the toy in a moulded tray beside a quick start guide.",
    caption: "Packaging concept. Final packaging and box contents aren't confirmed.",
  },
];

/**
 * Product structured data. No price, offer or rating is published because
 * none exists yet. We'll add `offers` (PreOrder) once pre-orders open.
 */
const productLd = {
  "@type": "Product",
  "@id": PRODUCT_ID,
  name: "Zivoo",
  description: site.description,
  category: "Toys & Games > Educational Toys",
  brand: { "@type": "Brand", name: "Zivoo" },
  manufacturer: { "@id": ORG_ID },
  image: gallery.filter((g) => g.kind === "image").map((g) => absoluteUrl(g.src)),
  url: absoluteUrl("/product/zivoo"),
  audience: { "@type": "PeopleAudience", audienceType: "Children and their parents" },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Screen", value: "None (screen-free, voice-based)" },
    { "@type": "PropertyValue", name: "Connectivity", value: "Requires home Wi-Fi" },
    { "@type": "PropertyValue", name: "Planned activities", value: "Word practice, spelling, basic maths, storytelling, story reflection" },
    { "@type": "PropertyValue", name: "Parent app", value: "Planned companion app for setup, activity choice and progress" },
    { "@type": "PropertyValue", name: "Status", value: "In development" },
  ],
  subjectOf: {
    "@type": "VideoObject",
    name: "Meet Zivoo in 25 seconds",
    description: "A short concept film introducing Zivoo, a screen-free learning toy children talk to.",
    thumbnailUrl: absoluteUrl("/video/zivoo-film-poster.webp"),
    contentUrl: absoluteUrl("/video/zivoo-film-1080.mp4"),
    uploadDate: "2026-09-28",
    duration: "PT25S",
  },
};

export default function ProductPage() {
  return (
    <>
      <section className="product-hero" aria-labelledby="product-title">
        <div className="hero-wash" aria-hidden="true" />
        <div className="container product-grid">
          <ProductGallery items={gallery} />

          <div className="product-summary glass">
            <p className="glass-chip">
              <span className="status-dot" aria-hidden="true" /> In development
            </p>
            <h1 id="product-title">Zivoo</h1>
            <p className="product-desc">
              A screen-free learning toy that children talk to, being designed for practising words, spelling, simple
              maths and stories.
            </p>

            <dl className="spec-list">
              <div>
                <dt>Planned activities</dt>
                <dd>Word practice, spelling, basic maths, storytelling, story reflection</dd>
              </div>
              <div>
                <dt>Connection</dt>
                <dd>Requires home Wi-Fi</dd>
              </div>
              <div>
                <dt>Parent app</dt>
                <dd>Companion app concept for setup, activity choice and progress</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>In development. Design and features may change.</dd>
              </div>
            </dl>

            <a href="#waitlist" className="btn btn-primary btn-block">
              Join the pre-order waitlist
            </a>
            <p className="form-note product-note">No payment required. We&rsquo;ll email you when pre-orders open.</p>
            <p className="small-note">
              <Link href="/features">How each activity is designed to work</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section section-film" aria-labelledby="pfilm-title">
        <div className="container">
          <h2 id="pfilm-title" className="section-head">See it in a home</h2>
          <FilmPlayer />
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="pfaq-title">
        <div className="container faq-grid">
          <div>
            <p className="eyebrow">Questions</p>
            <h2 id="pfaq-title">Before you join</h2>
          </div>
          <Faq items={coreFaqs} />
        </div>
      </section>

      <WaitlistSection source="product" />

      <JsonLd
        data={ldGraph(
          productLd,
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Zivoo", path: "/product/zivoo" },
          ]),
        )}
      />
    </>
  );
}
