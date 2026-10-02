import type { Metadata } from "next";
import Link from "next/link";
import { coreFaqs, Faq } from "@/components/Faq";
import { FilmPlayer } from "@/components/FilmPlayer";
import { ProductGallery, type GalleryItem } from "@/components/ProductGallery";
import { WaitlistSection } from "@/components/WaitlistSection";
import { ogImage, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Zivoo — the product",
  description:
    "Zivoo is a screen-free, Wi-Fi-connected learning toy in development. See the concept design, planned activities and the companion app concept, and join the pre-order waitlist.",
  alternates: { canonical: "/product/zivoo" },
  openGraph: { title: "Zivoo", url: "/product/zivoo", images: [ogImage] },
};

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

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Zivoo",
  description: site.description,
  brand: { "@type": "Brand", name: "Zivoo" },
  image: [`${site.url}/images/zivoo-front.webp`, `${site.url}/images/zivoo-back.webp`],
  url: `${site.url}/product/zivoo`,
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
    </>
  );
}
