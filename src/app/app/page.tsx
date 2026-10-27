import type { Metadata } from "next";
import { AppDownloads } from "@/components/AppDownloads";
import { appDownloads, site } from "@/lib/site";

/**
 * Unlisted welcome page for new owners: the QR code in the box opens it.
 * Not in the navigation, sitemap or search results (noindex here and an
 * X-Robots-Tag header in next.config.ts).
 */
export const metadata: Metadata = {
  title: { absolute: "Welcome to the family · Zivoo" },
  description: "Thank you for adopting Zivoo. Download the Zivoo Parent app and set up your Zivoo in a few minutes.",
  alternates: { canonical: "/app" },
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  openGraph: { title: "Welcome to the family · Zivoo", description: "Set up your Zivoo in a few minutes." },
};

const steps = [
  {
    title: "Download the Zivoo app",
    body: "Get the Zivoo Parent app below and create your account with your email. We'll send you a 6-digit code to confirm it.",
  },
  {
    title: "Turn on Zivoo",
    body: "Press the button on the base until the light comes on.",
  },
  {
    title: "Put Zivoo in setup mode",
    body: "Hold the leaf button for 5 seconds, until the light pulses slowly.",
  },
  {
    title: "Connect to your home Wi-Fi",
    body: "In the app, tap Connect toy and scan the setup code from the card in the box (also inside the battery door). Choose your Wi-Fi and Zivoo joins it.",
  },
  {
    title: "Say \u201cHey Zivoo!\u201d",
    body: "That's it. Your child can start talking with Zivoo, and you can choose activities and see progress in the app.",
  },
];

export default function AppWelcomePage() {
  return (
    <>
      <section className="page-hero welcome-hero" aria-labelledby="welcome-title">
        <div className="hero-wash" aria-hidden="true" />
        <div className="container page-hero-inner">
          <p className="eyebrow">Welcome to the family</p>
          <h1 id="welcome-title">Thank you for adopting Zivoo.</h1>
          <p className="lede">
            Your new learning friend is ready to meet your child. Setting up takes about five minutes: all you need
            is your phone and your home Wi-Fi.
          </p>
          <a href="#download" className="btn btn-primary welcome-cta">
            Get the app
          </a>
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="steps-title">
        <div className="container">
          <h2 id="steps-title" className="section-head">
            Set up in five steps
          </h2>
          <ol className="welcome-steps">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="welcome-step-num" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="download" className="section" aria-labelledby="download-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Download now</p>
            <h2 id="download-title">Get the Zivoo Parent app</h2>
            <p className="section-lede">Free. Your phone is only needed to set up Zivoo and to follow along.</p>
          </div>
          <AppDownloads androidHref={appDownloads.android.href} androidSize={appDownloads.android.size} />
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="help-title">
        <div className="container welcome-help">
          <h2 id="help-title">Need a hand?</h2>
          <ul>
            <li>
              <strong>The light isn&rsquo;t pulsing:</strong> hold the leaf button for 5 seconds again. Setup mode lasts
              10 minutes.
            </li>
            <li>
              <strong>The app can&rsquo;t find Zivoo:</strong> keep your phone close to it, with Bluetooth on.
            </li>
            <li>
              <strong>Wi-Fi won&rsquo;t connect:</strong> Zivoo needs 2.4 GHz Wi-Fi; passwords are case-sensitive.
            </li>
          </ul>
          {site.contactEmail ? (
            <p>
              Still stuck? Email us at <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> and we&rsquo;ll
              help you get going.
            </p>
          ) : null}
        </div>
      </section>
    </>
  );
}
