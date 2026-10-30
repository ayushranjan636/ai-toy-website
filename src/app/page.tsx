import Image from "next/image";
import Link from "next/link";
import { coreFaqs, Faq, type FaqItem } from "@/components/Faq";
import { FeatureCards } from "@/components/FeatureCards";
import { FilmPlayer } from "@/components/FilmPlayer";
import { HumanDesigned } from "@/components/HumanDesigned";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";
import { PostCard } from "@/components/PostCard";
import { WaitlistSection } from "@/components/WaitlistSection";
import { posts } from "@/content/blog";
import { landings } from "@/content/landing";
import { faqLd, ldGraph, pageMetadata, PRODUCT_ID, productLd, WEBSITE_ID } from "@/lib/seo";
import { discountPct, inr, product, productHref, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Zivoo: Screen-Free AI Learning Toy for Kids Aged 3-9 in India",
  absoluteTitle: true,
  description:
    "Zivoo is a screen-free AI talking toy for kids aged 3-9: stories, shlokas, phonics, maths and spelling by voice. Pre-orders open 23 Nov 2026 at ₹5,999 in India.",
  path: "/",
});

/** Plain-language questions people actually search for, answered first. */
const homeFaqs: FaqItem[] = [
  {
    q: "What is a screen-free learning toy?",
    a: "A screen-free learning toy helps children practise skills like language, counting or storytelling without a display to watch or tap. Zivoo does this through spoken conversation: your child talks, Zivoo answers, and then asks something back.",
  },
  {
    q: "How is Zivoo different from a learning app on a tablet?",
    a: "There's no screen. Children use their voice and their imagination instead of watching or tapping, and parents choose activities and follow progress in the separate Zivoo Parents app.",
  },
  ...coreFaqs,
];

