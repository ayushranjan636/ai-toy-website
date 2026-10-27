/**
 * Two-leaf sprig taken from the Zivoo logo: a teal leaf and a coral leaf.
 * Used as the active-navigation indicator and as a quiet list marker.
 */
export function LeafMark({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 16"
      width="24"
      height="16"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <path d="M8.2 15C4.6 12.8 3.6 7.6 6.4 1.6c3.7 3 4.6 8.4 1.8 13.4Z" fill="#6A9A89" />
      <path d="M10.4 15.2c1.2-4.6 5.6-8 11.6-7.6-1.9 4.9-6.6 8-11.6 7.6Z" fill="#F28F79" />
    </svg>
  );
}
