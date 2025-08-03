"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import {
  Download,
  UserPlus,
  Plus,
  CreditCard,
  Building,
  Key,
  DollarSign,
  Link,
  Copy,
  CheckCircle,
  Wallet,
} from "lucide-react"

interface ModalProps {
  children: React.ReactNode
}

export function RequestPayoutModal({ children }: ModalProps) {
  const [payoutAmount, setPayoutAmount] = useState("")
  const [selectedAccount, setSelectedAccount] = useState("")
  const [payoutType, setPayoutType] = useState("fiat")

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Download className="h-5 w-5 mr-2 text-purple-600" />
            Request Payout
          </DialogTitle>
          <DialogDescription>
            Request an instant payout to your connected account. Choose between fiat and cryptocurrency payouts.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Payout Type</Label>
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant={payoutType === "fiat" ? "default" : "outline"}
                onClick={() => setPayoutType("fiat")}
                className={payoutType === "fiat" ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                <Building className="h-4 w-4 mr-2" />
                Fiat Currency
              </Button>
              <Button
                variant={payoutType === "crypto" ? "default" : "outline"}
                onClick={() => setPayoutType("crypto")}
                className={payoutType === "crypto" ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                <Wallet className="h-4 w-4 mr-2" />
                Cryptocurrency
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="amount"
                placeholder="0.00"
                value={payoutAmount}
                onChange={(e) => setPayoutAmount(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Available balance: $12,847.32</span>
              {payoutType === "crypto" && <span>Crypto balance: 2.45 BTC</span>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="account">Destination Account</Label>
            <Select value={selectedAccount} onValueChange={setSelectedAccount}>
              <SelectTrigger>
                <SelectValue placeholder="Select account" />
              </SelectTrigger>
              <SelectContent>
                {payoutType === "fiat" ? (
                  <>
                    <SelectItem value="bank-1">Chase Business Checking ****4532</SelectItem>
                    <SelectItem value="bank-2">Wells Fargo Business ****7890</SelectItem>
                    <SelectItem value="paypal-1">PayPal Business ****@company.com</SelectItem>
                  </>
                ) : (
                  <>
                    <SelectItem value="btc-1">Bitcoin Wallet ****3xK9</SelectItem>
                    <SelectItem value="eth-1">Ethereum Wallet ****7mP2</SelectItem>
                    <SelectItem value="usdc-1">USDC Wallet ****9nQ4</SelectItem>
                    <SelectItem value="ltc-1">Litecoin Wallet ****5rT8</SelectItem>
                  </>
                )}
              </SelectContent>
            </Select>
          </div>

          {payoutType === "crypto" && (
            <div className="space-y-2">
              <Label htmlFor="cryptocurrency">Cryptocurrency</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select cryptocurrency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="btc">Bitcoin (BTC)</SelectItem>
                  <SelectItem value="eth">Ethereum (ETH)</SelectItem>
                  <SelectItem value="usdc">USD Coin (USDC)</SelectItem>
                  <SelectItem value="ltc">Litecoin (LTC)</SelectItem>
                  <SelectItem value="bch">Bitcoin Cash (BCH)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <div
            className={`${payoutType === "crypto" ? "bg-yellow-50 dark:bg-yellow-900/20" : "bg-purple-50 dark:bg-purple-900/20"} p-3 rounded-lg`}
          >
            {payoutType === "fiat" ? (
              <>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  <strong>Instant payout fee:</strong> 1.5% (max $10.00)
                </p>
                <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">
                  Or wait for standard payout (free) - next scheduled: Jan 17, 2024
                </p>
              </>
            ) : (
              <>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  <strong>Crypto payout fee:</strong> Network fee + 0.5%
                </p>
                <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">
                  Crypto payouts are processed within 30 minutes. Network fees vary by blockchain.
                </p>
              </>
            )}
          </div>

          <div className="flex justify-end space-x-2">
            <DialogTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DialogTrigger>
            <Button className="bg-purple-600 hover:bg-purple-700">
              {payoutType === "crypto" ? "Request Crypto Payout" : "Request Payout"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function AddCryptoWalletModal({ children }: ModalProps) {
  const [selectedCrypto, setSelectedCrypto] = useState("btc")

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Wallet className="h-5 w-5 mr-2 text-purple-600" />
            Add Crypto Wallet
          </DialogTitle>
          <DialogDescription>Connect a cryptocurrency wallet for crypto payouts.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Cryptocurrency</Label>
            <Select value={selectedCrypto} onValueChange={setSelectedCrypto}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="btc">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    <span>Bitcoin (BTC)</span>
                  </div>
                </SelectItem>
                <SelectItem value="eth">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <span>Ethereum (ETH)</span>
                  </div>
                </SelectItem>
                <SelectItem value="usdc">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    <span>USD Coin (USDC)</span>
                  </div>
                </SelectItem>
                <SelectItem value="ltc">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                    <span>Litecoin (LTC)</span>
                  </div>
                </SelectItem>
                <SelectItem value="bch">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span>Bitcoin Cash (BCH)</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="walletAddress">Wallet Address</Label>
            <Input
              id="walletAddress"
              placeholder={
                selectedCrypto === "btc"
                  ? "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
                  : selectedCrypto === "eth"
                    ? "0x742d35Cc6634C0532925a3b8D4C0d886E"
                    : "Enter wallet address"
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="walletLabel">Wallet Label (Optional)</Label>
            <Input id="walletLabel" placeholder="e.g., Main Bitcoin Wallet" />
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg">
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              <strong>Security Notice:</strong> Double-check your wallet address. Crypto transactions cannot be
              reversed.
            </p>
          </div>

          <div className="flex justify-end space-x-2">
            <DialogTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DialogTrigger>
            <Button className="bg-purple-600 hover:bg-purple-700">Add Wallet</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function AddCustomerModal({ children }: ModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <UserPlus className="h-5 w-5 mr-2 text-purple-600" />
            Add New Customer
          </DialogTitle>
          <DialogDescription>Create a new customer profile for billing and subscription management.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doe" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="john@company.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company (Optional)</Label>
            <Input id="company" placeholder="Acme Corporation" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="+1 (555) 123-4567" />
          </div>

          <Separator />

          <div className="space-y-2">
            <Label htmlFor="subscription">Initial Subscription</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a plan (optional)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="starter">Starter - $29/month</SelectItem>
                <SelectItem value="professional">Professional - $79/month</SelectItem>
                <SelectItem value="enterprise">Enterprise - $199/month</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end space-x-2">
            <DialogTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DialogTrigger>
            <Button className="bg-purple-600 hover:bg-purple-700">Add Customer</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function AddPlanModal({ children }: ModalProps) {
  const [isRecurring, setIsRecurring] = useState(true)

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Plus className="h-5 w-5 mr-2 text-purple-600" />
            Create Subscription Plan
          </DialogTitle>
          <DialogDescription>Set up a new subscription plan for your customers.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="planName">Plan Name</Label>
            <Input id="planName" placeholder="e.g., Premium Plan" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Price</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input id="price" placeholder="99.00" className="pl-10" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="currency">Currency</Label>
              <Select defaultValue="usd">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">USD ($)</SelectItem>
                  <SelectItem value="eur">EUR (€)</SelectItem>
                  <SelectItem value="gbp">GBP (£)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="recurring" checked={isRecurring} onCheckedChange={setIsRecurring} />
            <Label htmlFor="recurring">Recurring subscription</Label>
          </div>

          {isRecurring && (
            <div className="space-y-2">
              <Label htmlFor="interval">Billing Interval</Label>
              <Select defaultValue="monthly">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Describe what's included in this plan..." />
          </div>

          <div className="flex justify-end space-x-2">
            <DialogTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DialogTrigger>
            <Button className="bg-purple-600 hover:bg-purple-700">Create Plan</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function AddAccountModal({ children }: ModalProps) {
  const [accountType, setAccountType] = useState("bank")

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Plus className="h-5 w-5 mr-2 text-purple-600" />
            Add Payment Account
          </DialogTitle>
          <DialogDescription>Connect a new bank account or payment method for payouts.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Account Type</Label>
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant={accountType === "bank" ? "default" : "outline"}
                onClick={() => setAccountType("bank")}
                className={accountType === "bank" ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                <Building className="h-4 w-4 mr-2" />
                Bank Account
              </Button>
              <Button
                variant={accountType === "card" ? "default" : "outline"}
                onClick={() => setAccountType("card")}
                className={accountType === "card" ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                <CreditCard className="h-4 w-4 mr-2" />
                Debit Card
              </Button>
            </div>
          </div>

          {accountType === "bank" ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="routingNumber">Routing Number</Label>
                <Input id="routingNumber" placeholder="123456789" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="accountNumber">Account Number</Label>
                <Input id="accountNumber" placeholder="1234567890" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="accountName">Account Holder Name</Label>
                <Input id="accountName" placeholder="John Doe" />
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Debit Card Number</Label>
                <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" />
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-end space-x-2">
            <DialogTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DialogTrigger>
            <Button className="bg-purple-600 hover:bg-purple-700">Add Account</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function GenerateApiKeyModal({ children }: ModalProps) {
  const [keyName, setKeyName] = useState("")
  const [environment, setEnvironment] = useState("live")

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Key className="h-5 w-5 mr-2 text-purple-600" />
            Generate API Key
          </DialogTitle>
          <DialogDescription>Create a new API key for your integration.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="keyName">Key Name</Label>
            <Input
              id="keyName"
              placeholder="e.g., Production API Key"
              value={keyName}
              onChange={(e) => setKeyName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Environment</Label>
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant={environment === "test" ? "default" : "outline"}
                onClick={() => setEnvironment("test")}
                className={environment === "test" ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                Test
              </Button>
              <Button
                variant={environment === "live" ? "default" : "outline"}
                onClick={() => setEnvironment("live")}
                className={environment === "live" ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                Live
              </Button>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg">
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              <strong>Security Notice:</strong> API keys will only be shown once. Make sure to copy and store them
              securely.
            </p>
          </div>

          <div className="flex justify-end space-x-2">
            <DialogTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DialogTrigger>
            <Button className="bg-purple-600 hover:bg-purple-700">Generate Key</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function ExportTransactionsModal({ children }: ModalProps) {
  const [dateRange, setDateRange] = useState("last30")
  const [format, setFormat] = useState("csv")

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Download className="h-5 w-5 mr-2 text-purple-600" />
            Export Transactions
          </DialogTitle>
          <DialogDescription>Download your transaction data in your preferred format.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Date Range</Label>
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last7">Last 7 days</SelectItem>
                <SelectItem value="last30">Last 30 days</SelectItem>
                <SelectItem value="last90">Last 90 days</SelectItem>
                <SelectItem value="ytd">Year to date</SelectItem>
                <SelectItem value="custom">Custom range</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Export Format</Label>
            <Select value={format} onValueChange={setFormat}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="csv">CSV</SelectItem>
                <SelectItem value="xlsx">Excel (XLSX)</SelectItem>
                <SelectItem value="json">JSON</SelectItem>
                <SelectItem value="pdf">PDF Report</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
            <p className="text-sm text-purple-700 dark:text-purple-300">
              Export will include transaction ID, amount, status, customer details, and fees.
            </p>
          </div>

          <div className="flex justify-end space-x-2">
            <DialogTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DialogTrigger>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function CreatePaymentLinkModal({ children }: ModalProps) {
  const [linkType, setLinkType] = useState("onetime")
  const [generatedLink, setGeneratedLink] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)

  const handleCreateLink = () => {
    const randomId = Math.random().toString(36).substring(2, 15)
    setGeneratedLink(`https://pay.Onetapay.com/link/${randomId}`)
    setShowSuccess(true)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink)
  }

  if (showSuccess) {
    return (
      <Dialog open={true}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center text-green-600">
              <CheckCircle className="h-5 w-5 mr-2" />
              Payment Link Created
            </DialogTitle>
            <DialogDescription>Your payment link has been created successfully.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <Label className="text-sm font-medium">Payment Link</Label>
              <div className="flex items-center space-x-2 mt-2">
                <Input value={generatedLink} readOnly className="text-sm" />
                <Button size="sm" onClick={copyToClipboard}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setShowSuccess(false)}>
                Create Another
              </Button>
              <DialogTrigger asChild>
                <Button className="bg-purple-600 hover:bg-purple-700">Done</Button>
              </DialogTrigger>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Link className="h-5 w-5 mr-2 text-purple-600" />
            Create Payment Link
          </DialogTitle>
          <DialogDescription>Generate a payment link to collect payments from your customers.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Payment Title</Label>
            <Input id="title" placeholder="e.g., Invoice #1234" />
          </div>

          <div className="space-y-2">
            <Label>Payment Type</Label>
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant={linkType === "onetime" ? "default" : "outline"}
                onClick={() => setLinkType("onetime")}
                className={linkType === "onetime" ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                One-time
              </Button>
              <Button
                variant={linkType === "subscription" ? "default" : "outline"}
                onClick={() => setLinkType("subscription")}
                className={linkType === "subscription" ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                Subscription
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input id="amount" placeholder="99.00" className="pl-10" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="currency">Currency</Label>
              <Select defaultValue="usd">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">USD ($)</SelectItem>
                  <SelectItem value="eur">EUR (€)</SelectItem>
                  <SelectItem value="gbp">GBP (£)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {linkType === "subscription" && (
            <div className="space-y-2">
              <Label htmlFor="interval">Billing Interval</Label>
              <Select defaultValue="monthly">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="description">Description (Optional)</Label>
            <Textarea id="description" placeholder="Payment description..." />
          </div>

          <div className="flex justify-end space-x-2">
            <DialogTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DialogTrigger>
            <Button className="bg-purple-600 hover:bg-purple-700" onClick={handleCreateLink}>
              Create Link
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
