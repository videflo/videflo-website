/**
 * Example Tapes shown on the homepage.
 *
 * Each entry is one *event or chapter of life* — never a whole life. That
 * distinction is the product idea, so keep it when editing.
 *
 * `palette` drives the CSS "still frame" placeholder in
 * `src/components/visuals/TapeFrame.tsx`. Supply `image` to use a real
 * photograph instead — the alt text is required and should describe the moment,
 * not the Tape name. See ASSETS.md for filenames and dimensions.
 */
export type UseCase = {
  name: string;
  /** One warm, specific line. No statistics, no invented product claims. */
  line: string;
  /** Camcorder-style date, purely illustrative. */
  date: string;
  palette: { base: string; mid: string; accent: string };
  image?: { src: string; alt: string };
};

export const useCases: readonly UseCase[] = [
  {
    name: "Our First Year",
    line: "From the drive home to those first wobbly steps.",
    date: "03 · 14 · 2026",
    palette: { base: "#2b211d", mid: "#6a4630", accent: "#d59a5c" },
  },
  {
    name: "Summer Vacation",
    line: "Sand in everything, and nobody minded.",
    date: "07 · 09 · 2026",
    palette: { base: "#23231f", mid: "#7a5c30", accent: "#e6b85c" },
  },
  {
    name: "Grandma’s Stories",
    line: "The ones nobody thought to write down.",
    date: "11 · 02 · 2025",
    palette: { base: "#282320", mid: "#5d4a3a", accent: "#b99270" },
  },
  {
    name: "Football Season",
    line: "Every Saturday, from tryouts to the last whistle.",
    date: "09 · 21 · 2026",
    palette: { base: "#1f231e", mid: "#48532f", accent: "#9aa45c" },
  },
  {
    name: "Christmas 2026",
    line: "Morning light, torn paper, the same old songs.",
    date: "12 · 25 · 2026",
    palette: { base: "#2a1e1c", mid: "#6e3a2e", accent: "#c96f4e" },
  },
  {
    name: "Growing Up",
    line: "One recording a month, for as long as she’ll let us.",
    date: "05 · 30 · 2026",
    palette: { base: "#252420", mid: "#575043", accent: "#a99a80" },
  },
  {
    name: "Life With Our Dog",
    line: "He was small once. Briefly.",
    date: "02 · 17 · 2026",
    palette: { base: "#26201b", mid: "#6b4c2c", accent: "#cf9f60" },
  },
  {
    name: "Wedding Weekend",
    line: "The toasts, the first dance, the quiet in between.",
    date: "06 · 06 · 2026",
    palette: { base: "#232022", mid: "#5b4a4a", accent: "#bda28f" },
  },
];
