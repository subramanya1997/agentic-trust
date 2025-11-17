import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface IntegrationTileProps {
  name: string;
  logo?: string;
  logoElement?: React.ReactNode;
  status?: 'active' | 'coming-soon' | 'beta';
  description?: string;
  className?: string;
  onClick?: () => void;
}

export const IntegrationTile: React.FC<IntegrationTileProps> = ({
  name,
  logo,
  logoElement,
  status,
  description,
  className,
  onClick,
}) => {
  const statusConfig = {
    active: { label: 'Active', color: 'bg-green-100 text-green-700' },
    'coming-soon': { label: 'Coming Soon', color: 'bg-gray-100 text-gray-600' },
    beta: { label: 'Beta', color: 'bg-blue-100 text-blue-700' },
  };

  return (
    <div
      className={cn(
        'group relative p-4 rounded-lg border border-gray-200 bg-white transition-all duration-300',
        'hover:border-brand hover:shadow-md',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      {/* Status badge */}
      {status && (
        <div className="absolute top-2 right-2">
          <span
            className={cn(
              'text-xs font-medium px-2 py-1 rounded-full',
              statusConfig[status].color
            )}
          >
            {statusConfig[status].label}
          </span>
        </div>
      )}

      {/* Logo */}
      <div className="flex items-center justify-center h-12 mb-3">
        {logoElement ? (
          logoElement
        ) : logo ? (
          <Image
            src={logo}
            alt={`${name} logo`}
            width={48}
            height={48}
            className="object-contain"
          />
        ) : (
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="text-gray-400 text-xs font-semibold">
              {name.substring(0, 2).toUpperCase()}
            </span>
          </div>
        )}
      </div>

      {/* Name */}
      <h4 className="text-sm font-semibold text-gray-900 text-center mb-1 group-hover:text-brand transition-colors duration-300">
        {name}
      </h4>

      {/* Description */}
      {description && (
        <p className="text-xs text-gray-600 text-center line-clamp-2">{description}</p>
      )}
    </div>
  );
};

