import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { INTERVIEW_TRACKS, getTrackBySlug } from "@/data/tracks";
import {
  SITE_CONFIG,
  absoluteUrl,
  buildPageMetadata,
  getBreadcrumbJsonLd,
  getFaqJsonLd,
} from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { FaqAccordion } from "@/components/FaqAccordion";
import { MockInterviewSimulator } from "@/components/MockInterviewSimulator";

export function generateStaticParams() {
  return INTERVIEW_TRACKS.map((track) => ({ slug: track.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const track = getTrackBySlug(slug);
  if (!track) return {};
  return buildPageMetadata({
    title: track.seoTitle,
    description: track.seoDescription,
    path: `/tracks/${track.slug}/`,
    keywords: track.keywords,
  });
}

export default async function TrackDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const track = getTrackBySlug(slug);
  if (!track) notFound();

  const relatedTracks = track.relatedSlugs
    .map((s) => getTrackBySlug(s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const learningResourceJsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: `${track.name} Mock Interview Track`,
    description: track.seoDescription,
    url: absoluteUrl(`/tracks/${track.slug}/`),
    inLanguage: "en-IN",
    educationalLevel: "Undergraduate / Campus Placement",
    learningResourceType: "Mock Interview Practice",
    isAccessibleForFree: true,
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.fullBrand,
      url: SITE_CONFIG.url,
    },
  };

  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "9 Placement Tracks", path: "/tracks/" },
          { name: track.name, path: `/tracks/${track.slug}/` },
        ])}
      />
      <JsonLd data={learningResourceJsonLd} />
      {track.faqs.length > 0 && <JsonLd data={getFaqJsonLd(track.faqs)} />}

      {/* Header */}
      <section className="border-b border-border bg-dot-grid py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-xs font-semibold text-ink-subtle">
            <Link href="/" className="hover:text-brand-700">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/tracks/" className="hover:text-brand-700">
              9 Placement Tracks
            </Link>{" "}
            / <span className="text-ink">{track.shortName}</span>
          </nav>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-brand-50 px-3 py-1 font-mono text-xs font-bold uppercase text-brand-800">
              {track.category}
            </span>
            <span className="rounded-full bg-white px-3 py-1 font-mono text-xs font-semibold text-ink-muted ring-1 ring-border">
              Beginner • Intermediate • Advanced
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
            {track.name} Mock Interview
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {track.campusRelevance}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-ink-subtle">
              Frequently Asked By:
            </span>
            {track.targetCompanies.map((company) => (
              <span
                key={company}
                className="rounded-lg border border-border bg-white px-2.5 py-1 text-xs font-semibold text-ink"
              >
                {company}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#practice-now"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-700 px-5 py-3 text-sm font-bold text-white hover:bg-brand-800"
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Practice {track.shortName} Aloud Below
            </a>
            <a
              href={SITE_CONFIG.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-ink px-5 py-3 text-sm font-bold text-white hover:bg-slate-800"
            >
              Launch Full {track.shortName} Session on AcePrep
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* 3 Difficulty Tiers */}
      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-ink">
          3-Level {track.shortName} Placement Syllabus
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {[
            { level: "Beginner", badge: "bg-brand-50 text-brand-800", items: track.difficultyBreakdown.beginner },
            { level: "Intermediate", badge: "bg-saffron-50 text-saffron-700", items: track.difficultyBreakdown.intermediate },
            { level: "Advanced", badge: "bg-slate-100 text-ink", items: track.difficultyBreakdown.advanced },
          ].map((tier) => (
            <div key={tier.level} className="rounded-2xl border border-border bg-white p-6 shadow-soft">
              <span className={`inline-block rounded-md px-2.5 py-1 font-mono text-xs font-bold ${tier.badge}`}>
                {tier.level} Tier
              </span>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-muted">
                {tier.items.map((topic) => (
                  <li key={topic} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" aria-hidden="true" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Embedded Simulator Pre-Loaded to This Track */}
      <section id="practice-now" className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 lg:px-8">
        <MockInterviewSimulator initialTrackSlug={track.slug} compact />
      </section>

      {/* Sample Spoken Questions & Adaptive Follow-Ups */}
      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-ink">
          High-Frequency Spoken {track.shortName} Questions &amp; Rubric Criteria
        </h2>
        <p className="mt-2 text-sm text-ink-muted">
          Study how interviewers probe beyond definitions with adaptive follow-ups and what AcePrep&apos;s{" "}
          <Link href="/rubric/" className="font-semibold text-brand-700 hover:underline">
            0–10 scoring rubric
          </Link>{" "}
          checks in your spoken explanation.
        </p>

        <div className="mt-6 space-y-5">
          {track.questions.map((q, idx) => (
            <article
              key={q.id}
              className="rounded-2xl border border-border bg-white p-6 shadow-soft"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-bold text-brand-700">
                  QUESTION 0{idx + 1}
                </span>
                <span className="rounded-md bg-canvas px-2.5 py-0.5 font-mono text-xs font-semibold text-ink-muted ring-1 ring-border">
                  {q.difficulty}
                </span>
              </div>

              <h3 className="mt-3 text-lg font-extrabold text-ink">{q.question}</h3>

              <div className="mt-4 rounded-xl border border-saffron-500/30 bg-saffron-50 p-4">
                <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-saffron-700">
                  Adaptive Follow-Up Probe
                </div>
                <p className="mt-1 text-sm font-semibold text-ink">{q.adaptiveFollowUp}</p>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-ink-subtle">
                    What the Rubric Checks
                  </h4>
                  <ul className="mt-2 space-y-1.5 text-sm text-ink-muted">
                    {q.rubricFocus.map((pt) => (
                      <li key={pt}>• {pt}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-ink-subtle">
                    High-Scoring Answer Blueprint
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{q.sampleOutline}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQs */}
      {track.faqs.length > 0 && (
        <section className="mx-auto max-w-4xl px-4 pt-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-ink">
            {track.shortName} Interview FAQs
          </h2>
          <div className="mt-5">
            <FaqAccordion items={track.faqs} />
          </div>
        </section>
      )}

      {/* Related Tracks Internal Links */}
      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 lg:px-8">
        <h2 className="text-xl font-extrabold text-ink">Continue Practicing Related Tracks</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {relatedTracks.map((rel) => (
            <Link
              key={rel.slug}
              href={`/tracks/${rel.slug}/`}
              className="group rounded-2xl border border-border bg-white p-5 shadow-soft transition-colors hover:border-brand-600"
            >
              <span className="font-mono text-[11px] font-bold uppercase text-brand-700">
                {rel.category}
              </span>
              <h3 className="mt-1.5 text-base font-extrabold text-ink group-hover:text-brand-700">
                {rel.name}
              </h3>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-brand-700">
                Practice now <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
