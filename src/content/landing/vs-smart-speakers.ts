import { images, priceLine } from "./shared";
import type { Landing } from "./types";

export const vsSmartSpeakers: Landing = {
  kind: "compare",
  slug: "zivoo-vs-alexa-smart-speakers",
  title: "Zivoo vs Alexa and smart speakers for kids",
  seoTitle: "Zivoo vs Alexa for Kids: Which Is Better for Learning? | Zivoo",
  description:
    "Zivoo or a smart speaker like Amazon Alexa or Google Nest for your child? An honest comparison of learning, safety, conversation and parent controls for ages 3 to 9.",
  eyebrow: "Comparison",
  answer:
    "Smart speakers such as Amazon Alexa and Google Nest are general-purpose voice assistants made for the whole household. Zivoo is a screen-free AI learning toy made only for children aged 3 to 9: it teaches through back-and-forth conversation, runs learning games that adapt to the child, checks every answer for children and shows parents their child's progress. If the goal is learning, Zivoo is built for it; if the goal is music, timers and smart-home control, a smart speaker is.",
  highlights: [
    "Smart speakers answer and stop; Zivoo answers and asks something back.",
    "Zivoo's activities (stories, shlokas, phonics, maths, spelling) are made for ages 3 to 9.",
    "Every Zivoo reply is checked for children before it is spoken.",
    priceLine,
  ],
  sections: [
    {
      id: "table",
      heading: "Side-by-side comparison",
      blocks: [
        {
          type: "table",
          caption: "Zivoo compared with a typical smart speaker",
          head: ["", "Zivoo", "Typical smart speaker"],
          rows: [
            ["Made for", "Children aged 3 to 9", "The whole household, mostly adults"],
            ["Main purpose", "Learning through conversation", "Questions, music, timers, smart home"],
            ["Conversation style", "Short answer, then a question back", "Answers the request and stops"],
            ["Learning activities", "Stories, shlokas, phonics, adaptive maths, spelling", "Depends on third-party skills"],
            ["Child safety", "Every reply checked for children; fixed gentle replies to grown-up topics", "Optional kids modes and parental settings"],
            ["Progress for parents", "Zivoo Parents app shows what was practised", "Not focused on learning progress"],
            ["Form", "A child-sized toy with a friendly face", "A household speaker"],
            ["Screen", "None", "None, or a display on some models"],
          ],
        },
        {
          type: "p",
          text: "Smart-speaker features vary by model, region and settings; check the manufacturer's current details.",
        },
      ],
    },
    {
      id: "learning",
      heading: "The difference for learning",
      blocks: [
        {
          type: "p",
          text: "Children learn language through **serve and return**: they say something, an adult responds, and the exchange continues. A smart speaker is designed to fulfil a request quickly. Zivoo is designed to keep the exchange going: it explains in a sentence or two, then asks the child what they think. Read more on [how conversation builds vocabulary](/blog/how-conversation-builds-childrens-vocabulary).",
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
            "**Choose Zivoo** if you want a learning companion for a child aged 3 to 9, with stories, shlokas, phonics, maths and spelling, and progress you can follow.",
            "**Choose a smart speaker** if you want a household assistant for music, news, timers and smart-home control.",
            "Many families have both: the speaker for the house, Zivoo for the child's learning.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Is Alexa good for kids' learning?",
      a: "Smart speakers can answer children's questions and run some kids' skills, but they are designed as household assistants. A learning toy like Zivoo is built only for children, asks questions back and runs adaptive learning games.",
    },
    {
      q: "Is Zivoo safer than a smart speaker for children?",
      a: "Zivoo is made only for children: every reply is checked before it is spoken, grown-up topics get gentle fixed answers, it never asks for personal details and voice recordings aren't saved.",
    },
    {
      q: "Can Zivoo play music like Alexa?",
      a: "Zivoo sings nursery rhymes and tells stories, but it isn't a music player or smart-home assistant. It is a learning toy.",
    },
  ],
  keywords: ["Zivoo vs Alexa", "Alexa for kids alternative", "smart speaker for kids", "Echo Dot Kids alternative India"],
  published: "2026-10-29",
  image: images.shelf,
};
