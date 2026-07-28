# videflo-website

The public marketing site for **Videflo** — an iPhone app that turns life's
moments into continuous _Tapes_ you can revisit for years.

> **Capture Today. Cherish Forever.** · Life in Tapes.

Four marketing pages, a 50-page Help Center, a custom 404, and no moving parts:
everything is statically generated, every asset is local, and every
launch-critical value lives in one config file.

---

## Contents

- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Everyday commands](#everyday-commands)
- [Project layout](#project-layout)
- [The Help Center](#the-help-center)
- [Adding a Help Center article](#adding-a-help-center-article)
- [Configuration — start here](#configuration--start-here)
- [Before launch: the checklist](#before-launch-the-checklist)
- [Replacing images](#replacing-images)
- [Editing content](#editing-content)
- [Updating Privacy and Terms dates](#updating-privacy-and-terms-dates)
- [Deploying to Vercel](#deploying-to-vercel)
- [Connecting videflo.com](#connecting-videflocom)
- [Design system](#design-system)
- [Accessibility and motion](#accessibility-and-motion)
- [Expanding to new markets](#expanding-to-new-markets)
- [Known limitations](#known-limitations)

---

## Tech stack

| Piece      | Choice                                                           |
| ---------- | ---------------------------------------------------------------- |
| Framework  | Next.js 16 (App Router, React 19, Turbopack)                     |
| Language   | TypeScript, `strict` mode                                        |
| Styling    | Tailwind CSS v4 (CSS-first `@theme`, no `tailwind.config.js`)    |
| Fonts      | Fraunces + Inter, self-hosted at build time via `next/font`      |
| Icons      | Inline SVG written by hand — no icon library                     |
| Animation  | CSS transitions + one `IntersectionObserver` — no motion library |
| Deployment | Vercel (zero config)                                             |

There is **no** database, CMS, auth, backend API, payment integration, or
analytics. Three dependencies ship to the browser: `next`, `react`, `react-dom`.

---

## Getting started

Requires **Node.js 20.9 or newer** (Node 26 is what this was built on).

```bash
git clone <your-remote> videflo-website
cd videflo-website
npm install
npm run dev
```

Then open <http://localhost:3000>.

If npm warns that install scripts were skipped:

```bash
npm approve-scripts --allow-scripts-pending
```

`sharp` uses one of those scripts. It is only needed for image optimisation when
you self-host with `next start`; Vercel handles this for you.

---

## Everyday commands

```bash
npm run dev            # dev server with hot reload on :3000
npm run build          # production build (also runs a full type check)
npm run start          # serve the production build on :3000
npm run lint           # ESLint (next/core-web-vitals + TypeScript rules)
npm run typecheck      # tsc --noEmit
npm run format         # Prettier, with Tailwind class sorting
npm run format:check   # verify formatting without writing
```

Run all four checks before pushing:

```bash
npm run format:check && npm run lint && npm run typecheck && npm run build
```

To preview the real production output locally on a different port:

```bash
npm run build
npx next start -p 3210
```

---

## Project layout

```
src/
  app/
    layout.tsx              Root layout: fonts, metadata, header, footer
    page.tsx                Homepage (composes the section components)
    privacy/page.tsx        Privacy Policy
    terms/page.tsx          Terms of Service
    support/page.tsx        Contact + support topics + FAQ
    help/page.tsx           Help Center hub (search, topics, FAQ)
    help/[slug]/page.tsx    One route serving every help article
    help/topics/[topic]/    One route serving every help category
    not-found.tsx           Custom 404
    sitemap.ts              /sitemap.xml
    robots.ts               /robots.txt
    opengraph-image.tsx     Social card, rendered at build time
    icon.png                Favicon
    apple-icon.png          iOS home-screen icon
    globals.css             The entire design system lives here (@theme)

  config/
    site.ts                 ⭐ EVERY launch-critical value

  content/
    use-cases.ts            The eight example Tapes
    benefits.ts             The "what Videflo does today" list
    faq.ts                  Support FAQ (also feeds FAQPage structured data)
    legal/privacy.tsx       Privacy Policy sections
    legal/terms.tsx         Terms of Service sections
    help/                   ⭐ The Help Center's entire content
      types.ts              The article content model
      categories.ts         The eleven topics
      articles/*.ts         One file per topic, holding its articles
      faq.ts                The hub's own FAQ
      index.ts              Registry, related-article resolution, search index,
                            and the build-time consistency checks
      search-index.ts       Split point so the index loads on demand

  components/
    layout/                 SiteHeader, SiteFooter, SkipToContent
    ui/                     Container, Section, Reveal, Eyebrow, Wordmark,
                            AppStoreButton
    home/                   One component per homepage section
    visuals/                PhoneMockup, TapeFrame, TapeFlow
    legal/                  LegalPage shell + prose primitives
    support/                FaqAccordion
    help/                   ArticleBody, HelpSearch, HelpCards, CategoryIcon,
                            HelpBreadcrumbs, RichText

  lib/cn.ts                 Tiny class-name joiner

public/
  images/                   Photography
  brand/                    Icon / logo source files
```

Only four components are client components (`SiteHeader`, `Reveal`,
`AppStoreButton`, `HelpSearch`) — everything else renders on the server.

---

## The Help Center

`/help` is the single source of truth for questions about the app. It holds
**11 categories and 38 articles**, and it is what Videflo's own Settings screen
opens when someone taps **Help → Help Center**.

### The shape of it

| Route                  | What it is                                          |
| ---------------------- | --------------------------------------------------- |
| `/help`                | Hub — search, 6 popular articles, 11 topics, FAQ    |
| `/help/topics/<topic>` | One page per category, listing its articles         |
| `/help/<slug>`         | One page per article                                |
| `/help/topics`         | Redirects to `/help` — the URL is guessable by      |
|                        | trimming a segment, so it answers instead of 404ing |

The hub, the 11 topic pages and the 38 articles are **statically generated at
build time** — 50 pages — and every one of them is **included in
`/sitemap.xml`**. Both the routes and the sitemap entries are derived from the
content registry rather than from a hand-kept list, so publishing an article
adds it to both automatically.

### Content is data, not JSX

Articles live in `src/content/help/articles/*.ts` as typed objects — overview,
sections, steps, tips, common mistakes, troubleshooting, FAQs, related links.
Nothing about an article is written as markup. That single decision is what lets
the same words feed the page, the `TechArticle` / `FAQPage` / `BreadcrumbList` /
`CollectionPage` / `ItemList` structured data, and the search index without any
two of them drifting apart.

### Search

**Built from the structured article content itself** — every heading, step, tip,
mistake, troubleshooting entry and FAQ answer is flattened into a search index at
build time. There is no separate keyword list to maintain, so search can never
fall out of step with the prose.

- Matching is AND across terms, over the full article text.
- Ranking is scored on lightly stemmed words (`src/lib/stem.ts`), so "restore"
  finds "**Restoring** a purchase" and "export" finds "**Exporting** a Tape".
  Stemming affects order only, never which articles match.
- The index is a **separate chunk fetched on first focus or hover**, not part of
  the page's first load — most visitors come to read one article rather than to
  search all of them.
- Keyboard: `/` focuses the field, arrows move, Enter opens, Escape clears. The
  field is an ARIA combobox over a listbox, with a polite live result count.

### Reading on a phone

Article pages **collapse the table of contents into a single `<details>` row
below the `lg` breakpoint**. Expanded, an eight-entry contents pushed the first
sentence roughly a screen and a half down an iPhone — and since the app links
here directly, the phone is the common case, not the edge case. The desktop
sticky sidebar is unchanged.

### What the app links to

- **Help Center** → `https://videflo.com/help` (this site).
- **Share Feedback** → **Featurebase**, which remains the destination for
  feedback and feature requests. That integration is unchanged by this site.

---

## Adding a Help Center article

Add one object to the array in the matching `src/content/help/articles/*.ts`
file. That is the whole job — the hub, the topic page, the search index, the
sitemap, and the related-article links are all derived from it, and the page is
statically generated at `/help/<slug>`.

Two rules the build enforces for you, in `src/content/help/index.ts`:

- **Slugs are unique and URL-shaped**, and a `related` entry must name an
  article that exists. Either mistake fails the build rather than shipping a
  broken link.
- **A category cannot be empty**, so a topic card never leads nowhere.

Two rules it can't enforce, and that matter more:

- **Every sentence must describe the app as it actually behaves.** Nothing in
  here may promise cloud backup, accounts, sync, in-app sharing, playback speed
  control, Android, or iPad — none of which exist.
- **Slugs are permanent once published.** They get linked from the app, from
  other articles, and from people's bookmarks.

The only markup allowed in article strings is `**emphasis**`, which renders as
bold. Use it for what the reader will look for on screen — button and setting
names — and nothing else. Article text is also flattened into the search index
and into structured data, so it stays plain on purpose.

---

## Configuration — start here

**`src/config/site.ts` is the only file you need to edit** to change site-wide
values. Anything commented `PLACEHOLDER` in that file must be replaced or
confirmed before going public.

| Group        | Values                                                               |
| ------------ | -------------------------------------------------------------------- |
| `site`       | Name, canonical URL, tagline, brand phrase, descriptions, locale     |
| `contact`    | `supportEmail`, `legalEmail`, `privacyEmail`                         |
| `appStore`   | `url` (the big one — see below), coming-soon copy, platform note     |
| `socials`    | Footer social links. Empty array → the footer omits the row entirely |
| `legal`      | Entity name, address, governing state/country, Privacy + Terms dates |
| `primaryNav` | Header navigation                                                    |
| `footerNav`  | Footer navigation                                                    |

### The App Store URL

`appStore.url` is `null` today, because Videflo is not on the App Store yet.
While it is null, every download button renders in a complete, honest
**coming-soon state** — the buttons look finished, say “Coming soon to the App
Store · Made for iPhone” underneath, and reveal an email address when pressed.
The header button links to the download section of the homepage.

There is deliberately **no `href="#"` anywhere in this codebase.** Nothing a
visitor clicks silently goes nowhere.

To go live, set one value:

```ts
// src/config/site.ts
export const appStore = {
  url: "https://apps.apple.com/app/videflo/id0000000000", // ← real product URL
  // ...
};
```

Every button on every page becomes a real external link to the App Store, the
microcopy switches to “Made for iPhone”, and the homepage's structured data gains
an `installUrl`. Nothing else needs to change.

---

## Before launch: the checklist

Work top to bottom. Items 1–3 are blockers.

### 1. Legal review — required

`src/content/legal/privacy.tsx` and `src/content/legal/terms.tsx` each open with
a block comment marking them as **drafts requiring owner and legal review**.
They are carefully written and reflect the product accurately, but they are not
legal advice and have not been reviewed by a lawyer.

Both documents render bracketed placeholders **visibly on the page**, in a
highlighted style, so an unfinished document can never be mistaken for a finished
one. Search for `<Placeholder>` to find every one.

**The entity is a Utah LLC, launching in the United States, Canada, Australia
and New Zealand.** The launch markets live in `availability.launchMarkets` in
`src/config/site.ts`, and they drive real wording in both documents — not just a
sentence, but which privacy and consumer-law regimes get addressed:

| Market        | Privacy                        | Consumer law                     |
| ------------- | ------------------------------ | -------------------------------- |
| United States | CCPA/CPRA + other state laws   | —                                |
| Canada        | PIPEDA                         | Provincial consumer protection   |
| Australia     | Privacy Act 1988 / APPs, APP 8 | **Australian Consumer Law**      |
| New Zealand   | Privacy Act 2020, IPP 12       | **Consumer Guarantees Act 1993** |

> **Do not remove the Australia/New Zealand carve-outs** in Terms § Disclaimers
> and § Limitation of liability. Those consumer guarantees cannot be excluded,
> and _purporting_ to exclude them is itself a breach of the Australian Consumer
> Law. They are the highest-risk wording in the document.

**Europe is deliberately switched off at launch** (`availability.offeredInEeaUk`
is `false`), which is what keeps GDPR Article 27 out of scope for now. See
[expanding to new markets](#expanding-to-new-markets).

Decided already (owner):

- **Dispute resolution** — 30 days of informal resolution, then exclusive venue
  in Utah, with a carve-out preserving consumers' right to sue in their home
  country. No arbitration clause, no class-action waiver.
- **Governing law** — State of Utah, United States, with mandatory local
  consumer law preserved.

Still needs counsel:

- Whether the **Utah venue and the consumer carve-out are enforceable** in the
  four launch markets.
- Whether the **disclaimers, limitation of liability, and indemnification**
  clauses hold up there — especially against the Australian Consumer Law.
- The **minimum age**, which must match the App Store age rating.
- Compliance with Apple's required licensed-application terms (the EULA schedule
  in the Apple Developer Program agreement), including Apple as a third-party
  beneficiary.

### Expanding to new markets

Adding a country is a config change plus a legal check, in that order:

1. Add it to `availability.launchMarkets` in `src/config/site.ts`. Both legal
   pages name the markets from that array, so the prose updates itself.
2. Check whether the new market brings its own privacy or consumer regime, and
   add a subsection to Privacy § Regional privacy rights if so.

**Adding any EEA or UK country is different, and is a hard gate.** Offering the
app to people in Europe triggers the GDPR, and with it the question of whether
**Article 27 requires you to appoint an EU representative** (and the UK GDPR a UK
representative). That is a person or firm you retain and name with contact
details — no sentence on this website satisfies it. Budget roughly
€150–900/year for the EU depending on provider, plus the UK on top unless your
provider bundles it.

Do this **before** selecting those countries in App Store Connect, not after:

1. Ask counsel whether the Article 27(2)(a) exemption applies. Videflo is a
   plausible candidate — no account, no server, recordings never leave the device
   — but “occasional” is read narrowly, so get an answer rather than assuming.
2. If it does not apply, appoint representatives and add their names and
   addresses to the Privacy Policy.
3. Confirm the international transfer mechanism (SCCs, UK Addendum, adequacy).
4. Set `availability.offeredInEeaUk` to `true`, and revisit the EEA/UK wording in
   Privacy § International users and transfers plus the digital-consent age
   (13–16, varies by member state) in Terms § Eligibility.
5. Only then switch the countries on.

### 2. Confirm the factual claims about the app — required

The Privacy Policy's **Diagnostics and analytics** section makes assertions about
what the shipping app does and does not collect. Verify these against the actual
binary and any third-party SDKs, then make the App Store privacy questionnaire
(“App Privacy Details”) say exactly the same thing. A mismatch is an App Review
rejection.

The Support page's subscription answers describe the App Store purchase flow and
**Restore Purchases**. Confirm the wording matches the shipped StoreKit
implementation and the product names in App Store Connect.

### 3. Fill in the business details — required

In `src/config/site.ts`:

- `legal.governingState` — **done**, set to `Utah`
- `legal.entityDescription` — **done**, `a Utah limited liability company`
- `legal.entityName` — currently `Videflo LLC`. Confirm the exact registered
  name, including punctuation, against the Utah Division of Corporations filing.
  The legal pages print it verbatim.
- `legal.entityAddress` — still `[Business address to be provided]`, and still
  rendering visibly on both legal pages. GDPR and CCPA both effectively require
  an identifiable business with contact details, and so does Apple.
- `contact.legalEmail` and `contact.privacyEmail` — must be real, monitored
  inboxes, or point them at `supportEmail`

### 4. Set the App Store URL

See [the section above](#the-app-store-url).

### 5. Optional polish

- Replace the Tape tile placeholders with real photography — see [ASSETS.md](./ASSETS.md).
- Add the official Apple “Download on the App Store” badge — see ASSETS.md.
- Add social links to `socials` in the config.
- Decide whether you want website analytics, and if so update the Privacy
  Policy's website section to match.

---

## Replacing images

See **[ASSETS.md](./ASSETS.md)** for the full inventory: filenames, dimensions,
which section uses which file, how to swap the CSS placeholders for real
photography, compression targets, and how to regenerate the icons.

The short version: drop a file at the same path in `public/images/`, keep the
filename, and update the `alt` text in the component that renders it.

---

## Editing content

Copy that changes often lives in `src/content/` as plain typed data, so you never
have to open a component to change words:

- **Example Tapes** — `use-cases.ts`. Keep every name a single _event or chapter_
  (“Summer Vacation”, “Our First Year”), never a whole life. That distinction is
  the product idea.
- **Benefits** — `benefits.ts`. Everything here must be true of the app _today_.
  No cloud backup, sharing, sync, AI, Android, or web playback — none of those
  exist, and the site must not imply otherwise.
- **FAQ** — `faq.ts`. Answers are plain strings so the same words appear on the
  page and in the FAQPage structured data without drifting apart. This is the
  `/support` FAQ; the Help Center keeps its own in `content/help/faq.ts`.
- **Help Center** — `help/`. See [The Help Center](#the-help-center) and
  [Adding a Help Center article](#adding-a-help-center-article).
- **Legal** — `legal/privacy.tsx`, `legal/terms.tsx`. Sections are an array; add,
  remove or reorder entries and the table of contents follows automatically.
  Anchor `id`s are linked from elsewhere, so keep them stable.

Section headings and hero copy live in the corresponding component under
`src/components/home/`.

---

## Updating Privacy and Terms dates

Both dates are in one place:

```ts
// src/config/site.ts
export const legal = {
  privacy: { display: "July 26, 2026", iso: "2026-07-26" },
  terms: { display: "July 26, 2026", iso: "2026-07-26" },
};
```

`display` is what visitors read; `iso` feeds the `<time dateTime>` attribute and
the `lastModified` field in `sitemap.xml`. **Update both fields together** —
whenever you change the wording of either document, in the same commit.

---

## Deploying to Vercel

Nothing to configure. There are no environment variables and no build settings to
change.

### Via the dashboard

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Go to <https://vercel.com/new> and import it.
3. Vercel detects Next.js and fills in Framework `Next.js`, build command
   `npm run build`, output `.next`. Accept the defaults.
4. Click **Deploy**.

### Via the CLI

```bash
npm i -g vercel
vercel login
vercel          # preview deployment
vercel --prod   # production deployment
```

Every push to the default branch redeploys production; every other branch and
pull request gets its own preview URL.

---

## Connecting videflo.com

1. In the Vercel project, open **Settings → Domains**.
2. Add `videflo.com`, then add `www.videflo.com` and set it to redirect to the
   apex (or the reverse — just be consistent).
3. At your DNS registrar, create the records Vercel shows you. Typically:

   | Type    | Name  | Value                  |
   | ------- | ----- | ---------------------- |
   | `A`     | `@`   | `76.76.21.21`          |
   | `CNAME` | `www` | `cname.vercel-dns.com` |

   Use the exact values in the Vercel dashboard — they are authoritative and can
   change.

4. Wait for DNS to propagate. Vercel issues the TLS certificate automatically.
5. Confirm `site.url` in `src/config/site.ts` matches the final canonical domain,
   **including whether it is `www` or not**. This value drives canonical URLs,
   Open Graph URLs, `sitemap.xml`, and `robots.txt` — a mismatch here is an SEO
   problem, not a cosmetic one. Redeploy after changing it.
6. Sanity-check the deployed site:

   ```bash
   curl -s https://videflo.com/robots.txt
   curl -s https://videflo.com/sitemap.xml
   ```

---

## Design system

All of it is in **`src/app/globals.css`**, in the Tailwind v4 `@theme` block.
There is no `tailwind.config.js`. Change a token there and it propagates
everywhere — no component hard-codes a hex value.

**Surfaces:** `paper` `#fcfaf6` · `cream` `#f7f2e8` · `shell` `#f1e9d8` ·
`ink` `#1b1a18`

**Text:** `ink` · `ink-soft` · `ink-muted` · `ink-faint` on light;
`paper` · `cream-muted` · `cream-faint` on charcoal

**Accents:** `gold` `#e6b85c` (on charcoal only) · `gold-deep` `#8a5f18`
(the accessible gold for text on light) · `rec` `#c0563c` (the recording red,
used sparingly)

Yellow is deliberately restrained: it appears as small accents, the wordmark's
“flo”, and the closing brand line — never as a background or a button fill.
Primary buttons are charcoal on light and paper on charcoal.

**Type:** Fraunces for display, Inter for everything else. The fluid display
scale (`text-display-xl` → `text-display-sm`, plus `text-lead`) uses `clamp()`
with lower bounds tuned for a 320px viewport, so headings never overflow on small
phones and never become absurd on a 27-inch monitor.

**Rhythm:** `<Section>` owns background tone and vertical spacing; `<Container>`
owns page width and gutters. Use them rather than adding one-off padding.

---

## Accessibility and motion

- Every text pairing in the palette meets **WCAG AA for normal-size text** —
  the weakest is 4.62:1.
- Skip-to-content link, one `<h1>` per page, and a logical heading order.
- The mobile menu is a labelled disclosure: `aria-expanded`, `aria-controls`,
  Escape to close, focus returned to the toggle, and body scroll locked while
  open.
- The FAQ uses native `<details>`/`<summary>` — keyboard operable with no
  JavaScript, and every answer is in the HTML for search engines and
  Find-in-page.
- Focus rings are always visible and invert to gold on charcoal sections.
- **Reduced motion:** the scroll reveal and smooth scrolling are both wrapped in
  `@media (prefers-reduced-motion: no-preference)`. With motion turned off,
  nothing animates and nothing is hidden.
- **No JavaScript:** the reveal's hidden state is additionally gated behind
  `@media (scripting: enabled)`, so if JavaScript never runs, all content renders
  normally rather than staying invisible.
- Decorative visuals are `aria-hidden`; photographs carry descriptive alt text;
  no headline is baked into an image.

---

## Known limitations

- **The App Store link does not exist yet.** `appStore.url` in
  `src/config/site.ts` is still `null`, so every download call to action renders
  a clearly-labelled **“Coming soon to the App Store”** state instead of pointing
  at a dead link. This is deliberate and is the correct state until the app
  ships — see [the App Store URL](#the-app-store-url).
- **The Featurebase public root portal still needs final verification.** The app
  links **Share Feedback** at a Featurebase workspace that has not yet been
  confirmed to resolve. Note that a status-code check cannot settle it:
  Featurebase serves its single-page-app shell — HTTP 200 — for any path,
  whether or not the workspace exists. Open it in a browser and confirm a real
  workspace loads before release. Nothing on this site depends on it; the link
  lives in the iOS app (`Videflo/App/VidefloLinks.swift`).
- **The legal pages are unreviewed drafts** with visible placeholders. See
  [the checklist](#before-launch-the-checklist).
- **The Tape tiles and the phone screen are placeholders** — designed ones, not
  broken ones. See [ASSETS.md](./ASSETS.md).
- **The footer copyright year is stamped at build time.** Because the whole site
  is statically generated, a site left undeployed across New Year's Eve will show
  the previous year until the next deploy. Any redeploy fixes it.
- **`npm audit` reports dev-only advisories** in the ESLint dependency chain
  (`minimatch` via `@eslint/*`). Nothing in that chain ships to the browser.
  Fixing them requires a major ESLint upgrade; not worth doing for a lint-only
  transitive dependency.
- **No test suite.** For a four-page static marketing site, `npm run build` plus
  the type checker covers the realistic failure modes; adding a test runner would
  be more machinery than the site justifies.
