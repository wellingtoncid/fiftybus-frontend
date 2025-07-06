import { api } from "@/lib/api"
import { Stat } from "@/components/DashboardStats"
import { Alert } from "@/components/DashboardAlerts"
import { AgentPerformance } from "@/components/DashboardChart"
import { BusFront, CreditCard, Users, AlertTriangle } from "lucide-react"

type DashboardData = {
  stats: Stat[]
  alerts: Alert[]
  agents: AgentPerformance[]
}

export async function getDashboardData(): Promise<DashboardData> {
  const res = await api.get("/admin/dashboard")
  const data = res.data

  const stats: Stat[] = [
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
      value: `R$ ${data.totalRevenue.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
      })}`,
      icon: CreditCard,
      color: "bg-purple-500",
    },
    {
      label: "Checklists com Problemas",
      value: data.problematicChecklistsCount,
      icon: AlertTriangle,
      color: "bg-red-500",
    },
  ]

  const alerts: Alert[] = data.problematicChecklistsCount > 0
    ? [
        {
          id: 1,
          trip: "Viagem XPTO",
          issue: "Pneu careca",
          date: "2025-07-03",
        },
        {
          id: 2,
          trip: "Viagem ABC",
          issue: "Freio com desgaste",
          date: "2025-07-01",
        },
      ]
    : []

  const agents: AgentPerformance[] = data.topAgents || []

  return { stats, alerts, agents }
}
