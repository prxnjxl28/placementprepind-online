import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.fullBrand,
    short_name: "PlacementPrep IN",
    description: SITE_CONFIG.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FAF9F6",
    theme_color: "#0D7A5F",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
