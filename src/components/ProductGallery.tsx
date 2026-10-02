"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import { AssetPlaceholder } from "./AssetPlaceholder";

export type GalleryItem =
  | { kind: "image"; src: string; width: number; height: number; alt: string; caption: string; label: string; cutout?: boolean }
  | { kind: "placeholder"; label: string; caption: string };

export function ProductGallery({ items }: { items: GalleryItem[] }) {
  const [index, setIndex] = useState(0);
  const thumbs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = items[index];

  function onKey(e: KeyboardEvent<HTMLDivElement>) {
    const keys: Record<string, number> = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    let next: number | undefined;
    if (e.key in keys) next = (index + keys[e.key] + items.length) % items.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = items.length - 1;
    if (next === undefined) return;
    e.preventDefault();
    setIndex(next);
    thumbs.current[next]?.focus();
  }

  return (
    <div className="gallery">
      <figure className="gallery-stage" aria-live="polite">
        <div className={`gallery-frame ${current.kind === "image" && current.cutout ? "is-cutout" : ""}`}>
          {current.kind === "image" ? (
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              fill
              sizes="(min-width: 1000px) 640px, 100vw"
              priority={index === 0}
              className="gallery-image"
            />
          ) : (
            <AssetPlaceholder ratio="4 / 3" label={current.label} className="gallery-placeholder" />
          )}
        </div>
        <figcaption>
          <span className="gallery-count">
            {index + 1} of {items.length}
          </span>{" "}
          {current.caption}
        </figcaption>
      </figure>

      <div className="gallery-thumbs" role="group" aria-label="Choose a product view" onKeyDown={onKey}>
        {items.map((item, i) => (
          <button
            key={item.label}
            ref={(el) => {
              thumbs.current[i] = el;
            }}
            type="button"
            className="gallery-thumb"
            aria-pressed={i === index}
            aria-label={`Show ${item.label}`}
            tabIndex={i === index ? 0 : -1}
            onClick={() => setIndex(i)}
          >
            {item.kind === "image" ? (
              <Image src={item.src} alt="" width={120} height={80} sizes="96px" className={item.cutout ? "thumb-cutout" : "thumb-cover"} />
            ) : (
              <span className="thumb-placeholder" aria-hidden="true">
                Photo to come
              </span>
            )}
            <span className="gallery-thumb-label" aria-hidden="true">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
