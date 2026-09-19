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
      "pin",
    ],
    overview: [
      "Everything you can do to a Tape lives in one menu. Press and hold a Tape — on Home, in the Tapes tab, or inside a Collection — and it appears.",
      "One of those actions permanently deletes video, from your iPhone and from Videflo Cloud together. It's marked clearly here, and the app asks you to confirm it.",
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
                term: "Pin Tape / Unpin Tape",
                description:
                  "Makes this the Tape Videflo records into by default, so Camera and Home stop asking which one. It changes nothing else about the Tape.",
              },
              {
                term: "Continue Recording",
                description:
                  "Opens the camera to add more to this Tape. On a Tape with nothing in it yet, it reads **Record First Memory**.",
              },
              {
                term: "Manage Recordings",
                description:
                  "Opens the list of individual recordings inside the Tape, where you can play, rename, export or delete them one at a time.",
              },
              {
                term: "Invite to Tape / Manage Invites / Manage Shared Tape",
                description:
                  "The same row, named for where the Tape is: personal, invitations out, or shared. It opens the people screen — see **Shared Tapes**.",
              },
              {
                term: "Add to Collection / Move to Collection / Remove from Collection",
                description:
                  "Puts the Tape in a Collection, or takes it out. A Tape can be in one Collection at a time, so moving it takes it out of the previous one.",
              },
              {
                term: "Rename",
                description: "Changes the Tape's name. Nothing else changes.",
              },
              {
                term: "Cover Photo",
                description:
                  "Take a photo, choose one from your library, or remove the cover and go back to the automatic one.",
              },
              {
                term: "Remove from This iPhone / Download to This iPhone",
                description:
                  "Frees the space a fully protected Tape uses on your phone, or brings the files back. See **Videflo Cloud: how backup works**.",
              },
              {
                term: "Delete Tape",
                description:
                  "Permanently removes the Tape and all its video — from your iPhone and from Videflo Cloud. On a Tape somebody shared with you, this row is **Leave Tape** instead.",
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
            text: "Rename as often as you like — it only changes the label. The recordings, the order, the quality and the cover are all untouched, and the new name reaches Videflo Cloud and every member of a Shared Tape. You can also rename from the three-dot menu while watching a Tape.",
          },
        ],
      },
      {
        id: "delete",
        heading: "Deleting a Tape",
        blocks: [
          {
            kind: "warning",
            title: "This cannot be undone, anywhere",
            text: [
              "Deleting a Tape deletes every recording inside it from your iPhone **and** from Videflo Cloud, in one step. There's no bin to fish it out of, and on a Shared Tape it disappears for every member — including recordings they added.",
              "If there's any chance you'll want it, export it first — that leaves a copy in your Photos library that survives the deletion.",
            ],
          },
          {
            kind: "steps",
            steps: [
              { title: "Press and hold the Tape and choose **Delete Tape**." },
              {
                title:
                  "Read the confirmation, which names the Tape you're about to remove.",
              },
              {
                title: "Tap **Delete** to confirm, or **Cancel** to back out.",
              },
            ],
          },
          {
            kind: "note",
            title: "Videflo needs to reach Videflo Cloud to delete",
            text: [
              "Because deletion removes the cloud copy too, a Tape that has ever been backed up can't be deleted while you're offline or signed out. Videflo refuses rather than leaving a copy you can't see — try again once you're connected.",
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
      "Short of space on the phone? Don't delete — use **Remove from This iPhone** on a Tape that's already backed up. It stays in your library and plays by streaming.",
      "Renaming a Tape doesn't rename anything you've already exported to Photos.",
    ],
    pitfalls: [
      {
        mistake:
          "Deleting a Tape to free up space, when removing it from the phone would have done.",
        fix: "**Remove from This iPhone** frees the same space and keeps the Tape safe in Videflo Cloud. Delete is for memories you genuinely don't want.",
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
        ],
      },
      {
        problem: "Delete Tape is greyed out or says it can't delete right now.",
        solutions: [
          "Check you're online and signed in — a Tape that has a copy in Videflo Cloud can only be deleted while Videflo can reach it.",
          "Wait for any upload of that Tape to finish, then try again.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I undo deleting a Tape?",
        answer: [
          "No. Deletion is permanent and removes the copy in Videflo Cloud as well. The only way back is a copy you exported to Photos, or an iPhone backup made before the deletion.",
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
          "Not today — the library is ordered by recent activity. Search is the quickest way to find a specific one, the filters narrow it to Shared or cloud-only Tapes, and Collections are the way to group them.",
        ],
      },
    ],
    related: ["manage-recordings", "collections", "videflo-cloud"],
  },

  {
    slug: "manage-recordings",
    title: "Managing the recordings inside a Tape",
    description:
      "Play, rename, export, or delete the individual pieces a Tape is made of.",
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
      "It's where you'd go to remove a recording you didn't mean to keep, save one recording on its own to Photos, or give a recording a name so you can find it later.",
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
                  "Numbered, with its length, who filmed it on a Shared Tape, and its own row of actions.",
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
                term: "Rename Recording",
                description:
                  "Gives it a name of your own. Leave the box empty to go back to the plain default, like “Recording 3”. Names reach Videflo Cloud, so they're there on a new iPhone too.",
              },
              {
                term: "Export to Photos",
                description:
                  "Saves that single recording into your photo library, as filmed.",
              },
              {
                term: "Delete",
                description:
                  "Removes that recording from the Tape and deletes its video from your iPhone. Permanent. See the note below for what happens to the copy in Videflo Cloud.",
              },
            ],
          },
          {
            kind: "note",
            title: "Deleting one recording, and Videflo Cloud",
            text: [
              "On a **personal** Tape, deleting a recording removes it from this iPhone. Its copy in Videflo Cloud isn't removed today — it still counts toward your allowance, and it would be rebuilt if the Tape came back to a new iPhone. To remove a memory everywhere, delete the whole Tape.",
              "On a **Shared** Tape, only the owner can delete a recording, and doing so removes it from Videflo Cloud for everyone — including a recording somebody else added. Renaming stays with the person who filmed it.",
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
      "Want a recording without the slow start? Videflo doesn't trim, but you can export it to Photos and trim the copy there — the original in the Tape stays whole.",
    ],
    pitfalls: [
      {
        mistake:
          "Deleting several recordings to free up space without checking what they were.",
        fix: "Play each one first. Deleted footage is gone for good — and if space is the problem, **Remove from This iPhone** on the whole Tape frees far more without deleting anything.",
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
          "Its file isn't on this iPhone and Videflo Cloud doesn't have a finished copy either — usually because storage ran out mid-save, or an upload never completed before the phone was replaced.",
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
          "On your iPhone, yes — the video file is removed at that point. On a personal Tape the copy in Videflo Cloud stays until you delete the Tape, so your allowance doesn't change; on a Shared Tape an owner's delete frees the cloud copy too.",
        ],
      },
      {
        question: "Can I hide or trim a recording instead of deleting it?",
        answer: [
          "No. A Tape plays everything it contains exactly as it was recorded — Videflo has no trimming or editing. The only way to leave something out is to delete it.",
        ],
      },
    ],
    related: [
      "managing-your-tapes",
      "export-a-single-recording",
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
              {
                title: "Choose **Take Photo** or **Choose from Library**.",
                detail:
                  "You can also add a cover under **Optional Setup** when you create a Tape.",
              },
              {
                title: "Pick a picture in the Photos picker that appears.",
                detail:
                  "This is Apple's own picker. Videflo is handed only the image you tap and never sees the rest of your library — which is why it doesn't ask for photo access.",
              },
              {
                title: "The cover updates everywhere that Tape appears.",
                detail:
                  "A Tape's cover is backed up with it, so it's there on a new iPhone and on every member's copy of a Shared Tape.",
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
            text: "Press and hold again and choose **Remove Cover**. The Tape goes back to using a frame from its own footage, and the copy Videflo made is deleted.",
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
        problem: "The picker opens but nothing happens when I pick a photo.",
        solutions: [
          "Very large photographs take a second to bring in. Give it a moment before tapping again.",
          "If it fails, Videflo shows a message and leaves the existing cover alone. Try a different picture.",
        ],
      },
      {
        problem: "Take Photo says camera access is off.",
        solutions: [
          "Turn on **Settings → Videflo → Camera**, or choose a picture from your library instead.",
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
        question: "Who can change the cover of a Shared Tape?",
        answer: ["The Tape's owner. Members see the cover the owner chose."],
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
      "Once you've a few dozen Tapes, scrolling stops being the fastest way to find one. Both the Tapes tab and the Collections tab have a search that filters as you type, and the Tapes tab has filters for where a Tape lives.",
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
        id: "filters",
        heading: "Filtering by where a Tape lives",
        blocks: [
          {
            kind: "definitions",
            items: [
              {
                term: "All",
                description: "Every Tape, yours and shared with you.",
              },
              {
                term: "On iPhone",
                description:
                  "Tapes whose files are on this phone, so they play without a connection.",
              },
              {
                term: "Cloud",
                description:
                  "Tapes stored only in Videflo Cloud — removed from this iPhone, or not yet downloaded on a new one.",
              },
              {
                term: "Shared",
                description:
                  "Tapes with more than one person on them, whether you own them or joined them.",
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
