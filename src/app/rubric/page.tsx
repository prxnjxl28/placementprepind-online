import Link from "next/link";
import { ArrowRight, Scale, CheckCircle2 } from "lucide-react";
import { RUBRIC_DIMENSIONS } from "@/data/platform";
import { buildPageMetadata, getBreadcrumbJsonLd } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";

export const metadata = buildPageMetadata({
  title: "Transparent 0–10 AI Interview Scoring Rubric & Methodology",
  description:
    "Inspect the open 0–10 scoring rubric powering PlacementPrep India and AcePrep: Technical Accuracy (or STAR Structure), Depth & Trade-Off Reasoning, Communication Clarity, and human-rater calibration.",
  path: "/rubric/",
  keywords: [
    "AI interview scoring rubric",
    "mock interview evaluation criteria",
    "STAR method grading rubric",
    "transparent LLM interview assessment",
  ],
});

const TARGET_METRICS = [
  { metric: "Human-Rater Correlation", target: "r ≥ 0.70", detail: "Two human raters score a 30+ answer calibration set to verify LLM rubric reliability." },
  { metric: "Schema Validation", target: "100% JSON", detail: "Every evaluation response is validated against a strict JSON schema for sub-scores and feedback." },
  { metric: "Bias Safeguard", target: "Paired Checks", detail: "Scoring prompts forbid using name, gender, or accent; paired surface-variation tests check consistency." },
  { metric: "Usability Target", target: "SUS ≥ 68", detail: "Measured via System Usability Scale questionnaire across pilot student cohorts." },
];

export default function RubricPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Scoring Rubric", path: "/rubric/" },
        ])}
      />

      <section className="border-b border-border bg-dot-grid py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-xs font-semibold text-ink-subtle">
            <Link href="/" className="hover:text-brand-700">
              Home
            </Link>{" "}
            / <span className="text-ink">Scoring Rubric</span>
          </nav>
          <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 font-mono text-xs font-bold text-brand-800">
            <Scale className="h-3.5 w-3.5" aria-hidden="true" />
            OPEN, CALIBRATED ASSESSMENT STANDARD
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
            How PlacementPrep India Scores Spoken Answers (0–10 Rubric)
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Unlike black-box interview tools or unstructured chat prompts, AcePrep evaluates every
            answer against three explicit, schema-validated dimensions with Low, Medium, and High
            anchors per domain. Scores are strictly formative coaching feedback — never automated
            hiring decisions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {RUBRIC_DIMENSIONS.map((dim, idx) => (
            <article
              key={dim.name}
              className="rounded-2xl border border-border bg-white p-6 shadow-soft sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="font-mono text-xs font-bold text-brand-700">
                    DIMENSION 0{idx + 1} • {dim.weight.toUpperCase()}
                  </span>
                  <h2 className="mt-1 text-2xl font-extrabold text-ink">{dim.name}</h2>
                  <p className="text-xs font-semibold text-saffron-700">
                    HR Track Equivalent: {dim.hrVariant}
                  </p>
                </div>
                <span className="rounded-xl bg-brand-700 px-4 py-2 font-mono text-sm font-extrabold text-white">
                  Scale: {dim.scale}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-ink-muted">{dim.description}</p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-red-200 bg-red-50/50 p-4">
                  <div className="font-mono text-xs font-bold text-red-800">LOW ANCHOR</div>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">{dim.anchors.low}</p>
                </div>
                <div className="rounded-xl border border-saffron-500/30 bg-saffron-50 p-4">
                  <div className="font-mono text-xs font-bold text-saffron-700">MEDIUM ANCHOR</div>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">{dim.anchors.medium}</p>
                </div>
                <div className="rounded-xl border border-brand-200 bg-brand-50 p-4">
                  <div className="font-mono text-xs font-bold text-brand-800">HIGH ANCHOR</div>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">{dim.anchors.high}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <h2 className="text-2xl font-extrabold text-ink">
            Calibration, Fairness &amp; Quality Verification
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {TARGET_METRICS.map((m) => (
              <div key={m.metric} className="rounded-2xl border border-border bg-white p-5 shadow-soft">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-extrabold text-ink">{m.metric}</h3>
                  <span className="rounded-lg bg-brand-50 px-2.5 py-1 font-mono text-xs font-bold text-brand-800">
                    {m.target}
                  </span>
                </div>
                <p className="mt-2 text-sm text-ink-muted">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-white p-6">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 text-brand-700" aria-hidden="true" />
            <p className="text-sm font-semibold text-ink">
              Ready to see this rubric score your spoken answer live?
            </p>
          </div>
          <Link
            href="/mock-interview/"
            className="inline-flex items-center gap-1.5 rounded-xl bg-brand-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-800"
          >
            Try the Simulator <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
