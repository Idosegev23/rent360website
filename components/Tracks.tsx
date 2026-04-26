'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Check, Sparkles, Home, Key, Handshake, Shield } from 'lucide-react';

type Track = {
  id: string;
  icon: any;
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
    icon: Home,
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
    icon: Key,
    name: 'נעים הליכות',
    tagline: 'ניהול בלבד',
    audience: 'יש לכם דייר — אין לכם זמן',
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
    icon: Handshake,
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
    icon: Shield,
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
    <section id="tracks" className="relative overflow-hidden bg-gradient-to-b from-cream via-cream-100 to-cream py-24 lg:py-32">
      {/* Ambient — single warm glow */}
      <div className="pointer-events-none absolute -left-40 bottom-20 h-[420px] w-[420px] rounded-full bg-brand/8 blur-[120px]" />

      <div className="edge relative">
        <div className="max-w-3xl">
          <span className="kicker">מסלולי שירות</span>
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
            ארבעה מסלולים. <br />
            <span className="text-gradient-warm">בחרו את הרמה שלכם.</span>
          </motion.h2>
          <p className="lede mt-6 max-w-2xl">
            כל בעל נכס והצרכים שלו. משחרור מלא של שלב השכרה ועד ניהול שמכסה גם
            את הבלתי־צפוי. אפשר לשדרג / לשנות בכל עת.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {tracks.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.article
                key={t.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className={`group relative flex flex-col overflow-hidden rounded-3xl p-7 transition-base ${
                  t.featured
                    ? 'text-white shadow-lift xl:-translate-y-4 hover:-translate-y-[18px]'
                    : 'border border-sand-200/60 bg-white hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-card'
                }`}
                style={
                  t.featured
                    ? {
                        backgroundImage:
                          'linear-gradient(135deg,#18181B 0%,#27272A 55%,#833B23 110%)',
                      }
                    : undefined
                }
              >
                {t.featured && (
                  <>
                    <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/45 blur-3xl" />
                    <div className="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-clay/30 blur-3xl" />
                    <div className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-brand to-clay px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-warm">
                      <Sparkles size={10} />
                      פופולרי
                    </div>
                  </>
                )}

                {/* Icon */}
                <div
                  className={`relative flex h-12 w-12 items-center justify-center rounded-2xl ${
                    t.featured
                      ? 'bg-white/15 text-white backdrop-blur-sm'
                      : 'bg-gradient-to-br from-brand to-clay text-white shadow-warm'
                  }`}
                >
                  <Icon size={20} strokeWidth={2} />
                </div>

                <p
                  className={`relative mt-5 text-[11px] font-bold uppercase tracking-wider ${
                    t.featured ? 'text-brand-200' : 'text-clay-500'
                  }`}
                >
                  {t.tagline}
                </p>
                <h3
                  className="relative mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl"
                  style={{ letterSpacing: '-0.02em' }}
                >
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
                    t.featured ? 'border-white/15 text-white/85' : 'border-sand-200 text-ink-600'
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
                  className={`relative mt-7 inline-flex w-fit items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    t.featured
                      ? 'bg-white text-ink hover:bg-brand hover:text-white'
                      : 'bg-ink text-white hover:bg-gradient-to-r hover:from-brand hover:to-clay'
                  }`}
                >
                  התאימו עבורי
                  <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-0.5" />
                </a>
              </motion.article>
            );
          })}
        </div>

        {/* Tail CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 overflow-hidden rounded-3xl border border-sand-200 bg-white/80 p-7 text-center backdrop-blur-sm sm:flex-row sm:p-8 sm:text-right">
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
