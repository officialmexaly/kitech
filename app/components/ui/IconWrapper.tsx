"use client"

import React, { type ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface IconWrapperProps extends HTMLMotionProps<"div"> {
  icon: ReactNode;
  shape?: 'circle' | 'square' | 'rounded';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'accent' | 'custom';
  customColor?: string;
  animate?: boolean;
}

const IconWrapper = React.forwardRef<HTMLDivElement, IconWrapperProps>(
  (
    {
      icon,
      shape = 'rounded',
      size = 'md',
      variant = 'primary',
      customColor,
      animate = true,
      className = '',
      ...props
    },
    ref
  ) => {
    // Shape styles
    const shapes = {
      circle: 'rounded-full',
      square: 'rounded-none',
      rounded: 'rounded-2xl',
    };

    // Size styles
    const sizes = {
      sm: 'w-10 h-10',
      md: 'w-14 h-14',
      lg: 'w-20 h-20',
      xl: 'w-24 h-24',
    };

    // Variant styles
    const getVariantStyles = () => {
      if (customColor) {
        return {
          background: customColor,
          color: 'white',
        };
      }

      const variantMap = {
        primary: 'bg-[var(--primary-100)] text-[var(--primary-900)]',
        secondary: 'bg-[var(--slate-200)] text-[var(--slate-700)]',
        accent: 'bg-[var(--accent-teal)]/10 text-[var(--accent-teal)]',
        custom: '',
      };

      return variantMap[variant];
    };

    const baseStyles =
      'flex items-center justify-center transition-all duration-250';

    const variantStyles = getVariantStyles();

    return (
      <motion.div
        ref={ref}
        className={`${baseStyles} ${shapes[shape]} ${sizes[size]} ${typeof variantStyles === 'string' ? variantStyles : ''
          } ${className}`}
        style={typeof variantStyles === 'object' ? variantStyles : undefined}
        whileHover={
          animate
            ? {
              rotate: 2,
              scale: 1.05,
            }
            : undefined
        }
        transition={{ duration: 0.3 }}
        {...props}
      >
        {icon}
      </motion.div>
    );
  }
);

IconWrapper.displayName = 'IconWrapper';

export default IconWrapper;
