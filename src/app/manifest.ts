import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zivoo: screen-free learning toy",
    short_name: "Zivoo",
    description: "A screen-free learning toy children talk to.",
    start_url: "/",
    display: "browser",
    background_color: "#FFF8EE",
    theme_color: "#214E47",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
