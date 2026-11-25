import Link from "next/link";
import { ArrowUpRight, Cpu, Globe2, GraduationCap, Milestone } from "lucide-react";
import {
  ROADMAP_MILESTONES,
  SDG_ALIGNMENT,
  TECH_STACK,
} from "@/data/platform";
import {
  SITE_CONFIG,
  buildPageMetadata,
  getBreadcrumbJsonLd,
} from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";

export const metadata = buildPageMetadata({
  title: "About PlacementPrep India & AcePrep Architecture",
  description:
    "Meet the B.Tech CSE capstone team behind PlacementPrep India and AcePrep. Explore the 3-tier voice AI architecture, Groq & ElevenLabs benchmarks, UN SDG alignment, and Milestones 1–4 roadmap.",
  path: "/about/",
  keywords: [
    "AcePrep B.Tech capstone project",
    "voice AI mock interview architecture",
    "Groq Llama 3.3 mock interview",
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About AcePrep", path: "/about/" },
        ])}
      />

      <section className="border-b border-border bg-dot-grid py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-xs font-semibold text-ink-subtle">
            <Link href="/" className="hover:text-brand-700">
              Home
            </Link>{" "}
            / <span className="text-ink">About</span>
          </nav>
          <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 font-mono text-xs font-bold text-brand-800">
            <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
            B.TECH CSE FINAL YEAR CAPSTONE PROJECT
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
            About PlacementPrep India (Powered by AcePrep)
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-muted">
            PlacementPrep India is the public search-optimized platform for <strong>AcePrep</strong>:
            an autonomous voice-based AI mock interview and diagnostic assessment platform designed to
            make realistic spoken technical and HR practice free, transparent, and accessible across
            Indian campuses.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={SITE_CONFIG.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-brand-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-800"
            >
              Live AcePrep Prototype <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={SITE_CONFIG.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-white px-5 py-2.5 text-sm font-bold text-ink hover:border-brand-600"
            >
              Source Repository on GitHub <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-ink">Project Team &amp; Contributions</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {SITE_CONFIG.team.map((member) => (
            <article key={member.enrollment} className="rounded-2xl border border-border bg-white p-6 shadow-soft">
              <span className="font-mono text-xs font-bold uppercase text-brand-700">
                {member.enrollment}
              </span>
              <h3 className="mt-1.5 text-lg font-extrabold text-ink">{member.name}</h3>
              <p className="text-xs font-bold text-ink-muted">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{member.contribution}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Architecture & Tech Stack */}
      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Cpu className="h-5 w-5 text-brand-700" aria-hidden="true" />
          <h2 className="text-2xl font-extrabold text-ink">
            Three-Tier Architecture &amp; Technology Choices
          </h2>
        </div>
        <p className="mt-2 max-w-3xl text-sm text-ink-muted">
          Measured in our live prototype (121 automated tests): LLM latency averages ~520 ms
          (380–680 ms range) and direct compute cost is US$0.007–US$0.011 per complete 5-question
          interview — well under the US$0.05 target.
        </p>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-white shadow-soft">
          <table className="w-full min-w-[680px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-canvas text-xs font-bold uppercase tracking-wider text-ink-subtle">
                <th className="px-4 py-3.5">Layer</th>
                <th className="px-4 py-3.5">Technology Choice</th>
                <th className="px-4 py-3.5">Engineering Justification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {TECH_STACK.map((row) => (
                <tr key={row.layer}>
                  <td className="px-4 py-3.5 font-bold text-ink">{row.layer}</td>
                  <td className="px-4 py-3.5 font-mono text-xs font-semibold text-brand-800">
                    {row.choice}
                  </td>
                  <td className="px-4 py-3.5 text-ink-muted">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Globe2 className="h-5 w-5 text-brand-700" aria-hidden="true" />
          <h2 className="text-2xl font-extrabold text-ink">
            UN Sustainable Development Goals (SDG) Alignment
          </h2>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {SDG_ALIGNMENT.map((item) => (
            <article key={item.sdg} className="rounded-2xl border border-border bg-white p-6 shadow-soft">
              <span className="rounded-md bg-brand-50 px-2.5 py-1 font-mono text-xs font-bold text-brand-800">
                {item.sdg}
              </span>
              <h3 className="mt-3 text-base font-extrabold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.contribution}</p>
              <p className="mt-3 border-t border-border pt-3 text-xs text-ink-subtle">
                <strong>Evidenced by:</strong> {item.evidence}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Milestone className="h-5 w-5 text-brand-700" aria-hidden="true" />
          <h2 className="text-2xl font-extrabold text-ink">Capstone Roadmap (2026 – 2027)</h2>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {ROADMAP_MILESTONES.map((m) => (
            <div key={m.milestone} className="rounded-2xl border border-border bg-white p-6 shadow-soft">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold text-brand-700">
                  {m.milestone} • {m.date}
                </span>
                <span
                  className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] font-bold ${
                    m.status === "Completed"
                      ? "bg-brand-50 text-brand-800"
                      : m.status === "In Progress"
                      ? "bg-saffron-50 text-saffron-700"
                      : "bg-canvas text-ink-subtle ring-1 ring-border"
                  }`}
                >
                  {m.status}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{m.deliverables}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
