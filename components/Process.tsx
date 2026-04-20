'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'הנכס שלך על המפה',
    sub: 'פרסום · שיווק · צילום',
    points: [
      'צילום מקצועי של הנכס',
      'ניסוח מודעה שמביאה פניות',
      'פרסום בלוחות ובחברתיות',
      'שיווק לקהילת השוכרים שלנו',
    ],
  },
  {
    num: '02',
    title: 'איתור הדיירים',
    sub: 'גיוס · סינון · בדיקות עומק',
    points: [
      'בדיקה כלכלית (תעסוקה, אשראי, חובות)',
      'בדיקת BDI אישיותית והתנהגותית',
      'שיחת התאמה + המלצות',
      'התאמת ביטחונות לפרופיל',
    ],
  },
  {
    num: '03',
    title: 'חתימה וקבלת מפתחות',
    sub: 'חוזה · ביטחונות · חפיפה',
    points: [
      'ניסוח וחתימה על חוזה מקיף',
      'קבלת צ׳קים וביטחונות',
      'תיעוד מצב הנכס',
      'חפיפה מלאה מול השוכר',
    ],
  },
  {
    num: '04',
    title: 'ניהול שוטף',
    sub: 'תפעול · בקרה · תחזוקה',
    points: [
      'תקשורת שוטפת עם הדיירים',
      'טיפול בתקלות דרך ספקים',
      'מעקב על תשלומי שכירות',
      'פיקוח וביקורים תקופתיים',
    ],
  },
  {
    num: '05',
    title: 'גם כשמשהו משתבש',
    sub: 'רשת הביטחון שלנו',
    points: [
      'דייר חלופי — ללא עלות נוספת',
      'שירות משפטי ראשוני',
      'מכתב התראה מעו״ד חינם',
      'זמינות ותגובה מהירה',
    ],
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-white py-20 lg:py-28">
      <div className="edge">
        <div className="grid gap-8 pb-12 md:grid-cols-12 md:gap-16 md:pb-16">
          <div className="md:col-span-4">
            <span className="kicker">התהליך</span>
            <h2
              className="mt-5 h-display"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                lineHeight: '1.02',
              }}
            >
              השירות שלנו. <br />
              <span className="text-brand">לנכס שלכם.</span>
            </h2>
          </div>
          <div className="md:col-span-8 md:pt-2">
            <p className="lede">
              חמישה שלבים מסודרים, כל אחד מתועד ומלווה אישית. אתם יודעים מה
              קורה, מתי, ומי אחראי — גם אם אתם בחו״ל.
            </p>
          </div>
        </div>

        <ol className="space-y-3">
          {steps.map((s, i) => (
            <motion.li
              key={s.num}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group grid items-start gap-6 rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-300 hover:border-brand/30 hover:shadow-card md:grid-cols-[72px_1fr_1.4fr] md:gap-10 md:p-8"
            >
              <div>
                <span className="flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-brand font-display text-xl font-black text-white sm:h-[64px] sm:w-[64px] sm:text-2xl">
                  {s.num}
                </span>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-ink-400">
                  {s.sub}
                </p>
                <h3
                  className="mt-2 h-display"
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    lineHeight: '1.05',
                  }}
                >
                  {s.title}
                </h3>
              </div>

              <ul className="space-y-2 text-sm leading-relaxed text-ink-600 sm:text-base">
                {s.points.map((p) => (
                  <li key={p} className="flex items-baseline gap-2.5">
                    <span className="h-1 w-1 shrink-0 translate-y-[-2px] rounded-full bg-brand" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
