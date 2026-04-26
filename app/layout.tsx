import type { Metadata } from 'next';
import { Rubik, Assistant, Fraunces } from 'next/font/google';
import './globals.css';
import AccessibilityWidget from '@/components/AccessibilityWidget';
import CookieConsent from '@/components/CookieConsent';

const rubik = Rubik({
  subsets: ['hebrew', 'latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const assistant = Assistant({
  subsets: ['hebrew', 'latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rent360.co.il'),
  title: 'Rent360 · סוכנות הנדל״ן של הקריות',
  description:
    'סוכנות השכרות שמכירה את הקריות יותר מכם. ביאליק, ים, מוצקין, אתא, חיים — נכסים אמיתיים, סוכן אישי, וחוזה שנסגר מהר.',
  keywords: [
    'השכרה בקריות',
    'דירה להשכרה קרית ביאליק',
    'דירה להשכרה קרית ים',
    'דירה להשכרה קרית מוצקין',
    'דירה להשכרה קרית אתא',
    'דירה להשכרה קרית חיים',
    'Rent360',
    'סוכן נדלן הקריות',
  ],
  openGraph: {
    title: 'Rent360 · סוכנות הנדל״ן של הקריות',
    description: 'השכרות בקריות — בלי משחקים, בלי לרוץ בין תיווכים.',
    type: 'website',
    locale: 'he_IL',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${rubik.variable} ${assistant.variable} ${fraunces.variable}`}
    >
      <head>
        <meta
          name="facebook-domain-verification"
          content="ug0gy4un46pt5p7nshjejwyhemjsxw"
        />
      </head>
      <body className="font-body antialiased">
        <a href="#main" className="skip-link">
          דלגו לתוכן הראשי
        </a>
        {children}
        <CookieConsent />
        <AccessibilityWidget />
      </body>
    </html>
  );
}
