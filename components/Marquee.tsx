'use client';

const areas = [
  'קרית ביאליק',
  'קרית ים',
  'קרית מוצקין',
  'קרית אתא',
  'קרית חיים',
  'חיפה',
  'נשר',
];

export default function Marquee() {
  return (
    <section
      aria-label="אזורי פעילות"
      className="overflow-hidden border-y border-ink-100 bg-cream py-5"
    >
      {/* 4 copies of areas — guarantees that 1 cycle (translateX -50% of total = 2 copies)
          is always wider than any viewport, eliminating the visible gap at end of cycle.
          dir="ltr" on track for correct translateX direction in RTL document.
          Per-item px-7 padding (no flex gap) keeps spacing identical across the loop boundary. */}
      <div
        className="flex w-max animate-ticker will-change-transform"
        dir="ltr"
      >
        {Array.from({ length: 4 })
          .flatMap(() => areas)
          .map((c, i) => (
            <span
              key={i}
              dir="rtl"
              className="flex shrink-0 items-center gap-3 whitespace-nowrap px-7 font-display text-base font-semibold text-ink-800"
            >
              <span className="inline-block h-1 w-1 rounded-full bg-brand" />
              {c}
            </span>
          ))}
      </div>
    </section>
  );
}
