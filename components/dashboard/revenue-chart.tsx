"use client"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", income: 4200, expenses: 2400 },
  { month: "Feb", income: 5800, expenses: 2800 },
  { month: "Mar", income: 4800, expenses: 3200 },
  { month: "Apr", income: 7200, expenses: 2900 },
  { month: "May", income: 6400, expenses: 3400 },
  { month: "Jun", income: 8200, expenses: 3100 },
  { month: "Jul", income: 7600, expenses: 3600 },
  { month: "Aug", income: 9400, expenses: 3200 },
  { month: "Sep", income: 8800, expenses: 3800 },
  { month: "Oct", income: 10200, expenses: 4100 },
  { month: "Nov", income: 11400, expenses: 3900 },
  { month: "Dec", income: 12450, expenses: 4200 },
]

const chartConfig = {
  income: {
    label: "Income",
    color: "var(--chart-1)",
  },
  expenses: {
    label: "Expenses",
    color: "var(--chart-2)",
  },
}

export function RevenueChart() {
  return (
    <div className="glass rounded-2xl p-6 animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: "200ms" }}>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Revenue Overview</h3>
          <p className="text-sm text-muted-foreground">Income vs Expenses this year</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-chart-1" />
            <span className="text-sm text-muted-foreground">Income</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-chart-2" />
            <span className="text-sm text-muted-foreground">Expenses</span>
          </div>
        </div>
      </div>
      <ChartContainer config={chartConfig} className="h-[300px] w-full">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.3} />
              <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="expensesGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--chart-2)" stopOpacity={0.3} />
              <stop offset="100%" stopColor="var(--chart-2)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
            tickFormatter={(value) => `$${value / 1000}k`}
            dx={-10}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Area
            type="monotone"
            dataKey="income"
            stroke="var(--chart-1)"
            strokeWidth={2}
            fill="url(#incomeGradient)"
          />
          <Area
            type="monotone"
            dataKey="expenses"
            stroke="var(--chart-2)"
            strokeWidth={2}
            fill="url(#expensesGradient)"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  )
}
