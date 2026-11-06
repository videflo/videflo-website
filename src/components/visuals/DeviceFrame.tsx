import Image from "next/image";
import { cn } from "@/lib/cn";
import type { AppScreen } from "./appScreens";

/**
 * A real Videflo screen in a simple phone frame. The exports are cut short for
 * privacy, so place it where the frame runs off the bottom of its container, the
 * way the App Store screenshots do.
 */
export function DeviceFrame({
  screen,
  sizes,
  priority = false,
  className,
}: {
  screen: AppScreen;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "shadow-lift rounded-t-[10.5%_5.5%] bg-[#1c1a19] p-[1.6%] pb-0",
        className,
      )}
    >
      <Image
        src={screen.src}
        alt={screen.alt}
        width={screen.width}
        height={screen.height}
        sizes={sizes}
        priority={priority}
        quality={82}
        className="block h-auto w-full rounded-t-[9.5%_4.8%]"
      />
    </div>
  );
}
