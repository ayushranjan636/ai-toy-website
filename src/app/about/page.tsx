import type { Metadata } from "next";
import Link from "next/link";
import { AssetPlaceholder } from "@/components/AssetPlaceholder";
import { Photo } from "@/components/Photo";
import { WaitlistSection } from "@/components/WaitlistSection";
import { ogImage, productHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description:
    "We're developing Zivoo, a screen-free learning toy that helps children practise and explore through conversation.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Zivoo", url: "/about", images: [ogImage] },
};

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
              <p>The app is planned so you choose what Zivoo offers.</p>
            </li>
            <li>
              <h3>Honest about limits</h3>
              <p>A practice partner, not a test, and clear about what&rsquo;s still changing.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="team-title">
        <div className="container split">
          <div className="split-copy">
            <h2 id="team-title">The people behind Zivoo</h2>
            <p>We&rsquo;ll introduce our team here soon.</p>
            <Link href={productHref} className="link-arrow">
              See the current Zivoo design
            </Link>
          </div>
          <AssetPlaceholder ratio="3 / 2" label="Team photograph" />
        </div>
      </section>

      <WaitlistSection source="about" />
    </>
  );
}
