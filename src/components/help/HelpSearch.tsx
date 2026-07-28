"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  useCallback,
  useDeferredValue,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import type { HelpSearchDoc } from "@/content/help";
import { cn } from "@/lib/cn";
import { stem } from "@/lib/stem";

/**
 * Client-side search across every Help Center article.
 *
 * The index is built once at build time in `src/content/help/index.ts` from the
 * articles themselves — headings, steps, tips, mistakes, troubleshooting, and
 * FAQ answers all included — so there is no keyword list to keep in step with
 * the prose.
 *
 * It is fetched on *intent* rather than on page load. Every word of every
 * article is a meaningful download, and most visitors arrive to read one page
 * rather than to search all of them — so the chunk is requested the moment the
 * field is focused or hovered, which in practice lands well before the first
 * keystroke is finished. Until it does, the field stays usable and says so.
 *
 * Matching is AND across whitespace-separated terms: every term must appear
 * somewhere in the article. That is what makes "export photos" narrow instead of
 * returning everything that mentions either word.
 *
 * Keyboard: `/` focuses the field from anywhere on the page, arrows move through
 * results, Enter opens the highlighted one, Escape clears. The field is an ARIA
 * combobox over a listbox, and the result count is announced politely so a
 * screen-reader user hears the list change without it stealing focus.
 */

const MAX_RESULTS = 12;

type Scored = { doc: HelpSearchDoc; score: number };

/**
 * Rank one article against the query.
 *
 * Whether an article matches at all is the plain substring test on `haystack`.
 * Everything below only decides *order*, and it is scored on stems so that the
 * word form someone types lines up with the one in the heading — searching
 * "export" has to put "Preparing and exporting a Tape" above "When exporting
 * fails", and "restore" has to find "Restoring a purchase". Both got this wrong
 * before stemming, which is why it exists.
 */
function scoreDoc(
  doc: HelpSearchDoc,
  terms: readonly string[],
  stems: readonly string[],
): number {
  const title = doc.title.toLowerCase();
  const description = doc.description.toLowerCase();
  let score = 0;

  for (let i = 0; i < terms.length; i++) {
    const term = terms[i];
    const termStem = stems[i];

    if (!doc.haystack.includes(term)) return 0; // every term must match

    // A whole word of the title, in any of its forms. The strongest signal
    // there is: the article is *about* this.
    if (doc.titleStems.includes(termStem)) {
      // First word of the title outranks the same word buried later, so
      // "Restoring a purchase" beats an article that merely mentions restoring.
      score += doc.titleStems[0] === termStem ? 150 : 100;
    } else if (title.includes(term)) {
      // Matched inside a word rather than as one — "sub" in "subscription".
      score += 45;
    }

    if (doc.descriptionStems.includes(termStem)) score += 30;
    else if (description.includes(term)) score += 18;

    if (doc.category.toLowerCase().includes(term)) score += 15;

    score += 5; // matched somewhere in the body
  }

  return score;
}

