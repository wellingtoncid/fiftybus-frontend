"use client"

import { useEffect, useState } from "react"
import DashboardStats, { Stat } from "@/components/DashboardStats"
import DashboardAlerts, { Alert } from "@/components/DashboardAlerts"
import DashboardChart, { AgentPerformance } from "@/components/DashboardChart"
import { getDashboardData } from "@/lib/getDashboardData"

export default function DashboardPage() {
  const [stats, setStats] = useState<Stat[]>([])
  const [alerts, setAlerts] = useState<Alert[]>([])
  const [agents, setAgents] = useState<AgentPerformance[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const { stats, alerts, agents } = await getDashboardData()
        setStats(stats)
        setAlerts(alerts)
        setAgents(agents)
      } catch (error) {
        console.error("Erro ao buscar dados do dashboard:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <p className="text-center mt-20">Carregando dashboard...</p>
  }

  return (
    <div className="space-y-8">
      <DashboardStats stats={stats} />
      <DashboardAlerts alerts={alerts} />
      <DashboardChart agents={agents} />
    </div>
  )
}
