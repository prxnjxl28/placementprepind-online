import Link from "next/link";
import { Mic, ArrowUpRight, ShieldCheck } from "lucide-react";
import { INTERVIEW_TRACKS } from "@/data/tracks";
import { PREP_GUIDES } from "@/data/guides";
import { SITE_CONFIG } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-700 text-white">
                <Mic className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-base font-extrabold text-ink">
                  PlacementPrep <span className="text-brand-700">India</span>
                </span>
                <span className="font-mono text-[11px] text-ink-subtle">
                  Powered by AcePrep
                </span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-ink-muted">
              Free, browser-based voice AI mock interviews with adaptive resume-aware follow-ups and a
              transparent 0–10 rubric built for Indian campus placements.
            </p>
            <div className="inline-flex items-center gap-2 rounded-lg border border-brand-200 bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-800">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              DPDP Act 2023 Privacy-First • Zero Audio Stored
            </div>
          </div>

          {/* 9 Interview Tracks Silo */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-ink">
              9 Placement Tracks
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {INTERVIEW_TRACKS.map((track) => (
                <li key={track.slug}>
                  <Link
                    href={`/tracks/${track.slug}/`}
                    className="text-ink-muted transition-colors hover:text-brand-700"
                  >
                    {track.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Prep Guides Silo */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-ink">
              Placement Guides
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {PREP_GUIDES.map((guide) => (
                <li key={guide.slug}>
                  <Link
                    href={`/guides/${guide.slug}/`}
                    className="text-ink-muted transition-colors hover:text-brand-700"
                  >
                    {guide.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform & Links */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-ink">
              Platform &amp; Capstone
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/mock-interview/" className="text-ink-muted hover:text-brand-700">
                  Free Voice &amp; Text Simulator
                </Link>
              </li>
              <li>
                <Link href="/rubric/" className="text-ink-muted hover:text-brand-700">
                  0–10 Scoring Rubric
                </Link>
              </li>
              <li>
                <Link href="/compare/" className="text-ink-muted hover:text-brand-700">
                  Compare Platforms
                </Link>
              </li>
              <li>
                <Link href="/about/" className="text-ink-muted hover:text-brand-700">
                  About AcePrep &amp; Team
                </Link>
              </li>
              <li>
                <Link href="/privacy/" className="text-ink-muted hover:text-brand-700">
                  Privacy &amp; DPDP Act 2023
                </Link>
              </li>
              <li className="pt-1">
                <a
                  href={SITE_CONFIG.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-brand-700 hover:underline"
                >
                  Live AcePrep Prototype
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-ink-muted hover:text-brand-700"
                >
                  GitHub Repository
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-ink-subtle sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} PlacementPrep India ({SITE_CONFIG.domain}) • Powered by{" "}
            <strong>AcePrep</strong> B.Tech CSE Capstone Project (Arshit Anand, Pranjal Kumar, Sumit Yadav).
          </p>
          <p>
            Scores are formative coaching feedback, not automated hiring decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
