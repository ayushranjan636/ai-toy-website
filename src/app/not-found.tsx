import type { Metadata } from "next";
import Link from "next/link";
import { WaitlistSection } from "@/components/WaitlistSection";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
    <section className="page-hero not-found" aria-labelledby="nf-title">
      <div className="container">
        <p className="eyebrow">Page not found</p>
        <h1 id="nf-title">We couldn&rsquo;t find that page.</h1>
        <p className="lede">It may have moved, or the link may be mistyped.</p>
        <div className="actions">
          <Link href="/" className="btn btn-primary">
            Go to the home page
          </Link>
          <Link href="/product/zivoo" className="btn btn-secondary">
            See Zivoo
          </Link>
        </div>
      </div>
    </section>
    <WaitlistSection source="not-found" />
    </>
  );
}
