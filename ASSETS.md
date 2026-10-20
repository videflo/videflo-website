# Assets

Everything the site renders is local. There are no remote images, no CDN
requests, and no external fonts at runtime — so nothing here can break because a
third party changed something.

This file lists what is currently in place, what is still a placeholder, and
exactly how to swap in the real thing.

---

## Where files live

```
public/
  images/           Photography used in page sections
  brand/            Logo / icon source files
src/app/
  icon.png          Favicon (Next.js generates the <link> tags)
  apple-icon.png    iOS home-screen icon
  opengraph-image.tsx   Social sharing card, generated at build time
```

---

## 1. Photography (in place)

Four photographs are shipped with the site. They are the Videflo iOS app's
**current** onboarding photographs, copied byte-for-byte from
`Videflo/Assets.xcassets/onboarding_*.imageset/` (the bright, warm set from the
app's Oct 7, 2026 "Brighten onboarding" change), so the site and the app share
one photographic identity. Filenames follow the app's asset names.

| File                                    | Size      | App asset                    | Used by                                                   |
| --------------------------------------- | --------- | ---------------------------- | --------------------------------------------------------- |
| `images/onboarding/event-memory.jpg`    | 1536×1024 | `onboarding_event_memory`    | Homepage hero, and inside the phone mockup                |
| `images/onboarding/scattered-clips.jpg` | 1536×1024 | `onboarding_scattered_clips` | “Life doesn’t happen in highlight reels”                  |
| `images/onboarding/tape-event.jpg`      | 1536×1024 | `onboarding_tape_event`      | Closing figure of the “How it works” section              |
| `images/onboarding/reliving-memory.jpg` | 1536×1024 | `onboarding_reliving_memory` | Top of the closing download section, fading into the page |

`tape-event.jpg` is the app's own player-and-filmstrip composition, drawn on
cream with its content in the top 70%. It is shown at 2:1 with
`object-[50%_8%]`, which keeps the timestamps; any wider crop clips them. Its
frame uses the `artwork` token, sampled from the image's background.

**When the app's onboarding photos change,** copy the new files over these
(keep the names), re-check each `object-*` position against the new subject,
and update the `alt` text in the component that uses it. Because a filename that
is reused can be served from an image cache for a while, prefer a new filename
when a photo changes substantially.

**To replace one with something else:** update the `src` and the `alt` text in
the component that uses it — alt text describes the photograph, so it must
change with the image.

Recommended for replacements:

- **Aspect ratio 3:2 landscape.** Each is cropped with `object-cover` into a
  wider frame, so a 3:2 source loses only a little from the sides. A portrait
  source would lose roughly 40% of its height.
- **Long edge ≥ 1600px, ≤ 2400px.** Next.js generates the smaller sizes; larger
  originals only slow the build.
- **JPEG, quality ~80, no alpha.** These are photographs; PNG is the wrong
  container and roughly 5× the bytes. WebP/AVIF are also fine — Next.js converts
  to modern formats automatically at request time regardless of the source.
- **Keep faces and subjects near the vertical centre.** The hero crops to 16:9 on
  desktop and 4:3 on phones, so the top and bottom of the frame are cut.

---

## 2. Tape tiles (generated photography, in place)

The eight example Tapes in the "A Tape for every chapter" section each show a
photograph, drawn as the app draws a Tape card (`TapeCard.swift`): the photo on
top with a sprocket band along its edge, the Tape's details in ink beneath.

| File (`public/images/tapes/`) | Tape              | Scene                                                      |
| ----------------------------- | ----------------- | ---------------------------------------------------------- |
| `our-first-year.jpg`          | Our First Year    | New parents cradling their newborn on a sunlit bed         |
| `summer-vacation.jpg`         | Summer Vacation   | A family running hand in hand through shallow beach waves  |
| `grandmas-stories-v2.jpg`     | Grandma's Stories | A grandmother between her grandchildren over a photo album |
| `football-season.jpg`         | Football Season   | A father carrying his cheering daughter after a game       |
| `christmas-2026.jpg`          | Christmas 2026    | A family by the tree as their son opens a present          |
| `growing-up.jpg`              | Growing Up        | A toddler's first steps, her father cheering behind her    |
| `life-with-our-dog.jpg`       | Life With Our Dog | A golden retriever bounding ahead of a laughing family     |
| `wedding-weekend.jpg`         | Wedding Weekend   | A couple's first dance at golden hour, guests clapping     |

Alt text, and each photo's `position` (the object-position that keeps faces in
frame from the 4:3 phone crop to the widest desktop tile), live with the data
in `src/content/use-cases.ts`.

