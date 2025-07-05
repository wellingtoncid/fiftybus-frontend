"use client"

import useSWR from "swr"
import { getDashboardAgents } from "@/lib/getDashboardData"
import type { AgentPerformance } from "@/components/DashboardChart"

export function useDashboardChart() {
  const { data: agents = [], isLoading, error } = useSWR<AgentPerformance[]>(
    "dashboard-agents",
    getDashboardAgents
  )

  return { agents, loading: isLoading, error }
}
