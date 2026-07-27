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

Four photographs are shipped with the site. They came from the Videflo iOS app's
own onboarding image sets, so they are already on-brand: warm, golden-hour,
family-centred, and consistent with each other.

| File                            | Size      | Used by                                      |
| ------------------------------- | --------- | -------------------------------------------- |
| `images/hero-family-sunset.jpg` | 1536×1024 | Homepage hero, and inside the phone mockup   |
| `images/scattered-moments.jpg`  | 1536×1024 | “Life doesn’t happen in highlight reels”     |
| `images/tape-filmstrip.jpg`     | 1536×1024 | Closing figure of the “How it works” section |
| `images/watching-together.jpg`  | 1536×1024 | Background of the closing download section   |

**To replace one:** drop a new file at the same path and keep the filename. Then
update the `alt` text in the component that uses it — alt text describes the new
photograph, so it must change with the image.

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

## 2. Tape tiles (placeholder — designed, not missing)

The eight example Tapes in the “A Tape for every chapter” section render as
**CSS film frames**: a warm duotone field taken from each Tape's own palette,
a distant light source, a vignette, film grain, and a sprocket band along the
top edge. They are meant to read as a strip of film waiting for its photograph —
deliberate, not broken.

**To use real photographs instead**, add an `image` to the entry in
`src/content/use-cases.ts`:

```ts
{
  name: "Summer Vacation",
  line: "Sand in everything, and nobody minded.",
  date: "07 · 09 · 2026",
  palette: { base: "#23231f", mid: "#7a5c30", accent: "#e6b85c" },
  image: {
    src: "/images/tapes/summer-vacation.jpg",
    alt: "Two children running into shallow surf at sunset, backlit by the sun.",
  },
}
```

Nothing else needs to change — `TapeFrame` switches from the CSS field to the
photograph automatically, and keeps the `palette` as the loading background.

Suggested files, if you photograph all eight:

```
public/images/tapes/our-first-year.jpg
public/images/tapes/summer-vacation.jpg
public/images/tapes/grandmas-stories.jpg
public/images/tapes/football-season.jpg
public/images/tapes/christmas-2026.jpg
public/images/tapes/growing-up.jpg
public/images/tapes/life-with-our-dog.jpg
public/images/tapes/wedding-weekend.jpg
```

Dimensions: **1600×1200 (4:3)** covers every tile shape in the grid, including
the tall 4:5 tiles and the wide 24:9 banner, because all of them crop with
`object-cover`. JPEG, quality ~80.

Alt text must describe **the moment in the photograph**, not the Tape name — the
Tape name is already visible next to it as real text.

Mixing is fine: tiles with an `image` show the photograph, tiles without keep
the film frame. There is no visual penalty for filling them in one at a time.

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
`next/og` — the tagline over Videflo's charcoal field. It needs no asset file and
cannot drift out of sync with the site's copy, because it reads the same
`src/config/site.ts` values the pages do.

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
python3 -c "from PIL import Image; im=Image.open('public/images/hero-family-sunset.jpg'); print(im.size, im.mode)"
ls -lh public/images/
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
