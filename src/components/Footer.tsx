import Link from "next/link";
import { posts } from "@/content/blog";
import { legal, primaryNav, productHref, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo width={120} variant="light" />
          <p>A screen-free learning toy in development. Requires Wi-Fi.</p>
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
          &copy; {year} {site.company}. Zivoo is in development; features and design may change.
        </p>
        <p className="footer-legal">
          {legal.name} (LLPIN {legal.llpin}), {legal.addressLine}
        </p>
      </div>
    </footer>
  );
}
