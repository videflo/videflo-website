import type { HelpFaq } from "./types";

/**
 * The Help Center's own FAQ — the questions people ask before they know which
 * article they need.
 *
 * These are deliberately *not* generated from the articles' own FAQ lists. An
 * article's questions belong to its topic; these belong to the front door, and
 * each one exists to send a reader somewhere useful rather than to be the last
 * word on the subject.
 *
 * Answers are plain text so the same words are rendered on the page and emitted
 * as FAQPage structured data with no chance of the two drifting apart.
 */
export type HelpFaqItem = HelpFaq & {
  /** Slug of the article that covers this properly. */
  article?: string;
};

export const helpFaq: readonly HelpFaqItem[] = [
  {
    question: "What exactly is a Tape?",
    answer: [
      "A Tape is one memory that can keep growing. Rather than ending up with dozens of separate clips, you make a Tape for an occasion — a holiday, a birthday, a child's first year — and add recordings to it whenever the moment happens.",
      "Press play and the whole Tape runs from beginning to end as one continuous video, in the order things happened.",
    ],
    article: "what-is-videflo",
  },
  {
    question: "Do I need to create an account?",
    answer: [
      "No. Videflo has no account, no password, and nothing to sign into. Your Apple Account is used for the App Store purchase and nothing else.",
    ],
    article: "accounts-and-signing-in",
  },
  {
    question: "Where are my recordings stored?",
    answer: [
      "On your iPhone, inside Videflo's own storage. Videflo is local-first: nothing is uploaded to us, and we have no copy of anything you film.",
    ],
    article: "privacy-and-security",
  },
  {
    question: "Does Videflo back up my videos to the cloud?",
    answer: [
      "No. There's no cloud backup, and Videflo cannot recover recordings from a lost, damaged, or erased iPhone.",
      "Please keep an iPhone backup switched on, and export the Tapes you couldn't bear to lose so that a second copy exists outside the app.",
    ],
    article: "backups-and-new-iphone",
  },
  {
    question: "How do I add more footage to a Tape I already made?",
    answer: [
      "Open the Tape's menu — press and hold its picture — and choose Continue Recording. The new footage joins the end of that Tape automatically.",
      "Videflo will ask you to hold the phone the same way the Tape was started, so playback stays seamless.",
    ],
    article: "continue-recording-a-tape",
  },
  {
    question: "How do I get a Tape out of the app?",
    answer: [
      "Prepare it, then choose Export to Photos. Preparing builds one video file from the whole Tape; exporting copies that file into your photo library, where you can share it like any other video.",
    ],
    article: "prepare-and-export-a-tape",
  },
  {
    question: "Why can't I change a Tape's orientation or quality?",
    answer: [
      "Both are fixed when the Tape is created, because everything inside a Tape plays back as one continuous video. Mixing them would mean the picture flipping or changing part way through.",
      "If you need different settings, make a new Tape — your existing ones are unaffected.",
    ],
    article: "create-your-first-tape",
  },
  {
    question: "Can I edit my videos in Videflo?",
    answer: [
      "Only lightly. You can trim the start and end of an individual recording. There are no filters, transitions, music, or timeline editing — a Tape is meant to be what happened.",
    ],
    article: "trim-a-recording",
  },
  {
    question: "What happens if I delete the app?",
    answer: [
      "Deleting Videflo removes its data from your iPhone, including your Tapes and recordings. Unless they're in a device backup, or you exported them, they can't be recovered.",
      "Deleting the app also doesn't cancel a subscription — that lives in your Apple Account and has to be cancelled there.",
    ],
    article: "manage-subscription",
  },
  {
    question: "How do I cancel my subscription?",
    answer: [
      "Subscriptions are billed and managed by Apple. On your iPhone, open the Settings app, tap your name at the top, then Subscriptions, and select Videflo.",
      "Cancelling stops the next renewal; you keep access until the end of the period you've already paid for.",
    ],
    article: "manage-subscription",
  },
  {
    question: "I've paid but Videflo is asking me to subscribe again.",
    answer: [
      "Tap Restore Purchases and let it finish, making sure the iPhone is signed in to the Apple Account that bought the subscription.",
      "If nothing is found, check the subscription is still active in Settings → your name → Subscriptions.",
    ],
    article: "restore-purchases",
  },
  {
    question: "Is there a free trial?",
    answer: [
      "Videflo doesn't offer a free trial today. The subscription screen always shows the real price in your own currency before you commit to anything.",
    ],
    article: "subscription-plans",
  },
  {
    question: "Why does Videflo need camera and microphone access?",
    answer: [
      "It's a camcorder — the camera records the picture and the microphone records the sound that goes with it. Without microphone access your recordings would be silent.",
      "Both are used only while you're on the recording screen, and you can change your answer at any time in the iPhone's Settings app.",
    ],
    article: "camera-and-microphone-permissions",
  },
  {
    question: "Can I share a Tape with my family?",
    answer: [
      "Yes, once it's exported. Videflo has no share button of its own — export the Tape to your Photos library, then share it from there by AirDrop, message, or a shared album.",
    ],
    article: "sharing-your-videos",
  },
  {
    question: "Is Videflo available on Android or iPad?",
    answer: [
      "No. Videflo is an iPhone app and requires iOS 18 or later. There's no iPad, Mac, or Android version.",
    ],
    article: "download-videflo",
  },
  {
    question: "Something isn't working. What should I try first?",
    answer: [
      "Force-close Videflo and reopen it, then restart your iPhone. Check free storage and turn off Low Power Mode.",
      "Please don't delete and reinstall the app as a first step — that would delete your Tapes. Email us before doing anything that drastic.",
    ],
    article: "troubleshooting-app",
  },
] as const;
