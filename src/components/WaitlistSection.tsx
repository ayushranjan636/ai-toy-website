import { inr, product, site } from "@/lib/site";
import { WaitlistForm } from "./WaitlistForm";

export function WaitlistSection({ source }: { source: string }) {
  return (
    <section id="waitlist" className="waitlist-section" aria-labelledby="waitlist-title">
      <div className="waitlist-wash" aria-hidden="true" />
      <div className="container waitlist-grid">
        <div className="waitlist-copy">
          <p className="eyebrow">Pre-order waitlist</p>
          <h2 id="waitlist-title">Pre-orders open {product.preorder.opensLabel}.</h2>
          <p>
            Join the waitlist and we&rsquo;ll email you the moment pre-orders open at the introductory price of{" "}
            {inr(product.preorder.price)}. Joining is free; it isn&rsquo;t an order or a payment.
          </p>
          <details className="privacy-note">
            <summary>What we ask for, and why</summary>
            <ul>
              <li>Your email, so we can tell you when pre-orders open.</li>
              <li>Your first name, only if you want to share it.</li>
              <li>Product news only if you tick the separate box.</li>
              <li>Nothing about your children.</li>
            </ul>
            {site.privacyUrl ? (
              <p>
                Read our <a href={site.privacyUrl}>privacy policy</a>.
              </p>
            ) : null}
            {site.contactEmail ? (
              <p>
                To be removed, email <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
              </p>
            ) : null}
          </details>
        </div>

        <div className="waitlist-card glass">
          <WaitlistForm source={source} />
        </div>
      </div>
    </section>
  );
}
