import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpen, CheckCircle2, Clock } from "lucide-react";
import { PREP_GUIDES, getGuideBySlug } from "@/data/guides";
import { getTrackBySlug } from "@/data/tracks";
import {
  SITE_CONFIG,
  absoluteUrl,
  buildPageMetadata,
  getBreadcrumbJsonLd,
} from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return PREP_GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return buildPageMetadata({
    title: guide.seoTitle,
    description: guide.seoDescription,
    path: `/guides/${guide.slug}/`,
    keywords: guide.keywords,
    type: "article",
    publishedTime: guide.publishedAt,
  });
}

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const relatedTracks = guide.relatedTrackSlugs
    .map((s) => getTrackBySlug(s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.seoDescription,
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    inLanguage: "en-IN",
    mainEntityOfPage: absoluteUrl(`/guides/${guide.slug}/`),
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.fullBrand,
      url: SITE_CONFIG.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}/icon.svg`,
      },
    },
  };

  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Prep Guides", path: "/guides/" },
          { name: guide.shortTitle, path: `/guides/${guide.slug}/` },
        ])}
      />
      <JsonLd data={articleJsonLd} />

      <article className="mx-auto max-w-4xl px-4 pb-12 pt-12 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-xs font-semibold text-ink-subtle">
          <Link href="/" className="hover:text-brand-700">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/guides/" className="hover:text-brand-700">
            Prep Guides
          </Link>{" "}
          / <span className="text-ink">{guide.shortTitle}</span>
        </nav>

        <header className="mt-5 border-b border-border pb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-ink-subtle">
            <span className="inline-flex items-center gap-1 rounded-md bg-brand-50 px-2.5 py-1 font-mono text-brand-800">
              <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
              {guide.category}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {guide.readingTime}
            </span>
            <time dateTime={guide.updatedAt}>Updated {guide.updatedAt}</time>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            {guide.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            {guide.excerpt}
          </p>
        </header>

        {/* Key Takeaways */}
        <aside className="mt-8 rounded-2xl border border-brand-200 bg-brand-50/70 p-6">
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-brand-800">
            Key Takeaways
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-ink">
            {guide.keyTakeaways.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Sections */}
        <div className="mt-10 space-y-10">
          {guide.sections.map((sec) => (
            <section key={sec.heading}>
              <h2 className="text-2xl font-extrabold text-ink">{sec.heading}</h2>
              <div className="mt-3 space-y-4 text-base leading-relaxed text-ink-muted">
                {sec.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              {sec.bullets && (
                <ul className="mt-4 space-y-2.5 rounded-2xl border border-border bg-white p-5 text-sm leading-relaxed text-ink-muted">
                  {sec.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-700" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Related Practice Tracks */}
        {relatedTracks.length > 0 && (
          <section className="mt-14 border-t border-border pt-10">
            <h2 className="text-xl font-extrabold text-ink">
              Put This Guide Into Spoken Practice
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {relatedTracks.map((track) => (
                <Link
                  key={track.slug}
                  href={`/tracks/${track.slug}/`}
                  className="group flex items-center justify-between rounded-2xl border border-border bg-white p-4 shadow-soft hover:border-brand-600"
                >
                  <div>
                    <span className="font-mono text-[11px] font-bold uppercase text-brand-700">
                      {track.category}
                    </span>
                    <div className="font-extrabold text-ink group-hover:text-brand-700">
                      {track.name}
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-brand-700" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