export function HelpSearch({
  autoFocusHint = true,
  className,
}: {
  /** Shows the “press /” hint on pointer-and-keyboard devices. */
  autoFocusHint?: boolean;
  className?: string;
}) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = useId();
  const optionId = (index: number) => `${listId}-option-${index}`;

  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const deferred = useDeferredValue(query);

  /*
    The index, loaded on demand. `requestedRef` rather than state because it
    guards the request itself — flipping it must not re-render, and it must be
    true the instant `loadIndex` is called so that focus-then-hover can't fire
    two imports.
  */
  const [index, setIndex] = useState<readonly HelpSearchDoc[] | null>(null);
  const requestedRef = useRef(false);

  const loadIndex = useCallback(() => {
    if (requestedRef.current) return;
    requestedRef.current = true;

    import("@/content/help/search-index")
      .then((module) => setIndex(module.helpSearchIndex))
      .catch(() => {
        // Let a failed chunk be retried — a dropped connection shouldn't leave
        // the field permanently unable to search.
        requestedRef.current = false;
      });
  }, []);

  /*
    The highlight belongs to a particular result set, so it is reset *during*
    render when the query changes rather than afterwards in an effect. React
    re-runs this component immediately with the corrected value and nothing is
    committed in between, so there is no flash of a stale highlight — and, more
    importantly, Enter can never open an article the reader can no longer see.
  */
  const [highlightedFor, setHighlightedFor] = useState(deferred);
  if (highlightedFor !== deferred) {
    setHighlightedFor(deferred);
    setActive(0);
  }

  const terms = useMemo(
    () =>
      deferred
        .toLowerCase()
        .split(/\s+/)
        .map((term) => term.trim())
        .filter(Boolean),
    [deferred],
  );

  // Stemmed once per query rather than once per query per article.
  const stems = useMemo(() => terms.map(stem), [terms]);

  const results = useMemo(() => {
    if (terms.length === 0 || !index) return [];

    const scored: Scored[] = [];
    for (const doc of index) {
      const score = scoreDoc(doc, terms, stems);
      if (score > 0) scored.push({ doc, score });
    }

    scored.sort(
      (a, b) => b.score - a.score || a.doc.title.localeCompare(b.doc.title),
    );
    return scored;
  }, [index, stems, terms]);

  const shown = results.slice(0, MAX_RESULTS);
  const isOpen = terms.length > 0;
  const isLoading = isOpen && !index;

  // `/` as a focus shortcut, ignored while the visitor is already typing.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey)
        return;

      const target = event.target as HTMLElement | null;
      const tag = target?.tagName;
      if (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        tag === "SELECT" ||
        target?.isContentEditable
      ) {
        return;
      }

      event.preventDefault();
      inputRef.current?.focus();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Escape") {
        setQuery("");
        return;
      }

      if (!isOpen || shown.length === 0) return;

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActive((index) => (index + 1) % shown.length);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setActive((index) => (index - 1 + shown.length) % shown.length);
      } else if (event.key === "Enter") {
        const target = shown[active];
        if (target) {
          event.preventDefault();
          router.push(`/help/${target.doc.slug}`);
        }
      }
    },
    [active, isOpen, router, shown],
  );

  return (
    <div className={cn("relative", className)}>
      <search>
        <div
          onPointerEnter={loadIndex}
          className={cn(
            "border-line-strong bg-paper flex items-center gap-3 rounded-full border px-5 py-3.5 sm:px-6 sm:py-4",
            "shadow-soft focus-within:border-ink transition-colors duration-200",
          )}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="text-ink-faint size-5 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          >
            <circle cx="9" cy="9" r="5.5" />
            <path d="m13.2 13.2 3.3 3.3" />
          </svg>

          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => {
              // Covers the case where text arrives without a focus event —
              // pasting, autofill, or a browser restoring the field on back.
              loadIndex();
              setQuery(event.target.value);
            }}
            onFocus={loadIndex}
            onKeyDown={onKeyDown}
            placeholder="Search for help…"
            aria-label="Search the Help Center"
            role="combobox"
            aria-expanded={isOpen}
            aria-controls={listId}
            aria-autocomplete="list"
            aria-activedescendant={
              isOpen && shown.length > 0 ? optionId(active) : undefined
            }
            autoComplete="off"
            spellCheck={false}
            className={cn(
              "text-ink placeholder:text-ink-faint min-w-0 flex-1 bg-transparent text-[1.0625rem] outline-none",
              // Safari draws its own clear button on type=search; ours is better placed.
              "[&::-webkit-search-cancel-button]:appearance-none",
            )}
          />

          {query ? (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              className="text-ink-faint hover:text-ink -mr-1 rounded-full p-1 transition-colors"
              aria-label="Clear search"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="size-[1.125rem]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              >
                <path d="m5.5 5.5 9 9" />
                <path d="m14.5 5.5-9 9" />
              </svg>
            </button>
          ) : autoFocusHint ? (
            <kbd
              aria-hidden="true"
              className="border-line text-ink-faint hidden rounded-md border px-1.5 py-0.5 font-sans text-[0.6875rem] font-semibold sm:inline-block"
            >
              /
            </kbd>
          ) : null}
        </div>
      </search>

      {/* Announced without moving focus. Empty while idle so it says nothing at rest. */}
      <p role="status" aria-live="polite" className="sr-only">
        {!isOpen
          ? ""
          : isLoading
            ? "Loading search…"
            : results.length === 0
              ? "No articles found."
              : `${results.length} ${results.length === 1 ? "article" : "articles"} found.`}
      </p>

      {isOpen ? (
        <div
          className={cn(
            "border-line bg-paper shadow-lift absolute inset-x-0 top-[calc(100%+0.75rem)] z-30 overflow-hidden rounded-2xl border",
            "max-h-[min(28rem,60vh)] overflow-y-auto overscroll-contain",
          )}
        >
          {isLoading ? (
            <p className="text-ink-muted px-5 py-7 text-center text-[0.9375rem]">
              Loading search…
            </p>
          ) : shown.length > 0 ? (
            <ul id={listId} role="listbox" aria-label="Search results">
              {shown.map((result, index) => (
                <li key={result.doc.slug} role="none">
                  <Link
                    id={optionId(index)}
                    role="option"
                    aria-selected={index === active}
                    href={`/help/${result.doc.slug}`}
                    onMouseEnter={() => setActive(index)}
                    className={cn(
                      "border-line block border-b px-5 py-4 transition-colors last:border-b-0",
                      index === active ? "bg-cream" : "hover:bg-cream/60",
                    )}
                  >
                    <span className="text-ink-faint block text-[0.6875rem] font-semibold tracking-[0.16em] uppercase">
                      {result.doc.category}
                    </span>
                    <span className="font-display text-ink mt-1 block text-[1rem] leading-snug font-semibold">
                      {result.doc.title}
                    </span>
                    <span className="text-ink-muted mt-1 block text-[0.875rem] leading-relaxed">
                      {result.doc.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-5 py-7 text-center">
              <p className="text-ink text-[0.9375rem] font-semibold">
                Nothing matched “{deferred.trim()}”.
              </p>
              <p className="text-ink-muted mt-2 text-[0.875rem] leading-relaxed">
                Try a simpler word — “export”, “storage”, “subscription” — or{" "}
                <Link
                  href="/support"
                  className="text-ink hover:text-gold-deep font-semibold underline decoration-1 underline-offset-4"
                >
                  email us
                </Link>{" "}
                and a person will help.
              </p>
            </div>
          )}

          {results.length > shown.length ? (
            <p className="border-line text-ink-faint border-t px-5 py-3 text-[0.8125rem]">
              Showing {shown.length} of {results.length} matches. Add another
              word to narrow it down.
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
