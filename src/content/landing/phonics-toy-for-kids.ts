import { images, priceLine } from "./shared";
import type { Landing } from "./types";

export const phonicsToy: Landing = {
  kind: "toys",
  slug: "phonics-toy-for-kids",
  title: "Phonics toy for kids: practise sounds by talking",
  seoTitle: "Phonics Toy for Kids: Screen-Free Phonics by Voice | Zivoo",
  description:
    "A phonics toy that listens: how Zivoo helps kids aged 3 to 9 blend sounds into words, break words into sounds and say them back, with no screen.",
  eyebrow: "Phonics",
  answer:
    "A phonics toy helps children connect letters with their sounds, the foundation of reading. Most phonics toys press-and-play recorded sounds. Zivoo is a talking phonics coach: it says the sounds, listens as your child blends them into words or breaks words into sounds, and responds to what it hears. It is screen-free and made for ages 3 to 9.",
  highlights: [
    "Phonics is about hearing and saying sounds, which is exactly what a voice toy is good at.",
    "Zivoo coaches the three core skills: blending, segmenting and saying sounds.",
    "Spelling out loud, one letter at a time, builds on the same skills.",
    priceLine,
  ],
  sections: [
    {
      id: "skills",
      heading: "The phonics skills Zivoo practises",
      blocks: [
        {
          type: "table",
          caption: "Core phonics skills",
          head: ["Skill", "What it means", "With Zivoo"],
          rows: [
            ["Blending", "Joining sounds into a word", "Zivoo says /k/ /a/ /t/ and your child says “cat”"],
            ["Segmenting", "Breaking a word into sounds", "Your child splits “dog” into /d/ /o/ /g/"],
            ["Saying sounds", "Producing each sound clearly", "Zivoo models a sound and listens as your child says it back"],
            ["Spelling", "Matching sounds to letters", "“How do you spell ship?” S · H · I · P"],
          ],
        },
      ],
    },
    {
      id: "why-voice",
      heading: "Why phonics works well by voice",
      blocks: [
        {
          type: "p",
          text: "Before children read letters on a page, they need to **hear** the separate sounds in words. That's oral phonics, and it happens entirely through listening and speaking. A screen isn't needed; in fact, without one a child focuses on the sounds themselves.",
        },
        {
          type: "p",
          text: "For simple games to play together, see our [phonics at home guide](/blog/phonics-at-home-for-indian-parents) and [12 spelling games that need no screens](/blog/spelling-games-for-kids-without-screens).",
        },
      ],
    },
    {
      id: "note",
      heading: "A note on young voices",
      blocks: [
        {
          type: "p",
          text: "Young voices, accents and background noise can sometimes lead any speech system to mishear. Zivoo is a patient practice partner, not an exam, and it never scolds.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "What age should children start phonics?",
      a: "Many children begin oral phonics, hearing and saying sounds, from about age 3 to 4, and move to reading letters at 4 to 6. Zivoo supports children aged 3 to 9.",
    },
    {
      q: "Does Zivoo teach reading?",
      a: "Zivoo practises the spoken foundations of reading: blending, segmenting, saying sounds and spelling out loud. It complements reading books together.",
    },
    {
      q: "Is Zivoo's phonics coach available now?",
      a: "Phonics is part of Zivoo. Phonics coaching reaches every Zivoo in a free software update shortly after launch.",
    },
  ],
  keywords: ["phonics toy", "phonics toy for kids India", "phonics learning toy", "talking phonics toy", "phonics practice at home"],
  published: "2026-10-29",
  image: images.counting,
};
