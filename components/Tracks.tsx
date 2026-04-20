'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Check, Sparkles } from 'lucide-react';

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
      'סינון מתעניינים',
      'בדיקת BDI + כלכלית',
      'חוזה שכירות מותאם',
      'העברת מפתחות',
    ],
  },
  {
    id: 'ha',
    name: 'נעים הליכות',
    tagline: 'ניהול בלבד',
    audience: 'יש לכם דייר — אין לכם זמן',
    headline: 'אתם יוצאים מהתמונה.',
    features: [
      'שירות לדייר',
      'גבייה ודיווח חודשי',
      'ספקי מקצוע דרכנו',
      'ביקורים תקופתיים',
      'חידוש/סיום חוזה',
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
      'כל שכלול ב"נעים מאוד"',
      'שירותים משפטיים מורחבים',
      'בדיקת עומק (BDI + MOT)',
      'ביטוח דמי שכירות',
      'כיסוי התחייבויות לרשויות',
      'אחריות על דייר חלופי',
    ],
  },
];

export default function Tracks() {
  return (
    <section id="tracks" className="relative bg-cream py-20 lg:py-28">
      <div className="edge">
        <div className="max-w-3xl">
          <span className="kicker">מסלולי שירות</span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="mt-5 h-display"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              lineHeight: '1.02',
            }}
          >
            ארבעה מסלולים. <br />
            <span className="text-brand">בחרו את הרמה שלכם.</span>
          </motion.h2>
          <p className="lede mt-6 max-w-2xl">
            כל בעל נכס והצרכים שלו. משחרור מלא של שלב השכרה ועד ניהול שמכסה גם
            את הבלתי־צפוי. אפשר לשדרג/לשנות בכל עת.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {tracks.map((t, i) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group relative flex flex-col overflow-hidden rounded-3xl p-7 transition-all duration-300 ${
                t.featured
                  ? 'bg-ink text-white shadow-lift xl:-translate-y-3'
                  : 'border border-ink-100 bg-white hover:shadow-card'
              }`}
            >
              {t.featured && (
                <>
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/25 blur-3xl" />
                  <div className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-brand px-2.5 py-1 text-[10px] font-bold text-white">
                    <Sparkles size={10} />
                    פופולרי
                  </div>
                </>
              )}

              <p className="relative text-[11px] font-bold uppercase tracking-wider text-brand">
                {t.tagline}
              </p>
              <h3 className="relative mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
                {t.name}
              </h3>
              <p
                className={`relative mt-4 text-sm font-semibold ${
                  t.featured ? 'text-white/75' : 'text-ink-500'
                }`}
              >
                {t.audience}
              </p>
              <p
                className={`relative mt-2 font-display text-lg font-bold leading-snug ${
                  t.featured ? 'text-white' : 'text-ink'
                }`}
              >
                {t.headline}
              </p>

              <ul
                className={`relative mt-6 flex-1 space-y-2.5 border-t pt-5 text-sm ${
                  t.featured ? 'border-white/15 text-white/85' : 'border-ink-100 text-ink-600'
                }`}
              >
                {t.features.map((f) => (
                  <li key={f} className="flex items-baseline gap-2.5">
                    <span
                      className={`flex h-4 w-4 shrink-0 translate-y-0.5 items-center justify-center rounded-full ${
                        t.featured ? 'bg-brand' : 'bg-brand/15'
                      }`}
                    >
                      <Check
                        size={10}
                        strokeWidth={3}
                        className={t.featured ? 'text-white' : 'text-brand'}
                      />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`relative mt-7 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  t.featured
                    ? 'bg-white text-ink hover:bg-brand hover:text-white'
                    : 'bg-ink text-white hover:bg-brand'
                }`}
              >
                התאימו עבורי
                <ArrowLeft size={13} />
              </a>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl border border-ink-100 bg-white p-6 text-center sm:flex-row sm:p-8 sm:text-right">
          <div>
            <p className="font-display text-xl font-bold text-ink sm:text-2xl">
              לא בטוחים איזה מסלול מתאים?
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
