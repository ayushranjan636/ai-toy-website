import { images, priceLine } from "./shared";
import type { Landing } from "./types";

export const shlokaToy: Landing = {
  kind: "toys",
  slug: "shloka-learning-toy",
  title: "Shloka learning toy for kids: learn shlokas line by line",
  seoTitle: "Shloka Learning Toy for Kids: Learn Shlokas with Meaning | Zivoo",
  description:
    "A talking toy that teaches children shlokas and mantras line by line, with simple meanings in English. How Zivoo teaches the Ganesha shloka, Gayatri mantra and more.",
  eyebrow: "Shlokas",
  answer:
    "A shloka learning toy recites shlokas for children and helps them learn the words. Zivoo goes further: it knows nine well-loved shlokas and mantras, including the Ganesha shloka and the Gayatri mantra, explains what each means in simple English, and teaches them line by line with repeat-after-me. It is screen-free and made for children aged 3 to 9.",
  highlights: [
    "Children learn shlokas by listening and repeating, the way they've always been taught at home.",
    "Zivoo recites, explains the meaning and teaches line by line.",
    "No screen: your child just says “Hey Zivoo, teach me a shloka.”",
    priceLine,
  ],
  sections: [
    {
      id: "how",
      heading: "How children learn shlokas with Zivoo",
      blocks: [
        {
          type: "ol",
          items: [
            "**Listen.** “Hey Zivoo, say the Ganesha shloka.” Zivoo recites it slowly and clearly.",
            "**Understand.** “What does it mean?” Zivoo explains in a few simple sentences a young child can follow.",
            "**Repeat after me.** “Teach me the Gayatri mantra.” Zivoo says one line at a time and waits for your child to say it back.",
          ],
        },
        {
          type: "p",
          text: "Repetition is how shlokas have always been passed on: a grandparent says a line, a child repeats it. Zivoo is a patient partner for that daily practice, at bedtime, before school or whenever your child asks.",
        },
      ],
    },
    {
      id: "why",
      heading: "Why shlokas are good for young children",
      blocks: [
        {
          type: "ul",
          items: [
            "**Memory and attention:** learning a verse by heart is excellent practice for listening and recall.",
            "**Sounds and rhythm:** chanting builds awareness of sounds and rhythm, which also supports early phonics.",
            "**Calm routines:** a shloka at bedtime or before a meal is a gentle, steady ritual.",
            "**Culture and family:** children share something with parents and grandparents.",
          ],
        },
        {
          type: "p",
          text: "Read our parent's guide to [shlokas for kids](/blog/shlokas-for-kids) for simple shlokas to start with and tips for practising at home.",
        },
      ],
    },
    {
      id: "more",
      heading: "More than shlokas",
      blocks: [
        {
          type: "p",
          text: "The same toy also tells stories, coaches phonics, plays a maths game that grows with your child, and answers their “why?” questions. See [everything Zivoo does](/features).",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Which shlokas does Zivoo know?",
      a: "Zivoo knows nine: Vakratunda Mahakaya (Ganesha shloka), Karagre Vasate Lakshmi (morning), Saraswati Namastubhyam (before study), Gurur Brahma (for teachers), Asato Ma Sadgamaya, Om Saha Navavatu, Shubham Karoti Kalyanam (evening lamp), the Gayatri Mantra and Brahmarpanam (before meals). It can recite each one, explain its meaning and teach it line by line.",
    },
    {
      q: "In what language are shlokas explained?",
      a: "Shlokas are recited in Sanskrit and their meanings are explained in simple English.",
    },
    {
      q: "What age is right to start learning shlokas?",
      a: "Many children start with short shlokas from about age 3, by listening and repeating. Zivoo is made for children aged 3 to 9.",
    },
  ],
  keywords: ["shloka toy", "shlokas for kids", "toy that teaches shlokas", "Gayatri mantra for kids", "Ganesha shloka for kids"],
  published: "2026-10-29",
  image: images.story,
};
