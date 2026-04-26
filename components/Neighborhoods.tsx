'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

type Hood = {
  num: string;
  name: string;
  eng: string;
  meta: string;
  body: string;
  landmarks: string[];
  stats: { k: string; v: string }[];
};

const hoods: Hood[] = [
  {
    num: '01',
    name: 'קרית ביאליק',
    eng: 'Kiryat Bialik',
    meta: 'גוש המרכז · משפחות · שקט יחסי',
    body:
      'גוש ויצמן-סביונים-נווה גנים. ביקוש גבוה לדירות 4 חד׳, שכונת הסביונים מובילה במחירים, נווה גנים = ערך לכסף.',
    landmarks: ['קניון ביאליק', 'פארק ביאליק', 'ויצמן', 'סביונים'],
    stats: [
      { k: 'ממוצע 4 חד׳', v: '6,400₪' },
      { k: 'ימים לחוזה', v: '9 ימ׳' },
      { k: 'ביקוש', v: 'גבוה' },
    ],
  },
  {
    num: '02',
    name: 'קרית ים',
    eng: 'Kiryat Yam',
    meta: 'ים · צעירים · מחיר נוח',
    body:
      'דירות עם נוף לים הופכות לטרנד. ים א׳-ד׳ עם הבדלי מחיר משמעותיים. בחירה עירונית לצעירים ומפתחי קריירה.',
    landmarks: ['חוף ים', 'העצמאות', 'תאשור', 'שד׳ ירושלים'],
    stats: [
      { k: 'ממוצע 3 חד׳', v: '4,300₪' },
      { k: 'ימים לחוזה', v: '7 ימ׳' },
      { k: 'ביקוש', v: 'גבוה מאוד' },
    ],
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
  },
  {
    num: '05',
    name: 'קרית חיים',
    eng: 'Kiryat Haim',
    meta: 'ותיקה · ליד חיפה · גמישה',
    body:
      'חיים מערבית ומזרחית - שוני משמעותי בין השתיים. הקרבה לחיפה והאוניברסיטה = מוקד למרצים וסטודנטים.',
    landmarks: ['אח״י אילת', 'דרך עכו', 'קק״ל', 'פארק הזיכרון'],
    stats: [
      { k: 'ממוצע 3 חד׳', v: '4,100₪' },
      { k: 'ימים לחוזה', v: '8 ימ׳' },
      { k: 'ביקוש', v: 'גבוה' },
    ],
  },
  {
    num: '06',
    name: 'חיפה',
    eng: 'Haifa',
    meta: 'מטרופולין · אוניברסיטה · נוף לים',
    body:
      'הדר, כרמל, רמות בן גוריון, נווה שאנן. שוק רחב ומגוון - מסטודנטים בהדר ועד משפחות בכרמל. הביקוש משתנה מאוד בין שכונה לשכונה.',
    landmarks: ['הכרמל', 'הדר', 'הטכניון', 'נווה שאנן'],
    stats: [
      { k: 'ממוצע 3 חד׳', v: '5,200₪' },
      { k: 'ימים לחוזה', v: '10 ימ׳' },
      { k: 'ביקוש', v: 'גבוה מאוד' },
    ],
  },
  {
    num: '07',
    name: 'נשר',
    eng: 'Nesher',
    meta: 'שקטה · ירוקה · ליד הטכניון',
    body:
      'הקרבה לטכניון ולחיפה הופכת את נשר למוקד למשפחות צעירות ולסגל אקדמי. שוק יציב ועליה הדרגתית במחירים.',
    landmarks: ['גבעת נשר', 'בן צבי', 'הטכניון', 'מרכז העיר'],
    stats: [
      { k: 'ממוצע 4 חד׳', v: '5,800₪' },
      { k: 'ימים לחוזה', v: '9 ימ׳' },
      { k: 'ביקוש', v: 'יציב' },
    ],
  },
];

export default function Neighborhoods() {
  const [active, setActive] = useState(0);
  const h = hoods[active];

  return (
    <section id="neighborhoods" className="bg-cream section-y">
      <div className="edge">
        <div className="grid gap-10 pb-14 md:grid-cols-12 md:gap-12 md:pb-16">
          <div className="md:col-span-5">
            <p className="eyebrow eyebrow-brand">אזורי פעילות</p>
            <h2
              className="mt-6 h-display"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: '1.05',
              }}
            >
              מכירים את האזור{' '}
              <span className="text-brand">בית־בית.</span>
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-3">
            <p className="lede">
              קריות, חיפה ונשר. כל אזור - אופי משלו, ביקוש משלו, טווח מחירים משלו.
              אנחנו מכירים את כל הניואנסים של השטח.
            </p>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          {/* Tabs */}
          <div className="md:col-span-5">
            <ul className="border-y border-ink-200">
              {hoods.map((hood, i) => (
                <li key={hood.num}>
                  <button
                    onClick={() => setActive(i)}
                    className={`flex w-full items-baseline gap-4 py-4 text-right transition-colors ${
                      active === i ? 'text-ink' : 'text-ink-500 hover:text-ink'
                    }`}
                  >
                    <span className="font-display text-xs font-bold tabular text-brand">
                      {hood.num}
                    </span>
                    <span
                      className={`flex-1 font-display text-xl font-semibold tracking-tight sm:text-2xl ${
                        active === i ? 'text-ink' : 'text-ink-500'
                      }`}
                    >
                      {hood.name}
                    </span>
                    <span
                      className={`h-px transition-all ${
                        active === i ? 'w-12 bg-brand' : 'w-6 bg-ink-300'
                      }`}
                    />
                  </button>
                  {i < hoods.length - 1 && (
                    <div className="border-b border-ink-200" />
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Detail */}
          <div className="md:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={h.num}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-400" dir="ltr">
                  {h.eng}
                </p>
                <h3
                  className="mt-3 font-display font-bold text-ink"
                  style={{
                    fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                    lineHeight: '1',
                    letterSpacing: '-0.025em',
                  }}
                >
                  {h.name}
                </h3>
                <p className="mt-3 text-sm font-semibold text-brand">{h.meta}</p>

                <p className="mt-7 text-base leading-[1.7] text-ink-600 sm:text-lg">
                  {h.body}
                </p>

                <div className="mt-8 grid grid-cols-3 gap-4 border-y border-ink-200 py-6">
                  {h.stats.map((s) => (
                    <div key={s.k}>
                      <p className="font-display text-xl font-bold tabular text-ink sm:text-2xl">
                        {s.v}
                      </p>
                      <p className="mt-1 text-[11px] font-semibold text-ink-500">{s.k}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-x-2 gap-y-1.5 text-sm">
                  <span className="text-ink-400">ציוני דרך  - </span>
                  {h.landmarks.map((l, idx) => (
                    <span key={l} className="text-ink-700">
                      {l}
                      {idx < h.landmarks.length - 1 && (
                        <span className="text-ink-300"> ·</span>
                      )}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 border-b border-ink pb-1 font-semibold text-ink hover:border-brand hover:text-brand"
                >
                  חפשו איתי ב{h.name}
                  <ArrowLeft size={14} />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
