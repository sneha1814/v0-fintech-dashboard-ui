"use client"

import { useState } from "react"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { RevenueChart } from "@/components/dashboard/revenue-chart"
import { SpendingChart } from "@/components/dashboard/spending-chart"
import { TransactionsTable } from "@/components/dashboard/transactions-table"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="gradient-bg min-h-screen">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className="fixed left-0 top-0 h-full w-64 animate-in slide-in-from-left duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar />
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div
        className={cn(
          "min-h-screen transition-all duration-300",
          "lg:pl-64"
        )}
      >
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <main className="p-4 sm:p-6 lg:p-8 space-y-6">
          {/* Stats Cards */}
          <StatsCards />

          {/* Charts Section */}
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <RevenueChart />
            </div>
            <div className="lg:col-span-2">
              <SpendingChart />
            </div>
          </div>

          {/* Transactions Table */}
          <TransactionsTable />
        </main>
      </div>
    </div>
  )
}
