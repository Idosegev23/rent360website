'use client';

import { motion } from 'framer-motion';
import {
  Camera,
  Users,
  FileSignature,
  Wrench,
  ShieldCheck,
  ArrowLeft,
} from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Camera,
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
    icon: Users,
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
    icon: FileSignature,
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
    icon: Wrench,
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
    icon: ShieldCheck,
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
    <section id="process" className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Ambient */}
      <div className="pointer-events-none absolute top-40 right-1/2 h-[500px] w-[900px] translate-x-1/2 rounded-full bg-gradient-to-b from-brand/8 to-transparent blur-[120px]" />

      <div className="edge relative">
        <div className="grid gap-8 pb-14 md:grid-cols-12 md:gap-16 md:pb-16">
          <div className="md:col-span-5">
            <span className="kicker">התהליך</span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="mt-6 h-display"
              style={{
                fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
                lineHeight: '1.02',
              }}
            >
              השירות שלנו. <br />
              <span className="text-gradient-warm">לנכס שלכם.</span>
            </motion.h2>
          </div>
          <div className="md:col-span-7 md:pt-2">
            <p className="lede">
              חמישה שלבים מסודרים, כל אחד מתועד ומלווה אישית. אתם יודעים מה
              קורה, מתי, ומי אחראי — גם אם אתם בחו״ל.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['שקיפות מלאה', 'סוכן אישי אחד', 'דוחות חודשיים', 'ללא הפתעות'].map((t) => (
                <span key={t} className="chip-warm">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Vertical connecting line */}
          <div
            aria-hidden
            className="pointer-events-none absolute right-[33px] top-8 bottom-8 hidden w-0.5 md:block"
          >
            <div className="h-full w-full bg-gradient-to-b from-brand via-clay to-brand-700 opacity-20" />
          </div>

          <ol className="space-y-4">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.li
                  key={s.num}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="group relative"
                >
                  <div className="grid items-start gap-6 rounded-3xl border border-sand-200/70 bg-gradient-to-br from-white to-cream-50 p-6 transition-all duration-400 hover:border-brand/40 hover:shadow-warm md:grid-cols-[86px_1fr_1.3fr] md:gap-10 md:p-8">
                    {/* Step badge */}
                    <div className="relative">
                      <div className="relative flex h-[68px] w-[68px] items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-clay text-white shadow-warm transition-transform duration-300 group-hover:scale-105 sm:h-[72px] sm:w-[72px]">
                        <Icon size={26} strokeWidth={2} />
                        <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>
                      <span className="absolute -bottom-2 -left-2 rounded-full bg-ink px-2.5 py-1 font-display text-xs font-black tabular text-white shadow-soft">
                        {s.num}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-clay-500">
                        {s.sub}
                      </p>
                      <h3
                        className="mt-2 h-display"
                        style={{
                          fontSize: 'clamp(1.5rem, 3vw, 2.125rem)',
                          lineHeight: '1.05',
                        }}
                      >
                        {s.title}
                      </h3>
                    </div>

                    {/* Points */}
                    <ul className="space-y-2.5 text-sm leading-relaxed text-ink-600 sm:text-base">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-baseline gap-2.5">
                          <span className="flex h-4 w-4 shrink-0 translate-y-0.5 items-center justify-center rounded-full bg-brand/15">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                          </span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>

        {/* Tail CTA */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 overflow-hidden rounded-3xl border border-sand-200 bg-gradient-to-br from-cream to-sand-50 p-7 text-center sm:flex-row sm:p-8 sm:text-right">
          <div>
            <p className="font-display text-xl font-bold text-ink sm:text-2xl">
              רוצים לראות איך זה נראה על הנכס שלכם?
            </p>
            <p className="mt-1 text-sm text-ink-500">
              פגישת ייעוץ של 30 דקות, ללא עלות, ללא התחייבות.
            </p>
          </div>
          <a href="#contact" className="btn-brand">
            לקביעת פגישה
            <ArrowLeft size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
