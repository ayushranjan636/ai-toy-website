import Link from "next/link";
import { Faq, type FaqItem } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { WaitlistSection } from "@/components/WaitlistSection";
import { absoluteUrl, breadcrumbLd, faqLd, ldGraph, pageMetadata, PRODUCT_ID } from "@/lib/seo";
import { discountPct, inr, product, productHref, site } from "@/lib/site";

const p = product.preorder;

export const metadata = pageMetadata({
  title: "Zivoo Pre-order India: Opens 23 Nov 2026 at ₹5,999 (MRP ₹9,999)",
  absoluteTitle: true,
  description:
    "Pre-order Zivoo, the screen-free AI learning toy for kids aged 3-9. Pre-orders open 23 November 2026 in India at ₹5,999, 40% off ₹9,999. Join the free waitlist.",
  path: "/pre-order",
});

const preorderFaqs: FaqItem[] = [
  {
    q: "When do Zivoo pre-orders open?",
    a: `Pre-orders open on ${p.opensLabel}. Waitlist members are emailed first, the moment they open.`,
  },
  {
    q: "How much does Zivoo cost?",
    a: `The introductory pre-order price is ${inr(p.price)}, ${discountPct}% off the regular price of ${inr(p.listPrice)}. The introductory price is valid until ${p.validUntilLabel}.`,
  },
  {
    q: "When will my Zivoo ship?",
    a: `Pre-ordered Zivoo toys ship ${product.ships}. We'll email you with your delivery details.`,
  },
  {
    q: "Where can I get Zivoo?",
    a: "Zivoo is sold in India. Pre-orders open on this website.",
  },
  {
    q: "Is joining the waitlist an order?",
    a: "No. Joining the waitlist is free and doesn't commit you to anything. We'll email you when pre-orders open, and you decide then.",
  },
  {
    q: "What do I need to use Zivoo?",
    a: `Home Wi-Fi and an Android phone for the ${product.app}, which you use to set Zivoo up. After that, your child just says "${product.wakeWord}".`,
  },
];

export default function PreorderPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="preorder-title">
        <div className="hero-wash" aria-hidden="true" />
        <div className="container page-hero-inner">
          <p className="glass-chip">
            <span className="status-dot" aria-hidden="true" /> Pre-orders open {p.opensLabel}
          </p>
          <h1 id="preorder-title">Pre-order Zivoo in India</h1>
          <p className="lede">
            Zivoo, the screen-free AI learning toy for children aged {product.ages.label}, opens for pre-order on{" "}
            {p.opensLabel} at <strong>{inr(p.price)}</strong> <s>{inr(p.listPrice)}</s>, {discountPct}% off until{" "}
            {p.validUntilLabel}. Orders ship {product.ships}.
          </p>
          <div className="actions">
            <a href="#waitlist" className="btn btn-primary">
              Join the free waitlist
            </a>
            <Link href={productHref} className="btn btn-secondary">
              See Zivoo
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="pre-glance-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Pre-order details</p>
            <h2 id="pre-glance-title">Everything about the Zivoo pre-order</h2>
          </div>
          <dl className="glance">
            <div>
              <dt>Pre-orders open</dt>
              <dd>{p.opensLabel}</dd>
            </div>
            <div>
              <dt>Introductory price</dt>
              <dd>
                {inr(p.price)}, {discountPct}% off the regular {inr(p.listPrice)}, until {p.validUntilLabel}
              </dd>
            </div>
            <div>
              <dt>Shipping</dt>
              <dd>Orders ship {product.ships}, within India</dd>
            </div>
            <div>
              <dt>Who it&rsquo;s for</dt>
              <dd>Children aged {product.ages.label}</dd>
            </div>
            <div>
              <dt>What children do</dt>
              <dd>Stories, shlokas, phonics, maths, words and spelling, curious questions, riddles and rhymes</dd>
            </div>
            <div>
              <dt>You&rsquo;ll need</dt>
              <dd>Home Wi-Fi and an Android phone for the {product.app}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="steps-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How it works</p>
            <h2 id="steps-title">From waitlist to your child&rsquo;s first &ldquo;Hey Zivoo&rdquo;</h2>
          </div>
          <ol className="steps">
            <li>
              <span className="step-num">01</span>
              <h3>Join the waitlist</h3>
              <p>Free, and only your email. It isn&rsquo;t an order.</p>
            </li>
            <li>
              <span className="step-num">02</span>
              <h3>Pre-order on {p.opensLabel}</h3>
              <p>We email you first, with the {inr(p.price)} introductory price.</p>
            </li>
            <li>
              <span className="step-num">03</span>
              <h3>Set up and talk</h3>
              <p>Connect Zivoo to Wi-Fi with the {product.app}. Your child says &ldquo;{product.wakeWord}&rdquo;.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="pre-faq-title">
        <div className="container faq-grid">
          <div>
            <p className="eyebrow">Questions</p>
            <h2 id="pre-faq-title">Pre-order questions</h2>
            {site.contactEmail ? (
              <p className="small-note">
                Anything else? <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
              </p>
            ) : null}
          </div>
          <Faq items={preorderFaqs} />
        </div>
      </section>

      <WaitlistSection source="pre-order" />

      <JsonLd
        data={ldGraph(
          {
            "@type": "WebPage",
            "@id": `${absoluteUrl("/pre-order")}#webpage`,
            url: absoluteUrl("/pre-order"),
            name: "Pre-order Zivoo in India",
            about: { "@id": PRODUCT_ID },
            inLanguage: "en-IN",
          },
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Pre-order", path: "/pre-order" },
          ]),
          faqLd(preorderFaqs.filter((f): f is { q: string; a: string } => typeof f.a === "string")),
        )}
      />
    </>
  );
}
