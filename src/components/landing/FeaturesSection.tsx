"use client";

import React, { useState } from 'react';
import {
  Shield, Filter, Gauge, FileText, BarChart3, Cloud, Key, CheckCircle, XCircle, Activity, Server, Lock
  // Note: Combine, Briefcase, Workflow, Database are NOT needed here as they are for UnifiedContextRouterPreview
} from 'lucide-react';

interface TabProps {
  label: string;
  value: string;
  icon: React.ElementType;
}

const tabs: TabProps[] = [
  { label: 'Authentication', value: 'auth', icon: Shield },
  { label: 'Deployment', value: 'deploy', icon: Cloud },
  { label: 'Audit & Compliance', value: 'trace', icon: FileText },
  { label: 'Access Control', value: 'filter', icon: Filter },
  { label: 'Analytics & Billing', value: 'usage', icon: BarChart3 },
  { label: 'Rate Limiting', value: 'rate', icon: Gauge },
];

// Rate Limiting Preview
const RateLimitingPreview = () => (
  <div className="space-y-4 sm:space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      {/* Per-Tenant Limits */}
      <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Per-Tenant Request Limits</h3>
        <div className="space-y-3 sm:space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1.5 sm:mb-2">
              <span className="text-xs sm:text-sm font-medium text-gray-700">Tenant: Acme Corp</span>
              <span className="text-xs sm:text-sm font-mono text-gray-600">8,472 / 10,000</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: '84.7%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-1.5 sm:mb-2">
              <span className="text-xs sm:text-sm font-medium text-gray-700">Tenant: TechStart</span>
              <span className="text-xs sm:text-sm font-mono text-gray-600">2,150 / 5,000</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '43%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-1.5 sm:mb-2">
              <span className="text-xs sm:text-sm font-medium text-gray-700">Tenant: Enterprise Inc</span>
              <span className="text-xs sm:text-sm font-mono text-gray-600">45,200 / 100,000</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '45.2%' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Usage Tiers */}
      <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Usage Tier Protection</h3>
        <div className="space-y-2 sm:space-y-3">
          <div className="border border-gray-200 rounded-lg p-2 sm:p-3">
            <div className="flex items-center justify-between mb-1 sm:mb-2">
              <span className="text-xs sm:text-sm font-semibold text-gray-700">Starter Tier</span>
              <span className="text-[10px] sm:text-xs bg-gray-100 text-gray-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">5K req/day</span>
            </div>
            <p className="text-[10px] sm:text-xs text-gray-500">Basic rate limiting, 100 RPM max</p>
          </div>
          <div className="border border-blue-200 rounded-lg p-2 sm:p-3 bg-blue-50">
            <div className="flex items-center justify-between mb-1 sm:mb-2">
              <span className="text-xs sm:text-sm font-semibold text-gray-700">Growth Tier</span>
              <span className="text-[10px] sm:text-xs bg-blue-100 text-blue-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">50K req/day</span>
            </div>
            <p className="text-[10px] sm:text-xs text-gray-600">Enhanced limits, 500 RPM max, burst support</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-2 sm:p-3">
            <div className="flex items-center justify-between mb-1 sm:mb-2">
              <span className="text-xs sm:text-sm font-semibold text-gray-700">Enterprise</span>
              <span className="text-[10px] sm:text-xs bg-gray-100 text-gray-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">Custom</span>
            </div>
            <p className="text-[10px] sm:text-xs text-gray-500">Customizable limits, dedicated resources</p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Backend Resource Protection */}
    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 sm:p-6">
      <div className="flex items-start">
        <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
        <div>
          <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-0.5 sm:mb-1">Backend Resource Protection</h4>
          <p className="text-xs sm:text-sm text-gray-600">Automatic circuit breakers prevent backend overload. Rate limits are enforced at the gateway level, ensuring your services remain stable even under heavy load.</p>
        </div>
      </div>
    </div>
  </div>
);

