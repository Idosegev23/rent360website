import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, FileText, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'תקנון שימוש · Rent360',
  description:
    'תקנון השימוש באתר Rent360 - תנאי שימוש, אחריות, קניין רוחני וברירת דין.',
  robots: { index: true, follow: true },
};

const LAST_UPDATED = '23 באפריל 2026';

export default function TermsPage() {
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
            <FileText size={13} />
            תקנון שימוש
          </div>
          <h1
            className="mt-5 font-display font-black text-ink"
            style={{
              fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
              lineHeight: '1.02',
              letterSpacing: '-0.025em',
            }}
          >
            תנאים ברורים, <br />
            <span className="text-brand">בלי הפתעות.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-[1.7] text-ink-500">
            השימוש באתר Rent360 כפוף לתנאים שלהלן. גלישה באתר או יצירת קשר
            דרכו מהוות הסכמה לתנאים אלה.
          </p>
          <p className="mt-3 text-sm text-ink-400">
            עודכן לאחרונה: <span className="font-bold text-ink">{LAST_UPDATED}</span>
          </p>
        </header>

        <div className="space-y-10">
          <Section title="1. כללי">
            <p>
              אתר זה (rent360.co.il) מופעל על ידי{' '}
              <strong className="font-bold text-ink">רנט 360 אנטרפרייז בע״מ</strong>{' '}
              (להלן: ״החברה״). השימוש באתר מותנה בהסכמה לתקנון זה במלואו. אם
              אינכם מסכימים - אנא הימנעו משימוש באתר.
            </p>
            <p>
              ניסוח התקנון בלשון זכר נעשה לצרכי נוחות בלבד; כוונתו היא לכל המינים
              באופן שווה.
            </p>
          </Section>

          <Section title="2. השירות">
            <p>
              Rent360 הינה חברה למתן שירותי תיווך, ניהול, השכרה ותפעול של נכסים
              להשכרה באזור הקריות, חיפה ונשר. התוכן באתר מוצג לצורכי מידע
              והתרשמות. תנאי ההתקשרות הסופיים יוסכמו בכתב במסגרת חוזה השירות.
            </p>
          </Section>

          <Section title="3. שימוש מותר">
            <p>
              מותר להשתמש באתר לצרכים אישיים בלבד. אסור:
            </p>
            <ul className="mt-2 list-disc space-y-2 pr-5">
              <li>להעתיק, לשכפל, לשנות, להפיץ או לפרסם את התוכן ללא רשות בכתב.</li>
              <li>לבצע פעולות שעלולות לפגוע בתפקוד האתר או באבטחתו.</li>
              <li>להעלות או לשלוח מידע פוגעני, מוטעה, או מפר זכויות.</li>
              <li>לאסוף נתונים על משתמשים אחרים.</li>
            </ul>
          </Section>

          <Section title="4. קניין רוחני">
            <p>
              כל הזכויות באתר - לרבות עיצוב, קוד, טקסטים, סימני מסחר, גרפיקה
              ולוגו - שייכות לחברה או למי שהעניק לה רישיון שימוש. אין לעשות
              בהם שימוש מסחרי ללא אישור מראש ובכתב.
            </p>
          </Section>

          <Section title="5. הגבלת אחריות">
            <p>
              המידע באתר מוצג ״כפי שהוא״ (AS IS). למרות מאמצינו לדיוק, ייתכנו
              טעויות, השמטות או שינויים. החברה אינה אחראית לכל נזק ישיר או
              עקיף שייגרם משימוש באתר או מהסתמכות על המידע בו.
            </p>
            <p>
              קישורים לאתרים חיצוניים נועדו לנוחות בלבד; אין לחברה אחריות
              לתוכנם או לזמינותם של אתרים אלה.
            </p>
          </Section>

          <Section title="6. טופס יצירת קשר">
            <p>
              שליחת פרטים בטופס מהווה הסכמה ליצירת קשר חוזר מטעם החברה. הפרטים
              נשמרים אצלנו לצורך מענה לפנייה ובהתאם ל
              <Link href="/privacy" className="font-bold text-ink underline decoration-brand decoration-2 underline-offset-2">
                {' '}מדיניות הפרטיות
              </Link>
              . שליחת הטופס אינה יוצרת התחייבות חוזית של מי מהצדדים.
            </p>
          </Section>

          <Section title="7. שינויים בתקנון">
            <p>
              החברה רשאית לעדכן את התקנון מעת לעת. עדכונים יפורסמו באתר וייכנסו
              לתוקף עם פרסומם. תאריך העדכון מופיע בראש המסמך.
            </p>
          </Section>

          <Section title="8. ברירת דין וסמכות שיפוט">
            <p>
              על תקנון זה יחולו דיני מדינת ישראל בלבד. סמכות השיפוט הייחודית
              לדון בכל סכסוך הקשור באתר תהא לבתי המשפט המוסמכים במחוז חיפה.
            </p>
          </Section>

          <Section title="9. יצירת קשר">
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
