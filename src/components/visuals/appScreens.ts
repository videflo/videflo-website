/**
 * Real Videflo screens, exported from the approved App Store sources by
 * `Videflo-Marketing/14_app_store_screenshot_redesign/tools/export_web_screens.py`.
 *
 * The exports stop above anything private: Home above the Together row (real
 * @handles) and Your Tapes above the tab bar. All people and footage are
 * generated demo content. See "App screens" in ASSETS.md.
 */
export const appScreens = {
  recording: {
    src: "/images/app-screens/recording.jpg",
    width: 900,
    height: 1772,
    alt: "Videflo's recording screen filming a Tape called Maya's Birthday: a smiling girl by her cake, her mom kissing her cheek and her grandma clapping.",
  },
  recordingCandles: {
    src: "/images/app-screens/recording-candles.jpg",
    width: 900,
    height: 1772,
    alt: "Videflo's recording screen filming a girl blowing out her birthday candles.",
  },
  homeContinue: {
    src: "/images/app-screens/home-continue.jpg",
    width: 900,
    height: 1472,
    alt: "Videflo's Home screen with the Tape Maya's Birthday, 2 recordings, and a gold Continue Recording button.",
  },
  playback: {
    src: "/images/app-screens/playback.jpg",
    width: 900,
    height: 1828,
    alt: "Videflo's player showing Maya's Birthday, with a Continue Recording button and a timeline of the whole Tape.",
  },
  sharedTapes: {
    src: "/images/app-screens/shared-tapes.jpg",
    width: 900,
    height: 1759,
    alt: "Your Tapes with the Shared filter on, showing Shared Tapes such as Grandma's Stories and Beach Day by Mike.",
  },
  yourTapes: {
    src: "/images/app-screens/your-tapes.jpg",
    width: 900,
    height: 1759,
    alt: "Your Tapes showing Continue Watching above a grid of Tapes such as Summer Vacation and Christmas 2025.",
  },
  cloud: {
    src: "/images/app-screens/cloud.jpg",
    width: 900,
    height: 1759,
    alt: "Your Tapes with the Cloud filter on, listing the Tapes in Videflo Cloud.",
  },
} as const;

export type AppScreen = (typeof appScreens)[keyof typeof appScreens];
