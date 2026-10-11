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
  MousePointerClick,
  Wrench,
  SlidersHorizontal,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'הצהרת נגישות · Rent360',
  description:
    'הצהרת הנגישות של אתר Rent360 - עמידה בתקנות שוויון זכויות לאנשים עם מוגבלות וברמת נגישות AA לפי WCAG 2.2.',
  robots: { index: true, follow: true },
};

const LAST_UPDATED = '11 באוקטובר 2026';

const CHECK_LIST_ITEM =
  'flex items-start gap-2 text-base leading-relaxed';

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
      {items.map((t) => (
        <li key={t} className={CHECK_LIST_ITEM}>
          <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

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
              רנט 360 אנטרפרייז בע״מ רואה חשיבות רבה במתן שירות שוויוני לכלל
              האזרחים ובשיפור השירות הניתן לאזרחים עם מוגבלות.
            </p>
            <p className="mt-3 text-sm text-ink-400">
              תאריך עדכון אחרון: <span className="font-bold text-ink">{LAST_UPDATED}</span>
            </p>
          </header>

          {/* Sections */}
          <div className="space-y-10">
            <Section title="מחויבות לנגישות">
              <p>
                רנט 360 אנטרפרייז בע״מ אחראית על הקמת והפעלת האתר{' '}
                <a
                  href="https://rent360.co.il"
                  className="link font-bold text-ink underline"
                  dir="ltr"
                >
                  rent360.co.il
                </a>
                . אנו רואים חשיבות רבה במתן שירות שוויוני לכלל האזרחים
                ובשיפור השירות הניתן לאזרחים עם מוגבלות.
              </p>
              <p>
                אנו משקיעים משאבים רבים בהנגשת האתר והנכסים הדיגיטליים שלנו על
                מנת להפוך את שירותי החברה לזמינים יותר עבור אנשים עם מוגבלות.
              </p>
              <p>
                במדינת ישראל כ־20 אחוזים מקרב האוכלוסייה הינם אנשים עם מוגבלות
                הזקוקים לנגישות דיגיטלית, על מנת לצרוך מידע ושירותים כלליים.
              </p>
              <p>
                הנגשת האתר של רנט 360 אנטרפרייז בע״מ נועדה להפוך אותו לזמין,
                ידידותי ונוח יותר לשימוש עבור אוכלוסיות עם צרכים מיוחדים,
                הנובעים בין היתר ממוגבלויות מוטוריות שונות, לקויות קוגניטיביות,
                קוצר ראייה, עיוורון או עיוורון צבעים, לקויות שמיעה, וכן
                אוכלוסייה הנמנית על בני הגיל השלישי.
              </p>
            </Section>

            <Section title="רמת הנגישות באתר" icon={<Scale size={20} />}>
              <p>
                הנגשת האתר בוצעה על ידי חברת הנגשת האתרים{' '}
                <strong className="font-bold text-ink">
                  ״Vee הנגשת אתרים״
                </strong>
                . רמת הנגישות באתר:{' '}
                <strong className="font-bold text-ink">AA</strong>.
              </p>
              <p>
                חברת Vee התאימה את נגישות האתר לדפדפנים הנפוצים ולשימוש בטלפון
                הסלולרי ככל הניתן, והשתמשה בבדיקותיה בקוראי מסך מסוג JAWS ו־NVDA.
              </p>
              <p>
                החברה מקפידה על עמידה בדרישות תקנות שוויון זכויות לאנשים עם
                מוגבלות 5568 התשע״ג־2013 ברמת AA, וכן מיישמת את המלצות מסמך{' '}
                <a
                  href="https://www.w3.org/TR/WCAG22/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link font-bold text-ink underline"
                >
                  WCAG 2.2
                </a>{' '}
                מאת ארגון W3C.
              </p>
              <p>
                הנגשת האתר בוצעה בהתאם להנחיות רשות התקשוב להנגשת יישומים
                בדפדפני אינטרנט.
              </p>
            </Section>

            <Section
              title="כיצד עוברים למצב נגיש?"
              icon={<MousePointerClick size={20} />}
            >
              <p>
                באתר מוצב אייקון נגישות (בדרך כלל בדפנות האתר). לחיצה על האייקון
                מאפשרת פתיחה של תפריט הנגישות. לאחר בחירת הפונקציה המתאימה
                בתפריט יש להמתין לטעינת הדף ולשינוי הרצוי בתצוגה (במידת הצורך).
              </p>
              <p>
                במידה ומעוניינים לבטל את הפעולה, יש ללחוץ על הפונקציה בתפריט
                פעם שנייה. בכל מצב, ניתן לאפס הגדרות נגישות.
              </p>
              <p>
                התוכנה פועלת בדפדפנים הפופולריים: Chrome, Firefox, Safari,
                Opera, בכפוף לתנאי היצרן. הגלישה במצב נגישות מומלצת בדפדפן
                כרום.
              </p>
              <p>
                האתר מספק מבנה סמנטי עבור טכנולוגיות מסייעות ותמיכה בדפוס
                השימוש המקובל להפעלה עם מקלדת, בעזרת מקשי החיצים, Enter ו־Esc
                ליציאה מתפריטים וחלונות.
              </p>
              <p>
                לצורך קבלת חווית גלישה מיטבית עם תוכנת הקראת מסך, אנו ממליצים
                להשתמש בתוכנת NVDA העדכנית ביותר.
              </p>
            </Section>

            <Section
              title="תיקונים והתאמות שבוצעו באתר"
              icon={<Wrench size={20} />}
            >
              <CheckList
                items={[
                  'התאמה לקורא מסך - התאמת האתר עבור טכנולוגיות מסייעות כגון NVDA ו־JAWS',
                  'אמצעי הניווט באתר פשוטים וברורים',
                  'תכני האתר כתובים באופן ברור, מסודר והיררכי',
                  'האתר מותאם לצפייה בדפדפנים מודרניים',
                  'התאמת האתר לתצוגה תואמת מגוון מסכים ורזולוציות',
                  'כל הדפים באתר בעלי מבנה קבוע (H1/H2/H3 וכו׳)',
                  'לכל התמונות באתר יש הסבר טקסטואלי חלופי (alt)',
                ]}
              />
            </Section>

            <Section
              title="פונקציונליות תוכנת הנגישות"
              icon={<SlidersHorizontal size={20} />}
            >
              <CheckList
                items={[
                  'התאמה לקורא מסך - התאמת האתר עבור טכנולוגיות מסייעות כגון NVDA ו־JAWS',
                  'עצירת הבהובים - עצירת אלמנטים נעים וחסימת אנימציות',
                  'דילוג ישיר לתוכן - דילוג על התפריט הראשי ישירות אל התוכן',
                  'התאמה לניווט מקלדת',
                  'הגדלה / הקטנה של טקסט',
                  'ריווח בין אותיות / מילים / שורות',
                  'ניגודיות וצבע - גבוהה, הפוכה, שחור לבן',
                  'גופן קריא',
                  'הדגשת קישורים',
                  'מדריך קריאה',
                  'שינוי אייקון סמן עכבר',
                  'תיאור לתמונות',
                ]}
              />
            </Section>

            <Section title="החרגות" icon={<AlertTriangle size={20} />}>
              <p>
                חשוב לציין כי למרות מאמצינו להנגיש את כלל הדפים והאלמנטים באתר,
                ייתכן שיתגלו חלקים או יכולות שלא הונגשו כראוי או שטרם הונגשו.
              </p>
              <p>
                אנו פועלים לשפר את נגישות האתר שלנו כל העת, כחלק ממחויבותנו
                לאפשר לכלל האוכלוסייה להשתמש בו, כולל אנשים עם מוגבלות.
              </p>
            </Section>

            <Section title="יצירת קשר בנושא נגישות" icon={<User size={20} />}>
              <p>
                במידה ונתקלתם בבעיה בנושא נגישות באתר, נשמח לקבל הערות ובקשות
                באמצעות פנייה לרכז הנגישות שלנו.
              </p>

              <div className="mt-5 rounded-3xl border border-ink-100 bg-white p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <User size={22} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-ink-400">
                      רכז נגישות
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
              </div>

              <p className="mt-5">
                על מנת שנוכל לטפל בבעיה בדרך הטובה ביותר, אנו ממליצים מאוד לצרף
                פרטים מלאים ככל שניתן:
              </p>
              <ul className="mt-2 space-y-2">
                {[
                  'תיאור הבעיה',
                  'מהי הפעולה שניסיתם לבצע',
                  'קישור לדף שבו גלשתם',
                  'סוג הדפדפן וגרסתו',
                  'מערכת הפעלה',
                  'סוג הטכנולוגיה המסייעת (במידה והשתמשתם)',
                ].map((t) => (
                  <li key={t} className={CHECK_LIST_ITEM}>
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-brand"
                    />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                רנט 360 אנטרפרייז בע״מ תעשה ככל יכולתה על מנת להנגיש את האתר
                בצורה המיטבית ולענות לפניות בצורה המקצועית והמהירה ביותר.
              </p>
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

            <p className="px-2 text-sm text-ink-400">
              תאריך עדכון הצהרת נגישות: {LAST_UPDATED}
            </p>
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
