import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Step {
  title: string;
  description?: string;
}

export interface StepIndicatorProps {
  steps: Step[];
  currentStep?: number;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  steps,
  currentStep = 0,
  orientation = 'horizontal',
  className,
}) => {
  const isHorizontal = orientation === 'horizontal';

  return (
    <div
      className={cn(
        'flex',
        isHorizontal ? 'flex-row items-start justify-between' : 'flex-col space-y-4',
        className
      )}
      role="list"
      aria-label="Progress steps"
    >
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;
        const isUpcoming = index > currentStep;

        return (
          <div
            key={index}
            className={cn(
              'flex',
              isHorizontal ? 'flex-col items-center flex-1' : 'flex-row items-start space-x-4'
            )}
            role="listitem"
          >
            {/* Step indicator circle */}
            <div className="flex items-center">
              <div
                className={cn(
                  'flex items-center justify-center rounded-full transition-all duration-300',
                  isHorizontal ? 'w-12 h-12' : 'w-10 h-10',
                  isCompleted && 'bg-brand text-white',
                  isCurrent && 'bg-brand text-white ring-4 ring-brand/20',
                  isUpcoming && 'bg-gray-200 text-gray-500'
                )}
                aria-current={isCurrent ? 'step' : undefined}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <span className="text-sm font-semibold">{index + 1}</span>
                )}
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    'transition-all duration-300',
                    isHorizontal
                      ? 'hidden md:block w-full h-0.5 mx-2'
                      : 'w-0.5 h-8 ml-5 -mt-2',
                    isCompleted ? 'bg-brand' : 'bg-gray-200'
                  )}
                  aria-hidden="true"
                />
              )}
            </div>

            {/* Step content */}
            <div
              className={cn(
                'text-center',
                isHorizontal ? 'mt-3 max-w-[150px]' : 'flex-1 mt-0'
              )}
            >
              <h3
                className={cn(
                  'font-semibold transition-colors duration-300',
                  isHorizontal ? 'text-sm' : 'text-base',
                  (isCompleted || isCurrent) && 'text-gray-900',
                  isUpcoming && 'text-gray-500'
                )}
              >
                {step.title}
              </h3>
              {step.description && (
                <p
                  className={cn(
                    'text-xs mt-1 transition-colors duration-300',
                    (isCompleted || isCurrent) && 'text-gray-600',
                    isUpcoming && 'text-gray-400'
                  )}
                >
                  {step.description}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

