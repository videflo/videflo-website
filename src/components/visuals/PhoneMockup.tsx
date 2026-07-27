import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * A stylised iPhone showing Videflo's recording screen.
 *
 * The interface elements are drawn in CSS rather than screenshotted, so the
 * mockup stays crisp at any size and can be swapped for real App Store captures
 * later (see ASSETS.md). Everything inside is decorative — the surrounding
 * section carries the actual copy — so the interface layer is hidden from
 * assistive technology and only the photograph keeps its description.
 */
export function PhoneMockup({
  src,
  alt,
  timestamp,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  /** Camcorder-style timestamp burned into the mockup's preview. */
  timestamp: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[17.5rem] sm:max-w-[19rem]",
        className,
      )}
    >
      {/* Warm halo so the dark device sits softly on cream. */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-[999px] bg-[radial-gradient(60%_50%_at_50%_45%,rgba(230,184,92,0.22),transparent_70%)] blur-xl"
      />

      <div className="bg-ink shadow-lift relative rounded-[2.75rem] p-[0.6rem] ring-1 ring-white/12">
        <div className="rounded-[2.25rem] bg-black p-px ring-1 ring-white/10">
          <div className="bg-ink relative aspect-[9/19.5] overflow-hidden rounded-[2.2rem]">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 640px) 304px, 280px"
              className="object-cover"
              priority={priority}
            />

            {/* Interface layer — decorative. */}
            <div aria-hidden="true" className="absolute inset-0">
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/55 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

              {/* Dynamic island */}
              <div className="absolute top-2.5 left-1/2 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

              {/* Recording status */}
              <div className="absolute top-12 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/45 px-3 py-1.5 backdrop-blur-sm">
                <span className="bg-rec size-2 rounded-full" />
                <span className="text-paper/95 text-[0.6875rem] font-semibold tracking-[0.14em] tabular-nums">
                  REC 04:12
                </span>
              </div>

              {/* Burned-in timestamp, matching the app's treatment */}
              <p className="text-paper/90 absolute bottom-40 left-4 max-w-[80%] text-[0.6875rem] font-medium tracking-wide [text-shadow:0_1px_3px_rgb(0_0_0_/_0.65)]">
                {timestamp}
              </p>

              {/* Centered zoom slider */}
              <div className="absolute bottom-30 left-1/2 h-1.5 w-32 -translate-x-1/2 rounded-full bg-white/25">
                <span className="bg-paper absolute top-1/2 left-[38%] size-4 -translate-y-1/2 rounded-full shadow-md" />
              </div>

              {/* Finish · Record · Flip */}
              <div className="absolute inset-x-0 bottom-9 flex items-center justify-center gap-9">
                <span className="text-paper/80 text-[0.625rem] font-semibold tracking-[0.12em] uppercase">
                  Finish
                </span>
                <span className="border-paper/85 grid size-16 place-items-center rounded-full border-[2.5px]">
                  <span className="bg-rec size-11 rounded-full" />
                </span>
                <span className="grid size-9 place-items-center rounded-full bg-white/15">
                  <svg
                    viewBox="0 0 20 20"
                    className="text-paper/85 size-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 8.5A5.5 5.5 0 0 1 14.8 7" />
                    <path d="M16 11.5A5.5 5.5 0 0 1 5.2 13" />
                    <path d="M13 4.5h2.2v2.2" />
                    <path d="M7 15.5H4.8v-2.2" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
