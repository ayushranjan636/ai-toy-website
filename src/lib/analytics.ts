/**
 * Privacy-safe analytics hook. No analytics provider is installed yet.
 *
 * Events are only forwarded to a provider that is already on the page
 * (Google Analytics 4 `gtag`, or anything listening for the DOM event).
 * Nothing is sent otherwise. Never pass form contents or personal data.
 * See docs/seo-owner-guide.md → "Analytics".
 */
type EventName = "waitlist_signup";
type Props = Record<string, string | number | boolean>;

export function trackEvent(name: EventName, props: Props = {}) {
  if (typeof window === "undefined") return;
  const w = window as Window & { gtag?: (...args: unknown[]) => void };
  try {
    w.gtag?.("event", name, props);
    window.dispatchEvent(new CustomEvent("zivoo:analytics", { detail: { name, props } }));
  } catch {
    /* analytics must never break the page */
  }
}
