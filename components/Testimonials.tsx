'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const quotes = [
  {
    text: 'בתור בעלת נכס שלא גרה בישראל, תמיד חששתי מהתנהלות מרחוק. מאז שהעברתי את הדירה שלי לניהול של Rent360 — אני רגועה. כל בעיה מטופלת, יש לי דוחות, ומרגיש שיש לי שותף.',
    who: 'יעל ש.',
    where: 'בעלת נכס · קרית ביאליק',
    track: 'נעים זמירות',
    gradient: 'from-brand to-clay',
  },
  {
    text: 'קיבלתי שירות מלא — החל מהעלאת הנכס, דרך צילום מקצועי, ועד דייר איכותי עם חוזה מסודר. הכל באחריות, הכל ברור. ממליץ בחום.',
    who: 'לירן ב.',
    where: 'בעל נכס · קרית מוצקין',
    track: 'נעים פה',
    gradient: 'from-moss-400 to-moss-600',
  },
  {
    text: 'הדייר עזב אחרי 3 חודשים, ובלי לשלם שקל נוסף — קיבלתי דייר חדש. עמדו במילה שלהם. זה שירות שונה לגמרי ממה שהכרתי.',
    who: 'נדב כ.',
    where: 'בעל נכס · קרית אתא',
    track: 'נעים מאוד',
    gradient: 'from-clay to-brand-700',
  },
];

const mini = [
  { t: 'שותפים אמיתיים.', w: 'אורי ל.', where: 'קרית חיים' },
  { t: 'הדוחות מסודרים ומדויקים.', w: 'מיטל ר.', where: 'קרית ים' },
  { t: 'דייר איכותי תוך שבוע.', w: 'רון ב.', where: 'ביאליק' },
  { t: 'זמינים 24/7 באמת.', w: 'טלי א.', where: 'מוצקין' },
  { t: 'ראש שקט מאז שעברנו.', w: 'אמיר מ.', where: 'אתא' },
  { t: 'תיק הנכס ברור כמו ספר פתוח.', w: 'שירי ג.', where: 'ביאליק' },
  { t: 'ניהול מרחוק — אפס דאגות.', w: 'עמית ח.', where: 'חיים' },
  { t: 'חיסכון אמיתי בזמן ועצבים.', w: 'הילה נ.', where: 'ים' },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const q = quotes[i];
  const prev = () => setI((x) => (x - 1 + quotes.length) % quotes.length);
  const next = () => setI((x) => (x + 1) % quotes.length);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute -top-20 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-brand/6 blur-[120px]" />

      <div className="edge relative">
        <div className="flex flex-col items-start justify-between gap-6 pb-10 sm:flex-row sm:items-end">
          <div>
            <span className="kicker">לקוחות מספרים</span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="mt-6 h-display"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: '1.02',
              }}
            >
              לא אנחנו אומרים את זה. <br />
              <span className="text-gradient-warm">הם כן.</span>
            </motion.h2>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-sand-200 bg-white/80 px-4 py-2.5 shadow-soft backdrop-blur-sm">
            <div className="flex">
              {[...Array(5)].map((_, n) => (
                <Star key={n} size={13} fill="#F47B20" strokeWidth={0} />
              ))}
            </div>
            <span className="text-sm font-bold text-ink">4.9 / 5</span>
            <span className="text-xs text-ink-400">· 120+ ביקורות</span>
          </div>
        </div>

        {/* Featured quote */}
        <div className="relative overflow-hidden rounded-[2rem] border border-sand-200 bg-gradient-to-br from-cream via-cream-50 to-sand-50 p-8 shadow-soft sm:p-14">
          {/* Big decorative quote */}
          <Quote
            size={120}
            strokeWidth={1}
            className="absolute right-6 -top-3 text-brand/15"
          />
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-clay/15 blur-3xl" />

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <p
                className="font-display leading-[1.4] text-ink"
                style={{
                  fontSize: 'clamp(1.35rem, 3vw, 2.25rem)',
                  letterSpacing: '-0.015em',
                  fontWeight: 500,
                }}
              >
                ״{q.text}״
              </p>

              <footer className="mt-10 flex flex-wrap items-end justify-between gap-5 border-t border-sand-200 pt-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${q.gradient} font-display text-xl font-black text-white shadow-warm`}
                  >
                    {q.who.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display text-base font-bold text-ink">
                      {q.who}
                    </p>
                    <p className="mt-0.5 text-xs font-semibold text-ink-500">
                      {q.where}
                    </p>
                    <p className="mt-1 inline-block rounded-full bg-brand/10 px-2 py-0.5 text-[10px] font-bold text-brand">
                      מסלול {q.track}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <p className="text-[11px] font-bold tracking-wider text-ink-400 tabular">
                    {String(i + 1).padStart(2, '0')} /{' '}
                    {String(quotes.length).padStart(2, '0')}
                  </p>
                  <div className="flex gap-1.5">
                    <button
                      onClick={prev}
                      aria-label="המלצה קודמת"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-200 bg-white text-ink transition-all hover:border-brand hover:bg-brand hover:text-white"
                    >
                      <ChevronRight size={16} />
                    </button>
                    <button
                      onClick={next}
                      aria-label="המלצה הבאה"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-200 bg-white text-ink transition-all hover:border-brand hover:bg-brand hover:text-white"
                    >
                      <ChevronLeft size={16} />
                    </button>
                  </div>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Marquee of mini testimonials */}
        <div className="marquee-mask relative mt-8 overflow-hidden">
          <div className="flex animate-ticker gap-3 will-change-transform">
            {Array.from({ length: 2 })
              .flatMap(() => mini)
              .map((m, idx) => (
                <div
                  key={idx}
                  className="flex shrink-0 items-center gap-3 rounded-full border border-sand-200 bg-white/90 px-4 py-2.5 shadow-soft backdrop-blur-sm"
                >
                  <div className="flex">
                    {[...Array(5)].map((_, n) => (
                      <Star key={n} size={10} fill="#F47B20" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="whitespace-nowrap text-sm font-semibold text-ink">
                    &ldquo;{m.t}&rdquo;
                  </p>
                  <span className="text-xs font-semibold text-ink-400">
                    — {m.w} · {m.where}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
