import { inr, product } from "@/lib/site";

export type FaqItem = { q: string; a: React.ReactNode };

const p = product.preorder;

/** Answers are founder-confirmed (10 Oct 2026). Keep them in sync with `product` in lib/site.ts. */
export const coreFaqs: FaqItem[] = [
  {
    q: "What age is Zivoo for?",
    a: `Zivoo is being designed for children aged ${product.ages.label}.`,
  },
  {
    q: "Does Zivoo need Wi-Fi?",
    a: "Yes. Zivoo is designed to connect to your home Wi-Fi, and it needs that connection to hold conversations and run its activities. It isn't designed to work offline.",
  },
  {
    q: "How does my child start talking to Zivoo?",
    a: `Once Zivoo is switched on, your child says "${product.wakeWord}" and then speaks normally. There's no screen or button to press for each question.`,
  },
  {
    q: "Which languages does Zivoo speak?",
    a: "English first. We're working towards more Indian languages, and we'll name each one only when it's ready.",
  },
  {
    q: "What activities are planned?",
    a: "We're developing word practice, spelling, basic maths, storytelling and story reflection (talking about a story after hearing it). The exact set of activities at launch may change as development continues.",
  },
  {
    q: "When can I pre-order, and how much will it cost?",
    a: `Pre-orders are planned to open on ${p.opensLabel}, for India only. The planned introductory price is ${inr(p.price)}, 50% off the regular price of ${inr(p.listPrice)}, until ${p.validUntilLabel}. Join the waitlist and we'll email you when pre-orders open.`,
  },
  {
    q: "How long does the battery last?",
    a: "Zivoo is being designed to run for up to 50 hours on a single full charge. We'll confirm real-world battery life once testing is complete.",
  },
  {
    q: "What happens to my child's voice?",
    a: `Voice recordings are kept only temporarily, on the Zivoo device itself. The ${product.app} shows you a summary of what your child practised and how they're progressing, not recordings. Our full privacy policy is still being written and will be published here when it's ready.`,
  },
  {
    q: "What will the parent app do?",
    a: `The ${product.app} is planned to let you set up Zivoo, choose which activities are available, and follow your child's growth and performance over time. The app screens on this site are concepts, not the finished app.`,
  },
  {
    q: "Is Zivoo safety-certified?",
    a: "Not yet. Zivoo is still being built and tested. We'll list each safety certification here only once it has actually been issued.",
  },
  {
    q: "What does joining the waitlist mean?",
    a: "Only that we'll email you when pre-orders open. It isn't an order or a paid reservation, and you won't be asked to pay anything. If you tick the separate box, we'll also send occasional development updates.",
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
