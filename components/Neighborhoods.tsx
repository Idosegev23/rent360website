'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, MapPin, Compass, Building, Waves, TreePine, Home } from 'lucide-react';

type Hood = {
  num: string;
  name: string;
  eng: string;
  meta: string;
  body: string;
  landmarks: string[];
  stats: { k: string; v: string }[];
  icon: any;
  accent: string;
};

const hoods: Hood[] = [
  {
    num: '01',
    name: 'קרית ביאליק',
    eng: 'Kiryat Bialik',
    meta: 'גוש המרכז · משפחות · שקט יחסי',
    body:
      'גוש ויצמן–סביונים–נווה גנים. ביקוש גבוה לדירות 4 חד׳, שכונת הסביונים מובילה במחירים, נווה גנים = ערך לכסף.',
    landmarks: ['קניון ביאליק', 'פארק ביאליק', 'ויצמן', 'סביונים'],
    stats: [
      { k: 'ממוצע 4 חד׳', v: '6,400₪' },
      { k: 'ימים לחוזה', v: '9 ימ׳' },
      { k: 'ביקוש', v: 'גבוה' },
    ],
    icon: TreePine,
    accent: 'from-moss-400 to-moss-600',
  },
  {
    num: '02',
    name: 'קרית ים',
    eng: 'Kiryat Yam',
    meta: 'ים · צעירים · מחיר נוח',
    body:
      'דירות עם נוף לים הופכות לטרנד. ים א׳–ד׳ עם הבדלי מחיר משמעותיים. בחירה עירונית לצעירים ומפתחי קריירה.',
    landmarks: ['חוף ים', 'העצמאות', 'תאשור', 'שד׳ ירושלים'],
    stats: [
      { k: 'ממוצע 3 חד׳', v: '4,300₪' },
      { k: 'ימים לחוזה', v: '7 ימ׳' },
      { k: 'ביקוש', v: 'גבוה מאוד' },
    ],
    icon: Waves,
    accent: 'from-sky-500 to-sky-700',
  },
  {
    num: '03',
    name: 'קרית מוצקין',
    eng: 'Kiryat Motzkin',
    meta: 'מרכז · מסחר · משפחות צעירות',
    body:
      'בן גוריון וגוש המרכז עם תחבורה מצוינת לחיפה. דירות 3 חד׳ מבוקשות. שוק יציב עם עלייה מתונה.',
    landmarks: ['בן גוריון', 'גושן', 'הקישון', 'גוש עציון'],
    stats: [
      { k: 'ממוצע 3 חד׳', v: '4,600₪' },
      { k: 'ימים לחוזה', v: '10 ימ׳' },
      { k: 'ביקוש', v: 'יציב' },
    ],
    icon: Building,
    accent: 'from-brand to-clay',
  },
  {
    num: '04',
    name: 'קרית אתא',
    eng: 'Kiryat Ata',
    meta: 'גדולה · מגוונת · פרויקטים חדשים',
    body:
      'התחדשות משמעותית בשנים האחרונות. גבעת אלונים וציזלינג עם פינוי־בינוי. מחירים נוחים יחסית.',
    landmarks: ['הקניון', 'גבעת אלונים', 'ציזלינג', 'העצמאות'],
    stats: [
      { k: 'ממוצע 4 חד׳', v: '5,500₪' },
      { k: 'ימים לחוזה', v: '11 ימ׳' },
      { k: 'ביקוש', v: 'עולה' },
    ],
    icon: Compass,
    accent: 'from-sand-500 to-sand-600',
  },
  {
    num: '05',
    name: 'קרית חיים',
    eng: 'Kiryat Haim',
    meta: 'ותיקה · ליד חיפה · גמישה',
    body:
      'חיים מערבית ומזרחית — שוני משמעותי בין השתיים. הקרבה לחיפה והאוניברסיטה = מוקד למרצים וסטודנטים.',
    landmarks: ['אח״י אילת', 'דרך עכו', 'קק״ל', 'פארק הזיכרון'],
    stats: [
      { k: 'ממוצע 3 חד׳', v: '4,100₪' },
      { k: 'ימים לחוזה', v: '8 ימ׳' },
      { k: 'ביקוש', v: 'גבוה' },
    ],
    icon: Home,
    accent: 'from-clay to-clay-600',
  },
];

