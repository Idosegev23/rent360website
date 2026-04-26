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
      {/* w-max sizes the flex track to its content so translateX(-50%) lands exactly on the duplicate.
          px-6 inside each item creates the visual gap (no flex gap), so spacing is identical
          between every adjacent pair, including across the loop boundary. */}
      <div className="flex w-max animate-ticker will-change-transform">
        {[...areas, ...areas].map((c, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-3 whitespace-nowrap px-6 font-display text-base font-semibold text-ink-800"
          >
            <span className="inline-block h-1 w-1 rounded-full bg-brand" />
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}
