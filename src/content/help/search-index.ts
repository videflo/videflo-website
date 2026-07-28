/**
 * The search index, on its own entry point.
 *
 * `HelpSearch` reaches this module through a dynamic `import()` rather than a
 * top-level one, which is the whole reason the file exists: the index is every
 * word of every article, and bundling it into the page's first load would make
 * a visitor who only wants to read one article pay for the search over all of
 * them. Importing it here — and only here — gives the bundler a seam to split
 * on, so the index arrives as its own chunk the moment someone focuses the
 * field.
 *
 * Keep this file to a re-export. Anything else added would land in that chunk.
 */
export { helpSearchIndex, type HelpSearchDoc } from "./index";
