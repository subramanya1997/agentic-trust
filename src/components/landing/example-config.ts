import { Database, Server, Lock, Bot, Globe, ShoppingCart, Headphones, ChartBar } from 'lucide-react';
import { UnifiedContextRouterConfig } from './UnifiedContextRouterPreview';

// Example 1: E-commerce platform with multiple agent types
export const ecommerceConfig: UnifiedContextRouterConfig = {
  agents: [
    { name: 'Order Agent', status: 'active', flowType: 'positive', connectsTo: [0, 1], note: 'Authorized to process orders and payments' },
    { name: 'Customer Service', status: 'active', flowType: 'negative', connectsTo: [0, 2], note: 'Blocked: Payment gateway access restricted to Order Agent only' },
    { name: 'Marketing Agent', status: 'active', flowType: 'positive', connectsTo: [2, 3], note: 'Granted read-only access to orders and analytics' },
    { name: 'Guest Agent', status: 'idle', flowType: 'negative', connectsTo: [1], note: 'Denied: Unauthenticated agents cannot access payment systems' }
  ],
  mcpInstances: [
    { name: 'Inventory System', icon: ShoppingCart, desc: 'Stock, Products', color: 'blue' },
    { name: 'Payment Gateway', icon: Server, desc: 'Stripe, PayPal', color: 'green' },
    { name: 'Order Database', icon: Database, desc: 'Orders, History', color: 'purple' },
    { name: 'Analytics', icon: ChartBar, desc: 'Reports, Metrics', color: 'orange' }
  ]
};

// Example 2: DevOps platform with different access levels
export const devOpsConfig: UnifiedContextRouterConfig = {
  agents: [
    { name: 'Developer', status: 'active', flowType: 'positive', connectsTo: [0, 1], note: 'Standard dev access to code and CI/CD' },
    { name: 'DevOps Engineer', status: 'active', flowType: 'negative', connectsTo: [0, 1, 2], note: 'Blocked: Production deployment requires approval workflow' },
    { name: 'QA Tester', status: 'active', flowType: 'positive', connectsTo: [0, 3], note: 'Test environment access granted' },
    { name: 'Manager', status: 'active', flowType: 'positive', connectsTo: [2, 3], note: 'Read-only access for monitoring and reports' },
    { name: 'Contractor', status: 'idle', flowType: 'negative', connectsTo: [1], note: 'Denied: External contractors restricted from CI/CD pipeline' }
  ],
  mcpInstances: [
    { name: 'Git Repository', icon: Database, desc: 'GitHub, GitLab', color: 'purple' },
    { name: 'CI/CD Pipeline', icon: Server, desc: 'Jenkins, Actions', color: 'blue' },
    { name: 'Production', icon: Globe, desc: 'AWS, Azure', color: 'red' },
    { name: 'Testing Suite', icon: Bot, desc: 'Jest, Selenium', color: 'green' }
  ]
};

// Example 3: Simple configuration with just two agents and two instances
export const simpleConfig: UnifiedContextRouterConfig = {
  agents: [
    { name: 'User Agent', status: 'active', flowType: 'negative', connectsTo: [0], note: 'Rate limited: Too many requests in current time window' },
    { name: 'Admin Agent', status: 'active', flowType: 'positive', connectsTo: [0, 1], note: 'Full administrative privileges granted' }
  ],
  mcpInstances: [
    { name: 'API Server', icon: Server, desc: 'REST API', color: 'blue' },
    { name: 'Admin Panel', icon: Lock, desc: 'Settings, Users', color: 'purple' }
  ]
};

/*
Usage in your component:

import { UnifiedContextRouterPreview } from './UnifiedContextRouterPreview';
import { ecommerceConfig, devOpsConfig, simpleConfig } from './example-config';

// Use default configuration
<UnifiedContextRouterPreview />

// Use custom configuration
<UnifiedContextRouterPreview config={ecommerceConfig} />
<UnifiedContextRouterPreview config={devOpsConfig} />
<UnifiedContextRouterPreview config={simpleConfig} />
*/