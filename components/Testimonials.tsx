'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

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
    <section id="testimonials" className="bg-white section-y">
      <div className="edge">
        <div className="flex flex-col items-start justify-between gap-6 pb-12 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow eyebrow-brand">לקוחות מספרים</p>
            <h2
              className="mt-6 h-display"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: '1.05',
              }}
            >
              לא אנחנו אומרים את זה. <br />
              <span className="text-brand">הם כן.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, n) => (
                <Star key={n} size={14} fill="#F47B20" strokeWidth={0} />
              ))}
            </div>
            <span className="font-semibold text-ink">4.9 / 5</span>
            <span className="text-sm text-ink-500">· 120+ ביקורות</span>
          </div>
        </div>

        <div className="border-t border-ink-200 pt-12">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <p
                className="font-display font-medium leading-[1.4] text-ink"
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  letterSpacing: '-0.02em',
                }}
              >
                ״{q.text}״
              </p>

              <footer className="mt-12 flex flex-wrap items-end justify-between gap-5 border-t border-ink-200 pt-6">
                <div>
                  <p className="font-display text-base font-semibold text-ink">
                    — {q.who}
                  </p>
                  <p className="mt-1 text-sm text-ink-500">
                    {q.where} · מסלול {q.track}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-ink-400 tabular">
                    {String(i + 1).padStart(2, '0')} / {String(quotes.length).padStart(2, '0')}
                  </p>
                  <div className="flex gap-1.5">
                    <button
                      onClick={prev}
                      aria-label="המלצה קודמת"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
                    >
                      <ChevronRight size={16} />
                    </button>
                    <button
                      onClick={next}
                      aria-label="המלצה הבאה"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
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
