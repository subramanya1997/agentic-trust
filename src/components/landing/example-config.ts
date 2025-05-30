import { Database, Server, Lock, Bot, Globe, ShoppingCart, Headphones, ChartBar } from 'lucide-react';
import { UnifiedContextRouterConfig } from './UnifiedContextRouterPreview';

// Example 1: E-commerce platform with multiple agent types
export const ecommerceConfig: UnifiedContextRouterConfig = {
  agents: [
    { name: 'Order Agent', status: 'active', flowType: 'positive', connectsTo: [0, 1] }, // Access to inventory and payment
    { name: 'Customer Service', status: 'active', flowType: 'positive', connectsTo: [0, 2, 3] }, // Access to inventory, orders, and knowledge
    { name: 'Marketing Agent', status: 'active', flowType: 'positive', connectsTo: [2, 4] }, // Access to orders and analytics
    { name: 'Guest Agent', status: 'idle', flowType: 'negative', connectsTo: [3] } // Blocked from accessing systems
  ],
  mcpInstances: [
    { name: 'Inventory System', icon: ShoppingCart, desc: 'Stock, Products', color: 'blue' },
    { name: 'Payment Gateway', icon: Server, desc: 'Stripe, PayPal', color: 'green' },
    { name: 'Order Database', icon: Database, desc: 'Orders, History', color: 'purple' },
    { name: 'Help Center', icon: Headphones, desc: 'FAQs, Guides', color: 'orange' },
    { name: 'Analytics', icon: ChartBar, desc: 'Reports, Metrics', color: 'red' }
  ]
};

// Example 2: DevOps platform with different access levels
export const devOpsConfig: UnifiedContextRouterConfig = {
  agents: [
    { name: 'Developer', status: 'active', flowType: 'positive', connectsTo: [0, 1] }, // Code and CI/CD
    { name: 'DevOps Engineer', status: 'active', flowType: 'positive', connectsTo: [0, 1, 2, 3] }, // Full access
    { name: 'QA Tester', status: 'active', flowType: 'positive', connectsTo: [0, 4] }, // Code and testing
    { name: 'Manager', status: 'active', flowType: 'positive', connectsTo: [3, 4] }, // Monitoring and testing
    { name: 'Contractor', status: 'idle', flowType: 'negative', connectsTo: [2] } // No production access
  ],
  mcpInstances: [
    { name: 'Git Repository', icon: Database, desc: 'GitHub, GitLab', color: 'purple' },
    { name: 'CI/CD Pipeline', icon: Server, desc: 'Jenkins, Actions', color: 'blue' },
    { name: 'Production', icon: Globe, desc: 'AWS, Azure', color: 'red' },
    { name: 'Monitoring', icon: ChartBar, desc: 'Grafana, Datadog', color: 'green' },
    { name: 'Testing Suite', icon: Bot, desc: 'Jest, Selenium', color: 'orange' }
  ]
};

// Example 3: Simple configuration with just two agents and two instances
export const simpleConfig: UnifiedContextRouterConfig = {
  agents: [
    { name: 'User Agent', status: 'active', flowType: 'positive', connectsTo: [0] },
    { name: 'Admin Agent', status: 'active', flowType: 'positive', connectsTo: [0, 1] }
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