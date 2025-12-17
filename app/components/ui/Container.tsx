"use client"

import React, { type HTMLAttributes, type ReactNode } from 'react';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, size = 'xl', className = '', ...props }, ref) => {
    const sizes = {
      sm: 'max-w-3xl',
      md: 'max-w-5xl',
      lg: 'max-w-6xl',
      xl: 'max-w-7xl',
      full: 'max-w-full',
    };

    return (
      <div
        ref={ref}
        className={`w-full ${sizes[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

export default Container;
