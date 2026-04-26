'use client';

import type { ComponentPropsWithoutRef, CSSProperties } from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps extends ComponentPropsWithoutRef<'div'> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  /** e.g. "40s" */
  duration?: string;
  /** e.g. "1rem" — must match the visible flex gap */
  gap?: string;
}

/**
 * Pure-CSS infinite marquee (MagicUI pattern).
 * Each "copy" is its own animated flex child translating by
 * calc(-100% - var(--marquee-gap)), which guarantees seamless looping.
 *
 * Animation + gap are passed via inline style so neither Tailwind purge
 * nor RTL inheritance can break them.
 */
export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  duration = '40s',
  gap = '1rem',
  ...props
}: MarqueeProps) {
  const containerStyle: CSSProperties = {
    gap,
    ['--marquee-gap' as string]: gap,
  };

  const animationName = vertical ? 'marquee-y' : 'marquee-x';
  const trackStyle: CSSProperties = {
    gap,
    animation: `${animationName} ${duration} linear infinite${reverse ? ' reverse' : ''}`,
  };

  return (
    <div
      {...props}
      style={containerStyle}
      className={cn(
        'group flex overflow-hidden',
        vertical ? 'flex-col' : 'flex-row',
        className,
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          style={trackStyle}
          className={cn(
            'flex shrink-0 justify-around',
            vertical ? 'flex-col' : 'flex-row',
            pauseOnHover && 'group-hover:[animation-play-state:paused]',
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
