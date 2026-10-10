import localFont from "next/font/local";

/**
 * Self-hosted, Latin-only variable fonts (≈57 KB total). next/font preloads
 * them, serves them from our own domain and generates size-matched fallbacks
 * so text doesn't shift when the real font arrives.
 */
export const fraunces = localFont({
  src: "./fonts/fraunces-latin-wght.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-fraunces",
  fallback: ["Georgia", "Times New Roman", "serif"],
  adjustFontFallback: "Times New Roman",
});

export const figtree = localFont({
  src: "./fonts/figtree-latin-wght.woff2",
  weight: "300 900",
  style: "normal",
  display: "swap",
  variable: "--font-figtree",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
  adjustFontFallback: "Arial",
});