// Tool Filtering Preview
const ToolFilteringPreview = () => (
  <div className="space-y-4 sm:space-y-6">
    {/* Global Tool Configuration */}
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-4 sm:p-6 border-b border-gray-200">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Global Access Policies</h3>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">Control which tools are available across your organization</p>
      </div>
      <div className="p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          <div className="flex items-center justify-between p-2 sm:p-3 border border-gray-200 rounded-lg">
            <span className="text-xs sm:text-sm font-medium text-gray-700">web_search</span>
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
          </div>
          <div className="flex items-center justify-between p-2 sm:p-3 border border-gray-200 rounded-lg">
            <span className="text-xs sm:text-sm font-medium text-gray-700">file_write</span>
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
          </div>
          <div className="flex items-center justify-between p-2 sm:p-3 border border-gray-200 rounded-lg">
            <span className="text-xs sm:text-sm font-medium text-gray-700">api_call</span>
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
          </div>
          <div className="flex items-center justify-between p-2 sm:p-3 border border-gray-200 rounded-lg opacity-60">
            <span className="text-xs sm:text-sm font-medium text-gray-700">database_write</span>
            <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" />
          </div>
          <div className="flex items-center justify-between p-2 sm:p-3 border border-gray-200 rounded-lg opacity-60">
            <span className="text-xs sm:text-sm font-medium text-gray-700">email_send</span>
            <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" />
          </div>
          <div className="flex items-center justify-between p-2 sm:p-3 border border-gray-200 rounded-lg opacity-60">
            <span className="text-xs sm:text-sm font-medium text-gray-700">system_exec</span>
            <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" />
          </div>
        </div>
      </div>
    </div>
    
    {/* Per-User Tool Access */}
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-4 sm:p-6 border-b border-gray-200">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Role-Based Access Control</h3>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">Granular permissions for users and teams</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left py-2 sm:py-3 px-3 sm:px-6 text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th className="text-center py-2 sm:py-3 px-3 sm:px-6 text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wider">Search</th>
              <th className="text-center py-2 sm:py-3 px-3 sm:px-6 text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wider">Write</th>
              <th className="text-center py-2 sm:py-3 px-3 sm:px-6 text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wider">API</th>
              <th className="text-center py-2 sm:py-3 px-3 sm:px-6 text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wider">Database</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="py-3 sm:py-4 px-3 sm:px-6 text-xs sm:text-sm font-medium text-gray-900 whitespace-nowrap">john@acme.com</td>
              <td className="py-3 sm:py-4 px-3 sm:px-6 text-center"><CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mx-auto" /></td>
              <td className="py-3 sm:py-4 px-3 sm:px-6 text-center"><CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mx-auto" /></td>
              <td className="py-3 sm:py-4 px-3 sm:px-6 text-center"><CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mx-auto" /></td>
              <td className="py-3 sm:py-4 px-3 sm:px-6 text-center"><XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mx-auto" /></td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 sm:py-4 px-3 sm:px-6 text-xs sm:text-sm font-medium text-gray-900 whitespace-nowrap">sarah@tech.io</td>
              <td className="py-3 sm:py-4 px-3 sm:px-6 text-center"><CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mx-auto" /></td>
              <td className="py-3 sm:py-4 px-3 sm:px-6 text-center"><XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mx-auto" /></td>
              <td className="py-3 sm:py-4 px-3 sm:px-6 text-center"><CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mx-auto" /></td>
              <td className="py-3 sm:py-4 px-3 sm:px-6 text-center"><XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mx-auto" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

// Authentication Preview (updated description)
const AuthenticationPreview = () => (
  <div className="space-y-4 sm:space-y-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
      {/* OAuth */}
      <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h3 className="text-xs sm:text-sm font-semibold text-gray-700">OAuth Providers</h3>
          <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" />
        </div>
        <div className="space-y-1.5 sm:space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm text-gray-600">Google OAuth</span>
            <span className="text-[10px] sm:text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full">Active</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm text-gray-600">GitHub OAuth</span>
            <span className="text-[10px] sm:text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full">Active</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm text-gray-600">Azure AD</span>
            <span className="text-[10px] sm:text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full">Active</span>
          </div>
        </div>
      </div>
      
      {/* API Keys */}
      <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h3 className="text-xs sm:text-sm font-semibold text-gray-700">API Keys</h3>
          <Key className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
        </div>
        <div className="space-y-1.5 sm:space-y-2">
          <div className="text-[10px] sm:text-xs font-mono bg-gray-50 p-1.5 sm:p-2 rounded break-all">sk-prod-***************mXk</div>
          <div className="text-[10px] sm:text-xs font-mono bg-gray-50 p-1.5 sm:p-2 rounded break-all">sk-test-***************7Hj</div>
          <div className="text-[10px] sm:text-xs text-gray-500 mt-1 sm:mt-2">Managed per request</div>
        </div>
      </div>
      
      {/* Sticky Sessions */}
      <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h3 className="text-xs sm:text-sm font-semibold text-gray-700">Sticky Sessions</h3>
          <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-500 flex-shrink-0" />
        </div>
        <div className="space-y-1 sm:space-y-2">
          <div className="text-xl sm:text-2xl font-semibold text-gray-900">Active</div>
          <div className="text-[10px] sm:text-xs text-gray-500">Session persistence enabled</div>
          <div className="text-[10px] sm:text-xs text-purple-600 mt-1 sm:mt-2">Fully managed per request</div>
        </div>
      </div>
    </div>
    
    {/* Per-Request Management */}
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
      <div className="flex items-start">
        <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
        <div>
          <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-0.5 sm:mb-1">Fully Managed Per Request</h4>
          <p className="text-xs sm:text-sm text-gray-600">Every request is authenticated and authorized independently. OAuth tokens are validated, API keys are checked, and session state is maintained automatically - all without any additional configuration.</p>
        </div>
      </div>
    </div>
  </div>
);

// Traceability Preview (updated from Audit Logs)
const TraceabilityPreview = () => (
  <div className="space-y-4 sm:space-y-6">
    {/* Request Tracing */}
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-4 sm:p-6 border-b border-gray-200">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Compliance-Ready Audit Trail</h3>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">Every action logged for security and compliance requirements</p>
      </div>
      <div className="p-4 sm:p-6">
        <div className="space-y-3 sm:space-y-4">
          <div className="border-l-4 border-blue-500 pl-3 sm:pl-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-1.5 sm:mb-2">
              <span className="font-mono text-[10px] sm:text-xs text-gray-600 mb-0.5 sm:mb-0">req_2h3j4k5l6m7n8p9q</span>
              <span className="text-[10px] sm:text-xs text-gray-400">2 seconds ago</span>
            </div>
            <div className="space-y-1 sm:space-y-1.5">
              <div className="flex items-center text-xs sm:text-sm">
                <span className="text-gray-500 w-16 sm:w-20 flex-shrink-0">User:</span>
                <span className="text-gray-900 break-all">john@acme.com</span>
              </div>
              <div className="flex items-center text-xs sm:text-sm">
                <span className="text-gray-500 w-16 sm:w-20 flex-shrink-0">Action:</span>
                <span className="text-gray-900 break-all">tool.execute(web_search)</span>
              </div>
              <div className="flex items-center text-xs sm:text-sm">
                <span className="text-gray-500 w-16 sm:w-20 flex-shrink-0">Query:</span>
                <span className="text-gray-900 font-mono text-[10px] sm:text-xs break-all">"latest AI news 2024"</span>
              </div>
              <div className="flex items-center text-xs sm:text-sm">
                <span className="text-gray-500 w-16 sm:w-20 flex-shrink-0">Duration:</span>
                <span className="text-gray-900">342ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Structured Logs */}
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-4 sm:p-6 border-b border-gray-200">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Structured Logs</h3>
      </div>
      <div className="p-4 sm:p-6">
        <pre className="text-[10px] sm:text-xs bg-gray-50 p-3 sm:p-4 rounded-lg overflow-x-auto">
{`{
  "timestamp": "2024-01-08T11:42:31.123Z",
  "request_id": "req_2h3j4k5l6m7n8p9q",
  "user": {
    "id": "user_123",
    "email": "john@acme.com",
    "tenant": "acme-corp"
  },
  "action": {
    "type": "tool.execute",
    "tool": "web_search",
    "parameters": {
      "query": "latest AI news 2024"
    }
  },
  "response": {
    "status": "success",
    "duration_ms": 342,
    "results_count": 10
  }
}`}</pre>
      </div>
    </div>
  </div>
);

