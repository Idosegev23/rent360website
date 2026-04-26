'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'הנכס שלך על המפה',
    sub: 'פרסום · שיווק · צילום',
    points: [
      'צילום מקצועי של הנכס',
      'הכנת מודעה שמביאה פניות',
      'פרסום ברשתות השונות ובאתרים נוספים',
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
      'חתימה על חוזה שכירות מקיף',
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
      'טיפול בתקלות דרך אנשי מקצוע',
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
      'מכתב התראה מעו״ד מצד בעל הנכס — חינם',
      'זמינות ותגובה מהירה לכל פנייה',
    ],
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-white section-y">
      <div className="edge">
        <div className="grid gap-10 pb-14 md:grid-cols-12 md:gap-12 md:pb-16">
          <div className="md:col-span-5">
            <p className="eyebrow eyebrow-brand">התהליך</p>
            <h2
              className="mt-6 h-display"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: '1.05',
              }}
            >
              השירות שלנו. <br />
              <span className="text-brand">לנכס שלכם.</span>
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-3">
            <p className="lede">
              חמישה שלבים מסודרים, כל אחד מתועד ומלווה אישית. אתם יודעים מה
              קורה, מתי, ומי אחראי — גם אם אתם בחו״ל.
            </p>
          </div>
        </div>

        <ol className="border-t border-ink-200">
          {steps.map((s, i) => (
            <motion.li
              key={s.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="grid grid-cols-[80px_1fr] items-baseline gap-x-8 gap-y-4 border-b border-ink-200 py-10 md:grid-cols-[100px_1fr_1.4fr] md:gap-12 md:py-12"
            >
              <span
                className="font-display font-bold tabular text-brand"
                style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', lineHeight: '1', letterSpacing: '-0.02em' }}
              >
                {s.num}
              </span>

              <div>
                <p className="eyebrow">{s.sub}</p>
                <h3
                  className="mt-3 h-display"
                  style={{
                    fontSize: 'clamp(1.5rem, 2.6vw, 2rem)',
                    lineHeight: '1.1',
                  }}
                >
                  {s.title}
                </h3>
              </div>

              <ul className="col-span-2 space-y-2.5 text-base leading-relaxed text-ink-600 md:col-span-1">
                {s.points.map((p) => (
                  <li key={p} className="flex items-baseline gap-3">
                    <span className="h-1 w-1 shrink-0 translate-y-[-2px] rounded-full bg-ink-300" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-display text-base font-medium text-ink-600 sm:text-lg">
            רוצים לראות איך זה נראה על הנכס שלכם?
          </p>
          <a href="#contact" className="btn-brand">
            לקביעת פגישה
            <ArrowLeft size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
