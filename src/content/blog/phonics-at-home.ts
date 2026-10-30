import type { Post } from "./types";

export const phonicsAtHome: Post = {
  slug: "phonics-at-home-for-indian-parents",
  title: "Phonics at home: a simple guide for parents of 3 to 7 year olds",
  seoTitle: "Phonics at Home: A Simple Guide for Parents (Ages 3-7)",
  description:
    "How to teach phonics at home without worksheets or screens: letter sounds, blending, segmenting and five-minute games, with an age-by-age guide for parents in India.",
  category: "Language",
  published: "2026-10-29",
  keywords: [
    "phonics at home",
    "how to teach phonics to kids",
    "phonics for 3 year olds",
    "blending and segmenting",
    "phonics games without screens",
    "letter sounds for kids",
  ],
  image: {
    src: "/images/counting-practice.webp",
    alt: "A girl at a table talking to Zivoo during a learning game.",
    width: 1536,
    height: 1024,
  },
  answer:
    "Phonics teaches children that letters stand for sounds, and that sounds join to make words. At home, start with listening: play with the first sounds of words, then practise blending sounds into words (c-a-t makes cat) and breaking words into sounds. Five minutes a day of spoken games works better than worksheets for young children.",
  takeaways: [
    "Phonics starts with the ears: children need to hear sounds before they match them to letters.",
    "Teach letter sounds (“sss”, “mmm”), not just letter names (“ess”, “em”).",
    "Blending and segmenting are the two core skills; both can be practised out loud anywhere.",
    "Keep it short, playful and daily.",
  ],
  sections: [
    {
      id: "what",
      heading: "What is phonics?",
      blocks: [
        {
          type: "p",
          text: "Phonics is a way of teaching reading by linking **sounds** (phonemes) with the **letters** that represent them. A child who knows that s, a and t make the sounds /s/ /a/ /t/ can blend them to read “sat”, and break “sat” back into sounds to spell it. Systematic phonics is the main way early reading is taught in many countries, including in a growing number of Indian schools.",
        },
      ],
    },
    {
      id: "ages",
      heading: "Phonics by age: what to practise",
      blocks: [
        {
          type: "table",
          caption: "A rough guide; every child moves at their own pace",
          head: ["Age", "Focus", "Try this"],
          rows: [
            ["3 to 4", "Hearing sounds", "“I spy something beginning with /b/.” Rhymes and silly sound games."],
            ["4 to 5", "Letter sounds, oral blending", "“What word is /d/ /o/ /g/?” Say sounds, your child says the word."],
            ["5 to 6", "Segmenting, simple words", "“What sounds are in ‘sun’?” Then spell it out loud."],
            ["6 to 7", "Digraphs (sh, ch, th), longer words", "Spot “sh” words on a walk; spell “ship”, “chip”, “thin”."],
          ],
        },
      ],
    },
    {
      id: "games",
      heading: "Five-minute phonics games (no screen, no worksheet)",
      blocks: [
        {
          type: "ol",
          items: [
            "**Sound I-spy:** “I spy something beginning with /m/.” (Mango!)",
            "**Robot talk:** speak like a robot, “Pass me the /c/ /u/ /p/”, and your child blends the word.",
            "**Sound chop:** your child “chops” a word into sounds with their hand: /f/ /i/ /sh/.",
            "**Rhyme chain:** cat, hat, mat, bat… who can keep it going longest?",
            "**Change one sound:** “Cat. Change /c/ to /h/. What's the new word?”",
          ],
        },
        {
          type: "p",
          text: "For spelling games that build on these skills, see [12 spelling games for kids that need no screens](/blog/spelling-games-for-kids-without-screens).",
        },
      ],
    },
    {
      id: "mistakes",
      heading: "Common mistakes to avoid",
      blocks: [
        {
          type: "ul",
          items: [
            "**Adding “uh” to sounds:** say /m/ as “mmm”, not “muh”. It makes blending much easier.",
            "**Rushing to letter names:** names (“bee”) come later; sounds (/b/) come first.",
            "**Long sessions:** stop while it's still fun.",
          ],
        },
        {
          type: "callout",
          title: "Phonics practice with Zivoo",
          text: "[Zivoo](/toys/phonics-toy-for-kids), our screen-free AI learning toy, includes a phonics coach: it says the sounds, listens as your child blends them into a word, and practises breaking words into sounds. Phonics coaching reaches every Zivoo in a free software update shortly after launch.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "At what age should I start phonics with my child?",
      a: "Listening games with sounds and rhymes can start around age 3. Most children are ready for letter sounds and blending between 4 and 5.",
    },
    {
      q: "What is the difference between blending and segmenting?",
      a: "Blending is joining sounds into a word (/c/ /a/ /t/ → cat). Segmenting is breaking a word into its sounds (cat → /c/ /a/ /t/). Blending supports reading; segmenting supports spelling.",
    },
    {
      q: "Should I teach letter names or letter sounds first?",
      a: "Letter sounds first. Children need sounds to blend words; letter names can follow.",
    },
  ],
  sources: [
    {
      label: "UK Department for Education. Choosing a phonics teaching programme.",
      url: "https://www.gov.uk/government/publications/choosing-a-phonics-teaching-programme",
    },
  ],
};
