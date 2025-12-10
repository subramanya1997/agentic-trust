// Simplified webhooks data for demo
export type WebhookStatus = "active" | "inactive";

export interface Webhook {
  id: string;
  name: string;
  description: string;
  url: string;
  targetAgentName: string;
  status: WebhookStatus;
  totalDeliveries: number;
  successRate: number;
  lastTriggered?: string;
}

export const demoWebhooks: Webhook[] = [
  {
    id: "wh-1",
    name: "Salesforce Lead Created",
    description: "Triggered when a new lead is created in Salesforce",
    url: "https://api.agentictrust.com/webhooks/wh-1",
    targetAgentName: "Lead Enrichment Agent",
    status: "active",
    totalDeliveries: 1234,
    successRate: 99.2,
    lastTriggered: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
  },
  {
    id: "wh-2",
    name: "GitHub PR Opened",
    description: "Triggered when a pull request is opened or updated",
    url: "https://api.agentictrust.com/webhooks/wh-2",
    targetAgentName: "Code Review Assistant",
    status: "active",
    totalDeliveries: 892,
    successRate: 98.5,
    lastTriggered: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
  },
  {
    id: "wh-3",
    name: "Zendesk Ticket Created",
    description: "Routes new support tickets to the appropriate agent",
    url: "https://api.agentictrust.com/webhooks/wh-3",
    targetAgentName: "Support Ticket Router",
    status: "active",
    totalDeliveries: 3456,
    successRate: 99.8,
    lastTriggered: new Date(Date.now() - 2 * 60 * 1000).toISOString(),
  },
  {
    id: "wh-4",
    name: "Stripe Payment Received",
    description: "Processes incoming payment notifications",
    url: "https://api.agentictrust.com/webhooks/wh-4",
    targetAgentName: "Invoice Processing Agent",
    status: "inactive",
    totalDeliveries: 234,
    successRate: 94.5,
    lastTriggered: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "wh-5",
    name: "Zoom Recording Ready",
    description: "Triggered when a meeting recording is available",
    url: "https://api.agentictrust.com/webhooks/wh-5",
    targetAgentName: "Meeting Notes Summarizer",
    status: "active",
    totalDeliveries: 567,
    successRate: 97.2,
    lastTriggered: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
  },
];

export function formatRelativeTime(timestamp: string): string {
  const now = Date.now();
  const time = new Date(timestamp).getTime();
  const diff = now - time;

  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  return `${days}d ago`;
}

