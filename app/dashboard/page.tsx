"use client"

import { useState } from "react"
import { Sidebar } from "@/components/dashboard/sidebar"
import { TopNav } from "@/components/dashboard/top-nav"
import { Overview } from "@/components/dashboard/overview"
import { Subscriptions } from "@/components/dashboard/subscriptions"
import { Transactions } from "@/components/dashboard/transactions"
import { Payouts } from "@/components/dashboard/payouts"
import { Customers } from "@/components/dashboard/customers"
import { Settings } from "@/components/dashboard/settings"
import { PaymentLinks } from "@/components/dashboard/payment-links"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <Overview />
      case "subscriptions":
        return <Subscriptions />
      case "transactions":
        return <Transactions />
      case "payouts":
        return <Payouts />
      case "payment-links":
        return <PaymentLinks />
      case "customers":
        return <Customers />
      case "settings":
        return <Settings />
      default:
        return <Overview />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex min-h-screen">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <div className="flex-1 flex flex-col min-h-screen lg:ml-0">
          <TopNav setSidebarOpen={setSidebarOpen} />

          <main className="flex-1 p-4 lg:p-8">{renderContent()}</main>
        </div>
      </div>
    </div>
  )
}
