'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Check, Hammer, Sparkles } from 'lucide-react';

type Service = {
  id: string;
  icon: typeof Hammer;
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
  features: string[];
  benefits: { k: string; v: string }[];
  closer: string;
  cta: string;
};

const services: Service[] = [
  {
    id: 'renovation',
    icon: Hammer,
    eyebrow: 'שיפוץ והשבחה',
    title: 'משפצים חכם.',
    highlight: 'מרוויחים יותר.',
    intro:
      'שיפוץ והשבחת נכסים בחשיבה של משקיעים — להעלאת שווי הנכס, דמי השכירות, ומחיר המכירה.',
    features: [
      'שיפוץ דירות מלא או חלקי',
      'השבחת נכסים להשכרה או מכירה',
      'תכנון חכם למקסימום תשואה',
      'בניית ממ״דים תקניים (בנויים וניידים)',
      'ניהול פרויקט מלא, מהתחלה ועד מסירת המפתחות',
    ],
    benefits: [
      { k: 'ערך', v: 'מעלים ערך אמיתי לנכס' },
      { k: 'שקיפות', v: 'ליווי אישי לאורך כל הדרך' },
      { k: 'אחריות', v: 'עמידה בלוח זמנים ובתקציב' },
    ],
    closer: 'אל תשאירו כסף על הרצפה. תנו לנכס לעבוד בשבילכם.',
    cta: 'כמה שווה הדירה אחרי שיפוץ נכון?',
  },
  {
    id: 'cleaning',
    icon: Sparkles,
    eyebrow: 'שירותי ניקיון',
    title: 'ניקיון מקצועי',
    highlight: 'לרגע הנכון.',
    intro:
      'ניקיון יסודי שמכין את הדירה למעבר הבא. דירה נקייה משכירה מהר יותר ושומרת על שווי הנכס.',
    features: [
      'ניקיון לפני כניסת שוכר',
      'ניקיון לאחר יציאת שוכר',
      'ניקיון אחרי שיפוץ',
      'פוליש מקצועי להברקת הרצפה',
    ],
    benefits: [
      { k: 'מקצוענות', v: 'צוות מנוסה וזמין' },
      { k: 'תוצאה', v: 'דירה מבריקה, ללא כאב ראש' },
      { k: 'גמישות', v: 'תיאום מהיר לתאריך הנדרש' },
    ],
    closer: 'דירה במצב מושלם בכל מעבר.',
    cta: 'תיאום ניקיון לדירה',
  },
];

export default function AdditionalServices() {
  return (
    <section id="extras" className="bg-white section-y">
      <div className="edge">
        {/* Section header */}
        <div className="grid gap-10 pb-14 md:grid-cols-12 md:gap-12 md:pb-16">
          <div className="md:col-span-5">
            <p className="eyebrow eyebrow-brand">שירותים נוספים</p>
            <h2
              className="mt-6 h-display"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: '1.05',
              }}
            >
              מעבר לניהול. <br />
              <span className="text-brand">מעטפת מלאה לנכס שלכם.</span>
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-3">
            <p className="lede">
              אם הדירה צריכה שיפוץ לפני שוכר חדש, או ניקיון יסודי בין מעברים,
              אנחנו דואגים לזה ישירות. אותו צוות, אותו גב, אותה אחריות.
            </p>
          </div>
        </div>

        {/* Two cards */}
        <div className="grid grid-cols-1 border-t border-ink-200 lg:grid-cols-2">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`flex flex-col p-8 transition-base hover:bg-cream sm:p-10 ${
                  i === 0 ? 'border-b border-ink-200 lg:border-b-0 lg:border-l lg:border-ink-200' : ''
                }`}
              >
                {/* Top row: icon + eyebrow */}
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-brand">
                    <Icon size={18} strokeWidth={2} />
                  </span>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-brand">
                    {s.eyebrow}
                  </p>
                </div>

                {/* Title */}
                <h3
                  className="mt-7 font-display font-bold tracking-tight text-ink"
                  style={{
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    lineHeight: '1.05',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {s.title}{' '}
                  <span className="text-brand">{s.highlight}</span>
                </h3>

                {/* Intro */}
                <p className="mt-5 text-base leading-[1.7] text-ink-600 sm:text-lg">
                  {s.intro}
                </p>

                {/* Features */}
                <ul className="mt-8 space-y-2.5 border-t border-ink-100 pt-6 text-sm text-ink-700 sm:text-base">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-baseline gap-2.5">
                      <Check
                        size={14}
                        strokeWidth={2.5}
                        className="mt-0.5 shrink-0 text-brand"
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Benefits row */}
                <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-ink-100 pt-6">
                  {s.benefits.map((b) => (
                    <div key={b.k}>
                      <dt className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-brand">
                        {b.k}
                      </dt>
                      <dd className="mt-2 text-xs font-semibold leading-snug text-ink sm:text-sm">
                        {b.v}
                      </dd>
                    </div>
                  ))}
                </dl>

                {/* Closer */}
                <p className="mt-8 font-display text-base font-medium leading-snug text-ink sm:text-lg">
                  {s.closer}
                </p>

                {/* CTA */}
                <a
                  href="#contact"
                  className="mt-7 inline-flex w-fit items-center gap-2 border-b border-ink pb-1 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
                >
                  {s.cta}
                  <ArrowLeft size={13} />
                </a>
              </motion.article>
            );
          })}
        </div>

        {/* Tail CTA */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-ink-200 pt-8 sm:flex-row">
          <p className="font-display text-base font-medium text-ink-600 sm:text-lg">
            רוצים לשמוע איך זה משתלב עם הניהול השוטף?
          </p>
          <a href="#contact" className="btn-brand">
            לקביעת שיחה
            <ArrowLeft size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
