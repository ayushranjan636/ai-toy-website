# GEO launch plan: owner steps (off-site)

Everything that could be done in code is done (see the end of this file). AI assistants (ChatGPT,
Gemini, Perplexity, Copilot, Google AI Overviews) mostly recommend products that **other sites**
mention. These steps need your accounts and your voice, so they are listed here, in priority order,
with dates working back from pre-orders opening on **23 November 2026**.

## This week (by 2 Nov)

1. **Deploy**, then run `npm run indexnow` once. It pings Bing/Yandex with every sitemap URL. Bing
   feeds ChatGPT search and Copilot. Run it again after any content change.
2. **Google Search Console + Bing Webmaster Tools**: steps in `seo-owner-guide.md` §2. Submit
   `sitemap.xml`; request indexing for `/`, `/product/zivoo`, `/pre-order`, `/features`, `/safety`
   and the nine `/toys/…` and `/compare/…` pages.
3. **Vercel → Firewall / Bot protection**: make sure AI crawlers (GPTBot, OAI-SearchBot, ClaudeBot,
   PerplexityBot) are **not** challenged or blocked. robots.txt already allows them.
4. **Create brand profiles** (same name, logo, one-line description everywhere):
   Instagram, YouTube, LinkedIn company page (Cogniveda LLP), Facebook page, X.
   Then set `NEXT_PUBLIC_SAME_AS` in Vercel to their URLs, comma-separated, and redeploy.
5. **Google Business Profile** for Cogniveda LLP, Tirupati (category: Toy manufacturer / Educational
   supplies). Link the website.
6. **Privacy policy**: publish it (before 23 Nov) and set `NEXT_PUBLIC_PRIVACY_URL`. AI assistants
   and parents both look for it on a children's voice product.

## Before launch (by 20 Nov)

7. **Real demo video (most important single asset).** 60–90 s of a real child using Zivoo: a story, a
   shloka with repeat-after-me, the maths game. Upload to YouTube titled e.g.
   "Zivoo: screen-free AI learning toy for kids (shlokas, phonics, maths)". Put the full transcript in
   the description, plus a link to `https://www.zivootoy.in/product/zivoo`. Share as Reels/Shorts.
8. **Amazon.in and Flipkart listings** (pre-order or "coming soon"). Marketplaces are a top source
   for AI shopping answers. Use the same title, price and facts as the site.
9. **Wikidata**: create items for *Cogniveda LLP* (instance of: limited liability partnership;
   country: India; headquarters: Tirupati; founder; official website) and *Zivoo* (instance of:
   educational toy; manufacturer: Cogniveda LLP). Only facts that are publicly verifiable.
10. **Startup listings**: Startup India (if DPIIT-recognised), Crunchbase, YourStory company page,
    Product Hunt (launch on 23 Nov).
11. **Press**: send the press release below to YourStory, Inc42, The Better India, Entrackr, Indian
    parenting sites (e.g. Parentune, FirstCry Parenting) and local Andhra Pradesh press. Personal emails
    from the founder work best. Angle: a teacher-founded Indian company building a screen-free AI toy
    that teaches shlokas, phonics and maths.

## Launch week and after

12. **Communities** (genuine answers only, never spam): r/IndianParents, r/india, Quora answers to
    "best educational toy for 5 year old India", "screen-free toys", "AI toys safe for kids". Disclose
    you are the maker.
13. **Creators and schools**: send units to 5–10 parenting creators and 2–3 preschools for honest
    reviews. No paid "reviews" without clear #ad disclosure.
14. **Customer reviews**: once real buyers have Zivoo, ask for reviews on Google and Amazon. Only then
    add `aggregateRating` to the Product schema (never invent ratings).
15. **Monthly AI check**: ask ChatGPT, Gemini, Perplexity and Copilot ~20 questions ("best AI toy for
    kids in India", "shloka learning toy", "screen-free learning toy for 5 year old", "Zivoo price",
    "is Zivoo safe"). Note where Zivoo appears and what is wrong, and fix the source of the error.
16. **Analytics**: enable Vercel Web Analytics (dashboard) or GA4. Referrals from chatgpt.com,
    perplexity.ai, gemini.google.com and copilot.microsoft.com show AI traffic, but undercount it.

## Facts to confirm (the site states these)

- **Shipping**: the site says orders ship "in 2026". Replace with an exact window when known
  (`product.ships` in `src/lib/site.ts`).
- **Offer end**: ₹5,999 is shown as valid until 31 December 2026 (`validUntil`). Change if different.
- **Voice data**: the site says recordings of the child's voice are not saved. Confirm this holds for the
  production cloud voice service, not only the development server.
- **Battery**: "up to 50 hours" is now stated without "design target". Confirm with production units.
- **Safety certification**: the site promises certification details before orders ship. Toys sold in
  India need BIS certification (IS 9873; electric toys also IS 15644). Add the certificate details to
  the FAQ in `src/components/Faq.tsx` once issued.
- **Phonics**: presented as a Zivoo activity with the note "reaches every Zivoo in a free software
  update shortly after launch" (`product.phonicsNote`). Delete the note when phonics ships.
- **Photos**: images are labelled "Illustration". Replace with real product photos when available
  (real photos also help image search and trust).

## Press release draft

**FOR IMMEDIATE RELEASE**

**Teacher-founded Indian company opens pre-orders for Zivoo, a screen-free AI learning toy that teaches
children shlokas, phonics and maths through conversation**

*Tirupati, Andhra Pradesh, 23 November 2026.* Cogniveda LLP today opened pre-orders for Zivoo, a
screen-free AI learning toy for children aged 3 to 9. Children talk to Zivoo, with no screen, to hear
and discuss stories, learn shlokas line by line, practise phonics, play a maths game that grows with
them, and get child-friendly answers to their questions.

Zivoo was founded by S. V. Bharathi, a teacher with more than 15 years of classroom experience. "Children
learn so much when someone patiently listens and asks them a question back," said Bharathi. "Zivoo gives
every child that kind of conversation, without a screen."

Every answer Zivoo gives passes through child-safety checks before it is spoken, recordings of children's
voices are not saved, and parents choose activities and follow progress in the Zivoo Parents app.

Zivoo is available to pre-order in India at an introductory price of ₹5,999 (regular price ₹9,999) until
31 December 2026, at https://www.zivootoy.in/pre-order.

**About Cogniveda LLP.** Cogniveda LLP (LLPIN ACX-8838) is a children's learning company based in
Tirupati, Andhra Pradesh, India. It makes Zivoo.

**Media contact:** sistlavenkatabharathi@gmail.com · Photos and facts: https://www.zivootoy.in/product/zivoo

## Done in code (29 Oct 2026)

- Launch facts everywhere: pre-orders 23 Nov 2026, ₹5,999 (40% off ₹9,999), English, shlokas and phonics.
  One source of truth: `product` in `src/lib/site.ts`.
- "In development / planned / concept" wording removed site-wide.
- New pages: `/pre-order`, `/safety`, six buying guides (`/toys/…`), three comparisons (`/compare/…`),
  three articles (shlokas for kids, phonics at home, screen-free gifts).
- Structured data: Product with list (strikethrough) price, PreOrder offer from 23 Nov, Brand node,
  richer Organization (`sameAs` from env), WebPage and Article nodes, FAQPage on every guide.
- `/llms.txt` rewritten as the AI fact sheet; new `/llms-full.txt` with every guide and article.
- robots.txt names AI crawlers explicitly; IndexNow key + `npm run indexnow`.
- en-IN locale; sitemap includes every new page; nav adds Pre-order and Guides; footer links all guides.
