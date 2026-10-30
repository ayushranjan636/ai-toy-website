#!/usr/bin/env node
/**
 * IndexNow ping: tells Bing (which powers ChatGPT search and Copilot), Yandex,
 * Seznam and Naver that pages changed, so they recrawl within hours instead of
 * weeks. Run after every production deploy that changes content:
 *
 *   npm run indexnow                 # every URL in the live sitemap
 *   npm run indexnow -- /pre-order   # just these paths
 *
 * The key file is public/<KEY>.txt (it must stay deployed).
 */
const KEY = "c7947d57d56265d3e34e472839f16d74";
const ORIGIN = "https://www.zivootoy.in";

const paths = process.argv.slice(2);
let urls;
if (paths.length) {
  urls = paths.map((p) => new URL(p, ORIGIN).href);
} else {
  const xml = await (await fetch(`${ORIGIN}/sitemap.xml`)).text();
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(ORIGIN).host, key: KEY, keyLocation: `${ORIGIN}/${KEY}.txt`, urlList: urls }),
});
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urls.length} URL(s)`);
if (!res.ok && res.status !== 202) process.exit(1);
