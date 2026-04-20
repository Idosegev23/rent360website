import Image from 'next/image';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-ink-100 bg-white">
      <div className="edge py-16 lg:py-20">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
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
                { Icon: MessageCircle, label: 'וואטסאפ', href: 'https://wa.me/972485556060' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-500 transition-all hover:border-brand hover:bg-brand hover:text-white"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-sm font-bold text-ink">יצירת קשר</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="tel:0485556060"
                  className="block font-display text-xl font-bold tabular text-ink hover:text-brand"
                  dir="ltr"
                >
                  04-855-6060
                </a>
              </li>
              <li>
                <a
                  href="mailto:rent@rent360.co.il"
                  className="block text-sm font-semibold text-ink-600 hover:text-brand"
                  dir="ltr"
                >
                  rent@rent360.co.il
                </a>
              </li>
              <li className="pt-2 text-sm text-ink-500">
                שד׳ ויצמן 74,
                <br />
                קרית ביאליק
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
                  <span className="h-1 w-1 rounded-full bg-brand" />
                  {k}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink-100 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Rent360. כל הזכויות שמורות.</p>
          <p className="flex items-center gap-4">
            <a href="#" className="hover:text-ink">תקנון</a>
            <span className="text-ink-200">·</span>
            <a href="#" className="hover:text-ink">פרטיות</a>
            <span className="text-ink-200">·</span>
            <a href="#" className="hover:text-ink">נגישות</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
