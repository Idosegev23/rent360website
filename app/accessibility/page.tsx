import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Accessibility,
  CheckCircle2,
  Mail,
  Phone,
  User,
  AlertTriangle,
  Scale,
} from 'lucide-react';
export const metadata: Metadata = {
  title: 'הצהרת נגישות · Rent360',
  description:
    'הצהרת הנגישות של אתר Rent360 - עמידה בתקן ישראלי 5568 ובהנחיות WCAG 2.1 רמה AA.',
  robots: { index: true, follow: true },
};

const LAST_UPDATED = '23 באפריל 2026';

export default function AccessibilityStatementPage() {
  return (
    <main id="main" className="relative min-h-screen bg-cream-50">
        <div className="edge py-16 lg:py-24">
          {/* Logo + back */}
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

          {/* Header */}
          <header className="mb-12 border-b border-ink-100 pb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1.5 text-xs font-bold text-brand-700">
              <Accessibility size={13} />
              הצהרת נגישות
            </div>
            <h1
              className="mt-5 font-display font-black text-ink"
              style={{
                fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
                lineHeight: '1.02',
                letterSpacing: '-0.025em',
              }}
            >
              נגישות לכולם - <br />
              <span className="text-brand">מחויבות שלנו.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-[1.7] text-ink-500">
              ב־Rent360 אנו רואים בנגישות ערך מרכזי. האתר שלנו פותח ומתחזק כך
              שכל אדם, עם מוגבלות או בלעדיה, יוכל לגלוש, לקבל מידע, ולצור קשר
              - באותה הקלות.
            </p>
            <p className="mt-3 text-sm text-ink-400">
              תאריך עדכון אחרון: <span className="font-bold text-ink">{LAST_UPDATED}</span>
            </p>
          </header>

          {/* Sections */}
          <div className="space-y-10">
            <Section title="תקן הנגישות שלנו">
              <p>
                האתר מונגש בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, התשנ״ח־
                1998, ולתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות
                לשירות), התשע״ג־2013.
              </p>
              <p>
                ההנגשה מבוצעת על פי{' '}
                <strong className="font-bold text-ink">תקן ישראלי ת״י 5568</strong>{' '}
                ברמת AA, המבוסס על הנחיות{' '}
                <a
                  href="https://www.w3.org/TR/WCAG21/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link font-bold text-ink underline"
                >
                  WCAG 2.1
                </a>{' '}
                של ארגון W3C.
              </p>
            </Section>

            <Section title="התאמות ואמצעי נגישות" icon={<CheckCircle2 size={20} />}>
              <p>האתר כולל את ההתאמות הבאות:</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  'ניווט מלא באמצעות המקלדת (Tab, Shift+Tab, Enter, Esc)',
                  'מבנה כותרות היררכי (h1→h6) לתמיכה בקוראי מסך',
                  'תיאורי טקסט (alt) לתמונות ולוגואים',
                  'תגיות ARIA לכפתורים ולאלמנטים אינטראקטיביים',
                  'קישור "דילוג לתוכן" בראש כל עמוד (מופיע במיקוד)',
                  'ניגודיות צבעים העומדת בתקן AA (יחס 4.5:1 ומעלה)',
                  'תמיכה בהגדלת טקסט של עד 200% ללא איבוד תוכן',
                  'תמיכה מלאה בעברית, RTL ובקוראי מסך',
                  'תגובה לפי העדפת prefers-reduced-motion',
                  'טפסים עם תגיות label ברורות והודעות שגיאה נגישות',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-base leading-relaxed">
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-brand"
                    />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="תפריט נגישות" icon={<Accessibility size={20} />}>
              <p>
                בפינה השמאלית התחתונה של המסך זמין כפתור נגישות (אייקון אדם בעמידה).
                לחיצה עליו - או על צירוף המקשים{' '}
                <kbd className="rounded bg-ink-100 px-1.5 py-0.5 font-mono text-xs font-bold">
                  Alt + A
                </kbd>{' '}
                - פותחת תפריט עם ההתאמות הבאות:
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  'הגדלה/הקטנה של גודל הטקסט (עד +50%)',
                  'ניגודיות גבוהה (שחור על לבן)',
                  'ניגודיות הפוכה (צהוב על שחור)',
                  'שחור־לבן (ללא צבע)',
                  'הדגשת קישורים',
                  'הדגשת כותרות',
                  'פונט קריא לדיסלקסיה',
                  'עצירת אנימציות ותנועה',
                  'סמן עכבר מוגדל',
                  'איפוס הגדרות',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-base leading-relaxed">
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-brand"
                    />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-xl bg-brand/5 p-4 text-sm">
                ההעדפות שלכם נשמרות במכשיר שלכם ויחולו גם בביקורים עתידיים.
              </p>
            </Section>

            <Section title="מגבלות נגישות ידועות" icon={<AlertTriangle size={20} />}>
              <p>
                למרות המאמץ הרב להנגיש כל פריט באתר, חלק מהתכנים עשויים שלא
                להיות נגישים באופן מלא:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  'מסמכי PDF חיצוניים - אנו פועלים להנגיש בהדרגה. במידת הצורך ניתן לבקש גרסה נגישה.',
                  'תוכן משובץ מצדדים שלישיים (כגון Google Maps, Analytics) - כפוף לנגישות הספק.',
                  'אלמנטים עם אנימציות אוטומטיות - ניתנים לעצירה דרך תפריט הנגישות או הגדרות המערכת.',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-base leading-relaxed">
                    <AlertTriangle size={16} className="mt-1 shrink-0 text-clay-500" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="פנייה לרכז הנגישות" icon={<User size={20} />}>
              <p>
                אם נתקלתם בבעיית נגישות באתר - נשמח מאוד לשמוע. אנו מתחייבים לטפל
                בפנייה באופן המהיר ביותר. הפנייה תיעשה לרכז הנגישות שלנו:
              </p>

              <div className="mt-5 rounded-3xl border border-ink-100 bg-white p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <User size={22} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-ink-400">
                      רכז/ת נגישות
                    </p>
                    <p className="font-display text-2xl font-bold text-ink">
                      זיו עטיה
                    </p>
                  </div>
                </div>

                <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-ink-400">
                      <Phone size={12} /> טלפון
                    </dt>
                    <dd className="mt-1">
                      <a
                        href="tel:+972545650748"
                        className="font-display text-lg font-bold tabular text-ink hover:text-brand"
                        dir="ltr"
                      >
                        054-565-0748
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-ink-400">
                      <Mail size={12} /> דוא״ל
                    </dt>
                    <dd className="mt-1">
                      <a
                        href="mailto:rent@rent360.co.il"
                        className="font-display text-lg font-bold text-ink hover:text-brand"
                        dir="ltr"
                      >
                        rent@rent360.co.il
                      </a>
                    </dd>
                  </div>
                </dl>

                <p className="mt-5 text-sm leading-relaxed text-ink-500">
                  אנא פרטו בפנייתכם: כתובת העמוד שבו התגלתה הבעיה, תיאור התקלה,
                  סוג הדפדפן והמכשיר, ופרטי קשר לחזרה. נחזור אליכם תוך עד 30 ימי
                  עבודה.
                </p>
              </div>
            </Section>

            <Section title="נגישות במשרד" icon={<Accessibility size={20} />}>
              <p>
                המשרד הראשי שלנו ממוקם ב
                <strong className="font-bold text-ink">שדרות משה גושן 27, קרית מוצקין</strong>
                .
              </p>
              <p>
                <strong className="font-bold text-ink">
                  כרגע המשרד אינו מונגש פיזית לאנשים עם מוגבלות תנועה.
                </strong>{' '}
                אם אתם זקוקים לפגישה פיזית והנגישות מהווה אתגר, אנא צרו קשר
                מראש - נשמח לתאם פגישה בכתובת חלופית מונגשת או להגיע אליכם
                הביתה.
              </p>
              <p>
                בנוסף, רוב התקשורת השוטפת עם לקוחותינו מתקיימת בטלפון, באימייל
                ובוואטסאפ - כך שהשירות נגיש לחלוטין גם ללא ביקור פיזי במשרד.
              </p>
            </Section>

            <Section title="עדכונים שוטפים" icon={<Scale size={20} />}>
              <p>
                האתר נבדק ומתוחזק באופן שוטף לעמידה בתקן. הצהרה זו מתעדכנת
                בהתאם לשינויים מהותיים באתר או בתקן.
              </p>
              <p className="mt-2 text-sm text-ink-400">
                עודכן לאחרונה: {LAST_UPDATED}
              </p>
            </Section>
          </div>

          {/* Back to home */}
          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-ink-100 pt-8">
            <p className="text-sm text-ink-500">
              © {new Date().getFullYear()} רנט 360 אנטרפרייז בע״מ. כל הזכויות
              שמורות.
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

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-ink-100 bg-white p-7 shadow-soft sm:p-10">
      <h2 className="flex items-center gap-3 font-display text-2xl font-bold text-ink sm:text-3xl">
        {icon && <span className="text-brand">{icon}</span>}
        {title}
      </h2>
      <div className="mt-5 space-y-3 text-base leading-[1.75] text-ink-600">
        {children}
      </div>
    </section>
  );
}
