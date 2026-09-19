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
              "It's the standard advice for most apps, and here it's the wrong first move: deleting Videflo removes the recordings on this iPhone, and any that hadn't finished uploading to Videflo Cloud are gone with them.",
              "Work through everything below first. If nothing helps, check every Tape says **Backed Up** and email us before removing anything.",
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
                  "It limits performance, which shows up most in recording, exporting, and 4K playback — and Videflo pauses backups while it's on.",
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
      "Note what you were doing when it happened. “It crashes when I tap Export Tape on a long Tape” is something we can act on; “it crashes sometimes” isn't.",
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
          "Rarely, and it removes every recording on this iPhone. Everything already in Videflo Cloud comes back when you sign in, but a recording that hadn't uploaded doesn't. Please treat it as a last resort, and talk to us before you try it.",
        ],
      },
    ],
    related: ["troubleshooting-recording", "contact-support", "videflo-cloud"],
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
              "If the Tape is marked **In Videflo Cloud**, it's streaming — a weak connection is the usual cause. Move to Wi-Fi, or **Download to This iPhone**.",
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
            text: "This means the video for that recording isn't on this iPhone and Videflo Cloud doesn't have a finished copy either. It usually means the recording never completed its upload before the phone that made it was replaced, or storage ran out at exactly the wrong moment.",
          },
          {
            kind: "list",
            items: [
              "The rest of the Tape still plays normally.",
              "If the phone that made the recording still exists, open Videflo on it and let the upload finish.",
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
          "That's usually storage, since exporting needs room for a whole new file. See **When exporting fails**.",
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
      "Exports that stop part way, won't save to Photos, or produce videos you can't find afterwards.",
    category: "troubleshooting",
    keywords: [
      "export failed",
      "stuck at",
      "percent",
      "can't save",
      "photos denied",
      "missing video",
      "interrupted",
      "cancelled",
    ],
    overview: [
      "Exporting is the most demanding thing Videflo does, so it's the most sensitive to a full or busy iPhone. The good news is that a failed export never harms your recordings — the originals are untouched whatever happens, and nothing is left behind.",
    ],
    sections: [
      {
        id: "export-fails",
        heading: "The export fails or stops part way",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Free up storage. This is the usual culprit.",
                detail:
                  "Exporting needs room for a whole new file roughly the size of the Tape. Videflo checks before it starts, but iOS keeps some space in reserve — free a few gigabytes more than you think you need. **Remove from This iPhone** on other backed-up Tapes is the quickest way.",
              },
              {
                title: "Turn off Low Power Mode.",
              },
              {
                title:
                  "Keep Videflo on screen while it works, with the phone plugged in.",
                detail:
                  "Exporting runs in the foreground only. Switching to another app for long can stop it, and a stopped export starts again from the beginning.",
              },
              {
                title:
                  "If the Tape is streaming from Videflo Cloud, check your connection.",
                detail:
                  "A Tape marked **In Videflo Cloud** streams while it exports, so a dropped connection stops the export. Wi-Fi is best — or **Download to This iPhone** first.",
              },
              {
                title: "Check **Manage Recordings** for anything unavailable.",
                detail:
                  "A Tape exports whole or not at all, so a recording that's neither on this iPhone nor finished in Videflo Cloud stops the export. Delete it and try again.",
              },
            ],
          },
          {
            kind: "note",
            title: "A failed export loses nothing",
            text: [
              "Videflo renders the export as a temporary file and hands it to Photos only once it's complete and checked. If it fails or you cancel, the temporary file is removed and your recordings are exactly as they were.",
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
              "Make sure there's free space — the exported copy needs room of its own.",
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
        id: "not-offered",
        heading: "Export Tape isn't in the menu",
        blocks: [
          {
            kind: "text",
            text: "On a Shared Tape, only the owner can export the whole Tape. Every member can still watch it, and can save individual recordings from **Manage Recordings**.",
          },
        ],
      },
    ],
    tips: [
      "Start big exports plugged in, with the screen on, and leave the phone alone. It's dull advice and it works.",
      "Export a shorter Tape first to prove the whole path works before committing to a two-hour one.",
      "The export goes straight to Photos and leaves nothing behind in Videflo, so there's nothing to clean up afterwards.",
    ],
    faqs: [
      {
        question: "Can I export while doing something else in the app?",
        answer: [
          "No — exporting needs Videflo on screen. Start it, leave the phone alone, and it tells you when the video is in Photos.",
        ],
      },
      {
        question: "Why did the export restart from the beginning?",
        answer: [
          "An export can't be resumed part way through, so if it's stopped the only honest option is to start again. Keeping the app on screen avoids it.",
        ],
      },
      {
        question: "Does a failed export leave a broken file behind?",
        answer: [
          "No. An incomplete export is cleaned up rather than kept, so you're never left with a half-finished video pretending to be a whole one.",
        ],
      },
    ],
    related: ["export-a-tape", "storage-space", "troubleshooting-app"],
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
            text: "Yes. Your subscription is confirmed on the device, so recording, and watching or exporting any Tape that's on your iPhone, all work with no connection at all. Backup waits for a connection, a Tape marked In Videflo Cloud needs one to stream, and you need to be online to subscribe, to restore, or to sign in for the first time.",
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
          "No. Your recordings stay on your iPhone, and Videflo doesn't currently remove content from Videflo Cloud because a subscription has lapsed. Subscribing again gives you access to them exactly as you left them.",
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
  {
    slug: "troubleshooting-cloud",
    title: "Sign-in, backup, and Shared Tape problems",
    description:
      "Can't sign in, a backup that won't finish, a Tape that won't stream, or an invitation that opens the wrong thing.",
    category: "troubleshooting",
    keywords: [
      "sign in failed",
      "apple id",
      "backup stuck",
      "not uploading",
      "won't stream",
      "invite link",
      "safari",
      "join",
      "offline",
    ],
    overview: [
      "Videflo Cloud problems are almost always one of three things: the phone isn't online in the way Videflo needs, the account isn't the one you think it is, or the allowance is full. Here's how to tell them apart.",
    ],
    sections: [
      {
        id: "sign-in",
        heading: "Sign in with Apple isn't working",
        blocks: [
          {
            kind: "list",
            items: [
              "**Nothing happens, or it fails straight away.** Check you're online — signing in needs a connection the first time. Then check **Settings → your name** on the iPhone is signed in to your Apple Account.",
              "**Apple asks for a password.** That's your Apple Account password, not a Videflo one. Apple can reset it.",
              "**“Sign in with Apple” isn't offered.** It needs two-factor authentication on your Apple Account, which Apple requires for all new accounts.",
              "**You're signed in but it's the wrong account.** Sign out in **Settings → Profile → Account** and sign in again. Videflo follows the Apple Account you use, so two Apple Accounts are two Videflo accounts.",
            ],
          },
        ],
      },
      {
        id: "backup",
        heading: "A backup that won't finish",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Check the switches.",
                detail:
                  "**Settings → Videflo Cloud → Backup Settings**. Back Up to Videflo Cloud must be on; with Use Cellular Data off, Videflo waits for Wi-Fi.",
              },
              {
                title: "Check Low Power Mode is off.",
                detail: "Videflo pauses backups while it's on.",
              },
              {
                title: "Check your allowance.",
                detail:
                  "**Settings → Videflo Cloud** shows how full it is. When it's full, uploads pause until you free space or choose a larger capacity in **Manage Storage**.",
              },
              {
                title: "Open Videflo and leave it on screen for a minute.",
                detail:
                  "Uploads continue in the background, but iOS gives them more room while the app is open — especially for a long 4K recording.",
              },
              {
                title: "Tap the Tape's card if it says it needs attention.",
                detail:
                  "It will say why and offer to retry. Videflo retries on its own for anything temporary; the card only asks you when it genuinely can't continue.",
              },
            ],
          },
        ],
      },
      {
        id: "streaming",
        heading: "A Tape in Videflo Cloud won't play",
        blocks: [
          {
            kind: "list",
            items: [
              "Check you're online. A Tape marked **In Videflo Cloud** has no files on this iPhone and streams every time.",
              "Give it a moment — a Tape with many recordings takes a few seconds to start.",
              "If it keeps stalling, **Download to This iPhone** and watch it from the phone.",
              "If one recording is marked unavailable, the phone that made it never finished uploading it. See **Playback problems**.",
            ],
          },
        ],
      },
      {
        id: "invites",
        heading: "An invitation link opens Safari instead of Videflo",
        blocks: [
          {
            kind: "list",
            items: [
              "Videflo has to be installed first. Install it, sign in, then go back to the message and tap the link again.",
              "If Videflo is installed and the link still opens a web page, press and hold the link in Messages and choose **Open in Videflo**.",
              "Each link works once. If someone already used it, ask for a fresh one.",
            ],
          },
        ],
      },
      {
        id: "shared",
        heading: "Shared Tape oddities",
        blocks: [
          {
            kind: "list",
            items: [
              "**A Tape I was invited to isn't in my library.** Accept the invitation first — in the bell, or under **Settings → Profile → Tape Invitations** — then pull the Tapes tab down to refresh.",
              "**Someone joined but the Tape still looks personal to me.** Open the Tape, or pull to refresh. Videflo updates the Tape's status when it next checks, not the instant they accept.",
              "**I can't see their recording.** Their upload has to finish from their phone. Ask them to check their backup switches and connection.",
              "**I can't add a recording.** The owner may have chosen **Stop Accepting Recordings**, or your own backup is off — a recording made with backup off stays on your phone.",
            ],
          },
        ],
      },
    ],
    tips: [
      "When in doubt, pull to refresh. Most Shared Tape state arrives on the next refresh rather than instantly.",
      "Keep an eye on the cloud mark on a Tape's card. **Backed Up** means the whole Tape is safe; anything else is still work in progress.",
    ],
    faqs: [
      {
        question: "Does Videflo need to be open for backups to run?",
        answer: [
          "No. Uploads are handed to iOS and continue in the background. Opening the app does help a large upload along, and it's the only way to see exactly where it's up to.",
        ],
      },
      {
        question: "Why does Videflo say it's offline when I have signal?",
        answer: [
          "Usually Use Cellular Data is off and you're not on Wi-Fi, or Low Power Mode is on. Both make Videflo wait rather than fail.",
        ],
      },
    ],
    related: ["videflo-cloud", "shared-tapes", "accounts-and-signing-in"],
  },
] as const;
