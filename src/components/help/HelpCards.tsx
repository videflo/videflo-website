import Link from "next/link";
import { CategoryIcon } from "@/components/help/CategoryIcon";
import type { HelpArticle, HelpCategory } from "@/content/help";
import { cn } from "@/lib/cn";

/**
 * The two card shapes the Help Center uses, and the small arrow they share.
 *
 * Both are a single `<Link>` wrapping the whole card, so the tap target is the
 * card and there is exactly one focusable element in it — no nested links, and
 * nothing that reads twice to a screen reader.
 */

function ArrowGlyph({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={cn("size-4 shrink-0", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10h11" />
      <path d="m11 6 4 4-4 4" />
    </svg>
  );
}

export function CategoryCard({
  category,
  count,
}: {
  category: HelpCategory;
  count: number;
}) {
  return (
    <Link
      href={`/help/topics/${category.id}`}
      className={cn(
        "group border-line bg-paper relative flex h-full flex-col rounded-2xl border p-6 sm:p-7",
        "transition-[border-color,box-shadow,transform] duration-300 ease-out",
        "hover:border-line-strong hover:shadow-soft motion-safe:hover:-translate-y-0.5",
      )}
    >
      <span className="bg-cream text-ink-soft group-hover:bg-shell grid size-11 place-items-center rounded-xl transition-colors duration-300">
        <CategoryIcon id={category.id} />
      </span>

      <h3 className="font-display text-ink mt-5 text-lg font-semibold">
        {category.title}
      </h3>
      <p className="text-ink-muted mt-2 text-[0.9375rem] leading-relaxed">
        {category.description}
      </p>

      <span className="text-ink-faint mt-5 flex items-center gap-2 text-[0.8125rem] font-semibold tracking-wide">
        {count} {count === 1 ? "article" : "articles"}
        <ArrowGlyph className="text-ink-faint transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

export function ArticleCard({
  article,
  showCategory,
  categoryLabel,
}: {
  article: HelpArticle;
  /** Adds the topic name above the title — used where articles from several topics sit together. */
  showCategory?: boolean;
  categoryLabel?: string;
}) {
  return (
    <Link
      href={`/help/${article.slug}`}
      className={cn(
        "group border-line bg-paper flex h-full flex-col rounded-2xl border p-6",
        "transition-[border-color,box-shadow,transform] duration-300 ease-out",
        "hover:border-line-strong hover:shadow-soft motion-safe:hover:-translate-y-0.5",
      )}
    >
      {showCategory && categoryLabel ? (
        <span className="text-ink-faint text-[0.6875rem] font-semibold tracking-[0.18em] uppercase">
          {categoryLabel}
        </span>
      ) : null}
      <h3
        className={cn(
          "font-display text-ink group-hover:text-gold-deep text-[1.0625rem] leading-snug font-semibold transition-colors",
          showCategory && categoryLabel && "mt-2.5",
        )}
      >
        {article.title}
      </h3>
      <p className="text-ink-muted mt-2 text-[0.9375rem] leading-relaxed">
        {article.description}
      </p>
      <span
        aria-hidden="true"
        className="text-ink-faint mt-auto flex items-center gap-2 pt-5 text-[0.8125rem] font-semibold"
      >
        Read
        <ArrowGlyph className="transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

/** Compact row used in lists — a topic page, or “what to read next”. */
export function ArticleRow({ article }: { article: HelpArticle }) {
  return (
    <Link
      href={`/help/${article.slug}`}
      className="group border-line -mx-3 flex items-start gap-4 rounded-xl border-b px-3 py-5 transition-colors last:border-b-0 hover:bg-[color-mix(in_srgb,var(--color-cream)_60%,transparent)]"
    >
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-ink group-hover:text-gold-deep text-[1.0625rem] font-semibold transition-colors">
          {article.title}
        </h3>
        <p className="text-ink-muted mt-1.5 text-[0.9375rem] leading-relaxed">
          {article.description}
        </p>
      </div>
      <ArrowGlyph className="text-ink-faint mt-1 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
    </Link>
  );
}
