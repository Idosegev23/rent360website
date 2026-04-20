'use client';

import { motion } from 'framer-motion';
import {
  Database,
  Users,
  ShieldCheck,
  Wrench,
  FileText,
  Sparkles,
  HeartHandshake,
  Scale,
  ArrowUpRight,
} from 'lucide-react';

type Item = {
  icon: any;
  title: string;
  body: string;
  span?: string; // Tailwind col-span class for bento feel
  accent?: 'dark' | 'brand' | 'cream';
};

const items: Item[] = [
  {
    icon: Database,
    title: 'מאגר בעלי נכסים',
    body: 'מאגר גדול, אקטואלי ומנוהל חכם — שמושך אלינו שוכרים איכותיים.',
    span: 'lg:col-span-2',
    accent: 'dark',
  },
  {
    icon: Users,
    title: 'קהילת שוכרים פעילה',
    body: 'משדכים באופן יזום בין דירות לשוכרים — לא מחכים שיצלצלו.',
  },
  {
    icon: FileText,
    title: 'מערכת CRM מתקדמת',
    body: 'כל פעולה, כל התקשרות, כל מסמך — מתועדים בזמן אמת.',
  },
  {
    icon: Wrench,
    title: 'שכירות ללא דאגות',
    body: 'חבילת שירות תיקונים לתקלות בנכס. בעל מקצוע מגיע — לא אתם.',
  },
  {
    icon: ShieldCheck,
    title: 'ביטוח דמי שכירות',
    body: 'אופציה לפוליסה שמבטיחה יציבות הכנסה גם מול דייר בעייתי.',
    accent: 'brand',
  },
  {
    icon: Scale,
    title: 'גב משפטי כלול',
    body: 'מכתב התראה מעו״ד ללא עלות. שירות משפטי ראשוני חינם.',
  },
  {
    icon: HeartHandshake,
    title: 'מעטפת דייר',
    body: 'ליווי במעבר — מוביל, חשבונות, תשתיות. הדייר מרגיש בבית.',
  },
  {
    icon: Sparkles,
    title: 'הדירה מתפנקת',
    body: 'חשמל וריהוט במחירים מוזלים — הדירה שלכם עולה בשווי.',
    span: 'lg:col-span-2',
    accent: 'cream',
  },
];

export default function Differentiators() {
  return (
    <section
      id="differentiators"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute left-1/3 top-0 h-[400px] w-[700px] rounded-full bg-brand/5 blur-[120px]" />

      <div className="edge relative">
        <div className="grid gap-8 pb-14 md:grid-cols-12 md:gap-16 md:pb-16">
          <div className="md:col-span-5">
            <span className="kicker">למה אנחנו</span>
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
              מה שמבדיל <br />
              <span className="text-gradient-warm">אותנו.</span>
            </motion.h2>
          </div>
          <div className="md:col-span-7 md:pt-4">
            <p className="lede">
              חברות ניהול רבות אומרות את אותם הדברים. אנחנו מעדיפים להראות איפה
              אנחנו שונים — במערכות, בכלים, ובלילות שאתם ישנים.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => {
            const Icon = it.icon;
            const isDark = it.accent === 'dark';
            const isBrand = it.accent === 'brand';
            const isCream = it.accent === 'cream';

            return (
              <motion.article
                key={it.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                className={`group relative overflow-hidden rounded-3xl p-6 transition-all duration-400 hover:-translate-y-1 ${it.span ?? ''} ${
                  isDark
                    ? 'text-white shadow-lift hover:shadow-[0_30px_70px_-30px_rgba(17,17,19,0.55)]'
                    : isBrand
                      ? 'text-white shadow-warm'
                      : isCream
                        ? 'border border-sand-200 bg-gradient-to-br from-cream to-sand-100 hover:border-brand/40 hover:shadow-warm'
                        : 'border border-sand-200/70 bg-white hover:border-brand/30 hover:shadow-warm'
                }`}
                style={
                  isDark
                    ? {
                        backgroundImage:
                          'linear-gradient(135deg,#18181B 0%,#27272A 50%,#833B23 120%)',
                      }
                    : isBrand
                      ? {
                          backgroundImage:
                            'linear-gradient(135deg,#F47B20 0%,#D96711 55%,#A14C0C 110%)',
                        }
                      : undefined
                }
              >
                {/* Decorative glow */}
                {isDark && (
                  <>
                    <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand/40 blur-3xl" />
                    <div className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-clay/25 blur-3xl" />
                  </>
                )}
                {isBrand && (
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/20 blur-3xl" />
                )}

                {/* Hover shine */}
                <span className="pointer-events-none absolute inset-0 overflow-hidden">
                  <span className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-[450%] group-hover:opacity-100" />
                </span>

                <div className="relative flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${
                      isDark
                        ? 'bg-white/12 text-white'
                        : isBrand
                          ? 'bg-white/20 text-white'
                          : 'bg-gradient-to-br from-brand to-clay text-white shadow-warm'
                    }`}
                  >
                    <Icon size={20} />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className={`opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 ${
                      isDark || isBrand ? 'text-white/70' : 'text-brand'
                    }`}
                  />
                </div>

                <h3
                  className={`relative mt-5 font-display text-lg font-bold sm:text-xl ${
                    isDark || isBrand ? 'text-white' : 'text-ink'
                  }`}
                >
                  {it.title}
                </h3>
                <p
                  className={`relative mt-2 text-sm leading-relaxed ${
                    isDark
                      ? 'text-white/70'
                      : isBrand
                        ? 'text-white/85'
                        : 'text-ink-500'
                  }`}
                >
                  {it.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
