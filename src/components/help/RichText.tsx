import { Fragment, type ReactNode } from "react";

/**
 * Renders the one piece of markup allowed in Help Center content: `**emphasis**`
 * becomes `<strong>`.
 *
 * Deliberately not Markdown, and deliberately not `dangerouslySetInnerHTML`.
 * Article strings are also flattened into the search index and into structured
 * data, so the less markup they carry the better — and a bold run is the only
 * thing the prose genuinely needs, for the on-screen names of buttons and
 * settings a reader is hunting for.
 *
 * An unmatched `**` is left as ordinary text rather than swallowing the rest of
 * the sentence, so a typo can never blank out a paragraph.
 */
export function RichText({ text }: { text: string }): ReactNode {
  if (!text.includes("**")) return text;

  // Split on the delimiter and keep it: odd-indexed pieces are the emphasised
  // runs, which holds true only when the delimiters are balanced.
  const pieces = text.split("**");
  if (pieces.length % 2 === 0) return text; // unbalanced — leave it alone

  return pieces.map((piece, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="text-ink font-semibold">
        {piece}
      </strong>
    ) : (
      <Fragment key={index}>{piece}</Fragment>
    ),
  );
}
