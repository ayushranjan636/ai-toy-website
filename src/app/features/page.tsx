import Link from "next/link";
import { FeatureCards } from "@/components/FeatureCards";
import { HumanDesigned } from "@/components/HumanDesigned";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";
import { WaitlistSection } from "@/components/WaitlistSection";
import { absoluteUrl, breadcrumbLd, ldGraph, pageMetadata, PRODUCT_ID } from "@/lib/seo";
import { product, productHref } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Zivoo Features: Stories, Shlokas, Phonics and Maths by Voice",
  absoluteTitle: true,
  description:
    "Everything Zivoo does: stories with questions, shlokas line by line, a phonics coach, an adaptive maths game, spelling out loud and the Parents app.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="features-title">
        <div className="hero-wash" aria-hidden="true" />
        <div className="container page-hero-inner">
          <p className="glass-chip">
            <span className="status-dot" aria-hidden="true" /> Features
          </p>
          <h1 id="features-title">What Zivoo does</h1>
          <p className="lede">
            Zivoo is a screen-free AI learning toy for children aged {product.ages.label}. Every activity happens by
            talking and listening: stories, shlokas, phonics, maths, words and spelling, and the questions children
            never stop asking.
          </p>
        </div>
      </section>

      <HumanDesigned id="features-human-title" tint />

      {/* Stories */}
      <section className="section" aria-labelledby="stories-title">
        <div className="container split split-reverse">
          <Photo
            src="/images/story-time.webp"
            alt="A parent and child lying on a bed in the evening, smiling as they listen to Zivoo on the bedside table."
            width={1536}
            height={1024}
            sizes="(min-width: 900px) 55vw, 100vw"
            tag="Illustration"
          />
          <div className="split-copy">
            <p className="eyebrow">Stories and story talk</p>
            <h2 id="stories-title">Stories to listen to, shape and talk about.</h2>
            <p>
              Zivoo tells built-in stories with feeling, its voice changing with the mood of each line. Ask for a story
              about anything, a dinosaur who&rsquo;s afraid of the dark or a cat who wants to fly, and Zivoo makes one
              up. Afterwards it asks a few gentle questions about what happened and why.
            </p>
            <ul className="quote-list">
              <li>&ldquo;Hey Zivoo, tell me a bedtime story.&rdquo;</li>
              <li>&ldquo;How do you think the bear felt when the rain started?&rdquo;</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Shlokas */}
      <section className="section section-tint" aria-labelledby="shlokas-title">
        <div className="container narrow">
          <div className="section-head">
            <p className="eyebrow">Shlokas</p>
            <h2 id="shlokas-title">Shlokas, learnt line by line, with their meaning.</h2>
          </div>
          <p>
            Zivoo knows nine well-loved shlokas and mantras, including the Ganesha shloka and the Gayatri mantra. Your
            child can listen to a shloka, ask what it means and get a simple explanation in English, or learn it with{" "}
            <strong>repeat-after-me</strong>: Zivoo says a line, your child says it back, and they move on together.
          </p>
          <ul className="quote-list">
            <li>&ldquo;Hey Zivoo, teach me the Ganesha shloka.&rdquo;</li>
            <li>&ldquo;What does the Gayatri mantra mean?&rdquo;</li>
          </ul>
          <p className="small-note">
            <Link href="/blog/shlokas-for-kids">Shlokas for kids: a parent&rsquo;s guide</Link>
          </p>
        </div>
      </section>

      {/* Phonics */}
      <section className="section" aria-labelledby="phonics-title">
        <div className="container narrow">
          <div className="section-head">
            <p className="eyebrow">Phonics</p>
            <h2 id="phonics-title">A phonics coach that listens to each sound.</h2>
          </div>
          <dl className="three-ways">
            <div className="glass">
              <dt>Blend</dt>
              <dd>Zivoo says the sounds, /k/ /a/ /t/, and your child puts them together into a word: cat.</dd>
            </div>
            <div className="glass">
              <dt>Segment</dt>
              <dd>Your child breaks a word into its sounds, the step before spelling it.</dd>
            </div>
            <div className="glass">
              <dt>Say</dt>
              <dd>Zivoo models a sound and listens as your child says it back.</dd>
            </div>
          </dl>
          <p className="small-note">{product.phonicsNote}</p>
        </div>
      </section>

      {/* Maths */}
      <section className="section section-tint" aria-labelledby="maths-title">
        <div className="container split">
          <div className="split-copy">
            <p className="eyebrow">Maths</p>
            <h2 id="maths-title">A maths game that grows with your child.</h2>
            <p>
              Zivoo&rsquo;s maths game starts at your child&rsquo;s level and gets harder as they improve: counting, then
              adding, taking away and times tables. When an answer is wrong, Zivoo gives a hint rather than the answer,
              and progress is saved for next time. Children can also just ask: &ldquo;What is 7 plus 5?&rdquo;,
              &ldquo;Count backwards from 10&rdquo;, &ldquo;How many sides does a hexagon have?&rdquo;
            </p>
            <ul className="quote-list">
              <li>&ldquo;Hey Zivoo, let&rsquo;s play maths.&rdquo;</li>
              <li>&ldquo;Four ducks, and one flies away. How many are left?&rdquo;</li>
            </ul>
          </div>
          <Photo
            src="/images/counting-practice.webp"
            alt="A girl at a table holding up three fingers while talking to Zivoo during a counting activity."
            width={1536}
            height={1024}
            sizes="(min-width: 900px) 55vw, 100vw"
            tag="Illustration"
          />
        </div>
      </section>

      {/* Words */}
      <section className="section" aria-labelledby="words-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Words and spelling</p>
            <h2 id="words-title">Saying, spelling and understanding are different things.</h2>
          </div>

          <dl className="three-ways">
            <div className="glass">
              <dt>Pronunciation</dt>
              <dd>Zivoo models how a word sounds and invites your child to say it back.</dd>
            </div>
            <div className="glass">
              <dt>Spelling</dt>
              <dd>
                &ldquo;How do you spell elephant?&rdquo; Letters are spoken one at a time, so the practice is about the
                letters, not just the sound.
              </dd>
            </div>
            <div className="glass">
              <dt>Understanding</dt>
              <dd>Zivoo explains what a word means, then asks your child to use it in a sentence of their own.</dd>
            </div>
          </dl>

          <p className="honest-note">
            <strong>A note on speech recognition.</strong> Young voices, accents and background noise can sometimes lead
            Zivoo to mishear. It&rsquo;s a patient practice partner, not an exam.
          </p>
        </div>
      </section>

      {/* Curious questions + play */}
      <section className="section section-tint" aria-labelledby="curious-title">
        <div className="container narrow">
          <div className="section-head">
            <p className="eyebrow">Curious questions, play and feelings</p>
            <h2 id="curious-title">An answer for every &ldquo;why?&rdquo;, and a question back.</h2>
          </div>
          <p>
            &ldquo;Why is the sky blue?&rdquo; Zivoo answers in a sentence or two a child can follow, then asks what they
            think, so a question becomes a conversation. It also tells riddles, knock-knock jokes, rhymes and fun facts,
            makes animal sounds and sings. If your child says they feel sad, scared, cross or bored, Zivoo replies
            kindly and can lead a calm breathing exercise or a wiggle break.
          </p>
        </div>
      </section>

      {/* Parent app + Wi-Fi */}
      <section className="section" aria-labelledby="app-title">
        <div className="container split">
          <div className="split-copy">
            <p className="eyebrow">Zivoo Parents app</p>
            <h2 id="app-title">You choose. Zivoo connects.</h2>
            <p>
              The {product.app} sets Zivoo up on your home Wi-Fi, starts a story, shloka, phonics or maths session with
              one tap, sets the volume and the loudest volume allowed, and shows your child&rsquo;s progress over time.
              Zivoo doesn&rsquo;t save recordings of your child&rsquo;s voice; the app shows what was practised, never
              recordings.
            </p>
            <p>
              Once switched on, Zivoo listens for &ldquo;{product.wakeWord}&rdquo;. It speaks English and runs up to 50
              hours on a full charge. It uses home Wi-Fi to hold conversations.
            </p>
            <p className="small-note">
              <Link href="/safety">How Zivoo keeps children safe</Link>
            </p>
          </div>
          <Photo
            src="/images/parent-app.webp"
            alt="Two parents looking at the Zivoo Parents app on a phone, with Zivoo on the table."
            width={1536}
            height={1024}
            sizes="(min-width: 900px) 55vw, 100vw"
            tag="Illustration"
          />
        </div>
      </section>

      {/* Hardware */}
      <section className="section section-tint" aria-labelledby="hardware-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The toy itself</p>
            <h2 id="hardware-title">Talk button, mic switch, 50-hour battery.</h2>
            <p>
              {product.controls}. {product.charging}, up to 50 hours per charge. {product.size}. It needs{" "}
              {product.wifi.toLowerCase()} to talk.
            </p>
          </div>
          <FeatureCards keys={["hey", "privacy", "battery", "size"]} sizes="(min-width: 700px) 50vw, 100vw" />
        </div>
      </section>

      <section className="section" aria-label="Next steps">
        <div className="container narrow">
          <p className="section-link">
            <Link href={productHref} className="link-arrow">
              View Zivoo: price, photos and specs
            </Link>
          </p>
        </div>
      </section>

      <WaitlistSection source="features" />

      <JsonLd
        data={ldGraph(
          {
            "@type": "WebPage",
            "@id": `${absoluteUrl("/features")}#webpage`,
            url: absoluteUrl("/features"),
            name: "Zivoo features",
            about: { "@id": PRODUCT_ID },
            inLanguage: "en-IN",
          },
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Features", path: "/features" },
          ]),
        )}
      />
    </>
  );
}
