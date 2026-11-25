import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-28 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
        <Compass className="h-7 w-7" aria-hidden="true" />
      </div>
      <p className="mt-5 font-mono text-xs font-bold uppercase tracking-wider text-brand-700">
        404 • PAGE NOT FOUND
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
        We couldn&apos;t find that placement resource
      </h1>
      <p className="mt-3 text-base text-ink-muted">
        Explore our 9 technical &amp; HR mock interview tracks, transparent scoring rubric, or try
        the interactive voice mock simulator directly.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-brand-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-800"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Home
        </Link>
        <Link
          href="/tracks/"
          className="rounded-xl border border-border bg-white px-5 py-2.5 text-sm font-bold text-ink hover:border-brand-600"
        >
          Browse 9 Tracks
        </Link>
      </div>
    </section>
  );
}
