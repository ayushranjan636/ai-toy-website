import { discountPct, inr, product } from "@/lib/site";

export type FaqItem = { q: string; a: React.ReactNode };

const p = product.preorder;

/**
 * Answers are founder-confirmed (10 Oct 2026, updated 29 Oct 2026). Keep them
 * in sync with `product` in lib/site.ts. Each answer starts with a direct,
 * quotable sentence: that is what search snippets and AI assistants lift.
 */
export const coreFaqs: FaqItem[] = [
  {
    q: "What is Zivoo?",
    a: `Zivoo is a screen-free AI learning toy for children aged ${product.ages.label}, from Cogniveda LLP in Tirupati, India. Children talk to it to hear stories, learn shlokas, practise phonics, maths, words and spelling, and ask curious questions, with no screen at all. Parents follow progress in the ${product.app}.`,
  },
  {
    q: "What age is Zivoo for?",
    a: `Zivoo is made for children aged ${product.ages.label}. Younger children enjoy stories, rhymes and counting; older children use the maths game, spelling and times tables, which get harder as they improve.`,
  },
  {
    q: "When can I pre-order Zivoo, and how much does it cost?",
    a: `Pre-orders open on ${p.opensLabel}, for India. The introductory pre-order price is ${inr(p.price)}, ${discountPct}% off the regular price of ${inr(p.listPrice)}, until ${p.validUntilLabel}. Orders ship ${product.ships}. Join the waitlist and we'll email you the moment pre-orders open.`,
  },
  {
    q: "What can my child do with Zivoo?",
    a: `Listen to and talk about stories, learn shlokas line by line, practise phonics, play a maths game that grows with them, learn new words and spell them out loud, ask "why" questions, and enjoy riddles, rhymes and calm-down breathing. ${product.phonicsNote}`,
  },
  {
    q: "Can Zivoo teach shlokas?",
    a: "Yes. Zivoo knows nine well-loved shlokas and mantras, including the Ganesha shloka and the Gayatri mantra. It can recite them, explain what they mean in simple words, and teach them line by line with repeat-after-me.",
  },
  {
    q: "Is Zivoo's learning content made by AI?",
    a: "No. What Zivoo teaches, and how, is chosen and designed by people, led by our founder, a teacher with more than 15 years in the classroom. The shlokas, their meanings and the built-in stories were selected and checked by people; phonics and maths are planned step by step, so children build skills in the right order. AI is only how Zivoo holds the conversation, and it works inside lessons and rules people wrote.",
  },
  {
    q: "Is Zivoo safe for children?",
    a: "Zivoo is built for children first. Its answers pass through several layers of child-safety checks: grown-up topics, unkind words and requests for personal details get gentle, fixed replies; personal details are removed before a question is processed; and every reply is checked before it is spoken. If a child says something worrying, Zivoo calmly tells them to talk to a grown-up they trust. No filter is perfect, so we still recommend a grown-up nearby.",
  },
  {
    q: "Does Zivoo need Wi-Fi?",
    a: "Yes. Zivoo connects to your home Wi-Fi to hold conversations and run its activities. You set it up once with the Zivoo Parents app.",
  },
  {
    q: "How does my child start talking to Zivoo?",
    a: `Once Zivoo is switched on, your child says "${product.wakeWord}" and then speaks normally. There's no screen to watch and nothing to tap.`,
  },
  {
    q: "Which languages does Zivoo speak?",
    a: "Zivoo speaks English at launch. Shlokas are recited in Sanskrit and explained in English.",
  },
  {
    q: "How long does the battery last?",
    a: "Up to 50 hours on a single full charge, depending on how much your child talks to it.",
  },
  {
    q: "What happens to my child's voice?",
    a: `Zivoo doesn't save recordings of your child's voice. Speech is used to understand and answer your child, then discarded. The ${product.app} shows you what your child practised and how they're progressing, never recordings.`,
  },
  {
    q: "What does the Zivoo Parents app do?",
    a: `The ${product.app} sets Zivoo up on your Wi-Fi, starts activities (a story, a shloka, phonics or maths) with one tap, sets the volume and the loudest volume allowed, and shows your child's progress over time.`,
  },
  {
    q: "Is Zivoo safety-certified?",
    a: "We'll publish Zivoo's safety certification details on this site before orders ship.",
  },
  {
    q: "How is Zivoo different from Alexa or a smart speaker?",
    a: "Smart speakers are built for adults and answer anything. Zivoo is built only for children aged 3 to 9: it teaches through back-and-forth conversation, asks questions back, runs learning games that adapt to your child, filters every answer for children, and reports progress to parents.",
  },
];

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.q} className="faq-item">
          <summary>
            <span>{item.q}</span>
            <span className="faq-icon" aria-hidden="true" />
          </summary>
          <div className="faq-answer">
            <p>{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
