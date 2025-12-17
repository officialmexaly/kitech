"use client"

import React, { type HTMLAttributes, type ReactNode } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning';
  children: ReactNode;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'primary', children, className = '', ...props }, ref) => {
    const variants = {
      primary:
        'bg-[var(--primary-100)] text-[var(--primary-900)] border-[var(--primary-200)]',
      secondary:
        'bg-[var(--slate-100)] text-[var(--slate-700)] border-[var(--slate-200)]',
      success:
        'bg-[var(--accent-emerald)]/10 text-[var(--accent-emerald)] border-[var(--accent-emerald)]/20',
      warning:
        'bg-[var(--accent-amber)]/10 text-[var(--accent-amber)] border-[var(--accent-amber)]/20',
    };

    return (
      <span
        ref={ref}
        className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
