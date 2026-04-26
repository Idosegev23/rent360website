'use client';

import { motion } from 'framer-motion';

const bullets = [
  { k: 'תהליך יעיל ובטוח', v: 'מפרסום הנכס ועד החוזה החתום - בלי הפתעות, בלי עיכובים.' },
  { k: 'סוכן אישי', v: 'איש אחד אחראי, זמין, שמכיר את התיק שלך לעומק.' },
  { k: 'שקיפות מלאה', v: 'הכל במערכת CRM - דוחות חודשיים ישר לאימייל שלכם.' },
  { k: 'גב משפטי', v: 'כשצריך - מכתב התראה מעו״ד, ללא עלות. מובנה במסלול.' },
  { k: 'מעטפת מלאה', v: 'שיווק, סינון, חוזה, גבייה, תחזוקה, חידושים - במקום אחד.' },
  { k: 'שקט אמיתי', v: 'אתם חוזרים הביתה אחרי עבודה. לא רודפים אחרי אף אחד.' },
];

export default function Manifesto() {
  return (
    <section id="manifesto" className="bg-white section-y">
      <div className="edge">
        <div className="grid gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <p className="eyebrow eyebrow-brand">מי אנחנו</p>
              <h2
                className="mt-6 h-display"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  lineHeight: '1.05',
                }}
              >
                השקט שלך שווה כסף.
                <br />
                <span className="text-brand">ואנחנו יודעים לייצר אותו.</span>
              </h2>

              <div className="mt-8 space-y-5 text-base leading-[1.75] text-ink-600 sm:text-lg">
                <p>
                  Rent360 הוקמה כדי לסיים את הסיבוב הנוסף שכל בעל דירה מכיר  - 
                  הדייר שכותב בלילה, המוביל שלא עונה, הדוחות שנחים במגירה.
                </p>
                <p>
                  אנחנו הבית של הנכס שלך - מטפלים בהכל ומחזירים לך את השקט.
                  הדייר מתקשר אלינו, לא אליך. בעלי המקצוע באים דרכנו. הדוחות
                  נוחתים במייל.
                </p>
                <p>
                  <strong className="font-semibold text-ink">אנחנו פועלים בקריות, חיפה ונשר</strong>
                  . זה המפתח - אנחנו מכירים את האזור לעומק: את המחירים האמיתיים,
                  את הבניינים, ואת השוכרים המתאימים לכל רחוב.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {bullets.map((b, i) => (
                <div
                  key={b.k}
                  className={`px-6 py-7 ${
                    i % 2 === 0 ? 'sm:border-l sm:border-ink-100' : ''
                  } ${
                    i < bullets.length - 2 ? 'border-b border-ink-100' : 'border-b border-ink-100 sm:border-b-0'
                  } ${
                    i === bullets.length - 2 ? 'sm:border-b-0' : ''
                  }`}
                >
                  <p className="font-display text-xs font-bold tabular text-brand">
                    0{i + 1}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                    {b.k}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {b.v}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-ink pt-6">
              <p className="font-display text-lg font-medium text-ink sm:text-xl">
                שירות שמכניס שקט. <span className="text-brand">מערכת שמכניסה כסף.</span> צוות שמכניס ביטחון.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
