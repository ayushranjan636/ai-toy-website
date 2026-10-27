import Link from "next/link";
import { Fragment } from "react";

/**
 * Renders the tiny inline markup used in blog content:
 *   [text](href)   **bold**   *emphasis*
 * Internal links use next/link (prefetched); external links open safely.
 */
const TOKEN = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\*[^*\s][^*]*\*)/g;

export function RichText({ text }: { text: string }) {
  const parts = text.split(TOKEN).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, label, href] = link;
          if (href.startsWith("/") || href.startsWith("#")) {
            return (
              <Link key={i} href={href}>
                {label}
              </Link>
            );
          }
          return (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer">
              {label}
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          );
        }
        if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
        if (part.startsWith("*") && part.endsWith("*") && part.length > 2) return <em key={i}>{part.slice(1, -1)}</em>;
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
