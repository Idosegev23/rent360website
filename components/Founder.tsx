'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Building2, Sparkles, Briefcase, Quote } from 'lucide-react';

const credentials = [
  {
    icon: Briefcase,
    title: 'שנות ניסיון בנדל״ן',
    body: 'ניהול והשכרה של נכסים, עם התמחות בשוק המקומי של הקריות.',
  },
  {
    icon: Sparkles,
    title: 'שיווק פרויקטים יוקרתיים',
    body: 'הבנה שהנכס שלך הוא מוצר — ומגיעה לו הצגה ברמה גבוהה.',
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
    <section id="founder" className="relative bg-cream py-20 lg:py-28">
      <div className="edge">
        <div className="grid gap-12 md:grid-cols-12 md:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-ink shadow-lift">
              {/* Portrait placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-ink-700 via-ink-600 to-ink-800" />
              <div className="absolute inset-0 flex items-center justify-center opacity-95">
                <span
                  className="font-display font-black text-brand"
                  style={{ fontSize: 'clamp(10rem, 22vw, 20rem)', lineHeight: 1 }}
                >
                  ז
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-7 text-white sm:p-8">
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/60" dir="ltr">
                  Founder & CEO
                </p>
                <p className="mt-2 font-display text-3xl font-black sm:text-4xl">
                  זיו עטיה
                </p>
                <p className="mt-1 text-sm text-white/60">בן 35 · תושב הצפון</p>
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-7">
            <span className="kicker">המייסד</span>
            <h2
              className="mt-5 h-display"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                lineHeight: '1',
              }}
            >
              נעים להכיר. <br />
              <span className="text-brand">זיו עטיה.</span>
            </h2>

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
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                  className="rounded-2xl border border-ink-100 bg-white p-5"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <c.icon size={17} />
                  </div>
                  <h3 className="mt-3.5 font-display text-base font-bold text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-500">
                    {c.body}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border-r-4 border-brand bg-white py-4 pl-5 pr-5">
              <Quote size={22} className="mt-1 shrink-0 text-brand" />
              <p className="font-display text-lg font-medium leading-snug text-ink sm:text-xl">
                ״הולכים יד ביד. יודעים לזהות את הצרכים האישיים של כל בעל
                נכס — ולתת להם מענה.״
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
