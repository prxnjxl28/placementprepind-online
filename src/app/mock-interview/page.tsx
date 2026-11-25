import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Mic, Keyboard } from "lucide-react";
import {
  SITE_CONFIG,
  buildPageMetadata,
  getBreadcrumbJsonLd,
} from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { MockInterviewSimulator } from "@/components/MockInterviewSimulator";

export const metadata = buildPageMetadata({
  title: "Free Online Voice & Text AI Mock Interview Simulator",
  description:
    "Run a free browser-based spoken or typed mock interview right now on PlacementPrep India. Supports Indian English (en-IN) speech recognition, live audio prompts, and instant 0–10 rubric feedback.",
  path: "/mock-interview/",
  keywords: [
    "free online mock interview simulator",
    "voice AI mock interview browser",
    "practice technical interview aloud free",
  ],
});

export default function MockInterviewPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Free Mock Simulator", path: "/mock-interview/" },
        ])}
      />

      <section className="border-b border-border bg-dot-grid py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-xs font-semibold text-ink-subtle">
            <Link href="/" className="hover:text-brand-700">
              Home
            </Link>{" "}
            / <span className="text-ink">Free Mock Simulator</span>
          </nav>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Free Voice &amp; Text Mock Interview Simulator
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink-muted">
            Practice thinking aloud across all 9 campus-placement domains right in your browser.
            Uses the Browser Web Speech API with automatic silence-restart and a full keyboard-only
            typed fallback mode.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-2.5 rounded-xl border border-border bg-white px-4 py-3 text-xs font-semibold text-ink">
              <Mic className="h-4 w-4 shrink-0 text-brand-700" aria-hidden="true" />
              Chrome &amp; Safari en-IN Speech Capture
            </div>
            <div className="flex items-center gap-2.5 rounded-xl border border-border bg-white px-4 py-3 text-xs font-semibold text-ink">
              <Keyboard className="h-4 w-4 shrink-0 text-brand-700" aria-hidden="true" />
              100% Keyboard Typed-Answer Fallback
            </div>
            <div className="flex items-center gap-2.5 rounded-xl border border-border bg-white px-4 py-3 text-xs font-semibold text-ink">
              <ShieldCheck className="h-4 w-4 shrink-0 text-brand-700" aria-hidden="true" />
              Zero Audio Recorded or Stored
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-8">
        <MockInterviewSimulator />

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-brand-200 bg-brand-50 p-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-lg font-extrabold text-brand-900">
              Want full PDF/DOCX/OCR resume parsing &amp; Groq Llama 3.3 70B scoring?
            </h2>
            <p className="mt-1 text-sm text-brand-800">
              Launch the authenticated AcePrep prototype for multi-turn neural voice interviews,
              saved session transcripts, and progress history.
            </p>
          </div>
          <a
            href={SITE_CONFIG.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-brand-700 px-5 py-3 text-sm font-bold text-white hover:bg-brand-800"
          >
            Open AcePrep App
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}
