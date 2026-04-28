import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Rent360 — ניהול נכסים בקריות, חיפה ונשר';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
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
          fontFamily: 'system-ui, sans-serif',
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

        {/* Header — logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          {/* Wordmark */}
          <div
            style={{
              fontSize: '64px',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              color: '#0A0A0B',
            }}
          >
            Rent
            <span style={{ color: '#F47B20' }}>360</span>
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <div
            style={{
              fontSize: '76px',
              fontWeight: 800,
              letterSpacing: '-0.035em',
              lineHeight: 1.05,
              color: '#0A0A0B',
              direction: 'rtl',
              maxWidth: '950px',
            }}
          >
            ניהול נכסים שהופך השכרה{' '}
            <span style={{ color: '#F47B20' }}>לחוויה נעימה ובטוחה.</span>
          </div>
          <div
            style={{
              fontSize: '32px',
              fontWeight: 500,
              color: '#52525B',
              direction: 'rtl',
              lineHeight: 1.4,
            }}
          >
            שירות מלא לבעלי דירות בקריות, חיפה ונשר.
          </div>
        </div>

        {/* Footer — tag row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            fontSize: '22px',
            fontWeight: 600,
            color: '#52525B',
            direction: 'rtl',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '999px',
                background: '#F47B20',
              }}
            />
            <span>קרית ביאליק</span>
          </div>
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
    ),
    { ...size },
  );
}
