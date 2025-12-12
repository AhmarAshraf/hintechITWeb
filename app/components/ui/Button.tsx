'use client';

import React, { forwardRef } from 'react';
import { scrollToSection } from '../../utils/scroll';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  gradient?: 'blue-purple' | 'purple-pink' | 'green-emerald' | 'orange-red' | 'indigo-blue';
  scrollTo?: string;
  children: React.ReactNode;
  className?: string;
}

const gradientClasses = {
  'blue-purple': 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700',
  'purple-pink': 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700',
  'green-emerald': 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600',
  'orange-red': 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600',
  'indigo-blue': 'bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg',
  lg: 'px-10 sm:px-12 md:px-14 py-5 sm:py-6 md:py-7 text-lg sm:text-xl md:text-2xl',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      gradient = 'blue-purple',
      scrollTo,
      children,
      className = '',
      onClick,
      ...props
    },
    ref
  ) => {
  const baseClasses = 'font-bold rounded-full transition-all duration-300 touch-manipulation min-h-[44px] flex items-center justify-center relative overflow-hidden group whitespace-nowrap';
  
  const variantClasses = {
    primary: `${gradientClasses[gradient]} text-white shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 active:scale-95 sm:hover:scale-105 before:absolute before:inset-0 before:bg-white/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300`,
    secondary: 'bg-white text-blue-600 hover:bg-gray-50 shadow-md hover:shadow-lg active:scale-95 sm:hover:scale-105',
    outline: 'border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg active:scale-95 sm:hover:scale-105 relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-50 before:to-purple-50 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:-z-10',
    ghost: 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 active:scale-95 sm:hover:scale-105',
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (scrollTo) {
      scrollToSection(scrollTo);
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      ref={ref}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
  }
);

Button.displayName = 'Button';

export default Button;

