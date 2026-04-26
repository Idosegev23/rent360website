'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const quotes = [
  {
    text: 'בתור בעלת נכס שלא גרה בישראל, תמיד חששתי מהתנהלות מרחוק. מאז שהעברתי את הדירה שלי לניהול של Rent360 אני רגועה. כל בעיה מטופלת, יש לי דוחות, ומרגיש שיש לי שותף.',
    who: 'יעל ש.',
    where: 'בעלת נכס · קרית ביאליק',
    track: 'נעים זמירות',
  },
  {
    text: 'קיבלתי שירות מלא, החל מהעלאת הנכס, דרך צילום מקצועי, ועד דייר איכותי עם חוזה מסודר. הכל באחריות, הכל ברור. ממליץ בחום.',
    who: 'לירן ב.',
    where: 'בעל נכס · קרית מוצקין',
    track: 'נעים פה',
  },
  {
    text: 'הדייר עזב אחרי 3 חודשים, ובלי לשלם שקל נוסף קיבלתי דייר חדש. עמדו במילה שלהם. זה שירות שונה לגמרי ממה שהכרתי.',
    who: 'נדב כ.',
    where: 'בעל נכס · קרית אתא',
    track: 'נעים מאוד',
  },
];

const mini = [
  { t: 'שותפים אמיתיים. כל בעיה מטופלת, יש לי שקט ראש.', w: 'אורי ל.', where: 'קרית חיים' },
  { t: 'דוחות מסודרים שמגיעים בזמן. אני יודעת בדיוק מה קורה עם הנכס.', w: 'מיטל ר.', where: 'קרית ים' },
  { t: 'דייר איכותי בתוך שבוע, חוזה חתום בשני. ממליץ.', w: 'רון ב.', where: 'ביאליק' },
  { t: 'זמינים תמיד. גם בערב, גם בשישי. שירות יוצא דופן.', w: 'טלי א.', where: 'מוצקין' },
  { t: 'ראש שקט מאז שעברנו אליהם. שווה כל שקל.', w: 'אמיר מ.', where: 'אתא' },
  { t: 'תיק הנכס ברור כמו ספר פתוח. מקצועי, נעים, אנושי.', w: 'שירי ג.', where: 'ביאליק' },
  { t: 'ניהול מרחוק בלי דאגות. אני בחו״ל ושום דבר לא נופל.', w: 'עמית ח.', where: 'חיים' },
  { t: 'חיסכון אמיתי בזמן ובעצבים. בדיוק מה שחיפשתי.', w: 'הילה נ.', where: 'ים' },
  { t: 'הצוות מקצועי, נעים, ויודע מה הוא עושה. שווה לכל בעל דירה.', w: 'דוד פ.', where: 'נשר' },
  { t: 'עברתי אליהם אחרי שנים של חוסר נחת. סוף סוף מישהו שמטפל בכל.', w: 'רינת כ.', where: 'חיפה' },
  { t: 'שכר הדירה מגיע בזמן, התחזוקה מתבצעת. מה עוד צריך?', w: 'יואב ש.', where: 'מוצקין' },
  { t: 'התרשמתי כבר משיחת הייעוץ הראשונה. בסוף סגרנו פגישה והכל הסתדר.', w: 'איילת ב.', where: 'אתא' },
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
                    {q.who}
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

        {/* Mini reviews ticker — track is dir="ltr" for translateX correctness,
            each card is dir="rtl" so Hebrew text stays right-aligned. */}
        <div className="marquee-mask mt-16 overflow-hidden">
          <div
            className="flex w-max animate-ticker-slow will-change-transform"
            dir="ltr"
          >
            {[...mini, ...mini].map((m, idx) => (
              <div key={idx} className="shrink-0 px-2" dir="rtl">
                <div className="flex h-full w-[300px] flex-col gap-2 rounded-xl border border-ink-200 bg-white p-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, n) => (
                      <Star key={n} size={11} fill="#F47B20" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-ink-700">״{m.t}״</p>
                  <p className="mt-auto text-xs font-semibold text-ink-500">
                    {m.w} · {m.where}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
