import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Mic,
  FileSearch,
  Scale,
  ShieldCheck,
  Clock,
  Sparkles,
  CheckCircle2,
  BookOpen,
  Layers,
} from "lucide-react";
import { INTERVIEW_TRACKS } from "@/data/tracks";
import { PREP_GUIDES } from "@/data/guides";
import { COMPARISON_ROWS, HOME_FAQS } from "@/data/platform";
import {
  SITE_CONFIG,
  buildPageMetadata,
  getFaqJsonLd,
  getSoftwareApplicationJsonLd,
} from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { FaqAccordion } from "@/components/FaqAccordion";
import { MockInterviewSimulator } from "@/components/MockInterviewSimulator";

export const metadata = buildPageMetadata({
  title: "PlacementPrep India — Free Voice AI Mock Interviews | Powered by AcePrep",
  description:
    "Crack Indian campus placements with free spoken AI mock interviews on PlacementPrep India, powered by AcePrep. 9 CS & HR tracks, resume-aware follow-ups, and a transparent 0–10 rubric.",
  path: "/",
  keywords: [
    "free AI mock interview India",
    "campus placement preparation website",
    "voice mock interview for B.Tech students",
    "AcePrep placementprepind",
  ],
});

const KEY_STATS = [
  { value: "9 Tracks", label: "DSA, OS, CN, DBMS, Web, React, JS, Security & HR" },
  { value: "~520 ms", label: "Measured mean LLM latency (Groq Llama 3.3 70B)" },
  { value: "0–10", label: "Schema-validated rubric (Accuracy, Depth, Clarity)" },
  { value: "₹0 Free", label: "Browser-only practice with typed-answer fallback" },
];

const THREE_GAPS = [
  {
    title: "1. The Feedback Gap",
    problem: "Peer mocks depend on partner schedules and deliver subjective, uneven advice.",
    solution:
      "Every answer is scored immediately against a fixed, published 0–10 rubric with specific strengths, conceptual gaps, and a full searchable transcript.",
  },
  {
    title: "2. The Access Gap",
    problem: "Paid human mock interviews cost tens to hundreds of US dollars per session — out of reach for most college students.",
    solution:
      "Browser speech APIs + ultra-fast Groq inference keep measured compute under US$0.011 per 5-question interview, making 24/7 rehearsal free for students.",
  },
  {
    title: "3. The Modality Gap",
    problem: "Coding platforms test silent written code, not explaining trade-offs aloud, handling follow-up probing, or structuring STAR stories.",
    solution:
      "Speak naturally in Chrome or Safari (desktop & mobile) with continuous speech capture, neural voice prompts, and adaptive follow-up questions.",
  },
];

