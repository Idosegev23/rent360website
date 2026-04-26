import { Resend } from 'resend';

const TRACK_LABELS: Record<string, string> = {
  po: 'נעים פה (השכרה בלבד)',
  ha: 'נעים הליכות (ניהול בלבד)',
  me: 'נעים מאוד (השכרה + ניהול)',
  za: 'נעים זמירות (פרימיום + הגנה)',
  na: 'לא בטוח/ה — נבחר בפגישה',
};

export type LeadPayload = {
  name: string;
  phone: string;
  email: string;
  track: keyof typeof TRACK_LABELS;
  area: string;
  rooms?: string;
  message?: string;
};

const FROM_ADDRESS = 'Rent360 <rent@rent360.co.il>';
const TO_ADDRESS = 'rent@rent360.co.il';

export async function sendLeadEmail(lead: LeadPayload) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn('[rent360:email] RESEND_API_KEY missing — skipping email send');
    return { ok: false, reason: 'no_api_key' as const };
  }

  const resend = new Resend(apiKey);
  const trackLabel = TRACK_LABELS[lead.track] ?? lead.track;
  const subject = `ליד חדש מ־${lead.name} · ${trackLabel} · ${lead.area}`;

  const html = renderHtml({ ...lead, trackLabel });
  const text = renderText({ ...lead, trackLabel });

  const result = await resend.emails.send({
    from: FROM_ADDRESS,
    to: TO_ADDRESS,
    replyTo: lead.email,
    subject,
    html,
    text,
  });

  if (result.error) {
    console.error('[rent360:email] send failed', result.error);
    return { ok: false as const, reason: 'send_failed' as const, error: result.error };
  }

  return { ok: true as const, id: result.data?.id };
}

function renderText(l: LeadPayload & { trackLabel: string }) {
  return [
    'ליד חדש מהאתר:',
    '',
    `שם: ${l.name}`,
    `טלפון: ${l.phone}`,
    `אימייל: ${l.email}`,
    `מסלול מבוקש: ${l.trackLabel}`,
    `אזור הנכס: ${l.area}`,
    l.rooms ? `מספר חדרים: ${l.rooms}` : null,
    '',
    l.message ? `הודעה:\n${l.message}` : null,
    '',
    '— נשלח מטופס יצירת קשר באתר rent360.co.il',
  ]
    .filter(Boolean)
    .join('\n');
}

function renderHtml(l: LeadPayload & { trackLabel: string }) {
  const row = (label: string, value: string, href?: string) => `
    <tr>
      <td style="padding:10px 16px;background:#FAF6EE;border-bottom:1px solid #EEEEF0;font:600 12px/1 -apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;color:#71717A;text-transform:uppercase;letter-spacing:.06em;width:140px;text-align:right;">${label}</td>
      <td style="padding:12px 16px;border-bottom:1px solid #EEEEF0;font:600 15px/1.4 -apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;color:#111113;text-align:right;direction:rtl;">
        ${href ? `<a href="${href}" style="color:#F47B20;text-decoration:none;">${value}</a>` : value}
      </td>
    </tr>`;

  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>ליד חדש</title>
</head>
<body style="margin:0;padding:24px 12px;background:#FAF6EE;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;direction:rtl;text-align:right;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 24px -12px rgba(17,17,19,.12);">
    <tr>
      <td style="padding:24px 24px 16px;background:linear-gradient(135deg,#F47B20 0%,#C9623F 100%);color:#ffffff;">
        <div style="font:800 22px/1.1 -apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">ליד חדש מהאתר</div>
        <div style="margin-top:6px;font:600 13px/1.3 -apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;opacity:.9;">${escapeHtml(l.trackLabel)}</div>
      </td>
    </tr>
    <tr>
      <td style="padding:0;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          ${row('שם', escapeHtml(l.name))}
          ${row('טלפון', escapeHtml(l.phone), `tel:${l.phone.replace(/-/g, '')}`)}
          ${row('אימייל', escapeHtml(l.email), `mailto:${l.email}`)}
          ${row('אזור הנכס', escapeHtml(l.area))}
          ${l.rooms ? row('מספר חדרים', escapeHtml(l.rooms)) : ''}
        </table>
      </td>
    </tr>
    ${
      l.message
        ? `<tr><td style="padding:18px 22px;background:#FAF6EE;border-top:1px solid #EEEEF0;">
            <div style="font:600 12px/1 -apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;color:#71717A;text-transform:uppercase;letter-spacing:.06em;">הודעה מהפונה</div>
            <div style="margin-top:8px;font:500 15px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;color:#27272A;white-space:pre-wrap;">${escapeHtml(l.message)}</div>
          </td></tr>`
        : ''
    }
    <tr>
      <td style="padding:18px 22px;background:#111113;color:#ffffff;text-align:center;">
        <div style="font:600 12px/1.4 -apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;opacity:.7;">
          לחיצה על "השב" במייל הזה תפנה ישירות ל-${escapeHtml(l.email)}
        </div>
      </td>
    </tr>
  </table>
  <p style="max-width:580px;margin:14px auto 0;font:400 11px/1.4 -apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;color:#71717A;text-align:center;">
    נשלח מטופס יצירת קשר · rent360.co.il
  </p>
</body>
</html>`;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
