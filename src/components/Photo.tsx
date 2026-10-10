import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  caption?: string;
  /** Small glass label in the corner, e.g. "Concept image". */
  tag?: string;
  priority?: boolean;
  className?: string;
};

/** A rounded photo with an optional glass tag and caption. */
export function Photo({ src, alt, width, height, sizes, caption, tag, priority, className }: Props) {
  return (
    <figure className={`photo ${className ?? ""}`}>
      <div className="photo-frame" style={{ aspectRatio: `${width} / ${height}` }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          className="photo-img"
        />
        {tag ? <span className="glass-tag">{tag}</span> : null}
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
