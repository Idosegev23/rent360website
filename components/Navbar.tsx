'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const links = [
  { href: '#manifesto', label: 'מי אנחנו' },
  { href: '#tracks', label: 'מסלולים' },
  { href: '#process', label: 'התהליך' },
  { href: '#founder', label: 'המייסד' },
  { href: '#neighborhoods', label: 'הקריות' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-ink-100 bg-white/90 backdrop-blur-lg'
          : 'bg-transparent',
      )}
    >
      <div className="edge">
        <div className="flex items-center justify-between py-4">
          <a href="#top" aria-label="Rent360" className="relative z-[51]">
            <Image
              src="/logos/logo.svg"
              alt="Rent360"
              width={140}
              height={54}
              priority
              className="h-9 w-auto sm:h-10"
            />
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 font-body text-[14px] font-semibold text-ink-500 transition-colors hover:bg-ink-50 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href="tel:0485556060"
              className="hidden items-center gap-2 rounded-full border border-ink-200 px-4 py-2.5 font-body text-[13px] font-bold tabular text-ink transition-all hover:border-ink hover:bg-ink hover:text-white sm:inline-flex"
              dir="ltr"
            >
              <Phone size={13} />
              04-855-6060
            </a>
            <a href="#contact" className="hidden sm:inline-flex btn-brand !py-2.5 !text-[13px]">
              פגישה חינם
            </a>
            <button
              onClick={() => setOpen((s) => !s)}
              className="relative z-[51] flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink transition-colors hover:border-ink lg:hidden"
              aria-label="תפריט"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          'fixed inset-0 z-40 bg-white transition-opacity duration-300 lg:hidden',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <div className="edge flex h-full flex-col justify-between pb-12 pt-24">
          <nav className="flex flex-col divide-y divide-ink-100">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-5 font-display text-2xl font-bold text-ink hover:text-brand"
              >
                {l.label}
                <ArrowIcon />
              </a>
            ))}
          </nav>

          <div className="space-y-3 pt-6">
            <a
              href="tel:0485556060"
              className="block font-display text-3xl font-black tabular text-ink"
              dir="ltr"
            >
              04-855-6060
            </a>
            <a
              href="mailto:rent@rent360.co.il"
              className="block font-body text-base font-bold text-ink-500"
            >
              rent@rent360.co.il
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-brand mt-4 w-full"
            >
              פגישת ייעוץ חינם
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-brand"
    >
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
  );
}
