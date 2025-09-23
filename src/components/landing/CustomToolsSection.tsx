"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, Check, X } from 'lucide-react';

const tenantConfigs = [
  {
    id: 'acme-corp',
    name: 'Acme Corp',
    plan: 'Enterprise',
    seats: 250,
    defaultRole: 'analyst',
    roles: [
      {
        id: 'admin',
        name: 'Admin',
        description: 'Full system access',
        userCount: 5,
        tools: {
          standard: ['file_read', 'web_search', 'database_query'],
          custom: ['audit_logs', 'compliance_check']
        }
      },
      {
        id: 'analyst',
        name: 'Financial Analyst',
        description: 'Data analysis and reporting',
        userCount: 45,
        tools: {
          standard: ['file_read', 'web_search', 'database_query'],
          custom: ['risk_analysis', 'compliance_check']
        }
      },
      {
        id: 'auditor',
        name: 'Auditor',
        description: 'Compliance and audit access',
        userCount: 12,
        tools: {
          standard: ['file_read'],
          custom: ['audit_logs', 'compliance_check']
        }
      }
    ]
  },
  {
    id: 'techstart',
    name: 'TechStart Inc',
    plan: 'Business',
    seats: 75,
    defaultRole: 'engineer',
    roles: [
      {
        id: 'admin',
        name: 'Admin',
        description: 'Full system access',
        userCount: 3,
        tools: {
          standard: ['file_read', 'web_search', 'database_query'],
          custom: ['deploy_prod', 'customer_data']
        }
      },
      {
        id: 'engineer',
        name: 'Engineer',
        description: 'Development and deployment',
        userCount: 25,
        tools: {
          standard: ['file_read', 'web_search', 'database_query'],
          custom: ['deploy_prod', 'customer_data']
        }
      },
      {
        id: 'support',
        name: 'Support Agent',
        description: 'Customer support access',
        userCount: 15,
        tools: {
          standard: ['file_read', 'web_search'],
          custom: ['customer_data', 'ticket_create']
        }
      }
    ]
  },
  {
    id: 'healthflow',
    name: 'HealthFlow Medical',
    plan: 'Enterprise',
    seats: 500,
    defaultRole: 'doctor',
    roles: [
      {
        id: 'admin',
        name: 'Admin',
        description: 'Full system access',
        userCount: 8,
        tools: {
          standard: ['file_read', 'web_search', 'database_query'],
          custom: ['patient_records', 'lab_results']
        }
      },
      {
        id: 'doctor',
        name: 'Doctor',
        description: 'Medical professional access',
        userCount: 120,
        tools: {
          standard: ['file_read', 'web_search', 'database_query'],
          custom: ['patient_records', 'lab_results']
        }
      },
      {
        id: 'nurse',
        name: 'Nurse',
        description: 'Patient care access',
        userCount: 200,
        tools: {
          standard: ['file_read', 'web_search'],
          custom: ['patient_records', 'appointment_schedule']
        }
      }
    ]
  }
];

const standardToolsList = [
  { id: 'file_read', name: 'File Read', category: 'File System' },
  { id: 'web_search', name: 'Web Search', category: 'External' },
  { id: 'database_query', name: 'Database Query', category: 'Data' }
];

