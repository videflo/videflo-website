import type { HelpArticle } from "../types";

export const exportingArticles: readonly HelpArticle[] = [
  {
    slug: "prepare-and-export-a-tape",
    title: "Preparing and exporting a Tape",
    description:
      "Exporting a whole Tape as one ordinary video file, saved into your Photos library.",
    category: "exporting",
    keywords: [
      "export",
      "save to photos",
      "prepare",
      "camera roll",
      "video file",
      "download",
      "copy out",
      "percent",
    ],
    overview: [
      "Exporting makes an ordinary video file out of a whole Tape and saves it into your Photos library. From there it behaves like any other video: you can share it, AirDrop it, copy it to a computer, or back it up with everything else.",
      "It happens in two steps. **Prepare** builds the single video file, which takes some time. **Export to Photos** copies that finished file across, which is quick.",
    ],
    sections: [
      {
        id: "steps",
        heading: "Exporting a Tape",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title:
                  "Press and hold the Tape, or open the three-dot menu while watching it.",
              },
              {
                title:
                  "Choose **Prepare Tape**, then pick **With Timestamp** or **Without Timestamp**.",
                detail:
                  "With Timestamp draws the filming date permanently into the video. See **The date stamp on your Tapes**.",
              },
              {
                title: "Wait while it prepares.",
                detail:
                  "A percentage appears on the Tape's card. You can carry on using the rest of the app, and even leave Videflo for a while.",
              },
              {
                title:
                  "When it says **Tape Ready**, choose **Export to Photos**.",
                detail:
                  "The first time, iOS asks permission to add to your library.",
              },
              {
                title: "The video appears in Photos, in your Recents.",
              },
            ],
          },
        ],
      },
      {
        id: "why-prepare",
        heading: "Why there's a Prepare step",
        blocks: [
          {
            kind: "text",
            text: "A Tape isn't a single file on disk — it's your original recordings, played back as one continuous piece. That's what keeps your footage safe and untouched, but it means there's no ready-made file to hand to Photos.",
          },
          {
            kind: "text",
            text: "**Prepare** builds that file once. After it's built, exporting the same Tape again is instant, because the work is already done.",
          },
          {
            kind: "note",
            title: "Your originals are never touched",
            text: [
              "Preparing creates a brand-new copy. Every original recording stays exactly as it was, whatever happens during the export.",
            ],
          },
        ],
      },
      {
        id: "states",
        heading: "The labels you'll see on a Tape",
        blocks: [
          {
            kind: "definitions",
            items: [
              {
                term: "A percentage",
                description:
                  "Preparation is running. Real progress, not an estimate. **Cancel Preparation** appears in the menu while it does.",
              },
              {
                term: "Tape Ready",
                description:
                  "A prepared file exists and **Export to Photos** will be quick.",
              },
              {
                term: "Tape Changed",
                description:
                  "You've added, trimmed, or deleted a recording since preparing. The prepared file is now out of date — choose **Prepare Again** for an export that includes the change.",
              },
              {
                term: "Preparation Failed",
                description:
                  "Something went wrong, most often storage. Free some space and try again; nothing was lost.",
              },
            ],
          },
        ],
      },
      {
        id: "background",
        heading: "Leaving the app while it prepares",
        blocks: [
          {
            kind: "text",
            text: "Preparation keeps going for a while after you switch away, but iOS eventually suspends it. If that happens the Tape is shown as interrupted when you come back, and one tap on **Prepare Again** restarts it. Nothing is corrupted, and no partial file is left behind.",
          },
          {
            kind: "text",
            text: "For a long Tape, the reliable approach is to start it, leave Videflo on screen, and put the phone on a charger.",
          },
        ],
      },
    ],
    tips: [
      "Check your free space first. The prepared file is roughly as large as all the recordings in the Tape put together, and it needs to exist alongside them.",
      "Once a Tape is exported, you can delete the prepared copy from the Tape's menu to get that space back. Your recordings stay untouched and you can prepare again whenever you like.",
      "Preparing a long 4K Tape can take a good while. Plug in and start it before you make a cup of tea.",
      "Exporting is the single best way to protect an irreplaceable Tape, because the copy in Photos is included in your normal iPhone backup.",
    ],
    pitfalls: [
      {
        mistake: "Looking for an Export button without preparing first.",
        fix: "**Export to Photos** only appears once the Tape says **Tape Ready**. Prepare it first — that's the step that builds the file.",
      },
      {
        mistake:
          "Exporting, then adding another recording, then wondering why the file in Photos is missing it.",
        fix: "An exported file is a snapshot. The Tape will now say **Tape Changed** — prepare and export again to get a fresh copy.",
      },
      {
        mistake: "Starting a big export with almost no free storage.",
        fix: "Preparation needs room for the whole new file. Free up space first, or the export will fail part way through.",
      },
    ],
    troubleshooting: [
      {
        problem: "Preparation fails every time.",
        solutions: [
          "Free up storage — this is by far the most common cause.",
          "Switch off Low Power Mode.",
          "Keep Videflo on screen with the phone plugged in and try again.",
          "If one particular Tape always fails, check **Manage Recordings** for a recording whose file is missing.",
        ],
      },
      {
        problem: "It says Videflo can't save to Photos.",
        solutions: [
          "Check **Settings → Videflo → Photos** allows adding to your library.",
          "Make sure there's room in your photo library — the exported video needs space of its own.",
        ],
      },
      {
        problem: "The export finished but I can't find the video.",
        solutions: [
          "Open Photos and look in **Recents** — it's added with today's date.",
          "Check **Albums → Videos**.",
          "If your library is very large, sort Recents by newest first.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does exporting reduce the quality?",
        answer: [
          "No. The exported file keeps the quality the Tape was filmed at.",
        ],
      },
      {
        question: "Can I export to Files instead of Photos?",
        answer: [
          "Videflo saves to Photos. Once it's there you can share it into Files, AirDrop it, or copy it to a computer using the Photos app's own share options.",
        ],
      },
      {
        question: "Can I export just part of a Tape?",
        answer: [
          "Exporting a Tape always covers the whole thing. To get one piece on its own, open **Manage Recordings** and export that single recording.",
        ],
      },
      {
        question: "Does deleting the prepared copy delete my Tape?",
        answer: [
          "No. It removes only the export-ready file. Every original recording stays safe and playable, and you can prepare again at any time.",
        ],
      },
    ],
    related: [
      "export-a-single-recording",
      "sharing-your-videos",
      "storage-space",
    ],
  },

  {
    slug: "export-a-single-recording",
    title: "Saving one recording to Photos",
    description:
      "Getting a single piece out of a Tape without exporting the whole thing.",
    category: "exporting",
    keywords: [
      "one clip",
      "single",
      "part",
      "save clip",
      "photos",
      "quick export",
    ],
    overview: [
      "Sometimes you only want one bit — the twenty seconds where the dog does the thing. You don't have to prepare the whole Tape for that.",
      "Individual recordings can be saved straight to your Photos library, and because there's nothing to build first, it's quick.",
    ],
    sections: [
      {
        id: "how",
        heading: "Saving one recording",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title:
                  "Press and hold the Tape and choose **Manage Recordings**.",
              },
              {
                title: "Find the recording you want.",
                detail:
                  "Tap **Play** first if you're not sure which one it is.",
              },
              {
                title: "Choose **Export to Photos**.",
                detail:
                  "iOS asks permission the first time you save anything to your library.",
              },
              {
                title: "It appears in Photos, in your Recents.",
              },
            ],
          },
          {
            kind: "note",
            title: "This one has no date stamp",
            text: [
              "Burning the date into the picture is offered when you prepare a whole Tape. A single recording saved this way is exported as filmed.",
            ],
          },
        ],
      },
      {
        id: "which",
        heading: "Which one should I use?",
        blocks: [
          {
            kind: "definitions",
            items: [
              {
                term: "Export one recording",
                description:
                  "Quick, no preparation, no date stamp option. Best for sending someone a moment.",
              },
              {
                term: "Prepare and export the Tape",
                description:
                  "The complete memory as one video, with the option to burn in the date. Best for keeping and for handing on.",
              },
            ],
          },
        ],
      },
    ],
    tips: [
      "Trim the recording first if it has a slow start — the export copies whatever the recording currently is.",
      "Saving a recording to Photos doesn't remove it from the Tape. You end up with two copies, which is rather the point.",
    ],
    troubleshooting: [
      {
        problem: "Export to Photos is greyed out or missing.",
        solutions: [
          "Check the recording's file still exists — a recording marked unavailable can't be exported.",
          "Wait for any preparation on that Tape to finish.",
        ],
      },
      {
        problem: "It says permission was denied.",
        solutions: ["Turn on **Settings → Videflo → Photos**, then try again."],
      },
    ],
    faqs: [
      {
        question: "Does exporting a recording delete it from the Tape?",
        answer: ["No. It makes a copy; the Tape is unchanged."],
      },
      {
        question: "Can I export several recordings at once?",
        answer: [
          "Not in one go — they're exported one at a time. To get everything together, prepare and export the whole Tape instead.",
        ],
      },
    ],
    related: [
      "prepare-and-export-a-tape",
      "manage-recordings",
      "sharing-your-videos",
    ],
  },

  {
    slug: "sharing-your-videos",
    title: "Sharing a Tape with someone",
    description:
      "How to send a memory to family — and why it goes through Photos rather than Videflo.",
    category: "exporting",
    keywords: [
      "send",
      "share",
      "airdrop",
      "message",
      "whatsapp",
      "email video",
      "family",
      "link",
    ],
    overview: [
      "Videflo has no share button, and no way to send a Tape from inside the app. That's deliberate: nothing you film ever leaves your iPhone unless you choose to take it out.",
      "Sharing works by exporting first. Once a Tape is a video in your Photos library, every way you already share videos works exactly as normal.",
    ],
    sections: [
      {
        id: "how",
        heading: "Sending a Tape to someone",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Export the Tape.",
                detail:
                  "Prepare it, then **Export to Photos**. See **Preparing and exporting a Tape**.",
              },
              { title: "Open the **Photos** app and find it in Recents." },
              {
                title: "Tap the share button — the square with an arrow.",
              },
              {
                title: "Choose how to send it.",
                detail:
                  "AirDrop, Messages, Mail, WhatsApp, a shared album, or saving to Files — whatever you normally use.",
              },
            ],
          },
        ],
      },
      {
        id: "big-files",
        heading: "Tapes are often too big to message",
        blocks: [
          {
            kind: "text",
            text: "A Tape built over a whole holiday can easily be several gigabytes, which is well past what Messages, Mail, or WhatsApp will carry. Some services quietly squash the video down to fit, which is a shame for something you filmed at 4K.",
          },
          {
            kind: "list",
            items: [
              "**AirDrop** is the best option for someone in the same room — full quality, no size limit, nothing uploaded anywhere.",
              "**A shared album** in Photos suits family who are further away, though iCloud will reduce the quality somewhat.",
              "**A single recording** rather than the whole Tape is often the friendlier thing to send.",
              "**A computer** is best for anything genuinely large — copy the exported file across and share it from there.",
            ],
          },
        ],
      },
    ],
    tips: [
      "Export **With Timestamp** for anything you're sending to family. The date travels with the video and doesn't rely on anyone's file names.",
      "Sending one recording rather than a two-hour Tape is usually kinder to the person receiving it.",
      "AirDrop keeps the video at full quality and never uploads it anywhere.",
    ],
    pitfalls: [
      {
        mistake: "Hunting for a share button inside Videflo.",
        fix: "There isn't one. Export to Photos, then share from there.",
      },
      {
        mistake:
          "Emailing a large export and assuming it went. Most mail systems reject video that size.",
        fix: "AirDrop it, or put it in a shared album.",
      },
    ],
    faqs: [
      {
        question: "Can I send someone a link to a Tape?",
        answer: [
          "No. Videflo doesn't host anything, so there's no link to give. A Tape only exists on your iPhone until you export it.",
        ],
      },
      {
        question: "Can two people record into the same Tape?",
        answer: [
          "No. A Tape lives on one iPhone and there's no sharing or syncing between devices.",
        ],
      },
      {
        question: "Does Videflo upload my videos anywhere when I share?",
        answer: [
          "No. Videflo hands the exported file to your Photos library on the device. Anything that happens after that is between you and the app you choose to share with.",
        ],
      },
    ],
    related: [
      "prepare-and-export-a-tape",
      "privacy-and-security",
      "backups-and-new-iphone",
    ],
  },
] as const;
