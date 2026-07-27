/** First focusable element on every page — lets keyboard users skip the nav. */
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="focus:bg-ink focus:text-paper sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-full focus:px-5 focus:py-3 focus:text-sm focus:font-semibold"
    >
      Skip to main content
    </a>
  );
}
