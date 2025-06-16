import { Database, Server, Lock, Globe, ShoppingCart, ChartBar } from 'lucide-react';
import { BridgeDemoConfig } from './BridgeDemo';

// Example 1: E-commerce platform with multiple agent types
export const ecommerceConfig: BridgeDemoConfig = {
  agents: [
    { name: 'Order Agent', status: 'active', flowType: 'positive', connectsTo: [0, 1], note: 'Authorized to process orders and payments' },
    { name: 'Customer Service', status: 'active', flowType: 'negative', connectsTo: [0, 2], note: 'Blocked: Payment gateway access restricted to Order Agent only' },
    { name: 'Marketing Agent', status: 'active', flowType: 'positive', connectsTo: [2], note: 'Granted read-only access to analytics' }
  ],
  mcpInstances: [
    { name: 'Inventory System', icon: ShoppingCart, desc: 'Stock, Products', color: 'blue' },
    { name: 'Payment Gateway', icon: Server, desc: 'Stripe, PayPal', color: 'orange' },
    { name: 'Analytics', icon: ChartBar, desc: 'Reports, Metrics', color: 'purple' }
  ]
};

// Example 2: DevOps platform with different access levels
export const devOpsConfig: BridgeDemoConfig = {
  agents: [
    { name: 'Developer', status: 'active', flowType: 'positive', connectsTo: [0, 1], note: 'Standard dev access to code and CI/CD' },
    { name: 'DevOps Engineer', status: 'active', flowType: 'negative', connectsTo: [0, 1, 2], note: 'Blocked: Production deployment requires approval workflow' },
    { name: 'Contractor', status: 'idle', flowType: 'negative', connectsTo: [1], note: 'Denied: External contractors restricted from CI/CD pipeline' }
  ],
  mcpInstances: [
    { name: 'Git Repository', icon: Database, desc: 'GitHub, GitLab', color: 'blue' },
    { name: 'CI/CD Pipeline', icon: Server, desc: 'Jenkins, Actions', color: 'orange' },
    { name: 'Production', icon: Globe, desc: 'AWS, Azure', color: 'purple' }
  ]
};

// Example 3: Simple configuration with just two agents and two instances
export const simpleConfig: BridgeDemoConfig = {
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

import { BridgeDemo } from './BridgeDemo';
import { ecommerceConfig, devOpsConfig, simpleConfig } from './example-config';

// Use default configuration
<BridgeDemo />

// Use custom configuration
<BridgeDemo config={ecommerceConfig} />
<BridgeDemo config={devOpsConfig} />
<BridgeDemo config={simpleConfig} />
*/