// Usage Tracking Preview (new)
const UsageTrackingPreview = () => (
  <div className="space-y-4 sm:space-y-6">
    {/* Tool Invocation Metrics & Usage by Tenant */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Real-Time Analytics</h3>
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center justify-between py-1.5 sm:py-2 border-b border-gray-100">
            <span className="text-xs sm:text-sm text-gray-700">web_search</span>
            <span className="text-xs sm:text-sm font-mono font-semibold text-gray-900">12,847 calls</span>
          </div>
          <div className="flex items-center justify-between py-1.5 sm:py-2 border-b border-gray-100">
            <span className="text-xs sm:text-sm text-gray-700">file_write</span>
            <span className="text-xs sm:text-sm font-mono font-semibold text-gray-900">3,421 calls</span>
          </div>
          <div className="flex items-center justify-between py-1.5 sm:py-2 border-b border-gray-100">
            <span className="text-xs sm:text-sm text-gray-700">api_call</span>
            <span className="text-xs sm:text-sm font-mono font-semibold text-gray-900">8,765 calls</span>
          </div>
          <div className="flex items-center justify-between py-1.5 sm:py-2">
            <span className="text-xs sm:text-sm text-gray-700">database_query</span>
            <span className="text-xs sm:text-sm font-mono font-semibold text-gray-900">2,156 calls</span>
          </div>
        </div>
      </div>
      
      {/* Usage by Tenant */}
      <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Usage-Based Billing</h3>
        <div className="space-y-2 sm:space-y-3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs sm:text-sm text-gray-700">Acme Corp</span>
              <span className="text-xs sm:text-sm font-mono text-gray-600">45%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs sm:text-sm text-gray-700">TechStart</span>
              <span className="text-xs sm:text-sm font-mono text-gray-600">30%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '30%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs sm:text-sm text-gray-700">Enterprise Inc</span>
              <span className="text-xs sm:text-sm font-mono text-gray-600">25%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '25%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Analytics & Billing Integration */}
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4 sm:p-6">
      <div className="flex items-start">
        <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
        <div>
          <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-0.5 sm:mb-1">Integrated Billing & Analytics Platform</h4>
          <p className="text-xs sm:text-sm text-gray-600">Track usage, generate invoices, and analyze patterns in one place. Export to Stripe, QuickBooks, or your billing system. Built-in cost allocation and chargeback support.</p>
        </div>
      </div>
    </div>
  </div>
);

// Deployment Preview (new)
const DeploymentPreview = () => (
  <div className="space-y-4 sm:space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      {/* Fully Managed */}
      <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">Fully Managed</h3>
          <Cloud className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
        </div>
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-start">
            <CheckCircle className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-900">Zero infrastructure management</p>
              <p className="text-[10px] sm:text-xs text-gray-500">We handle all scaling, updates, and maintenance</p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-900">Global edge network</p>
              <p className="text-[10px] sm:text-xs text-gray-500">Low latency access from anywhere</p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-900">99.95% uptime SLA</p>
              <p className="text-[10px] sm:text-xs text-gray-500">Enterprise-grade reliability</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* BYOC (Bring Your Own Cloud) */}
      <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">Bring Your Own Cloud</h3>
          <Server className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
        </div>
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-start">
            <CheckCircle className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-900">Deploy in your infrastructure</p>
              <p className="text-[10px] sm:text-xs text-gray-500">AWS, Azure, GCP, or on-premises</p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-900">Complete data sovereignty</p>
              <p className="text-[10px] sm:text-xs text-gray-500">Your data never leaves your environment</p>
            </div>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-900">Compliance ready</p>
              <p className="text-[10px] sm:text-xs text-gray-500">Meet regulatory requirements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Deployment Options Comparison */}
    <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
      <table className="w-full min-w-[500px]">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="text-left py-2 sm:py-3 px-3 sm:px-6 text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
            <th className="text-center py-2 sm:py-3 px-3 sm:px-6 text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wider">Managed</th>
            <th className="text-center py-2 sm:py-3 px-3 sm:px-6 text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wider">BYOC</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="py-3 sm:py-4 px-3 sm:px-6 text-xs sm:text-sm text-gray-900 whitespace-nowrap">Setup time</td>
            <td className="py-3 sm:py-4 px-3 sm:px-6 text-center text-xs sm:text-sm">Zero</td>
            <td className="py-3 sm:py-4 px-3 sm:px-6 text-center text-xs sm:text-sm">&lt; 1 hour</td>
          </tr>
          <tr>
            <td className="py-3 sm:py-4 px-3 sm:px-6 text-xs sm:text-sm text-gray-900 whitespace-nowrap">Maintenance</td>
            <td className="py-3 sm:py-4 px-3 sm:px-6 text-center text-xs sm:text-sm">Zero</td>
            <td className="py-3 sm:py-4 px-3 sm:px-6 text-center text-xs sm:text-sm">Minimal</td>
          </tr>
          <tr>
            <td className="py-3 sm:py-4 px-3 sm:px-6 text-xs sm:text-sm text-gray-900 whitespace-nowrap">Data location</td>
            <td className="py-3 sm:py-4 px-3 sm:px-6 text-center text-xs sm:text-sm">Our cloud</td>
            <td className="py-3 sm:py-4 px-3 sm:px-6 text-center text-xs sm:text-sm">Your cloud</td>
          </tr>
          <tr>
            <td className="py-3 sm:py-4 px-3 sm:px-6 text-xs sm:text-sm text-gray-900 whitespace-nowrap">Compliance</td>
            <td className="py-3 sm:py-4 px-3 sm:px-6 text-center text-xs sm:text-sm">SOC2, GDPR</td>
            <td className="py-3 sm:py-4 px-3 sm:px-6 text-center text-xs sm:text-sm">Your policies</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState('auth');

  return (
    <section id="platform-capabilities" className="py-16 sm:py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="inline-block text-xs sm:text-sm uppercase text-blue-600 font-semibold mb-3 sm:mb-4 tracking-wider">
            PLATFORM CAPABILITIES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Enterprise-Grade Infrastructure<br className="hidden sm:inline" />
            for AI Agent Deployment
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Every feature you need to run AI agents in production. Built-in security, scalability, and observability from day one.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="flex flex-wrap justify-center bg-white rounded-lg p-1 shadow-sm border border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`
                  flex flex-col sm:flex-row items-center justify-center text-center sm:text-left
                  px-3 py-2 sm:px-4 md:px-6 sm:py-2 rounded-md text-xs sm:text-sm font-medium 
                  transition-all duration-200 m-0.5 min-w-[80px] sm:min-w-0
                  ${activeTab === tab.value 
                    ? 'bg-gray-900 text-white shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }
                `}
              >
                <tab.icon className={`w-4 h-4 mb-1 sm:mb-0 sm:mr-2 ${activeTab === tab.value ? 'text-orange-400' : 'text-gray-400'}`} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-4 sm:p-6 md:p-8">
            {activeTab === 'rate' && <RateLimitingPreview />}
            {activeTab === 'filter' && <ToolFilteringPreview />}
            {activeTab === 'auth' && <AuthenticationPreview />}
            {activeTab === 'trace' && <TraceabilityPreview />}
            {activeTab === 'usage' && <UsageTrackingPreview />}
            {activeTab === 'deploy' && <DeploymentPreview />}
          </div>
        </div>
      </div>
    </section>
  );
}; 