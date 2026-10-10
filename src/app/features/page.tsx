import Link from "next/link";
import { Photo } from "@/components/Photo";
import { WaitlistSection } from "@/components/WaitlistSection";
import { pageMetadata } from "@/lib/seo";
import { productHref } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Zivoo features: voice-based spelling, maths and story activities",
  absoluteTitle: true,
  description:
    "How Zivoo's voice-based activities are designed to work: word practice, spoken spelling, basic maths, storytelling, story reflection and the parent app. Needs Wi-Fi.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="features-title">
        <div className="hero-wash" aria-hidden="true" />
        <div className="container page-hero-inner">
          <p className="glass-chip">
            <span className="status-dot" aria-hidden="true" /> Planned capabilities
          </p>
          <h1 id="features-title">What Zivoo is being designed to do</h1>
          <p className="lede">
            Every activity happens by talking and listening. These are planned, and details may change before launch.
          </p>
        </div>
      </section>

      {/* Words */}
      <section className="section" aria-labelledby="words-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Word practice</p>
            <h2 id="words-title">Saying, spelling and understanding are different things.</h2>
          </div>

          <dl className="three-ways">
            <div className="glass">
              <dt>Pronunciation</dt>
              <dd>
                Zivoo can model how a word sounds and invite your child to say it back. It isn&rsquo;t a pronunciation
                test.
              </dd>
            </div>
            <div className="glass">
              <dt>Spelling</dt>
              <dd>Letters are asked for one at a time, so the check is about the letters, not how the word sounded.</dd>
            </div>
            <div className="glass">
              <dt>Understanding</dt>
              <dd>Using a word in their own sentence shows understanding better than repeating it does.</dd>
            </div>
          </dl>

          <p className="honest-note">
            <strong>A note on speech recognition.</strong> When Zivoo recognises a word, it has matched what it heard to
            a word it knows. That doesn&rsquo;t confirm the word was pronounced correctly. Young voices, accents and
            background noise can all lead it to mishear, so treat it as a practice partner, not an assessment.
          </p>
        </div>
      </section>

      {/* Spelling and maths */}
      <section className="section section-tint" aria-labelledby="maths-title">
        <div className="container split">
          <div className="split-copy">
            <p className="eyebrow">Spelling and basic maths</p>
            <h2 id="maths-title">Letters and numbers, out loud.</h2>
            <p>
              Your child spells a word letter by letter, or answers a short counting, adding or taking-away question in
              everyday language.
            </p>
            <ul className="quote-list">
              <li>&ldquo;Can you spell <em>frog</em>?&rdquo;</li>
              <li>&ldquo;Four ducks, and one flies away. How many are left?&rdquo;</li>
            </ul>
            <p className="small-note">Some letters sound alike, like B and D. We&rsquo;re designing spelling with that in mind.</p>
          </div>
          <Photo
            src="/images/counting-practice.webp"
            alt="A girl at a table holding up three fingers while talking to Zivoo during a counting activity."
            width={1536}
            height={1024}
            sizes="(min-width: 900px) 55vw, 100vw"
            tag="Concept image"
          />
        </div>
      </section>

      {/* Stories */}
      <section className="section" aria-labelledby="stories-title">
        <div className="container split split-reverse">
          <Photo
            src="/images/story-time.webp"
            alt="A parent and child lying on a bed in the evening, smiling as they listen to Zivoo on the bedside table."
            width={1536}
            height={1024}
            sizes="(min-width: 900px) 55vw, 100vw"
            tag="Concept image"
          />
          <div className="split-copy">
            <p className="eyebrow">Storytelling and story reflection</p>
            <h2 id="stories-title">Stories to listen to, shape and talk about.</h2>
            <p>
              Zivoo is designed to tell short stories, sometimes asking what should happen next. Afterwards, story
              reflection asks a few gentle questions about what happened and why.
            </p>
            <ul className="quote-list">
              <li>&ldquo;How do you think the bear felt when the rain started?&rdquo;</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Parent app + Wi-Fi */}
      <section className="section section-tint" aria-labelledby="app-title">
        <div className="container split">
          <div className="split-copy">
            <p className="eyebrow">Parents app and connection</p>
            <h2 id="app-title">You choose. Zivoo connects.</h2>
            <p>
              The Zivoo Parents app is planned for setup, choosing activities and following your child&rsquo;s growth
              and performance. Voice recordings stay on the device temporarily; the app shows insights, not recordings.
              The screens shown are concepts, not the finished app.
            </p>
            <p>
              Once switched on, Zivoo listens for &ldquo;Hey Zivoo&rdquo;. It speaks English first, with more Indian
              languages planned, and is designed to run up to 50 hours on a full charge. It needs home Wi-Fi to hold
              conversations and isn&rsquo;t designed to work offline. Replies can take a
              moment, especially on a slower connection.
            </p>
          </div>
          <Photo
            src="/images/parent-app.webp"
            alt="Two parents looking at a concept version of the Zivoo app on a phone, with Zivoo on the table."
            width={1536}
            height={1024}
            sizes="(min-width: 900px) 55vw, 100vw"
            tag="Concept app screen"
          />
        </div>
      </section>

      {/* Future idea */}
      <section className="section" aria-labelledby="future-title">
        <div className="container narrow">
          <div className="future-box glass">
            <p className="future-tag">Future idea · not planned for the first release</p>
            <h2 id="future-title">Activity cards</h2>
            <p>
              We&rsquo;re exploring cards a child could hold up to Zivoo to start a story or activity, using short-range
              NFC. It&rsquo;s only an idea for now and may never be made.
            </p>
          </div>
          <p className="section-link">
            <Link href={productHref} className="link-arrow">
              View the Zivoo product page
            </Link>
          </p>
        </div>
      </section>

      <WaitlistSection source="features" />
    </>
  );
}
