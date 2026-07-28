import type { HelpArticle } from "../types";

export const tapeArticles: readonly HelpArticle[] = [
  {
    slug: "managing-your-tapes",
    title: "Renaming, deleting, and tidying your Tapes",
    description:
      "The Tape menu, what each action does, and which ones can't be undone.",
    category: "tapes",
    keywords: [
      "rename",
      "delete tape",
      "remove",
      "library",
      "grid",
      "list view",
      "organise",
      "tidy",
      "menu",
    ],
    overview: [
      "Everything you can do to a Tape lives in one menu. Press and hold a Tape — on Home, in the Tapes tab, or inside a Collection — and it appears.",
      "Two of those actions permanently delete video. They're marked clearly here, and the app asks you to confirm both.",
    ],
    sections: [
      {
        id: "menu",
        heading: "What's in the menu",
        blocks: [
          {
            kind: "definitions",
            items: [
              {
                term: "Continue Recording",
                description: "Opens the camera to add more to this Tape.",
              },
              {
                term: "Manage Recordings",
                description:
                  "Opens the list of individual recordings inside the Tape, where you can play, rename, trim, or delete them one at a time.",
              },
              {
                term: "Add to Collection / Move to Collection",
                description:
                  "Puts the Tape in a Collection. A Tape can be in one Collection at a time, so moving it takes it out of the previous one.",
              },
              {
                term: "Choose Cover Photo / Remove Cover Photo",
                description:
                  "Picks a picture from your photo library to represent the Tape, or goes back to the automatic one.",
              },
              {
                term: "Prepare Tape",
                description:
                  "Builds the single video file that exporting needs. Takes a while for long Tapes, and you can keep using the app while it works.",
              },
              {
                term: "Export to Photos",
                description:
                  "Saves the prepared Tape into your photo library, with or without the date stamp.",
              },
              {
                term: "Rename",
                description: "Changes the Tape's name. Nothing else changes.",
              },
              {
                term: "Delete",
                description:
                  "Permanently removes the Tape and all its video from your iPhone.",
              },
            ],
          },
        ],
      },
      {
        id: "rename",
        heading: "Renaming a Tape",
        blocks: [
          {
            kind: "steps",
            steps: [
              { title: "Press and hold the Tape, then choose **Rename**." },
              { title: "Type the new name." },
              { title: "Tap **Save**." },
            ],
          },
          {
            kind: "text",
            text: "Rename as often as you like — it only changes the label. The recordings, the order, the quality and the cover are all untouched. You can also rename from the three-dot menu while watching a Tape.",
          },
        ],
      },
      {
        id: "delete",
        heading: "Deleting a Tape",
        blocks: [
          {
            kind: "warning",
            title: "This cannot be undone",
            text: [
              "Deleting a Tape deletes every recording inside it from your iPhone. Videflo has no copy, no cloud, and no bin to fish it out of.",
              "If there's any chance you'll want it, export it first — that leaves a copy in your Photos library that survives the deletion.",
            ],
          },
          {
            kind: "steps",
            steps: [
              { title: "Press and hold the Tape and choose **Delete**." },
              {
                title:
                  "Read the confirmation, which names the Tape you're about to remove.",
              },
              {
                title: "Tap **Delete** to confirm, or **Cancel** to back out.",
              },
            ],
          },
        ],
      },
      {
        id: "views",
        heading: "Grid or list",
        blocks: [
          {
            kind: "text",
            text: "The button in the Tapes header switches between a picture grid and a tighter list. It shows the layout you'd get, not the one you're in, and Videflo remembers your choice.",
          },
          {
            kind: "text",
            text: "The Tapes tab and the Collections tab remember separately, so you can keep dense rows for a long library while your Collections stay visual.",
          },
        ],
      },
    ],
    tips: [
      "Tapes are listed with whatever you filmed into most recently at the top, so the Tape you're actively growing is always easy to find.",
      "Deleting the **prepared** copy of a Tape frees up a lot of space and doesn't touch your recordings — see **How much space Tapes use**.",
      "Renaming a Tape doesn't rename anything you've already exported to Photos.",
    ],
    pitfalls: [
      {
        mistake:
          "Deleting a Tape to free up space, when it was the prepared copy taking the room.",
        fix: "Use **Delete Prepared Tape** instead. It removes only the export-ready file and leaves every original recording safe and playable.",
      },
      {
        mistake:
          "Assuming a deleted Tape is in the Photos app's Recently Deleted.",
        fix: "It isn't — Videflo's recordings never lived in Photos unless you exported them. Recently Deleted only holds things that were in your photo library.",
      },
    ],
    troubleshooting: [
      {
        problem: "The menu doesn't appear when I tap a Tape.",
        solutions: [
          "Press and *hold* rather than tapping. A tap opens the Tape for watching.",
          "While a Tape is being prepared, some actions are hidden. Wait for it to finish or cancel the preparation.",
        ],
      },
      {
        problem: "A Tape shows a percentage and won't open properly.",
        solutions: [
          "It's being prepared for export. Let it finish — or open its menu and choose **Cancel Preparation**.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I undo deleting a Tape?",
        answer: [
          "No. Deletion is permanent and immediate, and Videflo keeps no copy. The only way back is an iPhone backup made before the deletion, or a copy you exported.",
        ],
      },
      {
        question: "Can I merge two Tapes together?",
        answer: [
          "No. Tapes can't be combined, and recordings can't be moved between them.",
          "The exception is a recovered recording, which can be attached to an existing Tape when you rescue it.",
        ],
      },
      {
        question: "Can I sort my Tapes alphabetically?",
        answer: [
          "Not today — the library is ordered by recent activity. Search is the quickest way to find a specific one, and Collections are the way to group them.",
        ],
      },
    ],
    related: ["manage-recordings", "collections", "storage-space"],
  },

  {
    slug: "manage-recordings",
    title: "Managing the recordings inside a Tape",
    description:
      "Play, rename, trim, or delete the individual pieces a Tape is made of.",
    category: "tapes",
    keywords: [
      "segments",
      "clips",
      "delete recording",
      "delete last",
      "individual",
      "parts",
      "list",
      "rename recording",
    ],
    overview: [
      "Almost everywhere in Videflo, a Tape is treated as one whole thing. **Manage Recordings** is the one screen that opens it up and shows the individual recordings inside.",
      "It's where you'd go to remove a recording you didn't mean to keep, trim one that starts too early, or give a recording a name so you can find it later.",
    ],
    sections: [
      {
        id: "opening",
        heading: "Opening the list",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title:
                  "Press and hold a Tape and choose **Manage Recordings**.",
                detail:
                  "You can also reach it from the three-dot menu while watching a Tape.",
              },
              {
                title: "Each recording appears in the order it was filmed.",
                detail:
                  "Numbered, with its length, and its own row of actions.",
              },
            ],
          },
        ],
      },
      {
        id: "actions",
        heading: "What you can do to a recording",
        blocks: [
          {
            kind: "definitions",
            items: [
              {
                term: "Play",
                description:
                  "Watches that one recording on its own, without the rest of the Tape.",
              },
              {
                term: "Edit",
                description:
                  "Opens the trim editor, where you can shorten the start and the end. See **Trimming a recording**.",
              },
              {
                term: "Rename Recording",
                description:
                  "Gives it a name of your own. Leave the box empty to go back to the plain default, like “Recording 3”.",
              },
              {
                term: "Delete",
                description:
                  "Removes that recording from the Tape and deletes its video. Permanent.",
              },
              {
                term: "Export to Photos",
                description:
                  "Saves that single recording into your photo library, without preparing the whole Tape.",
              },
            ],
          },
        ],
      },
      {
        id: "deleting",
        heading: "Deleting one recording",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Find the recording in the list and choose **Delete**.",
              },
              {
                title: "Confirm.",
                detail: "Videflo asks once, because it can't be undone.",
              },
              {
                title: "The Tape closes the gap by itself.",
                detail:
                  "The remaining recordings still play as one continuous piece — there's nothing to fix afterwards.",
              },
            ],
          },
          {
            kind: "note",
            title: "Deleting the last one left deletes the Tape",
            text: [
              "If a Tape has only one recording in it and you delete that recording, there's no Tape left to keep. Videflo says so plainly and asks you to confirm **Delete Entire Tape** rather than doing it quietly.",
            ],
          },
          {
            kind: "text",
            text: "To remove only the most recent recording — the classic “that last bit was pointless” — open this list, scroll to the bottom, and delete the final entry. Everything before it is untouched.",
          },
        ],
      },
    ],
    tips: [
      "Play a recording before deleting it. Row four of a long list is rarely what you remember it being.",
      "Naming recordings is optional and most people never do it — but on a Tape that's grown over a year, “Christmas morning” beats “Recording 11”.",
      "Deleting a recording marks any prepared copy of the Tape as **Tape Changed**. Prepare it again before your next export.",
    ],
    pitfalls: [
      {
        mistake:
          "Deleting several recordings to free up space without checking what they were.",
        fix: "Play each one first. Deleted footage is gone for good, and a five-second clip barely moves the storage needle anyway.",
      },
      {
        mistake:
          "Expecting to be able to drag recordings into a different order.",
        fix: "A Tape keeps the order things happened in, on purpose. If a recording is in the wrong Tape, there's no way to move it — the order and the membership are both fixed at recording time.",
      },
    ],
    troubleshooting: [
      {
        problem: "A recording shows as unavailable or won't play.",
        solutions: [
          "Its video file is missing — usually because storage ran out mid-save, or a restore didn't bring everything back.",
          "The rest of the Tape still plays. Deleting the broken entry tidies the list.",
        ],
      },
      {
        problem: "The Tape's total length looks wrong after deleting.",
        solutions: [
          "That's expected — the total is the sum of what's left. Reopen the Tape and it will be recalculated.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I move a recording to a different Tape?",
        answer: [
          "No. Recordings belong to the Tape they were filmed into.",
          "The one exception is a recording rescued by the recovery card, which can be attached to any existing Tape at that moment.",
        ],
      },
      {
        question: "Does deleting a recording free up space straight away?",
        answer: [
          "Yes — the video file is removed from your iPhone at that point.",
        ],
      },
      {
        question: "Can I hide a recording instead of deleting it?",
        answer: [
          "No. A Tape plays everything it contains, so the only way to leave something out is to delete it or trim it away.",
        ],
      },
    ],
    related: ["trim-a-recording", "managing-your-tapes", "storage-space"],
  },

  {
    slug: "trim-a-recording",
    title: "Trimming a recording",
    description:
      "Shorten the start or the end of one recording — the only editing Videflo does.",
    category: "tapes",
    keywords: [
      "edit",
      "crop",
      "cut",
      "shorten",
      "handles",
      "trim start",
      "trim end",
      "editor",
    ],
    overview: [
      "Every recording has a bit at the start where you're pressing the button and a bit at the end where you're reaching for it again. Trimming tidies those away.",
      "This is the whole of Videflo's editing. There's no cutting from the middle, no splitting, no filters, and no soundtrack — a Tape is meant to be what happened, lightly tidied.",
    ],
    sections: [
      {
        id: "how",
        heading: "Trimming",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Open the Tape's menu and choose **Manage Recordings**.",
              },
              { title: "Find the recording and tap **Edit**." },
              {
                title: "Drag the handles at either end of the filmstrip.",
                detail:
                  "The picture follows your finger as you drag, so you can see the exact frame you're landing on.",
              },
              {
                title:
                  "Check the **Start**, **Duration** and **End** figures underneath.",
              },
              {
                title: "Tap **Save**.",
                detail:
                  "**Reset** puts the handles back to the full length; **Cancel** leaves the recording completely untouched.",
              },
            ],
          },
          {
            kind: "note",
            title: "Nothing changes until you tap Save",
            text: [
              "Dragging the handles is just looking. You can move them about as much as you like, then back out with **Cancel** and the recording is exactly as it was.",
            ],
          },
        ],
      },
      {
        id: "what-happens",
        heading: "What Saving does",
        blocks: [
          {
            kind: "text",
            text: "Videflo writes a new, shorter video file and points the Tape at it. The original is removed once the new one is safely saved, so you'll get back the storage the trimmed-away footage was using.",
          },
          {
            kind: "warning",
            title: "Trimmed footage is gone",
            text: [
              "Once you've saved a trim, the parts you cut away can't be brought back. If you might want them, export the recording to Photos before trimming.",
            ],
          },
        ],
      },
    ],
    tips: [
      "Leave a beat of breathing room at each end. Trimming right up to the first word makes the recording feel clipped when it plays after another one.",
      "Recordings have a minimum length, so the handles won't let you trim a recording down to nothing.",
      "Trimming marks any prepared copy of the Tape as **Tape Changed**, so prepare it again before your next export.",
    ],
    pitfalls: [
      {
        mistake:
          "Trying to cut an interruption out of the middle of a recording.",
        fix: "Not possible — trimming works from the ends only. If the middle is unusable, the options are to keep it or delete the whole recording.",
      },
      {
        mistake: "Trimming aggressively to save storage.",
        fix: "The savings are small compared to deleting a prepared Tape copy, and trims can't be undone. Trim for how it watches, not for space.",
      },
    ],
    troubleshooting: [
      {
        problem: "The preview doesn't move when I drag a handle.",
        solutions: [
          "Drag slowly — the picture follows the handle you're actually holding, so make sure you've grabbed one rather than the strip itself.",
          "Close the editor and reopen it if it stays frozen.",
        ],
      },
      {
        problem: "Save fails or the editor closes with an error.",
        solutions: [
          "Free up storage — Videflo needs room to write the trimmed copy before it removes the original.",
          "Try again with the app in the foreground and the screen awake.",
          "Your original recording is never modified during a failed save, so nothing is lost.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I undo a trim?",
        answer: [
          "No. Once saved, the trimmed-away footage is deleted from your iPhone.",
        ],
      },
      {
        question: "Does trimming re-encode and reduce quality?",
        answer: [
          "Videflo writes a new file covering the range you kept, at the quality the Tape was recorded at. The part you kept looks like it always did.",
        ],
      },
      {
        question: "Can I trim a whole Tape rather than one recording?",
        answer: [
          "No. Trimming works on individual recordings, which is also what gives you control over exactly where a Tape starts and ends.",
        ],
      },
    ],
    related: [
      "manage-recordings",
      "prepare-and-export-a-tape",
      "storage-space",
    ],
  },

  {
    slug: "cover-photos",
    title: "Choosing a cover photo",
    description:
      "Give a Tape or a Collection a picture of your own instead of the automatic one.",
    category: "tapes",
    keywords: [
      "thumbnail",
      "image",
      "cover",
      "picture",
      "photo library",
      "change cover",
      "remove cover",
    ],
    overview: [
      "By default, a Tape shows a frame from its own footage. That's usually fine — but sometimes there's a photograph that captures the day far better, and you can use that instead.",
      "It works the same way for Collections, and it changes nothing about the video.",
    ],
    sections: [
      {
        id: "choose",
        heading: "Setting a cover photo",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Press and hold the Tape or Collection.",
              },
              { title: "Choose **Choose Cover Photo**." },
              {
                title: "Pick a picture in the Photos picker that appears.",
                detail:
                  "This is Apple's own picker. Videflo is handed only the image you tap and never sees the rest of your library — which is why it doesn't ask for photo access.",
              },
              {
                title: "The cover updates everywhere that Tape appears.",
              },
            ],
          },
        ],
      },
      {
        id: "remove",
        heading: "Going back to the automatic cover",
        blocks: [
          {
            kind: "text",
            text: "Press and hold again and choose **Remove Cover Photo**. The Tape goes back to using a frame from its own footage, and the copy Videflo made is deleted.",
          },
          {
            kind: "text",
            text: "Your original photograph in the Photos app is never touched — Videflo only ever reads it, and only once.",
          },
        ],
      },
      {
        id: "collections",
        heading: "How Collection covers work",
        blocks: [
          {
            kind: "text",
            text: "A Collection without a cover of its own borrows one from the first Tape inside it, including that Tape's custom cover if it has one. So setting a good cover on a Tape often sorts out the Collection at the same time.",
          },
        ],
      },
    ],
    tips: [
      "Covers are shown as a wide rectangle, so a photograph with the subject in the middle works best. Very tall or very wide pictures are cropped to the centre.",
      "Videflo stores a resized copy — usually well under a hundred kilobytes — rather than the full-resolution original, so covers cost almost nothing in storage.",
      "Deleting the photograph from your Photos app later won't affect the cover, because Videflo has its own copy.",
    ],
    pitfalls: [
      {
        mistake:
          "Choosing a wide panorama and wondering why only the middle shows.",
        fix: "Covers keep the picture's proportions and crop to fill the space. Pick something where the important part is near the centre.",
      },
    ],
    troubleshooting: [
      {
        problem: "The cover went back to a video frame on its own.",
        solutions: [
          "The stored image is missing — this can happen after restoring from a backup. Simply choose it again.",
        ],
      },
      {
        problem: "The picker opens but nothing happens when I pick a photo.",
        solutions: [
          "Very large photographs take a second to bring in. Give it a moment before tapping again.",
          "If it fails, Videflo shows a message and leaves the existing cover alone. Try a different picture.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does a cover photo change the video?",
        answer: [
          "Not at all. It's the picture on the card, nothing more. Playback and exports are completely unaffected.",
        ],
      },
      {
        question: "Can I use a frame from the Tape itself as the cover?",
        answer: [
          "That's what the automatic cover already is. There's no way to choose a specific frame today.",
        ],
      },
      {
        question: "Does Videflo get access to all my photos?",
        answer: [
          "No. iOS shows you its own picker and hands the app only the single picture you tapped, which is why no permission prompt appears.",
        ],
      },
    ],
    related: ["managing-your-tapes", "collections", "privacy-and-security"],
  },

  {
    slug: "searching-your-library",
    title: "Searching your library",
    description: "Finding a Tape or a Collection by name once you have plenty.",
    category: "tapes",
    keywords: ["find", "search", "filter", "magnifying glass", "look for"],
    overview: [
      "Once you've a few dozen Tapes, scrolling stops being the fastest way to find one. Both the Tapes tab and the Collections tab have a search that filters as you type.",
    ],
    sections: [
      {
        id: "how",
        heading: "Searching",
        blocks: [
          {
            kind: "steps",
            steps: [
              { title: "Go to the **Tapes** or **Collections** tab." },
              {
                title: "Tap the magnifying glass in the header.",
                detail: "The title makes way for a search field.",
              },
              {
                title: "Start typing.",
                detail:
                  "Results narrow with every letter — there's no button to press.",
              },
              {
                title: "Tap the **✕** to clear, or **Cancel** to close search.",
              },
            ],
          },
        ],
      },
      {
        id: "what",
        heading: "What search looks at",
        blocks: [
          {
            kind: "text",
            text: "Names. Search matches the names you've given your Tapes and Collections, which is the strongest argument for naming them descriptively when you create them.",
          },
          {
            kind: "text",
            text: "Videflo can't search inside the video — it doesn't listen to your recordings or analyse what's in the picture, and that's very much by design.",
          },
        ],
      },
    ],
    tips: [
      "Search matches anywhere in a name, so typing “birth” finds “Emma's Birthday”.",
      "Include the year in the name of anything annual — “Christmas 2026” is far easier to find in five years than “Christmas”.",
      "Nothing found? Check whether you're searching the Tapes tab when the thing you want is a Collection.",
    ],
    faqs: [
      {
        question: "Can I search by date?",
        answer: [
          "Not directly. Tapes are listed with the most recently filmed at the top, so recent things are always near the front — and putting a date in the name makes it searchable.",
        ],
      },
      {
        question: "Can I search for words spoken in a recording?",
        answer: [
          "No. Videflo never analyses or transcribes your footage. Searching covers the names you've written.",
        ],
      },
    ],
    related: ["managing-your-tapes", "collections", "finding-your-way-around"],
  },
] as const;
