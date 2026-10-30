import Link from "next/link";
import { posts } from "@/content/blog";
import { landingsOf } from "@/content/landing";
import { legal, primaryNav, productHref, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo width={120} variant="light" />
          <p>The screen-free AI learning toy for children aged 3 to 9. From Tirupati, India.</p>
        </div>

        <nav aria-label="Footer" className="footer-col">
          <h2 className="footer-heading">Explore</h2>
          <ul>
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href={productHref}>The Zivoo product page</Link>
            </li>
            <li>
              <Link href="/safety">Safety and privacy</Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Buying guides" className="footer-col">
          <h2 className="footer-heading">Buying guides</h2>
          <ul>
            {landingsOf("toys").map((l) => (
              <li key={l.path}>
                <Link href={l.path}>{l.title.split(":")[0]}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Comparisons" className="footer-col">
          <h2 className="footer-heading">Compare</h2>
          <ul>
            {landingsOf("compare").map((l) => (
              <li key={l.path}>
                <Link href={l.path}>{l.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Guides" className="footer-col">
          <h2 className="footer-heading">Guides for parents</h2>
          <ul>
            <li>
              <Link href="/blog">All guides</Link>
            </li>
            {posts.slice(0, 3).map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`}>{p.seoTitle.split(":")[0]}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          <h2 className="footer-heading">Stay in touch</h2>
          <ul>
            <li>
              <a href="#waitlist">Join the pre-order waitlist</a>
            </li>
            {site.contactEmail ? (
              <li>
                <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
              </li>
            ) : null}
            {site.privacyUrl ? (
              <li>
                <a href={site.privacyUrl}>Privacy policy</a>
              </li>
            ) : null}
            {site.termsUrl ? (
              <li>
                <a href={site.termsUrl}>Terms</a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
      <div className="container footer-base">
        <p>
          &copy; {year} {site.company}. Zivoo is a trademark of {site.company}.
        </p>
        <p className="footer-legal">
          {legal.name} (LLPIN {legal.llpin}), {legal.addressLine}
        </p>
      </div>
    </footer>
  );
}