const activities = [
  { name: "Stories", example: "“Why do you think the fox changed her mind?”" },
  { name: "Shlokas", example: "“Let’s learn the Ganesha shloka. Say it after me…”" },
  { name: "Phonics", example: "“C · A · T. What word do those sounds make?”" },
  { name: "Maths", example: "“Three apples, and two more. How many now?”" },
  { name: "Words and spelling", example: "“Can you spell ship?”  S · H · I · P" },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-wash" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-head">
            <p className="glass-chip">
              <span className="status-dot" aria-hidden="true" /> Pre-orders open {product.preorder.opensLabel}
            </p>
            <h1 id="hero-title" className="hero-h1">Zivoo: the screen-free AI learning toy</h1>
            <p className="hero-tagline">
              Big questions.
              <br /> Little conversations.
            </p>
          </div>

          <div className="hero-media">
            <div className="hero-image-frame">
              <Image
                src="/images/zivoo-hero.webp"
                alt="Zivoo, a rounded soft-teal learning toy with a cream face panel, two dark eyes, a small smile, a speaker grille on one side and a coral talk button on top."
                width={1200}
                height={1200}
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1200px) 540px, (min-width: 900px) 44vw, 82vw"
                className="hero-image"
              />
            </div>
          </div>

          <div className="hero-body">
            <p className="lede">
              Zivoo is a screen-free AI learning toy for children aged {product.ages.label}. Kids say &ldquo;
              {product.wakeWord}&rdquo; and learn through conversation: stories, shlokas, phonics, maths, new words and
              spelling. Pre-orders open in India on {product.preorder.opensLabel} at {inr(product.preorder.price)}{" "}
              <s>{inr(product.preorder.listPrice)}</s>.
            </p>
            <div className="actions">
              <a href="#waitlist" className="btn btn-primary">
                Join the pre-order waitlist
              </a>
              <Link href={productHref} className="btn btn-secondary">
                Explore Zivoo
              </Link>
            </div>
            <p className="hero-note">Works with your home Wi-Fi. Set up in minutes with the Zivoo Parents app.</p>
          </div>
        </div>
      </section>

      {/* 2. Introduction */}
      <section className="section section-film" aria-labelledby="film-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The launch film</p>
            <h2 id="film-title">What if learning didn&rsquo;t need a screen?</h2>
          </div>
          <FilmPlayer />
        </div>
      </section>

      <section className="section" aria-labelledby="intro-title">
        <div className="container split">
          <div className="split-copy">
            <p className="eyebrow">What it is</p>
            <h2 id="intro-title">Your child asks. Zivoo answers, and asks something back.</h2>
            <p>
              There&rsquo;s no screen and nothing to tap. A child might ask why cats have whiskers. Zivoo explains in a
              sentence or two, then asks what they think a cat uses them for in the dark. That back-and-forth is how
              children build language, confidence and curiosity.
            </p>
          </div>
          <Photo
            src="/images/child-with-zivoo.webp"
            alt="A young girl lying on a rug, smiling and talking to Zivoo, which sits on the floor in front of her."
            width={1536}
            height={1024}
            sizes="(min-width: 900px) 55vw, 100vw"
            tag="Illustration"
          />
        </div>
      </section>

      {/* 3. How it works */}
      <section className="section section-tint" aria-labelledby="how-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How it works</p>
            <h2 id="how-title">Set up, talk, look back.</h2>
          </div>
          <Photo
            src="/images/how-it-works.webp"
            alt="Three scenes: a parent connecting Zivoo using a phone app, a child talking to Zivoo, and two parents viewing a learning progress screen beside Zivoo."
            width={1536}
            height={1024}
            sizes="(min-width: 1248px) 1200px, 100vw"
            tag="Illustration"
            className="photo-wide"
          />
          <ol className="steps">
            <li>
              <span className="step-num">01</span>
              <h3>A parent sets it up</h3>
              <p>Connect Zivoo to home Wi-Fi with the Zivoo Parents app. It takes a few minutes.</p>
            </li>
            <li>
              <span className="step-num">02</span>
              <h3>Your child starts talking</h3>
              <p>&ldquo;Hey Zivoo, tell me a story.&rdquo; A conversation or a learning game, entirely by voice.</p>
            </li>
            <li>
              <span className="step-num">03</span>
              <h3>You follow their progress</h3>
              <p>See what was practised, start an activity with one tap and set the volume limit.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* 3b. Designed by people */}
      <HumanDesigned id="home-human-title" />

      {/* 3c. The details */}
      <section className="section section-tint" aria-labelledby="details-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The details</p>
            <h2 id="details-title">Small enough to hug. Thoughtful where it counts.</h2>
          </div>
          <FeatureCards keys={["hey", "practice", "privacy", "battery", "size", "meet"]} />
        </div>
      </section>

      {/* 4. Learning through conversation */}
      <section className="section" aria-labelledby="learning-title">
        <div className="container split split-reverse">
          <Photo
            src="/images/counting-practice.webp"
            alt="A girl at a table holding up three fingers while talking to Zivoo during a counting activity."
            width={1536}
            height={1024}
            sizes="(min-width: 900px) 50vw, 100vw"
            tag="Illustration"
          />
          <div className="split-copy">
            <p className="eyebrow">What children do with Zivoo</p>
            <h2 id="learning-title">Learning through conversation</h2>
            <dl className="activity-list">
              {activities.map((a) => (
                <div key={a.name}>
                  <dt>{a.name}</dt>
                  <dd>{a.example}</dd>
                </div>
              ))}
            </dl>
            <Link href="/features" className="link-arrow">
              More about each activity
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Parents */}
      <section className="section section-tint" aria-labelledby="parents-title">
        <div className="container split">
          <div className="split-copy">
            <p className="eyebrow">For parents</p>
            <h2 id="parents-title">The Zivoo Parents app keeps you in the picture</h2>
            <p>
              The {product.app} sets Zivoo up, starts a story, shloka, phonics or maths session with one tap, sets the
              loudest volume allowed and shows your child&rsquo;s progress over time.
            </p>
            <p>
              Zivoo doesn&rsquo;t save recordings of your child&rsquo;s voice. The app shows what was practised, never
              recordings, and every answer Zivoo gives passes through child-safety checks first.
            </p>
            <p className="small-note">
              <Link href="/safety">How Zivoo keeps children safe</Link>
            </p>
          </div>
          <Photo
            src="/images/parent-app.webp"
            alt="Two parents looking at the Zivoo Parents app on a phone, showing learning progress and activity switches, with Zivoo on the table."
            width={1536}
            height={1024}
            sizes="(min-width: 900px) 55vw, 100vw"
            tag="Illustration"
          />
        </div>
      </section>

      {/* 6. Product spotlight */}
      <section className="section" aria-labelledby="spotlight-title">
        <div className="container">
          <div className="spotlight">
            <Image
              src="/images/zivoo-on-shelf.webp"
              alt="Zivoo sitting on a light wooden shelf beside a few children's books, in soft daylight."
              fill
              sizes="(min-width: 1248px) 1200px, 100vw"
              loading="lazy"
              className="spotlight-img"
            />
            <div className="spotlight-card glass">
              <p className="eyebrow">A closer look</p>
              <h2 id="spotlight-title">Rounded, calm and simple.</h2>
              <p>A rounded body, a friendly face and a coral button on top. See Zivoo from every angle.</p>
              <Link href={productHref} className="btn btn-secondary">
                View the product
              </Link>
            </div>
            <span className="glass-tag spotlight-tag">Illustration</span>
          </div>
        </div>
      </section>

      {/* 7. At a glance */}
      <section className="section" aria-labelledby="glance-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Zivoo at a glance</p>
            <h2 id="glance-title">A screen-free learning toy for kids aged {product.ages.label}</h2>
            <p>Everything parents ask about, in one place.</p>
          </div>
          <dl className="glance">
            <div>
              <dt>Who it&rsquo;s for</dt>
              <dd>
                Children aged {product.ages.label}, from early talkers learning new words to school-age children
                practising spelling, phonics and times tables.
              </dd>
            </div>
            <div>
              <dt>How children use it</dt>
              <dd>
                They switch Zivoo on and say &ldquo;{product.wakeWord}&rdquo;. After that it&rsquo;s a conversation:
                no screen, no buttons to press for each question and nothing to tap or swipe.
              </dd>
            </div>
            <div>
              <dt>What they learn</dt>
              <dd>
                Stories and story talk, shlokas with their meanings, phonics, counting to times tables in a maths game
                that adapts to them, new words and spelling out loud, and answers to their &ldquo;why&rdquo; questions.
              </dd>
            </div>
            <div>
              <dt>Language</dt>
              <dd>English. Shlokas are recited in Sanskrit and explained in English.</dd>
            </div>
            <div>
              <dt>The Zivoo Parents app</dt>
              <dd>
                Set Zivoo up, start activities with one tap, set the volume limit and follow your child&rsquo;s
                progress over time.
              </dd>
            </div>
            <div>
              <dt>Voice and safety</dt>
              <dd>
                No recordings of your child&rsquo;s voice are saved. Every answer passes child-safety checks before
                Zivoo speaks.
              </dd>
            </div>
            <div>
              <dt>Who designs the learning</dt>
              <dd>
                People. Every activity was chosen and designed by a teacher-led team around how young children learn;
                AI is only how Zivoo holds the conversation.
              </dd>
            </div>
            <div>
              <dt>Battery, size and connection</dt>
              <dd>
                Up to 50 hours on a full charge with USB-C charging. {product.size}. Zivoo uses home Wi-Fi (2.4 GHz) to
                hold conversations, and a physical mic switch on the back mutes it.
              </dd>
            </div>
            <div>
              <dt>Price and pre-orders</dt>
              <dd>
                Pre-orders open {product.preorder.opensLabel} in India at {inr(product.preorder.price)},{" "}
                {discountPct}% off the regular {inr(product.preorder.listPrice)}, until{" "}
                {product.preorder.validUntilLabel}. <Link href="/pre-order">Pre-order details</Link>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="section section-tint" aria-labelledby="faq-title">
        <div className="container faq-grid">
          <div>
            <p className="eyebrow">Questions</p>
            <h2 id="faq-title">Things parents ask</h2>
          </div>
          <Faq items={homeFaqs} />
        </div>
      </section>

      {/* 8. Guides */}
      <section className="section" aria-labelledby="guides-title">
        <div className="container">
          <div className="section-head section-head-row">
            <div>
              <p className="eyebrow">Guides for parents</p>
              <h2 id="guides-title">Screen-free learning, explained.</h2>
            </div>
            <Link href="/blog" className="link-arrow">
              All guides
            </Link>
          </div>
          <div className="post-grid">
            {posts.slice(0, 3).map((post) => (
              <PostCard key={post.slug} post={post} headingLevel="h3" />
            ))}
          </div>
        </div>
      </section>

      {/* 9. Buying guides and comparisons */}
      <section className="section section-tint" aria-labelledby="compare-title">
        <div className="container narrow">
          <div className="section-head">
            <p className="eyebrow">Choosing a learning toy?</p>
            <h2 id="compare-title">Buying guides and honest comparisons</h2>
          </div>
          <ul className="link-list">
            {landings.map((l) => (
              <li key={l.path}>
                <Link href={l.path} className="link-arrow">
                  {l.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9. Waitlist */}
      <WaitlistSection source="home" />

      <JsonLd
        data={ldGraph(
          {
            "@type": "WebPage",
            "@id": `${site.url}/#webpage`,
            url: site.url,
            name: "Zivoo: screen-free AI learning toy for kids aged 3 to 9",
            about: { "@id": PRODUCT_ID },
            mainEntity: { "@id": PRODUCT_ID },
            isPartOf: { "@id": WEBSITE_ID },
            inLanguage: "en-IN",
            primaryImageOfPage: `${site.url}/images/zivoo-hero.webp`,
          },
          productLd(),
          faqLd(homeFaqs.filter((f): f is { q: string; a: string } => typeof f.a === "string")),
        )}
      />
    </>
  );
}
