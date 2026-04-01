"use client"

import { Bell, Search, Menu } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState } from "react"

interface HeaderProps {
  onMenuClick?: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  const [hasNotifications] = useState(true)

  return (
    <header className="glass-subtle sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b border-border/50 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div>
          <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground hidden sm:block">
            Welcome back, Alex
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="w-64 pl-9 bg-secondary/50 border-border/50 focus:bg-secondary"
          />
        </div>

        {/* Notifications */}
        <button className="relative flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
          <Bell className="h-5 w-5" />
          {hasNotifications && (
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary animate-pulse" />
          )}
        </button>

        {/* User Avatar */}
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/60 to-chart-2/60 ring-2 ring-border/50 transition-all hover:ring-primary/50">
          <span className="sr-only">User menu</span>
        </button>
      </div>
    </header>
  )
}
