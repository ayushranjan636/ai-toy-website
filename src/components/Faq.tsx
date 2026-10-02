export type FaqItem = { q: string; a: React.ReactNode };

export const coreFaqs: FaqItem[] = [
  {
    q: "Does Zivoo need Wi-Fi?",
    a: "Yes. Zivoo is designed to connect to your home Wi-Fi, and it needs that connection to hold conversations and run its activities. It isn't designed to work offline.",
  },
  {
    q: "What activities are planned?",
    a: "We're developing word practice, spelling, basic maths, storytelling and story reflection (talking about a story after hearing it). The exact set of activities at launch may change as development continues.",
  },
  {
    q: "Is Zivoo available yet?",
    a: "Not yet. Zivoo is in development, and the design, activities and app shown on this site may change before it's ready. We'll share firm details when we have them.",
  },
  {
    q: "What will the parent app do?",
    a: "The companion app is planned to let you set up Zivoo, choose which activities are available, and see what your child has been practising. The app screens on this site are concepts, not the finished app.",
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
