import Link from "next/link";
import { ArrowRight, ArrowUpRight, Layers } from "lucide-react";
import { INTERVIEW_TRACKS } from "@/data/tracks";
import {
  SITE_CONFIG,
  absoluteUrl,
  buildPageMetadata,
  getBreadcrumbJsonLd,
} from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";

export const metadata = buildPageMetadata({
  title: "9 Technical & HR Mock Interview Tracks for Campus Placements",
  description:
    "Browse all 9 built-in Indian campus placement interview tracks on PlacementPrep India: DSA, Operating Systems, Computer Networks, DBMS, Web Dev, React, JavaScript, Cybersecurity, and HR STAR.",
  path: "/tracks/",
  keywords: [
    "technical interview tracks India",
    "DSA OS DBMS Networks mock interview",
    "campus placement syllabus interview",
  ],
});

export default function TracksIndexPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "9 Built-In Campus Placement Interview Tracks",
    itemListElement: INTERVIEW_TRACKS.map((track, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: track.name,
      url: absoluteUrl(`/tracks/${track.slug}/`),
    })),
  };

  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "9 Placement Tracks", path: "/tracks/" },
        ])}
      />
      <JsonLd data={itemListJsonLd} />

      <section className="border-b border-border bg-dot-grid py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-xs font-semibold text-ink-subtle">
            <Link href="/" className="hover:text-brand-700">
              Home
            </Link>{" "}
            / <span className="text-ink">9 Placement Tracks</span>
          </nav>
          <div className="mt-4 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 font-mono text-xs font-bold text-brand-800">
              <Layers className="h-3.5 w-3.5" aria-hidden="true" />
              FR1 • 9 DOMAINS × 3 DIFFICULTY LEVELS
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
              9 Built-In Campus Placement Interview Tracks
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Every track is structured across Beginner, Intermediate, and Advanced tiers with
              spoken questions, adaptive follow-ups, and rubric criteria tailored for Indian B.Tech
              and fresher software interviews.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INTERVIEW_TRACKS.map((track) => (
            <article
              key={track.slug}
              className="flex flex-col justify-between rounded-2xl border border-border bg-white p-6 shadow-soft"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-md bg-brand-50 px-2.5 py-1 font-mono text-[11px] font-bold uppercase text-brand-800">
                    {track.category}
                  </span>
                  <span className="font-mono text-xs text-ink-subtle">
                    {track.questions.length} Sample Qs + Follow-Ups
                  </span>
                </div>
                <h2 className="mt-3 text-xl font-extrabold text-ink">
                  <Link href={`/tracks/${track.slug}/`} className="hover:text-brand-700">
                    {track.name}
                  </Link>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{track.tagline}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {track.targetCompanies.slice(0, 4).map((c) => (
                    <span
                      key={c}
                      className="rounded-md bg-canvas px-2 py-0.5 text-[11px] font-semibold text-ink-subtle ring-1 ring-border"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <Link
                  href={`/tracks/${track.slug}/`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:underline"
                >
                  Open Track Guide <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={SITE_CONFIG.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-ink-muted hover:text-ink"
                >
                  Live App <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
