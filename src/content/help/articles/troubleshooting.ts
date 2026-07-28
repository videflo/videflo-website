import type { HelpArticle } from "../types";

export const troubleshootingArticles: readonly HelpArticle[] = [
  {
    slug: "troubleshooting-app",
    title: "The app crashes, freezes, or won't open",
    description:
      "The general fixes, in the order worth trying them — and the one thing not to do.",
    category: "troubleshooting",
    keywords: [
      "crash",
      "freeze",
      "stuck",
      "won't open",
      "quit",
      "slow",
      "hang",
      "black screen",
      "loading",
    ],
    overview: [
      "Start here when something is generally wrong rather than specifically wrong. These steps fix the majority of problems, cost nothing, and risk nothing.",
    ],
    sections: [
      {
        id: "do-not",
        heading: "First, what not to do",
        blocks: [
          {
            kind: "warning",
            title: "Don't delete and reinstall the app",
            text: [
              "It's the standard advice for most apps, and here it's the worst possible move: deleting Videflo deletes your Tapes. There's no cloud copy to bring them back.",
              "Work through everything below first. If nothing helps, email us before removing anything.",
            ],
          },
        ],
      },
      {
        id: "ladder",
        heading: "The fixes, easiest first",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Force-close Videflo and reopen it.",
                detail:
                  "Swipe up slowly from the bottom of the screen, then swipe the Videflo card away. Open it again from the Home Screen.",
              },
              {
                title: "Restart your iPhone.",
                detail:
                  "Hold the side button and a volume button until the slider appears. This clears a surprising number of camera problems in particular.",
              },
              {
                title: "Check for free storage.",
                detail:
                  "**Settings → General → iPhone Storage**. A nearly-full iPhone causes crashes that look like anything but a storage problem.",
              },
              {
                title: "Turn off Low Power Mode.",
                detail:
                  "It limits performance, which shows up most in recording, preparing, and 4K playback.",
              },
              {
                title: "Update iOS and update Videflo.",
                detail:
                  "**Settings → General → Software Update**, then the App Store. Updating Videflo never touches your Tapes.",
              },
              {
                title: "Let the phone cool down.",
                detail:
                  "Filming in direct sun overheats iPhones, and iOS throttles the camera hard when that happens. Move into the shade and give it a few minutes.",
              },
            ],
          },
        ],
      },
      {
        id: "startup",
        heading: "If it's stuck on the opening screen",
        blocks: [
          {
            kind: "text",
            text: "Videflo shows its branded screen while it loads your library and checks for any footage that needs rescuing. On a very large library that takes a moment longer than usual, but it always finishes — the app will show itself even if something goes wrong behind the scenes.",
          },
          {
            kind: "text",
            text: "If it genuinely never gets past it, force-close and reopen, then restart the phone. If it still won't, please email us before doing anything more drastic.",
          },
        ],
      },
    ],
    tips: [
      "Note what you were doing when it happened. “It crashes when I tap Prepare on a long Tape” is something we can act on; “it crashes sometimes” isn't.",
      "A screen recording of the problem is worth a hundred words — as long as it doesn't show anything private.",
    ],
    faqs: [
      {
        question: "Will I lose footage if the app crashes?",
        answer: [
          "Almost never. Recordings are written to your iPhone as you film rather than being held in memory, and anything caught mid-save is offered back to you the next time you open the app.",
        ],
      },
      {
        question: "Does reinstalling fix things?",
        answer: [
          "It would also delete every Tape you have. Please treat it as a last resort, and talk to us before you try it.",
        ],
      },
    ],
    related: [
      "troubleshooting-recording",
      "contact-support",
      "backups-and-new-iphone",
    ],
  },

  {
    slug: "troubleshooting-recording",
    title: "Recording won't start, stops, or won't save",
    description:
      "Black previews, silent footage, refused record buttons, and interrupted sessions.",
    category: "troubleshooting",
    keywords: [
      "won't record",
      "black screen",
      "no sound",
      "stopped",
      "not saving",
      "record button",
      "camera not working",
      "silent",
    ],
    overview: [
      "Nearly every recording problem comes down to one of four things: permissions, orientation, storage, or something else on the phone wanting the camera. Here's how to tell them apart.",
    ],
    sections: [
      {
        id: "wont-start",
        heading: "The record button won't start anything",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Look for the orientation card.",
                detail:
                  "Videflo won't record until the phone is held the way the Tape was created. Turn the phone; the card fades on its own. If turning does nothing, switch off Rotation Lock from the Control Centre.",
              },
              {
                title: "Check the storage warning.",
                detail:
                  "With very little space free, recording can't safely begin. Free some up.",
              },
              {
                title: "Check permissions in **Settings → Videflo**.",
                detail: "Camera and Microphone both need to be on.",
              },
              {
                title: "Close anything else using the camera.",
                detail:
                  "FaceTime, the Camera app, or a video call left running in the background will hold it.",
              },
            ],
          },
        ],
      },
      {
        id: "black",
        heading: "The preview is black",
        blocks: [
          {
            kind: "list",
            items: [
              "Camera access is off — check **Settings → Videflo → Camera**.",
              "Another app has the camera. Close it and reopen Videflo.",
              "Screen Time restrictions can disable the camera entirely: **Settings → Screen Time → Content & Privacy Restrictions → Allowed Apps**.",
              "Something is covering the lens — worth checking before anything else, and more common than you'd think.",
              "Restart the iPhone if the preview stays black across restarts of the app.",
            ],
          },
        ],
      },
      {
        id: "silent",
        heading: "The recording has no sound",
        blocks: [
          {
            kind: "list",
            items: [
              "Microphone access is off — check **Settings → Videflo → Microphone**, then record a short test.",
              "Something is covering the microphone at the bottom edge of the phone. A thick case or a finger will muffle it badly.",
              "Bluetooth headphones somewhere nearby may be taking the audio input.",
            ],
          },
          {
            kind: "warning",
            title: "Sound can't be added afterwards",
            text: [
              "Footage recorded without microphone access is genuinely silent. There's no way to recover audio that was never captured — which is why it's worth a ten-second test recording before an occasion that matters.",
            ],
          },
        ],
      },
      {
        id: "stops",
        heading: "Recording stops on its own",
        blocks: [
          {
            kind: "text",
            text: "iOS gives priority to phone calls, alarms, and other apps that want the camera. Videflo keeps everything captured up to that moment, and you can carry on in the same Tape afterwards with **Continue Recording**.",
          },
          {
            kind: "list",
            items: [
              "Turn on Do Not Disturb before anything you can't repeat.",
              "Plug in for long sessions — recording is one of the most demanding things a phone does.",
              "Overheating in direct sun will also stop the camera. Move into the shade.",
            ],
          },
        ],
      },
      {
        id: "not-saving",
        heading: "The recording didn't end up in the Tape",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title:
                  "Open Videflo and look on **Home** for the recovery card.",
                detail:
                  "If a recording finished but never made it into a Tape, it's offered back to you there.",
              },
              {
                title: "Open the Tape's **Manage Recordings** list.",
                detail:
                  "It may already be there under a plain name like “Recording 4”.",
              },
              {
                title: "Consider whether the session was discarded.",
                detail:
                  "Choosing **Discard** when leaving the recording screen deletes that footage immediately.",
              },
            ],
          },
        ],
      },
    ],
    tips: [
      "Record a five-second test before anything irreplaceable. It checks permissions, sound, storage and orientation all at once.",
      "Leaving the app while it's still saving is the main way a recording ends up needing recovery. Wait for the screen to return.",
    ],
    faqs: [
      {
        question: "Why does Videflo insist I turn the phone?",
        answer: [
          "Every recording in a Tape has to share the Tape's orientation, or playback would flip part way through. Turn the phone and it starts immediately.",
        ],
      },
      {
        question: "Can I record while using another app?",
        answer: [
          "No. Recording needs Videflo on screen. It does keep the display awake for you so it won't dim or lock while you film.",
        ],
      },
    ],
    related: [
      "camera-and-microphone-permissions",
      "interruptions-and-recovery",
      "recording-a-tape",
    ],
  },

  {
    slug: "troubleshooting-playback",
    title: "Playback problems",
    description:
      "Stuttering, missing sound, a Tape that looks too short, or a recording that won't play at all.",
    category: "troubleshooting",
    keywords: [
      "stutter",
      "lag",
      "won't play",
      "missing",
      "short",
      "no video",
      "recording not found",
      "choppy",
    ],
    overview: [
      "Playback problems are usually one of three things: the phone is busy, the sound is off somewhere, or a recording's file is genuinely missing.",
    ],
    sections: [
      {
        id: "stutter",
        heading: "The picture stutters or freezes",
        blocks: [
          {
            kind: "list",
            items: [
              "Close other apps. 4K playback asks a lot, especially alongside anything else demanding.",
              "Switch off Low Power Mode, which caps performance.",
              "Let the phone cool if it's warm — iOS throttles hard when it's hot.",
              "Restart the iPhone if it persists.",
            ],
          },
        ],
      },
      {
        id: "sound",
        heading: "There's no sound",
        blocks: [
          {
            kind: "list",
            items: [
              "Check the silent switch and the volume buttons.",
              "Check nothing is connected by Bluetooth in another room.",
              "If it was filmed with microphone access off, the footage is silent and can't be repaired.",
            ],
          },
        ],
      },
      {
        id: "short",
        heading: "The Tape is shorter than expected",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title:
                  "Open **Manage Recordings** to see what the Tape actually contains.",
              },
              {
                title: "Check Home for a recovery card.",
                detail:
                  "A recording that never made it into the Tape is waiting there.",
              },
              {
                title: "Consider whether a recording was interrupted.",
                detail:
                  "An interrupted session keeps only what was captured before the interruption.",
              },
            ],
          },
        ],
      },
      {
        id: "not-found",
        heading: "“Recording Not Found”",
        blocks: [
          {
            kind: "text",
            text: "This means the video file that recording points to isn't on the iPhone any more. It usually follows a restore that didn't bring everything back, or storage running out at exactly the wrong moment.",
          },
          {
            kind: "list",
            items: [
              "The rest of the Tape still plays normally.",
              "If you have an iPhone backup from before it happened, restoring may bring the file back.",
              "Otherwise, deleting the affected recording from **Manage Recordings** tidies the Tape up.",
            ],
          },
        ],
      },
      {
        id: "controls",
        heading: "The controls or the filmstrip misbehave",
        blocks: [
          {
            kind: "list",
            items: [
              "Tap the picture once to bring the controls back — they hide themselves after a few seconds.",
              "Lift all fingers off the filmstrip and try again with one.",
              "Close the player and reopen the Tape if it stays unresponsive.",
              "Blank thumbnails usually just need a moment to load on a long Tape.",
            ],
          },
        ],
      },
    ],
    tips: [
      "If one particular Tape misbehaves and the others are fine, tell us its length and quality — that's exactly what we need to reproduce it.",
    ],
    faqs: [
      {
        question: "Why is there no black flash between recordings?",
        answer: [
          "Because Videflo plays the whole Tape as one continuous piece rather than loading each recording in turn. If you ever do see a gap, please tell us.",
        ],
      },
      {
        question: "Playback is fine but exporting fails.",
        answer: [
          "That's usually storage, since preparing needs room for a whole new file. See **When exporting fails**.",
        ],
      },
    ],
    related: [
      "playback-basics",
      "scrubbing-through-a-tape",
      "troubleshooting-export",
    ],
  },

  {
    slug: "troubleshooting-export",
    title: "When exporting fails",
    description:
      "Preparation that stalls, exports that won't save to Photos, and videos you can't find afterwards.",
    category: "troubleshooting",
    keywords: [
      "export failed",
      "prepare failed",
      "stuck at",
      "percent",
      "can't save",
      "photos denied",
      "missing video",
      "interrupted",
    ],
    overview: [
      "Exporting is the most demanding thing Videflo does, so it's the most sensitive to a full or busy iPhone. The good news is that a failed export never harms your recordings — the originals are untouched whatever happens.",
    ],
    sections: [
      {
        id: "prepare-fails",
        heading: "Preparation fails or stalls",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Free up storage. This is the usual culprit.",
                detail:
                  "Preparing needs room for a whole new file roughly the size of the Tape. Delete prepared copies of other Tapes first — that costs you nothing.",
              },
              {
                title: "Turn off Low Power Mode.",
              },
              {
                title:
                  "Keep Videflo on screen while it works, with the phone plugged in.",
                detail:
                  "Preparation continues briefly in the background, but iOS eventually suspends it — and a Tape shown as interrupted needs a fresh **Prepare Again**.",
              },
              {
                title: "Try preparing **Without Timestamp**.",
                detail:
                  "Burning the date in is more work than a plain copy, so it's the more fragile of the two on a busy phone.",
              },
              {
                title: "Check **Manage Recordings** for anything unavailable.",
                detail:
                  "A recording whose file is missing will stop the whole Tape preparing. Delete it and try again.",
              },
            ],
          },
          {
            kind: "note",
            title: "A failed preparation loses nothing",
            text: [
              "Videflo builds the export as a separate file and only puts it in place once it's complete and checked. If it fails, your recordings and any previous prepared copy are both exactly as they were.",
            ],
          },
        ],
      },
      {
        id: "photos",
        heading: "It won't save to Photos",
        blocks: [
          {
            kind: "list",
            items: [
              "Turn on **Settings → Videflo → Photos** so Videflo can add to your library.",
              "Make sure there's free space — the exported copy needs room of its own alongside the prepared file.",
              "If iCloud Photos is mid-sync and short of space, let it finish first.",
            ],
          },
        ],
      },
      {
        id: "cant-find",
        heading: "It exported but I can't find it",
        blocks: [
          {
            kind: "list",
            items: [
              "Open the Photos app and look in **Recents** — it arrives with today's date, not the date it was filmed.",
              "Check **Albums → Videos**.",
              "On a very large library, sort Recents so newest is first.",
            ],
          },
        ],
      },
      {
        id: "changed",
        heading: "It says “Tape Changed”",
        blocks: [
          {
            kind: "text",
            text: "You've added, trimmed, or deleted a recording since the Tape was prepared, so the prepared file no longer matches. Choose **Prepare Again** to build a fresh one that includes the change. Nothing is wrong.",
          },
        ],
      },
    ],
    tips: [
      "Start big exports plugged in, with the screen on, and leave the phone alone. It's dull advice and it works.",
      "Export a shorter Tape first to prove the whole path works before committing to a two-hour one.",
      "Once you've exported and checked the file, delete the prepared copy to reclaim the space.",
    ],
    faqs: [
      {
        question: "Can I export while doing something else in the app?",
        answer: [
          "Yes — preparation runs in the background within the app, and you can browse, watch, and record while it works.",
        ],
      },
      {
        question: "Why did preparation restart from the beginning?",
        answer: [
          "An export can't be resumed part way through, so if iOS suspends it the only honest option is to start again. Keeping the app on screen avoids it.",
        ],
      },
      {
        question: "Does a failed export leave a broken file behind?",
        answer: [
          "No. An incomplete export is cleaned up rather than kept, so you're never left with a half-finished video pretending to be a whole one.",
        ],
      },
    ],
    related: [
      "prepare-and-export-a-tape",
      "storage-space",
      "troubleshooting-app",
    ],
  },

  {
    slug: "troubleshooting-subscription",
    title: "Subscription and purchase problems",
    description:
      "Paid but still seeing the subscription screen, restores that find nothing, and unexpected charges.",
    category: "troubleshooting",
    keywords: [
      "paid but",
      "locked out",
      "not working",
      "purchase failed",
      "charged",
      "restore fails",
      "unavailable",
      "plans won't load",
    ],
    overview: [
      "Videflo checks with the App Store to see whether your subscription is active. When something looks wrong, it's almost always one of three things: the wrong Apple Account, a subscription that's lapsed, or a temporary problem reaching the App Store.",
    ],
    sections: [
      {
        id: "paid-but-locked",
        heading: "I've paid, but I'm still asked to subscribe",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Tap **Restore Purchases** and let it finish.",
                detail: "Once — repeated taps don't help.",
              },
              {
                title: "Check which Apple Account the iPhone is signed in to.",
                detail:
                  "Open the **Settings** app; your name is at the top. The subscription belongs to the account that bought it.",
              },
              {
                title: "Check the subscription is still active.",
                detail:
                  "**Settings → your name → Subscriptions**. An expired one has nothing to restore.",
              },
              {
                title:
                  "Make sure you're online, then close and reopen Videflo.",
              },
              {
                title: "If it's active and restoring still fails, email us.",
                detail:
                  "Include your iPhone model, iOS version, and Videflo version.",
              },
            ],
          },
        ],
      },
      {
        id: "unavailable",
        heading: "“Subscription Unavailable”",
        blocks: [
          {
            kind: "text",
            text: "Videflo couldn't load the plans from the App Store, so it says so rather than showing a price it isn't sure of. Tap **Try Again**.",
          },
          {
            kind: "list",
            items: [
              "Check your connection — this screen needs one.",
              "Apple's own System Status page will say if the App Store is having trouble.",
              "Sign out of and back into **Settings → your name → Media & Purchases** if it persists.",
            ],
          },
        ],
      },
      {
        id: "purchase-fails",
        heading: "The purchase won't go through",
        blocks: [
          {
            kind: "list",
            items: [
              "Check the payment method on your Apple Account is current — an expired card is the most common cause by a distance.",
              "Cancelling the password or Face ID prompt stops the purchase. Try again and let it complete.",
              "If your Apple Account has purchases restricted, that will block it too.",
              "Apple sends any billing failure notice by email — worth a look.",
            ],
          },
        ],
      },
      {
        id: "charged",
        heading: "An unexpected charge",
        blocks: [
          {
            kind: "text",
            text: "Every Videflo charge is taken by Apple, so your Apple Account purchase history is the authoritative record. Open **reportaproblem.apple.com**, sign in, and you'll see exactly what was charged and when.",
          },
          {
            kind: "text",
            text: "Refunds are Apple's decision under Apple's policies — we're not able to issue one. If a charge was our mistake in some way, please tell us anyway so we can put the cause right.",
          },
        ],
      },
      {
        id: "offline",
        heading: "Does Videflo work offline?",
        blocks: [
          {
            kind: "text",
            text: "Yes. Your subscription is confirmed on the device, so recording, playback, trimming, and exporting all work with no connection at all. You only need to be online to subscribe, to restore, or to open a web link from the app.",
          },
        ],
      },
    ],
    tips: [
      "Family Sharing catches people out: if a partner bought it on their account, it can't be restored to yours.",
      "Restoring never charges you. It only re-checks a purchase already made.",
    ],
    faqs: [
      {
        question: "I lost access mid-month. Why?",
        answer: [
          "Usually a failed renewal — an expired card is the common cause. Apple will have emailed about it, and updating the payment method in your Apple Account restores things.",
        ],
      },
      {
        question: "Do I lose my Tapes if my subscription lapses?",
        answer: [
          "No. Your recordings stay on your iPhone untouched. Subscribing again gives you access to them exactly as you left them.",
        ],
      },
      {
        question: "Can you look up my purchase for me?",
        answer: [
          "We can't — Apple handles the billing and we have no access to your purchase history. Your Apple Account holds the full record.",
        ],
      },
    ],
    related: ["restore-purchases", "manage-subscription", "subscription-plans"],
  },
] as const;
