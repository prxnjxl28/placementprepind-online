import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { PREP_GUIDES } from "@/data/guides";
import { buildPageMetadata, getBreadcrumbJsonLd } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";

export const metadata = buildPageMetadata({
  title: "Indian Campus Placement & Technical Interview Preparation Guides",
  description:
    "Read actionable guides on cracking Indian campus placements: speaking DSA aloud, mastering the STAR method for HR rounds, resume project grilling, and comparing mock interview platforms.",
  path: "/guides/",
  keywords: [
    "campus placement preparation guides India",
    "interview tips for B.Tech freshers",
    "STAR method guide India",
  ],
});

export default function GuidesIndexPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Placement Prep Guides", path: "/guides/" },
        ])}
      />

      <section className="border-b border-border bg-dot-grid py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-xs font-semibold text-ink-subtle">
            <Link href="/" className="hover:text-brand-700">
              Home
            </Link>{" "}
            / <span className="text-ink">Prep Guides</span>
          </nav>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Campus Placement &amp; Spoken Interview Guides
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-muted">
            Research-backed playbooks written for Indian engineering students preparing for technical
            and HR rounds across product companies, startups, and campus placement drives.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {PREP_GUIDES.map((guide) => (
            <article
              key={guide.slug}
              className="flex flex-col justify-between rounded-2xl border border-border bg-white p-6 shadow-soft"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-ink-subtle">
                  <span className="inline-flex items-center gap-1 rounded-md bg-brand-50 px-2.5 py-0.5 font-mono text-brand-800">
                    <BookOpen className="h-3 w-3" aria-hidden="true" />
                    {guide.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" aria-hidden="true" />
                    {guide.readingTime}
                  </span>
                  <span>• Updated {guide.updatedAt}</span>
                </div>
                <h2 className="mt-3 text-xl font-extrabold leading-snug text-ink">
                  <Link href={`/guides/${guide.slug}/`} className="hover:text-brand-700">
                    {guide.title}
                  </Link>
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">{guide.excerpt}</p>
              </div>
              <Link
                href={`/guides/${guide.slug}/`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:underline"
              >
                Read Full Guide <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
