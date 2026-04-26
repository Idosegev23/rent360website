'use client';

import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import { ArrowLeft, Check, Star, MapPin, Home, KeyRound, ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';

const LISTINGS = [
  { rooms: '4 חדרים', area: 'נווה גנים, ביאליק', price: '6,400₪', tag: 'פורסם עכשיו' },
  { rooms: '3 חדרים', area: 'בן גוריון, מוצקין', price: '4,600₪', tag: 'חדש במאגר' },
  { rooms: '4 חדרים', area: 'דרך עכו, חיפה', price: '7,200₪', tag: 'פורסם הבוקר' },
  { rooms: '3 חדרים', area: 'נשר עילית', price: '5,100₪', tag: 'חדש במאגר' },
  { rooms: 'דופלקס 5 חד׳', area: 'הסביונים, ביאליק', price: '8,900₪', tag: 'פורסם השבוע' },
  { rooms: '2 חדרים', area: 'תאשור, קרית ים', price: '3,800₪', tag: 'נכנס לרגע' },
];

function RotatingListing() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % LISTINGS.length), 3500);
    return () => clearInterval(id);
  }, []);
  const l = LISTINGS[i];
  return (
    <div className="relative mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-clay text-white shadow-warm">
            <Home size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-wider text-white/50">
              {l.tag}
            </p>
            <p className="mt-0.5 truncate font-display text-sm font-bold">
              {l.rooms} · {l.area} · {l.price}
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-moss/90 px-2 py-0.5 text-[10px] font-bold text-white">
            פנוי
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* Animated number counter */
function Counter({ to, suffix = '', duration = 1.6 }: { to: number; suffix?: string; duration?: number }) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(mv, to, { duration, ease: [0.2, 0.65, 0.3, 0.95] });
    const unsub = rounded.on('change', (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [to, duration, mv, rounded]);

  return (
    <span className="tabular">
      {display}
      <span className="text-brand">{suffix}</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36"
    >
      {/* Warm layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream-50 to-white" />
      <div className="pointer-events-none absolute inset-0 bg-warm-radial" />
      <div className="pointer-events-none absolute inset-0 bg-dots [background-size:24px_24px] opacity-[0.18]" />

      {/* Warm ambient — 1 glow only, less competing layers */}
      <div className="pointer-events-none absolute -left-32 -top-16 h-[480px] w-[480px] rounded-full bg-brand/12 blur-[120px]" />

      <div className="edge relative">
        <div className="grid items-center gap-12 pb-20 md:grid-cols-12 md:gap-10 lg:pb-28">
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
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sand-200 bg-white/80 px-3 py-1 text-[11px] font-semibold text-ink-600 shadow-soft backdrop-blur-sm">
                <Star size={11} fill="#F47B20" strokeWidth={0} />
                4.9 · 120+ ביקורות
                <span className="mx-1 h-3 w-px bg-ink-200" />
                <span className="text-clay-500">מומלץ</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8 font-display font-black text-ink"
              style={{
                fontSize: 'clamp(2.75rem, 7vw, 5.75rem)',
                lineHeight: '1.02',
                letterSpacing: '-0.035em',
              }}
            >
              ניהול נכסים שהופך השכרה לחוויה{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-gradient-warm">נעימה ובטוחה.</span>
                <svg
                  className="absolute inset-x-0 -bottom-3 h-4 w-full sm:-bottom-4 sm:h-5"
                  viewBox="0 0 240 18"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.7, ease: 'easeInOut' }}
                    d="M2 13 C 40 6, 90 6, 120 10 S 200 14, 238 6"
                    stroke="#F47B20"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-7 max-w-2xl font-body text-lg leading-[1.65] text-ink-500 sm:text-xl"
            >
              איתור שוכרים באמצעות{' '}
              <strong className="font-bold text-ink">טכנולוגיה פורצת דרך המשלבת AI</strong>
              {' '}— כך אנחנו מאתרים שוכרים מתאימים בטווח קצר.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 max-w-2xl font-body text-base leading-[1.7] text-ink-500"
            >
              Rent360 מנהלת את הנכס שלכם מהעלאת המודעה ועד החוזה — וגם אחריו.
              שירות מלא לבעלי דירות בקריות, חיפה ונשר.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-ink-600"
            >
              {[
                { t: 'פגישת ייעוץ בחינם', icon: Check },
                { t: 'סוכן אישי צמוד', icon: KeyRound },
                { t: 'הגנה על דמי השכירות', icon: ShieldCheck },
              ].map(({ t, icon: Icon }) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon size={13} strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
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

            {/* Mini trust bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <div className="flex -space-x-2 space-x-reverse">
                {['י', 'ר', 'נ', 'ל'].map((n, i) => (
                  <span
                    key={i}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-brand to-clay font-display text-xs font-black text-white shadow-soft"
                    style={{
                      backgroundImage:
                        i === 0
                          ? 'linear-gradient(135deg,#F47B20,#C9623F)'
                          : i === 1
                            ? 'linear-gradient(135deg,#3F5541,#5A7560)'
                            : i === 2
                              ? 'linear-gradient(135deg,#D96711,#A14C0C)'
                              : 'linear-gradient(135deg,#BD8F49,#E3C78B)',
                    }}
                  >
                    {n}
                  </span>
                ))}
              </div>
              <p className="text-xs leading-relaxed text-ink-500">
                <span className="font-bold text-ink">540+ שוכרים פעילים</span> במאגר
                <br />
                מחכים לדירה הבאה שלהם.
              </p>
            </motion.div>
          </div>

          {/* Right — Stat card + floating property snippets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="md:col-span-5"
          >
            <div className="relative">
              {/* Decorative glow ring */}
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-brand/25 via-clay/15 to-transparent blur-2xl"
              />

              {/* Main dark card */}
              <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-ink via-ink-700 to-ink-800 p-8 text-white shadow-lift sm:p-10">
                {/* Warm glow inside */}
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-60 w-60 rounded-full bg-brand/45 blur-3xl" />
                <div className="pointer-events-none absolute -top-24 -right-24 h-52 w-52 rounded-full bg-clay/30 blur-3xl" />

                {/* Subtle property icon pattern */}
                <svg
                  aria-hidden
                  className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
                  viewBox="0 0 200 200"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <defs>
                    <pattern id="rooftop" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M0 30 L20 10 L40 30" stroke="currentColor" strokeWidth="1" fill="none" />
                    </pattern>
                  </defs>
                  <rect width="200" height="200" fill="url(#rooftop)" />
                </svg>

                <div className="relative flex items-center gap-2">
                  <span className="relative inline-flex h-2.5 w-2.5">
                    <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
                  </span>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                    הבית של הנכס שלך
                  </p>
                </div>

                <p
                  className="relative mt-4 font-display font-black text-white"
                  style={{
                    fontSize: 'clamp(2rem, 4.2vw, 3.25rem)',
                    lineHeight: '1',
                    letterSpacing: '-0.03em',
                  }}
                >
                  שירות מלא, <br />
                  <span className="text-gradient-warm bg-clip-text">שקט מלא.</span>
                </p>

                <div className="relative mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                  <Stat value={9} suffix="ימ׳" label="ממוצע להשכרה" />
                  <Stat value={540} suffix="+" label="שוכרים במאגר" />
                  <Stat value={92} suffix="%" label="דיירים שנשארים" />
                </div>

                {/* Rotating live property feed */}
                <RotatingListing />
              </div>

              {/* Floating testimonial */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -right-3 -top-6 hidden animate-float-slow rounded-2xl border border-sand-200 bg-white p-4 shadow-card sm:block"
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-full font-display text-base font-black text-white"
                    style={{
                      backgroundImage: 'linear-gradient(135deg,#F47B20,#C9623F)',
                    }}
                  >
                    י
                  </div>
                  <div>
                    <p className="text-xs font-bold text-ink">יעל ש.</p>
                    <p className="text-[10px] text-ink-400">קרית ביאליק</p>
                  </div>
                </div>
                <p className="mt-2.5 max-w-[200px] text-[11px] font-medium leading-relaxed text-ink-600">
                  ״שותף אמיתי. כל בעיה מטופלת, יש לי דוחות, והכי חשוב — שקט.״
                </p>
                <div className="mt-2 flex">
                  {[...Array(5)].map((_, n) => (
                    <Star key={n} size={10} fill="#F47B20" strokeWidth={0} />
                  ))}
                </div>
              </motion.div>

              {/* Floating contract badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-5 -left-3 hidden animate-float rounded-2xl border border-sand-200 bg-white p-4 shadow-card sm:flex sm:items-center sm:gap-3"
              >
                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-moss/10 text-moss-500">
                  <Check size={22} strokeWidth={3} />
                  <span className="absolute -right-1 -top-1 inline-flex h-3 w-3">
                    <span className="absolute inset-0 animate-pulse-ring rounded-full bg-moss-400" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-moss-400 ring-2 ring-white" />
                  </span>
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

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-cream" />
    </section>
  );
}

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  return (
    <div>
      <p
        className="flex items-baseline gap-1 font-display text-3xl font-black text-white sm:text-4xl"
        style={{ letterSpacing: '-0.02em' }}
      >
        <Counter to={value} suffix={suffix} />
      </p>
      <p className="mt-1 text-[11px] font-semibold text-white/60">{label}</p>
    </div>
  );
}
