'use client';

import { Home, Key, Building2, ShieldCheck, Handshake, Sparkles } from 'lucide-react';

const areas = [
  'קרית ביאליק',
  'קרית ים',
  'קרית מוצקין',
  'קרית אתא',
  'קרית חיים',
];

const valueProps = [
  { icon: Home, t: 'שירות מלא לבעלי נכסים' },
  { icon: Key, t: 'סוכן אישי לכל דירה' },
  { icon: Building2, t: 'מכירים כל רחוב' },
  { icon: ShieldCheck, t: 'הגנה על דמי שכירות' },
  { icon: Handshake, t: 'חוזה שקוף ומסודר' },
  { icon: Sparkles, t: 'חוויה שאומרת יוקרה' },
];

export default function Marquee() {
  return (
    <section
      aria-label="אזורי פעילות"
      className="relative overflow-hidden border-y border-sand-200/60 bg-gradient-to-b from-cream via-cream-100 to-cream"
    >
      {/* Warm noise layer */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-multiply bg-grain" />

      {/* Top row — areas, right-to-left */}
      <div className="marquee-mask relative flex overflow-hidden py-6">
        <div className="flex shrink-0 animate-ticker gap-10 pl-10 will-change-transform">
          {Array.from({ length: 3 })
            .flatMap(() => areas)
            .map((c, i) => (
              <span
                key={`a-${i}`}
                className="flex shrink-0 items-center gap-3 whitespace-nowrap font-display text-xl font-bold text-ink-700 sm:text-2xl"
              >
                <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-br from-brand to-clay" />
                {c}
                <span className="mx-1 inline-block h-1 w-1 rounded-full bg-ink-300" />
              </span>
            ))}
        </div>
      </div>

      {/* Divider */}
      <div className="edge">
        <div className="divider-warm" />
      </div>

      {/* Bottom row — value props, left-to-right */}
      <div className="marquee-mask relative flex overflow-hidden py-5">
        <div className="flex shrink-0 animate-ticker-rev gap-8 pl-8 will-change-transform">
          {Array.from({ length: 3 })
            .flatMap(() => valueProps)
            .map(({ icon: Icon, t }, i) => (
              <span
                key={`v-${i}`}
                className="flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full border border-sand-200 bg-white/70 px-4 py-1.5 font-body text-sm font-semibold text-ink-600 backdrop-blur-sm"
              >
                <Icon size={14} className="text-brand" />
                {t}
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}
