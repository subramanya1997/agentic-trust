import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionContainerProps {
  children: React.ReactNode;
  background?: 'white' | 'gray' | 'gradient' | 'brand-light';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  id?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  background = 'white',
  maxWidth = 'xl',
  padding = 'lg',
  className,
  id,
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-b from-gray-50 to-white',
    'brand-light': 'bg-gradient-to-b from-orange-50 to-white',
  };

  const maxWidthClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    '2xl': 'max-w-[1400px]',
    full: 'max-w-full',
  };

  const paddingClasses = {
    none: '',
    sm: 'py-8 sm:py-12',
    md: 'py-12 sm:py-16',
    lg: 'py-16 sm:py-20',
    xl: 'py-20 sm:py-24',
  };

  return (
    <section
      id={id}
      className={cn(
        'relative',
        backgroundClasses[background],
        paddingClasses[padding],
        className
      )}
    >
      <div
        className={cn(
          'container mx-auto px-4 sm:px-6 lg:px-8',
          maxWidthClasses[maxWidth]
        )}
      >
        {children}
      </div>
    </section>
  );
};

