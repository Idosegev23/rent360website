'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, MapPin } from 'lucide-react';

type Hood = {
  num: string;
  name: string;
  eng: string;
  meta: string;
  body: string;
  landmarks: string[];
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
  },
  {
    num: '02',
    name: 'קרית ים',
    eng: 'Kiryat Yam',
    meta: 'ים · צעירים · מחיר נוח',
    body:
      'דירות עם נוף לים הופכות לטרנד. ים א׳–ד׳ עם הבדלי מחיר משמעותיים. בחירה עירונית לצעירים ומפתחי קריירה.',
    landmarks: ['חוף ים', 'העצמאות', 'תאשור', 'שד׳ ירושלים'],
  },
  {
    num: '03',
    name: 'קרית מוצקין',
    eng: 'Kiryat Motzkin',
    meta: 'מרכז · מסחר · משפחות צעירות',
    body:
      'בן גוריון וגוש המרכז עם תחבורה מצוינת לחיפה. דירות 3 חד׳ מבוקשות. שוק יציב עם עלייה מתונה.',
    landmarks: ['בן גוריון', 'גושן', 'הקישון', 'גוש עציון'],
  },
  {
    num: '04',
    name: 'קרית אתא',
    eng: 'Kiryat Ata',
    meta: 'גדולה · מגוונת · פרויקטים חדשים',
    body:
      'התחדשות משמעותית בשנים האחרונות. גבעת אלונים וציזלינג עם פינוי־בינוי. מחירים נוחים יחסית.',
    landmarks: ['הקניון', 'גבעת אלונים', 'ציזלינג', 'העצמאות'],
  },
  {
    num: '05',
    name: 'קרית חיים',
    eng: 'Kiryat Haim',
    meta: 'ותיקה · ליד חיפה · גמישה',
    body:
      'חיים מערבית ומזרחית — שוני משמעותי בין השתיים. הקרבה לחיפה והאוניברסיטה = מוקד למרצים וסטודנטים.',
    landmarks: ['אח״י אילת', 'דרך עכו', 'קק״ל', 'פארק הזיכרון'],
  },
];

export default function Neighborhoods() {
  const [active, setActive] = useState(0);
  const h = hoods[active];

  return (
    <section id="neighborhoods" className="relative bg-cream py-20 lg:py-28">
      <div className="edge">
        <div className="grid gap-8 pb-12 md:grid-cols-12 md:gap-16 md:pb-16">
          <div className="md:col-span-5">
            <span className="kicker">הקריות</span>
            <h2
              className="mt-5 h-display"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                lineHeight: '1.02',
              }}
            >
              חמש שכונות, <br />
              <span className="text-brand">חמישה אופי שונים.</span>
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-4">
            <p className="lede">
              אנחנו לא מוכרים לכם "הקריות". מבינים שכל קרייה היא עולם אחר —
              תחבורה, אופי, ביקוש, טווח מחירים.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <ul className="divide-y divide-ink-100 overflow-hidden rounded-3xl border border-ink-100 bg-white">
              {hoods.map((hood, i) => (
                <li key={hood.num}>
                  <button
                    onClick={() => setActive(i)}
                    className={`flex w-full items-center justify-between gap-4 px-6 py-4 text-right transition-colors sm:px-7 sm:py-5 ${
                      active === i ? 'bg-cream' : 'hover:bg-cream-50'
                    }`}
                  >
                    <span className="flex items-baseline gap-3.5">
                      <span className="font-display text-xs font-bold tabular text-brand">
                        {hood.num}
                      </span>
                      <span
                        className={`font-display text-xl font-bold tracking-tight sm:text-2xl ${
                          active === i ? 'text-ink' : 'text-ink-500'
                        }`}
                      >
                        {hood.name}
                      </span>
                    </span>
                    <MapPin
                      size={15}
                      className={active === i ? 'text-brand' : 'text-ink-300'}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            key={h.num}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="md:col-span-7"
          >
            <div className="rounded-3xl border border-ink-100 bg-white p-6 sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-wider text-ink-400" dir="ltr">
                {h.eng}
              </p>
              <h3 className="mt-2 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
                {h.name}
              </h3>
              <p className="mt-2 text-sm font-semibold text-brand">{h.meta}</p>

              <p className="mt-6 text-base leading-[1.7] text-ink-600 sm:text-lg">
                {h.body}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {h.landmarks.map((l) => (
                  <span
                    key={l}
                    className="rounded-full bg-ink-50 px-3 py-1 text-xs font-semibold text-ink-600"
                  >
                    {l}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 font-body text-sm font-semibold text-brand hover:text-ink"
              >
                חפשו איתי ב{h.name}
                <ArrowLeft size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
