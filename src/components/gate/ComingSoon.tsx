/**
 * The only thing the public can see while `gate.enabled` is true.
 *
 * It links to nothing, names nothing, and describes nothing — a visitor who
 * lands on it learns only that Videflo exists.
 *
 * The mark reproduces the app's launch screen: the wordmark in the system sans
 * at semibold with `flo` in the app's gold (#E6B85C), over the same near-black
 * field. `Wordmark` isn't reused because it renders the mark lowercase and adds
 * the app icon and the "Life in Tapes" line — more than belongs here.
 *
 * Rendered by BOTH `app/coming-soon/page.tsx` (what every request is rewritten
 * to) and `app/not-found.tsx`. The second is not redundant: the root layout
 * serialises its `notFound` slot into the flight payload of *every* page it
 * renders, so while the gate is up the real 404 page's copy and its links to
 * `/privacy`, `/support` and `/help` would otherwise ship inside the Coming
 * Soon response itself.
 */
export function ComingSoon() {
  return (
    <main className="bg-ink flex min-h-dvh flex-col items-center justify-between px-6 py-14 text-center sm:py-16">
      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-paper font-sans text-[clamp(2.75rem,13vw,5rem)] leading-none font-semibold tracking-[-0.022em]">
          Vide<span className="text-gold">flo</span>
        </h1>

        {/* The single gold accent besides the mark. Decorative, so it is hidden
            from assistive technology rather than announced as a separator. */}
        <span
          aria-hidden="true"
          className="bg-gold/60 mt-9 block h-px w-14 sm:mt-10 sm:w-16"
        />

        <p className="text-cream-muted mt-9 font-sans text-[0.8125rem] leading-none font-semibold tracking-[0.32em] uppercase sm:mt-10 sm:text-sm">
          Coming Soon
        </p>
      </div>

      <p className="text-cream-faint mt-16 font-sans text-xs">
        © 2026 Videflo LLC
      </p>
    </main>
  );
}
