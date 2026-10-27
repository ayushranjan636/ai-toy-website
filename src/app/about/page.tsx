import Link from "next/link";
import { AssetPlaceholder } from "@/components/AssetPlaceholder";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";
import { WaitlistSection } from "@/components/WaitlistSection";
import { absoluteUrl, FOUNDER_ID, ldGraph, ORG_ID, pageMetadata } from "@/lib/seo";
import { product, productHref, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Zivoo: learning through conversation, not screens",
  absoluteTitle: true,
  description:
    "Meet the team behind Zivoo. Founded by S. V. Bharathi, a teacher with 15+ years of classroom experience, Zivoo helps children aged 3 to 9 learn by talking.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="about-title">
        <div className="hero-wash" aria-hidden="true" />
        <div className="container page-hero-inner">
          <p className="eyebrow">About us</p>
          <h1 id="about-title">A toy children learn with by talking.</h1>
          <p className="lede">
            We&rsquo;re developing Zivoo to give children a patient partner for practising words,
            numbers and stories, through conversation rather than a screen.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="why-title">
        <div className="container split">
          <div className="split-copy">
            <p className="eyebrow">Why conversation</p>
            <h2 id="why-title">Children learn a lot by talking things through.</h2>
            <p>
              Saying a new word aloud, working out a sum or wondering why a character did something are natural ways to
              practise. Zivoo is designed to join in, at a child&rsquo;s own pace, without a screen pulling their
              attention away.
            </p>
          </div>
          <Photo
            src="/images/design-sketches.webp"
            alt="Pencil sketches of Zivoo in a notebook beside a Zivoo model, colour swatches in teal, cream and coral, and a card reading Zivoo design concept."
            width={1536}
            height={1024}
            sizes="(min-width: 900px) 55vw, 100vw"
            tag="Design concept"
          />
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="approach-title">
        <div className="container">
          <h2 id="approach-title" className="section-head">How we&rsquo;re approaching it</h2>
          <ol className="principles">
            <li>
              <h3>Speaking first</h3>
              <p>Every activity is built around talking and listening.</p>
            </li>
            <li>
              <h3>Parents in the picture</h3>
              <p>The {product.app} is planned so you choose what Zivoo offers and see how your child grows.</p>
            </li>
            <li>
              <h3>Honest about limits</h3>
              <p>A practice partner, not a test, and clear about what&rsquo;s still changing.</p>
            </li>
          </ol>
        </div>
      </section>

      <section id="founder" className="section" aria-labelledby="team-title">
        <div className="container split">
          <div className="split-copy">
            <p className="eyebrow">Founder</p>
            <h2 id="team-title">Built by a teacher.</h2>
            <p>
              Zivoo was founded by <strong>S. V. Bharathi</strong>, who has spent more than 15 years teaching. Years in
              the classroom show how much children learn when someone patiently listens, asks a follow-up question and
              lets them answer in their own words.
            </p>
            <p>
              Zivoo is built around that idea. It&rsquo;s designed for children aged {product.ages.label} and focuses on
              the everyday things teachers practise with children: new words, spelling, early maths and talking about
              stories.
            </p>
            {site.contactEmail ? (
              <p>
                Get in touch: <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
              </p>
            ) : null}
            <Link href={productHref} className="link-arrow">
              See the current Zivoo design
            </Link>
          </div>
          <AssetPlaceholder ratio="3 / 2" label="Founder photograph" />
        </div>
      </section>

      <WaitlistSection source="about" />
      <JsonLd
        data={ldGraph(
          {
            "@type": "AboutPage",
            url: absoluteUrl("/about"),
            name: "About Zivoo",
            about: { "@id": ORG_ID },
            mainEntity: { "@id": FOUNDER_ID },
            inLanguage: "en-GB",
          },
        )}
      />
    </>
  );
}
