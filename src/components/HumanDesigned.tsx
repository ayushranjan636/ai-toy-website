import Link from "next/link";
import { humanDesign } from "@/lib/site";

/**
 * "Designed by people" section: makes clear that teachers, not AI, decide what
 * Zivoo teaches and how. Copy lives in `humanDesign` (src/lib/site.ts).
 */
export function HumanDesigned({ id = "human-title", tint = false, showLink = true }: { id?: string; tint?: boolean; showLink?: boolean }) {
  return (
    <section className={`section ${tint ? "section-tint" : ""}`} aria-labelledby={id}>
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Made by people, for children</p>
          <h2 id={id}>{humanDesign.headline}</h2>
          <p>{humanDesign.summary}</p>
        </div>
        <dl className="human-grid">
          {humanDesign.points.map((p, i) => (
            <div key={p.title} className="glass">
              <span className="step-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <dt>{p.title}</dt>
              <dd>{p.detail}</dd>
            </div>
          ))}
        </dl>
        {showLink ? (
          <p className="small-note">
            <Link href="/about#founder">Meet the teacher behind Zivoo</Link> ·{" "}
            <Link href="/safety">How Zivoo keeps children safe</Link>
          </p>
        ) : null}
      </div>
    </section>
  );
}
