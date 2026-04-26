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
      className="border-y border-ink-100 bg-cream py-5"
    >
      <div className="marquee-mask flex overflow-hidden">
        <div className="flex shrink-0 animate-ticker gap-12 pl-12 will-change-transform">
          {Array.from({ length: 3 })
            .flatMap(() => areas)
            .map((c, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-3 whitespace-nowrap font-display text-base font-semibold text-ink-800"
              >
                <span className="inline-block h-1 w-1 rounded-full bg-brand" />
                {c}
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}
