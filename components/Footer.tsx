import Image from 'next/image';
import { MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-200 bg-cream">
      <div className="edge py-16 lg:py-20">
        {/* CTA strip */}
        <div className="grid items-center gap-6 border-b border-ink-200 pb-12 sm:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow eyebrow-brand">מוכנים להתחיל?</p>
            <p
              className="mt-4 h-display"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                lineHeight: '1.05',
              }}
            >
              הבית של הנכס שלך{' '}
              <span className="text-brand">מחכה לכם.</span>
            </p>
          </div>
          <a
            href="#contact"
            className="btn-brand whitespace-nowrap"
          >
            פגישת ייעוץ חינם
          </a>
        </div>

        {/* Main grid */}
        <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <Image
              src="/logos/logo.svg"
              alt="Rent360"
              width={140}
              height={54}
              className="h-9 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-[1.7] text-ink-600">
              ניהול והשכרת נכסים בקריות, חיפה ונשר. שירות מלא לבעלי דירות —
              מהעלאת הנכס לשוק ועד ניהול שוטף לאורך זמן.
            </p>
            <a
              href="https://wa.me/972545650748"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="וואטסאפ"
              className="mt-5 inline-flex items-center gap-2 border border-ink-200 px-4 py-2 text-sm font-semibold text-ink transition-base hover:border-ink hover:bg-ink hover:text-white"
            >
              <MessageCircle size={14} />
              שלחו וואטסאפ
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">יצירת קשר</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:0485556060"
                  className="flex items-center gap-2 font-display text-lg font-semibold tabular text-ink hover:text-brand"
                  dir="ltr"
                >
                  <Phone size={13} className="text-brand" />
                  04-855-6060
                </a>
              </li>
              <li>
                <a
                  href="mailto:rent@rent360.co.il"
                  className="flex items-center gap-2 text-sm font-semibold text-ink-700 hover:text-brand"
                  dir="ltr"
                >
                  <Mail size={13} className="text-brand" />
                  rent@rent360.co.il
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1 text-sm text-ink-600">
                <MapPin size={13} className="mt-1 shrink-0 text-brand" />
                <span>
                  שדרות משה גושן 27,
                  <br />
                  קרית מוצקין
                </span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow">ניווט</p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ['#manifesto', 'מי אנחנו'],
                ['#tracks', 'מסלולים'],
                ['#process', 'התהליך'],
                ['#founder', 'המייסד'],
                ['#neighborhoods', 'אזורים'],
                ['#contact', 'יצירת קשר'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-ink-600 transition-colors hover:text-ink"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">אזורי פעילות</p>
            <ul className="mt-4 grid grid-cols-2 gap-y-1.5 text-sm text-ink-700 sm:grid-cols-1">
              {[
                'קרית ביאליק',
                'קרית ים',
                'קרית מוצקין',
                'קרית אתא',
                'קרית חיים',
                'חיפה',
                'נשר',
              ].map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-ink-200 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year}{' '}
            <span className="font-semibold text-ink">
              רנט 360 אנטרפרייז בע״מ
            </span>
            . כל הזכויות שמורות.
          </p>
          <p className="flex items-center gap-4">
            <a href="/accessibility" className="hover:text-ink">הצהרת נגישות</a>
            <span className="text-ink-300">·</span>
            <a href="/terms" className="hover:text-ink">תקנון</a>
            <span className="text-ink-300">·</span>
            <a href="/privacy" className="hover:text-ink">מדיניות פרטיות</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
