import Link from "next/link";
import { Faq, type FaqItem } from "@/components/Faq";
import { FeatureCard } from "@/components/FeatureCards";
import { JsonLd } from "@/components/JsonLd";
import { WaitlistSection } from "@/components/WaitlistSection";
import { absoluteUrl, breadcrumbLd, faqLd, ldGraph, ORG_ID, pageMetadata, PRODUCT_ID } from "@/lib/seo";
import { product, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Is Zivoo safe for kids? Child safety and privacy, explained",
  absoluteTitle: true,
  description:
    "How Zivoo keeps children safe: child-only design, safety checks on every reply, no saved voice recordings, no personal details asked, and parent controls in the app.",
  path: "/safety",
});

const safetyFaqs: FaqItem[] = [
  {
    q: "Does Zivoo record my child?",
    a: `Zivoo doesn't save recordings of your child's voice. Speech is used to understand and answer, then discarded. The ${product.app} shows what was practised, never recordings.`,
  },
  {
    q: "When does Zivoo respond?",
    a: `Zivoo responds after your child says "${product.wakeWord}".`,
  },
  {
    q: "Can Zivoo say something inappropriate?",
    a: "Zivoo is built to prevent it. Grown-up topics, unkind words and dangerous activities get gentle, fixed replies, and every other reply is checked before it is spoken. No filter is perfect, so we recommend a grown-up nearby, especially for younger children.",
  },
  {
    q: "Will Zivoo ask my child for personal information?",
    a: "Never. If a child mentions details such as a phone number or address, they are removed before the question is processed.",
  },
  {
    q: "What does Zivoo do if a child says something worrying?",
    a: "If a child says someone is hurting them, that they want to hurt themselves, or describes an emergency, Zivoo always answers calmly that it's not their fault and to tell a grown-up they trust now.",
  },
  {
    q: "What can parents control?",
    a: `In the ${product.app} you can start activities, set the volume and the loudest volume allowed, and see your child's progress. Zivoo never goes above your volume limit.`,
  },
];

export default function SafetyPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="safety-title">
        <div className="hero-wash" aria-hidden="true" />
        <div className="container page-hero-inner">
          <p className="eyebrow">Safety and privacy</p>
          <h1 id="safety-title">How Zivoo keeps children safe</h1>
          <p className="lede">
            Zivoo is made only for children aged {product.ages.label}. Every answer passes child-safety checks before
            it is spoken, recordings of your child&rsquo;s voice aren&rsquo;t saved, and parents stay in control.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="layers-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Safety, in layers</p>
            <h2 id="layers-title">Five layers between a question and an answer</h2>
          </div>
          <ol className="principles">
            <li>
              <h3>1. Instant child-safety replies</h3>
              <p>
                Grown-up topics, dangerous activities (fire, knives, sockets, medicine), unkind words and secrets get
                gentle, fixed replies straight away.
              </p>
            </li>
            <li>
              <h3>2. Personal details removed</h3>
              <p>Phone numbers, emails and addresses a child mentions are removed before a question is processed.</p>
            </li>
            <li>
              <h3>3. Content moderation</h3>
              <p>Questions and answers are screened by a moderation check; anything flagged is thrown away.</p>
            </li>
            <li>
              <h3>4. Every sentence checked</h3>
              <p>Each sentence is checked before Zivoo speaks it: no links, no unsafe words, never asking for personal details.</p>
            </li>
            <li>
              <h3>5. A gentle, honest character</h3>
              <p>
                Zivoo speaks like a patient teacher, says it is a toy, not a person, keeps no secrets with children,
                and says &ldquo;ask a grown-up&rdquo; for health, danger and big topics.
              </p>
            </li>
          </ol>
          <p className="honest-note">
            <strong>Our honest note.</strong> Safety checks reduce risk; they can&rsquo;t replace a grown-up. We
            recommend Zivoo is used where a parent or carer is nearby.
          </p>
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="privacy-title">
        <div className="container narrow">
          <div className="section-head">
            <p className="eyebrow">Privacy</p>
            <h2 id="privacy-title">Your child&rsquo;s voice stays theirs</h2>
          </div>
          <ul className="quote-list">
            <li>A physical microphone switch on the back: slide to mute, slide back to talk.</li>
            <li>No recordings of your child&rsquo;s voice are saved.</li>
            <li>The {product.app} shows what was practised, never recordings.</li>
            <li>The waitlist asks only for your email (and first name if you like), and nothing about your children.</li>
          </ul>
          <FeatureCard k="privacy" sizes="(min-width: 900px) 720px, 100vw" />
          {site.privacyUrl ? (
            <p>
              Read the full <a href={site.privacyUrl}>privacy policy</a>.
            </p>
          ) : null}
          <p className="small-note">
            Choosing any talking toy? Use our{" "}
            <Link href="/blog/how-to-choose-a-screen-free-educational-toy">checklist of privacy questions to ask</Link>.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="safety-faq-title">
        <div className="container faq-grid">
          <div>
            <p className="eyebrow">Questions</p>
            <h2 id="safety-faq-title">Safety questions parents ask</h2>
          </div>
          <Faq items={safetyFaqs} />
        </div>
      </section>

      <WaitlistSection source="safety" />

      <JsonLd
        data={ldGraph(
          {
            "@type": "WebPage",
            "@id": `${absoluteUrl("/safety")}#webpage`,
            url: absoluteUrl("/safety"),
            name: "How Zivoo keeps children safe",
            about: { "@id": PRODUCT_ID },
            publisher: { "@id": ORG_ID },
            inLanguage: "en-IN",
          },
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Safety and privacy", path: "/safety" },
          ]),
          faqLd(safetyFaqs.filter((f): f is { q: string; a: string } => typeof f.a === "string")),
        )}
      />
    </>
  );
}
