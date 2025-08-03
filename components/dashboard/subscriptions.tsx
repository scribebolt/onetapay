"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  TrendingUp,
  Users,
  DollarSign,
  UserMinus,
  Plus,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"

// Add imports for modals at the top
import { AddPlanModal } from "./modals"

export function Subscriptions() {
  const subscriptionStats = [
    {
      title: "Monthly Recurring Revenue",
      value: "$45,231",
      change: "+15.3%",
      changeType: "positive",
      icon: DollarSign,
      description: "vs last month",
    },
    {
      title: "Active Subscribers",
      value: "1,247",
      change: "+8.2%",
      changeType: "positive",
      icon: Users,
      description: "vs last month",
    },
    {
      title: "Churn Rate",
      value: "2.4%",
      change: "-0.8%",
      changeType: "positive",
      icon: UserMinus,
      description: "vs last month",
    },
    {
      title: "Average Revenue Per User",
      value: "$36.28",
      change: "+4.1%",
      changeType: "positive",
      icon: TrendingUp,
      description: "vs last month",
    },
  ]

  const subscriptionPlans = [
    {
      name: "Starter",
      price: "$29",
      subscribers: 423,
      revenue: "$12,267",
      growth: "+12%",
      color: "bg-blue-500",
    },
    {
      name: "Professional",
      price: "$79",
      subscribers: 651,
      revenue: "$51,429",
      growth: "+18%",
      color: "bg-green-500",
    },
    {
      name: "Enterprise",
      price: "$199",
      subscribers: 173,
      revenue: "$34,427",
      growth: "+25%",
      color: "bg-purple-500",
    },
  ]

  const recentSubscriptions = [
    {
      customer: "Acme Corp",
      plan: "Enterprise",
      status: "active",
      startDate: "2024-01-15",
      nextBilling: "2024-02-15",
      amount: "$199.00",
    },
    {
      customer: "TechStart Inc",
      plan: "Professional",
      status: "active",
      startDate: "2024-01-14",
      nextBilling: "2024-02-14",
      amount: "$79.00",
    },
    {
      customer: "StartupXYZ",
      plan: "Starter",
      status: "cancelled",
      startDate: "2024-01-10",
      nextBilling: "-",
      amount: "$29.00",
    },
    {
      customer: "Global Solutions",
      plan: "Professional",
      status: "past_due",
      startDate: "2024-01-08",
      nextBilling: "2024-01-16",
      amount: "$79.00",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Subscriptions</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Manage your subscription plans and track recurring revenue.
          </p>
        </div>
        {/* Replace the "Add Plan" button with the modal */}
        <AddPlanModal>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Plan
          </Button>
        </AddPlanModal>
      </div>

      {/* Subscription Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {subscriptionStats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="flex items-center space-x-2">
                  <div
                    className={`flex items-center text-sm ${
                      stat.changeType === "positive"
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {stat.changeType === "positive" ? (
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3 mr-1" />
                    )}
                    {stat.change}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{stat.description}</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Subscription Plans */}
      <Card>
        <CardHeader>
          <CardTitle>Subscription Plans</CardTitle>
          <CardDescription>Performance overview of your subscription tiers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subscriptionPlans.map((plan, index) => (
              <div key={index} className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${plan.color}`} />
                    <h3 className="font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
                  </div>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Subscribers</span>
                    <span className="font-medium text-gray-900 dark:text-white">{plan.subscribers}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Revenue</span>
                    <span className="font-medium text-gray-900 dark:text-white">{plan.revenue}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Growth</span>
                    <span className="font-medium text-green-600 dark:text-green-400">{plan.growth}</span>
                  </div>
                </div>

                <Progress value={75} className="mt-4" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Subscriptions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Subscription Activity</CardTitle>
          <CardDescription>Latest subscription changes and updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentSubscriptions.map((subscription, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{subscription.customer}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {subscription.plan} Plan • Started {subscription.startDate}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-semibold text-gray-900 dark:text-white">{subscription.amount}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Next: {subscription.nextBilling}</p>
                  </div>
                  <Badge
                    variant={
                      subscription.status === "active"
                        ? "default"
                        : subscription.status === "past_due"
                          ? "secondary"
                          : "destructive"
                    }
                    className={
                      subscription.status === "active"
                        ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                        : subscription.status === "past_due"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                    }
                  >
                    {subscription.status.replace("_", " ")}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
