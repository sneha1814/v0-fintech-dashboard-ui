"use client"

import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Wallet,
  ArrowUpDown,
  PieChart,
  CreditCard,
  Settings,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useState } from "react"

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard, href: "#", current: true },
  { name: "Wallet", icon: Wallet, href: "#", current: false },
  { name: "Transactions", icon: ArrowUpDown, href: "#", current: false },
  { name: "Analytics", icon: PieChart, href: "#", current: false },
  { name: "Cards", icon: CreditCard, href: "#", current: false },
]

const bottomNav = [
  { name: "Settings", icon: Settings, href: "#" },
  { name: "Help", icon: HelpCircle, href: "#" },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={cn(
        "glass fixed left-0 top-0 z-40 flex h-screen flex-col transition-all duration-300 ease-out",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between px-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
            <span className="text-xl font-bold text-primary">F</span>
          </div>
          {!collapsed && (
            <span className="text-lg font-semibold text-foreground animate-in fade-in slide-in-from-left-2 duration-300">
              Flux
            </span>
          )}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={cn(
              "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
              item.current
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            )}
          >
            <item.icon
              className={cn(
                "h-5 w-5 shrink-0 transition-transform duration-200 group-hover:scale-110",
                item.current ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
              )}
            />
            {!collapsed && (
              <span className="animate-in fade-in slide-in-from-left-2 duration-300">
                {item.name}
              </span>
            )}
            {item.current && !collapsed && (
              <div className="ml-auto h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            )}
          </a>
        ))}
      </nav>

      {/* Bottom Navigation */}
      <div className="border-t border-border/50 px-3 py-4 space-y-1">
        {bottomNav.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-secondary hover:text-foreground"
          >
            <item.icon className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:scale-110" />
            {!collapsed && (
              <span className="animate-in fade-in slide-in-from-left-2 duration-300">
                {item.name}
              </span>
            )}
          </a>
        ))}
        <button className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-destructive/10 hover:text-destructive">
          <LogOut className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:scale-110" />
          {!collapsed && (
            <span className="animate-in fade-in slide-in-from-left-2 duration-300">
              Logout
            </span>
          )}
        </button>
      </div>

      {/* User Profile */}
      {!collapsed && (
        <div className="border-t border-border/50 p-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/60 to-chart-2/60" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">Alex Chen</p>
              <p className="text-xs text-muted-foreground truncate">alex@flux.io</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  )
}
