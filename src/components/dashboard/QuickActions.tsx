"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus, Activity, Download, Zap, Webhook } from "lucide-react";

export function QuickActions() {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 pb-0">
      <div className="flex flex-wrap items-center gap-2">
        <Button
          size="sm"
          className="bg-brand hover:bg-brand/90 text-white"
          onClick={() => console.log('Create Agent')}
        >
          <Plus className="h-4 w-4 sm:mr-2" />
          <span className="hidden sm:inline">Create Agent</span>
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="border border-zinc-200 text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 bg-white"
          onClick={() => console.log('Add Integration')}
        >
          <Zap className="h-4 w-4 sm:mr-2" />
          <span className="hidden sm:inline">Add Integration</span>
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="border border-zinc-200 text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 bg-white"
          onClick={() => console.log('Create Webhook')}
        >
          <Webhook className="h-4 w-4 sm:mr-2" />
          <span className="hidden sm:inline">Create Webhook</span>
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="border border-zinc-200 text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 bg-white"
          onClick={() => console.log('Create Server')}
        >
          <Image
            src="/images/mcp.svg"
            alt="MCP"
            width={16}
            height={16}
            className="h-4 w-4 sm:mr-2"
          />
          <span className="hidden sm:inline">Create Server</span>
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Button
          size="sm"
          variant="ghost"
          className="text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
          onClick={() => console.log('View All Activity')}
        >
          <Activity className="h-4 w-4 sm:mr-2" />
          <span className="hidden sm:inline">View All Activity</span>
        </Button>
        <Button
          size="sm"
          variant="ghost"
          className="text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
          onClick={() => console.log('Export Report')}
        >
          <Download className="h-4 w-4 sm:mr-2" />
          <span className="hidden sm:inline">Export Report</span>
        </Button>
      </div>
    </div>
  );
}

