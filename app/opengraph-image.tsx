import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const runtime = 'nodejs';
export const alt = 'Rent360 — ניהול נכסים בקריות, חיפה ונשר';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  // Read the official brand logo from /public/logos/logo.svg
  const logoPath = join(process.cwd(), 'public', 'logos', 'logo.svg');
  const logoSvg = readFileSync(logoPath, 'utf-8');
  const logoDataUrl = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString('base64')}`;

  // Load Hebrew font (Rubik Bold static TTF) so Satori shapes RTL text
  // correctly. Without this, Hebrew comes out reversed/jumbled because
  // Satori's default font has no Hebrew glyphs.
  const fontPath = join(process.cwd(), 'public', 'fonts', 'rubik-bold.ttf');
  const fontData = readFileSync(fontPath);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#FBF8F3',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 80px',
          fontFamily: 'Rubik',
          position: 'relative',
        }}
      >
        {/* Brand orange accent stripe */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: '#F47B20',
          }}
        />

        {/* Top: tiny eyebrow */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '20px',
            fontWeight: 700,
            color: '#52525B',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}
        >
          <span
            style={{
              display: 'flex',
              width: '24px',
              height: '2px',
              background: '#F47B20',
            }}
          />
          <span>Rent360</span>
        </div>

        {/* Center: brand logo, large */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoDataUrl}
            alt="Rent360"
            width={680}
            height={262}
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* Bottom: tagline + areas */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row-reverse',
              flexWrap: 'wrap',
              gap: '10px',
              fontSize: '34px',
              fontWeight: 700,
              color: '#0A0A0B',
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
            }}
          >
            <span>ניהול נכסים שהופך השכרה</span>
            <span style={{ color: '#F47B20' }}>לחוויה נעימה ובטוחה.</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row-reverse',
              alignItems: 'center',
              gap: '14px',
              fontSize: '20px',
              fontWeight: 600,
              color: '#52525B',
            }}
          >
            <span>קרית ביאליק</span>
            <span style={{ color: '#A1A1AA' }}>·</span>
            <span>קרית ים</span>
            <span style={{ color: '#A1A1AA' }}>·</span>
            <span>קרית מוצקין</span>
            <span style={{ color: '#A1A1AA' }}>·</span>
            <span>קרית אתא</span>
            <span style={{ color: '#A1A1AA' }}>·</span>
            <span>קרית חיים</span>
            <span style={{ color: '#A1A1AA' }}>·</span>
            <span>חיפה</span>
            <span style={{ color: '#A1A1AA' }}>·</span>
            <span>נשר</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Rubik',
          data: fontData,
          style: 'normal',
          weight: 700,
        },
      ],
    },
  );
}
