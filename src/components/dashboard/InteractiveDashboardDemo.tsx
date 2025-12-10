"use client";

import React, { useState } from 'react';
import { StatsCard } from './StatsCard';
import { ExecutionTrend } from './ExecutionTrend';
import { RecentActivity } from './RecentActivity';
import { QuickActions } from './QuickActions';
import { Clock } from 'lucide-react';

// Seeded random function for consistent results
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Mock data matching nexus-mockup structure
const generateMockData = (days: number) => {
  const data = [];
  const today = new Date();
  
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const month = date.toLocaleString('en-US', { month: 'short' });
    const day = date.getDate();
    const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + day;
    
    // Base values with day-of-week variation (weekends are lower)
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const baseExec = isWeekend ? 500 : 850;
    const baseCost = isWeekend ? 28 : 45;
    
    // Add consistent "randomness" using seeded function
    const randomFactor = 0.8 + seededRandom(seed) * 0.4;
    
    data.push({
      date: `${month} ${day}`,
      cost: Math.round(baseCost * randomFactor * 10) / 10,
      executions: Math.round(baseExec * randomFactor),
    });
  }
  
  return data;
};

const mockExecutions = [
  { name: "Weekly Report Generator", time: "5h ago", duration: "7.3s", cost: "$0.052", steps: "5/5 steps" },
  { name: "Invoice Processing Agent", time: "9h ago", duration: "3.9s", cost: "$0.035", steps: "4/4 steps" },
  { name: "Lead Enrichment Agent", time: "12h ago", duration: "2.0s", cost: "$0.045", steps: "5/5 steps" },
  { name: "Weekly Report Generator", time: "13h ago", duration: "8.1s", cost: "$0.052", steps: "5/5 steps" },
  { name: "Customer Support Ticket Router", time: "19h ago", duration: "1.2s", cost: "$0.025", steps: "6/6 steps" },
];

export const InteractiveDashboardDemo = () => {
  const [dateRange, setDateRange] = useState<"7d" | "14d" | "30d">("7d");
  
  const costData = generateMockData(dateRange === "7d" ? 7 : dateRange === "14d" ? 14 : 30);
  const totalCost = costData.reduce((sum, d) => sum + d.cost, 0);
  const totalExecutions = costData.reduce((sum, d) => sum + d.executions, 0);
  
  // Create sparkline data for executions
  const executionSparkline = costData.map((d) => ({ value: d.executions }));
  const costSparkline = costData.map((d) => ({ value: d.cost }));
  
  return (
    <div className="w-full max-w-6xl mx-auto relative">
      {/* Dashboard Content */}
      <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden relative">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center gap-4 border-b border-zinc-200 bg-white px-4 min-w-0">
          <div className="flex items-center gap-3 mr-auto">
            <span className="text-sm text-zinc-500">Monitor your AI agent infrastructure at a glance</span>
          </div>
          
          {/* Action Badge */}
          <div className="flex items-center gap-1 shrink-0">
            <span className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-full border border-amber-200 font-medium flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              1 Pending
            </span>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto overflow-x-hidden p-4">
          <div className="space-y-4 min-w-0">
            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <StatsCard
                title="Total Agents"
                value={5}
                change="4 active"
                changeType="neutral"
              />
              <StatsCard
                title="Executions"
                value={totalExecutions.toLocaleString()}
                change="+8.3%"
                changeType="positive"
                sparkline={{ data: executionSparkline }}
              />
              <StatsCard
                title="Success Rate"
                value="98.2%"
                change="+2.3%"
                changeType="positive"
                usage={{ current: 98.2, max: 100 }}
              />
              <StatsCard
                title="Total Cost"
                value={`$${totalCost.toFixed(2)}`}
                change={`~$${Math.round((totalCost / (dateRange === "7d" ? 7 : dateRange === "14d" ? 14 : 30)) * 30)}/mo projected`}
                changeType="neutral"
                sparkline={{ data: costSparkline, color: "#22c55e" }}
              />
            </div>

            {/* Execution Trend + Recent Activity Side by Side */}
            <div className="grid gap-4 lg:grid-cols-[1fr_0.43fr]">
              {/* Execution Trend Chart - 70% */}
              <ExecutionTrend
                data={costData}
                dateRange={dateRange}
                onDateRangeChange={setDateRange}
              />

              {/* Recent Activity - 30% */}
              <RecentActivity executions={mockExecutions} />
            </div>

            {/* Quick Actions Footer */}
            <QuickActions />
          </div>
        </main>
      </div>
    </div>
  );
};
