'use client';

import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  align?: 'left' | 'center' | 'right';
}

export default function SectionTitle({
  title,
  subtitle,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  align = 'center',
}: SectionTitleProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const widthClasses = align === 'center' ? 'mx-auto max-w-5xl' : 'max-w-5xl';
  const subtitleWidthClasses = align === 'center' ? 'mx-auto max-w-3xl' : 'max-w-3xl';

  return (
    <div
      className={`mb-10 sm:mb-14 md:mb-16 lg:mb-20 ${alignClasses[align]} ${widthClasses} ${className}`}
      style={{ opacity: 1, visibility: 'visible' }}
    >
      <h2
        className={`section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${titleClassName}`}
        style={{ opacity: 1, visibility: 'visible' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg md:text-xl text-gray-600 mt-2 sm:mt-3 ${subtitleWidthClasses} ${subtitleClassName}`}
          style={{ opacity: 1, visibility: 'visible' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

