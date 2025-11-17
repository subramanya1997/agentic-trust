import React, { useEffect, useRef, useState } from 'react';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface StatItem {
  value: string | number;
  label: string;
  trend?: 'up' | 'down';
  trendValue?: string;
  icon?: LucideIcon;
}

export interface StatsDisplayProps {
  stats: StatItem[];
  columns?: 2 | 3 | 4;
  animated?: boolean;
  className?: string;
}

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  columns = 3,
  animated = true,
  className,
}) => {
  const gridClasses = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={cn('grid gap-6', gridClasses[columns], className)}>
      {stats.map((stat, index) => (
        <StatCard key={index} stat={stat} animated={animated} delay={index * 100} />
      ))}
    </div>
  );
};

interface StatCardProps {
  stat: StatItem;
  animated: boolean;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ stat, animated, delay }) => {
  const [isVisible, setIsVisible] = useState(!animated);
  const [displayValue, setDisplayValue] = useState(animated ? 0 : stat.value);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [animated, delay]);

  useEffect(() => {
    if (!isVisible || typeof stat.value !== 'number') {
      setDisplayValue(stat.value);
      return;
    }

    const numericValue = stat.value as number;
    const duration = 1500;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setDisplayValue(numericValue);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  const Icon = stat.icon;
  const TrendIcon = stat.trend === 'up' ? TrendingUp : stat.trend === 'down' ? TrendingDown : null;

  return (
    <div
      ref={ref}
      className="group p-6 rounded-xl bg-white border border-gray-200 hover:border-brand hover:shadow-lg transition-all duration-300"
    >
      {/* Icon */}
      {Icon && (
        <div className="mb-3">
          <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center group-hover:bg-brand/20 transition-colors duration-300">
            <Icon className="w-5 h-5 text-brand" aria-hidden="true" />
          </div>
        </div>
      )}

      {/* Value */}
      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-3xl font-bold text-gray-900">{displayValue}</span>
        {TrendIcon && stat.trendValue && (
          <span
            className={cn(
              'flex items-center gap-1 text-sm font-medium',
              stat.trend === 'up' && 'text-green-600',
              stat.trend === 'down' && 'text-red-600'
            )}
          >
            <TrendIcon className="w-4 h-4" aria-hidden="true" />
            {stat.trendValue}
          </span>
        )}
      </div>

      {/* Label */}
      <p className="text-sm text-gray-600">{stat.label}</p>
    </div>
  );
};

