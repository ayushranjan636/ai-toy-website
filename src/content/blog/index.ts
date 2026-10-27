import { bedtimeQuestions } from "./bedtime-questions";
import { choosingToys } from "./choosing-toys";
import { conversationVocabulary } from "./conversation-vocabulary";
import { screenFreeLearning } from "./screen-free-learning";
import { screenTimeGuidelines } from "./screen-time-guidelines";
import { spellingGames } from "./spelling-games";
import type { Post } from "./types";

/** All published posts, newest first (stable order for equal dates). */
export const posts: Post[] = [
  screenFreeLearning,
  screenTimeGuidelines,
  conversationVocabulary,
  choosingToys,
  spellingGames,
  bedtimeQuestions,
].sort((a, b) => (a.published < b.published ? 1 : a.published > b.published ? -1 : 0));

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

/** Related posts: same category first, then the rest. */
export function relatedPosts(post: Post, count = 3) {
  const others = posts.filter((p) => p.slug !== post.slug);
  return [...others.filter((p) => p.category === post.category), ...others.filter((p) => p.category !== post.category)].slice(
    0,
    count,
  );
}

export type { Post } from "./types";