const INTERVIEW_STEPS = [
  {
    step: "01",
    title: "Choose Track & Difficulty",
    desc: "Select from 9 Indian campus-placement tracks and 3 difficulty tiers (Beginner, Intermediate, Advanced).",
  },
  {
    step: "02",
    title: "Optional Resume Upload",
    desc: "Upload PDF, DOCX, or scanned image resumes. Parsed in server memory only (never written to disk) so you confirm extracted skills.",
  },
  {
    step: "03",
    title: "Spoken Question + Live Captions",
    desc: "Questions are read aloud via low-latency neural voice (ElevenLabs Flash v2.5) with free browser SpeechSynthesis fallback and live captions.",
  },
  {
    step: "04",
    title: "Answer by Voice or Keyboard",
    desc: "Continuous browser Web Speech API captures long answers (60s+) with auto-restart, or switch anytime to typed-answer mode.",
  },
  {
    step: "05",
    title: "Adaptive Follow-Up Probing",
    desc: "The AI evaluates your transcript against the rubric and asks targeted follow-ups referencing both your answer and your resume.",
  },
  {
    step: "06",
    title: "Diagnostic Report & Transcript",
    desc: "Review sub-scores, strengths, weaknesses, suggested practice topics, full transcript, and non-punitive focus-event summary.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={getSoftwareApplicationJsonLd()} />
      <JsonLd data={getFaqJsonLd([...HOME_FAQS])} />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-border bg-dot-grid">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-bold text-brand-800">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              <span>PLACEMENTPREP INDIA • POWERED BY ACEPREP</span>
              <span className="hidden text-brand-600 sm:inline">•</span>
              <span className="hidden sm:inline">Built for Indian Campus Placements</span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Master Spoken Technical &amp; HR Interviews{" "}
              <span className="text-brand-700">Before Placement Day</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              Coding puzzles train silent typing. Real campus interviews test thinking aloud under
              pressure. Practice autonomous <strong>voice-based AI mock interviews</strong> across 9
              CS &amp; HR tracks with resume-aware follow-ups and a transparent 0–10 scoring rubric —
              free in your browser.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <Link
                href="/mock-interview/"
                className="inline-flex items-center gap-2 rounded-2xl bg-brand-700 px-6 py-3.5 text-sm font-bold text-white shadow-soft transition-colors hover:bg-brand-800 sm:text-base"
              >
                <Mic className="h-4 w-4" aria-hidden="true" />
                Try Free Mock Simulator
              </Link>
              <a
                href={SITE_CONFIG.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-ink bg-ink px-6 py-3.5 text-sm font-bold text-white shadow-soft transition-colors hover:bg-slate-800 sm:text-base"
              >
                Launch Full AcePrep App
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                href="/tracks/"
                className="inline-flex items-center gap-1.5 rounded-2xl border border-border bg-white px-5 py-3.5 text-sm font-bold text-ink transition-colors hover:border-brand-600 hover:text-brand-700 sm:text-base"
              >
                Browse 9 Tracks
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Metrics Strip */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {KEY_STATS.map((stat) => (
              <div
                key={stat.value}
                className="rounded-2xl border border-border bg-white p-5 shadow-soft"
              >
                <div className="font-mono text-2xl font-extrabold text-brand-700">
                  {stat.value}
                </div>
                <p className="mt-1.5 text-xs font-medium leading-relaxed text-ink-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE LIVE DEMO RIGHT ON HOME */}
      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 lg:px-8" aria-labelledby="demo-heading">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-brand-700">
              HANDS-ON PREVIEW
            </p>
            <h2 id="demo-heading" className="mt-1 text-2xl font-extrabold text-ink sm:text-3xl">
              Test Your Spoken Clarity in 60 Seconds
            </h2>
          </div>
          <Link
            href="/mock-interview/"
            className="inline-flex items-center gap-1 text-sm font-bold text-brand-700 hover:underline"
          >
            Open full-screen simulator <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <MockInterviewSimulator compact />
      </section>

      {/* THE THREE GAPS (FROM PDF SECTION 1.1) */}
      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8" aria-labelledby="gaps-heading">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-bold uppercase tracking-wider text-brand-700">
            WHY PLACEMENTPREP INDIA EXISTS
          </p>
          <h2 id="gaps-heading" className="mt-2 text-3xl font-extrabold tracking-tight text-ink">
            Closing the Feedback, Access &amp; Modality Gaps in Campus Hiring
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-muted">
            Thinking aloud under interview pressure improves mainly through repetition with honest,
            structured feedback. AcePrep makes that loop free, mobile-friendly, and transparent.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {THREE_GAPS.map((gap) => (
            <article
              key={gap.title}
              className="flex flex-col justify-between rounded-2xl border border-border bg-white p-6 shadow-soft"
            >
              <div>
                <h3 className="text-lg font-extrabold text-ink">{gap.title}</h3>
                <p className="mt-3 rounded-xl bg-canvas p-3.5 text-sm leading-relaxed text-ink-muted">
                  <strong className="text-ink">The Gap:</strong> {gap.problem}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  <strong className="text-brand-800">AcePrep Solution:</strong> {gap.solution}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 9 BUILT-IN DOMAIN TRACKS HUB */}
      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8" aria-labelledby="tracks-heading">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-brand-700">
              9 BUILT-IN PLACEMENT DOMAINS
            </p>
            <h2 id="tracks-heading" className="mt-2 text-3xl font-extrabold tracking-tight text-ink">
              Dedicated Technical &amp; HR Interview Tracks
            </h2>
            <p className="mt-2 text-base text-ink-muted">
              Each track includes Beginner, Intermediate, and Advanced difficulty levels, adaptive
              follow-up questions, and domain-anchored scoring criteria.
            </p>
          </div>
          <Link
            href="/tracks/"
            className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-white px-4 py-2.5 text-sm font-bold text-ink hover:border-brand-600 hover:text-brand-700"
          >
            View All 9 Tracks
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INTERVIEW_TRACKS.map((track) => (
            <Link
              key={track.slug}
              href={`/tracks/${track.slug}/`}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-600"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-md bg-brand-50 px-2.5 py-1 font-mono text-[11px] font-bold uppercase text-brand-800">
                    {track.category}
                  </span>
                  <span className="font-mono text-xs text-ink-subtle">3 Levels</span>
                </div>
                <h3 className="mt-3 text-lg font-extrabold text-ink group-hover:text-brand-700">
                  {track.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{track.tagline}</p>
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs font-bold text-brand-700">
                <span>Practice {track.shortName} Questions</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS — 6-STEP FLOW */}
      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8" aria-labelledby="flow-heading">
        <div className="rounded-3xl border border-border bg-white p-6 shadow-card sm:p-10">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-brand-700">
              AUTONOMOUS INTERVIEW PIPELINE
            </p>
            <h2 id="flow-heading" className="mt-2 text-3xl font-extrabold tracking-tight text-ink">
              How an AcePrep Voice Mock Interview Works
            </h2>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INTERVIEW_STEPS.map((item) => (
              <div key={item.step} className="rounded-2xl border border-border bg-canvas p-5">
                <span className="font-mono text-xs font-extrabold text-brand-700">
                  STEP {item.step}
                </span>
                <h3 className="mt-2 text-base font-extrabold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 border-t border-border pt-8 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <FileSearch className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-bold text-ink">In-Memory Resume OCR</h3>
                <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                  PDF, DOCX &amp; scanned resumes parsed via pdf-parse, mammoth &amp; Tesseract.js without writing raw files to disk.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Scale className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-bold text-ink">Transparent 0–10 Rubric</h3>
                <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                  Few-shot anchored scoring with JSON schema validation and human-rater calibration (target r ≥ 0.7).
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-bold text-ink">DPDP Act 2023 Aligned</h3>
                <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                  Zero audio or video stored. Transcripts stay deletable by the student at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON MATRIX SNAPSHOT */}
      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8" aria-labelledby="compare-heading">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-brand-700">
              COMPETITIVE GAP ANALYSIS
            </p>
            <h2 id="compare-heading" className="mt-2 text-3xl font-extrabold tracking-tight text-ink">
              How PlacementPrep India Compares to Other Prep Tools
            </h2>
          </div>
          <Link
            href="/compare/"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:underline"
          >
            Read full platform comparison <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-white shadow-soft">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-canvas text-xs font-bold uppercase tracking-wider text-ink-subtle">
                <th className="px-4 py-3.5">Dimension</th>
                <th className="px-4 py-3.5">Coding Platforms</th>
                <th className="px-4 py-3.5">Peer Mocks</th>
                <th className="px-4 py-3.5">Expert Services</th>
                <th className="px-4 py-3.5">General AI</th>
                <th className="bg-brand-50 px-4 py-3.5 text-brand-900">
                  PlacementPrep (AcePrep)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {COMPARISON_ROWS.slice(0, 6).map((row) => (
                <tr key={row.dimension}>
                  <td className="px-4 py-3.5 font-bold text-ink">{row.dimension}</td>
                  <td className="px-4 py-3.5 text-ink-muted">{row.leetcode}</td>
                  <td className="px-4 py-3.5 text-ink-muted">{row.peer}</td>
                  <td className="px-4 py-3.5 text-ink-muted">{row.expert}</td>
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
      </section>

      {/* PLACEMENT PREP GUIDES (EDITORIAL SEO SILO) */}
      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8" aria-labelledby="guides-heading">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-brand-700">
              CAMPUS PLACEMENT PLAYBOOKS
            </p>
            <h2 id="guides-heading" className="mt-2 text-3xl font-extrabold tracking-tight text-ink">
              In-Depth Interview Preparation Guides
            </h2>
          </div>
          <Link
            href="/guides/"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:underline"
          >
            All guides <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {PREP_GUIDES.slice(0, 3).map((guide) => (
            <article
              key={guide.slug}
              className="flex flex-col justify-between rounded-2xl border border-border bg-white p-6 shadow-soft"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-ink-subtle">
                  <BookOpen className="h-3.5 w-3.5 text-brand-700" aria-hidden="true" />
                  <span>{guide.category}</span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" aria-hidden="true" />
                    {guide.readingTime}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-extrabold leading-snug text-ink">
                  <Link href={`/guides/${guide.slug}/`} className="hover:text-brand-700">
                    {guide.title}
                  </Link>
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">{guide.excerpt}</p>
              </div>
              <Link
                href={`/guides/${guide.slug}/`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:underline"
              >
                Read guide <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="mx-auto max-w-4xl px-4 pt-20 sm:px-6 lg:px-8" aria-labelledby="faq-heading">
        <div className="text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-wider text-brand-700">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 id="faq-heading" className="mt-2 text-3xl font-extrabold tracking-tight text-ink">
            Everything Students &amp; Placement Cells Ask
          </h2>
        </div>
        <div className="mt-8">
          <FaqAccordion items={HOME_FAQS} />
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-ink px-6 py-12 text-center text-white shadow-card sm:px-12 sm:py-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 font-mono text-xs font-semibold text-brand-200">
            <Layers className="h-3.5 w-3.5" aria-hidden="true" />
            121 AUTOMATED TESTS • LIVE PROTOTYPE READY
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ready to Practice Your Next Placement Interview Aloud?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Start right here with our browser simulator or launch the full AcePrep platform for
            resume OCR parsing, Groq Llama 3.3 70B adaptive interviews, and saved diagnostic reports.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={SITE_CONFIG.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-brand-500 px-6 py-3.5 text-sm font-bold text-ink transition-colors hover:bg-brand-200"
            >
              Launch AcePrep Prototype
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              href="/rubric/"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Inspect the 0–10 Scoring Rubric
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
