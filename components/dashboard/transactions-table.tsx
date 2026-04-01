"use client"

import { useState, useMemo } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Search, ArrowUpRight, ArrowDownLeft, MoreHorizontal } from "lucide-react"

const transactions = [
  {
    id: "TXN001",
    description: "Salary Deposit",
    category: "Income",
    amount: 8500.00,
    type: "credit",
    status: "completed",
    date: "2026-04-01",
    merchant: "TechCorp Inc.",
  },
  {
    id: "TXN002",
    description: "Rent Payment",
    category: "Housing",
    amount: 2400.00,
    type: "debit",
    status: "completed",
    date: "2026-04-01",
    merchant: "Apartment Co.",
  },
  {
    id: "TXN003",
    description: "Grocery Shopping",
    category: "Food",
    amount: 156.32,
    type: "debit",
    status: "completed",
    date: "2026-03-31",
    merchant: "Whole Foods",
  },
  {
    id: "TXN004",
    description: "Investment Return",
    category: "Income",
    amount: 1250.00,
    type: "credit",
    status: "completed",
    date: "2026-03-30",
    merchant: "Fidelity",
  },
  {
    id: "TXN005",
    description: "Electric Bill",
    category: "Utilities",
    amount: 142.50,
    type: "debit",
    status: "pending",
    date: "2026-03-29",
    merchant: "Power Grid",
  },
  {
    id: "TXN006",
    description: "Netflix Subscription",
    category: "Entertainment",
    amount: 15.99,
    type: "debit",
    status: "completed",
    date: "2026-03-28",
    merchant: "Netflix",
  },
  {
    id: "TXN007",
    description: "Freelance Payment",
    category: "Income",
    amount: 2200.00,
    type: "credit",
    status: "completed",
    date: "2026-03-27",
    merchant: "ClientX",
  },
  {
    id: "TXN008",
    description: "Gas Station",
    category: "Transport",
    amount: 65.40,
    type: "debit",
    status: "completed",
    date: "2026-03-26",
    merchant: "Shell",
  },
]

export function TransactionsTable() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTransactions = useMemo(() => {
    if (!searchQuery) return transactions
    const query = searchQuery.toLowerCase()
    return transactions.filter(
      (txn) =>
        txn.description.toLowerCase().includes(query) ||
        txn.category.toLowerCase().includes(query) ||
        txn.merchant.toLowerCase().includes(query) ||
        txn.id.toLowerCase().includes(query)
    )
  }, [searchQuery])

  return (
    <div className="glass rounded-2xl p-6 animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: "400ms" }}>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Recent Transactions</h3>
          <p className="text-sm text-muted-foreground">Your latest financial activities</p>
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search transactions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-secondary/50 border-border/50 focus:bg-secondary"
          />
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-border/50">
        <Table>
          <TableHeader>
            <TableRow className="border-border/50 hover:bg-transparent">
              <TableHead className="text-muted-foreground font-medium">Transaction</TableHead>
              <TableHead className="text-muted-foreground font-medium hidden sm:table-cell">Category</TableHead>
              <TableHead className="text-muted-foreground font-medium hidden md:table-cell">Date</TableHead>
              <TableHead className="text-muted-foreground font-medium text-right">Amount</TableHead>
              <TableHead className="text-muted-foreground font-medium hidden lg:table-cell">Status</TableHead>
              <TableHead className="w-10" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTransactions.map((txn, index) => (
              <TableRow
                key={txn.id}
                className={cn(
                  "border-border/50 transition-colors hover:bg-secondary/30",
                  "animate-in fade-in slide-in-from-left-2"
                )}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: "backwards",
                }}
              >
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-lg",
                        txn.type === "credit" ? "bg-chart-1/10" : "bg-chart-2/10"
                      )}
                    >
                      {txn.type === "credit" ? (
                        <ArrowDownLeft className="h-4 w-4 text-chart-1" />
                      ) : (
                        <ArrowUpRight className="h-4 w-4 text-chart-2" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{txn.description}</p>
                      <p className="text-xs text-muted-foreground">{txn.merchant}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <span className="text-sm text-muted-foreground">{txn.category}</span>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <span className="text-sm text-muted-foreground">
                    {new Date(txn.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <span
                    className={cn(
                      "font-medium tabular-nums",
                      txn.type === "credit" ? "text-chart-1" : "text-foreground"
                    )}
                  >
                    {txn.type === "credit" ? "+" : "-"}$
                    {txn.amount.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  <Badge
                    variant="secondary"
                    className={cn(
                      "rounded-full text-xs font-medium",
                      txn.status === "completed"
                        ? "bg-chart-1/10 text-chart-1 hover:bg-chart-1/20"
                        : "bg-chart-4/10 text-chart-4 hover:bg-chart-4/20"
                    )}
                  >
                    {txn.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <button className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filteredTransactions.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">No transactions found</p>
        </div>
      )}
    </div>
  )
}
