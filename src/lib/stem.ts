/**
 * A very small English suffix trimmer, used only to rank Help Center search
 * results.
 *
 * The problem it solves is real and was caught in QA: someone types "export" and
 * the article called "Preparing and **exporting** a Tape" doesn't count as a
 * title match, so the troubleshooting article outranks the how-to. Typing
 * "restore" missed "**Restoring** a purchase" entirely for the same reason.
 * People search with the word form that is in their head, not the one in the
 * heading.
 *
 * It is deliberately crude — no dictionary, no library, no irregular forms. It
 * only has to make word forms of the same word collide, and it is applied
 * identically to the query and to the indexed titles, so a wrong-but-consistent
 * stem still matches correctly. It never affects *which* articles match (that is
 * a plain substring test over the full text); only the order they appear in.
 *
 * Trimming runs to a fixed point so that "settings" → "setting" → "sett" lands
 * in the same place as "setting" → "sett". Applying one pass would give the two
 * different stems and reintroduce the bug for plurals of gerunds.
 */
const suffixes = ["ing", "ed", "es", "s", "e"] as const;

export function stem(word: string): string {
  let current = word;

  for (;;) {
    let next = current;

    for (const suffix of suffixes) {
      // The length guard keeps short words intact: "tape" must stay "tape"
      // rather than collapsing to "tap", and "the" must not become "th".
      if (current.length > suffix.length + 3 && current.endsWith(suffix)) {
        next = current.slice(0, -suffix.length);
        break;
      }
    }

    if (next === current) return current;
    current = next;
  }
}

/** Lower-case, split on anything that isn't a letter or digit, and stem. */
export function stemTokens(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean)
    .map(stem);
}