export default function Neighborhoods() {
  const [active, setActive] = useState(0);
  const h = hoods[active];
  const Icon = h.icon;

  return (
    <section
      id="neighborhoods"
      className="relative overflow-hidden bg-gradient-to-b from-cream via-cream-100 to-cream py-24 lg:py-32"
    >
      {/* Ambient */}
      <div className="pointer-events-none absolute right-1/4 top-20 h-[400px] w-[400px] rounded-full bg-brand/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.3] mix-blend-multiply bg-grain" />

      <div className="edge relative">
        <div className="grid gap-8 pb-14 md:grid-cols-12 md:gap-16 md:pb-16">
          <div className="md:col-span-5">
            <span className="kicker">הקריות</span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="mt-6 h-display"
              style={{
                fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
                lineHeight: '1.02',
              }}
            >
              חמש שכונות, <br />
              <span className="text-gradient-warm">חמישה אופי שונים.</span>
            </motion.h2>
          </div>
          <div className="md:col-span-7 md:pt-4">
            <p className="lede">
              אנחנו לא מוכרים לכם &quot;הקריות&quot;. מבינים שכל קרייה היא עולם אחר —
              תחבורה, אופי, ביקוש, טווח מחירים.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          {/* Tab list */}
          <div className="md:col-span-5">
            <ul className="overflow-hidden rounded-3xl border border-sand-200 bg-white/80 shadow-soft backdrop-blur-sm">
              {hoods.map((hood, i) => {
                const isActive = active === i;
                const HoodIcon = hood.icon;
                return (
                  <li key={hood.num}>
                    <button
                      onClick={() => setActive(i)}
                      className={`relative flex w-full items-center gap-4 px-6 py-4 text-right transition-all sm:px-7 sm:py-5 ${
                        isActive ? 'bg-gradient-to-l from-cream to-transparent' : 'hover:bg-cream/50'
                      }`}
                    >
                      {/* Accent stripe */}
                      <span
                        className={`absolute inset-y-0 right-0 w-[3px] transition-all ${
                          isActive
                            ? `bg-gradient-to-b ${hood.accent}`
                            : 'bg-transparent'
                        }`}
                      />

                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all ${
                          isActive
                            ? `bg-gradient-to-br ${hood.accent} text-white shadow-warm`
                            : 'bg-cream text-ink-400'
                        }`}
                      >
                        <HoodIcon size={16} />
                      </span>

                      <span className="flex-1 min-w-0">
                        <span className="flex items-baseline gap-2">
                          <span className="font-display text-xs font-bold tabular text-brand">
                            {hood.num}
                          </span>
                          <span
                            className={`font-display text-lg font-bold tracking-tight sm:text-xl ${
                              isActive ? 'text-ink' : 'text-ink-500'
                            }`}
                          >
                            {hood.name}
                          </span>
                        </span>
                        <span className={`mt-0.5 block truncate text-[11px] font-semibold ${
                          isActive ? 'text-clay-500' : 'text-ink-400'
                        }`}>
                          {hood.meta}
                        </span>
                      </span>

                      <MapPin
                        size={15}
                        className={isActive ? 'text-brand' : 'text-ink-300'}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Detail card */}
          <div className="md:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={h.num}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-soft"
              >
                {/* Hero strip with gradient + SVG city skyline */}
                <div
                  className={`relative h-40 overflow-hidden bg-gradient-to-br ${h.accent}`}
                >
                  <div className="absolute inset-0 bg-grain opacity-25 mix-blend-overlay" />
                  {/* City silhouette */}
                  <svg
                    viewBox="0 0 600 120"
                    preserveAspectRatio="xMidYEnd slice"
                    className="absolute inset-x-0 bottom-0 w-full opacity-35"
                    aria-hidden
                  >
                    <path
                      d="M0 120 V80 L30 80 V60 L55 60 V90 L85 90 V50 L110 50 V70 L140 70 V40 L170 40 V85 L200 85 V55 L230 55 V75 L260 75 V45 L290 45 V80 L320 80 V60 L345 60 V90 L380 90 V50 L410 50 V70 L440 70 V40 L470 40 V85 L500 85 V55 L530 55 V75 L560 75 V60 L600 60 V120 Z"
                      fill="rgba(255,255,255,0.55)"
                    />
                  </svg>

                  {/* Floating icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-md ring-1 ring-white/30">
                      <Icon size={36} strokeWidth={1.8} />
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-8">
                  <p
                    className="text-[10px] font-bold uppercase tracking-wider text-ink-400"
                    dir="ltr"
                  >
                    {h.eng}
                  </p>
                  <h3
                    className="mt-2 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl"
                    style={{ letterSpacing: '-0.025em' }}
                  >
                    {h.name}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-brand">
                    {h.meta}
                  </p>

                  <p className="mt-5 text-base leading-[1.7] text-ink-600 sm:text-lg">
                    {h.body}
                  </p>

                  {/* Stats */}
                  <div className="mt-6 grid grid-cols-3 gap-3 border-t border-sand-200 pt-6">
                    {h.stats.map((s) => (
                      <div key={s.k} className="rounded-2xl bg-cream/70 p-3 text-center">
                        <p className="font-display text-base font-black text-ink sm:text-lg">
                          {s.v}
                        </p>
                        <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink-400">
                          {s.k}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Landmarks */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {h.landmarks.map((l) => (
                      <span
                        key={l}
                        className="rounded-full border border-sand-200 bg-cream/60 px-3 py-1 text-xs font-semibold text-ink-600"
                      >
                        {l}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-2 font-body text-sm font-semibold text-brand hover:text-clay-500"
                  >
                    חפשו איתי ב{h.name}
                    <ArrowLeft size={14} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
