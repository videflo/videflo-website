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
 * Answers are plain text so the same words are rendered on the page and
 * emitted as FAQPage structured data with no chance of the two drifting apart.
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
      "Yes, and it takes one tap: Videflo uses Sign in with Apple. There's no Videflo password. Your account is what protects your Tapes in Videflo Cloud, brings them to a new iPhone, and lets you share a Tape with family.",
    ],
    article: "accounts-and-signing-in",
  },
  {
    question: "Where are my recordings stored?",
    answer: [
      "On your iPhone first, inside Videflo's own library — and, once each upload finishes, in Videflo Cloud as well. Your original files on the phone are never changed, and a Tape is seen by nobody but you unless you invite them to it.",
    ],
    article: "videflo-cloud",
  },
  {
    question: "Does Videflo back up my videos to the cloud?",
    answer: [
      "Yes, automatically. Every recording is copied to Videflo Cloud in the background, so a Tape survives a lost or replaced phone. A recording is protected once its upload has finished; until then it exists only on your iPhone.",
    ],
    article: "videflo-cloud",
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
    question: "Can I share a Tape with my family?",
    answer: [
      "Yes. Press and hold the Tape and choose Invite to Tape — pick people from Friends & Family, search by @username, or send a link by text. Everyone who joins can watch the whole Tape and add their own recordings to it.",
    ],
    article: "shared-tapes",
  },
  {
    question: "How do I get a Tape out of the app?",
    answer: [
      "Open the Tape, tap the ⋯ menu and choose Export Tape. Videflo turns the whole Tape into one video and saves it straight to your Photos library, where you can share it like any other video.",
    ],
    article: "export-a-tape",
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
      "No. There's no trimming, no filters, no transitions, and no timeline — a Tape is kept exactly as it was recorded. You can delete a recording you don't want, and you can export a Tape to Photos and edit the copy there.",
    ],
    article: "manage-recordings",
  },
  {
    question: "What happens if I delete the app?",
    answer: [
      "Deleting Videflo removes the recordings on that iPhone. Everything already in Videflo Cloud stays safe and comes back when you reinstall and sign in; a recording that hadn't finished uploading is lost with the phone.",
      "Deleting the app also doesn't cancel a subscription — that lives in your Apple Account and has to be cancelled there.",
    ],
    article: "backups-and-new-iphone",
  },
  {
    question: "How much does Videflo cost?",
    answer: [
      "One monthly subscription — $9.99 a month in the United States, shown in your own currency on the App Store — with 50 GB of Videflo Cloud included. 100 GB and 250 GB are available as upgrades.",
    ],
    article: "subscription-plans",
  },
  {
    question: "How do I cancel my subscription?",
    answer: [
      "Subscriptions are billed and managed by Apple. On your iPhone, open the Settings app, tap your name at the top, then Subscriptions, and select Videflo.",
      "Cancelling stops the next renewal; you keep access until the end of the period you've already paid for. Nothing is deleted when you cancel, and Videflo doesn't currently remove content from Videflo Cloud because a subscription has ended.",
    ],
    article: "manage-subscription",
  },
  {
    question: "I've paid but Videflo is asking me to subscribe again.",
    answer: [
      "Tap Restore Purchases on the subscription screen and let it finish, making sure the iPhone is signed in to the Apple Account that bought the subscription.",
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
      "Please don't delete and reinstall the app as a first step — a recording that hadn't finished uploading would go with it. Check your Tapes say Backed Up, and email us before doing anything drastic.",
    ],
    article: "troubleshooting-app",
  },
] as const;
