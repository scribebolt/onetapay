"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Wallet,
  Clock,
  CheckCircle,
  AlertCircle,
  Calendar,
  MoreHorizontal,
  Download,
  Plus,
  TrendingUp,
} from "lucide-react"

// Add imports for modals at the top
import { RequestPayoutModal, AddCryptoWalletModal } from "./modals"

export function Payouts() {
  const payoutStats = [
    {
      title: "Available Balance",
      value: "$12,847.32",
      description: "Ready for payout",
      icon: Wallet,
      color: "text-green-600",
    },
    {
      title: "Crypto Balance",
      value: "2.45 BTC",
      description: "≈ $98,234.50",
      icon: TrendingUp,
      color: "text-orange-600",
    },
    {
      title: "Pending Payouts",
      value: "$8,234.12",
      description: "Processing in 2 days",
      icon: Clock,
      color: "text-yellow-600",
    },
    {
      title: "This Month",
      value: "$45,892.18",
      description: "Total payouts",
      icon: CheckCircle,
      color: "text-blue-600",
    },
  ]

  const cryptoBalances = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      balance: "2.45",
      usdValue: "$98,234.50",
      change: "+5.2%",
      color: "bg-orange-500",
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      balance: "15.67",
      usdValue: "$35,678.90",
      change: "+3.1%",
      color: "bg-blue-500",
    },
    {
      symbol: "USDC",
      name: "USD Coin",
      balance: "8,234.12",
      usdValue: "$8,234.12",
      change: "0.0%",
      color: "bg-blue-600",
    },
    {
      symbol: "LTC",
      name: "Litecoin",
      balance: "45.23",
      usdValue: "$3,456.78",
      change: "+2.8%",
      color: "bg-gray-500",
    },
  ]

  const upcomingPayouts = [
    {
      id: "PO-001",
      amount: "$8,234.12",
      account: "Bank Account ****4532",
      scheduledDate: "2024-01-17",
      status: "scheduled",
      transactions: 45,
      type: "fiat",
    },
    {
      id: "PO-002",
      amount: "0.5 BTC",
      account: "Bitcoin Wallet ****3xK9",
      scheduledDate: "2024-01-17",
      status: "scheduled",
      transactions: 12,
      type: "crypto",
    },
    {
      id: "PO-003",
      amount: "$3,456.78",
      account: "Bank Account ****7890",
      scheduledDate: "2024-01-19",
      status: "scheduled",
      transactions: 23,
      type: "fiat",
    },
    {
      id: "PO-004",
      amount: "2.1 ETH",
      account: "Ethereum Wallet ****7mP2",
      scheduledDate: "2024-01-19",
      status: "pending",
      transactions: 8,
      type: "crypto",
    },
  ]

  const completedPayouts = [
    {
      id: "PO-098",
      amount: "$12,567.89",
      account: "Bank Account ****4532",
      completedDate: "2024-01-15",
      status: "completed",
      transactions: 67,
      type: "fiat",
    },
    {
      id: "PO-097",
      amount: "1.2 BTC",
      account: "Bitcoin Wallet ****3xK9",
      completedDate: "2024-01-15",
      status: "completed",
      transactions: 15,
      type: "crypto",
    },
    {
      id: "PO-096",
      amount: "$8,901.23",
      account: "Bank Account ****7890",
      completedDate: "2024-01-12",
      status: "completed",
      transactions: 34,
      type: "fiat",
    },
    {
      id: "PO-095",
      amount: "3.5 ETH",
      account: "Ethereum Wallet ****7mP2",
      completedDate: "2024-01-12",
      status: "completed",
      transactions: 22,
      type: "crypto",
    },
    {
      id: "PO-094",
      amount: "$234.50",
      account: "Bank Account ****4532",
      completedDate: "2024-01-08",
      status: "failed",
      transactions: 3,
      type: "fiat",
    },
  ]

  const connectedWallets = [
    {
      id: "btc-1",
      name: "Main Bitcoin Wallet",
      address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
      crypto: "BTC",
      status: "verified",
      balance: "2.45 BTC",
    },
    {
      id: "eth-1",
      name: "Ethereum Wallet",
      address: "0x742d35Cc6634C0532925a3b8D4C0d886E",
      crypto: "ETH",
      status: "verified",
      balance: "15.67 ETH",
    },
    {
      id: "usdc-1",
      name: "USDC Wallet",
      address: "0x8ba1f109551bD432803012645Hac136c",
      crypto: "USDC",
      status: "pending",
      balance: "8,234.12 USDC",
    },
  ]

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      scheduled: {
        variant: "secondary" as const,
        className: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      },
      pending: {
        variant: "secondary" as const,
        className: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      },
      completed: {
        variant: "default" as const,
        className: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      },
      failed: {
        variant: "destructive" as const,
        className: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      },
      verified: {
        variant: "default" as const,
        className: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      },
    }

    return statusConfig[status as keyof typeof statusConfig] || statusConfig.completed
  }

  const getPayoutIcon = (type: string) => {
    return type === "crypto" ? (
      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
        <Wallet className="h-5 w-5 text-white" />
      </div>
    ) : (
      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
        <Wallet className="h-5 w-5 text-white" />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Payouts</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Track your payouts and manage your account balances including cryptocurrency.
          </p>
        </div>
        <div className="flex space-x-2">
          <AddCryptoWalletModal>
            <Button variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Add Crypto Wallet
            </Button>
          </AddCryptoWalletModal>
          <RequestPayoutModal>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Download className="h-4 w-4 mr-2" />
              Request Payout
            </Button>
          </RequestPayoutModal>
        </div>
      </div>

      {/* Payout Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {payoutStats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{stat.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Crypto Balances */}
      <Card>
        <CardHeader>
          <CardTitle>Cryptocurrency Balances</CardTitle>
          <CardDescription>Your current crypto holdings available for payout</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cryptoBalances.map((crypto, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-8 h-8 ${crypto.color} rounded-full flex items-center justify-center`}>
                    <span className="text-white font-bold text-xs">{crypto.symbol.slice(0, 2)}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{crypto.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{crypto.symbol}</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    {crypto.balance} {crypto.symbol}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{crypto.usdValue}</p>
                  <p
                    className={`text-xs ${crypto.change.startsWith("+") ? "text-green-600" : crypto.change.startsWith("-") ? "text-red-600" : "text-gray-500"}`}
                  >
                    {crypto.change} 24h
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Payout Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Payout Schedule</CardTitle>
          <CardDescription>Your automatic payout schedule and next payout date</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="fiat" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="fiat">Fiat Payouts</TabsTrigger>
              <TabsTrigger value="crypto">Crypto Payouts</TabsTrigger>
            </TabsList>

            <TabsContent value="fiat" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-purple-600" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Next Fiat Payout</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">January 17, 2024</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-purple-600">$8,234.12</p>
                      <p className="text-xs text-gray-500">45 transactions</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Payout Progress</span>
                      <span className="text-gray-900 dark:text-white">2 days remaining</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Fiat Payout Settings</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Frequency</span>
                      <span className="text-gray-900 dark:text-white">Weekly</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Minimum Amount</span>
                      <span className="text-gray-900 dark:text-white">$100.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Default Account</span>
                      <span className="text-gray-900 dark:text-white">Bank ****4532</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Update Settings
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="crypto" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Wallet className="h-5 w-5 text-orange-600" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Next Crypto Payout</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">On-demand</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-orange-600">Available</p>
                      <p className="text-xs text-gray-500">Instant transfer</p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg">
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      <strong>Crypto payouts</strong> are processed instantly with network fees.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Crypto Payout Settings</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Processing</span>
                      <span className="text-gray-900 dark:text-white">Instant</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Network Fee</span>
                      <span className="text-gray-900 dark:text-white">Variable</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Service Fee</span>
                      <span className="text-gray-900 dark:text-white">0.5%</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Manage Wallets
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Connected Crypto Wallets */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Connected Crypto Wallets</CardTitle>
              <CardDescription>Manage your cryptocurrency wallet addresses for payouts</CardDescription>
            </div>
            <AddCryptoWalletModal>
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Wallet
              </Button>
            </AddCryptoWalletModal>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {connectedWallets.map((wallet) => {
              const statusConfig = getStatusBadge(wallet.status)
              return (
                <div
                  key={wallet.id}
                  className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">{wallet.crypto}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{wallet.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                        {wallet.address.slice(0, 10)}...{wallet.address.slice(-8)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="font-semibold text-gray-900 dark:text-white">{wallet.balance}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{wallet.crypto} Wallet</p>
                    </div>
                    <Badge variant={statusConfig.variant} className={statusConfig.className}>
                      {wallet.status}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Payouts */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Payouts</CardTitle>
          <CardDescription>Scheduled payouts for the next 30 days (fiat and crypto)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingPayouts.map((payout) => {
              const statusConfig = getStatusBadge(payout.status)
              return (
                <div
                  key={payout.id}
                  className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    {getPayoutIcon(payout.type)}
                    <div>
                      <div className="flex items-center space-x-2">
                        <p className="font-medium text-gray-900 dark:text-white">{payout.id}</p>
                        <Badge
                          variant="outline"
                          className={`text-xs ${payout.type === "crypto" ? "border-orange-200 text-orange-700 bg-orange-50" : "border-purple-200 text-purple-700 bg-purple-50"}`}
                        >
                          {payout.type === "crypto" ? "CRYPTO" : "FIAT"}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {payout.account} • {payout.transactions} transactions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="font-semibold text-gray-900 dark:text-white">{payout.amount}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{payout.scheduledDate}</p>
                    </div>
                    <Badge variant={statusConfig.variant} className={statusConfig.className}>
                      {payout.status}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Completed Payouts */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Payouts</CardTitle>
          <CardDescription>Your payout history for the last 30 days (fiat and crypto)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {completedPayouts.map((payout) => {
              const statusConfig = getStatusBadge(payout.status)
              return (
                <div
                  key={payout.id}
                  className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        payout.status === "completed"
                          ? payout.type === "crypto"
                            ? "bg-gradient-to-r from-orange-500 to-yellow-500"
                            : "bg-gradient-to-r from-green-500 to-green-600"
                          : "bg-gradient-to-r from-red-500 to-red-600"
                      }`}
                    >
                      {payout.status === "completed" ? (
                        <CheckCircle className="h-5 w-5 text-white" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-white" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <p className="font-medium text-gray-900 dark:text-white">{payout.id}</p>
                        <Badge
                          variant="outline"
                          className={`text-xs ${payout.type === "crypto" ? "border-orange-200 text-orange-700 bg-orange-50" : "border-purple-200 text-purple-700 bg-purple-50"}`}
                        >
                          {payout.type === "crypto" ? "CRYPTO" : "FIAT"}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {payout.account} • {payout.transactions} transactions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="font-semibold text-gray-900 dark:text-white">{payout.amount}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{payout.completedDate}</p>
                    </div>
                    <Badge variant={statusConfig.variant} className={statusConfig.className}>
                      {payout.status}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
