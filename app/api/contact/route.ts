import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sendLeadEmail } from '@/lib/email';

const KRAYOT = [
  'קרית ביאליק',
  'קרית ים',
  'קרית מוצקין',
  'קרית אתא',
  'קרית חיים',
  'חיפה',
  'נשר',
] as const;

const schema = z.object({
  name: z.string().min(2).max(80),
  phone: z.string().min(7).max(20),
  email: z.string().email(),
  track: z.enum(['po', 'ha', 'me', 'za', 'na']),
  area: z.enum(KRAYOT),
  rooms: z.string().max(40).optional(),
  message: z.string().max(2000).optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    console.log('[rent360:contact]', {
      at: new Date().toISOString(),
      ...data,
    });

    // Fire email - non-blocking failure for the user (we still confirm receipt).
    const emailResult = await sendLeadEmail(data);
    if (!emailResult.ok) {
      console.warn('[rent360:contact] email send result:', emailResult);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { ok: false, errors: err.flatten().fieldErrors },
        { status: 400 },
      );
    }
    console.error('[rent360:contact] unexpected error', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
