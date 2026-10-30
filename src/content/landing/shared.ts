import { discountPct, inr, product } from "@/lib/site";

const p = product.preorder;

/** Reusable, always-in-sync sentences for landing pages. */
export const priceLine = `Pre-orders open in India on ${p.opensLabel} at ${inr(p.price)}, ${discountPct}% off the regular ${inr(p.listPrice)}, until ${p.validUntilLabel}.`;

export const zivooOneLiner =
  "[Zivoo](/product/zivoo) is a screen-free AI learning toy for children aged 3 to 9. Children talk to it for stories, shlokas, phonics, maths, words and spelling, and parents follow progress in the Zivoo Parents app.";

export const images = {
  front: { src: "/images/zivoo-front.webp", alt: "Zivoo, a rounded teal learning toy with a cream face panel and a coral button on top.", width: 1165, height: 1028 },
  child: { src: "/images/child-with-zivoo.webp", alt: "A young girl lying on a rug, smiling and talking to Zivoo.", width: 1536, height: 1024 },
  story: { src: "/images/story-time.webp", alt: "A parent and child in bed in the evening, listening to Zivoo on the bedside table.", width: 1536, height: 1024 },
  counting: { src: "/images/counting-practice.webp", alt: "A girl holding up three fingers while talking to Zivoo during a counting game.", width: 1536, height: 1024 },
  shelf: { src: "/images/zivoo-on-shelf.webp", alt: "Zivoo on a wooden shelf beside children's books.", width: 1536, height: 1024 },
  app: { src: "/images/parent-app.webp", alt: "Two parents looking at the Zivoo Parents app on a phone, with Zivoo on the table.", width: 1536, height: 1024 },
};
