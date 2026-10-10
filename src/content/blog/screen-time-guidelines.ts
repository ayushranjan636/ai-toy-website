import type { Post } from "./types";

export const screenTimeGuidelines: Post = {
  slug: "screen-time-guidelines-for-young-children",
  title: "How much screen time is right for young children? What the guidelines actually say",
  seoTitle: "Screen time for toddlers & preschoolers: WHO and AAP guidance",
  description:
    "An age-by-age summary of WHO and American Academy of Pediatrics screen time guidance for children under 5, plus practical ways to swap screens for talk and play.",
  category: "Screen time",
  published: "2026-10-10",
  keywords: [
    "screen time for toddlers",
    "screen time guidelines by age",
    "how much screen time for a 3 year old",
    "WHO screen time recommendations",
    "AAP screen time guidelines",
    "reduce screen time for kids",
  ],
  image: {
    src: "/images/parent-app.webp",
    alt: "Two parents looking at a phone together at a table, with Zivoo beside them.",
    width: 1536,
    height: 1024,
  },
  answer:
    "The World Health Organization recommends no sedentary screen time for babies and one-year-olds, and no more than one hour a day for children aged 2 to 4, with less being better. The American Academy of Pediatrics gives similar advice: avoid screens other than video chatting before about 18 months, and keep it to around an hour of high-quality content a day for 2- to 5-year-olds, ideally watched together.",
  takeaways: [
    "Under 2: both WHO and AAP advise little to no screen time (video calls with family are the usual exception).",
    "Ages 2 to 4/5: no more than about one hour a day, and less is better.",
    "What replaces the screen matters as much as the limit. Active play, sleep and conversation are the priorities.",
    "Watching together and talking about what you saw turns passive viewing into something more social.",
  ],
  sections: [
    {
      id: "age-by-age",
      heading: "Screen time guidance, age by age",
      blocks: [
        {
          type: "p",
          text: "Two sets of guidance are referenced most often: the [World Health Organization's 2019 guidelines](https://www.who.int/news/item/24-04-2019-to-grow-up-healthy-children-need-to-sit-less-and-play-more) on physical activity, sedentary behaviour and sleep for children under 5, and the American Academy of Pediatrics (AAP) policy statement [Media and Young Minds](https://doi.org/10.1542/peds.2016-2591). They are worded differently but point in the same direction.",
        },
        {
          type: "table",
          caption: "Summary of published guidance. Always check the original sources for full detail.",
          head: ["Age", "WHO (2019)", "AAP (2016)"],
          rows: [
            ["Under 1 year", "Screen time not recommended", "Avoid screens other than video chatting"],
            ["1 year", "Sedentary screen time not recommended", "Until 18–24 months, avoid solo use; if introducing media, choose high-quality content and watch together"],
            ["2 years", "No more than 1 hour a day; less is better", "Around 1 hour a day of high-quality programming, watched together"],
            ["3–4 years", "No more than 1 hour a day; less is better", "Around 1 hour a day of high-quality programming, watched together"],
          ],
        },
        {
          type: "p",
          text: "Note the word **sedentary**. The WHO guidance is part of a wider picture about how young children spend a 24-hour day, encouraging more active play and enough good-quality sleep in place of long periods sitting in front of a screen.",
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Why the guidance focuses on what screens replace",
      blocks: [
        {
          type: "p",
          text: "Most guidance is less about screens being uniquely harmful and more about what children miss when screens fill their time. Early language grows through responsive, back-and-forth interaction, which Harvard's Center on the Developing Child calls [serve and return](https://developingchild.harvard.edu/key-concept/serve-and-return/). A child says something, an adult responds, and the exchange continues.",
        },
        {
          type: "p",
          text: "A video can't notice your child's puzzled face or follow up on a half-formed question. That's why both the WHO and AAP put weight on play, sleep and shared time with caregivers rather than simply on counting minutes.",
        },
      ],
    },
    {
      id: "practical-swaps",
      heading: "Practical screen-free swaps that actually stick",
      blocks: [
        {
          type: "p",
          text: "Cutting screen time works best when something easy is ready to take its place, particularly at the times screens tend to creep in.",
        },
        {
          type: "ul",
          items: [
            "**In the car or on a bus:** play \"I spy\" with sounds instead of letters (\"I spy something that starts with *mmm*\").",
            "**While you cook:** give your child a job and a running commentary to join. \"How many carrots do we need if everyone has two?\"",
            "**Winding down:** swap the last show of the day for a story, then ask one question about it. See our list of [questions to ask after a bedtime story](/blog/questions-to-ask-after-a-bedtime-story).",
            "**Waiting rooms:** a pocket-sized game of opposites, rhymes or \"what would happen if…\" needs nothing but your voice.",
          ],
        },
        {
          type: "callout",
          title: "A family media plan helps",
          text: "The AAP offers a free [Family Media Plan](https://www.healthychildren.org/English/fmp/Pages/MediaPlan.aspx) tool. Agreeing on screen-free times and places in advance means fewer negotiations in the moment.",
        },
      ],
    },
    {
      id: "where-zivoo-fits",
      heading: "Where a screen-free learning toy can fit",
      blocks: [
        {
          type: "p",
          text: "Nothing replaces time with a parent or carer. A screen-free toy can, though, give children another way to practise talking, listening and thinking without a display. That's the idea behind [Zivoo](/product/zivoo), a voice-based learning toy we're developing for spoken practice of words, spelling, simple maths and stories. It has no screen, needs Wi-Fi to work, and is still in development.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "How much screen time should a 3-year-old have?",
      a: "The WHO recommends no more than one hour of sedentary screen time a day for children aged 3 to 4, and says less is better. The AAP similarly suggests limiting screen use to about one hour a day of high-quality content for 2- to 5-year-olds, ideally watched with an adult.",
    },
    {
      q: "Do video calls count as screen time for babies?",
      a: "The AAP makes an exception for video chatting, for example with grandparents, because it is interactive and social. Other screen use is best avoided for children younger than about 18 months.",
    },
    {
      q: "Is educational screen time better than entertainment?",
      a: "Content quality matters, and the AAP recommends choosing high-quality programming and watching together. But the time limits still apply to educational content, because the main concern is what screen time displaces: play, sleep and conversation.",
    },
    {
      q: "What can replace screen time for toddlers?",
      a: "Active play, shared reading, simple talking games, helping with everyday tasks and screen-free toys that invite a child to talk, build or imagine are all good alternatives.",
    },
  ],
  sources: [
    {
      label: "World Health Organization (2019). To grow up healthy, children need to sit less and play more.",
      url: "https://www.who.int/news/item/24-04-2019-to-grow-up-healthy-children-need-to-sit-less-and-play-more",
    },
    {
      label: "American Academy of Pediatrics, Council on Communications and Media (2016). Media and Young Minds. Pediatrics, 138(5).",
      url: "https://doi.org/10.1542/peds.2016-2591",
    },
    { label: "AAP / HealthyChildren.org. Family Media Plan.", url: "https://www.healthychildren.org/English/fmp/Pages/MediaPlan.aspx" },
    {
      label: "Center on the Developing Child, Harvard University. Serve and Return.",
      url: "https://developingchild.harvard.edu/key-concept/serve-and-return/",
    },
  ],
};
