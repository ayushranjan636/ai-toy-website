import Link from "next/link";
import { coreFaqs, Faq } from "@/components/Faq";
import { FeatureCards } from "@/components/FeatureCards";
import { FilmPlayer } from "@/components/FilmPlayer";
import { HumanDesigned } from "@/components/HumanDesigned";
import { JsonLd } from "@/components/JsonLd";
import { ProductGallery, type GalleryItem } from "@/components/ProductGallery";
import { WaitlistSection } from "@/components/WaitlistSection";
import { breadcrumbLd, ldGraph, pageMetadata, productLd } from "@/lib/seo";
import { discountPct, inr, product } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Zivoo AI Talking Learning Toy for Kids 3-9: ₹5,999 Pre-order",
  absoluteTitle: true,
  description:
    "Zivoo, the screen-free AI talking toy for kids aged 3-9: stories, shlokas, phonics, maths and spelling by voice. ₹5,999 (MRP ₹9,999). Pre-orders open 23 Nov 2026.",
  path: "/product/zivoo",
});

const gallery: GalleryItem[] = [
  {
    kind: "image",
    src: "/images/zivoo-hero.webp",
    width: 1200,
    height: 1200,
    cutout: true,
    label: "Front",
    alt: "Front of Zivoo: a rounded soft-teal body with a cream face panel, two dark eyes and a small smile, a speaker grille on the lower left and a coral talk button on top.",
    caption: "Front view: the face panel, speaker grille and coral talk button.",
  },
  {
    kind: "image",
    src: "/images/zivoo-angle-front-left.webp",
    width: 1200,
    height: 1200,
    cutout: true,
    label: "Three-quarter",
    alt: "Zivoo from the front left: the rounded teal body, cream face panel, speaker grille and coral talk button.",
    caption: "Three-quarter view from the front left.",
  },
  {
    kind: "image",
    src: "/images/zivoo-angle-left.webp",
    width: 1200,
    height: 1200,
    cutout: true,
    label: "Side",
    alt: "Side of Zivoo: a tall rounded teal shape with a round speaker grille and the edge of the cream face panel.",
    caption: "Side view, 9.4 cm deep.",
  },
  {
    kind: "image",
    src: "/images/zivoo-angle-back.webp",
    width: 1200,
    height: 1200,
    cutout: true,
    label: "Back",
    alt: "Back of Zivoo: smooth teal shell with the coral talk button on top, a physical microphone switch, a round back panel and a USB-C charging port near the base.",
    caption: "Back view: the microphone switch and USB-C charging port.",
  },
  {
    kind: "image",
    src: "/images/zivoo-angle-top.webp",
    width: 1200,
    height: 1200,
    cutout: true,
    label: "Top",
    alt: "Zivoo from above: the coral talk button and the small microphone hole on top of the rounded teal body.",
    caption: "From above: the coral talk button and microphone.",
  },
  {
    kind: "image",
    src: "/images/zivoo-feature-hey-zivoo.webp",
    width: 1600,
    height: 1600,
    cutout: true,
    label: "Hey Zivoo",
    alt: "Diagram of Zivoo: microphone on top, a glowing talk button that lights up while Zivoo listens, and a speaker with a warm, friendly voice.",
    caption: "Say “Hey Zivoo” or press the glowing talk button.",
  },
  {
    kind: "image",
    src: "/images/zivoo-feature-privacy.webp",
    width: 1600,
    height: 1600,
    cutout: true,
    label: "Mic switch",
    alt: "Back of Zivoo with a physical microphone switch: slide to mute, slide back to talk.",
    caption: "A physical mic switch you can see: slide to mute.",
  },
  {
    kind: "image",
    src: "/images/zivoo-feature-size.webp",
    width: 1600,
    height: 1600,
    cutout: true,
    label: "Size",
    alt: "Zivoo dimensions: 16 cm wide, 14 cm tall and 9.4 cm deep.",
    caption: "16 × 14 × 9.4 cm: small enough to hug.",
  },
  {
    kind: "image",
    src: "/images/zivoo-on-shelf.webp",
    width: 1536,
    height: 1024,
    label: "At home",
    alt: "Zivoo on a wooden shelf beside a row of children's books.",
    caption: "Zivoo at home beside books.",
  },
  {
    kind: "image",
    src: "/images/packed-product.webp",
    width: 1536,
    height: 1024,
    label: "In the box",
    alt: "Zivoo packaging: a cream box with the Zivoo logo, and an open box showing the toy in a moulded tray beside a quick start guide.",
    caption: "In the box: Zivoo and a quick start guide.",
  },
];

