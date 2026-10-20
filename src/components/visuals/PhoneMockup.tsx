import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * A stylised iPhone showing Videflo's recording screen, mid-take.
 *
 * The interface elements are drawn in CSS rather than screenshotted, so the
 * mockup stays crisp at any size and can be swapped for real App Store captures
 * later (see ASSETS.md). Everything inside is decorative — the surrounding
 * section carries the actual copy — so the interface layer is hidden from
 * assistive technology and only the photograph keeps its description.
 *
 * The chrome follows the app's `RecordingView` while recording, scaled to this
 * frame (about 0.72 of an iPhone's points): a 9:16 picture fitted between black
 * mattes, a red dot and timer in a dark capsule (`RecordingHUD`), the Stop
 * square inside Record's ring, Pause opposite the timestamp, and the
 * flashlight in the other slot.
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
  /** Camcorder-style timestamp shown on the mockup's preview: "date · time". */
  timestamp: string;
  className?: string;
  priority?: boolean;
}) {
  // The app's stamp puts the date and the time on separate lines.
  const stampLines = timestamp.split(" · ");

  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[17.5rem] sm:max-w-[19rem]",
        className,
      )}
    >
      {/*
        The device stays dark on purpose: in the app, capture is the dark
        theater (`VidefloTheme.Media`) inside the cream album. A warm halo lets
        it sit softly on cream.
      */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-[999px] bg-[radial-gradient(60%_50%_at_50%_45%,rgba(230,184,92,0.22),transparent_70%)] blur-xl"
      />

      <div className="bg-ink shadow-lift relative rounded-[2.75rem] p-[0.6rem] ring-1 ring-white/12">
        <div className="rounded-[2.25rem] bg-black p-px ring-1 ring-white/10">
          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.2rem] bg-black">
            {/*
              The camera preview is fitted, not filled (`.resizeAspect`), so a
              9:16 picture sits between black mattes on a 19.5:9 screen, and
              every control is laid out inside the picture.
            */}
            <div className="absolute inset-x-0 top-1/2 aspect-[9/16] -translate-y-1/2 overflow-hidden">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 640px) 284px, 260px"
                quality={90}
                className="object-cover"
                priority={priority}
              />

              {/* Interface layer — decorative. */}
              <div aria-hidden="true" className="absolute inset-0">
                {/* The app's contrast scrims, inside the picture only. */}
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />

                {/* Close. New Tape is hidden while a take is running. */}
                <span className="absolute top-3 left-4 grid size-[1.8rem] place-items-center rounded-full bg-white/14 ring-1 ring-white/8">
                  <svg
                    viewBox="0 0 12 12"
                    className="size-[0.65rem] text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  >
                    <path d="M2 2l8 8M10 2l-8 8" />
                  </svg>
                </span>

                {/* Recording status: a red dot and the elapsed time. */}
                <div className="absolute top-[3.4rem] left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-black/35 px-1.5 py-0.5">
                  <span className="bg-rec size-[0.3rem] rounded-full" />
                  <span className="text-[0.625rem] font-medium text-white tabular-nums">
                    04:12
                  </span>
                </div>

                {/* Live timestamp, in the bottom-left corner of the picture. */}
                <p className="absolute bottom-1.5 left-2 font-mono text-[0.5rem] leading-[1.15] font-medium text-white/50 [text-shadow:0_0.5px_1.5px_rgb(0_0_0_/_0.5)]">
                  {stampLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>

                {/* Zoom slider, at rest */}
                <div className="absolute bottom-[5.6rem] left-1/2 h-0.5 w-30 -translate-x-1/2 rounded-full bg-white/22 opacity-55">
                  <span className="absolute inset-y-0 left-0 w-[30%] rounded-full bg-white/85" />
                  <span className="absolute top-1/2 left-[30%] size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_1px_2px_rgb(0_0_0_/_0.35)]" />
                </div>

                {/* Flashlight · Stop · Pause */}
                <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-4">
                  <span className="grid size-[2.3rem] place-items-center rounded-full bg-white/12 ring-1 ring-white/8">
                    <svg
                      viewBox="0 0 24 24"
                      className="size-4 text-white"
                      fill="currentColor"
                    >
                      <mask id="phone-bolt-slash">
                        <rect width="24" height="24" fill="white" />
                        <path
                          d="M4 3l17 17"
                          stroke="black"
                          strokeWidth="4.5"
                          strokeLinecap="round"
                        />
                      </mask>
                      <path
                        mask="url(#phone-bolt-slash)"
                        d="M13.4 2.2 5 13.2c-.4.5 0 1.2.6 1.2h5.2l-1.2 7.1c-.1.7.8 1.1 1.2.5l8.3-11c.4-.5 0-1.2-.6-1.2h-5.2l1.3-7.1c.1-.7-.8-1.1-1.2-.5Z"
                      />
                      <path
                        d="M4 3l17 17"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <span className="grid size-14 place-items-center rounded-full border-[3px] border-white/90">
                    <span className="bg-rec size-6 rounded-[0.3rem]" />
                  </span>
                  <span className="grid size-[2.3rem] place-items-center rounded-full bg-white/12 ring-1 ring-white/8">
                    <svg
                      viewBox="0 0 16 16"
                      className="size-4 text-white"
                      fill="currentColor"
                    >
                      <rect x="3.5" y="2.5" width="3" height="11" rx="1" />
                      <rect x="9.5" y="2.5" width="3" height="11" rx="1" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* Dynamic island, in the top matte */}
            <div
              aria-hidden="true"
              className="absolute top-2.5 left-1/2 h-6 w-24 -translate-x-1/2 rounded-full bg-black ring-1 ring-white/5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
