'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Building2, Sparkles, Briefcase, Quote } from 'lucide-react';

const credentials = [
  {
    icon: Briefcase,
    title: 'ניסיון של שנים בתחום הנדל״ן',
    body: 'ניהול והשכרת נכסים באזור הקריות, חיפה ונשר — היכרות מעמיקה עם השטח.',
  },
  {
    icon: Sparkles,
    title: 'שיווק פרויקטים יוקרתיים',
    body: 'רקע בשיווק נדל״ן פרימיום — הנכס שלך מוצג ברמה הגבוהה ביותר.',
  },
  {
    icon: GraduationCap,
    title: 'תואר ראשון ושני',
    body: 'יחסים בינלאומיים ומדיניות ציבורית — ניתוח וגישור לכל עסקה.',
  },
  {
    icon: Building2,
    title: 'הסמכה ביזמות בנייה',
    body: 'הטכניון. הבנה הנדסית של בניין, שיפוץ ותחזוקה.',
  },
];

export default function Founder() {
  return (
    <section id="founder" className="relative overflow-hidden bg-gradient-to-b from-cream via-cream-100 to-cream py-24 lg:py-32">
      {/* Ambient — single warm glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-brand/8 blur-[120px]" />

      <div className="edge relative">
        <div className="grid gap-12 md:grid-cols-12 md:gap-14">
          {/* Portrait panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5"
          >
            <div className="relative">
              {/* Glow ring */}
              <div
                aria-hidden
                className="absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-br from-brand/25 via-clay/15 to-transparent blur-2xl"
              />

              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.25rem] bg-ink shadow-lift">
                {/* Warm gradient portrait */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'radial-gradient(ellipse 70% 55% at 50% 35%, #F47B20 0%, #C9623F 40%, #833B23 70%, #18181B 100%)',
                  }}
                />
                <div className="absolute inset-0 bg-grain opacity-20 mix-blend-overlay" />

                {/* Monogram */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="font-display font-black text-white/95 drop-shadow-[0_12px_40px_rgba(17,17,19,0.45)]"
                    style={{
                      fontSize: 'clamp(10rem, 24vw, 22rem)',
                      lineHeight: 1,
                      textShadow: '0 2px 0 rgba(255,255,255,0.1)',
                    }}
                  >
                    ז
                  </span>
                </div>

                {/* Corner badges */}
                <div className="absolute right-5 top-5 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/90 backdrop-blur-md">
                  Founder · CEO
                </div>
                <div className="absolute left-5 top-5 flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[10px] font-bold text-white/90 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-moss-300" />
                  זמין לייעוץ
                </div>

                {/* Caption */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/95 via-ink/60 to-transparent p-7 text-white sm:p-8">
                  <p
                    className="font-display text-4xl font-black tracking-tight sm:text-5xl"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    זיו עטיה
                  </p>
                  <p className="mt-1.5 text-sm text-white/70">
                    מייסד ומנכ״ל · Rent360
                  </p>
                </div>
              </div>

              {/* Floating credential chip */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="absolute -right-4 bottom-16 hidden animate-float rounded-2xl border border-sand-200 bg-white p-4 shadow-card sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Building2 size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-ink-400">
                      חברות בארגון
                    </p>
                    <p className="text-xs font-bold text-ink">TLVA · קהילת סוכנים</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio column */}
          <div className="md:col-span-7">
            <span className="kicker">המייסד</span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="mt-6 h-display"
              style={{
                fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
                lineHeight: '1',
              }}
            >
              נעים להכיר. <br />
              <span className="text-gradient-warm">זיו עטיה.</span>
            </motion.h2>

            <p className="mt-7 max-w-xl text-lg leading-[1.7] text-ink-500 sm:text-xl">
              מנכ״ל ובעלים של Rent360 — איש חזון עם תשוקה אמיתית לעולם הנדל״ן.
              שילוב של ניסיון שטח, רקע שיווקי יוקרתי, וידע אקדמי מעמיק.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {credentials.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  className="group relative overflow-hidden rounded-2xl border border-sand-200 bg-white/80 p-5 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-soft"
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-24 w-24 rounded-full bg-brand/0 blur-2xl transition-all duration-500 group-hover:bg-brand/15" />
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-clay text-white shadow-warm">
                    <c.icon size={17} />
                  </div>
                  <h3 className="relative mt-3.5 font-display text-base font-bold text-ink">
                    {c.title}
                  </h3>
                  <p className="relative mt-1.5 text-xs leading-relaxed text-ink-500">
                    {c.body}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Signature quote */}
            <div className="relative mt-8 overflow-hidden rounded-3xl border border-sand-200 bg-white/90 p-6 shadow-soft backdrop-blur-sm sm:p-7">
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1.5 bg-gradient-to-b from-brand via-clay to-brand-700" />
              <Quote size={28} className="absolute left-6 top-6 text-brand/25" strokeWidth={1.5} />
              <p className="relative mr-3 font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
                הולכים יד ביד. יודעים לזהות את הצרכים האישיים של כל בעל נכס —
                ולתת להם מענה.
              </p>
              <p className="relative mt-4 mr-3 text-xs font-bold uppercase tracking-wider text-clay-500">
                — זיו עטיה, מייסד
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
