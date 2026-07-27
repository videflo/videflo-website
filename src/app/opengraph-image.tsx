import { ImageResponse } from "next/og";
import { site } from "@/config/site";

/**
 * Social sharing card, generated at build time — no image asset to keep in sync
 * and no external font request. Replace with real Videflo artwork by deleting
 * this file and adding `public/brand/og-image.png` (1200×630), then pointing
 * `openGraph.images` in `src/app/layout.tsx` at it. See ASSETS.md.
 */
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "88px",
        background:
          "radial-gradient(120% 100% at 78% 8%, #4a3a20 0%, #1b1a18 58%)",
        color: "#fcfaf6",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          fontSize: 26,
          letterSpacing: 8,
          textTransform: "uppercase",
          color: "#a29a88",
        }}
      >
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: 999,
            background: "#c0563c",
          }}
        />
        Life in Tapes
      </div>

      <div
        style={{
          marginTop: 40,
          fontSize: 92,
          lineHeight: 1.04,
          fontWeight: 700,
          letterSpacing: -2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span>Capture Today.</span>
        <span style={{ color: "#e6b85c" }}>Cherish Forever.</span>
      </div>

      <div
        style={{
          marginTop: 40,
          fontSize: 32,
          lineHeight: 1.4,
          color: "#cdc6b8",
          maxWidth: 820,
        }}
      >
        {site.socialDescription}
      </div>
    </div>,
    size,
  );
}
