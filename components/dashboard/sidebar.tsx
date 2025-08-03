"use client"

import {
  X,
  CreditCard,
  BarChart3,
  Users,
  Settings,
  DollarSign,
  Repeat,
  LinkIcon,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export function Sidebar({
  activeTab,
  setActiveTab,
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) {
  const [collapsed, setCollapsed] = useState(true)

  const menuItems = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "transactions", label: "Transactions", icon: CreditCard },
    { id: "subscriptions", label: "Subscriptions", icon: Repeat },
    { id: "payouts", label: "Payouts", icon: DollarSign },
    { id: "payment-links", label: "Payment Links", icon: LinkIcon },
    { id: "customers", label: "Customers", icon: Users },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed lg:sticky top-0 left-0 h-screen bg-white border-r border-gray-100 shadow-md z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } ${collapsed ? "w-20" : "w-64"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-5 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-yellow-400 rounded-xl shadow-inner flex items-center justify-center">
              <CreditCard className="h-6 w-6 text-white drop-shadow-md" />
            </div>
            {!collapsed && (
              <span className="text-xl font-bold tracking-tight text-gray-800">
                Onetapay
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="hidden lg:flex"
              onClick={() => setCollapsed(!collapsed)}
            >
              {collapsed ? (
                <ChevronsRight className="h-6 w-6 text-gray-500" />
              ) : (
                <ChevronsLeft className="h-6 w-6 text-gray-500" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-6 w-6 text-gray-500" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-6 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.id
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id)
                  setSidebarOpen(false)
                }}
                title={collapsed ? item.label : ""}
                className={`flex items-center w-full gap-4 px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-purple-100 to-yellow-50 text-purple-800 border-l-4 border-purple-600 shadow-sm"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                } ${collapsed ? "justify-center px-2" : ""}`}
              >
                <span className="inline-flex items-center justify-center w-9 h-9 bg-white shadow-md rounded-lg">
                  <Icon className="h-5 w-5 text-purple-600" />
                </span>
                {!collapsed && <span className="text-[16px]">{item.label}</span>}
              </button>
            )
          })}
        </nav>

        {!collapsed && (
          <div className="mt-auto px-4 pb-6 text-xs text-gray-400 border-t pt-4 text-center">
            <p>© 2024 Onetapay</p>
            <p>Version 2.1.0</p>
          </div>
        )}
      </div>
    </>
  )
}
