import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'מדיניות פרטיות · Rent360',
  description:
    'מדיניות הפרטיות של אתר Rent360 - איסוף, שימוש, שמירה ומחיקה של מידע אישי.',
  robots: { index: true, follow: true },
};

const LAST_UPDATED = '23 באפריל 2026';

export default function PrivacyPage() {
  return (
    <main id="main" className="relative min-h-screen bg-cream-50">
      <div className="edge py-16 lg:py-24">
        <div className="mb-10 flex items-center justify-between gap-4">
          <Link href="/" aria-label="חזרה לעמוד הבית">
            <Image
              src="/logos/logo.svg"
              alt="Rent360"
              width={140}
              height={54}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
          >
            <ArrowRight size={14} />
            לעמוד הבית
          </Link>
        </div>

        <header className="mb-12 border-b border-ink-100 pb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1.5 text-xs font-bold text-brand-700">
            <ShieldCheck size={13} />
            מדיניות פרטיות
          </div>
          <h1
            className="mt-5 font-display font-black text-ink"
            style={{
              fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
              lineHeight: '1.02',
              letterSpacing: '-0.025em',
            }}
          >
            הפרטיות שלכם <br />
            <span className="text-brand">חשובה לנו.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-[1.7] text-ink-500">
            המסמך הזה מסביר אילו נתונים אנו אוספים, למה, ואיך אנחנו שומרים
            עליהם - בהתאם לחוק הגנת הפרטיות, התשמ״א־1981 ולתקנות הגנת הפרטיות
            (אבטחת מידע), התשע״ז־2017.
          </p>
          <p className="mt-3 text-sm text-ink-400">
            עודכן לאחרונה: <span className="font-bold text-ink">{LAST_UPDATED}</span>
          </p>
        </header>

        <div className="space-y-10">
          <Section title="1. מי מפעיל את האתר">
            <p>
              אתר זה (rent360.co.il) מופעל על ידי{' '}
              <strong className="font-bold text-ink">רנט 360 אנטרפרייז בע״מ</strong>{' '}
              (להלן: ״החברה״ או ״אנחנו״), שכתובתה: שדרות משה גושן 27, קרית
              מוצקין.
            </p>
          </Section>

          <Section title="2. איזה מידע אנחנו אוספים">
            <p>
              <strong className="font-bold text-ink">מידע שאתם מוסרים מרצון</strong>:
              שם מלא, טלפון, אימייל, אזור גאוגרפי, מספר חדרים, ופרטים נוספים
              שתעבירו דרך טופס יצירת הקשר.
            </p>
            <p>
              <strong className="font-bold text-ink">מידע טכני שנאסף אוטומטית</strong>:
              כתובת IP, סוג דפדפן, מערכת הפעלה, דפים שבהם ביקרתם, ומקור הגעה  - 
              לצורכי אנליטיקה ושיפור האתר.
            </p>
            <p>
              <strong className="font-bold text-ink">עוגיות (Cookies)</strong>: אנו
              עושים שימוש בעוגיות חיוניות לתפעול האתר ובעוגיות אנליטיקה.
              ההסכמה שלכם נשמרת בדפדפן שלכם וניתנת להסרה בכל עת.
            </p>
          </Section>

          <Section title="3. למה אנחנו אוספים את המידע">
            <ul className="mt-2 list-disc space-y-2 pr-5">
              <li>יצירת קשר חוזרת ומתן מענה לפניות.</li>
              <li>ניהול מאגר לידים והתאמת שירות.</li>
              <li>שיפור חוויית המשתמש באתר.</li>
              <li>עמידה בדרישות חוק והוראות רגולטוריות.</li>
            </ul>
          </Section>

          <Section title="4. שיתוף מידע עם צד שלישי">
            <p>
              איננו מוכרים, משכירים או חולקים את המידע האישי שלכם עם גורמים
              חיצוניים - למעט במקרים הבאים:
            </p>
            <ul className="mt-2 list-disc space-y-2 pr-5">
              <li>ספקי שירות שמסייעים בתפעול האתר (אחסון, אנליטיקה, דיוור).</li>
              <li>חובה חוקית או צו של רשות מוסמכת.</li>
              <li>הגנה על זכויותיה של החברה במקרה של מחלוקת.</li>
            </ul>
          </Section>

          <Section title="5. אבטחת מידע">
            <p>
              אנו נוקטים באמצעי אבטחה סבירים ומקובלים להגנה על המידע: הצפנת
              תעבורה (HTTPS/TLS), הרשאות גישה מבוקרות, ובקרת גרסאות. עם זאת,
              אין מערכת חסינה ב-100% - ואנו ממליצים שלא לשלוח מידע רגיש דרך
              הטופס.
            </p>
          </Section>

          <Section title="6. שמירת מידע">
            <p>
              נתוני לידים נשמרים אצלנו למשך עד 24 חודשים מיום הפנייה האחרונה.
              לאחר מכן הם נמחקים אלא אם קיימת חובה חוקית לשמרם זמן ארוך יותר.
            </p>
          </Section>

          <Section title="7. הזכויות שלכם">
            <ul className="mt-2 list-disc space-y-2 pr-5">
              <li>זכות לעיין במידע השמור עליכם.</li>
              <li>זכות לבקש תיקון מידע שגוי.</li>
              <li>זכות לבקש מחיקה (״הזכות להישכח״) בכפוף לחוק.</li>
              <li>זכות להסיר הסכמה לשליחת תכנים שיווקיים.</li>
            </ul>
            <p>
              למימוש זכות - פנו אלינו בערוצים שלמטה. נטפל בפנייתכם תוך עד 30 ימי
              עבודה.
            </p>
          </Section>

          <Section title="8. פנייה אלינו">
            <div className="rounded-3xl border border-ink-100 bg-white p-6 sm:p-7">
              <p className="font-bold text-ink">רנט 360 אנטרפרייז בע״מ</p>
              <p className="mt-1 text-sm text-ink-500">שדרות משה גושן 27, קרית מוצקין</p>
              <dl className="mt-5 grid gap-3 sm:grid-cols-2">
                <div>
                  <dt className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-ink-400">
                    <Phone size={11} /> טלפון
                  </dt>
                  <dd className="mt-1">
                    <a
                      href="tel:+972545650748"
                      className="font-bold tabular text-ink hover:text-brand"
                      dir="ltr"
                    >
                      054-565-0748
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-ink-400">
                    <Mail size={11} /> אימייל
                  </dt>
                  <dd className="mt-1">
                    <a
                      href="mailto:rent@rent360.co.il"
                      className="font-bold text-ink hover:text-brand"
                      dir="ltr"
                    >
                      rent@rent360.co.il
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </Section>

          <Section title="9. שינויים במדיניות">
            <p>
              אנו רשאים לעדכן את המדיניות מעת לעת. במקרה של שינוי מהותי נפרסם
              הודעה באתר. תאריך העדכון האחרון מופיע בראש המסמך.
            </p>
          </Section>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-ink-100 pt-8">
          <p className="text-sm text-ink-500">
            © {new Date().getFullYear()} רנט 360 אנטרפרייז בע״מ. כל הזכויות שמורות.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand"
          >
            <ArrowRight size={14} />
            חזרה לעמוד הבית
          </Link>
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-ink-100 bg-white p-7 shadow-soft sm:p-9">
      <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-3 text-base leading-[1.75] text-ink-600">{children}</div>
    </section>
  );
}
