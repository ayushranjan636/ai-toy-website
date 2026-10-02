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
| `/api/waitlist`  | `POST` only. Server-side waitlist endpoint  |

## Running locally

```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev
```

To try the form locally without a database, set `WAITLIST_STORE=file`.
Sign-ups are then written to `data/waitlist.json`, which is git-ignored. This is for local testing only.

## Waitlist setup (production)

1. Create a Supabase project and run `supabase/waitlist.sql` in its SQL editor.
2. Set these server-side environment variables on your host:
   - `WAITLIST_STORE=supabase`
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY` (server-only; never prefix with `NEXT_PUBLIC_`)
3. Set `NEXT_PUBLIC_SITE_URL` to the live domain.
4. When they're available, optionally set `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_PRIVACY_URL` and `NEXT_PUBLIC_TERMS_URL`.
   Links and contact details stay hidden until these are set.

If no store is configured, the API returns `503` and the form tells the visitor that sign-ups aren't open.
It never shows a success message unless a row was actually saved.

**Built-in protections:** server-side validation, duplicate detection (a unique email constraint),
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
