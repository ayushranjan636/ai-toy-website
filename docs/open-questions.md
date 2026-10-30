# Product facts (internal, do not publish this file)

Answers confirmed by the founder on 10 Oct 2026. The single source of truth in code is
`product` in `src/lib/site.ts`; pages, FAQ, llms.txt and JSON-LD all read from it.

| # | Question | Answer | Now used in |
|---|----------|--------|-------------|
| 1 | Age range | 3 to 9 years | Home lede, product specs, FAQ, About, Product `audience.suggestedMinAge/MaxAge`, meta description |
| 2 | Languages | English at launch (29 Oct) | Product specs, features, FAQ. Name each language only when it ships |
| 3 | Pre-order date / market | Opens 23 November 2026 (updated 29 Oct) | Home lede, product price block, FAQ, Product `offers.availabilityStarts` |
| 4 | Price | ₹5,999 introductory (40% off ₹9,999) (updated 29 Oct) | Product price block, FAQ, Product `offers` (PreOrder, INR) |
| 5 | Voice storage | Temporary, on the device only; app shows analysis, not audio | Home parents section, features, FAQ |
| 6 | Parent app | Zivoo Parents app: growth, performance, activity choice | Home, features, product specs, FAQ |
| 7 | Listening trigger | Wake word "Hey Zivoo" once switched on | Product specs, features, FAQ |
| 8 | Battery | Up to 50 hours per full charge (design target) | Product specs, features, FAQ |
| 9 | Safety certification | None yet: building and testing phase | Product status, FAQ ("not yet") |
| 10 | Founder | S. V. Bharathi, Founder, 15+ years teaching | About page, `Person` + Organization `founder` JSON-LD |
| 12 | Market | India only | Product price block, FAQ, Offer `eligibleRegion` |
| 13 | Offer end | ₹5,999 until 31 Dec 2026 (confirm) | Product price block, FAQ, Offer `priceValidUntil` |
| 14 | Company | COGNIVEDA LLP, LLPIN ACX-8838, inc. 4 May 2026, Flat No. 106, Garuda Tower, Lakshmipuram, Tirupati (Urban), Chittoor, AP 517501; RoC Vijayawada | Footer, Organization `legalName/address/identifier/foundingDate` |
| 11 | Socials / contact | No socials yet; contact sistlavenkatabharathi@gmail.com | Footer/About email, Organization `email`. Add `sameAs` once socials launch |

## Still open

- **Privacy policy:** needs publishing before 23 Nov (how long "temporary" is, how parents delete data, what the app stores). Set `NEXT_PUBLIC_PRIVACY_URL` once live.
- **Founder details:** a photo, plus any specifics you're happy to make public (subjects/age groups taught, city, LinkedIn). They would replace the photo placeholder and strengthen the `Person` schema.
- **Battery:** confirm 50 hours after testing; the site currently calls it a design target.

- **29 Oct 2026:** toy works and ships in 2026; shlokas live; phonics presented as live (ships in a free update shortly after launch). See `geo-launch-plan.md` for remaining facts to confirm.
