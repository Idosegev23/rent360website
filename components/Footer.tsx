import Image from 'next/image';
import { Instagram, Facebook, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-cream via-cream-100 to-sand-100">
      {/* Ambient */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand/10 blur-[140px]" />
      <div className="pointer-events-none absolute -left-40 -bottom-40 h-[500px] w-[500px] rounded-full bg-clay/10 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.3] mix-blend-multiply bg-grain" />

      <div className="edge relative pb-10 pt-16 lg:pt-20">
        {/* Big CTA banner inside footer */}
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink via-ink-700 to-ink-800 p-8 text-white shadow-lift sm:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/35 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-clay/25 blur-3xl" />

          <div className="relative grid items-center gap-6 sm:grid-cols-[1fr_auto]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-brand-200">
                מוכנים להתחיל?
              </p>
              <p
                className="mt-3 font-display font-black"
                style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                  lineHeight: '1.05',
                  letterSpacing: '-0.02em',
                }}
              >
                הבית של הנכס שלך <br />
                <span className="text-gradient-warm">מחכה לכם.</span>
              </p>
            </div>
            <a
              href="#contact"
              className="btn-brand w-full sm:w-auto"
            >
              פגישת ייעוץ חינם
            </a>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="mt-14 grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <Image
              src="/logos/logo.svg"
              alt="Rent360"
              width={140}
              height={54}
              className="h-10 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-[1.7] text-ink-500">
              ניהול נכסים חכם לבעלי דירות באזור הקריות. שירות מלא — מהעלאת הנכס
              ועד השקט שבאמצע הלילה.
            </p>
            <div className="mt-6 flex gap-2">
              {[
                { Icon: Instagram, label: 'אינסטגרם', href: '#' },
                { Icon: Facebook, label: 'פייסבוק', href: '#' },
                {
                  Icon: MessageCircle,
                  label: 'וואטסאפ',
                  href: 'https://wa.me/972545650748',
                  target: '_blank',
                },
              ].map(({ Icon, label, href, target }) => (
                <a
                  key={label}
                  href={href}
                  target={target}
                  rel={target ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-300 bg-white/80 text-ink-500 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-sm font-bold text-ink">יצירת קשר</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:+972545650748"
                  className="flex items-center gap-2 font-display text-xl font-bold tabular text-ink hover:text-brand"
                  dir="ltr"
                >
                  <Phone size={14} className="text-brand" />
                  054-565-0748
                </a>
              </li>
              <li>
                <a
                  href="mailto:rent@rent360.co.il"
                  className="flex items-center gap-2 text-sm font-semibold text-ink-600 hover:text-brand"
                  dir="ltr"
                >
                  <Mail size={13} className="text-brand" />
                  rent@rent360.co.il
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1 text-sm text-ink-500">
                <MapPin size={13} className="mt-1 shrink-0 text-brand" />
                <span>
                  שד׳ גושן משה <br />
                  קרית מוצקין 2631217
                </span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-sm font-bold text-ink">ניווט</p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ['#manifesto', 'מי אנחנו'],
                ['#tracks', 'מסלולים'],
                ['#process', 'התהליך'],
                ['#founder', 'המייסד'],
                ['#neighborhoods', 'הקריות'],
                ['#contact', 'יצירת קשר'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-ink-500 transition-colors hover:text-brand"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-sm font-bold text-ink">אזורי פעילות</p>
            <ul className="mt-4 space-y-1.5 text-sm text-ink-600">
              {[
                'קרית ביאליק',
                'קרית ים',
                'קרית מוצקין',
                'קרית אתא',
                'קרית חיים',
              ].map((k) => (
                <li key={k} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-brand to-clay" />
                  {k}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-sand-300/60 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year}{' '}
            <span className="font-semibold text-ink">
              רנט 360 אנטרפרייז בע״מ
            </span>
            . כל הזכויות שמורות.
          </p>
          <p className="flex items-center gap-4">
            <a href="#" className="hover:text-ink">
              תקנון
            </a>
            <span className="text-sand-400">·</span>
            <a href="#" className="hover:text-ink">
              פרטיות
            </a>
            <span className="text-sand-400">·</span>
            <a href="#" className="hover:text-ink">
              נגישות
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
