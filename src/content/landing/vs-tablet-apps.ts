import { images, priceLine } from "./shared";
import type { Landing } from "./types";

export const vsTabletApps: Landing = {
  kind: "compare",
  slug: "zivoo-vs-tablet-learning-apps",
  title: "Zivoo vs tablet learning apps",
  seoTitle: "Zivoo vs Tablet Learning Apps: Screen-Free vs Screens | Zivoo",
  description:
    "Tablet app or screen-free toy? An honest comparison of Zivoo and tablet learning apps for children aged 3 to 9: attention, language and screen time.",
  eyebrow: "Comparison",
  answer:
    "Tablet learning apps teach through a screen: children watch, tap and swipe. Zivoo teaches with no screen at all: children talk, listen and think out loud. Apps are strong at visual activities such as tracing letters; Zivoo is strong at conversation, stories, shlokas, phonics, spoken maths and spelling, without adding to screen time.",
  highlights: [
    "Apps are visual and tap-driven; Zivoo is spoken and conversation-driven.",
    "Zivoo adds learning time without adding screen time.",
    "Parents still see progress, in the separate Zivoo Parents app.",
    priceLine,
  ],
  sections: [
    {
      id: "table",
      heading: "Side-by-side comparison",
      blocks: [
        {
          type: "table",
          caption: "Zivoo compared with a typical tablet learning app",
          head: ["", "Zivoo", "Typical tablet app"],
          rows: [
            ["Screen", "None", "Yes"],
            ["How the child takes part", "Talking, listening, answering", "Watching, tapping, swiping"],
            ["Language practice", "Spoken conversation with questions back", "Mostly listening and tapping"],
            ["Good for", "Stories, shlokas, phonics, spoken maths, spelling, curiosity", "Tracing, visual puzzles, videos"],
            ["Bedtime friendly", "Yes, no glowing display", "Screens before sleep are best avoided"],
            ["Parent visibility", "Zivoo Parents app", "In-app reports, varies"],
            ["Shared device", "Child's own toy", "Often a parent's phone or tablet"],
          ],
        },
      ],
    },
    {
      id: "guidance",
      heading: "What screen time guidance says",
      blocks: [
        {
          type: "p",
          text: "Guidance from the WHO and paediatric bodies encourages limiting sedentary screen time for young children and making room for play, conversation and sleep. Our summary: [How much screen time is right for young children?](/blog/screen-time-guidelines-for-young-children)",
        },
      ],
    },
    {
      id: "when",
      heading: "Which should you choose?",
      blocks: [
        {
          type: "ul",
          items: [
            "**Choose Zivoo** for talk-based learning (stories, shlokas, phonics, maths, spelling) without adding screen time.",
            "**Use a good app** for visual skills such as tracing letters, with a parent nearby and a time limit.",
            "Many families use Zivoo to replace some app time, not all of it.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Are learning apps bad for young children?",
      a: "Not necessarily, but they add screen time, which guidance recommends limiting for young children. Screen-free options give learning without the screen.",
    },
    {
      q: "Can a screen-free toy teach as much as an app?",
      a: "For spoken skills such as vocabulary, stories, phonics sounds, mental maths and spelling out loud, a conversational toy like Zivoo is well suited. Visual skills such as handwriting still need pencil, paper or a book.",
    },
  ],
  keywords: ["screen-free alternative to tablet", "learning apps vs toys", "reduce screen time kids India", "Zivoo vs apps"],
  published: "2026-10-29",
  image: images.story,
};
