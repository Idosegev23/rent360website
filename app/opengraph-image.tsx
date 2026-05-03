import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const runtime = 'nodejs';
export const alt = 'Rent360 — Property management in Krayot, Haifa, Nesher';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  // Read the official brand logo from /public/logos/logo.svg
  const logoPath = join(process.cwd(), 'public', 'logos', 'logo.svg');
  const logoSvg = readFileSync(logoPath, 'utf-8');
  const logoDataUrl = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString('base64')}`;

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
          padding: '72px 96px',
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

        {/* Top eyebrow */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            fontSize: '22px',
            fontWeight: 600,
            color: '#52525B',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
          }}
        >
          <span
            style={{
              display: 'flex',
              width: '32px',
              height: '2px',
              background: '#F47B20',
            }}
          />
          <span>Property Management</span>
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
            width={760}
            height={293}
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* Bottom: URL + areas */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '32px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '32px',
              fontWeight: 700,
              color: '#0A0A0B',
              letterSpacing: '-0.02em',
            }}
          >
            <span>rent360.co.il</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '22px',
              fontWeight: 600,
              color: '#52525B',
            }}
          >
            <span>Krayot</span>
            <span style={{ color: '#A1A1AA' }}>·</span>
            <span>Haifa</span>
            <span style={{ color: '#A1A1AA' }}>·</span>
            <span>Nesher</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
