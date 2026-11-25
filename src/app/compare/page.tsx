import Link from "next/link";
import { CheckCircle2, ArrowRight, ArrowUpRight } from "lucide-react";
import { COMPARISON_ROWS } from "@/data/platform";
import {
  SITE_CONFIG,
  buildPageMetadata,
  getBreadcrumbJsonLd,
} from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";

export const metadata = buildPageMetadata({
  title: "Compare AI Mock Interview Platforms in India: AcePrep vs Alternatives",
  description:
    "Side-by-side comparison of PlacementPrep India (AcePrep) against LeetCode, Pramp, Interviewing.io, Exponent, Final Round AI, Yoodli, and ChatGPT across cost, rubric, voice, and resume awareness.",
  path: "/compare/",
  keywords: [
    "best AI mock interview platform India",
    "AcePrep vs Pramp vs LeetCode",
    "free alternative to Interviewing.io and Final Round AI",
  ],
});

const CATEGORIES = [
  {
    name: "Coding Practice Platforms (e.g. LeetCode, HackerRank)",
    strengths: "Excellent for written problem solving and automated test-case grading.",
    gaps: "Do not assess spoken trade-off explanation, follow-up probing, or behavioural STAR stories.",
  },
  {
    name: "Peer Matching Platforms (e.g. Pramp)",
    strengths: "Free matching and realistic human social interaction.",
    gaps: "Scheduling friction, inconsistent partner technical level, and subjective feedback without a rubric.",
  },
  {
    name: "Human Expert Services (e.g. Interviewing.io, Exponent)",
    strengths: "High-signal feedback from experienced industry interviewers.",
    gaps: "Priced in tens to hundreds of US dollars per session with booking lead times — unaffordable for daily fresher rehearsal.",
  },
  {
    name: "Consumer AI Interview Tools (e.g. Final Round AI, Big Interview, Yoodli, Interview Warmup)",
    strengths: "AI-driven question practice with varying voice and resume features.",
    gaps: "Often subscription-gated or focused on general business interviews rather than an open technical-domain rubric tuned to Indian campus placements.",
  },
  {
    name: "General-Purpose Assistants (e.g. ChatGPT, Claude)",
    strengths: "Highly flexible and offer conversational voice modes.",
    gaps: "No built-in fixed scoring rubric, schema-validated diagnostic reports, session transcripts, or focus-event logging out of the box.",
  },
];

export default function ComparePage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Platform Comparison", path: "/compare/" },
        ])}
      />

      <section className="border-b border-border bg-dot-grid py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-xs font-semibold text-ink-subtle">
            <Link href="/" className="hover:text-brand-700">
              Home
            </Link>{" "}
            / <span className="text-ink">Platform Comparison</span>
          </nav>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
            PlacementPrep India (AcePrep) vs. Existing Interview Tools
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-muted">
            The gap is not that AI mock interviews do not exist — it is that there is no free,
            rubric-driven, domain-specific spoken interview platform built specifically for Indian
            campus-placement preparation that works on mobile browsers and returns a transparent,
            transcript-linked diagnostic report.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="overflow-x-auto rounded-2xl border border-border bg-white shadow-soft">
          <table className="w-full min-w-[920px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-canvas text-xs font-bold uppercase tracking-wider text-ink-subtle">
                <th className="px-4 py-4">Dimension</th>
                <th className="px-4 py-4">Coding Platforms</th>
                <th className="px-4 py-4">Peer Platforms</th>
                <th className="px-4 py-4">Human Experts</th>
                <th className="px-4 py-4">Consumer AI Tools</th>
                <th className="px-4 py-4">General Assistants</th>
                <th className="bg-brand-50 px-4 py-4 text-brand-900">
                  PlacementPrep (AcePrep)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {COMPARISON_ROWS.map((row) => (
                <tr key={row.dimension}>
                  <td className="px-4 py-3.5 font-bold text-ink">{row.dimension}</td>
                  <td className="px-4 py-3.5 text-ink-muted">{row.leetcode}</td>
                  <td className="px-4 py-3.5 text-ink-muted">{row.peer}</td>
                  <td className="px-4 py-3.5 text-ink-muted">{row.expert}</td>
                  <td className="px-4 py-3.5 text-ink-muted">{row.consumerAi}</td>
                  <td className="px-4 py-3.5 text-ink-muted">{row.generalAi}</td>
                  <td className="bg-brand-50/50 px-4 py-3.5 font-semibold text-brand-900">
                    <span className="inline-flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-700" aria-hidden="true" />
                      {row.aceprep}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-ink-subtle">
          Note: Feature descriptions are summarized from public product documentation in our
          Milestone-1 literature review. Third-party pricing and features evolve; check each
          provider&apos;s website for current details.
        </p>

        <div className="mt-14">
          <h2 className="text-2xl font-extrabold text-ink">
            Category-by-Category Literature &amp; Gap Review
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {CATEGORIES.map((cat) => (
              <article key={cat.name} className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                <h3 className="text-base font-extrabold text-ink">{cat.name}</h3>
                <p className="mt-2.5 text-sm text-ink-muted">
                  <strong className="text-brand-800">Strengths:</strong> {cat.strengths}
                </p>
                <p className="mt-2 text-sm text-ink-muted">
                  <strong className="text-ink">Key Gap:</strong> {cat.gaps}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/mock-interview/"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-700 px-6 py-3 text-sm font-bold text-white hover:bg-brand-800"
          >
            Try Free Simulator Now <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href={SITE_CONFIG.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-ink px-6 py-3 text-sm font-bold text-white hover:bg-slate-800"
          >
            Launch AcePrep Prototype <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}
