"use client"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Pie, PieChart, Cell } from "recharts"

const data = [
  { name: "Housing", value: 2400, fill: "var(--chart-1)" },
  { name: "Food", value: 1200, fill: "var(--chart-2)" },
  { name: "Transport", value: 800, fill: "var(--chart-3)" },
  { name: "Shopping", value: 1100, fill: "var(--chart-4)" },
  { name: "Other", value: 780, fill: "var(--chart-5)" },
]

const chartConfig = {
  Housing: { label: "Housing", color: "var(--chart-1)" },
  Food: { label: "Food", color: "var(--chart-2)" },
  Transport: { label: "Transport", color: "var(--chart-3)" },
  Shopping: { label: "Shopping", color: "var(--chart-4)" },
  Other: { label: "Other", color: "var(--chart-5)" },
}

const COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
]

export function SpendingChart() {
  const total = data.reduce((sum, item) => sum + item.value, 0)

  return (
    <div className="glass rounded-2xl p-6 animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: "300ms" }}>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Spending by Category</h3>
        <p className="text-sm text-muted-foreground">This month&apos;s breakdown</p>
      </div>
      
      <div className="flex items-center gap-6">
        <ChartContainer config={chartConfig} className="h-[200px] w-[200px]">
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={85}
              paddingAngle={4}
              dataKey="value"
              strokeWidth={0}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
        
        <div className="flex-1 space-y-3">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: COLORS[index] }}
                />
                <span className="text-sm text-muted-foreground">{item.name}</span>
              </div>
              <div className="text-right">
                <span className="text-sm font-medium text-foreground">
                  ${item.value.toLocaleString()}
                </span>
                <span className="ml-2 text-xs text-muted-foreground">
                  {Math.round((item.value / total) * 100)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
