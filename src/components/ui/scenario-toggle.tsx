"use client";

import React from 'react';

export interface Scenario {
  id: string;
  label: string;
  icon?: string;
  description?: string;
}

interface ScenarioToggleProps {
  scenarios: Scenario[];
  activeScenario: string;
  onChange: (scenarioId: string) => void;
  className?: string;
}

export const ScenarioToggle: React.FC<ScenarioToggleProps> = ({
  scenarios,
  activeScenario,
  onChange,
  className = '',
}) => {
  return (
    <div className={`inline-flex items-center gap-1 p-1 bg-gray-100 rounded-lg ${className}`}>
      {scenarios.map((scenario) => {
        const isActive = activeScenario === scenario.id;
        return (
          <button
            key={scenario.id}
            onClick={() => onChange(scenario.id)}
            className={`
              px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
              ${isActive 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }
            `}
            aria-pressed={isActive}
          >
            <div className="flex items-center gap-2">
              {scenario.icon && <span className="text-base">{scenario.icon}</span>}
              <span>{scenario.label}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
};

interface ScenarioTabsProps {
  scenarios: Scenario[];
  activeScenario: string;
  onChange: (scenarioId: string) => void;
  showDescription?: boolean;
  className?: string;
}

export const ScenarioTabs: React.FC<ScenarioTabsProps> = ({
  scenarios,
  activeScenario,
  onChange,
  showDescription = false,
  className = '',
}) => {
  const activeScenarioData = scenarios.find(s => s.id === activeScenario);

  return (
    <div className={className}>
      <div className="flex items-center gap-2 border-b border-gray-200">
        {scenarios.map((scenario) => {
          const isActive = activeScenario === scenario.id;
          return (
            <button
              key={scenario.id}
              onClick={() => onChange(scenario.id)}
              className={`
                px-4 py-3 text-sm font-medium transition-all duration-200 relative
                ${isActive 
                  ? 'text-brand border-b-2 border-brand' 
                  : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent'
                }
              `}
              aria-pressed={isActive}
            >
              <div className="flex items-center gap-2">
                {scenario.icon && <span className="text-base">{scenario.icon}</span>}
                <span>{scenario.label}</span>
              </div>
            </button>
          );
        })}
      </div>
      {showDescription && activeScenarioData?.description && (
        <div className="mt-3 text-sm text-gray-600">
          {activeScenarioData.description}
        </div>
      )}
    </div>
  );
};

