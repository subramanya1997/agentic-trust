import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface TimelineItem {
  title: string;
  description: string;
  timestamp?: string;
  icon?: LucideIcon;
  iconElement?: React.ReactNode;
}

export interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ items, className }) => {
  return (
    <div className={cn('relative', className)} role="list">
      {items.map((item, index) => {
        const Icon = item.icon;
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="relative flex gap-4 pb-8 last:pb-0" role="listitem">
            {/* Connector line */}
            {!isLast && (
              <div
                className="absolute left-5 top-12 bottom-0 w-0.5 bg-gray-200"
                aria-hidden="true"
              />
            )}

            {/* Icon */}
            <div className="relative z-10 flex-shrink-0">
              {item.iconElement ? (
                item.iconElement
              ) : Icon ? (
                <div className="w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  <Icon className="w-5 h-5 text-brand" aria-hidden="true" />
                </div>
              ) : (
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  <span className="text-sm font-semibold text-gray-600">{index + 1}</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pt-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                {item.timestamp && (
                  <time className="text-xs text-gray-500 ml-2">{item.timestamp}</time>
                )}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

