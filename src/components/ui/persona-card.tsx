import React from 'react';
import { Check, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface PersonaCardProps {
  persona: string;
  role: string;
  benefits: string[];
  icon?: LucideIcon;
  iconElement?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'highlighted';
}

export const PersonaCard: React.FC<PersonaCardProps> = ({
  persona,
  role,
  benefits,
  icon: Icon,
  iconElement,
  className,
  variant = 'default',
}) => {
  return (
    <div
      className={cn(
        'group p-6 rounded-xl transition-all duration-300',
        variant === 'default' && 'bg-white border border-gray-200 hover:border-brand hover:shadow-lg',
        variant === 'highlighted' && 'bg-gradient-to-br from-brand/5 to-white border border-brand/20 hover:shadow-lg',
        className
      )}
    >
      {/* Icon */}
      {(Icon || iconElement) && (
        <div className="mb-4">
          {iconElement ? (
            iconElement
          ) : Icon ? (
            <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-6 h-6 text-brand" aria-hidden="true" />
            </div>
          ) : null}
        </div>
      )}

      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{persona}</h3>
        <p className="text-sm text-gray-600">{role}</p>
      </div>

      {/* Benefits list */}
      <ul className="space-y-3" role="list">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center mt-0.5">
              <Check className="w-3 h-3 text-brand" aria-hidden="true" />
            </div>
            <span className="text-sm text-gray-700 leading-relaxed">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

