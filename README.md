# Zivoo website

Marketing site and pre-order interest waitlist for **Zivoo** (Cogniveda LLP).
Built with Next.js (App Router), TypeScript and plain CSS.

## Routes

| Route            | Purpose                                     |
| ---------------- | ------------------------------------------- |
| `/`              | Landing page                                |
| `/features`      | Planned capabilities in detail              |
| `/about`         | Company and product purpose                 |
| `/product/zivoo` | Product gallery, summary, FAQ and waitlist  |
| `/blog`          | Parent guides (SEO / answer-engine content) |
| `/blog/[slug]`   | Individual articles, statically generated   |
| `/feed.xml`      | RSS feed of articles                        |
| `/llms.txt`      | Plain-text site summary for AI assistants   |
| `/api/waitlist`  | `POST` only. Server-side waitlist endpoint  |

## Writing a new article

Add a file to `src/content/blog/` (copy an existing one), then add it to `src/content/blog/index.ts`.
The sitemap, RSS feed, `llms.txt`, structured data and related-post links update automatically.
Write the `answer` field as a direct 2–4 sentence answer to the main question. It's what search
snippets and AI assistants are most likely to quote. Only cite sources you have opened and checked.

## Running locally

```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev
```

To try the form locally without a database, set `WAITLIST_STORE=file`.
Sign-ups are then written to `data/waitlist.json`, which is git-ignored. This is for local testing only.

## Waitlist setup: Google Sheets (production)

Sign-ups are appended to a Google Sheet through a small Google Apps Script web app.
The website's server calls it with a shared secret, so the sheet is never exposed to browsers.

1. Create a Google Sheet (any name). Open **Extensions → Apps Script**.
2. Replace the default code with the contents of [`google-sheets/Code.gs`](google-sheets/Code.gs) and save.
3. **Project Settings (gear icon) → Script Properties → Add property**
   - Property: `WAITLIST_SECRET`
   - Value: the same value as `GOOGLE_SHEETS_SECRET` in `.env.local` (a random 43-character string has already been generated there)
4. **Deploy → New deployment → Select type: Web app**
   - Execute as: **Me**
   - Who has access: **Anyone** (required for a server-to-server call; the secret is what protects it)
   - Click **Deploy**, approve the permissions, and copy the **Web app URL** (ends in `/exec`).
5. Paste it into `.env.local` as `GOOGLE_SHEETS_WEBHOOK_URL=` and keep `WAITLIST_STORE=google-sheets`.
6. Run `npm run check:sheets`. It sends an authenticated ping without writing a row.
7. Restart `npm run dev`. The first sign-up creates a `Waitlist` tab with headers.

On your host (e.g. Vercel), add the same three variables, plus `NEXT_PUBLIC_SITE_URL` set to the live domain.

> If you edit `Code.gs` later, use **Deploy → Manage deployments → Edit → Version: New version**
> so the URL stays the same.

Optionally set `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_PRIVACY_URL` and `NEXT_PUBLIC_TERMS_URL` when they're available.
Links and contact details stay hidden until these are set.

If no store is configured, the API returns `503` and the form tells the visitor that sign-ups aren't open.
It never shows a success message unless a row was actually saved.

**Built-in protections:** server-side validation, duplicate detection (checked under a script lock),
spreadsheet formula-injection protection,
per-IP and per-email rate limits, a same-origin check, a honeypot field and a payload size limit.
The rate limiter is in-memory and applies per server instance. On multi-instance or serverless hosting,
replace it with a shared store such as Upstash Redis.

## Asset checklist

Supplied and in use (`assets/` → optimised copies in `public/images/`):

- [x] Dark logo (header) and light logo (footer), padding trimmed, artwork unchanged
- [x] Side view (gallery)
- [x] Transparent front view (hero, gallery)
- [x] Transparent rear view (gallery)
- [x] Social sharing image (`public/og-image.jpg`, generated from the logo and front view)
- [x] Studio front detail, on-shelf, room scene and packaging concept renders
- [x] Child with Zivoo, counting practice, story time, parent app and "how it works" lifestyle images
- [x] Design sketches (About page)
- [x] 25-second film (home and product pages), re-encoded to 1080p (5 MB) and 720p (2 MB) in `public/video/`

Still needed:

- [ ] Transparent **three-quarter** hero image (the front view is used for now)
- [ ] **Close-up photograph** of the real speaker, controls and material finish
- [ ] **Real photography** of a production or prototype unit. All current images appear to be renders and are labelled "Concept image".
- [ ] Image rights and consent records for any image or film showing children or parents
- [ ] Captions (WebVTT) for the film if its audio includes speech
- [ ] Actual parent app screenshots (current screens are labelled as concepts)
- [ ] Genuine team photography for the About page (placeholder shown)