export const CustomToolsSection = () => {
  // Start with first tenant to avoid hydration mismatch
  const [activeTenantIndex, setActiveTenantIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Set random tenant after mount to avoid SSR hydration issues
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * tenantConfigs.length);
    setActiveTenantIndex(randomIndex);
  }, []);

  const activeTenant = tenantConfigs[activeTenantIndex];
  const selectedRole = activeTenant.defaultRole;
  const activeRole = activeTenant.roles.find(r => r.id === selectedRole) || null;

  // Get all custom tools for the tenant
  const allCustomTools = Array.from(new Set(
    activeTenant.roles.flatMap(role => role.tools.custom)
  )).sort();

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Configure tools by tenant and role
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Each tenant gets their own isolated tool configuration. Define custom tools specific to their 
            business needs and control access at the role level.
          </p>
        </div>

        {/* Mobile-Friendly Panel UI */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Tenant Selector Bar */}
          <div className="bg-gray-100 border-b border-gray-200 px-4 sm:px-8 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wider block mb-1 sm:hidden">Tenant</label>
                  <div className="relative">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center justify-between w-full sm:w-auto gap-2 bg-white px-4 py-2 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors"
                    >
                      <span className="font-medium">{activeTenant.name}</span>
                      <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10 w-full sm:min-w-[200px]">
                        {tenantConfigs.map((tenant, index) => (
                          <button
                            key={tenant.id}
                            onClick={() => {
                              setActiveTenantIndex(index);
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 hover:bg-gray-50 ${
                              index === activeTenantIndex ? 'bg-gray-50 font-medium' : ''
                            }`}
                          >
                            {tenant.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex gap-4 sm:gap-6 text-sm">
                  <div>
                    <span className="text-gray-500">Plan:</span> <span className="font-medium">{activeTenant.plan}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Seats:</span> <span className="font-medium">{activeTenant.seats}</span>
                  </div>
                </div>
              </div>
                </div>
              </div>
              
          {/* Content Area */}
          <div className="divide-y lg:divide-y-0 lg:grid lg:grid-cols-3 lg:divide-x divide-gray-200">
            {/* Roles List */}
            <div className="p-4 sm:p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Roles</h4>
              <div className="space-y-2">
                {activeTenant.roles.map((role) => (
                  <div
                    key={role.id}
                    className={`w-full text-left p-3 sm:p-4 rounded-lg border transition-all ${
                      selectedRole === role.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-gray-900 text-sm sm:text-base">{role.name}</span>
                      <span className="text-xs text-gray-500">{role.userCount} users</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">{role.description}</p>
                    <div className="mt-2 text-xs text-gray-500">
                      {role.tools.standard.length + role.tools.custom.length} tools enabled
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tool Configuration */}
            <div className="lg:col-span-2 p-4 sm:p-6">
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2 text-lg sm:text-xl">
                  Tool Access for {activeRole?.name}
                </h4>
                <p className="text-sm text-gray-600">
                  Configure which tools this role can access. Changes apply immediately to all users with this role.
                </p>
              </div>

              {/* Standard Tools */}
              <div className="mb-8">
                <h5 className="text-sm font-medium text-gray-700 uppercase tracking-wider mb-3">Standard Tools</h5>
                <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                  <div className="grid gap-2 sm:gap-3">
                    {standardToolsList.map((tool) => {
                      const isEnabled = activeRole?.tools.standard.includes(tool.id);
                      return (
                        <div
                          key={tool.id}
                          className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-gray-900 text-sm sm:text-base">{tool.name}</div>
                            <div className="text-xs text-gray-500">{tool.category}</div>
                          </div>
                          <div className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex-shrink-0 ml-2 ${
                            isEnabled
                              ? 'bg-green-100 text-green-700'
                              : 'bg-gray-100 text-gray-500'
                          }`}>
                            {isEnabled ? (
                              <>
                                <Check className="w-3 h-3" />
                                <span className="hidden sm:inline">Enabled</span>
                                <span className="sm:hidden">On</span>
                              </>
                            ) : (
                              <>
                                <X className="w-3 h-3" />
                                <span className="hidden sm:inline">Disabled</span>
                                <span className="sm:hidden">Off</span>
                              </>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
        </div>

              {/* Custom Tools */}
            <div>
                <h5 className="text-sm font-medium text-gray-700 uppercase tracking-wider mb-3">
                  Custom Tools for {activeTenant.name}
                </h5>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4">
                  <div className="grid gap-2 sm:gap-3">
                    {allCustomTools.map((tool) => {
                      const isEnabled = activeRole?.tools.custom.includes(tool);
                      return (
                        <div
                          key={tool}
                          className="flex items-center justify-between p-3 bg-white rounded-lg border border-blue-200"
                        >
                          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                            <div className="min-w-0">
                              <div className="font-medium text-gray-900 text-sm sm:text-base">
                                {tool.split('_').map(word => 
                                  word.charAt(0).toUpperCase() + word.slice(1)
                                ).join(' ')}
                              </div>
                              <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">Custom</span>
                            </div>
                          </div>
                          <div className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex-shrink-0 ml-2 ${
                            isEnabled
                              ? 'bg-green-100 text-green-700'
                              : 'bg-gray-100 text-gray-500'
                          }`}>
                            {isEnabled ? (
                              <>
                                <Check className="w-3 h-3" />
                                <span className="hidden sm:inline">Enabled</span>
                                <span className="sm:hidden">On</span>
                              </>
                            ) : (
                              <>
                                <X className="w-3 h-3" />
                                <span className="hidden sm:inline">Disabled</span>
                                <span className="sm:hidden">Off</span>
                              </>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-6">
          <h4 className="font-semibold text-gray-900 mb-2">Complete Tenant Isolation</h4>
          <p className="text-sm text-gray-700">
            Each tenant&apos;s tool configuration is completely isolated. Custom tools created for one tenant 
            are never visible or accessible to other tenants, ensuring data security and preventing 
            configuration conflicts in your multi-tenant environment.
          </p>
        </div>
      </div>
    </section>
  );
};
