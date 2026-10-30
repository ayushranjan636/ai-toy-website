import { images, priceLine } from "./shared";
import type { Landing } from "./types";

export const screenFreeToy: Landing = {
  kind: "toys",
  slug: "screen-free-learning-toy",
  title: "Screen-free learning toy for kids in India",
  seoTitle: "Screen-Free Learning Toy for Kids in India (Ages 3-9) | Zivoo",
  description:
    "Looking for a screen-free learning toy? What it is, why it helps children aged 3 to 9, what to look for, and how Zivoo teaches by conversation instead of a screen.",
  eyebrow: "Buying guide",
  answer:
    "A screen-free learning toy teaches children without a display to watch or tap. The best ones keep the child talking, thinking and answering. Zivoo is a screen-free AI learning toy for ages 3 to 9: children talk to it for stories, shlokas, phonics, maths and spelling, and parents see progress in an app.",
  highlights: [
    "Screen-free toys replace watching and tapping with talking, listening and imagining.",
    "Look for a toy where the child does the thinking, that grows with them, and that handles children's data carefully.",
    "Zivoo is voice-only: no screen at all, started by saying “Hey Zivoo”.",
    priceLine,
  ],
  sections: [
    {
      id: "what",
      heading: "What is a screen-free learning toy?",
      blocks: [
        {
          type: "p",
          text: "A screen-free learning toy helps a child practise skills such as language, early maths, listening or storytelling **without a display**. Building blocks, puzzles and story cards are classic examples. A newer kind is the **talking learning toy**: it holds a spoken conversation with the child, so they learn by speaking and listening rather than by watching.",
        },
        {
          type: "p",
          text: "Paediatric guidance for young children focuses on limiting passive screen time and making room for conversation and play. Our guide to [screen time guidelines for young children](/blog/screen-time-guidelines-for-young-children) summarises what the WHO and paediatric bodies actually say.",
        },
      ],
    },
    {
      id: "why",
      heading: "Why parents choose screen-free toys",
      blocks: [
        {
          type: "ul",
          items: [
            "**Active, not passive.** The child has to answer, guess, retell or explain.",
            "**Language grows through conversation.** Back-and-forth talk builds vocabulary and confidence. See [how conversation builds vocabulary](/blog/how-conversation-builds-childrens-vocabulary).",
            "**Calmer routines.** A toy with no glowing display fits bedtime and quiet time better.",
            "**Less tapping, more imagining.** Stories heard rather than watched leave space for the child's own pictures.",
          ],
        },
      ],
    },
    {
      id: "zivoo",
      heading: "How Zivoo works as a screen-free learning toy",
      blocks: [
        {
          type: "p",
          text: "Zivoo has no screen and nothing to tap. Your child switches it on, says “Hey Zivoo” and talks. Zivoo answers in a sentence or two and then asks something back, so every question becomes a short conversation.",
        },
        {
          type: "table",
          caption: "What children do with Zivoo",
          head: ["Activity", "What happens"],
          rows: [
            ["Stories", "Built-in stories told with feeling, new stories on any topic, and questions afterwards"],
            ["Shlokas", "Nine shlokas and mantras recited, explained and taught line by line"],
            ["Phonics", "Blending and breaking words into sounds, saying sounds back"],
            ["Maths", "A game that grows from counting to adding, taking away and times tables"],
            ["Words and spelling", "Word meanings and spelling out loud, one letter at a time"],
            ["Curious questions", "Child-friendly answers to “why?” questions, and a question back"],
          ],
        },
        {
          type: "p",
          text: "See every activity on the [features page](/features), or the [price and specifications](/product/zivoo).",
        },
      ],
    },
    {
      id: "checklist",
      heading: "What to check before you buy any screen-free toy",
      blocks: [
        {
          type: "ol",
          items: [
            "**Age fit:** does it grow with your child, or will it be outgrown in a month?",
            "**Who does the thinking:** your child, or the toy?",
            "**For talking toys:** when does the microphone listen, are recordings saved, and what can parents control? Read [how Zivoo keeps children safe](/safety).",
            "**Honest claims:** be wary of toys that promise to make a child “smarter”.",
          ],
        },
        {
          type: "p",
          text: "Our full [checklist for choosing a screen-free educational toy](/blog/how-to-choose-a-screen-free-educational-toy) goes deeper.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "What is the best screen-free learning toy for a 5-year-old?",
      a: "The best choice keeps a 5-year-old active: talking, building, retelling or counting. Talking learning toys like Zivoo suit this age well because children can ask questions, play maths and phonics games, and hear and discuss stories without a screen.",
    },
    {
      q: "Are screen-free toys better for learning?",
      a: "For young children, toys that make them talk, think and play tend to support learning better than passive watching. Guidance from paediatric bodies stresses conversation and play over screen time for under-fives.",
    },
    {
      q: "Is Zivoo completely screen-free?",
      a: "Yes. Zivoo has no display. Children use it entirely by voice. Parents use a separate phone app for setup and progress.",
    },
  ],
  keywords: ["screen-free learning toy", "screen free toys India", "educational toy without screen", "talking learning toy"],
  published: "2026-10-29",
  image: images.child,
};
