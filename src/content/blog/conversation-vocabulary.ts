import type { Post } from "./types";

export const conversationVocabulary: Post = {
  slug: "how-conversation-builds-childrens-vocabulary",
  title: "How everyday conversation builds your child's vocabulary (and how to do more of it)",
  seoTitle: "How conversation builds children's vocabulary and language",
  description:
    "Why back-and-forth talk matters for language development, and simple ways to boost your child's vocabulary through conversation, without flashcards or screens.",
  category: "Language",
  published: "2026-10-10",
  keywords: [
    "how to build a child's vocabulary",
    "language development in children",
    "serve and return",
    "talking with toddlers",
    "speech and language development",
    "conversation-based learning",
  ],
  image: {
    src: "/images/zivoo-facing.webp",
    alt: "Zivoo facing forward, showing its friendly face panel and coral top button.",
    width: 1536,
    height: 1024,
  },
  answer:
    "Children learn words best through responsive, back-and-forth conversation: they say something, an adult responds to it and adds a little more, and the exchange continues. Naming things, expanding on what your child says, asking open questions and leaving space for them to answer all help vocabulary grow, and none of them needs a screen.",
  takeaways: [
    "Back-and-forth matters more than the number of words a child simply hears.",
    "Expand on what your child says: \"Dog!\" → \"Yes, a big, fluffy dog. He's wagging his tail.\"",
    "Ask open questions (\"What do you think…?\") and wait a few seconds longer than feels natural.",
    "Explain new words in context, then invite your child to use them.",
  ],
  sections: [
    {
      id: "serve-and-return",
      heading: "Serve and return: the science in plain words",
      blocks: [
        {
          type: "p",
          text: "Harvard's Center on the Developing Child uses a tennis metaphor. When a child \"serves\" with a babble, a gesture, a question or a word, and an adult \"returns\" with attention and a response, that exchange helps build the brain connections behind communication and social skills. They call it [serve and return](https://developingchild.harvard.edu/key-concept/serve-and-return/).",
        },
        {
          type: "p",
          text: "The practical takeaway is that **what counts is responding, not lecturing.** A short, attentive exchange about something your child noticed does more than a long explanation they didn't ask for.",
        },
      ],
    },
    {
      id: "techniques",
      heading: "Five conversation habits that grow vocabulary",
      blocks: [
        {
          type: "ol",
          items: [
            "**Name and narrate.** Put words to what your child is seeing, doing or feeling: \"You're stacking the blocks so carefully. That tower is wobbling!\"",
            "**Expand, don't correct.** If your child says \"Bird flyed,\" reply \"Yes, the bird flew away, right up to the roof.\" You model the right form without making them feel wrong.",
            "**Add one interesting word.** Swap \"big\" for \"enormous\" or \"gigantic\" now and then, and explain it: \"Enormous means very, very big.\"",
            "**Ask open questions.** \"What do you think will happen?\" and \"Why do you think she did that?\" invite longer answers than \"What colour is it?\"",
            "**Wait.** Leave a pause of a few seconds after a question. Young children often need time to put an answer together.",
          ],
        },
      ],
    },
    {
      id: "books",
      heading: "Make reading a conversation",
      blocks: [
        {
          type: "p",
          text: "Shared reading is one of the richest sources of new words, especially when children take part. In [dialogic reading](https://www.readingrockets.org/topics/early-literacy-development/articles/dialogic-reading-effective-way-read-aloud-young-children), developed by Grover J. Whitehurst and colleagues, the adult gradually becomes the listener and questioner while the child becomes the storyteller.",
        },
        {
          type: "p",
          text: "Its PEER sequence is easy to remember: **P**rompt the child to say something about the book, **E**valuate their response, **E**xpand it by rephrasing and adding information, and **R**epeat the prompt. We turned this into ready-to-use prompts in [questions to ask after a bedtime story](/blog/questions-to-ask-after-a-bedtime-story).",
        },
      ],
    },
    {
      id: "milestones",
      heading: "When to seek advice",
      blocks: [
        {
          type: "p",
          text: "Every child develops at their own pace. If you're unsure whether your child's speech and language are on track, the American Speech-Language-Hearing Association publishes [communication milestones from birth to 5](https://www.asha.org/public/speech/development/chart/), and the NHS has guidance on [helping young children learn to talk](https://www.nhs.uk/conditions/baby/babys-development/play-and-learning/help-your-baby-learn-to-talk/). Your health visitor, GP, paediatrician or a speech and language therapist can advise if you have concerns.",
        },
        {
          type: "callout",
          title: "A note on toys",
          text: "No toy replaces a responsive adult. Conversational toys can add extra practice, though. That's the role we're designing [Zivoo](/product/zivoo) for: a screen-free toy that explains a word simply, then asks the child to use it.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "What is the best way to build a child's vocabulary?",
      a: "Talk with your child in a back-and-forth way: respond to what they say, expand their words into fuller sentences, introduce interesting new words with a simple explanation, ask open questions and read together interactively.",
    },
    {
      q: "What does serve and return mean?",
      a: "Serve and return is a term from Harvard's Center on the Developing Child. It describes responsive exchanges where a child babbles, gestures or speaks and an adult responds with attention and words. These exchanges support early language and social development.",
    },
    {
      q: "Should I correct my child's grammar?",
      a: "Rather than pointing out the mistake, try recasting: repeat what they said in the correct form and add a little more. For example, \"I goed park\" becomes \"Yes, you went to the park. What did you play on?\"",
    },
  ],
  sources: [
    {
      label: "Center on the Developing Child, Harvard University. Serve and Return.",
      url: "https://developingchild.harvard.edu/key-concept/serve-and-return/",
    },
    {
      label: "Whitehurst, G. J. Dialogic Reading: An Effective Way to Read Aloud with Young Children. Reading Rockets.",
      url: "https://www.readingrockets.org/topics/early-literacy-development/articles/dialogic-reading-effective-way-read-aloud-young-children",
    },
    {
      label: "American Speech-Language-Hearing Association. Developmental Milestones: Birth to 5 Years.",
      url: "https://www.asha.org/public/speech/development/chart/",
    },
    {
      label: "NHS. Helping your baby learn to talk.",
      url: "https://www.nhs.uk/conditions/baby/babys-development/play-and-learning/help-your-baby-learn-to-talk/",
    },
  ],
};
