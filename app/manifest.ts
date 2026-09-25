import type { MetadataRoute } from "next";
import { site } from "./_lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Kasadi",
    description: site.description,
    start_url: "/",
    display: "browser",
    background_color: "#ecebe7",
    theme_color: "#151515",
    icons: [{ src: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  };
}
