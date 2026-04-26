'use client';

import { motion } from 'framer-motion';

const items = [
  { title: 'מאגר בעלי נכסים', body: 'מאגר גדול, אקטואלי ומנוהל חכם - שמושך אלינו שוכרים איכותיים.' },
  { title: 'קהילת שוכרים פעילה', body: 'משדכים באופן יזום בין דירות לשוכרים - לא מחכים שיצלצלו.' },
  { title: 'מערכת CRM מתקדמת', body: 'כל פעולה, כל התקשרות, כל מסמך - מתועדים בזמן אמת.' },
  { title: 'שכירות ללא דאגות', body: 'חבילת שירות תיקונים לתקלות בנכס. בעל מקצוע מגיע - לא אתם.' },
  { title: 'ביטוח דמי שכירות', body: 'אופציה לפוליסה שמבטיחה יציבות הכנסה גם מול דייר בעייתי.' },
  { title: 'מכתב התראה מעו״ד', body: 'במידת הצורך - מכתב התראה מצד בעל הנכס, ללא עלות נוספת.' },
  { title: 'מעטפת דייר', body: 'ליווי במעבר - מוביל, חשבונות, תשתיות. הדייר מרגיש בבית.' },
  { title: 'הדירה מתפנקת', body: 'חשמל וריהוט במחירים מוזלים - הדירה שלכם עולה בשווי.' },
];

export default function Differentiators() {
  return (
    <section id="differentiators" className="bg-white section-y">
      <div className="edge">
        <div className="grid gap-10 pb-14 md:grid-cols-12 md:gap-12 md:pb-16">
          <div className="md:col-span-5">
            <p className="eyebrow eyebrow-brand">למה אנחנו</p>
            <h2
              className="mt-6 h-display"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: '1.05',
              }}
            >
              מה שמבדיל אותנו.
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-3">
            <p className="lede">
              חברות ניהול רבות אומרות את אותם הדברים. אנחנו מעדיפים להראות
              איפה אנחנו שונים - במערכות, בכלים, ובלילות שאתם ישנים.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 border-t border-ink-200 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => {
            const isLastRow = i >= items.length - 4;
            const isLastInRow = (i + 1) % 4 === 0;
            return (
              <motion.article
                key={it.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                className={`px-6 py-7 transition-base hover:bg-cream/50 sm:px-7 sm:py-8 ${
                  !isLastRow ? 'border-b border-ink-200' : ''
                } ${
                  !isLastInRow ? 'lg:border-l lg:border-ink-200' : ''
                } ${
                  i % 2 === 0 ? 'sm:border-l sm:border-ink-200' : ''
                } ${
                  i === 1 || i === 5 ? 'lg:border-l lg:border-ink-200' : ''
                }`}
              >
                <p className="font-display text-xs font-bold tabular text-brand">
                  0{i + 1}
                </p>
                <h3 className="mt-3 font-display text-base font-semibold text-ink">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {it.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
