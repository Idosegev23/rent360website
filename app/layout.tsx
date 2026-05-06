import type { Metadata } from 'next';
import { Rubik, Assistant, Fraunces } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
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

const SITE_URL = 'https://rent360.co.il';
const SITE_TITLE = 'Rent360 · ניהול נכסים בקריות, חיפה ונשר';
const SITE_DESCRIPTION =
  'ניהול נכסים שהופך השכרה לחוויה נעימה ובטוחה. שירות מלא לבעלי דירות בקריות, חיפה ונשר — איתור שוכרים איכותיים, חוזה מסודר, וליווי שוטף.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s · Rent360',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'ניהול נכסים בקריות',
    'השכרה בקריות',
    'דירה להשכרה קרית ביאליק',
    'דירה להשכרה קרית ים',
    'דירה להשכרה קרית מוצקין',
    'דירה להשכרה קרית אתא',
    'דירה להשכרה קרית חיים',
    'דירה להשכרה חיפה',
    'דירה להשכרה נשר',
    'Rent360',
    'סוכן נדלן הקריות',
    'מתווך הקריות',
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: SITE_URL,
    siteName: 'Rent360',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Rent360 - ניהול נכסים בקריות, חיפה ונשר',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <Analytics />
      </body>
    </html>
  );
}
