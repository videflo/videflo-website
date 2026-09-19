import type { HelpArticle } from "../types";

export const exportingArticles: readonly HelpArticle[] = [
  {
    slug: "export-a-tape",
    title: "Exporting a Tape to Photos",
    description:
      "Turning a whole Tape into one ordinary video, saved straight into your Photos library.",
    category: "exporting",
    keywords: [
      "export",
      "save to photos",
      "camera roll",
      "video file",
      "download",
      "copy out",
      "percent",
      "send",
      "airdrop",
    ],
    overview: [
      "Exporting makes an ordinary video file out of a whole Tape and saves it into your Photos library. From there it behaves like any other video: you can share it, AirDrop it, copy it to a computer, or back it up with everything else.",
      "It's one step. Choose **Export Tape**, watch the percentage, and the video is in Photos. Nothing is left behind in Videflo — there's no prepared copy to manage or delete afterwards.",
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
                title: "Open the Tape so it's playing.",
              },
              {
                title:
                  "Tap the **⋯** menu in the player and choose **Export Tape**.",
              },
              {
                title: "Confirm.",
                detail:
                  "Videflo checks there's enough free space for the export before it starts, and tells you if there isn't.",
              },
              {
                title: "Wait while it exports.",
                detail:
                  "**Exporting 42%** counts up as it works. It's real progress, not an estimate. Keep Videflo on screen — you can cancel at any time, and nothing is kept from a cancelled export.",
              },
              {
                title: "**Export Complete · Saved to Photos.** Tap **Done**.",
                detail:
                  "The first time, iOS asks permission to add to your library.",
              },
            ],
          },
        ],
      },
      {
        id: "what-you-get",
        heading: "What the exported video is",
        blocks: [
          {
            kind: "list",
            items: [
              "**The whole Tape, in order**, at the quality it was recorded at. On a Shared Tape that includes everyone's recordings.",
              "**A new file.** Your original recordings are never touched, whatever happens during the export.",
              "**With or without the date stamp**, depending on **Export with Timestamp** in Settings → Export Settings. See **Timestamps**.",
            ],
          },
          {
            kind: "note",
            title: "A Tape that lives only in Videflo Cloud exports too",
            text: [
              "If you've removed a Tape from this iPhone, Export Tape streams it from Videflo Cloud while it renders. It doesn't download the Tape first, and it doesn't leave a copy on the phone afterwards — you'll need a connection, and a long Tape takes longer than one that's already here.",
            ],
          },
        ],
      },
      {
        id: "sending",
        heading: "Sending the video to someone",
        blocks: [
          {
            kind: "text",
            text: "Once it's in Photos, share it the way you share any video: open the **Photos** app, find it in Recents, tap the share button, and choose AirDrop, Messages, a shared album, or saving to Files.",
          },
          {
            kind: "list",
            items: [
              "**A Tape built over a holiday can be several gigabytes** — past what Messages, Mail or WhatsApp will carry, and some services quietly squash the video to fit.",
              "**AirDrop** is best for someone in the same room — full quality, no size limit, nothing uploaded anywhere.",
              "**A single recording** is often the friendlier thing to send — see **Saving one recording to Photos**.",
              "**Want them to have the memory itself, not a copy?** Invite them to the Tape instead — see **Shared Tapes**. They can watch it in Videflo and add their own recordings.",
            ],
          },
        ],
      },
      {
        id: "who-can-export",
        heading: "Who can export a Shared Tape",
        blocks: [
          {
            kind: "text",
            text: "Only the Tape's owner. Every member can watch the whole Tape in Videflo, but **Export Tape** appears in the owner's menu alone — access to watch a memory isn't the same as permission to hand out copies of it.",
          },
        ],
      },
    ],
    tips: [
      "Check your free space first. The exported file is roughly as large as all the recordings in the Tape put together.",
      "Exporting a long 4K Tape can take a good while. Plug in and start it before you make a cup of tea.",
      "Exporting is a fine way to keep a copy outside Videflo altogether — the video in Photos is included in your normal iPhone backup and iCloud Photos.",
    ],
    pitfalls: [
      {
        mistake: "Looking for Export Tape in the press-and-hold menu.",
        fix: "It's in the player. Open the Tape, then tap **⋯** at the top.",
      },
      {
        mistake:
          "Exporting, then adding another recording, then wondering why the file in Photos is missing it.",
        fix: "An exported file is a snapshot of the Tape at that moment. Export again for a fresh copy.",
      },
      {
        mistake: "Switching to another app in the middle of an export.",
        fix: "Exporting runs while Videflo is on screen. Leave it in the foreground until it says **Export Complete**.",
      },
    ],
    troubleshooting: [
      {
        problem: "Export fails or stops part way.",
        solutions: [
          "Free up storage — this is by far the most common cause.",
          "Switch off Low Power Mode.",
          "Keep Videflo on screen with the phone plugged in and try again.",
          "If the Tape lives in Videflo Cloud, check your connection.",
          "If one particular Tape always fails, check **Manage Recordings** for a recording marked unavailable — a Tape exports whole or not at all.",
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
        question: "Does exporting use my Videflo Cloud allowance?",
        answer: [
          "No. The exported video goes into Photos on your iPhone. Nothing is uploaded, and nothing changes in Videflo Cloud.",
        ],
      },
    ],
    related: ["export-a-single-recording", "timestamps", "shared-tapes"],
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
      "Sometimes you only want one bit — the twenty seconds where the dog does the thing. You don't have to export the whole Tape for that.",
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
              "The **Export with Timestamp** setting applies to exporting a whole Tape. A single recording saved this way is exported exactly as filmed.",
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
                  "Quick, no date stamp. Best for sending someone a moment.",
              },
              {
                term: "Export the Tape",
                description:
                  "The complete memory as one video, with the date stamp if you've turned it on. Best for keeping and for handing on.",
              },
            ],
          },
        ],
      },
    ],
    tips: [
      "Want it shorter? Export it, then trim the copy in the Photos app. Videflo never trims — the recording in the Tape stays whole.",
      "Saving a recording to Photos doesn't remove it from the Tape. You end up with two copies, which is rather the point.",
    ],
    troubleshooting: [
      {
        problem: "Export to Photos is greyed out or missing.",
        solutions: [
          "Check the recording isn't marked unavailable — a recording with no file on this iPhone and no finished copy in Videflo Cloud can't be exported.",
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
          "Not in one go — they're exported one at a time. To get everything together, export the whole Tape instead.",
        ],
      },
      {
        question:
          "Can I export a recording somebody else added to a Shared Tape?",
        answer: [
          "Export to Photos is offered for every recording you can play, so yes — it's part of the Tape you're on. Exporting the whole Tape in one go is for the owner only.",
        ],
      },
    ],
    related: ["export-a-tape", "manage-recordings", "shared-tapes"],
  },
] as const;
