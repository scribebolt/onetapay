"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Users, UserPlus, Mail, Phone, Calendar, CreditCard, MoreHorizontal, Eye, Filter } from "lucide-react"
// Add imports for modals at the top
import { AddCustomerModal } from "./modals"

export function Customers() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const customerStats = [
    {
      title: "Total Customers",
      value: "2,847",
      change: "+12.5%",
      icon: Users,
      color: "text-purple-600",
    },
    {
      title: "Active Subscribers",
      value: "1,247",
      change: "+8.2%",
      icon: UserPlus,
      color: "text-purple-600",
    },
    {
      title: "Average LTV",
      value: "$1,284",
      change: "+15.3%",
      icon: CreditCard,
      color: "text-purple-600",
    },
    {
      title: "Churn Rate",
      value: "2.4%",
      change: "-0.8%",
      icon: Calendar,
      color: "text-red-600",
    },
  ]

  const customers = [
    {
      id: "CUST-001",
      name: "Acme Corporation",
      email: "billing@acme.com",
      phone: "+1 (555) 123-4567",
      status: "active",
      subscription: "Enterprise",
      totalSpent: "$24,567.89",
      lastPayment: "2024-01-15",
      joinDate: "2023-06-15",
      avatar: "AC",
    },
    {
      id: "CUST-002",
      name: "TechStart Inc",
      email: "finance@techstart.com",
      phone: "+1 (555) 234-5678",
      status: "active",
      subscription: "Professional",
      totalSpent: "$8,901.23",
      lastPayment: "2024-01-14",
      joinDate: "2023-08-22",
      avatar: "TI",
    },
    {
      id: "CUST-003",
      name: "Global Solutions",
      email: "payments@global.com",
      phone: "+1 (555) 345-6789",
      status: "active",
      subscription: "Professional",
      totalSpent: "$15,432.10",
      lastPayment: "2024-01-13",
      joinDate: "2023-04-10",
      avatar: "GS",
    },
    {
      id: "CUST-004",
      name: "StartupXYZ",
      email: "admin@startupxyz.com",
      phone: "+1 (555) 456-7890",
      status: "cancelled",
      subscription: "Starter",
      totalSpent: "$1,234.56",
      lastPayment: "2024-01-01",
      joinDate: "2023-11-05",
      avatar: "SX",
    },
    {
      id: "CUST-005",
      name: "Enterprise Ltd",
      email: "billing@enterprise.com",
      phone: "+1 (555) 567-8901",
      status: "active",
      subscription: "Enterprise",
      totalSpent: "$45,678.90",
      lastPayment: "2024-01-12",
      joinDate: "2023-02-28",
      avatar: "EL",
    },
    {
      id: "CUST-006",
      name: "Digital Agency",
      email: "finance@digital.com",
      phone: "+1 (555) 678-9012",
      status: "past_due",
      subscription: "Professional",
      totalSpent: "$6,789.01",
      lastPayment: "2023-12-28",
      joinDate: "2023-09-15",
      avatar: "DA",
    },
  ]

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || customer.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: {
        variant: "default" as const,
        className: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      },
      past_due: {
        variant: "secondary" as const,
        className: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      },
      cancelled: {
        variant: "destructive" as const,
        className: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      },
      trial: {
        variant: "outline" as const,
        className: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      },
    }

    return statusConfig[status as keyof typeof statusConfig] || statusConfig.active
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Customers</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Manage your customer relationships and subscription data.
          </p>
        </div>
        <AddCustomerModal>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <UserPlus className="h-4 w-4 mr-2" />
            Add Customer
          </Button>
        </AddCustomerModal>
      </div>

      {/* Customer Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {customerStats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <p className="text-xs text-green-600 dark:text-green-400">{stat.change} vs last month</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search customers..."
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
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="past_due">Past Due</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
                <SelectItem value="trial">Trial</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Customers List */}
      <Card>
        <CardHeader>
          <CardTitle>All Customers</CardTitle>
          <CardDescription>
            Showing {filteredCustomers.length} of {customers.length} customers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredCustomers.map((customer) => {
              const statusConfig = getStatusBadge(customer.status)
              return (
                <div
                  key={customer.id}
                  className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">{customer.avatar}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{customer.name}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                          <Mail className="h-3 w-3 mr-1" />
                          {customer.email}
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-3 w-3 mr-1" />
                          {customer.phone}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Subscription</p>
                      <p className="font-medium text-gray-900 dark:text-white">{customer.subscription}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Total Spent</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{customer.totalSpent}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Last Payment</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{customer.lastPayment}</p>
                    </div>
                    <Badge variant={statusConfig.variant} className={statusConfig.className}>
                      {customer.status.replace("_", " ")}
                    </Badge>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
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
        </CardContent>
      </Card>
    </div>
  )
}
