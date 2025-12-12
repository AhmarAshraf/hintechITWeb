'use client';

import React, { useRef } from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  dataScroll?: boolean;
  dataScrollSpeed?: string;
  glow?: boolean;
}

export default function Card({
  children,
  className = '',
  hover = true,
  dataScroll = false,
  dataScrollSpeed,
  glow = false,
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!glow || !cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty('--glow-angle', `${angle + 60}deg`);
  };

  const baseClasses = 'bg-white rounded-2xl sm:rounded-3xl shadow-lg transition-all duration-300 border border-gray-100';
  const hoverClasses = hover
    ? 'hover:shadow-2xl hover:shadow-blue-100/50 transform hover:-translate-y-2 active:scale-95 sm:active:scale-100'
    : '';

  const scrollProps = dataScroll
    ? {
        'data-scroll': true,
        'data-scroll-speed': dataScrollSpeed || '0.3',
      }
    : {};

  return (
    <div
      ref={cardRef}
      onMouseMove={glow ? handleMouseMove : undefined}
      className={`relative ${baseClasses} ${hoverClasses} ${glow ? 'glow-card' : ''} ${className}`}
      {...scrollProps}
      style={glow ? { '--glow-angle': '0deg' } as React.CSSProperties : undefined}
    >
      {glow && <div className="absolute inset-0 glow-effect pointer-events-none" />}
      {children}
    </div>
  );
}

