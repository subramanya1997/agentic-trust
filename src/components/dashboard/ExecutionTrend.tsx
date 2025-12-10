"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Bar,
  ComposedChart,
} from "recharts";

const AMBER_COLOR = "#f59e0b";
const GREEN_COLOR = "#22c55e";

interface ExecutionTrendProps {
  data: { date: string; cost: number; executions: number }[];
  dateRange: "7d" | "14d" | "30d";
  onDateRangeChange: (range: "7d" | "14d" | "30d") => void;
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function ExecutionTrend({
  data,
  dateRange,
  onDateRangeChange,
}: ExecutionTrendProps) {
  const totalExecutions = data.reduce((sum, d) => sum + d.executions, 0);
  const totalCost = data.reduce((sum, d) => sum + d.cost, 0);
  const avgExecutions = Math.round(totalExecutions / data.length);

  const dateRanges: { value: "7d" | "14d" | "30d"; label: string }[] = [
    { value: "7d", label: "7D" },
    { value: "14d", label: "14D" },
    { value: "30d", label: "30D" },
  ];

  return (
    <Card className="gap-0 py-0">
      <CardHeader className="pb-2 pt-4">
        <div className="flex items-center justify-between">
          <div className="text-left">
            <CardTitle className="text-base">Execution Trend</CardTitle>
            <p className="text-xs text-zinc-500 mt-0.5">
              {totalExecutions.toLocaleString()} executions · {formatCurrency(totalCost)} total cost
            </p>
          </div>
          <div className="flex items-center gap-1 p-1 rounded-lg bg-zinc-50 border border-zinc-200">
            {dateRanges.map((range) => (
              <button
                key={range.value}
                onClick={() => onDateRangeChange(range.value)}
                className={cn(
                  "px-3 py-1.5 rounded-md text-xs font-medium transition-colors",
                  dateRange === range.value
                    ? "bg-brand text-white"
                    : "text-zinc-600 hover:text-zinc-900"
                )}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-2 pb-4">
        <ResponsiveContainer width="100%" height={200}>
          <ComposedChart data={data} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorExecutionsArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={AMBER_COLOR} stopOpacity={0.4} />
                <stop offset="95%" stopColor={AMBER_COLOR} stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-zinc-200" vertical={false} />
            <XAxis
              dataKey="date"
              className="text-zinc-500"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              padding={{ left: 0, right: 0 }}
              stroke="#71717a"
            />
            <YAxis
              yAxisId="left"
              className="text-zinc-500"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              domain={[0, 'auto']}
              stroke="#71717a"
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              className="text-zinc-500"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
              stroke="#71717a"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e4e4e7",
                borderRadius: "8px",
                color: "#18181b",
                fontSize: "12px",
              }}
              formatter={(value: number, name: string) => [
                name === "executions" ? value.toLocaleString() : formatCurrency(value),
                name === "executions" ? "Executions" : "Cost",
              ]}
            />
            <Bar
              yAxisId="right"
              dataKey="cost"
              fill={GREEN_COLOR}
              opacity={0.6}
              radius={[4, 4, 0, 0]}
            />
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="executions"
              stroke={AMBER_COLOR}
              strokeWidth={2}
              fill="url(#colorExecutionsArea)"
            />
          </ComposedChart>
        </ResponsiveContainer>
        
        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: AMBER_COLOR }} />
            <span className="text-xs text-zinc-500">Executions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: GREEN_COLOR, opacity: 0.6 }} />
            <span className="text-xs text-zinc-500">Cost</span>
          </div>
          <div className="text-xs text-zinc-400">
            Avg: {avgExecutions}/day
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

