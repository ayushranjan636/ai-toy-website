#!/usr/bin/env node
/** Summarise Lighthouse JSON runs: median per group. Usage: node scripts/lh-median.mjs <dir> */
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const dir = process.argv[2];
const groups = {};
for (const f of readdirSync(dir).filter((f) => f.endsWith(".json"))) {
  const key = f.replace(/\d+\.json$/, "");
  const r = JSON.parse(readFileSync(path.join(dir, f), "utf8"));
  if (!r.categories?.performance || r.runtimeError || r.categories.performance.score == null) {
    console.log(`skipped ${f}: ${r.runtimeError?.code ?? "no performance score"}`);
    continue;
  }
  const a = r.audits;
  (groups[key] ??= []).push({
    perf: r.categories.performance.score * 100,
    lcp: a["largest-contentful-paint"].numericValue,
    fcp: a["first-contentful-paint"].numericValue,
    tbt: a["total-blocking-time"].numericValue,
    cls: a["cumulative-layout-shift"].numericValue,
    si: a["speed-index"].numericValue,
    seo: r.categories.seo.score * 100,
    a11y: r.categories.accessibility.score * 100,
    url: r.finalDisplayedUrl,
    ff: r.configSettings.formFactor,
  });
}
const med = (xs) => {
  const s = [...xs].sort((x, y) => x - y);
  return s[Math.floor(s.length / 2)];
};
for (const [k, runs] of Object.entries(groups)) {
  const m = (f) => med(runs.map((r) => r[f]));
  console.log(
    `${k.padEnd(12)} ${runs[0].ff.padEnd(7)} n=${runs.length}  perf ${m("perf").toFixed(0)}  LCP ${(m("lcp") / 1000).toFixed(2)}s  FCP ${(m("fcp") / 1000).toFixed(2)}s  TBT ${m("tbt").toFixed(0)}ms  CLS ${m("cls").toFixed(3)}  SI ${(m("si") / 1000).toFixed(2)}s  SEO ${m("seo")}  A11y ${m("a11y")}  ${runs[0].url}`,
  );
}
