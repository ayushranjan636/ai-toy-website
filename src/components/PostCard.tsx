import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/content/blog";
import { readingMinutes } from "@/content/blog/types";

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export function PostCard({ post, headingLevel = "h2", eager = false }: { post: Post; headingLevel?: "h2" | "h3"; eager?: boolean }) {
  const Heading = headingLevel;
  return (
    <article className="post-card">
      <Link href={`/blog/${post.slug}`} className="post-card-link">
        <div className="post-card-media">
          <Image src={post.image.src} alt="" fill loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : undefined} sizes="(min-width: 1000px) 380px, (min-width: 640px) 45vw, 100vw" />
        </div>
        <div className="post-card-body">
          <p className="post-meta">
            <span>{post.category}</span>
            <span aria-hidden="true">·</span>
            <span>{readingMinutes(post)} min read</span>
          </p>
          <Heading className="post-card-title">{post.title}</Heading>
          <p className="post-card-desc">{post.description}</p>
        </div>
      </Link>
    </article>
  );
}
