import type { HelpArticle } from "../types";

export const storageArticles: readonly HelpArticle[] = [
  {
    slug: "videflo-cloud",
    title: "Videflo Cloud: how backup works",
    description:
      "What gets backed up, when, the cloud mark on a Tape's card, and the two switches that control it.",
    category: "storage",
    keywords: [
      "backup",
      "cloud",
      "upload",
      "protected",
      "backed up",
      "sync",
      "cellular",
      "wifi",
      "streaming",
      "remove from iphone",
      "download",
    ],
    overview: [
      "Videflo Cloud is included with your subscription, and backup is automatic. Every recording you finish is copied to Videflo Cloud in the background, so a Tape survives a lost, broken or replaced phone and follows you to a new phone the moment you sign in.",
      "It's a copy, never a replacement. The original file on your phone is never edited by a backup, and it stays there until you decide to remove it.",
    ],
    sections: [
      {
        id: "what",
        heading: "What gets backed up",
        blocks: [
          {
            kind: "list",
            items: [
              "**Every recording**: the video itself, at the quality it was filmed, including videos you added from Photos.",
              "**Everything that describes a Tape**: its name, orientation, cover photo, and each recording's name, date and time.",
              "**Not Collections or your settings.** Those stay on the phone, and take a minute to recreate.",
            ],
          },
          {
            kind: "text",
            text: "A Tape you create is protected the moment it exists, even before it has a recording, so an invitation to it always has somewhere to land.",
          },
        ],
      },
      {
        id: "when",
        heading: "When it happens",
        blocks: [
          {
            kind: "text",
            text: "As soon as you tap **Finish**. There's nothing to tap and nothing to remember. Videflo uploads one recording at a time, keeps going while you use the app, and picks up where it left off after a relaunch, a reboot, or a dropped connection.",
          },
          {
            kind: "note",
            title: "Protection starts when the upload finishes",
            text: [
              "Until a recording's upload completes, it exists on your phone alone. A long 4K recording on a slow connection takes a while, and the cloud mark on the Tape's card tells you where it's up to.",
            ],
          },
        ],
      },
      {
        id: "card",
        heading: "The cloud mark on a Tape's card",
        blocks: [
          {
            kind: "definitions",
            items: [
              {
                term: "Backing Up · 64%",
                description:
                  "Uploading now. The percentage is real progress across the whole Tape.",
              },
              {
                term: "Backed Up",
                description:
                  "Every recording in the Tape is safely in Videflo Cloud, and the files are on this phone too.",
              },
              {
                term: "In Videflo Cloud",
                description:
                  "The Tape's files aren't on this phone. Either you removed them, or the Tape arrived from another phone. It plays by streaming.",
              },
              {
                term: "Waiting",
                description:
                  "Videflo is holding off, usually for Wi-Fi when cellular is off, or for Low Power Mode to end. It carries on by itself.",
              },
              {
                term: "Needs Attention",
                description:
                  "Something stopped it and it can't continue on its own, most often a full allowance. The card offers to retry once you've sorted it out.",
              },
            ],
          },
        ],
      },
      {
        id: "switches",
        heading: "The two switches",
        blocks: [
          {
            kind: "text",
            text: "Both live in **Settings → Videflo Cloud → Backup Settings**, and both are on unless you turn them off.",
          },
          {
            kind: "definitions",
            items: [
              {
                term: "Back Up to Videflo Cloud",
                description:
                  "The master switch. Off means new recordings stay on your phone only. Nothing is queued, retried or uploaded later. Anything already in Videflo Cloud stays there.",
              },
              {
                term: "Use Cellular Data",
                description:
                  "Whether backups may run away from Wi-Fi. Off means Videflo waits for Wi-Fi rather than using your data allowance.",
              },
            ],
          },
          {
            kind: "warning",
            title: "Off means off, for Shared Tapes too",
            text: [
              "With Back Up to Videflo Cloud off, a recording you add to a Shared Tape never reaches the other members. Videflo honours your setting rather than making an exception.",
            ],
          },
        ],
      },
      {
        id: "remove-download",
        heading: "Remove from This iPhone, and Download to This iPhone",
        blocks: [
          {
            kind: "text",
            text: "Once a Tape is fully backed up, you can free the space it uses on your phone. Press and hold it and choose **Remove from This iPhone**. Videflo checks that every recording really is in Videflo Cloud (it compares the files themselves, not just a note that says they uploaded) and only then removes them.",
          },
          {
            kind: "text",
            text: "The Tape stays in your library and plays by streaming, with a connection. **Download to This iPhone** puts the files back whenever you want them for offline watching. Neither changes anything in Videflo Cloud.",
          },
          {
            kind: "note",
            title: "Playing isn't downloading",
            text: [
              "Streaming a Tape doesn't quietly put its files back on your phone, and exporting it doesn't either. Only **Download to This iPhone** does, so a Tape you've removed stays removed until you say otherwise.",
            ],
          },
        ],
      },
    ],
    tips: [
      "Leave both switches on. Backups on cellular are the difference between a memory being protected the same evening and it waiting a week for Wi-Fi.",
      "Filming somewhere with no signal? Nothing is lost. Recordings queue on the phone and upload when you're back in range.",
      "Keep a phone backup switched on as well. Videflo Cloud protects what has uploaded; an iCloud or computer backup covers the phone itself.",
    ],
    pitfalls: [
      {
        mistake:
          "Deleting the app to reinstall it, an hour after filming something important.",
        fix: "Check the Tape says **Backed Up** first. A recording that hasn't finished uploading exists only on that phone.",
      },
      {
        mistake:
          "Turning off Back Up to Videflo Cloud to save data, then forgetting.",
        fix: "Turn off **Use Cellular Data** instead. Backups wait for Wi-Fi rather than never happening.",
      },
    ],
    troubleshooting: [
      {
        problem: "A Tape has said Backing Up for ages.",
        solutions: [
          "Check you're online, and on Wi-Fi if Use Cellular Data is off.",
          "Switch off Low Power Mode; Videflo waits for it to end.",
          "Open Videflo and leave it on screen for a minute. Uploads continue in the background, but iOS gives them more room while the app is open.",
          "If the card says it needs attention, tap it. It will say why, and offer to retry.",
        ],
      },
      {
        problem: "Videflo Cloud says it's full.",
        solutions: [
          "Open **Settings → Videflo Cloud → Manage Storage**. **Free Up Space** lists your largest Tapes; **Storage Options** offers a larger capacity.",
          "Nothing already backed up is at risk. Videflo pauses new uploads until there's room.",
        ],
      },
      {
        problem: "Remove from This iPhone isn't offered.",
        solutions: [
          "The Tape isn't fully backed up yet. Wait for **Backed Up**.",
          "Check you're signed in. Videflo needs to confirm with Videflo Cloud before it removes anything.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does Videflo Cloud change my recordings?",
        answer: [
          "No. It stores an exact copy of each file. Nothing is re-encoded, and the original on your phone is never touched.",
        ],
      },
      {
        question: "Does backup drain the battery?",
        answer: [
          "Uploading video takes power, as it does in any app. Videflo hands the work to iOS to run in the background and pauses in Low Power Mode. Plugging in after a big filming day helps.",
        ],
      },
      {
        question: "Can I back up to iCloud instead?",
        answer: [
          "Videflo Cloud is Videflo's own service and is part of the subscription. Separately, your phone's own iCloud or computer backup includes Videflo's data like any other app's, and that's worth keeping on too.",
        ],
      },
    ],
    related: ["storage-space", "backups-and-new-iphone", "subscription-plans"],
  },

  {
    slug: "storage-space",
    title: "How much space Tapes use, and how to free some up",
    description:
      "Where the gigabytes go, on your phone and in Videflo Cloud, what's safe to remove, and what the warnings mean.",
    category: "storage",
    keywords: [
      "storage full",
      "space",
      "gigabytes",
      "free up",
      "iphone storage",
      "delete",
      "size",
      "full",
      "allowance",
      "quota",
    ],
    overview: [
      "Video is large. That's the whole story. A phone full of photographs will fill up far faster once it's also full of Tapes.",
      "The good news is that Videflo can free up a lot of space on your phone without losing a single second of footage, because a backed-up Tape doesn't need to live on the phone.",
    ],
    sections: [
      {
        id: "two-places",
        heading: "Two places, two limits",
        blocks: [
          {
            kind: "definitions",
            items: [
              {
                term: "Your phone",
                description:
                  "Where recordings are made and kept for offline watching. The limit is the phone's free space, which you can see in **Settings → General → iPhone Storage**.",
              },
              {
                term: "Videflo Cloud",
                description:
                  "Where recordings are protected. The limit is your allowance: **50 GB** with the subscription, with larger capacities available. You can see it in **Settings → Videflo Cloud**.",
              },
            ],
          },
          {
            kind: "text",
            text: "Standard (1080p) is the smallest; High (4K) is roughly four times the size for the same length, on both counts.",
          },
        ],
      },
      {
        id: "free-iphone",
        heading: "Freeing space on your phone, safest first",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Remove backed-up Tapes from the phone.",
                detail:
                  "Press and hold a Tape that says **Backed Up** and choose **Remove from This iPhone**, or open **Settings → Videflo Cloud → Manage Storage → Free Up Space**, which lists your largest Tapes. The Tape stays in your library and plays by streaming. Start here. It's the biggest win with no risk at all.",
              },
              {
                title: "Delete recordings you genuinely don't want.",
                detail:
                  "Open **Manage Recordings**, watch them, and remove what you don't need. This is permanent.",
              },
              {
                title: "Tidy up elsewhere on the phone.",
                detail:
                  "Old podcasts, downloaded films, and the Photos app's Recently Deleted album often hold several gigabytes between them.",
              },
            ],
          },
          {
            kind: "warning",
            title: "Deleting a Tape is permanent, everywhere",
            text: [
              "Delete Tape removes it from your phone and from Videflo Cloud together. To free space, remove it from the phone instead.",
            ],
          },
        ],
      },
      {
        id: "free-cloud",
        heading: "When Videflo Cloud is getting full",
        blocks: [
          {
            kind: "text",
            text: "Videflo tells you as your allowance fills: a notice in the bell, and the Videflo Cloud card in Settings. When it's full, new uploads pause; nothing already stored is touched.",
          },
          {
            kind: "list",
            items: [
              "**Choose a larger capacity** in **Manage Storage → Storage Options**. It's an upgrade to your existing subscription, priced by the App Store, and takes effect straight away.",
              "**Delete Tapes you don't want**, which frees their space in Videflo Cloud as well as on the phone.",
              "**On a Shared Tape you own**, every member's recording counts against your allowance, so deleting a recording you don't want frees it for everyone.",
            ],
          },
          {
            kind: "note",
            title: "Over your allowance",
            text: [
              "If you move to a smaller capacity and you're using more than it holds, Videflo keeps everything and gives you 30 days to free space or change back. It doesn't delete anything on its own.",
            ],
          },
        ],
      },
      {
        id: "warning",
        heading: "The low-storage warning while recording",
        blocks: [
          {
            kind: "text",
            text: "While you're recording, Videflo watches the free space on your phone and shows a warning in the corner when it's getting short. The warning appears while there's still comfortable room to finish what you're filming. It's a nudge, not an emergency.",
          },
          {
            kind: "text",
            text: "If you see it mid-occasion, finish the recording you're on so it's safely saved, then free up some space before carrying on.",
          },
        ],
      },
    ],
    tips: [
      "Standard quality is the single biggest saving available, on the phone and in the cloud. Choose it for everyday Tapes and reserve High for the occasions that deserve it.",
      "A Tape you've finished with and won't watch this month is a fine candidate for **Remove from This iPhone**. It's one tap to bring back.",
      "Exporting to Photos makes a second copy on the phone. Free space by removing the Tape from the phone afterwards, not by deleting it.",
    ],
    pitfalls: [
      {
        mistake: "Deleting whole Tapes to make room on the phone.",
        fix: "Use **Remove from This iPhone**. It frees the same space and the Tape is still yours, protected in Videflo Cloud.",
      },
      {
        mistake: "Offloading the app in iPhone Storage to save room.",
        fix: "Don't. Offloading removes the app, and any recording that hadn't finished uploading with it. Remove backed-up Tapes from the phone instead.",
      },
    ],
    troubleshooting: [
      {
        problem:
          "Videflo says there's not enough space, but the phone says there is.",
        solutions: [
          "Exporting a Tape needs room for the whole new file at once, several gigabytes for a long Tape.",
          "iOS also keeps some space in reserve, so the last stretch isn't really usable.",
          "Free a few more gigabytes than you think you need and try again.",
        ],
      },
      {
        problem: "Recording stopped and mentioned storage.",
        solutions: [
          "Everything captured up to that point is kept. Free up space, then use **Continue Recording** to carry on in the same Tape.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do my Tapes count against my iCloud storage?",
        answer: [
          "Not directly. Videflo Cloud is separate from iCloud and comes with your subscription. Your phone's own iCloud backup, if you have one, includes Videflo's data like any other app's.",
        ],
      },
      {
        question: "Can I move Tapes to an SD card or external drive?",
        answer: [
          "No. Videflo keeps its recordings in its own storage on the phone and in Videflo Cloud. To get footage onto a drive, export it and copy it across from Photos using a computer.",
        ],
      },
      {
        question: "Why is Videflo so large in iPhone Storage?",
        answer: [
          "Because your recordings are counted as part of it. The app itself is small; the video is what takes the room, and removing backed-up Tapes from the phone is how you shrink it.",
        ],
      },
    ],
    related: [
      "videflo-cloud",
      "subscription-plans",
      "choosing-recording-quality",
    ],
  },

  {
    slug: "backups-and-new-iphone",
    title: "Moving to a new phone, reinstalling, and a lost phone",
    description:
      "How your Tapes come back, from Videflo Cloud and from your phone's backup, and what to check before you wipe the old phone.",
    category: "storage",
    keywords: [
      "backup",
      "icloud",
      "restore",
      "new phone",
      "transfer",
      "lost phone",
      "broken",
      "sync",
      "reinstall",
    ],
    overview: [
      "Your Tapes live in two places: on your phone, and in Videflo Cloud. That's what makes a new phone undramatic: sign in, and every backed-up Tape is there.",
      "The one thing worth checking before you wipe an old phone is that everything actually finished uploading. This article is that check.",
    ],
    sections: [
      {
        id: "new-iphone",
        heading: "Moving to a new phone",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "On the old phone, check every Tape says **Backed Up**.",
                detail:
                  "Anything still **Backing Up** exists only on that phone. Leave it on Wi-Fi and plugged in until it's done.",
              },
              {
                title: "Set the new phone up however you like.",
                detail:
                  "Restoring from an iCloud or computer backup, Apple's direct transfer, or setting it up as new all work. A restore or transfer also brings the recordings across directly, which saves downloading them.",
              },
              {
                title: "Install Videflo and sign in with Apple.",
                detail:
                  "Use the same Apple Account. Your Videflo account, Profile, Friends & Family and Shared Tapes all come with it.",
              },
              {
                title:
                  "Tap **Restore Purchases** if the subscription screen appears.",
                detail:
                  "Your subscription belongs to your Apple Account, so it comes straight back.",
              },
              {
                title: "Your Tapes appear from Videflo Cloud.",
                detail:
                  "They're marked **In Videflo Cloud** and play by streaming. Choose **Download to This iPhone** on the ones you want offline.",
              },
              {
                title: "Play one. Actually watch it. Then wipe the old phone.",
              },
            ],
          },
        ],
      },
      {
        id: "reinstall",
        heading: "Reinstalling the app",
        blocks: [
          {
            kind: "text",
            text: "Deleting Videflo removes the recordings on that phone. Everything already in Videflo Cloud is untouched, and reinstalling and signing in brings it back. The risk is only ever a recording that hadn't finished uploading, so check the cards say **Backed Up** before you delete the app, and don't reinstall as a first troubleshooting step.",
          },
        ],
      },
      {
        id: "lost",
        heading: "A lost, broken or erased phone",
        blocks: [
          {
            kind: "text",
            text: "Sign in on the replacement and your backed-up Tapes are there. Recordings that hadn't uploaded when the phone was lost are gone with it, which is why the two switches in **Backup Settings** are worth leaving on, and why a phone backup is worth keeping as well.",
          },
          {
            kind: "note",
            title: "Keep a phone backup too",
            text: [
              "Videflo Cloud protects what has uploaded. An iCloud or computer backup of the whole phone covers the gap between filming and upload finishing, and brings your Collections and settings across. Check it's actually completing in **Settings → your name → iCloud → iCloud Backup**.",
            ],
          },
        ],
      },
      {
        id: "two-phones",
        heading: "Using two phones",
        blocks: [
          {
            kind: "text",
            text: "Sign in to the same Videflo account on both, and every backed-up Tape appears in the library on each. Videflo is designed around one phone at a time, though: Shared Tapes stay in step on both phones, but a personal Tape you keep adding to from both isn't kept in step, so treat one phone as the one you record into. Collections and settings are per phone.",
          },
        ],
      },
    ],
    tips: [
      "The morning you get a new phone, open Videflo on the old one first and look for anything still uploading. It takes ten seconds and it's the whole job.",
      "Download the Tapes you'll want on a flight or out of signal. Everything else can stream.",
      "Export the Tapes you couldn't bear to lose to Photos as well. A copy in your photo library depends on nobody.",
    ],
    pitfalls: [
      {
        mistake: "Wiping the old phone while a Tape still says Backing Up.",
        fix: "Wait for **Backed Up**. Once the phone is wiped, an unfinished upload can't be completed.",
      },
      {
        mistake: "Expecting Collections to appear on the new phone.",
        fix: "Collections and settings stay on the phone they were made on. Recreate them. It's a minute's work, and every Tape is there to put in them.",
      },
    ],
    troubleshooting: [
      {
        problem: "A Tape is missing on the new phone.",
        solutions: [
          "Check you signed in with the same Apple Account. A different account is a different Videflo library.",
          "Pull the Tapes tab down to refresh.",
          "If the old phone still exists, open Videflo on it. The Tape may still be uploading, or backup may have been off.",
        ],
      },
      {
        problem: "My subscription came back but the Tapes didn't.",
        solutions: [
          "The subscription follows your Apple Account; the Tapes follow your Videflo account. Sign in with Apple in Videflo and give it a moment to refresh.",
        ],
      },
      {
        problem: "A Tape is there but a recording inside it says unavailable.",
        solutions: [
          "That recording never finished uploading from the old phone. If that phone still exists, open Videflo on it and let it finish.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does iCloud Photos back up my Tapes?",
        answer: [
          "Only the copies you've exported into your photo library. Tapes inside Videflo aren't part of your photo library. They're protected by Videflo Cloud instead.",
        ],
      },
      {
        question: "Can I get my Tapes back if I deleted the app?",
        answer: [
          "Yes, for everything that was backed up. Reinstall and sign in. A recording that hadn't uploaded is recoverable only from a phone backup made before you deleted the app.",
        ],
      },
      {
        question: "Do I need to download everything on the new phone?",
        answer: [
          "No. Tapes stream from Videflo Cloud. Download the ones you want available offline and leave the rest where they are.",
        ],
      },
    ],
    related: ["videflo-cloud", "restore-purchases", "accounts-and-signing-in"],
  },
] as const;
