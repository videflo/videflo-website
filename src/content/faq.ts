/**
 * Support FAQ.
 *
 * Answers are plain text so the same words can be rendered on the page and
 * emitted as FAQPage structured data without the two versions drifting apart.
 * An optional `link` is rendered after the answer and is left out of the
 * structured data.
 *
 * ACCURACY RULE: every answer must describe the app as it actually behaves.
 * Nothing here may promise cloud backup, sharing, sync, or Android.
 *
 * TO VERIFY BEFORE LAUNCH: the two subscription answers describe the App Store
 * purchase and Restore Purchases flow. Confirm the wording matches the shipping
 * StoreKit implementation and the product names configured in App Store Connect.
 */
export type FaqItem = {
  question: string;
  /** One or more plain-text paragraphs. No markup. */
  answer: readonly string[];
  link?: { href: string; label: string; external?: boolean };
};

export const faq: readonly FaqItem[] = [
  {
    question: "What is a Tape?",
    answer: [
      "A Tape is one memory that can keep growing. Instead of ending up with dozens of separate clips, you create a Tape for an event or a chapter of life — a holiday, a birthday, a football season, a child’s first year — and add recordings to it whenever the moment happens.",
      "When you press play, the whole Tape plays through as one continuous video, in the order the moments happened. You can keep as many Tapes as you like.",
    ],
  },
  {
    question: "How do I continue recording an existing Tape?",
    answer: [
      "Open the Tape from Home or from your Tapes library and choose Continue Recording. The new recording joins the end of that Tape automatically — there is nothing to stitch together afterwards.",
      "Videflo will ask you to hold your iPhone the same way the Tape was started, portrait or landscape, so the finished Tape plays back without flipping between the two.",
    ],
  },
  {
    question: "Where are my Tapes stored?",
    answer: [
      "On your iPhone, inside Videflo’s own storage. Videflo is local-first by design: your recordings are created and kept on your device, and nothing is uploaded to us.",
      "Because the files are app data, they are included in an iPhone backup that covers app data — for example an iCloud or computer backup you have set up yourself.",
    ],
  },
  {
    question: "Does Videflo back up my videos to the cloud?",
    answer: [
      "No. Videflo does not offer cloud backup, and it cannot recover recordings from a lost, erased, or damaged device.",
      "Please keep your own iPhone backup switched on, and export the Tapes you could not bear to lose so a second copy exists outside the app.",
    ],
    link: { href: "/support#storage", label: "How to protect your Tapes" },
  },
  {
    question: "How do I export a Tape?",
    answer: [
      "Open the Tape you want a copy of and choose Export. Videflo builds one video file from the whole Tape and hands it to iOS, so you can save it to Photos, keep it in Files, or send it to someone.",
      "Long Tapes and higher recording qualities take longer to prepare. You can keep using the rest of the app while a Tape is being prepared.",
    ],
  },
  {
    question: "How do I restore my subscription?",
    answer: [
      "If you reinstall Videflo or set up a new iPhone, open Videflo’s settings and choose Restore Purchases while signed in to the same Apple Account you bought the subscription with.",
      "Restoring brings back access to paid features. It does not bring back recordings, because those are stored on the device where they were made.",
    ],
  },
  {
    question: "How do I cancel my subscription?",
    answer: [
      "Subscriptions are billed and managed by Apple, not inside Videflo. On your iPhone, open the Settings app, tap your name at the top, then Subscriptions, and select Videflo.",
      "Cancelling stops the next renewal; you keep access until the end of the period you have already paid for. If the option is somewhere else on your version of iOS, Apple Support has the current steps.",
    ],
    link: {
      href: "https://support.apple.com",
      label: "Apple Support",
      external: true,
    },
  },
  {
    question: "What happens if I delete Videflo?",
    answer: [
      "Deleting the app removes its local data from your iPhone, including your Tapes and recordings. Unless they are in a device backup or you exported them, they cannot be recovered.",
      "Deleting the app also does not cancel a subscription — that lives in your Apple Account and has to be cancelled there.",
    ],
  },
  {
    question: "Why does Videflo need camera and microphone access?",
    answer: [
      "Videflo is a camcorder, so it needs the camera to record video and the microphone to record the sound that goes with it. Without microphone access your recordings would be silent.",
      "iOS asks you for each permission, and you can change your answer at any time in Settings. Videflo records only while you have started a recording in the app.",
    ],
  },
  {
    question: "How can I contact support?",
    answer: [
      "Email us and a person will read it. Telling us your iPhone model, your iOS version, and what you were doing when something went wrong helps us help you faster.",
    ],
  },
];
