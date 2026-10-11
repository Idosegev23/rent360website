import type { Metadata } from 'next';
import { Rubik, Assistant, Fraunces } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';
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

// Vee accessibility widget (vee-crm.com). Config is the vendor's snippet verbatim;
// the loader script is injected into <body> once `window.args` is set.
const VEE_A11Y_SNIPPET = `
window.args = {
  sitekey: '70d089cf5e562883d7d2b250a3b0b437',
  position: 'Right',
  language: 'HE',
  container: '',
  icon: '',
  access: 'https://vee-crm.com',
  styles: {
    primary_color: '#177fab',
    secondary_color: '#b586ff',
    background_color: '#f6f6f6',
    primary_text_color: '#636363',
    headers_text_color: '#105675',
    primary_font_size: 14,
    slider_left_color: '#b586ff',
    slider_right_color: '#177fab',
    icon_vertical_position: 'top',
    icon_offset_top: 100,
    icon_offset_bottom: 0,
    highlight_focus_color: '#177fab',
    toggler_icon_color: '#ffffff',
  },
  links: {
    acc_policy: '',
    additional_link: 'https://vee.co.il/pricing/',
  },
  options: {
    open: false,
    aaa: false,
    hide_tablet: false,
    hide_mobile: false,
    button_size_tablet: 44,
    button_size_mobile: 34,
    position_tablet: 'Right',
    position_mobile: 'Right',
    icon_vertical_position_tablet: 'top',
    icon_vertical_position_mobile: 'top',
    icon_offset_top_tablet: 100,
    icon_offset_bottom_tablet: 0,
    icon_offset_top_mobile: 100,
    icon_offset_bottom_mobile: 0,
    keyboard_shortcut: true,
    disable_headings: false,
    hide_purchase_link: false,
    display_checkmark_icon: false,
    active_toggler_color: '#118f38',
  },
  exclude: [],
};
(function (doc, head, body) {
  var embed = doc.createElement('script');
  embed.src = window.args['access'] + '/js/';
  embed.defer = true;
  embed.crossOrigin = 'anonymous';
  embed.setAttribute('data-cfasync', true);
  body ? body.appendChild(embed) : head.appendChild(embed);
})(document, document.head, document.body);
`;

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
        <Analytics />
        <Script
          id="vee-accessibility"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: VEE_A11Y_SNIPPET }}
        />
      </body>
    </html>
  );
}
