import type { MetadataRoute } from "next";
import { INTERVIEW_TRACKS } from "@/data/tracks";
import { PREP_GUIDES } from "@/data/guides";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-11-23T00:00:00.000Z");

  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: absoluteUrl("/mock-interview/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: absoluteUrl("/tracks/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/rubric/"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: absoluteUrl("/compare/"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: absoluteUrl("/guides/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: absoluteUrl("/about/"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/privacy/"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const trackRoutes: MetadataRoute.Sitemap = INTERVIEW_TRACKS.map((track) => ({
    url: absoluteUrl(`/tracks/${track.slug}/`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const guideRoutes: MetadataRoute.Sitemap = PREP_GUIDES.map((guide) => ({
    url: absoluteUrl(`/guides/${guide.slug}/`),
    lastModified: new Date(guide.updatedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...coreRoutes, ...trackRoutes, ...guideRoutes];
}
