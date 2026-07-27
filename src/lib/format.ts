/**
 * Join a list into readable prose: ["a", "b", "c"] -> "a, b, and c".
 *
 * Used so the launch-market list in `src/config/site.ts` can be written once as
 * an array and still read as a sentence in the legal pages.
 */
export function formatList(
  items: readonly string[],
  conjunction: "and" | "or" = "and",
): string {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} ${conjunction} ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, ${conjunction} ${items[items.length - 1]}`;
}
