import type { Post } from "./types";

export const bedtimeQuestions: Post = {
  slug: "questions-to-ask-after-a-bedtime-story",
  title: "30 questions to ask your child after a bedtime story",
  seoTitle: "30 questions to ask after a bedtime story (by age)",
  description:
    "Simple, age-grouped questions to ask after reading a story with your child. They build comprehension, vocabulary and reasoning, using the dialogic reading approach.",
  category: "Language",
  published: "2026-10-10",
  keywords: [
    "questions to ask after reading a story",
    "bedtime story questions",
    "reading comprehension questions for kids",
    "dialogic reading prompts",
    "story discussion questions",
    "storytelling for kids",
  ],
  image: {
    src: "/images/story-time.webp",
    alt: "A parent and child sharing a story beside Zivoo in a softly lit room.",
    width: 1536,
    height: 1024,
  },
  answer:
    "After a bedtime story, ask one or two open questions rather than a quiz: \"What was your favourite part?\", \"Why do you think she did that?\" or \"What would you have done?\" These turn listening into conversation, which supports comprehension and vocabulary. Match the question to your child's age, and follow their lead if they want to keep talking.",
  takeaways: [
    "One or two good questions are plenty. Bedtime should stay calm and enjoyable.",
    "Open questions (why, how, what if) invite more talk than yes/no questions.",
    "The CROWD prompts from dialogic reading give you five easy types of question.",
    "There are no wrong answers to \"what do you think?\" questions. Show interest in their reasoning.",
  ],
  sections: [
    {
      id: "crowd",
      heading: "The CROWD method in one minute",
      blocks: [
        {
          type: "p",
          text: "[Dialogic reading](https://www.readingrockets.org/topics/early-literacy-development/articles/dialogic-reading-effective-way-read-aloud-young-children) uses five types of prompt, remembered as CROWD:",
        },
        {
          type: "ul",
          items: [
            "**Completion:** leave a word out for your child to fill in, which works well with rhymes.",
            "**Recall:** ask what happened in the story.",
            "**Open-ended:** \"Tell me what's happening in this picture.\"",
            "**Wh- questions:** what, where, when, why and how.",
            "**Distancing:** connect the story to your child's own life.",
          ],
        },
        {
          type: "p",
          text: "Reading Rockets notes that recall and distancing prompts are harder, and suggests using them more with 4- and 5-year-olds. The lists below follow that progression.",
        },
      ],
    },
    {
      id: "ages-3-4",
      heading: "Questions for ages 3 to 4",
      blocks: [
        {
          type: "ol",
          items: [
            "Who was in the story?",
            "What was your favourite picture?",
            "What colour was the [character]'s hat?",
            "Where did they go?",
            "What sound does a [animal from the story] make?",
            "How do you think [character] felt when that happened?",
            "Can you find the [object] on this page?",
            "What did they eat / build / find?",
          ],
        },
      ],
    },
    {
      id: "ages-5-6",
      heading: "Questions for ages 5 to 6",
      blocks: [
        {
          type: "ol",
          items: [
            "What happened first, and what happened next?",
            "Why do you think [character] did that?",
            "What was the problem in the story? How was it solved?",
            "What do you think will happen tomorrow in their world?",
            "Has anything like this ever happened to you?",
            "Which character would you like to be friends with? Why?",
            "Was there a word you didn't know? Let's work out what it means.",
            "If you could change one thing in the story, what would it be?",
            "What would you have done instead?",
            "Can you tell the story to your teddy in three sentences?",
          ],
        },
      ],
    },
    {
      id: "ages-7-8",
      heading: "Questions for ages 7 to 8",
      blocks: [
        {
          type: "ol",
          items: [
            "Did any character change from the beginning to the end? How?",
            "What do you think the author wanted us to learn?",
            "Was there a moment you disagreed with a character?",
            "What clues told you what was going to happen?",
            "How would the story be different if it was told by [another character]?",
            "Which part would make the best film scene, and why?",
            "What do you think happened before the story started?",
            "If there was a sequel, what would it be called?",
            "Was the ending fair? Why or why not?",
            "What question would you like to ask the main character?",
            "Can you think of another story that's a bit like this one?",
            "Which word in this story was the most interesting?",
          ],
        },
      ],
    },
    {
      id: "tips",
      heading: "Tips for keeping it relaxed",
      blocks: [
        {
          type: "ul",
          items: [
            "Pick one or two questions, not a list. Save the rest for another night.",
            "Answer your own question sometimes. Hearing your reasoning models how to think about a story.",
            "If your child is sleepy or not in the mood, simply enjoy the story.",
            "Repeat favourite books. Familiar stories make recall and prediction questions easier and more fun.",
          ],
        },
        {
          type: "callout",
          title: "Story reflection with Zivoo",
          text: "Story time is one of the favourite activities on [Zivoo](/features#stories-title). It tells a short story, or makes one up on any topic, and then asks children what they think, in the spirit of these questions and without a screen.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "What questions should I ask my child after reading a story?",
      a: "Ask open questions such as \"What was your favourite part?\", \"Why do you think the character did that?\", \"What would you have done?\" and \"What do you think happens next?\" For younger children, start with simple who, what and where questions about the pictures.",
    },
    {
      q: "What is dialogic reading?",
      a: "Dialogic reading is an approach to shared reading developed by Grover J. Whitehurst in which the adult asks questions and prompts so the child becomes an active storyteller. It uses the PEER sequence and the CROWD types of prompt.",
    },
    {
      q: "How many questions should I ask during story time?",
      a: "Keep it light, especially at bedtime. One or two thoughtful questions is plenty. Follow your child's interest and stop while it's still enjoyable.",
    },
  ],
  sources: [
    {
      label: "Whitehurst, G. J. Dialogic Reading: An Effective Way to Read Aloud with Young Children. Reading Rockets.",
      url: "https://www.readingrockets.org/topics/early-literacy-development/articles/dialogic-reading-effective-way-read-aloud-young-children",
    },
    {
      label: "Center on the Developing Child, Harvard University. Serve and Return.",
      url: "https://developingchild.harvard.edu/key-concept/serve-and-return/",
    },
  ],
};
