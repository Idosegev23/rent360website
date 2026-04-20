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
} from 'lucide-react';

const items = [
  {
    icon: Database,
    title: 'מאגר בעלי נכסים',
    body: 'מאגר גדול, אקטואלי ומנוהל חכם — שמושך אלינו שוכרים איכותיים.',
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
  },
];

export default function Differentiators() {
  return (
    <section id="differentiators" className="relative bg-white py-20 lg:py-28">
      <div className="edge">
        <div className="grid gap-8 pb-12 md:grid-cols-12 md:gap-16 md:pb-16">
          <div className="md:col-span-5">
            <span className="kicker">למה אנחנו</span>
            <h2
              className="mt-5 h-display"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                lineHeight: '1.02',
              }}
            >
              מה שמבדיל אותנו.
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-4">
            <p className="lede">
              חברות ניהול רבות אומרות את אותם הדברים. אנחנו מעדיפים להראות
              איפה אנחנו שונים — במערכות, בכלים, ובלילות שאתם ישנים.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.article
                key={it.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                className="group rounded-2xl border border-ink-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-card"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">
                  {it.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
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
