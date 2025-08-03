"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DollarSign,
  TrendingUp,
  Users,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Plus,
  Eye,
  Bitcoin,
} from "lucide-react"

import { CreatePaymentLinkModal, AddCustomerModal, ExportTransactionsModal } from "./modals"

export function Overview() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,892.18",
      change: "+12.5%",
      changeType: "increase",
      icon: DollarSign,
      description: "vs last month",
    },
    {
      title: "Transactions",
      value: "1,247",
      change: "+8.2%",
      changeType: "increase",
      icon: CreditCard,
      description: "vs last month",
    },
    {
      title: "Active Customers",
      value: "892",
      change: "+15.3%",
      changeType: "increase",
      icon: Users,
      description: "vs last month",
    },
    {
      title: "Conversion Rate",
      value: "68.4%",
      change: "-2.1%",
      changeType: "decrease",
      icon: TrendingUp,
      description: "vs last month",
    },
  ]

  const recentTransactions = [
    {
      id: "TXN-001",
      customer: "John Doe",
      email: "john@example.com",
      amount: "$299.00",
      status: "completed",
      date: "2024-01-15",
      method: "Credit Card",
      type: "fiat",
    },
    {
      id: "TXN-002",
      customer: "Sarah Wilson",
      email: "sarah@company.com",
      amount: "0.05 BTC",
      status: "completed",
      date: "2024-01-15",
      method: "Bitcoin",
      type: "crypto",
    },
    {
      id: "TXN-003",
      customer: "Mike Johnson",
      email: "mike@startup.io",
      amount: "$149.00",
      status: "pending",
      date: "2024-01-14",
      method: "Bank Transfer",
      type: "fiat",
    },
    {
      id: "TXN-004",
      customer: "Emily Chen",
      email: "emily@design.co",
      amount: "2.1 ETH",
      status: "completed",
      date: "2024-01-14",
      method: "Ethereum",
      type: "crypto",
    },
    {
      id: "TXN-005",
      customer: "David Brown",
      email: "david@tech.com",
      amount: "$99.00",
      status: "failed",
      date: "2024-01-13",
      method: "Credit Card",
      type: "fiat",
    },
  ]

  const topCustomers = [
    {
      name: "Acme Corporation",
      email: "billing@acme.com",
      totalSpent: "$12,450.00",
      transactions: 23,
      avatar: "AC",
    },
    {
      name: "TechStart Inc.",
      email: "finance@techstart.com",
      totalSpent: "$8,920.00",
      transactions: 15,
      avatar: "TS",
    },
    {
      name: "Design Studio",
      email: "payments@design.co",
      totalSpent: "$6,780.00",
      transactions: 12,
      avatar: "DS",
    },
    {
      name: "Global Solutions",
      email: "billing@global.com",
      totalSpent: "$5,340.00",
      transactions: 18,
      avatar: "GS",
    },
  ]

  const cryptoStats = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      volume: "$12,450.00",
      transactions: 45,
      change: "+5.2%",
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      volume: "$8,920.00",
      transactions: 32,
      change: "+3.1%",
    },
    {
      symbol: "USDC",
      name: "USD Coin",
      volume: "$6,780.00",
      transactions: 28,
      change: "0.0%",
    },
    {
      symbol: "LTC",
      name: "Litecoin",
      volume: "$2,340.00",
      transactions: 12,
      change: "+2.8%",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Completed</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">Pending</Badge>
      case "failed":
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Failed</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getTransactionIcon = (type: string) => {
    return type === "crypto" ? (
      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
        <Bitcoin className="h-4 w-4 text-white" />
      </div>
    ) : (
      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
        <CreditCard className="h-4 w-4 text-white" />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Welcome back! Here's what's happening with your payments today.
          </p>
        </div>
        <div className="flex space-x-2">
          <ExportTransactionsModal>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </ExportTransactionsModal>
          <CreatePaymentLinkModal>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Plus className="h-4 w-4 mr-2" />
              Create Link
            </Button>
          </CreatePaymentLinkModal>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          const isIncrease = stat.changeType === "increase"

          return (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="flex items-center text-xs">
                  {isIncrease ? (
                    <ArrowUpRight className="h-3 w-3 text-green-600 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 text-red-600 mr-1" />
                  )}
                  <span className={isIncrease ? "text-green-600" : "text-red-600"}>{stat.change}</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-1">{stat.description}</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Revenue Overview Full Width */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Your payment performance over the last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="fiat" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="fiat">Fiat Payments</TabsTrigger>
                <TabsTrigger value="crypto">Crypto Payments</TabsTrigger>
              </TabsList>

              <TabsContent value="fiat" className="space-y-4">
                <div className="h-64 bg-gradient-to-r from-purple-50 to-yellow-50 dark:from-purple-900/20 dark:to-yellow-900/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <DollarSign className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">$45,892.18</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Fiat Revenue</p>
                    <div className="mt-4 flex items-center justify-center space-x-4 text-sm">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-purple-600 rounded-full mr-2"></div>
                        <span className="text-gray-600 dark:text-gray-400">Credit Cards: $32,450</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                        <span className="text-gray-600 dark:text-gray-400">Bank Transfers: $13,442</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="crypto" className="space-y-4">
                <div className="h-64 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Bitcoin className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">≈ $30,490.00</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Crypto Revenue</p>
                    <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                      {cryptoStats.map((crypto, index) => (
                        <div key={index} className="flex items-center justify-center">
                          <div className={`w-3 h-3 rounded-full mr-2 ${
                            crypto.symbol === "BTC"
                              ? "bg-orange-500"
                              : crypto.symbol === "ETH"
                              ? "bg-blue-500"
                              : crypto.symbol === "USDC"
                              ? "bg-blue-600"
                              : "bg-gray-500"
                          }`} />
                          <span className="text-gray-600 dark:text-gray-400">
                            {crypto.symbol}: {crypto.volume}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Crypto Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Cryptocurrency Performance</CardTitle>
          <CardDescription>Your crypto payment statistics and volume</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cryptoStats.map((crypto, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      crypto.symbol === "BTC"
                        ? "bg-orange-500"
                        : crypto.symbol === "ETH"
                        ? "bg-blue-500"
                        : crypto.symbol === "USDC"
                        ? "bg-blue-600"
                        : "bg-gray-500"
                    }`}>
                      <span className="text-white font-bold text-xs">{crypto.symbol.slice(0, 2)}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{crypto.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{crypto.symbol}</p>
                    </div>
                  </div>
                  <span className={`text-sm font-medium ${
                    crypto.change.startsWith("+")
                      ? "text-green-600"
                      : crypto.change.startsWith("-")
                      ? "text-red-600"
                      : "text-gray-500"
                  }`}>
                    {crypto.change}
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{crypto.volume}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{crypto.transactions} transactions</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions and Top Customers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Latest payment activities including crypto</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    {getTransactionIcon(transaction.type)}
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{transaction.customer}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{transaction.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-right">
                      <p className="font-semibold text-gray-900 dark:text-white">{transaction.amount}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{transaction.date}</p>
                    </div>
                    {getStatusBadge(transaction.status)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Customers */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Top Customers</CardTitle>
              <CardDescription>Your highest value customers this month</CardDescription>
            </div>
            <AddCustomerModal>
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Customer
              </Button>
            </AddCustomerModal>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCustomers.map((customer, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{customer.avatar}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{customer.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{customer.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900 dark:text-white">{customer.totalSpent}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{customer.transactions} transactions</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
