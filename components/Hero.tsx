'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Check, Star, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pt-28 sm:pt-32 lg:pt-36">
      {/* Soft orange ambient on top-left */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-brand/5 blur-3xl" />

      <div className="edge relative">
        <div className="grid items-center gap-12 pb-16 md:grid-cols-12 md:gap-10 lg:pb-24">
          {/* Left — Copy */}
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="kicker">
                <MapPin size={11} className="text-brand" />
                הקריות · מאז 2019
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-50 px-3 py-1 text-[11px] font-semibold text-ink-500">
                <Star size={11} fill="#F47B20" strokeWidth={0} />
                4.9 · 120+ ביקורות
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 font-display font-black text-ink"
              style={{
                fontSize: 'clamp(2.75rem, 7vw, 5.5rem)',
                lineHeight: '1.02',
                letterSpacing: '-0.03em',
              }}
            >
              ניהול נכסים שהופך
              <br />
              השכרה לדבר{' '}
              <span className="relative inline-block">
                <span className="relative z-10">נעים.</span>
                <span className="absolute inset-x-0 bottom-1 h-3 bg-brand/30 sm:bottom-2 sm:h-4" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 max-w-xl text-lg leading-[1.65] text-ink-500 sm:text-xl"
            >
              Rent360 מנהלת את הנכס שלכם מהעלאת המודעה ועד החוזה — וגם אחריו.
              שירות מלא לבעלי דירות באזור הקריות: ביאליק, ים, מוצקין, אתא,
              חיים.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-ink-600"
            >
              {[
                'פגישת ייעוץ בחינם',
                'סוכן אישי צמוד',
                'הגנה על דמי השכירות',
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check size={16} strokeWidth={3} className="text-brand" />
                  {t}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a href="#contact" className="btn-brand group">
                פגישת ייעוץ חינם
                <ArrowLeft
                  size={16}
                  className="transition-transform duration-200 group-hover:-translate-x-1"
                />
              </a>
              <a href="#tracks" className="btn-secondary">
                לצפייה במסלולים
              </a>
            </motion.div>
          </div>

          {/* Right — Stat card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="md:col-span-5"
          >
            <div className="relative">
              {/* Main stat card */}
              <div className="relative overflow-hidden rounded-4xl bg-ink p-8 text-white shadow-lift sm:p-10">
                <div className="pointer-events-none absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-brand/40 blur-3xl" />

                <p className="text-[11px] font-bold uppercase tracking-wider text-white/50">
                  הבית של הנכס שלך
                </p>
                <p
                  className="relative mt-3 font-display font-black text-white"
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    lineHeight: '1',
                    letterSpacing: '-0.025em',
                  }}
                >
                  שירות מלא, <br />
                  <span className="text-brand">שקט מלא.</span>
                </p>

                <div className="relative mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                  <Stat value="9" suffix="ימ׳" label="ממוצע להשכרה" />
                  <Stat value="540" suffix="+" label="שוכרים במאגר" />
                  <Stat value="92" suffix="%" label="דיירים שנשארים" />
                </div>
              </div>

              {/* Floating testimonial snippet */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -right-3 -top-5 hidden rounded-2xl border border-ink-100 bg-white p-4 shadow-card sm:block"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand font-display text-base font-black text-white">
                    י
                  </div>
                  <div>
                    <p className="text-xs font-bold text-ink">יעל ש.</p>
                    <p className="text-[10px] text-ink-400">קרית ביאליק</p>
                  </div>
                </div>
                <p className="mt-2.5 max-w-[180px] text-[11px] font-medium leading-relaxed text-ink-600">
                  ״שותף אמיתי. כל בעיה מטופלת, יש לי דוחות, והכי חשוב — שקט.״
                </p>
              </motion.div>

              {/* Floating trust badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-ink-100 bg-white p-4 shadow-card sm:flex sm:items-center sm:gap-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Check size={20} strokeWidth={3} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-ink-400">
                    חוזה נחתם
                  </p>
                  <p className="text-xs font-bold text-ink">היום · נווה גנים</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label }: { value: string; suffix: string; label: string }) {
  return (
    <div>
      <p className="flex items-baseline gap-1 font-display text-3xl font-black tabular text-white sm:text-4xl">
        {value}
        <span className="text-xl text-brand">{suffix}</span>
      </p>
      <p className="mt-1 text-[11px] font-semibold text-white/60">{label}</p>
    </div>
  );
}
