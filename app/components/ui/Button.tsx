"use client"

import React, { type ButtonHTMLAttributes, type ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      icon,
      iconPosition = 'right',
      loading = false,
      fullWidth = false,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    // Variant styles - Corporate Professional
    const variants = {
      primary:
        'bg-[var(--primary-900)] text-white border-2 border-[var(--primary-900)] hover:bg-[var(--primary-800)] hover:border-[var(--primary-800)] shadow-sm hover:shadow-md',
      secondary:
        'bg-white text-[var(--primary-900)] border-2 border-[var(--primary-900)] hover:bg-[var(--primary-50)]',
      accent:
        'bg-[var(--accent-teal)] text-white border-2 border-[var(--accent-teal)] hover:bg-[#00BF8F] hover:border-[#00BF8F] shadow-sm hover:shadow-md',
      ghost:
        'bg-transparent text-[var(--primary-900)] border-2 border-transparent hover:bg-[var(--primary-50)] hover:border-[var(--primary-100)]',
      link:
        'bg-transparent text-[var(--primary-900)] border-2 border-transparent hover:text-[var(--primary-700)] underline-offset-4 hover:underline',
    };

    // Size styles - Corporate Professional (increased padding)
    const sizes = {
      sm: 'px-6 py-2.5 text-sm min-h-[44px]',
      md: 'px-8 py-3 text-base min-h-[48px]',
      lg: 'px-10 py-4 text-lg min-h-[52px]',
      xl: 'px-12 py-5 text-xl min-h-[56px]',
    };

    const baseStyles =
      'relative inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-250 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-900)] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none';

    const widthStyle = fullWidth ? 'w-full' : '';

    return (
      <motion.button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
        disabled={disabled || loading}
        whileHover={{ scale: variant !== 'link' ? 1.01 : 1 }}
        whileTap={{ scale: variant !== 'link' ? 0.99 : 1 }}
        {...props}
      >
        {loading && (
          <Loader2 className="w-4 h-4 animate-spin" />
        )}

        {!loading && icon && iconPosition === 'left' && (
          <span className="flex-shrink-0">{icon}</span>
        )}

        <span>{children}</span>

        {!loading && icon && iconPosition === 'right' && (
          <span className="flex-shrink-0">
            {icon}
          </span>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
