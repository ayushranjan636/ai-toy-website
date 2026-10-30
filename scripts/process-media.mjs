#!/usr/bin/env node
/**
 * Turns the raw product renders in public/angles_transparent and public/features
 * into web-ready WebP files under public/images/. Re-run after replacing a source:
 *
 *   node scripts/process-media.mjs
 *
 * Feature cards: the "Product render · Zivoo is in development" footer is removed
 * and copy that no longer matches launch facts is repainted, so images never
 * contradict the page text (src/lib/site.ts).
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public");
const GREY = "#525655"; // card body text
const FONT = "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif";

const angles = [
  ["zivoo_09_hero", "zivoo-hero"],
  ["zivoo_01_front", "zivoo-angle-front"],
  ["zivoo_02_front_left", "zivoo-angle-front-left"],
  ["zivoo_03_front_right", "zivoo-angle-front-right"],
  ["zivoo_04_left_side", "zivoo-angle-left"],
  ["zivoo_05_right_side", "zivoo-angle-right"],
  ["zivoo_06_back", "zivoo-angle-back"],
  ["zivoo_07_back_angle", "zivoo-angle-back-three-quarter"],
  ["zivoo_08_top", "zivoo-angle-top"],
];

// Cards use either white or #F5F7F6; the fill is sampled per card (see BG_TOKEN below).
const BG_TOKEN = "__BG__";
const rect = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${BG_TOKEN}"/>`;
const lines = (x, baselines, texts, size = 28) =>
  texts
    .map((t, i) => `<text x="${x}" y="${baselines[i]}" font-family="${FONT}" font-size="${size}" fill="${GREY}">${t}</text>`)
    .join("");

/** Footer disclaimer sits at y≈1916–1945, x 112–~1000; the "Zivoo" wordmark on the right stays. */
const footer = rect(90, 1900, 1500, 64);

const features = [
  ["zivoo_feature_01_meet_zivoo", "zivoo-feature-meet", ""],
  ["zivoo_feature_02_hey_zivoo", "zivoo-feature-hey-zivoo", ""],
  [
    "zivoo_feature_03_privacy_mic_switch",
    "zivoo-feature-privacy",
    rect(1410, 1000, 560, 125) +
      lines(1421, [1029, 1070, 1111], ["Speech is used to answer, then", "discarded. Parents see learning", "insights, never recordings."]) +
      rect(1410, 1222, 560, 125) +
      lines(1421, [1251, 1292], ["Choose what your child learns", "and see how they&#8217;re growing."]),
  ],
  ["zivoo_feature_04_learning_modes", "zivoo-feature-practice", ""],
  ["zivoo_feature_06_battery", "zivoo-feature-battery", ""],
  ["zivoo_feature_07_size", "zivoo-feature-size", rect(100, 1795, 700, 55) + lines(112, [1832], ["160 &#215; 140 &#215; 94 mm"])],
];

await mkdir(path.join(root, "images"), { recursive: true });

for (const [src, out] of angles) {
  const trimmed = await sharp(path.join(root, "angles_transparent", `${src}.png`))
    .trim({ threshold: 1 })
    .toBuffer({ resolveWithObject: true });
  // Square canvas with even breathing room so every angle sits at the same scale.
  const side = Math.round(Math.max(trimmed.info.width, trimmed.info.height) * 1.12);
  await sharp({ create: { width: side, height: side, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: trimmed.data, gravity: "center" }])
    .png()
    .toBuffer()
    .then((buf) => sharp(buf).resize(1200, 1200).webp({ quality: 84, alphaQuality: 90, effort: 6 }).toFile(path.join(root, "images", `${out}.webp`)))
    .then((i) => console.log(`${out}.webp ${i.width}x${i.height} ${Math.round(i.size / 1024)} KB`));
}

for (const [src, out, patch] of features) {
  const file = path.join(root, "features", `${src}.jpg`);
  const { data } = await sharp(file).extract({ left: 80, top: 1900, width: 1, height: 1 }).raw().toBuffer({ resolveWithObject: true });
  const bg = `rgb(${data[0]},${data[1]},${data[2]})`;
  const svg = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="2000" height="2000">${footer}${patch}</svg>`.replaceAll(BG_TOKEN, bg),
  );
  // sharp resizes before compositing, so patch at full size first.
  const patched = await sharp(file).composite([{ input: svg }]).png().toBuffer();
  const info = await sharp(patched)
    .resize(1600, 1600)
    .webp({ quality: 82, effort: 6 })
    .toFile(path.join(root, "images", `${out}.webp`));
  console.log(`${out}.webp ${info.width}x${info.height} ${Math.round(info.size / 1024)} KB`);
}
