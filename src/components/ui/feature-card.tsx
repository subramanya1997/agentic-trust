import React from 'react';
import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface FeatureCardProps {
  icon?: LucideIcon;
  iconElement?: React.ReactNode;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  className?: string;
  variant?: 'default' | 'bordered' | 'elevated';
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  iconElement,
  title,
  description,
  link,
  linkText = 'Learn more',
  className,
  variant = 'default',
}) => {
  const content = (
    <>
      {/* Icon */}
      {(Icon || iconElement) && (
        <div className="mb-4">
          {iconElement ? (
            iconElement
          ) : Icon ? (
            <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center group-hover:bg-brand/20 transition-colors duration-300">
              <Icon className="w-6 h-6 text-brand" aria-hidden="true" />
            </div>
          ) : null}
        </div>
      )}

      {/* Content */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>

      {/* Link */}
      {link && (
        <div className="flex items-center text-sm font-medium text-brand group-hover:gap-2 transition-all duration-300">
          <span>{linkText}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
        </div>
      )}
    </>
  );

  const baseClasses = cn(
    'group p-6 rounded-xl transition-all duration-300',
    variant === 'default' && 'bg-white hover:shadow-md',
    variant === 'bordered' && 'bg-white border border-gray-200 hover:border-brand hover:shadow-md',
    variant === 'elevated' && 'bg-white shadow-sm hover:shadow-lg',
    className
  );

  if (link) {
    return (
      <Link href={link} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return <div className={baseClasses}>{content}</div>;
};

