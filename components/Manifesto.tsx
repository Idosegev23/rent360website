'use client';

import { motion } from 'framer-motion';
import { Rocket, UserCheck, LineChart, Scale, Layers, Moon } from 'lucide-react';

const bullets = [
  {
    icon: Rocket,
    k: 'תהליך יעיל ובטוח',
    v: 'מפרסום הנכס ועד החוזה החתום — בלי הפתעות, בלי עיכובים.',
  },
  {
    icon: UserCheck,
    k: 'סוכן אישי',
    v: 'איש אחד אחראי, זמין, שמכיר את התיק שלך לעומק.',
  },
  {
    icon: LineChart,
    k: 'שקיפות מלאה',
    v: 'הכל במערכת CRM שלנו — דוחות חודשיים ישר לאימייל שלכם.',
  },
  {
    icon: Scale,
    k: 'גב משפטי',
    v: 'כשצריך — מכתב התראה מעו״ד, ללא עלות. מובנה במסלול.',
  },
  {
    icon: Layers,
    k: 'מעטפת מלאה',
    v: 'שיווק, סינון, חוזה, גבייה, תחזוקה, חידושים — במקום אחד.',
  },
  {
    icon: Moon,
    k: 'שקט אמיתי',
    v: 'אתם חוזרים הביתה אחרי עבודה. לא רודפים אחרי אף אחד.',
  },
];

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background flourish */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand/8 via-clay/6 to-transparent blur-[120px]" />

      <div className="edge relative">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          {/* Editorial column */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="kicker">מי אנחנו</span>
              <h2
                className="mt-6 h-display"
                style={{
                  fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
                  lineHeight: '1.05',
                }}
              >
                השקט שלך שווה כסף.
                <br />
                <span className="text-gradient-warm">
                  ואנחנו יודעים לייצר אותו.
                </span>
              </h2>

              <div className="mt-8 space-y-4 text-base leading-[1.75] text-ink-500 sm:text-lg">
                <p>
                  Rent360 הוקמה כדי לסיים את הסיבוב הנוסף שכל בעל דירה מכיר —
                  הדייר שכותב בלילה, המוביל שלא עונה, הדוחות שנחים במגירה.
                </p>
                <p>
                  אנחנו הבית של הנכס שלך — מטפלים בהכל ומחזירים לך את השקט. הדייר
                  מתקשר אלינו, לא אליך. בעלי המקצוע באים דרכנו. הדוחות נוחתים
                  במייל.
                </p>
                <p>
                  <strong className="text-ink">אנחנו פועלים בקריות, חיפה ונשר</strong>
                  . זה המפתח — אנחנו מכירים את האזור לעומק: את המחירים האמיתיים,
                  את הבניינים, ואת השוכרים המתאימים לכל רחוב.
                </p>
              </div>

              {/* Pull-quote strip */}
              <div className="relative mt-10 overflow-hidden rounded-3xl border border-sand-200 bg-gradient-to-br from-cream to-sand-50 p-6 sm:p-7">
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-brand/15 blur-2xl" />
                <p className="relative font-display text-xl font-medium leading-relaxed text-ink sm:text-2xl">
                  ״הדירה שלך צריכה לעבוד בשבילך — לא להפך.״
                </p>
                <p className="relative mt-3 text-xs font-bold uppercase tracking-wider text-clay-500">
                  — פילוסופיית Rent360
                </p>
              </div>
            </motion.div>
          </div>

          {/* Grid of values */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-7"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {bullets.map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={b.k}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                    className="group relative overflow-hidden rounded-3xl border border-sand-200/70 bg-gradient-to-br from-white to-cream-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-warm sm:p-7"
                  >
                    <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-brand/0 blur-2xl transition-all duration-500 group-hover:bg-brand/15" />
                    <div className="relative flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-clay text-white shadow-warm">
                        <Icon size={19} />
                      </div>
                      <span className="font-display text-lg font-black text-sand-300">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="relative mt-5 font-display text-lg font-bold text-ink">
                      {b.k}
                    </h3>
                    <p className="relative mt-1.5 text-sm leading-relaxed text-ink-500">
                      {b.v}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Manifesto ribbon */}
            <div className="relative mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-ink via-ink-700 to-ink-800 p-7 text-white shadow-lift sm:p-8">
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand/35 blur-3xl" />
              <div className="pointer-events-none absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-clay/25 blur-3xl" />
              <p className="relative font-display text-xl font-bold leading-snug sm:text-2xl">
                שירות <span className="text-gradient-warm">שמכניס שקט</span> · מערכת
                <span className="text-gradient-warm"> שמכניסה כסף</span> · צוות
                <span className="text-gradient-warm"> שמכניס ביטחון</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