**Provenance.** All eight are AI-generated, not photographs of real people, and
not stock. Generated on 2026-10-19 (11:35–11:55 PM MDT) in Runway, Tool Mode,
on Videflo's account (team `thomastoailoa`), with **FLUX.2 Max** (Black Forest
Labs, as hosted by Runway): 4:3, 2K, one image per generation, from original
prompts describing invented scenes. No reference images, no named people,
brands, characters or photographers. Grandma's Stories was regenerated on
2026-10-20 (about 12:15–12:30 AM MDT) with the three people grouped tightly in
the centre, because the nearly square desktop tile cut both grandchildren out
of the first version. 11 generations, 110 credits in all: two rejected (garbled
lettering on clothing; a child's arm ending in an adult's hand) and one
superseded. Originals are 1680×1248 and are kept, read-only, in
`~/Developer/Videflo/Brand Assets/Tape Photography/` (outside this repository)
with their prompts. The site copies are 1600×1188 JPEG, quality 82, with no
camera, location or author metadata.

**Terms relied on.** Runway Terms of Use (last updated 2026-09-15): §4.4, Runway
"does not claim ownership of any of your Inputs or Outputs" and "does not
restrict your commercial use of your Outputs"; §10.1(a), "outputs may not be
unique" and similar outputs may be generated for others; §9(d), the user
indemnifies Runway for infringement. Runway's terms say nothing specific about
the third-party models it hosts. AI-generated images may not be protected by
copyright, so Videflo cannot stop others from reusing them. This is a record
of the basis, not legal advice.

**Review.** Every image was checked at full size for faces, hands, anatomy,
text, logos and realism before use. Remaining artefacts are background blur
only (an unreadable mark on a far-off child's shirt, faint unreadable captions
in the photo album).

**Summer Vacation recordings.** The four "Four recordings · one Tape" frames in
the How It Works diagram (`src/components/visuals/TapeFlow.tsx`) live in
`public/images/tapes/summer-vacation/` (1200×891 JPEG, quality 80):
`1-arriving.jpg` (SAT), `2-the-beach.jpg` (SUN), `3-birthday-dinner.jpg` (TUE),
`4-last-sunset.jpg` (THU). They show one fictional family across one trip: the
same family as the Summer Vacation Tape card, because every scene was generated
with that card's image attached as a Runway reference. Generated on 2026-10-20
(about 12:45–1:20 AM MDT) with FLUX.2 Max, 4:3, 2K; 65 credits (13 per image
with a reference), one rejected (a child missing, unchanged outfits), and one
request blocked by the model's safety filter and refunded. The parents are
consistent throughout; the second child reads as a boy at the beach and a girl
at the birthday dinner, which was reviewed and accepted. One later beach
correction was generated (about 13 more credits, so about 78 in all) but never
downloaded or used. Originals, the reference and the exact prompts are in
`~/Developer/Videflo/Brand Assets/Tape Photography/Summer Vacation Sequence/`.

**If a photo is removed,** delete its `image` entry and the tile falls back to
the warm CSS still frame built from the Tape's `palette`.

---

## 3. App interface (placeholder — CSS mockup)

`src/components/visuals/PhoneMockup.tsx` draws an iPhone and Videflo's recording
screen in CSS: the dynamic island, the recording pill, the burned-in timestamp,
the centred zoom slider, and the Finish · Record · Flip controls. The photograph
inside is the camera preview.

It stays sharp at any size and never goes out of date with a rebuild, so it is
fine to ship. To use real screen captures instead:

1. Capture on a device with no notch overlay and no status-bar clutter, at
   **1290×2796** (iPhone Pro) or **1179×2556**.
2. Save as `public/images/app/recording-screen.png` (PNG — screenshots have flat
   colour regions and text, so PNG beats JPEG here).
