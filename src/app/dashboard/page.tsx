"use client"

import { useEffect, useState } from "react"
import DashboardStats, { Stat } from "@/components/DashboardStats"
import DashboardAlerts, { Alert } from "@/components/DashboardAlerts"
import DashboardChart, { AgentPerformance } from "@/components/DashboardChart"
import { BusFront, Users, CreditCard, AlertTriangle } from "lucide-react"
import { getDashboardData } from "@/lib/getDashboardData" 

export default function DashboardPage() {
  const [stats, setStats] = useState<Stat[]>([])
  const [alerts, setAlerts] = useState<Alert[]>([])
  const [agentsPerformance, setAgents] = useState<AgentPerformance[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getDashboardData() // 👈 chamada real

        // Converte o retorno em props esperadas pelos componentes
        setStats([
          {
            label: "Total de Viagens",
            value: data.tripCount,
            icon: BusFront,
            color: "bg-blue-500",
          },
          {
            label: "Total de Reservas",
            value: data.totalBookings,
            icon: Users,
            color: "bg-green-500",
          },
          {
            label: "Receita Total",
            value: `R$ ${data.totalRevenue.toFixed(2)}`,
            icon: CreditCard,
            color: "bg-purple-500",
          },
          {
            label: "Checklists com Problemas",
            value: data.problematicChecklistsCount,
            icon: AlertTriangle,
            color: "bg-red-500",
          },
        ])

        setAlerts([
          {
            id: 1,
            trip: "Checklists",
            issue: "Checklists com problemas detectados",
            date: new Date().toLocaleDateString("pt-BR"),
          },
        ])

        setAgents(data.topAgents || [])
      } catch (error) {
        console.error("Erro ao buscar dados do dashboard:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <p className="text-center mt-20 text-gray-700 dark:text-gray-300">Carregando dashboard...</p>
  }

  return (
    <div className="space-y-8">
      <DashboardStats stats={stats} />
      <DashboardAlerts alerts={alerts} />
      <DashboardChart agents={agentsPerformance} />
    </div>
  )
}