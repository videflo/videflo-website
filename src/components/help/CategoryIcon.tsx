import type { HelpCategoryId } from "@/content/help";
import { cn } from "@/lib/cn";

/**
 * One line-drawn glyph per Help Center category.
 *
 * Drawn rather than imported: the whole site ships without an icon library, and
 * these match the stroke weight and rounded ends of the glyphs already in
 * `AppStoreButton` and `SiteHeader` so the Help Center doesn't read as a
 * bolted-on section.
 *
 * Every glyph is `aria-hidden` — a category card's name is the label, and an
 * icon that also announced itself would say everything twice.
 */
const paths: Record<HelpCategoryId, React.ReactNode> = {
  "getting-started": (
    <>
      <path d="M12 3.5 13.9 8l4.6.4-3.5 3 1.1 4.5L12 13.5 7.9 15.9 9 11.4l-3.5-3L10.1 8Z" />
    </>
  ),
  recording: (
    <>
      <rect x="2.5" y="6.5" width="12" height="11" rx="2.5" />
      <path d="m14.5 11 5-3.2v8.4l-5-3.2Z" />
    </>
  ),
  tapes: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="3" />
      <circle cx="8" cy="12" r="2.4" />
      <circle cx="16" cy="12" r="2.4" />
      <path d="M8 16.5h8" />
    </>
  ),
  collections: (
    <>
      <path d="M4 8.5h16" />
      <path d="M6 5.5h12" />
      <rect x="2.5" y="11" width="19" height="8" rx="2.5" />
    </>
  ),
  playback: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m10.2 8.7 5.3 3.3-5.3 3.3Z" />
    </>
  ),
  exporting: (
    <>
      <path d="M12 15.5V4" />
      <path d="m8.2 7.8 3.8-3.8 3.8 3.8" />
      <path d="M4.5 13v5.5a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5V13" />
    </>
  ),
  storage: (
    <>
      <rect x="3" y="4.5" width="18" height="5" rx="1.8" />
      <path d="M5 9.5v8.7a1.3 1.3 0 0 0 1.3 1.3h11.4a1.3 1.3 0 0 0 1.3-1.3V9.5" />
      <path d="M10 13.5h4" />
    </>
  ),
  subscription: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="2.5" />
      <path d="M2.5 10h19" />
      <path d="M6 14.5h4" />
    </>
  ),
  privacy: (
    <>
      <path d="M12 3.5 19 6v5.6c0 4-2.8 7.2-7 8.9-4.2-1.7-7-4.9-7-8.9V6Z" />
      <path d="m9 12 2.2 2.2L15.2 10" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2.8v2.4M12 18.8v2.4M21.2 12h-2.4M5.2 12H2.8M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7M18.5 18.5l-1.7-1.7M7.2 7.2 5.5 5.5" />
    </>
  ),
  troubleshooting: (
    <>
      <path d="M14.8 3.6a5 5 0 0 0-6 6.6l-5.1 5.1a2 2 0 0 0 0 2.8l1.2 1.2a2 2 0 0 0 2.8 0l5.1-5.1a5 5 0 0 0 6.6-6l-3 3-2.8-.8-.8-2.8Z" />
    </>
  ),
};

export function CategoryIcon({
  id,
  className,
}: {
  id: HelpCategoryId;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-6", className)}
    >
      {paths[id]}
    </svg>
  );
}