export default function ProductPage() {
  const p = product.preorder;
  return (
    <>
      <section className="product-hero" aria-labelledby="product-title">
        <div className="hero-wash" aria-hidden="true" />
        <div className="container product-grid">
          <ProductGallery items={gallery} />

          <div className="product-summary glass">
            <p className="glass-chip">
              <span className="status-dot" aria-hidden="true" /> Pre-orders open {p.opensLabel}
            </p>
            <h1 id="product-title">Zivoo: screen-free AI learning toy</h1>
            <p className="product-desc">
              A talking learning toy for children aged {product.ages.label}. No screen: children learn stories,
              shlokas, phonics, maths, words and spelling just by talking.
            </p>

            <p className="product-price">
              <strong>{inr(p.price)}</strong> <s>{inr(p.listPrice)}</s>{" "}
              <span>
                Introductory pre-order price, {discountPct}% off until {p.validUntilLabel}. Pre-orders open{" "}
                {p.opensLabel} in India; orders ship {product.ships}.
              </span>
            </p>

            <dl className="spec-list">
              <div>
                <dt>Age</dt>
                <dd>Children aged {product.ages.label}</dd>
              </div>
              <div>
                <dt>Activities</dt>
                <dd>Stories, shlokas, phonics, maths game, words and spelling, curious questions, riddles and rhymes</dd>
              </div>
              <div>
                <dt>Screen</dt>
                <dd>None. Entirely voice-based</dd>
              </div>
              <div>
                <dt>Language</dt>
                <dd>English (shlokas recited in Sanskrit, explained in English)</dd>
              </div>
              <div>
                <dt>Wake word</dt>
                <dd>&ldquo;{product.wakeWord}&rdquo;</dd>
              </div>
              <div>
                <dt>Battery</dt>
                <dd>{product.battery}</dd>
              </div>
              <div>
                <dt>Charging</dt>
                <dd>{product.charging}</dd>
              </div>
              <div>
                <dt>Size</dt>
                <dd>{product.size}</dd>
              </div>
              <div>
                <dt>Controls</dt>
                <dd>{product.controls}</dd>
              </div>
              <div>
                <dt>Connection</dt>
                <dd>{product.wifi}</dd>
              </div>
              <div>
                <dt>Parent app</dt>
                <dd>{product.app}: setup, one-tap activities, volume limit and progress</dd>
              </div>
              <div>
                <dt>Voice recordings</dt>
                <dd>Not saved. Every answer passes child-safety checks</dd>
              </div>
              <div>
                <dt>Learning design</dt>
                <dd>Every activity chosen and designed by people, led by a teacher with 15+ years in the classroom</dd>
              </div>
            </dl>

            <a href="#waitlist" className="btn btn-primary btn-block">
              Join the pre-order waitlist
            </a>
            <p className="form-note product-note">
              Free to join. We&rsquo;ll email you the moment pre-orders open on {p.opensLabel}.
            </p>
            <p className="small-note">
              <Link href="/features">What each activity does</Link> · <Link href="/pre-order">Pre-order details</Link>{" "}
              · <Link href="/safety">Safety and privacy</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="pact-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What&rsquo;s inside</p>
            <h2 id="pact-title">Everything your child can do with Zivoo</h2>
          </div>
          <dl className="glance">
            {product.activities.map((a) => (
              <div key={a.name}>
                <dt>{a.name}</dt>
                <dd>{a.detail}</dd>
              </div>
            ))}
          </dl>
          <p className="small-note">{product.phonicsNote}</p>
        </div>
      </section>

      <HumanDesigned id="product-human-title" tint />

      <section className="section" aria-labelledby="details-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The details</p>
            <h2 id="details-title">Simple on the outside, thoughtful on the inside.</h2>
          </div>
          <FeatureCards keys={["meet", "hey", "practice", "privacy", "battery", "size"]} />
        </div>
      </section>

      <section className="section section-film" aria-labelledby="pfilm-title">
        <div className="container">
          <h2 id="pfilm-title" className="section-head">Watch the Zivoo launch film</h2>
          <FilmPlayer />
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="pfaq-title">
        <div className="container faq-grid">
          <div>
            <p className="eyebrow">Questions</p>
            <h2 id="pfaq-title">Before you pre-order</h2>
          </div>
          <Faq items={coreFaqs} />
        </div>
      </section>

      <WaitlistSection source="product" />

      <JsonLd
        data={ldGraph(
          productLd(gallery.flatMap((g) => (g.kind === "image" ? [g.src] : []))),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Zivoo", path: "/product/zivoo" },
          ]),
        )}
      />
    </>
  );
}
