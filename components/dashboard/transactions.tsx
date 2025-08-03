"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Download, MoreHorizontal, ChevronLeft, ChevronRight, Eye } from "lucide-react"
import { ExportTransactionsModal } from "./modals"

export function Transactions() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)

  const transactions = [
    {
      id: "TXN-001",
      customer: "Acme Corp",
      email: "billing@acme.com",
      amount: "$2,499.00",
      status: "completed",
      date: "2024-01-15 14:32",
      method: "Credit Card",
      fee: "$72.47",
    },
    {
      id: "TXN-002",
      customer: "TechStart Inc",
      email: "finance@techstart.com",
      amount: "$899.00",
      status: "pending",
      date: "2024-01-15 12:18",
      method: "Bank Transfer",
      fee: "$26.97",
    },
    {
      id: "TXN-003",
      customer: "Global Solutions",
      email: "payments@global.com",
      amount: "$5,299.00",
      status: "completed",
      date: "2024-01-14 16:45",
      method: "Credit Card",
      fee: "$153.67",
    },
    {
      id: "TXN-004",
      customer: "StartupXYZ",
      email: "admin@startupxyz.com",
      amount: "$1,299.00",
      status: "failed",
      date: "2024-01-14 09:22",
      method: "Credit Card",
      fee: "$0.00",
    },
    {
      id: "TXN-005",
      customer: "Enterprise Ltd",
      email: "billing@enterprise.com",
      amount: "$3,999.00",
      status: "completed",
      date: "2024-01-13 11:15",
      method: "Wire Transfer",
      fee: "$119.97",
    },
    {
      id: "TXN-006",
      customer: "Digital Agency",
      email: "finance@digital.com",
      amount: "$799.00",
      status: "refunded",
      date: "2024-01-13 08:30",
      method: "Credit Card",
      fee: "$23.97",
    },
    {
      id: "TXN-007",
      customer: "SaaS Company",
      email: "billing@saas.com",
      amount: "$1,999.00",
      status: "completed",
      date: "2024-01-12 15:20",
      method: "Credit Card",
      fee: "$57.97",
    },
    {
      id: "TXN-008",
      customer: "Consulting Firm",
      email: "accounts@consulting.com",
      amount: "$4,500.00",
      status: "pending",
      date: "2024-01-12 13:45",
      method: "Bank Transfer",
      fee: "$135.00",
    },
  ]

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || transaction.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      completed: {
        variant: "default" as const,
        className: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      },
      pending: {
        variant: "secondary" as const,
        className: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      },
      failed: {
        variant: "destructive" as const,
        className: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      },
      refunded: {
        variant: "outline" as const,
        className: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
      },
    }

    return statusConfig[status as keyof typeof statusConfig] || statusConfig.completed
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Transactions</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">View and manage all payment transactions.</p>
        </div>
        <ExportTransactionsModal>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </ExportTransactionsModal>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
                <SelectItem value="refunded">Refunded</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Transactions Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Transactions</CardTitle>
          <CardDescription>
            Showing {filteredTransactions.length} of {transactions.length} transactions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">Transaction</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">Customer</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">Amount</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">Method</th>
                  <th className="text-right py-3 px-4 font-medium text-gray-600 dark:text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((transaction) => {
                  const statusConfig = getStatusBadge(transaction.status)
                  return (
                    <tr
                      key={transaction.id}
                      className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <td className="py-4 px-4">
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{transaction.id}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Fee: {transaction.fee}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{transaction.customer}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{transaction.email}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="font-semibold text-gray-900 dark:text-white">{transaction.amount}</span>
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant={statusConfig.variant} className={statusConfig.className}>
                          {transaction.status}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-sm text-gray-600 dark:text-gray-400">{transaction.date}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-sm text-gray-600 dark:text-gray-400">{transaction.method}</span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Showing 1 to {filteredTransactions.length} of {transactions.length} results
            </p>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-purple-50 text-purple-700 border-purple-200">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                <ChevronRight className="h-4 w-4" />
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
