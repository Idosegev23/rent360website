'use client';

import { Marquee as MarqueeUI } from './ui/marquee';

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
      className="border-y border-ink-100 bg-cream"
    >
      <MarqueeUI className="[--duration:35s] [--gap:3rem] py-4">
        {areas.map((c) => (
          <span
            key={c}
            className="flex items-center gap-3 whitespace-nowrap font-display text-base font-semibold text-ink-800"
          >
            <span className="inline-block h-1 w-1 rounded-full bg-brand" />
            {c}
          </span>
        ))}
      </MarqueeUI>
    </section>
  );
}
