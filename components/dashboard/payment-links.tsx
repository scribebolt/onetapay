"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Link,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Copy,
  Edit,
  Eye,
  Trash2,
  TrendingUp,
  DollarSign,
  Users,
  MousePointer,
  Calendar,
  CreditCard,
  Repeat,
  Heart,
  ExternalLink,
} from "lucide-react"

import { CreatePaymentLinkModal } from "./modals"

export function PaymentLinks() {
  const linkStats = [
    {
      title: "Total Links",
      value: "247",
      description: "+12 this month",
      icon: Link,
      color: "text-blue-600",
    },
    {
      title: "Active Links",
      value: "189",
      description: "76% of total",
      icon: TrendingUp,
      color: "text-green-600",
    },
    {
      title: "Total Revenue",
      value: "$45,892",
      description: "+18% from last month",
      icon: DollarSign,
      color: "text-purple-600",
    },
    {
      title: "Conversion Rate",
      value: "68.4%",
      description: "+2.1% improvement",
      icon: Users,
      color: "text-orange-600",
    },
  ]

  const quickActions = [
    {
      title: "One-time Payment",
      description: "Create a link for single payments",
      icon: CreditCard,
      color: "bg-blue-500",
      action: "onetime",
    },
    {
      title: "Subscription",
      description: "Set up recurring payments",
      icon: Repeat,
      color: "bg-purple-500",
      action: "subscription",
    },
    {
      title: "Donation",
      description: "Accept donations with custom amounts",
      icon: Heart,
      color: "bg-pink-500",
      action: "donation",
    },
  ]

  const paymentLinks = [
    {
      id: "PL-001",
      title: "Premium Subscription",
      type: "subscription",
      amount: "$99.00/month",
      status: "active",
      clicks: 1247,
      conversions: 89,
      revenue: "$8,811.00",
      created: "2024-01-10",
      url: "https://pay.Onetapay.com/premium-sub",
    },
    {
      id: "PL-002",
      title: "Product Purchase - Widget Pro",
      type: "onetime",
      amount: "$299.00",
      status: "active",
      clicks: 856,
      conversions: 67,
      revenue: "$20,033.00",
      created: "2024-01-08",
      url: "https://pay.Onetapay.com/widget-pro",
    },
    {
      id: "PL-003",
      title: "Consultation Fee",
      type: "onetime",
      amount: "$150.00",
      status: "active",
      clicks: 432,
      conversions: 28,
      revenue: "$4,200.00",
      created: "2024-01-05",
      url: "https://pay.Onetapay.com/consultation",
    },
    {
      id: "PL-004",
      title: "Annual Membership",
      type: "subscription",
      amount: "$999.00/year",
      status: "paused",
      clicks: 234,
      conversions: 12,
      revenue: "$11,988.00",
      created: "2023-12-28",
      url: "https://pay.Onetapay.com/annual-membership",
    },
    {
      id: "PL-005",
      title: "Charity Donation",
      type: "donation",
      amount: "Variable",
      status: "active",
      clicks: 1892,
      conversions: 156,
      revenue: "$7,834.00",
      created: "2023-12-20",
      url: "https://pay.Onetapay.com/donate",
    },
    {
      id: "PL-006",
      title: "Course Bundle",
      type: "onetime",
      amount: "$497.00",
      status: "expired",
      clicks: 678,
      conversions: 23,
      revenue: "$11,431.00",
      created: "2023-12-15",
      url: "https://pay.Onetapay.com/course-bundle",
    },
  ]

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: {
        variant: "default" as const,
        className: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      },
      paused: {
        variant: "secondary" as const,
        className: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      },
      expired: {
        variant: "secondary" as const,
        className: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
      },
    }

    return statusConfig[status as keyof typeof statusConfig] || statusConfig.active
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "subscription":
        return <Repeat className="h-4 w-4" />
      case "donation":
        return <Heart className="h-4 w-4" />
      default:
        return <CreditCard className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "subscription":
        return "text-purple-600 bg-purple-100 dark:bg-purple-900 dark:text-purple-200"
      case "donation":
        return "text-pink-600 bg-pink-100 dark:bg-pink-900 dark:text-pink-200"
      default:
        return "text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200"
    }
  }

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url)
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Payment Links</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Create and manage payment links for your products and services.
          </p>
        </div>
        <CreatePaymentLinkModal>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Plus className="h-4 w-4 mr-2" />
            Create Link
          </Button>
        </CreatePaymentLinkModal>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {linkStats.map((stat, index) => {
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

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Create payment links for common use cases</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon
              return (
                <CreatePaymentLinkModal key={index}>
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">{action.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{action.description}</p>
                      </div>
                    </div>
                  </div>
                </CreatePaymentLinkModal>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Payment Links Management */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Payment Links</CardTitle>
              <CardDescription>Manage all your payment links and track their performance</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search links..." className="pl-10 w-64" />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All Links</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="paused">Paused</TabsTrigger>
              <TabsTrigger value="expired">Expired</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4 mt-6">
              <div className="space-y-4">
                {paymentLinks.map((link) => {
                  const statusConfig = getStatusBadge(link.status)
                  const conversionRate = ((link.conversions / link.clicks) * 100).toFixed(1)

                  return (
                    <div
                      key={link.id}
                      className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                          {getTypeIcon(link.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-medium text-gray-900 dark:text-white">{link.title}</h3>
                            <Badge variant="outline" className={`text-xs ${getTypeColor(link.type)}`}>
                              {link.type}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                            <span className="flex items-center">
                              <MousePointer className="h-3 w-3 mr-1" />
                              {link.clicks} clicks
                            </span>
                            <span className="flex items-center">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              {conversionRate}% conversion
                            </span>
                            <span className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {link.created}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-6">
                        <div className="text-right">
                          <p className="font-semibold text-gray-900 dark:text-white">{link.amount}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{link.revenue} revenue</p>
                        </div>

                        <Badge variant={statusConfig.variant} className={statusConfig.className}>
                          {link.status}
                        </Badge>

                        <div className="flex items-center space-x-1">
                          <Button variant="ghost" size="sm" onClick={() => copyToClipboard(link.url)} title="Copy link">
                            <Copy className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" title="View analytics">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" title="Edit link">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" title="Open link">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </TabsContent>

            <TabsContent value="active" className="space-y-4 mt-6">
              <div className="space-y-4">
                {paymentLinks
                  .filter((link) => link.status === "active")
                  .map((link) => {
                    const statusConfig = getStatusBadge(link.status)
                    const conversionRate = ((link.conversions / link.clicks) * 100).toFixed(1)

                    return (
                      <div
                        key={link.id}
                        className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        <div className="flex items-center space-x-4 flex-1">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                            {getTypeIcon(link.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-medium text-gray-900 dark:text-white">{link.title}</h3>
                              <Badge variant="outline" className={`text-xs ${getTypeColor(link.type)}`}>
                                {link.type}
                              </Badge>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                              <span className="flex items-center">
                                <MousePointer className="h-3 w-3 mr-1" />
                                {link.clicks} clicks
                              </span>
                              <span className="flex items-center">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                {conversionRate}% conversion
                              </span>
                              <span className="flex items-center">
                                <Calendar className="h-3 w-3 mr-1" />
                                {link.created}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-6">
                          <div className="text-right">
                            <p className="font-semibold text-gray-900 dark:text-white">{link.amount}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{link.revenue} revenue</p>
                          </div>

                          <Badge variant={statusConfig.variant} className={statusConfig.className}>
                            {link.status}
                          </Badge>

                          <div className="flex items-center space-x-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(link.url)}
                              title="Copy link"
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" title="View analytics">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" title="Edit link">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" title="Open link">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </TabsContent>

            <TabsContent value="paused" className="space-y-4 mt-6">
              <div className="text-center py-8">
                <p className="text-gray-500 dark:text-gray-400">No paused payment links found.</p>
              </div>
            </TabsContent>

            <TabsContent value="expired" className="space-y-4 mt-6">
              <div className="space-y-4">
                {paymentLinks
                  .filter((link) => link.status === "expired")
                  .map((link) => {
                    const statusConfig = getStatusBadge(link.status)
                    const conversionRate = ((link.conversions / link.clicks) * 100).toFixed(1)

                    return (
                      <div
                        key={link.id}
                        className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors opacity-75"
                      >
                        <div className="flex items-center space-x-4 flex-1">
                          <div className="w-10 h-10 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center">
                            {getTypeIcon(link.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-medium text-gray-900 dark:text-white">{link.title}</h3>
                              <Badge variant="outline" className={`text-xs ${getTypeColor(link.type)}`}>
                                {link.type}
                              </Badge>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                              <span className="flex items-center">
                                <MousePointer className="h-3 w-3 mr-1" />
                                {link.clicks} clicks
                              </span>
                              <span className="flex items-center">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                {conversionRate}% conversion
                              </span>
                              <span className="flex items-center">
                                <Calendar className="h-3 w-3 mr-1" />
                                {link.created}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-6">
                          <div className="text-right">
                            <p className="font-semibold text-gray-900 dark:text-white">{link.amount}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{link.revenue} revenue</p>
                          </div>

                          <Badge variant={statusConfig.variant} className={statusConfig.className}>
                            {link.status}
                          </Badge>

                          <div className="flex items-center space-x-1">
                            <Button variant="ghost" size="sm" title="View analytics">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" title="Delete link">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Performance Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Links</CardTitle>
            <CardDescription>Links with highest conversion rates this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {paymentLinks
                .sort((a, b) => b.conversions / b.clicks - a.conversions / a.clicks)
                .slice(0, 3)
                .map((link, index) => {
                  const conversionRate = ((link.conversions / link.clicks) * 100).toFixed(1)
                  return (
                    <div key={link.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{link.title}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{link.clicks} clicks</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-purple-600">{conversionRate}%</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{link.revenue}</p>
                      </div>
                    </div>
                  )
                })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest payment link interactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-white">Payment completed via Premium Subscription</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">2 minutes ago</p>
                </div>
                <p className="text-sm font-medium text-green-600">+$99.00</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-white">New click on Widget Pro link</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">5 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-white">Payment completed via Consultation Fee</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">12 minutes ago</p>
                </div>
                <p className="text-sm font-medium text-green-600">+$150.00</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-white">Donation received via Charity link</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">18 minutes ago</p>
                </div>
                <p className="text-sm font-medium text-green-600">+$25.00</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-white">New click on Annual Membership</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">23 minutes ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
