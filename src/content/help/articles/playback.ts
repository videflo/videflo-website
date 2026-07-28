import type { HelpArticle } from "../types";

export const playbackArticles: readonly HelpArticle[] = [
  {
    slug: "playback-basics",
    title: "Watching a Tape",
    description:
      "Playing, pausing, skipping, and rotating — the controls on the playback screen.",
    category: "playback",
    keywords: [
      "play",
      "watch",
      "pause",
      "skip",
      "rewind",
      "fast forward",
      "full screen",
      "controls",
      "speed",
    ],
    overview: [
      "Tap any Tape to watch it. The whole thing plays from beginning to end as one continuous video, however many separate recordings went into it — no gaps, no black flashes, no interruption to the sound.",
      "The controls fade away while you watch and come back when you tap the picture.",
    ],
    sections: [
      {
        id: "controls",
        heading: "The controls",
        blocks: [
          {
            kind: "definitions",
            items: [
              {
                term: "Play and pause",
                description:
                  "The large button in the middle of the control bar.",
              },
              {
                term: "Back 10 / Forward 10",
                description:
                  "Jumps ten seconds in either direction. The quickest way to catch something you missed.",
              },
              {
                term: "The filmstrip",
                description:
                  "The strip of thumbnails along the bottom. Drag it to move through the Tape — see **Scrubbing through a Tape**.",
              },
              {
                term: "Recordings",
                description:
                  "The list button opens every recording in the Tape so you can jump straight to one.",
              },
              {
                term: "Continue Recording",
                description:
                  "Adds more to this Tape without leaving the screen.",
              },
              {
                term: "The three-dot menu",
                description:
                  "Manage Recordings, Rename, Prepare, Export, and Delete.",
              },
            ],
          },
        ],
      },
      {
        id: "rotate",
        heading: "Turning the phone",
        blocks: [
          {
            kind: "text",
            text: "Turn your iPhone sideways while watching a landscape Tape and the picture fills the screen. Portrait Tapes fill the screen held upright. The controls rearrange themselves to suit, and there's nothing to switch on.",
          },
          {
            kind: "text",
            text: "If turning the phone does nothing, your iPhone's Rotation Lock is on — swipe down from the top-right corner to switch it off.",
          },
        ],
      },
      {
        id: "no-speed",
        heading: "What the player deliberately doesn't have",
        blocks: [
          {
            kind: "text",
            text: "There's no playback speed control, no loop, no picture-in-picture, and no AirPlay button. Videflo's player is built to show a memory the way it happened, and the controls are kept to what that needs.",
          },
          {
            kind: "text",
            text: "If you'd like any of these, export the Tape to your Photos library and watch it there — the Photos app and the TV app offer the full set of playback features.",
          },
        ],
      },
    ],
    tips: [
      "Tap the picture once to bring the controls back, and again to hide them. They also hide themselves after a few seconds.",
      "The controls won't disappear while your finger is on the filmstrip, so you can take your time.",
      "The date and time in the corner is the moment that footage was actually filmed, not the position in the Tape.",
    ],
    troubleshooting: [
      {
        problem: "There's no sound.",
        solutions: [
          "Check the iPhone's silent switch and the volume buttons.",
          "If it was filmed while microphone access was off, the footage is genuinely silent and can't be fixed afterwards.",
          "Check nothing is connected by Bluetooth that's taking the audio, like headphones in another room.",
        ],
      },
      {
        problem: "The Tape looks shorter than I expected.",
        solutions: [
          "Open **Manage Recordings** to see everything the Tape actually contains.",
          "A recording that was interrupted holds only what was captured before the interruption.",
          "Check the recovery card on Home in case a recording never made it into the Tape.",
        ],
      },
      {
        problem: "Playback stutters or the picture freezes.",
        solutions: [
          "Close other apps and try again — 4K playback asks a lot of the phone.",
          "Switch off Low Power Mode, which limits performance.",
          "Restart your iPhone if it persists.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I play a Tape at double speed?",
        answer: [
          "Not inside Videflo. Export the Tape to your Photos library, where the Photos app offers speed controls.",
        ],
      },
      {
        question: "Can I watch a Tape on my TV?",
        answer: [
          "There's no AirPlay button in Videflo. Export the Tape to Photos and AirPlay it from there, or copy the exported file to a computer.",
        ],
      },
      {
        question: "Why does the whole Tape play instead of one recording?",
        answer: [
          "Because that's what a Tape is — one continuous memory. To watch a single recording on its own, open **Manage Recordings** and play it from there.",
        ],
      },
    ],
    related: ["scrubbing-through-a-tape", "timestamps", "manage-recordings"],
  },

  {
    slug: "scrubbing-through-a-tape",
    title: "Scrubbing through a Tape",
    description:
      "Using the filmstrip to find an exact moment, including on a Tape that's hours long.",
    category: "playback",
    keywords: [
      "scrub",
      "timeline",
      "filmstrip",
      "seek",
      "jump",
      "zoom timeline",
      "pinch",
      "find moment",
    ],
    overview: [
      "The strip of thumbnails along the bottom of the player is how you move through a Tape. Drag it and the picture follows your finger straight away, so you can find an exact moment by eye rather than by guessing at a time.",
    ],
    sections: [
      {
        id: "basics",
        heading: "Moving through the Tape",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Put a finger on the filmstrip and drag.",
                detail:
                  "The picture updates as you move, so you can see where you're going.",
              },
              {
                title: "Lift your finger where you want to be.",
                detail: "Playback picks up from there.",
              },
            ],
          },
          {
            kind: "text",
            text: "The small dividers along the strip show where one recording ends and the next begins — handy for finding “the bit after we got back from the beach”.",
          },
        ],
      },
      {
        id: "zoom",
        heading: "Zooming in on a long Tape",
        blocks: [
          {
            kind: "text",
            text: "On a Tape that runs for hours, the whole thing squeezed into one strip makes fine control impossible. So you can stretch it out.",
          },
          {
            kind: "steps",
            steps: [
              {
                title: "Pinch outwards on the filmstrip with two fingers.",
                detail:
                  "A small readout appears showing how far in you are, such as **2.4×**.",
              },
              {
                title: "Drag to move along the stretched strip.",
                detail:
                  "Each drag now covers less time, so you can land on the exact second.",
              },
              {
                title:
                  "Double-tap the filmstrip to fit the whole Tape back on screen.",
              },
            ],
          },
          {
            kind: "note",
            title: "The readout is meant to disappear",
            text: [
              "It shows while you're touching the timeline and fades shortly after you let go. Your zoom level stays as you set it — only the label goes away. Touch the strip again to see it.",
            ],
          },
        ],
      },
      {
        id: "jump",
        heading: "Jumping to a particular recording",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Tap the **Recordings** list button in the player.",
              },
              {
                title:
                  "Every recording is listed with its start time and length.",
                detail: "The one currently playing is highlighted.",
              },
              {
                title: "Tap one to jump straight to it.",
              },
            ],
          },
          {
            kind: "text",
            text: "You can also rename a recording from this list, which makes finding it next time far easier.",
          },
        ],
      },
    ],
    tips: [
      "Ten-second skips are quicker than scrubbing for small corrections. Use the filmstrip when you're hunting for something specific.",
      "Zoom in *before* dragging when you're after an exact frame — dragging a fully zoomed-out strip moves minutes per millimetre.",
      "The thumbnails fill in as you go. On a long Tape, give them a second to catch up.",
    ],
    troubleshooting: [
      {
        problem: "The zoom readout stays on screen.",
        solutions: [
          "It fades on its own shortly after you let go. If two fingers are resting still on the strip it may linger — lift them.",
        ],
      },
      {
        problem: "Dragging the filmstrip does nothing.",
        solutions: [
          "Lift both fingers off the screen and try again with one.",
          "If the strip stays unresponsive, close the player and reopen the Tape.",
        ],
      },
      {
        problem: "Thumbnails are blank or grey.",
        solutions: [
          "They load in the background — give a long Tape a few seconds.",
          "A permanently blank section suggests that recording's file is missing. Check **Manage Recordings**.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I type in a timecode to jump to?",
        answer: [
          "No. Moving through a Tape is done by dragging the filmstrip or by jumping to a recording from the Recordings list.",
        ],
      },
      {
        question:
          "Does scrubbing across a join between recordings cause a jump?",
        answer: [
          "No. A Tape is played as one continuous piece, so scrubbing across a boundary is no different from scrubbing anywhere else.",
        ],
      },
    ],
    related: ["playback-basics", "manage-recordings", "timestamps"],
  },

  {
    slug: "timestamps",
    // Named "timestamp" because that is the word the app itself uses — Settings
    // has "Show Timestamp" and "Timestamp Position" — and therefore the word
    // people search for. Titled "The date stamp on your Tapes", this article did
    // not appear in the first three results for "timestamp" at all.
    title: "Timestamps: the date stamp on your Tapes",
    description:
      "Turning the camcorder-style timestamp on or off, moving it to the other corner, and burning it into an export.",
    category: "playback",
    keywords: [
      "date",
      "time",
      "overlay",
      "vhs",
      "corner",
      "bottom left",
      "bottom right",
      "burn in",
      "show timestamp",
    ],
    overview: [
      "Videflo can show the date and time a piece of footage was filmed in the corner of the picture, the way a camcorder used to. It's on by default, because years later that little line is often the most valuable thing on screen.",
      "It's an overlay, not part of the video — it's drawn on top while you watch, and your recordings are never altered. If you want it permanently in an exported file, there's an option for that at export time.",
    ],
    sections: [
      {
        id: "settings",
        heading: "Turning it on or off",
        blocks: [
          {
            kind: "steps",
            steps: [
              { title: "Open **Settings** from the gear on the Home tab." },
              {
                title:
                  "Under **Playback**, switch **Show Timestamp** on or off.",
              },
              {
                title:
                  "Choose **Timestamp Position** — Bottom Left or Bottom Right.",
                detail:
                  "The position choice is greyed out while the timestamp is switched off.",
              },
            ],
          },
          {
            kind: "text",
            text: "The setting applies to every Tape as you watch it. It isn't stored per Tape, so switching it off tidies the whole library at once.",
          },
        ],
      },
      {
        id: "what-it-shows",
        heading: "What it actually shows",
        blocks: [
          {
            kind: "text",
            text: "The date and time that piece of footage was filmed — for example **JUL 10 2026** above **8:42 PM**. On a Tape built over months, the stamp changes as playback crosses from one recording into the next, which is rather lovely to watch.",
          },
          {
            kind: "text",
            text: "It's never the current time, and never your position in the Tape.",
          },
        ],
      },
      {
        id: "exports",
        heading: "Putting the stamp into an exported video",
        blocks: [
          {
            kind: "text",
            text: "When you prepare a Tape for export, Videflo asks how you'd like it:",
          },
          {
            kind: "list",
            items: [
              "**With Timestamp** — the date and time are drawn permanently into the exported video, so they'll be there wherever the file goes.",
              "**Without Timestamp** — a clean picture.",
            ],
          },
          {
            kind: "warning",
            title: "Burned-in stamps can't be removed",
            text: [
              "Choosing **With Timestamp** writes the text into the pixels of the exported copy. To get a clean version, prepare the Tape again choosing **Without Timestamp**.",
              "Your original recordings are never affected either way.",
            ],
          },
        ],
      },
    ],
    tips: [
      "Leave it on. It costs nothing, and in ten years it turns “a nice video of the garden” into “the afternoon before we moved house”.",
      "Move the stamp to the other corner if it lands on someone's face in a Tape you watch often.",
      "Exporting **With Timestamp** is the right call for anything you're handing to family — the date survives being copied around.",
    ],
    pitfalls: [
      {
        mistake:
          "Expecting the setting to change a video you've already exported.",
        fix: "It can't — an exported file is finished. Prepare and export again with the other choice.",
      },
      {
        mistake: "Assuming the timestamp is burned into your recordings.",
        fix: "It never is. Switching it off in Settings removes it completely from playback.",
      },
    ],
    troubleshooting: [
      {
        problem: "The timestamp isn't showing.",
        solutions: [
          "Check **Show Timestamp** is on in Settings.",
          "It sits in the corner of the *picture*, not the corner of the screen — on a portrait Tape watched sideways, look at the edge of the video itself.",
        ],
      },
      {
        problem: "The date on a recording looks wrong.",
        solutions: [
          "It's taken from your iPhone's clock at the moment of filming. If the clock was wrong then, the stamp reflects that.",
          "There's no way to change a recording's date after the fact.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I change the date format?",
        answer: [
          "No. The stamp uses one deliberate camcorder-style format across the whole app.",
        ],
      },
      {
        question: "Can I show the timestamp on some Tapes and not others?",
        answer: [
          "Not during playback — it's a single app-wide setting. Exports are per-export, though, so you can burn it into one Tape and leave another clean.",
        ],
      },
      {
        question: "Does the timestamp appear while I'm recording?",
        answer: [
          "There's a small date and time readout on the recording screen, but it's only ever on screen. Nothing is written into the video as you film.",
        ],
      },
    ],
    related: [
      "playback-basics",
      "prepare-and-export-a-tape",
      "settings-reference",
    ],
  },
] as const;
