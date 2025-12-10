"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Clock } from "lucide-react";

interface Execution {
  name: string;
  time: string;
  duration: string;
  cost: string;
  steps: string;
}

interface RecentActivityProps {
  executions: Execution[];
}

export function RecentActivity({ executions }: RecentActivityProps) {
  const displayedExecutions = executions.slice(0, 5);
  
  return (
    <Card className="h-full gap-0 py-0">
      <CardHeader className="pb-3 pt-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base text-left">Recent Activity</CardTitle>
          <button className="text-xs font-medium text-brand hover:text-brand/80">
            View All
          </button>
        </div>
      </CardHeader>
      <CardContent className="pt-0 pb-4">
        <div className="space-y-2">
          {displayedExecutions.map((execution, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-zinc-50 transition-colors cursor-pointer"
            >
              {/* Status Icon */}
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/10">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              </div>

              {/* Execution Info */}
              <div className="flex-1 min-w-0 text-left">
                <p className="text-sm font-medium text-zinc-900 truncate">
                  {execution.name}
                </p>
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {execution.time}
                  </span>
                  <span>·</span>
                  <span>{execution.duration}</span>
                </div>
              </div>

              {/* Cost */}
              <div className="text-right shrink-0">
                <p className="text-sm font-medium text-zinc-900">
                  {execution.cost}
                </p>
                <p className="text-xs text-zinc-500">
                  {execution.steps}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

