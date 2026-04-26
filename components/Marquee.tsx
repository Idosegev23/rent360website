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
      {/* dir="ltr" on the track so items lay out left-to-right and translateX(-50%) animates
          correctly into the duplicate. Each item stays dir="rtl" for Hebrew text orientation.
          w-max sizes the track to its content; per-item px-6 is the visual gap (no flex gap)
          to keep spacing identical across the loop boundary. */}
      <div
        className="flex w-max animate-ticker will-change-transform"
        dir="ltr"
      >
        {[...areas, ...areas].map((c, i) => (
          <span
            key={i}
            dir="rtl"
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
