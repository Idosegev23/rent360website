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
  },
  {
    text: 'קיבלתי שירות מלא — החל מהעלאת הנכס, דרך צילום מקצועי, ועד דייר איכותי עם חוזה מסודר. הכל באחריות, הכל ברור. ממליץ בחום.',
    who: 'לירן ב.',
    where: 'בעל נכס · קרית מוצקין',
    track: 'נעים פה',
  },
  {
    text: 'הדייר עזב אחרי 3 חודשים, ובלי לשלם שקל נוסף — קיבלתי דייר חדש. עמדו במילה שלהם. זה שירות שונה לגמרי ממה שהכרתי.',
    who: 'נדב כ.',
    where: 'בעל נכס · קרית אתא',
    track: 'נעים מאוד',
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const q = quotes[i];
  const prev = () => setI((x) => (x - 1 + quotes.length) % quotes.length);
  const next = () => setI((x) => (x + 1) % quotes.length);

  return (
    <section id="testimonials" className="relative bg-white py-20 lg:py-28">
      <div className="edge">
        <div className="flex flex-col items-start justify-between gap-6 pb-8 sm:flex-row sm:items-end sm:pb-10">
          <div>
            <span className="kicker">לקוחות מספרים</span>
            <h2
              className="mt-5 h-display"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
                lineHeight: '1.02',
              }}
            >
              לא אנחנו אומרים את זה. <br />
              <span className="text-brand">הם כן.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-ink-100 bg-white px-4 py-2.5">
            <div className="flex">
              {[...Array(5)].map((_, n) => (
                <Star key={n} size={13} fill="#F47B20" strokeWidth={0} />
              ))}
            </div>
            <span className="text-sm font-bold text-ink">4.9 / 5</span>
            <span className="text-xs text-ink-400">· 120+ ביקורות</span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-cream p-8 sm:p-12">
          <Quote size={56} strokeWidth={1} className="absolute right-8 top-6 text-brand/25" />

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35 }}
              className="relative"
            >
              <p
                className="font-display font-medium leading-[1.4] text-ink"
                style={{
                  fontSize: 'clamp(1.25rem, 2.8vw, 2rem)',
                  letterSpacing: '-0.01em',
                }}
              >
                ״{q.text}״
              </p>

              <footer className="mt-10 flex flex-wrap items-end justify-between gap-5 border-t border-ink-100 pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand font-display text-xl font-black text-white">
                    {q.who.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display text-base font-bold text-ink">{q.who}</p>
                    <p className="mt-0.5 text-xs font-semibold text-ink-500">{q.where}</p>
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
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 bg-white text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white"
                    >
                      <ChevronRight size={16} />
                    </button>
                    <button
                      onClick={next}
                      aria-label="המלצה הבאה"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 bg-white text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white"
                    >
                      <ChevronLeft size={16} />
                    </button>
                  </div>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