3. In `PhoneMockup.tsx`, point the `<Image>` at the screenshot and delete the
   interface layer (the block commented `Interface layer — decorative`). Keep the
   device frame, and change the `alt` to describe the screen.

---

## 4. Logo and icons

| File                                | Size    | Notes                                                                                 |
| ----------------------------------- | ------- | ------------------------------------------------------------------------------------- |
| `src/app/icon.png`                  | 256×256 | Favicon. Downscaled from the iOS app icon. Next.js emits the `<link rel="icon">` tag. |
| `src/app/apple-icon.png`            | 180×180 | iOS “Add to Home Screen” icon.                                                        |
| `public/brand/videflo-app-icon.png` | 512×512 | The app icon, kept for press/marketing use. Not referenced by any page.               |

To regenerate the icons from the app's 1024px master:

```bash
# from the repo root, adjust the source path if the app repo moved
python3 - <<'PY'
from PIL import Image
src = "../Videflo/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png"
im = Image.open(src).convert("RGB")
for path, size in [("src/app/icon.png", 256), ("src/app/apple-icon.png", 180),
                   ("public/brand/videflo-app-icon.png", 512)]:
    im.resize((size, size), Image.LANCZOS).save(path, "PNG", optimize=True)
PY
```

**The wordmark is live text, not an image** — see
`src/components/ui/Wordmark.tsx`. It renders “videflo” with “flo” in the warm
accent, matching the app's launch screen. There is no logo file to maintain, and
it stays crisp everywhere. If a real vector wordmark is produced later, add
`public/brand/videflo-wordmark.svg` and swap the component's body; keep the
component so every usage updates at once.

---

## 5. Social sharing image (generated)

`src/app/opengraph-image.tsx` renders a 1200×630 PNG at build time using
`next/og` — the app icon and wordmark, the tagline and social description in ink
on the app's cream, and the hero photograph (`images/onboarding/event-memory.jpg`)
fading into the cream from the right. It cannot drift out of sync with the site's
copy, because it reads the same `src/config/site.ts` values the pages do. It is
set in Inter from the static TTFs in `src/assets/fonts/` (SIL Open Font
License), because `next/og`'s bundled face has no bold weight.

To use designed artwork instead:

1. Add `public/brand/og-image.png` at **1200×630** (under 300 KB).
2. Delete `src/app/opengraph-image.tsx`.
3. Add the image to both metadata blocks in `src/app/layout.tsx`:

```ts
openGraph: {
  // ...
  images: [{ url: "/brand/og-image.png", width: 1200, height: 630, alt: "Videflo — Capture Today. Cherish Forever." }],
},
twitter: {
  // ...
  images: ["/brand/og-image.png"],
},
```

---

## 6. App Store badge (placeholder)

The download buttons are Videflo's own button style with a generic download
glyph — deliberately **not** an imitation of Apple's badge, since reproducing
Apple's mark by hand is a trademark problem.

Before launch, download the official **“Download on the App Store”** badge from
Apple's Marketing Resources (App Store badge guidelines), save it as
`public/brand/app-store-badge.svg`, and use it inside `AppStoreButton` in place
of the glyph and label. Apple specifies minimum sizes and clear space; follow
their guidelines rather than restyling the badge.

---

## Compression checklist

Before committing a new image:

```bash
# check dimensions and file size
python3 -c "from PIL import Image; im=Image.open('public/images/onboarding/event-memory.jpg'); print(im.size, im.mode)"
ls -lh public/images/onboarding/
```

Targets: photographs under ~700 KB each, icons under ~100 KB, OG image under
300 KB. Next.js re-encodes and resizes photographs on demand, so the source only
needs to be good enough — not small.

---

## What not to do

- **Do not add remote image URLs.** No stock-photo hotlinks, no CDN references.
  A broken or relicensed image on someone else's server becomes a broken page
  here, and `next.config.ts` intentionally allows no remote patterns.
- **Do not put text inside an image.** Every headline on this site is real text,
  which is why it is readable by search engines, translatable, selectable, and
  legible to a screen reader.
- **Do not use imagery you do not have the rights to.** Family photography needs
  the consent of the people in it, and stock imagery needs a licence that covers
  commercial marketing use.
