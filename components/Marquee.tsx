'use client';

const items = [
  'קרית ביאליק',
  'קרית ים',
  'קרית מוצקין',
  'קרית אתא',
  'קרית חיים',
];

export default function Marquee() {
  return (
    <section
      aria-label="אזורי פעילות"
      className="relative overflow-hidden border-y border-ink-100 bg-cream py-5"
    >
      <div className="marquee-mask relative flex overflow-hidden">
        <div className="flex shrink-0 animate-ticker gap-10 pl-10 will-change-transform">
          {Array.from({ length: 3 })
            .flatMap(() => items)
            .map((c, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-3 whitespace-nowrap font-display text-xl font-bold text-ink-600 sm:text-2xl"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
                {c}
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}
