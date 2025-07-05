import { api } from "@/lib/api"
import { Stat } from "@/components/DashboardStats"
import { Alert } from "@/components/DashboardAlerts"
import { AgentPerformance } from "@/components/DashboardChart"
import { BusFront, CreditCard, Users, AlertTriangle } from "lucide-react"

export async function getDashboardStats(): Promise<Stat[]> {
  const res = await api.get("/admin/dashboard")
  const data = res.data

  return [
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
}

export async function getDashboardAlerts(): Promise<Alert[]> {
  const res = await api.get("/admin/dashboard")
  const data = res.data

  // Aqui estamos simulando os alertas, pois o backend ainda não envia uma lista
  const fakeAlerts: Alert[] = [
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

  return data.problematicChecklistsCount > 0 ? fakeAlerts : []
}

export async function getDashboardAgents(): Promise<AgentPerformance[]> {
  const res = await api.get("/admin/dashboard")
  const data = res.data

  // Os topAgents do backend são retornados como array
  return data.topAgents || []
}
