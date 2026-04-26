'use client';

import { motion } from 'framer-motion';

const credentials = [
  {
    title: 'ניסיון של שנים בנדל״ן',
    body: 'ניהול והשכרת נכסים באזור הקריות, חיפה ונשר — היכרות מעמיקה עם השטח.',
  },
  {
    title: 'שיווק פרויקטים יוקרתיים',
    body: 'רקע בשיווק נדל״ן פרימיום — הנכס שלך מוצג ברמה הגבוהה ביותר.',
  },
  {
    title: 'תואר ראשון ושני',
    body: 'יחסים בינלאומיים ומדיניות ציבורית — ניתוח וגישור לכל עסקה.',
  },
  {
    title: 'הסמכה ביזמות בנייה',
    body: 'הטכניון. הבנה הנדסית של בניין, שיפוץ ותחזוקה.',
  },
];

export default function Founder() {
  return (
    <section id="founder" className="bg-cream section-y">
      <div className="edge">
        <div className="grid gap-14 md:grid-cols-12 md:gap-12">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-ink">
              {/* Subtle warm gradient backdrop for monogram */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'linear-gradient(180deg, #18181B 0%, #0A0A0B 100%)',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-display font-bold text-brand"
                  style={{ fontSize: 'clamp(10rem, 22vw, 20rem)', lineHeight: 1, letterSpacing: '-0.05em' }}
                >
                  ז
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50" dir="ltr">
                  Founder · CEO
                </p>
                <p
                  className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  זיו עטיה
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <div className="md:col-span-7">
            <p className="eyebrow eyebrow-brand">המייסד</p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="mt-6 h-display"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: '1',
              }}
            >
              נעים להכיר. <br />
              <span className="text-brand">זיו עטיה.</span>
            </motion.h2>

            <p className="mt-7 max-w-xl text-lg leading-[1.7] text-ink-600 sm:text-xl">
              מנכ״ל ובעלים של Rent360 — איש חזון עם תשוקה אמיתית לעולם הנדל״ן.
              שילוב של ניסיון שטח, רקע שיווקי יוקרתי, וידע אקדמי מעמיק.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2">
              {credentials.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.06 }}
                  className={`px-6 py-6 ${
                    i % 2 === 0 ? 'sm:border-l sm:border-ink-200' : ''
                  } ${
                    i < credentials.length - 2 ? 'border-b border-ink-200' : 'border-b border-ink-200 sm:border-b-0'
                  } ${
                    i === credentials.length - 2 ? 'sm:border-b-0' : ''
                  }`}
                >
                  <p className="font-display text-xs font-bold tabular text-brand">
                    0{i + 1}
                  </p>
                  <h3 className="mt-3 font-display text-base font-semibold text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {c.body}
                  </p>
                </motion.div>
              ))}
            </div>

            <blockquote className="mt-10 border-r-2 border-brand pr-5">
              <p className="font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
                הולכים יד ביד. יודעים לזהות את הצרכים האישיים של כל בעל נכס —
                ולתת להם מענה.
              </p>
              <footer className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
                — זיו עטיה, מייסד
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
