'use client';

import { useEffect, useState, useCallback } from 'react';
import {
  Accessibility,
  X,
  Type,
  Moon,
  Sun,
  Contrast,
  Droplet,
  Link as LinkIcon,
  Heading,
  BookOpen,
  Zap,
  MousePointer2,
  RotateCcw,
  FileText,
} from 'lucide-react';

/**
 * Israeli Standard IS 5568 accessibility widget.
 * Keyboard: open/close with Alt+A.
 * Prefs persisted in localStorage → applied as classes on <html>.
 */

const STORAGE_KEY = 'rent360-a11y-prefs';

type FontScale = 0 | 1 | 2 | 3; // 100, 110, 125, 150
type Contrast = 'default' | 'high' | 'inverted' | 'grayscale';

type Prefs = {
  fontScale: FontScale;
  contrast: Contrast;
  highlightLinks: boolean;
  highlightHeadings: boolean;
  readableFont: boolean;
  stopMotion: boolean;
  largeCursor: boolean;
};

const DEFAULT_PREFS: Prefs = {
  fontScale: 0,
  contrast: 'default',
  highlightLinks: false,
  highlightHeadings: false,
  readableFont: false,
  stopMotion: false,
  largeCursor: false,
};

function applyPrefs(p: Prefs) {
  const html = document.documentElement;
  // Font scale
  html.classList.remove('a11y-font-1', 'a11y-font-2', 'a11y-font-3');
  if (p.fontScale > 0) html.classList.add(`a11y-font-${p.fontScale}`);
  // Contrast
  html.classList.remove(
    'a11y-contrast-high',
    'a11y-contrast-inverted',
    'a11y-grayscale',
  );
  if (p.contrast === 'high') html.classList.add('a11y-contrast-high');
  if (p.contrast === 'inverted') html.classList.add('a11y-contrast-inverted');
  if (p.contrast === 'grayscale') html.classList.add('a11y-grayscale');
  // Toggles
  html.classList.toggle('a11y-links', p.highlightLinks);
  html.classList.toggle('a11y-headings', p.highlightHeadings);
  html.classList.toggle('a11y-readable', p.readableFont);
  html.classList.toggle('a11y-no-motion', p.stopMotion);
  html.classList.toggle('a11y-cursor', p.largeCursor);
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT_PREFS);
  const [mounted, setMounted] = useState(false);

  // Load + apply on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = { ...DEFAULT_PREFS, ...JSON.parse(raw) };
        setPrefs(parsed);
        applyPrefs(parsed);
      }
    } catch {}
    setMounted(true);
  }, []);

  // Persist + apply on change
  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {}
    applyPrefs(prefs);
  }, [prefs, mounted]);

  // Alt+A to toggle
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey && (e.key === 'a' || e.key === 'A' || e.key === 'ש')) {
        e.preventDefault();
        setOpen((s) => !s);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const update = useCallback(
    <K extends keyof Prefs>(key: K, val: Prefs[K]) =>
      setPrefs((p) => ({ ...p, [key]: val })),
    [],
  );

  const reset = useCallback(() => setPrefs(DEFAULT_PREFS), []);

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen((s) => !s)}
        aria-label="תפריט נגישות — Alt+A"
        aria-expanded={open}
        aria-controls="a11y-menu"
        className="a11y-toggle fixed bottom-5 left-5 z-[95] flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white shadow-lift transition-all duration-200 hover:bg-brand hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/40"
      >
        <Accessibility size={24} strokeWidth={2} />
      </button>

      {/* Backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          aria-hidden="true"
          className="fixed inset-0 z-[96] bg-black/40 backdrop-blur-sm"
        />
      )}

      {/* Menu panel */}
      <aside
        id="a11y-menu"
        role="dialog"
        aria-modal="true"
        aria-label="תפריט נגישות"
        className={`fixed bottom-5 left-5 z-[97] w-[calc(100vw-2.5rem)] max-w-[360px] origin-bottom-left overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-lift transition-all duration-300 ${
          open
            ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-4 scale-95 opacity-0'
        }`}
        style={{ maxHeight: 'calc(100vh - 2.5rem)' }}
      >
        <header className="flex items-center justify-between border-b border-ink-100 bg-ink px-5 py-4 text-white">
          <div className="flex items-center gap-2.5">
            <Accessibility size={20} />
            <h2 className="font-display text-base font-bold">תפריט נגישות</h2>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="סגירת התפריט"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X size={16} />
          </button>
        </header>

        <div className="max-h-[70vh] overflow-y-auto p-4">
          {/* Font size */}
          <Section title="גודל טקסט" icon={<Type size={14} />}>
            <div className="grid grid-cols-4 gap-1.5">
              {[
                { v: 0, label: 'רגיל', style: 'text-sm' },
                { v: 1, label: '+10%', style: 'text-base' },
                { v: 2, label: '+25%', style: 'text-lg' },
                { v: 3, label: '+50%', style: 'text-xl' },
              ].map((o) => (
                <button
                  key={o.v}
                  onClick={() => update('fontScale', o.v as FontScale)}
                  aria-pressed={prefs.fontScale === o.v}
                  className={`rounded-lg border px-2 py-2 font-bold transition-colors ${
                    prefs.fontScale === o.v
                      ? 'border-brand bg-brand text-white'
                      : 'border-ink-200 bg-white text-ink hover:border-ink'
                  } ${o.style}`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </Section>

          {/* Contrast */}
          <Section title="ניגודיות" icon={<Contrast size={14} />}>
            <div className="grid grid-cols-2 gap-1.5">
              <ContrastBtn
                active={prefs.contrast === 'default'}
                onClick={() => update('contrast', 'default')}
                icon={<Sun size={14} />}
                label="רגיל"
              />
              <ContrastBtn
                active={prefs.contrast === 'high'}
                onClick={() => update('contrast', 'high')}
                icon={<Contrast size={14} />}
                label="ניגודיות גבוהה"
              />
              <ContrastBtn
                active={prefs.contrast === 'inverted'}
                onClick={() => update('contrast', 'inverted')}
                icon={<Moon size={14} />}
                label="הפוכה"
              />
              <ContrastBtn
                active={prefs.contrast === 'grayscale'}
                onClick={() => update('contrast', 'grayscale')}
                icon={<Droplet size={14} />}
                label="שחור־לבן"
              />
            </div>
          </Section>

          {/* Toggles */}
          <Section title="התאמות תצוגה">
            <ToggleBtn
              active={prefs.highlightLinks}
              onClick={() => update('highlightLinks', !prefs.highlightLinks)}
              icon={<LinkIcon size={14} />}
              label="הדגשת קישורים"
            />
            <ToggleBtn
              active={prefs.highlightHeadings}
              onClick={() => update('highlightHeadings', !prefs.highlightHeadings)}
              icon={<Heading size={14} />}
              label="הדגשת כותרות"
            />
            <ToggleBtn
              active={prefs.readableFont}
              onClick={() => update('readableFont', !prefs.readableFont)}
              icon={<BookOpen size={14} />}
              label="פונט קריא"
            />
            <ToggleBtn
              active={prefs.stopMotion}
              onClick={() => update('stopMotion', !prefs.stopMotion)}
              icon={<Zap size={14} />}
              label="עצירת אנימציות"
            />
            <ToggleBtn
              active={prefs.largeCursor}
              onClick={() => update('largeCursor', !prefs.largeCursor)}
              icon={<MousePointer2 size={14} />}
              label="סמן מוגדל"
            />
          </Section>

          {/* Actions */}
          <div className="mt-5 grid gap-2 border-t border-ink-100 pt-4">
            <button
              onClick={reset}
              className="flex items-center justify-center gap-2 rounded-xl border border-ink-200 px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30"
            >
              <RotateCcw size={14} />
              איפוס הגדרות
            </button>
            <a
              href="/accessibility"
              className="flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30"
            >
              <FileText size={14} />
              הצהרת הנגישות המלאה
            </a>
          </div>

          <p className="mt-4 text-center text-[11px] text-ink-400">
            התפריט נפתח/נסגר במקש <kbd className="rounded bg-ink-100 px-1.5 py-0.5 font-mono text-[10px] font-bold text-ink">Alt + A</kbd>
          </p>
        </div>
      </aside>
    </>
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
    <div className="mb-5 last:mb-0">
      <p className="mb-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-ink-500">
        {icon}
        {title}
      </p>
      <div className="space-y-1.5">{children}</div>
    </div>
  );
}

function ContrastBtn({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 ${
        active
          ? 'border-brand bg-brand text-white'
          : 'border-ink-200 bg-white text-ink hover:border-ink'
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function ToggleBtn({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`flex w-full items-center justify-between rounded-lg border px-3 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 ${
        active
          ? 'border-brand bg-brand/10 text-brand-700'
          : 'border-ink-100 bg-white text-ink hover:border-ink-200'
      }`}
    >
      <span className="flex items-center gap-2">
        {icon}
        {label}
      </span>
      <span
        className={`relative h-5 w-9 rounded-full transition-colors ${
          active ? 'bg-brand' : 'bg-ink-200'
        }`}
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-all ${
            active ? 'right-0.5' : 'right-4'
          }`}
        />
      </span>
    </button>
  );
}
