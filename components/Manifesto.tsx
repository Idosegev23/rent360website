'use client';

import { motion } from 'framer-motion';

const bullets = [
  {
    k: 'תהליך יעיל ובטוח',
    v: 'מפרסום הנכס ועד החוזה החתום — בלי הפתעות, בלי עיכובים.',
  },
  {
    k: 'סוכן אישי',
    v: 'איש אחד אחראי, זמין, שמכיר את התיק שלך לעומק.',
  },
  {
    k: 'שקיפות מלאה',
    v: 'הכל במערכת CRM שלנו — דוחות חודשיים ישר לאימייל שלכם.',
  },
  {
    k: 'גב משפטי',
    v: 'כשצריך — מכתב התראה מעו"ד, ללא עלות. מובנה במסלול.',
  },
  {
    k: 'מעטפת מלאה',
    v: 'שיווק, סינון, חוזה, גבייה, תחזוקה, חידושים — במקום אחד.',
  },
  {
    k: 'שקט אמיתי',
    v: 'אתם חוזרים הביתה אחרי עבודה. לא רודפים אחרי אף אחד.',
  },
];

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative bg-white py-20 lg:py-28">
      <div className="edge">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <span className="kicker">מי אנחנו</span>
              <h2
                className="mt-5 h-display"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  lineHeight: '1.02',
                }}
              >
                השקט שלך שווה כסף. <br />
                <span className="text-brand">אנחנו יודעים לייצר אותו.</span>
              </h2>

              <div className="mt-8 space-y-4 text-base leading-[1.75] text-ink-500 sm:text-lg">
                <p>
                  Rent360 הוקמה כדי לסיים את הסיבוב הנוסף שכל בעל דירה מכיר —
                  הדייר שכותב בלילה, המוביל שלא עונה, הדוחות שנחים במגירה.
                </p>
                <p>
                  אנחנו הבית של הנכס שלך — מטפלים בהכל ומחזירים לך את השקט.
                  הדייר מתקשר אלינו, לא אליך. הבעלי מקצוע באים דרכנו. הדוחות
                  נוחתים במייל.
                </p>
                <p>
                  <strong className="text-ink">אנחנו פועלים רק ב־5 הקריות</strong>
                  . זה המפתח — אנחנו יודעים את המחירים האמיתיים, את הבניינים
                  הבעייתיים, ואת השוכרים המתאימים לכל רחוב.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-7"
          >
            <div className="grid gap-0 overflow-hidden rounded-3xl border border-ink-100 sm:grid-cols-2">
              {bullets.map((b, i) => (
                <div
                  key={b.k}
                  className={`p-6 transition-colors hover:bg-cream sm:p-7 ${
                    i % 2 === 0 ? 'sm:border-l sm:border-ink-100' : ''
                  } ${i < bullets.length - 2 ? 'border-b border-ink-100' : ''} ${
                    i === bullets.length - 2 ? 'sm:border-b sm:border-ink-100' : ''
                  }`}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 font-display text-sm font-black text-brand">
                    {i + 1}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">
                    {b.k}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                    {b.v}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 rounded-2xl bg-ink p-6 text-white sm:p-7">
              <p className="flex-1 font-display text-lg font-bold sm:text-xl">
                שירות <span className="text-brand">שמכניס שקט</span> · מערכת
                שמכניסה כסף · צוות שמכניס ביטחון.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
