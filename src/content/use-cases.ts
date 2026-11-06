/**
 * Example Tapes shown on the homepage.
 *
 * Each entry is one *event or chapter of life* — never a whole life. That
 * distinction is the product idea, so keep it when editing.
 *
 * Every Tape has a photograph in `public/images/tapes/`, generated for Videflo
 * (see ASSETS.md for the model, prompts and terms). The alt text describes the
 * moment, not the Tape name. `position` is the CSS object-position that keeps
 * the faces in frame from the 4:3 phone crop to the widest desktop tile.
 * `palette` still tints the sprocket band, and is the fallback cover if an
 * image is ever removed.
 */
export type UseCase = {
  name: string;
  /** One warm, specific line. No statistics, no invented product claims. */
  line: string;
  /** Camcorder-style date, purely illustrative. */
  date: string;
  palette: { base: string; mid: string; accent: string };
  image?: { src: string; alt: string; position?: string };
};

export const useCases: readonly UseCase[] = [
  {
    name: "Growing Up",
    line: "One recording a month, for as long as she’ll let us.",
    date: "05 · 30 · 2026",
    palette: { base: "#252420", mid: "#575043", accent: "#a99a80" },
    image: {
      src: "/images/tapes/growing-up.jpg",
      alt: "A toddler girl in a white dress takes wobbly first steps across a rug, arms out and smiling, as her father kneels behind her cheering.",
      position: "45% 40%",
    },
  },
  {
    name: "Family Vacations",
    line: "Sand in everything, and nobody minded.",
    date: "07 · 09 · 2026",
    palette: { base: "#23231f", mid: "#7a5c30", accent: "#e6b85c" },
    image: {
      src: "/images/tapes/summer-vacation.jpg",
      alt: "A laughing family of four runs hand in hand through the shallow waves of a sunny beach, water splashing around their feet.",
      position: "50% 32%",
    },
  },
  {
    name: "Family Stories",
    line: "The ones nobody thought to write down.",
    date: "11 · 02 · 2025",
    palette: { base: "#282320", mid: "#5d4a3a", accent: "#b99270" },
    image: {
      src: "/images/tapes/grandmas-stories-v2.jpg",
      alt: "A grandmother sits between her grandson and granddaughter at a sunlit kitchen table, all three heads close together as they laugh over an old family photo album.",
      position: "46% 40%",
    },
  },
];
