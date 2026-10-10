# SEO, measurement and visibility: owner steps

These steps need account access, so they were not done in code. Nothing here has been
submitted, created or sent.

## 1. Deploy and check the basics

1. Deploy the current branch to a Vercel **preview** and run against the preview URL:
   `node scripts/audit-seo.mjs https://<preview-url>`. (Canonicals will point to production by design.)
2. Optional: in Vercel → Project → Settings → Environment Variables set
   `NEXT_PUBLIC_SITE_URL=https://www.zivootoy.in` for Production. The code already falls back to
   this origin. Do **not** set it to the preview URL for Production.
3. After promoting to production, check these return the production origin (not `localhost`):
   `https://www.zivootoy.in/robots.txt`, `/sitemap.xml`, and the `<link rel="canonical">` on each page.
4. Redirects are already correct at the host (verified 10 Oct 2026): `http://`, apex and trailing-slash
   variants each 308 to `https://www.zivootoy.in/...` in a single hop, preserving path and query.
   Keep `www` as the primary domain in Vercel → Domains.

## 2. Google Search Console

1. Add a **Domain property** for `zivootoy.in` (covers www, apex, http, https). Verify with the DNS TXT
   record Google gives you. Alternatively use a URL-prefix property and set `GOOGLE_SITE_VERIFICATION`.
2. Sitemaps → submit `https://www.zivootoy.in/sitemap.xml`.
3. URL Inspection → test live URL for `/`, `/product/zivoo`, `/features`, `/about`, `/blog`. Request
   indexing for each once.
4. After ~2–4 weeks: Pages report (why any URL isn't indexed), Performance report.
5. **Branded vs non-branded queries:** in Performance → Search results, add a query filter
   "Custom (regex)" → *doesn't match* `zivoo|zivo|zivu` to see non-branded demand. Report both.
   Low-volume queries are hidden by Google, so totals will not add up.
6. Repeat for **Bing Webmaster Tools** (it can import from Search Console; `BING_SITE_VERIFICATION`
   is supported). Bing's index also feeds several AI assistants.

## 3. Analytics (not installed: provider decision needed)

No analytics was found on the site. A privacy-safe hook already exists:
`trackEvent("waitlist_signup", { source })` fires **only** on a newly created sign-up (not duplicates,
not errors) and sends only the page source (e.g. `home`, `blog:<slug>`), never the email or name.

Options, lightest first:
- **Vercel Web Analytics**: cookieless, enable in the Vercel dashboard, then `npm i @vercel/analytics`
  and add `<Analytics />` to `layout.tsx`. Listen for the event:
  `window.addEventListener("zivoo:analytics", e => track(e.detail.name, e.detail.props))`.
- **Google Analytics 4**: needs a Measurement ID and, for visitors where required, a consent banner.
  Once `gtag` is on the page, the hook forwards events automatically. Mark `waitlist_signup` as a key event.

Organic conversions = `waitlist_signup` events where the session source is organic search.
AI-assistant referrals (chatgpt.com, perplexity.ai, copilot, gemini) appear as referrers but are
**incomplete**: many AI answers send no click, and some send no referrer. Do not attribute
waitlist growth to AI visibility from this data alone.

## 4. Earned links and brand visibility (legitimate only)

Current state: report tools found 0–1 backlinks. Links come from things worth linking to:

1. **Founder story** on the About page (needs question 10 in `open-questions.md`), with a real photo.
2. **Product demonstration video** of a working prototype (real, not concept). Host on YouTube with
   a description linking to `/product/zivoo`.
3. **Editorial outreach** (done by you, personally): Indian and international parenting writers,
   ed-tech newsletters, toy reviewers, hardware/startup media. Pitch the honest angle: a screen-free,
   voice-first learning toy in development, with what is and isn't decided yet.
4. **Partnerships**: preschools, speech-language therapists, or parenting communities willing to trial
   a prototype and give feedback. Ask for a mention only if they genuinely want to give one.
5. **Accurate profiles** for Cogniveda LLP: LinkedIn company page, Crunchbase (if relevant), startup
   directories (e.g. Startup India, if registered). Once they exist, add their URLs to `sameAs` in
   `src/lib/seo.ts` (`organizationLd`).
6. **Guides on this site** (`/blog`) are linkable resources. Share them where parents ask these
   questions, without spamming.

Do not buy links, use link schemes, write fake reviews or endorsements, or create profiles for people
or organisations that don't exist.

## 5. Email authentication (SPF / DKIM / DMARC)

Missing SPF/DMARC is an email-deliverability and spoofing issue, not an SEO factor. First list every
service that sends mail as `@zivootoy.in` (e.g. Google Workspace, Zoho, a newsletter tool, Vercel
forms). Then add one SPF record that includes exactly those senders, enable DKIM in each, and start
DMARC at `p=none` with a reporting address before tightening. Don't publish SPF until the sender list is known.

## 6. What not to expect

- No change guarantees rankings, AI citations or traffic.
- FAQ rich results are limited by Google to authoritative government and health sites; the FAQs are
  there for visitors and clarity.
- Product rich results need a real `offers` price. Add only when pre-orders open with a real price.
- Lighthouse scores are lab diagnostics. Core Web Vitals pass/fail is judged on real-user (CrUX) data,
  which the site doesn't have enough traffic for yet.
