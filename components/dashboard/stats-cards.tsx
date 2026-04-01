"use client"

import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown, Wallet, ArrowUpRight, ArrowDownLeft, CreditCard } from "lucide-react"

const stats = [
  {
    name: "Total Balance",
    value: "$84,254.32",
    change: "+12.5%",
    trend: "up",
    icon: Wallet,
    color: "primary",
  },
  {
    name: "Monthly Income",
    value: "$12,450.00",
    change: "+8.2%",
    trend: "up",
    icon: ArrowDownLeft,
    color: "chart-1",
  },
  {
    name: "Monthly Expenses",
    value: "$6,280.45",
    change: "-3.1%",
    trend: "down",
    icon: ArrowUpRight,
    color: "chart-2",
  },
  {
    name: "Active Cards",
    value: "4",
    change: "+1",
    trend: "up",
    icon: CreditCard,
    color: "chart-3",
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <div
          key={stat.name}
          className={cn(
            "glass group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg",
            "animate-in fade-in slide-in-from-bottom-4"
          )}
          style={{
            animationDelay: `${index * 100}ms`,
            animationFillMode: "backwards",
          }}
        >
          {/* Background gradient accent */}
          <div
            className={cn(
              "absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-30",
              stat.color === "primary" && "bg-primary",
              stat.color === "chart-1" && "bg-chart-1",
              stat.color === "chart-2" && "bg-chart-2",
              stat.color === "chart-3" && "bg-chart-3"
            )}
          />
          
          <div className="relative flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                {stat.value}
              </p>
              <div className="mt-2 flex items-center gap-1">
                {stat.trend === "up" ? (
                  <TrendingUp className="h-4 w-4 text-chart-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-destructive" />
                )}
                <span
                  className={cn(
                    "text-sm font-medium",
                    stat.trend === "up" ? "text-chart-1" : "text-destructive"
                  )}
                >
                  {stat.change}
                </span>
                <span className="text-xs text-muted-foreground">vs last month</span>
              </div>
            </div>
            <div
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110",
                stat.color === "primary" && "bg-primary/10",
                stat.color === "chart-1" && "bg-chart-1/10",
                stat.color === "chart-2" && "bg-chart-2/10",
                stat.color === "chart-3" && "bg-chart-3/10"
              )}
            >
              <stat.icon
                className={cn(
                  "h-5 w-5",
                  stat.color === "primary" && "text-primary",
                  stat.color === "chart-1" && "text-chart-1",
                  stat.color === "chart-2" && "text-chart-2",
                  stat.color === "chart-3" && "text-chart-3"
                )}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
