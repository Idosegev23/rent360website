'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';

type Track = {
  id: string;
  name: string;
  tagline: string;
  audience: string;
  headline: string;
  features: string[];
  featured?: boolean;
};

const tracks: Track[] = [
  {
    id: 'po',
    name: 'נעים פה',
    tagline: 'השכרה בלבד',
    audience: 'לבעלי דירות שמנהלים בעצמם',
    headline: 'אנחנו מוצאים. אתם מנהלים.',
    features: [
      'צילום ופרסום מקצועי',
      'הצגת הנכס לשוכרים פוטנציאליים',
      'סינון מתעניינים',
      'בדיקת BDI',
      'חוזה שכירות מותאם',
      'העברת מפתחות',
    ],
  },
  {
    id: 'ha',
    name: 'נעים הליכות',
    tagline: 'ניהול בלבד',
    audience: 'יש לכם דייר - אין לכם זמן',
    headline: 'אתם יוצאים מהתמונה.',
    features: [
      'שירות לדייר',
      'גבייה ודיווח חודשי',
      'אנשי מקצוע דרכנו',
      'ביקורים תקופתיים',
      'חידוש / סיום חוזה',
    ],
  },
  {
    id: 'me',
    name: 'נעים מאוד',
    tagline: 'השכרה + ניהול',
    audience: 'ראש שקט מלא, מההתחלה',
    headline: 'הכל. בחבילה אחת.',
    features: [
      'כל שכלול בהשכרה',
      'כל שכלול בניהול',
      'סוכן אישי צמוד',
      'דוחות רבעוניים',
      'ליווי ברוח של שותפות',
    ],
    featured: true,
  },
  {
    id: 'za',
    name: 'נעים זמירות',
    tagline: 'פרימיום + הגנה',
    audience: 'מקסימום שקט. רשת ביטחון.',
    headline: 'אחריות מלאה על ההכנסה.',
    features: [
      'כל שכלול ב״נעים מאוד״',
      'מכתב התראה מעו״ד מצד בעל הנכס',
      'בדיקת עומק (BDI + בדיקת רקע)',
      'ביטוח דמי שכירות (באמצעות צד ג׳)',
      'כיסוי התחייבויות לרשויות',
      'אחריות על דייר חלופי',
    ],
  },
];

export default function Tracks() {
  return (
    <section id="tracks" className="bg-cream section-y">
      <div className="edge">
        <div className="grid gap-10 pb-14 md:grid-cols-12 md:gap-12 md:pb-16">
          <div className="md:col-span-5">
            <p className="eyebrow eyebrow-brand">מסלולי שירות</p>
            <h2
              className="mt-6 h-display"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: '1.05',
              }}
            >
              ארבעה מסלולים. <br />
              <span className="text-brand">בחרו את הרמה שלכם.</span>
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-3">
            <p className="lede">
              כל בעל נכס והצרכים שלו. משחרור מלא של שלב השכרה ועד ניהול שמכסה
              גם את הבלתי־צפוי. אפשר לשדרג / לשנות בכל עת.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 border-t border-ink-200 md:grid-cols-2 xl:grid-cols-4">
          {tracks.map((t, i) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={`relative flex flex-col bg-white p-7 transition-base hover:bg-cream-50 sm:p-8 ${
                i < tracks.length - 1 ? 'border-b border-ink-200 md:border-b-0' : ''
              } ${
                i % 2 === 1 ? 'md:border-b md:border-ink-200 xl:border-b-0' : ''
              } ${
                i > 0 ? 'md:border-l md:border-ink-200' : ''
              } ${
                i === 2 ? 'xl:border-l xl:border-ink-200' : ''
              }`}
            >
              {t.featured && (
                <span className="absolute inset-x-0 top-0 h-px bg-brand" />
              )}

              <div className="flex items-baseline justify-between">
                <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-brand">
                  {t.tagline}
                </p>
                {t.featured && (
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand">
                    הפופולרי
                  </span>
                )}
              </div>

              <h3
                className="mt-3 font-display font-bold tracking-tight text-ink"
                style={{
                  fontSize: 'clamp(1.75rem, 2.6vw, 2.25rem)',
                  letterSpacing: '-0.02em',
                  lineHeight: '1',
                }}
              >
                {t.name}
              </h3>

              <p className="mt-4 text-sm font-semibold text-ink-700">
                {t.audience}
              </p>
              <p className="mt-2 font-display text-base font-medium leading-snug text-ink sm:text-lg">
                {t.headline}
              </p>

              <ul className="mt-6 flex-1 space-y-2.5 border-t border-ink-100 pt-5 text-sm text-ink-600">
                {t.features.map((f) => (
                  <li key={f} className="flex items-baseline gap-2.5">
                    <Check
                      size={13}
                      strokeWidth={2.5}
                      className="mt-0.5 shrink-0 text-brand"
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-7 inline-flex w-fit items-center gap-2 border-b border-ink pb-1 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
              >
                התאימו עבורי
                <ArrowLeft size={13} />
              </a>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-ink-200 pt-8 sm:flex-row">
          <p className="font-display text-base font-medium text-ink-600 sm:text-lg">
            לא בטוחים איזה מסלול מתאים? פגישת ייעוץ של 30 דק׳, חינם, ללא התחייבות.
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
