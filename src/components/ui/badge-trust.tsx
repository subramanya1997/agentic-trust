import React from 'react';
import { Shield, Key, Lock, FileCheck, Database, Globe } from 'lucide-react';

type TrustBadgeType = 'saml' | 'scim' | 'oidc' | 'kms' | 'logs' | 'isolation' | 'policy';

interface TrustBadgeProps {
  type: TrustBadgeType;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const badgeConfig: Record<TrustBadgeType, { icon: React.ElementType; defaultLabel: string; color: string }> = {
  saml: { icon: Shield, defaultLabel: 'SAML', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  scim: { icon: Database, defaultLabel: 'SCIM', color: 'bg-purple-100 text-purple-700 border-purple-200' },
  oidc: { icon: Key, defaultLabel: 'OIDC', color: 'bg-green-100 text-green-700 border-green-200' },
  kms: { icon: Lock, defaultLabel: 'KMS', color: 'bg-orange-100 text-orange-700 border-orange-200' },
  logs: { icon: FileCheck, defaultLabel: 'Tamper-evident logs', color: 'bg-gray-100 text-gray-700 border-gray-200' },
  isolation: { icon: Globe, defaultLabel: 'Tenant isolation', color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
  policy: { icon: Shield, defaultLabel: 'Policy as Code', color: 'bg-red-100 text-red-700 border-red-200' },
};

export const TrustBadge: React.FC<TrustBadgeProps> = ({ 
  type, 
  label, 
  size = 'md',
  className = '' 
}) => {
  const config = badgeConfig[type];
  const Icon = config.icon;
  const displayLabel = label || config.defaultLabel;

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <div className={`inline-flex items-center gap-1.5 rounded-full border font-medium ${config.color} ${sizeClasses[size]} ${className}`}>
      <Icon className={iconSizes[size]} />
      <span>{displayLabel}</span>
    </div>
  );
};

interface TrustBadgeStripProps {
  badges?: TrustBadgeType[];
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const TrustBadgeStrip: React.FC<TrustBadgeStripProps> = ({ 
  badges = ['saml', 'scim', 'oidc', 'kms', 'logs', 'isolation', 'policy'],
  size = 'sm',
  className = '' 
}) => {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {badges.map((badge) => (
        <TrustBadge key={badge} type={badge} size={size} />
      ))}
    </div>
  );
};

