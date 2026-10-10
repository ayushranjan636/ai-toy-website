"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SOURCES = {
  hd: "/video/zivoo-film-1080.mp4",
  sd: "/video/zivoo-film-720.mp4",
};
const POSTER = "/video/zivoo-film-poster.webp";

/**
 * A 25-second concept film. Nothing downloads until the visitor presses play,
 * it never autoplays, and it uses the lighter 720p file on small screens or
 * when the browser asks to save data.
 */
export function FilmPlayer({ title = "Zivoo concept film" }: { title?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string | null>(null);

  // Once the video element exists (after the visitor pressed play), start it.
  useEffect(() => {
    const v = videoRef.current;
    if (!src || !v) return;
    v.focus();
    v.play().catch(() => {
      /* Playback blocked: the native controls remain available. */
    });
  }, [src]);

  function start() {
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const small = window.matchMedia("(max-width: 899px)").matches;
    setSrc(small || conn?.saveData ? SOURCES.sd : SOURCES.hd);
  }

  return (
    <figure className="film">
      <div className="film-frame">
        {src ? (
          <video
            ref={videoRef}
            className="film-video"
            src={src}
            poster={POSTER}
            controls
            playsInline
            preload="auto"
            aria-label={title}
          />
        ) : (
          <button type="button" className="film-start" onClick={start}>
            <Image src={POSTER} alt="" fill sizes="(min-width: 1248px) 1200px, 100vw" className="film-poster" loading="lazy" />
            <span className="film-play glass">
              <svg viewBox="0 0 24 24" width="22" height="22" focusable="false" aria-hidden="true">
                <path d="M8 5.5v13l10.5-6.5L8 5.5Z" fill="currentColor" />
              </svg>
              Play film
              <span className="visually-hidden">: {title}, </span>
              <span className="film-duration">0:25</span>
            </span>
          </button>
        )}
        <span className="glass-tag">Concept film</span>
      </div>
    </figure>
  );
}
