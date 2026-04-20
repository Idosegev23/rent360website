'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, X, Phone, ArrowLeft } from 'lucide-react';
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
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, Math.max(0, y / h)) : 0);
    };
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
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-sand-200/60 bg-cream/80 backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      {/* Scroll progress bar */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-l from-brand via-clay to-brand-600 origin-right transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
      />

      <div className="edge">
        <div className="flex items-center justify-between py-4">
          <a
            href="#top"
            aria-label="Rent360"
            className="relative z-[51] transition-transform hover:scale-[1.02]"
          >
            <Image
              src="/logos/logo.svg"
              alt="Rent360"
              width={140}
              height={54}
              priority
              className="h-9 w-auto sm:h-10"
            />
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-sand-200/60 bg-white/40 p-1 backdrop-blur-md lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative rounded-full px-4 py-2 font-body text-[13px] font-semibold text-ink-500 transition-all hover:text-ink"
              >
                <span className="absolute inset-0 -z-0 rounded-full bg-gradient-to-br from-brand/0 to-brand/0 opacity-0 transition-all duration-300 group-hover:from-brand/10 group-hover:to-clay/10 group-hover:opacity-100" />
                <span className="relative">{l.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href="tel:+972545650748"
              className="hidden items-center gap-2 rounded-full border border-sand-200 bg-white/60 px-4 py-2.5 font-body text-[13px] font-bold tabular text-ink backdrop-blur-md transition-all hover:border-ink hover:bg-ink hover:text-white sm:inline-flex"
              dir="ltr"
            >
              <Phone size={13} />
              054-565-0748
            </a>
            <a
              href="#contact"
              className="btn-brand hidden sm:inline-flex !py-2.5 !px-5 !text-[13px]"
            >
              פגישה חינם
              <ArrowLeft size={13} />
            </a>
            <button
              onClick={() => setOpen((s) => !s)}
              className="relative z-[51] flex h-11 w-11 items-center justify-center rounded-full border border-sand-200 bg-white/80 text-ink backdrop-blur-md transition-colors hover:border-ink lg:hidden"
              aria-label="תפריט"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed inset-0 z-40 transition-opacity duration-500 lg:hidden',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        {/* Background layer: warm gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream-100 to-sand-50" />
        <div className="pointer-events-none absolute -right-32 top-32 h-96 w-96 rounded-full bg-brand/20 blur-[120px]" />
        <div className="pointer-events-none absolute -left-32 bottom-20 h-96 w-96 rounded-full bg-clay/15 blur-[120px]" />

        <div className="edge relative flex h-full flex-col justify-between pb-12 pt-24">
          <nav className="flex flex-col divide-y divide-sand-200/70">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'flex items-center justify-between py-5 font-display text-3xl font-black text-ink transition-all hover:text-brand',
                  open
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0',
                )}
                style={{ transitionDelay: `${i * 60 + 100}ms` }}
              >
                {l.label}
                <ArrowLeft
                  size={22}
                  className="text-brand transition-transform duration-300 group-hover:-translate-x-1"
                />
              </a>
            ))}
          </nav>

          <div className="space-y-3 pt-6">
            <div className="divider-warm mb-4" />
            <a
              href="tel:+972545650748"
              className="block font-display text-3xl font-black tabular text-ink"
              dir="ltr"
            >
              054-565-0748
            </a>
            <a
              href="mailto:rent@rent360.co.il"
              className="block font-body text-base font-bold text-ink-500"
              dir="ltr"
            >
              rent@rent360.co.il
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-brand mt-4 w-full"
            >
              פגישת ייעוץ חינם
              <ArrowLeft size={14} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
