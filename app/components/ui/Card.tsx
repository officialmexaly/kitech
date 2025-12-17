"use client"

import React, { type HTMLAttributes, type ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface CardProps extends HTMLMotionProps<"div"> {
  variant?: 'standard' | 'elevated' | 'glass' | 'bordered' | 'corporate';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  children: ReactNode;
  hover?: boolean;
  header?: ReactNode;
  footer?: ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'standard',
      padding = 'lg',
      children,
      hover = true,
      header,
      footer,
      className = '',
      ...props
    },
    ref
  ) => {
    // Variant styles
    const variants = {
      standard:
        'bg-white border border-[var(--slate-200)] shadow-md',
      elevated:
        'bg-white border border-[var(--slate-200)] shadow-lg',
      glass:
        'glass-professional',
      bordered:
        'bg-white border-2 border-[var(--slate-300)]',
      corporate:
        'bg-white border-2 border-[var(--slate-200)] shadow-sm hover:border-[var(--primary-900)] hover:shadow-md',
    };

    // Padding styles
    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10',
    };

    // Hover effect
    const hoverClass = hover ? 'hover-lift cursor-pointer' : '';

    const baseStyles = 'rounded-xl overflow-hidden transition-all duration-300';

    return (
      <motion.div
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${hoverClass} ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        {...props}
      >
        {header && (
          <div className="border-b border-[var(--slate-200)] px-8 py-6">
            {header}
          </div>
        )}

        <div className={`${paddings[padding]} ${className.includes('flex') ? 'flex flex-col flex-grow' : ''}`}>
          {children}
        </div>

        {footer && (
          <div className="border-t border-[var(--slate-200)] px-8 py-6 bg-[var(--slate-50)]">
            {footer}
          </div>
        )}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
