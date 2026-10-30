import { aiToy } from "./ai-toy-for-kids";
import { phonicsToy } from "./phonics-toy-for-kids";
import { screenFreeToy } from "./screen-free-learning-toy";
import { shlokaToy } from "./shloka-learning-toy";
import { toys3to5 } from "./toys-3-to-5";
import { toys6to9 } from "./toys-6-to-9";
import { landingPath, type Landing } from "./types";
import { vsAudioPlayers } from "./vs-audio-players";
import { vsSmartSpeakers } from "./vs-smart-speakers";
import { vsTabletApps } from "./vs-tablet-apps";

const all: Landing[] = [
  screenFreeToy,
  aiToy,
  shlokaToy,
  phonicsToy,
  toys3to5,
  toys6to9,
  vsSmartSpeakers,
  vsTabletApps,
  vsAudioPlayers,
];

export const landings = all.map((l) => ({ ...l, path: landingPath(l) }));
export type LandingWithPath = (typeof landings)[number];

export const landingsOf = (kind: Landing["kind"]) => landings.filter((l) => l.kind === kind);
export const getLanding = (kind: Landing["kind"], slug: string) => landings.find((l) => l.kind === kind && l.slug === slug);

export { landingPath, type Landing } from "./types";
