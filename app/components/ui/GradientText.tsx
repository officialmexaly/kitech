"use client"

import React, { type HTMLAttributes, type ReactNode } from 'react';

export interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: 'primary' | 'accent';
}

const GradientText = React.forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ children, variant = 'primary', className = '', ...props }, ref) => {
    const gradientClass =
      variant === 'primary' ? 'text-gradient' : 'text-gradient-accent';

    return (
      <span
        ref={ref}
        className={`${gradientClass} ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }
);

GradientText.displayName = 'GradientText';

export default GradientText;
