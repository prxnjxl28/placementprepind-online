import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-white shadow-soft">
      {items.map((item, idx) => (
        <details key={idx} className="group p-6" open={idx === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-bold text-ink">
            <span>{item.question}</span>
            <ChevronDown
              className="h-5 w-5 shrink-0 text-ink-subtle transition-transform duration-200 group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
