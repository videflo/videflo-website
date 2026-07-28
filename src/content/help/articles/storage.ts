import type { HelpArticle } from "../types";

export const storageArticles: readonly HelpArticle[] = [
  {
    slug: "storage-space",
    title: "How much space Tapes use, and how to free some up",
    description:
      "Where the gigabytes go, what's safe to delete, and what the low-storage warning means.",
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
    ],
    overview: [
      "Video is large. That's the whole story — a phone full of photographs will fill up far faster once it's also full of Tapes.",
      "The good news is that Videflo gives you a way to free up a lot of space without losing a single second of footage.",
    ],
    sections: [
      {
        id: "what-uses-space",
        heading: "What's using the space",
        blocks: [
          {
            kind: "definitions",
            items: [
              {
                term: "Your recordings",
                description:
                  "The footage itself. Standard (1080p) is the smallest; High (4K) is roughly four times the size for the same length.",
              },
              {
                term: "Prepared Tapes",
                description:
                  "The export-ready file Videflo builds when you tap **Prepare**. Roughly as big again as all the recordings in that Tape. This is very often what's actually filling your phone.",
              },
              {
                term: "Cover photos",
                description:
                  "Resized copies, usually well under a hundred kilobytes each. Never worth worrying about.",
              },
              {
                term: "Exported videos",
                description:
                  "Once exported, the copy lives in your Photos library and counts against your phone from there — not against Videflo.",
              },
            ],
          },
          {
            kind: "text",
            text: "You can see the overall picture in the iPhone's own **Settings → General → iPhone Storage**, where Videflo is listed with the rest of your apps.",
          },
        ],
      },
      {
        id: "freeing",
        heading: "Freeing up space, safest first",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Delete prepared Tapes you've already exported.",
                detail:
                  "Press and hold the Tape and choose **Delete Prepared Tape**. This removes only the export file. Every original recording stays safe and playable, and you can prepare again whenever you like. Start here — it's the biggest win with no risk at all.",
              },
              {
                title: "Export anything precious, then delete the Tape.",
                detail:
                  "The exported copy lives on in Photos. Only do this once you've checked the export plays properly.",
              },
              {
                title: "Delete recordings you don't want.",
                detail:
                  "Open **Manage Recordings**, watch them, and remove what you genuinely don't need. This is permanent.",
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
            title: "Deleting a Tape is permanent",
            text: [
              "There's no bin and no cloud copy. Export first, check the exported file plays, and only then delete.",
            ],
          },
        ],
      },
      {
        id: "warning",
        heading: "The low-storage warning",
        blocks: [
          {
            kind: "text",
            text: "While you're recording, Videflo watches the free space on your iPhone and shows a warning in the corner when it's getting short. The warning appears while there's still comfortable room to finish what you're filming — it's a nudge, not an emergency.",
          },
          {
            kind: "text",
            text: "If you see it mid-occasion, finish the recording you're on so it's safely saved, then free up some space before carrying on.",
          },
        ],
      },
    ],
    tips: [
      "Standard quality is the single biggest saving available. Choose it for everyday Tapes and reserve High for the occasions that deserve it.",
      "A prepared Tape is only needed at the moment you export. Delete it afterwards and prepare again next time — it costs you time, not footage.",
      "If your iPhone is permanently full, the honest answer may be a phone with more storage. Video is simply large.",
    ],
    pitfalls: [
      {
        mistake:
          "Deleting whole Tapes to make room, when prepared copies were the culprit.",
        fix: "Check the Tape menu for **Delete Prepared Tape** first. It's often gigabytes, and it costs you nothing.",
      },
      {
        mistake: "Assuming exporting to Photos frees up space.",
        fix: "It does the opposite — you now have two copies on the phone. Free space by deleting the prepared file, or the Tape, after exporting.",
      },
      {
        mistake: "Offloading the app in iPhone Storage to save room.",
        fix: "Don't. Offloading removes the app; whether your Tapes survive depends entirely on your backups. Delete prepared copies instead.",
      },
    ],
    troubleshooting: [
      {
        problem:
          "Videflo says there's not enough space, but the phone says there is.",
        solutions: [
          "Preparing a Tape needs room for the whole new file at once — several gigabytes for a long Tape.",
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
          "Not directly. They're stored on the iPhone. They may be included in an iPhone backup, and that backup does use iCloud storage if that's where you back up.",
        ],
      },
      {
        question: "Can I move Tapes to an SD card or external drive?",
        answer: [
          "No. Videflo keeps its recordings in its own storage on the iPhone. To get footage onto a drive, export it and copy it across from Photos using a computer.",
        ],
      },
      {
        question: "Why is Videflo so large in iPhone Storage?",
        answer: [
          "Because your recordings are counted as part of it. The app itself is small; the video is what takes the room.",
        ],
      },
    ],
    related: [
      "backups-and-new-iphone",
      "prepare-and-export-a-tape",
      "choosing-recording-quality",
    ],
  },

  {
    slug: "backups-and-new-iphone",
    title: "Backups, iCloud, and moving to a new iPhone",
    description:
      "The most important article here. Your Tapes exist in one place — make sure that isn't the only one.",
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
      "cloud",
    ],
    overview: [
      "Videflo keeps your recordings on your iPhone and nowhere else. There's no cloud copy, no sync, and no way for us to fetch anything back for you.",
      "That's a real privacy benefit — nobody but you has your family's footage. It also means the safety of your Tapes depends entirely on your own backups, so this is the one article worth acting on today rather than reading later.",
    ],
    sections: [
      {
        id: "the-risk",
        heading: "What that means in plain terms",
        blocks: [
          {
            kind: "warning",
            title: "Videflo cannot recover a lost Tape",
            text: [
              "If your iPhone is lost, stolen, damaged, or erased — or if the app is deleted — recordings that exist only inside Videflo are gone for good.",
              "We have no copy. Not a hidden one, not a temporary one. There is nothing to restore from on our side, ever.",
            ],
          },
        ],
      },
      {
        id: "two-things",
        heading: "Two things to do, in order",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Switch on an iPhone backup that includes app data.",
                detail:
                  "Open the **Settings** app, tap your name at the top, then **iCloud → iCloud Backup**, and turn it on. Backing up to a computer works just as well. Video is large, so make sure the backup has room to actually complete — a backup that keeps failing is no backup at all.",
              },
              {
                title: "Export the Tapes you couldn't bear to lose.",
                detail:
                  "An exported copy in your Photos library, in Files, or on a computer is a second copy that doesn't depend on Videflo at all. This is the belt to the backup's braces, and it's the one that survives absolutely everything.",
              },
            ],
          },
          {
            kind: "note",
            title: "Check the backup actually finished",
            text: [
              "In **Settings → your name → iCloud → iCloud Backup**, look at the last successful backup date. If it's weeks old, it's probably failing for space and needs attention.",
            ],
          },
        ],
      },
      {
        id: "new-iphone",
        heading: "Moving to a new iPhone",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Back up the old iPhone first, and check it succeeded.",
              },
              {
                title: "Set the new iPhone up by restoring from that backup.",
                detail:
                  "Either the iCloud backup, a computer backup, or Apple's direct iPhone-to-iPhone transfer. All three carry app data, and your Tapes travel with it.",
              },
              {
                title:
                  "Sign in with the same Apple Account and install Videflo.",
              },
              {
                title:
                  "Open Videflo and tap **Restore Purchases** in Settings.",
                detail: "That brings your subscription across.",
              },
              {
                title:
                  "Check your Tapes are all there before wiping the old phone.",
                detail: "Play one. Actually watch it. Then wipe.",
              },
            ],
          },
          {
            kind: "warning",
            title: "Setting up “as new” starts from nothing",
            text: [
              "If you set the new iPhone up as a new device rather than restoring a backup, your Tapes will not be there — and once the old phone is wiped, they're gone.",
              "Restore from the backup, or export everything beforehand.",
            ],
          },
        ],
      },
      {
        id: "why-no-cloud",
        heading: "Why there's no cloud backup",
        blocks: [
          {
            kind: "text",
            text: "Videflo is local-first on purpose. Family footage is about as personal as data gets, and the safest place for it is a device you hold. Nothing is uploaded to us, so nothing of yours can be exposed by a breach at our end.",
          },
          {
            kind: "text",
            text: "The trade is real, and we'd rather be straight about it than hide it in a settings screen: you get privacy, and you take on the backups. Apple's own iPhone backup does most of that work if you let it.",
          },
        ],
      },
    ],
    tips: [
      "Export your most precious Tape today. Not this month — today. It takes ten minutes and it's the difference between a memory and a story about a memory.",
      "If iCloud is short of space, backing up to a computer is free and holds everything.",
      "Keep the exported copies somewhere that isn't the phone as well — a computer, an external drive, or a cloud storage service you already trust.",
    ],
    pitfalls: [
      {
        mistake:
          "Assuming Tapes appear in the Photos app and are therefore backed up with your photos.",
        fix: "They don't. Only exported copies reach Photos. Everything else lives inside Videflo.",
      },
      {
        mistake:
          "Wiping the old iPhone before checking the new one has everything.",
        fix: "Open Videflo on the new phone and play a Tape through first. Then wipe.",
      },
      {
        mistake:
          "Deleting Videflo to “free up space”, meaning to reinstall later.",
        fix: "Deleting the app removes its recordings. Reinstalling brings back the app, not the footage.",
      },
    ],
    troubleshooting: [
      {
        problem: "My Tapes didn't come across to the new iPhone.",
        solutions: [
          "Check whether the new phone was restored from a backup or set up as new. Only a restore brings app data.",
          "If the old iPhone still exists and hasn't been wiped, everything is still on it — back it up properly and restore again.",
          "If the backup was too old, only Tapes made before that date will be there.",
        ],
      },
      {
        problem: "My subscription works but all my Tapes are missing.",
        solutions: [
          "That combination is expected on a device set up as new: the subscription follows your Apple Account, the recordings follow the backup.",
          "Restore the device from a backup that contains them, or recover them from the old iPhone if it's still around.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does iCloud Photos back up my Tapes?",
        answer: [
          "Only the copies you've exported into your photo library. Tapes inside Videflo aren't part of your photo library, so iCloud Photos never sees them.",
        ],
      },
      {
        question: "Will Videflo ever offer cloud backup?",
        answer: [
          "There's nothing to announce. If it ever arrives it would be something you choose to switch on, not something that happens quietly.",
        ],
      },
      {
        question: "Can I get my Tapes back if I deleted the app?",
        answer: [
          "Only from an iPhone backup made before you deleted it, or from copies you exported. Videflo holds nothing on your behalf.",
        ],
      },
      {
        question: "Can I keep Tapes on two iPhones at once?",
        answer: [
          "No. There's no sync. Each device has its own library, and the only way to get footage from one to the other is to export it and move the file across yourself.",
        ],
      },
    ],
    related: [
      "storage-space",
      "prepare-and-export-a-tape",
      "privacy-and-security",
    ],
  },
] as const;
