import type { HelpCategory, HelpCategoryId } from "./types";

/**
 * The Help Center's top level.
 *
 * Order matters — it is the order the cards appear on the hub, and it runs
 * roughly in the order someone meets Videflo: get set up, record, keep things
 * tidy, watch them back, get copies out, then everything around the app.
 *
 * Adding a category means adding an entry here, an icon in
 * `src/components/help/CategoryIcon.tsx`, and at least one article. The registry
 * fails the build if a category ends up with no articles, so an empty card can
 * never ship.
 */
export const helpCategories: readonly HelpCategory[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    description:
      "What Videflo is, how to install it, and how to make your very first Tape.",
  },
  {
    id: "recording",
    title: "Recording",
    description:
      "Using the camera, adding to a Tape, and what happens when you're interrupted.",
  },
  {
    id: "tapes",
    title: "Tapes & Library",
    description:
      "Naming, tidying, trimming, and finding the Tapes you've made.",
  },
  {
    id: "collections",
    title: "Collections",
    description: "Grouping Tapes that belong together, like folders for years.",
  },
  {
    id: "playback",
    title: "Playback",
    description:
      "Watching a Tape back, moving through it, and the date stamp on screen.",
  },
  {
    id: "exporting",
    title: "Exporting & Sharing",
    description:
      "Turning a Tape into an ordinary video file you can keep or send.",
  },
  {
    id: "storage",
    title: "Storage & Backup",
    description:
      "How much space Tapes use, freeing some up, and keeping a second copy.",
  },
  {
    id: "subscription",
    title: "Subscription",
    description:
      "Plans, billing, restoring a purchase, and cancelling — all through Apple.",
  },
  {
    id: "privacy",
    title: "Privacy & Security",
    description:
      "Where your recordings live, what leaves your iPhone, and what doesn't.",
  },
  {
    id: "settings",
    title: "App & Settings",
    description:
      "Every switch in Settings explained, plus updates and getting in touch.",
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    description: "When something isn't working, start here.",
  },
] as const;

const byId = new Map<HelpCategoryId, HelpCategory>(
  helpCategories.map((category) => [category.id, category]),
);

/** Look up a category. Throws at build time rather than rendering a blank label. */
export function getCategory(id: HelpCategoryId): HelpCategory {
  const category = byId.get(id);
  if (!category) throw new Error(`Unknown help category: ${id}`);
  return category;
}
