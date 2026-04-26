'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Cookie, X, Check } from 'lucide-react';

const STORAGE_KEY = 'rent360-cookie-consent';

type Consent = 'accepted' | 'rejected' | null;

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY) as Consent;
      if (!v) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  const decide = (v: 'accepted' | 'rejected') => {
    try {
      localStorage.setItem(STORAGE_KEY, v);
    } catch {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="הסכמה לשימוש בעוגיות"
      aria-live="polite"
      className="fixed inset-x-3 bottom-3 z-[90] rounded-3xl border border-ink-100 bg-white p-5 shadow-lift sm:inset-x-auto sm:right-5 sm:max-w-md sm:p-6"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
          <Cookie size={18} />
        </div>
        <div className="flex-1">
          <p className="font-display text-base font-bold text-ink">
            עוגיות באתר
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
            אנו עושים שימוש בעוגיות חיוניות לפעילות האתר ובעוגיות אנליטיקה כדי
            לשפר את החוויה. למידע נוסף ראו{' '}
            <Link
              href="/privacy"
              className="font-bold text-ink underline decoration-brand decoration-2 underline-offset-2"
            >
              מדיניות הפרטיות
            </Link>
            .
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button
              onClick={() => decide('accepted')}
              className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30"
            >
              <Check size={14} strokeWidth={3} />
              מאשר/ת הכל
            </button>
            <button
              onClick={() => decide('rejected')}
              className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30"
            >
              עוגיות חיוניות בלבד
            </button>
          </div>
        </div>
        <button
          onClick={() => decide('rejected')}
          aria-label="סגירה"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink-400 transition-colors hover:bg-ink-50 hover:text-ink"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
