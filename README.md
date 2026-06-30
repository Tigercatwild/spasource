# SpaSource — Med Spa Supply Sourcing Hub

A modern, animated, SEO-built static site that positions you as the go-to sourcing
resource for med spa owners — and funnels them into **Get Local Gold**.

## What's here
```
spasource/
├── index.html        # The site (all sections)
├── styles.css        # 2027-style design system (animations, glass, gradients)
├── app.js            # Search/command palette, filters, directory, FAQ, reveals
├── data/data.js      # ALL content — edit this to update the site (no build step)
├── robots.txt        # SEO
├── sitemap.xml       # SEO (update domain before deploy)
└── README.md
```

## Run it locally
Just open `index.html` in a browser — no build, no server needed.
Or serve it (nicer for testing): `npx serve .` then visit the printed URL.

## Edit content
Everything renders from **`data/data.js`**. Update suppliers, pricing, news,
FAQ, directory entries there — refresh the page, done.

## Features built in
- **Command-palette search (⌘K / Ctrl+K)** across suppliers, prices, topics, FAQ, news
- **Animated 2027 design** — gradient mesh, scroll reveals, counters, hover effects
- **News-style feed**, **price benchmark table** with category filters
- **Supplier directory** + **med spa networking directory** (live search)
- **FAQ accordion** that also emits **FAQ rich-result schema** for Google
- **SEO**: title/description/keywords, Open Graph, Twitter cards, canonical,
  JSON-LD (Organization, WebSite + sitelinks search box, FAQPage), sitemap, robots

## ⚠️ Before you go live
1. **Replace `https://spasource.example/`** everywhere (index.html canonical/OG,
   sitemap.xml, robots.txt) with your real domain.
2. **Pricing is illustrative placeholder data.** See "Real-time pricing" below.
3. **Wire the forms.** The email capture + "submit your numbers" forms are
   front-end only right now (they fake a success state). Connect them to your
   email tool (Mailchimp/Klaviyo/ConvertKit) or a form backend (Formspree,
   Netlify Forms, your own endpoint).
4. **Compliance copy** is in the footer — keep it. You're sharing *commercial*
   sourcing info, not medical/legal advice.

## Real-time pricing — what's actually possible
True automatic "live" pricing pulled from suppliers is **not feasible**: med spa
suppliers (compounding pharmacies, distributors) don't publish public price APIs —
pricing is account-specific and quote-based. So "real-time" realistically means
**crowdsourced, freshness-stamped pricing**:

**The model that works:**
1. Owners submit what they actually pay (a simple form → a database).
2. You aggregate to a low–high range per item, with a sample size + last-updated date.
3. The table already supports this: each row shows `reports` count and `updated`
   date from `data/data.js`. Right now they're `0` / `—` (awaiting data).

**To make it live (recommended low-cost stack):**
- **Form** → Airtable, Google Forms, or a Typeform.
- **Store** → Airtable or Google Sheets as the database.
- **Sync** → a scheduled script (or Make/Zapier) recomputes ranges and writes
  an updated `data/data.js` (or a `pricing.json` the page fetches when hosted).
- Result: prices update as members contribute — genuinely "live-ish," and the
  freshness badges (`● 12 reports · Jun 18`) make it feel real-time and trustworthy.

This crowdsourced angle is also your **moat and your lead magnet**: people submit
prices to see prices, and every submission is a warm contact for Get Local Gold.

## Deploy — Cloudflare Pages (free, global CDN)
This is a pure static site, so Cloudflare Pages serves it directly — no build step.

**Git-connected (auto-deploys on every push):**
1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**
2. Pick the `spasource` repo
3. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/`
4. Save & Deploy → you get a `*.pages.dev` URL. Add a custom domain anytime.

**Or via Wrangler CLI (direct upload):**
```
npx wrangler pages deploy . --project-name=spasource
```
(`_headers` is read automatically by Cloudflare Pages for caching + security headers.)

`package.json` is only for local preview (`npm start`); Cloudflare ignores it.

## The funnel this serves
Sourcing content (free value) → email capture → newsletter/community →
**Get Local Gold** upsell (Google Business Profile marketing). The site is the
top of that funnel.
