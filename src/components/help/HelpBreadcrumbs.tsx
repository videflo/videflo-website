import Link from "next/link";

export type Crumb = { label: string; href?: string };

/**
 * Help Center breadcrumbs.
 *
 * The last crumb is the current page, so it is plain text carrying
 * `aria-current="page"` rather than a link to where the reader already is.
 * Matching `BreadcrumbList` structured data is emitted by the pages themselves,
 * from the same array.
 */
export function HelpBreadcrumbs({ crumbs }: { crumbs: readonly Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="text-ink-faint flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8125rem]">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li key={crumb.label} className="flex items-center gap-2">
              {crumb.href && !isLast ? (
                <Link
                  href={crumb.href}
                  className="hover:text-ink underline decoration-transparent decoration-1 underline-offset-4 transition-colors hover:decoration-current"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-ink-soft font-medium" aria-current="page">
                  {crumb.label}
                </span>
              )}
              {!isLast ? (
                <span aria-hidden="true" className="text-line-strong">
                  /
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
