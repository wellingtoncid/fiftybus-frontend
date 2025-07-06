"use client"

import DashboardStats from "@/components/DashboardStats"
import DashboardAlerts from "@/components/DashboardAlerts"
import DashboardChart from "@/components/DashboardChart"
import { useDashboardStats } from "@/hooks/useDashboardStats"
import { useDashboardAlerts } from "@/hooks/useDashboardAlerts"
import { useDashboardChart } from "@/hooks/useDashboardChart"

export default function DashboardPage() {
  const { stats, loading: loadingStats } = useDashboardStats()
  const { alerts, loading: loadingAlerts } = useDashboardAlerts()
  const { agents, loading: loadingAgents } = useDashboardChart()

  const loading = loadingStats || loadingAlerts || loadingAgents

  if (loading) {
    return (
      <p className="text-center mt-20 text-gray-700 dark:text-gray-300">
        Carregando dashboard...
      </p>
    )
  }

  console.log("Stats recebidos:", stats)

  return (
    <div className="space-y-8">
      <DashboardStats stats={stats} />
      <DashboardAlerts alerts={alerts} />
      <DashboardChart agents={agents} />
    </div>
  )
}