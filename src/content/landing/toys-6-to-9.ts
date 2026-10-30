import { images, priceLine } from "./shared";
import type { Landing } from "./types";

export const toys6to9: Landing = {
  kind: "toys",
  slug: "educational-toys-for-6-to-9-year-olds",
  title: "Educational toys for 6 to 9 year olds that aren't screens",
  seoTitle: "Best Educational Toys for 6 to 9 Year Olds (No Screens) | Zivoo",
  description:
    "Screen-free educational toys for children aged 6 to 9: maths, spelling, phonics, stories and curious questions. What to choose, and how Zivoo grows with your child.",
  eyebrow: "Buying guide · Ages 6 to 9",
  answer:
    "Good educational toys for 6 to 9 year olds challenge children at their level: maths games, word and spelling games, construction kits, science kits and books. Zivoo is a screen-free AI learning toy that grows with this age group: a maths game that moves up to times tables, spelling out loud, phonics, stories to discuss, and answers to big “why?” questions.",
  highlights: [
    "School-age children need toys that adapt and stay challenging.",
    "Practising maths facts and spelling out loud builds speed and confidence.",
    "Zivoo's maths game gets harder as your child improves and saves their progress.",
    priceLine,
  ],
  sections: [
    {
      id: "what-matters",
      heading: "What children practise between 6 and 9",
      blocks: [
        {
          type: "ul",
          items: [
            "**Maths facts:** adding, taking away, doubling, times tables.",
            "**Reading foundations:** phonics, spelling and new vocabulary.",
            "**Reasoning:** explaining why, predicting what happens next in a story.",
            "**Curiosity:** science and general-knowledge questions.",
          ],
        },
      ],
    },
    {
      id: "types",
      heading: "Good educational toys at this age",
      blocks: [
        {
          type: "table",
          caption: "Toy types for 6 to 9 year olds",
          head: ["Toy type", "What it builds", "Screen-free?"],
          rows: [
            ["Construction and robotics kits", "Engineering, problem-solving", "Usually"],
            ["Board and card games", "Maths, strategy, turn-taking", "Yes"],
            ["Science kits", "Curiosity, experimenting", "Yes"],
            ["Chapter books", "Reading, vocabulary", "Yes"],
            ["AI learning toy ([Zivoo](/product/zivoo))", "Maths facts, spelling, phonics, reasoning, curiosity", "Yes"],
          ],
        },
      ],
    },
    {
      id: "zivoo",
      heading: "How a 6 to 9 year old uses Zivoo",
      blocks: [
        {
          type: "ul",
          items: [
            "“Let's play maths.” The game adapts, from adding to times tables, with hints when an answer is wrong.",
            "“What's the 7 times table?” “What is 12 divided by 5?”",
            "“How do you spell necessary?”",
            "“Why is the sky blue?” A short answer, then a question back.",
            "“Tell me a story about a robot.” Then: “What would you have done?”",
          ],
        },
        {
          type: "p",
          text: "Parents can start a maths, phonics, shloka or story session with one tap and see progress in the Zivoo Parents app.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "What is a good educational gift for a 7 year old?",
      a: "Pick something that challenges a 7 year old at their level: a maths or word game, a science or construction kit, or a learning toy that adapts, like Zivoo's maths game and spelling practice.",
    },
    {
      q: "Can a toy help my child learn times tables?",
      a: "Regular, short spoken practice helps. Zivoo can recite any times table, quiz your child, and run a maths game that moves up to tables as they improve.",
    },
    {
      q: "Is Zivoo too young for a 9 year old?",
      a: "No. Zivoo is made for ages 3 to 9. Older children use the harder maths levels, spelling, phonics and open “why?” questions.",
    },
  ],
  keywords: ["educational toys for 6 year olds", "learning toys for 7 year olds", "toys for 8 year olds India", "maths toy for kids"],
  published: "2026-10-29",
  image: images.counting,
};
