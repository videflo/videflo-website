import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/config/site";

/**
 * Social sharing card, generated at build time — no external font or image
 * request. It wears the app's warm cream album (`VidefloTheme.Colors`): the
 * app's background, ink and gold, the app icon and wordmark, and the app's own
 * onboarding photograph fading into the cream the way `OnboardingPhotoView`
 * fades it. Satori cannot read the CSS theme, so the values are the theme's,
 * restated.
 *
 * Satori cannot use the system font either, and `next/og`'s bundled face has
 * no bold, so the card sets Inter — the site's own fallback face — from the
 * static TTFs in `src/assets/fonts/` (SIL Open Font License).
 *
 * The words, `alt`, size and URL are part of the site's metadata and stay as
 * they are; only the presentation lives here.
 */
export const alt = `${site.name} | ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const colors = {
  paper: "#f4efe6",
  ink: "#191714",
  inkMuted: "#6b635a",
  gold: "#e6b85c",
  goldMark: "#c9974a",
};

const file = (path: string) => readFile(join(process.cwd(), path));

async function dataUri(path: string, type: string) {
  return `data:${type};base64,${(await file(path)).toString("base64")}`;
}

export default async function OpenGraphImage() {
  const [photo, icon, regular, semibold, bold] = await Promise.all([
    dataUri("public/images/onboarding/event-memory.jpg", "image/jpeg"),
    dataUri("public/brand/videflo-app-icon.png", "image/png"),
    file("src/assets/fonts/Inter-Regular.ttf"),
    file("src/assets/fonts/Inter-SemiBold.ttf"),
    file("src/assets/fonts/Inter-Bold.ttf"),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        background: colors.paper,
        color: colors.ink,
        fontFamily: "Inter",
      }}
    >
      {/* The family sits low and left of centre; this crop keeps all four. */}
      <img
        src={photo}
        alt=""
        width={700}
        height={630}
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: 700,
          height: 630,
          objectFit: "cover",
          objectPosition: "35% 75%",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: 700,
          height: 630,
          display: "flex",
          backgroundImage: `linear-gradient(90deg, ${colors.paper} 0%, rgba(244, 239, 230, 0.75) 26%, rgba(244, 239, 230, 0) 52%)`,
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: 640,
          height: "100%",
          padding: "0 0 0 76px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <img
            src={icon}
            alt=""
            width={60}
            height={60}
            style={{ width: 60, height: 60, borderRadius: 13 }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 40,
              fontWeight: 600,
              letterSpacing: -0.5,
            }}
          >
            <span>vide</span>
            <span style={{ color: colors.goldMark }}>flo</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginTop: 48,
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: colors.inkMuted,
          }}
        >
          <div
            style={{
              width: 32,
              height: 6,
              borderRadius: 999,
              background: colors.gold,
            }}
          />
          Life in Tapes
        </div>

        <div
          style={{
            marginTop: 22,
            fontSize: 66,
            lineHeight: 1.05,
            fontWeight: 700,
            letterSpacing: -1.5,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Capture Today.</span>
          <span>Cherish Forever.</span>
        </div>

        <div
          style={{
            marginTop: 26,
            fontSize: 25,
            lineHeight: 1.45,
            color: colors.inkMuted,
            maxWidth: 470,
          }}
        >
          {site.socialDescription}
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Inter", data: regular, weight: 400, style: "normal" },
        { name: "Inter", data: semibold, weight: 600, style: "normal" },
        { name: "Inter", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
