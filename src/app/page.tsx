import Image from "next/image";
import Link from "next/link";
import { coreFaqs, Faq, type FaqItem } from "@/components/Faq";
import { FilmPlayer } from "@/components/FilmPlayer";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";
import { PostCard } from "@/components/PostCard";
import { WaitlistSection } from "@/components/WaitlistSection";
import { posts } from "@/content/blog";
import { faqLd, ldGraph, pageMetadata } from "@/lib/seo";
import { inr, product, productHref, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Zivoo: Screen-Free Talking Learning Toy for Kids Aged 3-9",
  absoluteTitle: true,
  description:
    "Zivoo is a screen-free learning toy for kids aged 3-9 who learn by conversation. Follow progress in the Zivoo Parents app. Pre-orders open 1 Dec in India.",
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
  { name: "Word practice", example: "“Enormous means very, very big. What’s something enormous?”" },
  { name: "Spelling", example: "“Can you spell ship?”  S · H · I · P" },
  { name: "Basic maths", example: "“Three apples, and two more. How many now?”" },
  { name: "Stories", example: "“Why do you think the fox changed her mind?”" },
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
              <span className="status-dot" aria-hidden="true" /> In development
            </p>
            <h1 id="hero-title" className="hero-h1">Zivoo: a screen-free learning toy</h1>
            <p className="hero-tagline">
              Big questions.
              <br /> Little conversations.
            </p>
          </div>

          <div className="hero-media">
            <div className="hero-image-frame">
              <Image
                src="/images/zivoo-front.webp"
                alt="Zivoo, a rounded soft-teal learning toy with a cream face panel, two dark eyes, a small smile, a speaker grille on one side and a coral button on top."
                width={1165}
                height={1028}
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1200px) 540px, (min-width: 900px) 44vw, 82vw"
                className="hero-image"
              />
            </div>
          </div>

          <div className="hero-body">
            <p className="lede">
              Zivoo is a screen-free learning toy for children aged {product.ages.label}. Kids say &ldquo;{product.wakeWord}&rdquo;
              and practise words, spelling, simple maths and stories just by talking. Pre-orders are planned to open on{" "}
              {product.preorder.opensLabel} at {inr(product.preorder.price)}.
            </p>
            <div className="actions">
              <a href="#waitlist" className="btn btn-primary">
                Join the pre-order waitlist
              </a>
              <Link href={productHref} className="btn btn-secondary">
                Explore Zivoo
              </Link>
            </div>
            <p className="hero-note">Zivoo needs a Wi-Fi connection to work.</p>
          </div>
        </div>
      </section>

      {/* 2. Introduction */}
      <section className="section section-film" aria-labelledby="film-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">A short film</p>
            <h2 id="film-title">Meet Zivoo in 25 seconds.</h2>
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
              There&rsquo;s no screen and nothing to tap. A child might ask why cats have whiskers. Zivoo is designed to
              explain in a sentence or two, then ask what they think a cat uses them for in the dark.
            </p>
          </div>
          <Photo
            src="/images/child-with-zivoo.webp"
            alt="A young girl lying on a rug, smiling and talking to Zivoo, which sits on the floor in front of her."
            width={1536}
            height={1024}
            sizes="(min-width: 900px) 55vw, 100vw"
            tag="Concept image"
          />
        </div>
      </section>

      {/* 3. How it works */}
      <section className="section section-tint" aria-labelledby="how-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How it&rsquo;s intended to work</p>
            <h2 id="how-title">Set up, talk, look back.</h2>
          </div>
          <Photo
            src="/images/how-it-works.webp"
            alt="Three scenes: a parent connecting Zivoo using a phone app, a child talking to Zivoo, and two parents viewing a learning progress screen beside Zivoo."
            width={1536}
            height={1024}
            sizes="(min-width: 1248px) 1200px, 100vw"
            tag="Concept app screens"
            className="photo-wide"
          />
          <ol className="steps">
            <li>
              <span className="step-num">01</span>
              <h3>A parent sets it up</h3>
              <p>Connect Zivoo to home Wi-Fi and choose its activities in the Zivoo Parents app.</p>
            </li>
            <li>
              <span className="step-num">02</span>
              <h3>Your child starts talking</h3>
              <p>A conversation or a learning activity, entirely by voice.</p>
            </li>
            <li>
              <span className="step-num">03</span>
              <h3>You review and adjust</h3>
              <p>See what was practised and change the activities on offer.</p>
            </li>
          </ol>
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
            tag="Concept image"
          />
          <div className="split-copy">
            <p className="eyebrow">Planned activities</p>
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
              The {product.app} is planned to let you choose which activities Zivoo offers and follow your child&rsquo;s
              growth and performance over time.
            </p>
            <p>
              Voice recordings stay on the Zivoo device, and only temporarily. The app shows you insights about what was
              practised, not recordings.
            </p>
            <p className="small-note">
              Our full privacy policy is still being written and will be published here when it&rsquo;s ready.
            </p>
          </div>
          <Photo
            src="/images/parent-app.webp"
            alt="Two parents looking at a concept version of the Zivoo app on a phone, showing learning progress and activity switches, with Zivoo on the table."
            width={1536}
            height={1024}
            sizes="(min-width: 900px) 55vw, 100vw"
            tag="Concept app screen"
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
              <p>A rounded body, a friendly face and a coral button on top. See every angle we can share so far.</p>
              <Link href={productHref} className="btn btn-secondary">
                View the product
              </Link>
            </div>
            <span className="glass-tag spotlight-tag">Concept image</span>
          </div>
        </div>
      </section>

      {/* 7. At a glance */}
      <section className="section" aria-labelledby="glance-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Zivoo at a glance</p>
            <h2 id="glance-title">A screen-free learning toy for kids aged {product.ages.label}</h2>
            <p>
              Everything we can confirm today, in one place. Zivoo is still being built and tested, so some details may
              change before pre-orders open.
            </p>
          </div>
          <dl className="glance">
            <div>
              <dt>Who it&rsquo;s for</dt>
              <dd>
                Children aged {product.ages.label}, from early talkers learning new words to school-age children
                practising spelling and sums.
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
              <dt>What they practise</dt>
              <dd>
                Word meanings and pronunciation, spelling one letter at a time, counting and simple adding and taking
                away, listening to stories and talking about them afterwards.
              </dd>
            </div>
            <div>
              <dt>Languages</dt>
              <dd>
                English first. We&rsquo;re working towards more Indian languages and will name each one when
                it&rsquo;s ready.
              </dd>
            </div>
            <div>
              <dt>The Zivoo Parents app</dt>
              <dd>
                Set Zivoo up, choose which activities it offers and follow your child&rsquo;s growth and performance
                over time.
              </dd>
            </div>
            <div>
              <dt>Voice recordings</dt>
              <dd>
                Kept only temporarily, on the device itself. The Parents app shows insights about what was practised,
                not recordings.
              </dd>
            </div>
            <div>
              <dt>Battery and connection</dt>
              <dd>
                Designed to run up to 50 hours on a full charge. Zivoo needs home Wi-Fi to hold conversations and
                doesn&rsquo;t work offline.
              </dd>
            </div>
            <div>
              <dt>Price and pre-orders</dt>
              <dd>
                Pre-orders open {product.preorder.opensLabel} in India. The introductory price is{" "}
                {inr(product.preorder.price)}, half the regular {inr(product.preorder.listPrice)}, until{" "}
                {product.preorder.validUntilLabel}.
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

      {/* 9. Waitlist */}
      <WaitlistSection source="home" />

      <JsonLd
        data={ldGraph(
          faqLd(homeFaqs.filter((f): f is { q: string; a: string } => typeof f.a === "string")),
        )}
      />
    </>
  );
}
