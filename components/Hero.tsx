'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Star, MapPin, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

const LISTINGS = [
  { rooms: '4 חדרים', area: 'נווה גנים, קרית ביאליק', price: '6,400₪' },
  { rooms: '3 חדרים', area: 'בן גוריון, קרית מוצקין', price: '4,600₪' },
  { rooms: '4 חדרים', area: 'דרך עכו, חיפה', price: '7,200₪' },
  { rooms: '3 חדרים', area: 'נשר עילית', price: '5,100₪' },
  { rooms: 'דופלקס 5 חד׳', area: 'הסביונים, קרית ביאליק', price: '8,900₪' },
];

function RotatingListing() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % LISTINGS.length), 3500);
    return () => clearInterval(id);
  }, []);
  const l = LISTINGS[i];
  return (
    <div className="overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35 }}
          className="flex flex-wrap items-baseline gap-x-3"
        >
          <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-400">
            פנוי
          </span>
          <span className="font-display text-sm font-semibold text-ink">
            {l.rooms} · {l.area}
          </span>
          <span className="shrink-0 font-display text-sm font-bold tabular text-brand">
            {l.price}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative bg-white pt-28 sm:pt-32 lg:pt-36">
      <div className="edge">
        {/* Top eyebrow row */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-x-6 gap-y-2 pb-10 text-[12px]"
        >
          <span className="eyebrow eyebrow-brand">
            ניהול והשכרת נכסים · מאז 2019
          </span>
          <span className="hidden h-3 w-px bg-ink-200 sm:block" />
          <span className="flex items-center gap-1.5 text-ink-600">
            <Star size={11} fill="#F47B20" strokeWidth={0} />
            <Star size={11} fill="#F47B20" strokeWidth={0} />
            <Star size={11} fill="#F47B20" strokeWidth={0} />
            <Star size={11} fill="#F47B20" strokeWidth={0} />
            <Star size={11} fill="#F47B20" strokeWidth={0} />
            <span className="mr-1 font-semibold">4.9 · 120+ ביקורות</span>
          </span>
          <span className="hidden h-3 w-px bg-ink-200 sm:block" />
          <span className="flex items-center gap-1.5 text-ink-500">
            <MapPin size={11} className="text-brand" />
            הקריות, חיפה, נשר
          </span>
        </motion.div>

        <div className="rule" />

        <div className="grid items-end gap-12 pb-20 pt-12 md:grid-cols-12 md:gap-10 lg:pb-28 lg:pt-16">
          {/* Headline */}
          <div className="md:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display font-bold text-ink"
              style={{
                fontSize: 'clamp(2.75rem, 7.5vw, 6rem)',
                lineHeight: '0.98',
                letterSpacing: '-0.035em',
              }}
            >
              ניהול נכסים שהופך
              <br />
              השכרה לחוויה{' '}
              <span className="text-brand">נעימה ובטוחה.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 max-w-xl text-lg leading-[1.65] text-ink-600 sm:text-xl"
            >
              איתור שוכרים באמצעות{' '}
              <strong className="font-semibold text-ink">טכנולוגיה פורצת דרך המשלבת AI</strong>
              {' '} -  שירות מלא לבעלי דירות בקריות, חיפה ונשר.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a href="#contact" className="btn-brand group">
                פגישת ייעוץ - חינם
                <ArrowLeft size={15} className="transition-transform duration-200 group-hover:-translate-x-1" />
              </a>
              <a href="#tracks" className="btn-ghost">
                לצפייה במסלולים
              </a>
              <a href="tel:+972545650748" className="ml-2 flex items-center gap-2 font-display text-base font-bold text-ink hover:text-brand tabular" dir="ltr">
                <Phone size={14} />
                054-565-0748
              </a>
            </motion.div>
          </div>

          {/* Right - KPI strip */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-4"
          >
            <div className="border-r border-ink-200 pr-6 sm:pr-8">
              <p className="eyebrow">המספרים שלנו</p>
              <dl className="mt-6 space-y-6">
                <Stat n="9" suffix="ימ׳" label="זמן ממוצע להשכרה" />
                <Stat n="540+" label="שוכרים פעילים במאגר" />
                <Stat n="92%" label="דיירים שנשארים לאורך זמן" />
              </dl>
            </div>
          </motion.div>
        </div>

        <div className="rule" />

        {/* Bottom strip - live ticker */}
        <div className="grid items-center gap-6 py-8 md:grid-cols-[auto_1fr_auto]">
          <div className="flex items-center gap-3">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            <span className="eyebrow">מתעדכן עכשיו</span>
          </div>
          <RotatingListing />
          <a href="#contact" className="link-quiet text-sm">
            רוצה להעלות את הדירה שלך →
          </a>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, suffix, label }: { n: string; suffix?: string; label: string }) {
  return (
    <div>
      <dd className="flex items-baseline gap-1.5 font-display font-bold text-ink tabular" style={{ fontSize: 'clamp(2.25rem, 4vw, 3rem)', lineHeight: '1', letterSpacing: '-0.02em' }}>
        {n}
        {suffix && <span className="text-base font-semibold text-ink-400">{suffix}</span>}
      </dd>
      <dt className="mt-2 text-sm font-medium text-ink-500">{label}</dt>
    </div>
  );
}
