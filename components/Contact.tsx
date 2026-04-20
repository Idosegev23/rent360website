'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  CheckCircle2,
  Loader2,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
} from 'lucide-react';

const KRAYOT = [
  'קרית ביאליק',
  'קרית ים',
  'קרית מוצקין',
  'קרית אתא',
  'קרית חיים',
] as const;

const TRACKS = [
  { k: 'po', label: 'נעים פה', sub: 'השכרה' },
  { k: 'ha', label: 'נעים הליכות', sub: 'ניהול' },
  { k: 'me', label: 'נעים מאוד', sub: 'השכרה + ניהול' },
  { k: 'za', label: 'נעים זמירות', sub: 'פרימיום' },
  { k: 'na', label: 'לא בטוח/ה', sub: 'נבחר יחד' },
] as const;

const schema = z.object({
  name: z.string().min(2, 'נדרשים לפחות 2 תווים'),
  phone: z
    .string()
    .regex(/^0\d{1,2}-?\d{7}$|^0\d{8,9}$/, 'טלפון לא תקין (052-1234567)'),
  email: z.string().email('אימייל לא תקין'),
  track: z.enum(['po', 'ha', 'me', 'za', 'na']),
  area: z.enum(KRAYOT),
  rooms: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { track: 'na', area: 'קרית ביאליק' },
  });

  const track = watch('track');
  const area = watch('area');

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative bg-white py-20 lg:py-28">
      <div className="edge">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <span className="kicker">יצירת קשר</span>
            <h2
              className="mt-5 h-display"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                lineHeight: '1.02',
              }}
            >
              פגישת ייעוץ — <br />
              <span className="text-brand">ללא עלות.</span>
            </h2>
            <p className="lede mt-7 max-w-md">
              השאירו פרטים ונחזור תוך{' '}
              <strong className="text-ink">שעה</strong> בשעות העבודה. שיחה אישית
              קצרה, לא מכירתית, להבין את הנכס והצרכים.
            </p>

            <div className="mt-10 space-y-3">
              <Tile
                icon={<Phone size={17} />}
                label="טלפון · וואטסאפ"
                value="04-855-6060"
                href="tel:0485556060"
              />
              <Tile
                icon={<Mail size={17} />}
                label="אימייל"
                value="rent@rent360.co.il"
                href="mailto:rent@rent360.co.il"
              />
              <Tile
                icon={<MapPin size={17} />}
                label="המשרד"
                value="שד׳ ויצמן 74, קרית ביאליק"
              />
              <Tile
                icon={<Clock size={17} />}
                label="שעות פעילות"
                value="א׳–ה׳ 09:00–19:00 · ו׳ 09:00–13:00"
              />
            </div>
          </div>

          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-ink-100 bg-cream p-6 shadow-soft sm:p-10"
            >
              {status === 'success' ? (
                <SuccessState onReset={() => setStatus('idle')} />
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="label">המסלול שמעניין אותי</label>
                    <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
                      {TRACKS.map((t) => (
                        <label
                          key={t.k}
                          className={`flex cursor-pointer flex-col rounded-xl border p-3 transition-all ${
                            track === t.k
                              ? 'border-brand bg-brand text-white'
                              : 'border-ink-200 bg-white text-ink hover:border-ink'
                          }`}
                        >
                          <input
                            type="radio"
                            value={t.k}
                            className="sr-only"
                            {...register('track')}
                          />
                          <span className="font-display text-sm font-bold sm:text-base">
                            {t.label}
                          </span>
                          <span
                            className={`mt-0.5 text-[10px] font-semibold ${
                              track === t.k ? 'text-white/80' : 'text-ink-500'
                            }`}
                          >
                            {t.sub}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="label">הנכס שלי נמצא ב־</label>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {KRAYOT.map((k) => (
                        <label
                          key={k}
                          className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                            area === k
                              ? 'border-brand bg-brand text-white'
                              : 'border-ink-200 bg-white text-ink hover:border-ink'
                          }`}
                        >
                          <input
                            type="radio"
                            value={k}
                            className="sr-only"
                            {...register('area')}
                          />
                          {k}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="שם מלא" error={errors.name?.message}>
                      <input
                        type="text"
                        placeholder="ישראל ישראלי"
                        className="input"
                        {...register('name')}
                      />
                    </Field>
                    <Field label="טלפון" error={errors.phone?.message}>
                      <input
                        type="tel"
                        placeholder="052-1234567"
                        className="input tabular"
                        dir="ltr"
                        {...register('phone')}
                      />
                    </Field>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="אימייל" error={errors.email?.message}>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        className="input"
                        dir="ltr"
                        {...register('email')}
                      />
                    </Field>
                    <Field label="מספר חדרים (אופציונלי)">
                      <input
                        type="text"
                        placeholder="לדוגמה: 4 חד׳"
                        className="input"
                        {...register('rooms')}
                      />
                    </Field>
                  </div>

                  <Field label="משהו נוסף שחשוב שנדע? (לא חובה)">
                    <textarea
                      rows={3}
                      placeholder="דייר נוכחי, תאריך יעד, מצב הנכס..."
                      className="input resize-none"
                      {...register('message')}
                    />
                  </Field>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                      <AlertCircle size={16} />
                      משהו השתבש. נסו שוב או התקשרו: 04-855-6060.
                    </div>
                  )}

                  <div className="flex flex-col gap-4 border-t border-ink-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-xs text-[11px] leading-relaxed text-ink-400">
                      הפגישה ללא עלות וללא התחייבות.
                    </p>
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-brand group disabled:opacity-60"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          שולח
                        </>
                      ) : (
                        <>
                          קביעת פגישה
                          <ArrowLeft
                            size={14}
                            className="transition-transform duration-200 group-hover:-translate-x-1"
                          />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tile({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const Tag = (href ? 'a' : 'div') as 'a' | 'div';
  return (
    <Tag
      {...(href ? { href } : {})}
      className="group flex items-center gap-4 rounded-2xl border border-ink-100 bg-white p-4 transition-all hover:border-brand/30 hover:shadow-soft"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-wider text-ink-400">
          {label}
        </p>
        <p
          className="mt-0.5 truncate font-display text-base font-bold text-ink sm:text-lg"
          dir={href?.startsWith('tel') || href?.startsWith('mailto') ? 'ltr' : 'rtl'}
          style={{
            textAlign:
              href?.startsWith('tel') || href?.startsWith('mailto')
                ? 'right'
                : undefined,
          }}
        >
          {value}
        </p>
      </div>
    </Tag>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="label">{label}</label>
      <div className="mt-1.5">{children}</div>
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-xs font-semibold text-red-600">
          <AlertCircle size={12} /> {error}
        </p>
      )}
    </div>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-start py-6 sm:py-10">
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white"
      >
        <CheckCircle2 size={28} />
      </motion.div>
      <h3
        className="mt-7 h-display"
        style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', lineHeight: '1' }}
      >
        נעים להכיר. <br />
        <span className="text-brand">קיבלנו.</span>
      </h3>
      <p className="mt-6 max-w-md text-base leading-[1.7] text-ink-500">
        סוכן אישי יחזור אליכם תוך שעה בשעות העבודה. אם זה דחוף —
        <a
          href="tel:0485556060"
          className="mr-1 font-bold text-ink underline decoration-brand decoration-2 underline-offset-4"
        >
          04-855-6060
        </a>
        .
      </p>
      <button onClick={onReset} className="btn-secondary mt-8">
        שליחה נוספת
      </button>
    </div>
  );
}
