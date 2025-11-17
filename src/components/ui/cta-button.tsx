import React from 'react';
import Link from 'next/link';
import { LucideIcon, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './button';

export interface CtaButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  external?: boolean;
}

export const CtaButton: React.FC<CtaButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  loading = false,
  disabled = false,
  className,
  external = false,
}) => {
  const variantClasses = {
    primary: 'bg-brand text-white hover:bg-brand/90 shadow-sm hover:shadow-md',
    secondary: 'bg-gray-900 text-white hover:bg-gray-800 shadow-sm hover:shadow-md',
    outline: 'border-2 border-brand text-brand hover:bg-brand hover:text-white',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonClasses = cn(
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300',
    'focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const iconElement = loading ? (
    <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
  ) : Icon ? (
    <Icon className="w-4 h-4" aria-hidden="true" />
  ) : null;

  const content = (
    <>
      {iconPosition === 'left' && iconElement}
      <span>{children}</span>
      {iconPosition === 'right' && iconElement}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
          aria-disabled={disabled || loading}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={buttonClasses} aria-disabled={disabled || loading}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClasses}
    >
      {content}
    </button>
  );
};

