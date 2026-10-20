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
    name: "Our First Year",
    line: "From the drive home to those first wobbly steps.",
    date: "03 · 14 · 2026",
    palette: { base: "#2b211d", mid: "#6a4630", accent: "#d59a5c" },
    image: {
      src: "/images/tapes/our-first-year.jpg",
      alt: "New parents sit on a sunlit bed cradling their newborn in a cream knit blanket, the father resting his face against the mother’s as she smiles down at the baby.",
      position: "50% 38%",
    },
  },
  {
    name: "Summer Vacation",
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
    name: "Grandma’s Stories",
    line: "The ones nobody thought to write down.",
    date: "11 · 02 · 2025",
    palette: { base: "#282320", mid: "#5d4a3a", accent: "#b99270" },
    image: {
      src: "/images/tapes/grandmas-stories-v2.jpg",
      alt: "A grandmother sits between her grandson and granddaughter at a sunlit kitchen table, all three heads close together as they laugh over an old family photo album.",
      position: "46% 40%",
    },
  },
  {
    name: "Football Season",
    line: "Every Saturday, from tryouts to the last whistle.",
    date: "09 · 21 · 2026",
    palette: { base: "#1f231e", mid: "#48532f", accent: "#9aa45c" },
    image: {
      src: "/images/tapes/football-season.jpg",
      alt: "A father carries his cheering daughter on his shoulders on a sunny sports field after a game, her arms raised in celebration.",
      position: "50% 30%",
    },
  },
  {
    name: "Christmas 2026",
    line: "Morning light, torn paper, the same old songs.",
    date: "12 · 25 · 2026",
    palette: { base: "#2a1e1c", mid: "#6e3a2e", accent: "#c96f4e" },
    image: {
      src: "/images/tapes/christmas-2026.jpg",
      alt: "On Christmas morning, a family in matching cream pajamas sits on the rug by the tree as their little boy gasps with delight opening a present.",
      position: "46% 52%",
    },
  },
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
    name: "Life With Our Dog",
    line: "He was small once. Briefly.",
    date: "02 · 17 · 2026",
    palette: { base: "#26201b", mid: "#6b4c2c", accent: "#cf9f60" },
    image: {
      src: "/images/tapes/life-with-our-dog.jpg",
      alt: "A happy golden retriever bounds across a sunny backyard as a mother, father and small son run laughing behind him.",
      position: "50% 38%",
    },
  },
  {
    name: "Wedding Weekend",
    line: "The toasts, the first dance, the quiet in between.",
    date: "06 · 06 · 2026",
    palette: { base: "#232022", mid: "#5b4a4a", accent: "#bda28f" },
    image: {
      src: "/images/tapes/wedding-weekend.jpg",
      alt: "A bride and groom laugh with their foreheads together during their first dance on a lawn at golden hour, as guests clap behind them.",
      position: "50% 25%",
    },
  },
];
