"use client"

import React, { type HTMLAttributes, type ReactNode } from 'react';
import { motion } from 'framer-motion';

export interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: 'left' | 'center';
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  (
    {
      eyebrow,
      heading,
      description,
      align = 'center',
      className = '',
      ...props
    },
    ref
  ) => {
    const alignmentClass = align === 'center' ? 'text-center' : 'text-left';

    return (
      <motion.div
        ref={ref}
        className={`mb-12 ${alignmentClass} ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        {...props}
      >
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--primary-900)] mb-3">
            {eyebrow}
          </p>
        )}

        <h2 className="text-4xl md:text-5xl font-bold text-[var(--slate-950)] mb-4 leading-tight">
          {heading}
        </h2>

        {description && (
          <p className="text-lg text-[var(--slate-600)] max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </motion.div>
    );
  }
);

SectionHeader.displayName = 'SectionHeader';

export default SectionHeader;
