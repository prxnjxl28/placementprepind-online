import Link from "next/link";
import { ShieldCheck, Lock } from "lucide-react";
import { DATA_FLOW_TABLE } from "@/data/platform";
import { buildPageMetadata, getBreadcrumbJsonLd } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";

export const metadata = buildPageMetadata({
  title: "Privacy Policy, Data Flows & DPDP Act 2023 Safeguards",
  description:
    "Transparent data-flow disclosures for PlacementPrep India and AcePrep, designed in line with India's Digital Personal Data Protection (DPDP) Act 2023 and GDPR principles. Zero audio or video stored.",
  path: "/privacy/",
  keywords: [
    "DPDP Act 2023 AI interview privacy",
    "AcePrep data flow disclosure",
    "student mock interview privacy policy",
  ],
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy & DPDP Act 2023", path: "/privacy/" },
        ])}
      />

      <section className="border-b border-border bg-dot-grid py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-xs font-semibold text-ink-subtle">
            <Link href="/" className="hover:text-brand-700">
              Home
            </Link>{" "}
            / <span className="text-ink">Privacy &amp; Data Flows</span>
          </nav>
          <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 font-mono text-xs font-bold text-brand-800">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            DPDP ACT 2023 &amp; PRIVACY BY DESIGN
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Privacy Policy &amp; Transparent Data-Flow Disclosure
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            PlacementPrep India and AcePrep are designed around the principles of India&apos;s{" "}
            <strong>Digital Personal Data Protection Act, 2023</strong> (consent, purpose
            limitation, data minimization, and right to erasure) and GDPR-style practice. As an
            academic capstone platform, full independent legal audit has not yet been conducted and
            is not claimed.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pt-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-ink">
          Exactly Where Your Data Goes
        </h2>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-border bg-white shadow-soft">
          <table className="w-full min-w-[680px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-canvas text-xs font-bold uppercase tracking-wider text-ink-subtle">
                <th className="px-4 py-3.5">Data Type</th>
                <th className="px-4 py-3.5">Where It Goes</th>
                <th className="px-4 py-3.5">Stored by AcePrep?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {DATA_FLOW_TABLE.map((row) => (
                <tr key={row.data}>
                  <td className="px-4 py-3.5 font-bold text-ink">{row.data}</td>
                  <td className="px-4 py-3.5 text-ink-muted">{row.whereItGoes}</td>
                  <td className="px-4 py-3.5 font-semibold text-brand-900">
                    {row.storedByAcePrep}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
            <div className="flex items-center gap-2 text-brand-700">
              <Lock className="h-5 w-5" aria-hidden="true" />
              <h2 className="text-lg font-extrabold text-ink">Security Controls (NFR3)</h2>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-ink-muted">
              <li>• Passwords hashed with bcrypt and unique salts.</li>
              <li>• Authenticated sessions via JWT in HttpOnly cookies with silent refresh fallback.</li>
              <li>• Atomic OTP verification on registration, rate limiting, CSRF guard, and Helmet security headers.</li>
              <li>• Reviewed against the OWASP Top 10 security checklist.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
            <div className="flex items-center gap-2 text-brand-700">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              <h2 className="text-lg font-extrabold text-ink">Ethical AI Safeguards</h2>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-ink-muted">
              <li>• Explicit consent screen before a student&apos;s first authenticated session.</li>
              <li>• Clear statement that all rubric scores are formative coaching feedback — never automated hiring decisions.</li>
              <li>• Scoring prompts grade strictly on answer content and communication rubric — never name, gender, or accent.</li>
              <li>• Focus-event telemetry (tab switch, window blur, paste) is summarized strictly as informational self-awareness, not punitive proctoring.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
