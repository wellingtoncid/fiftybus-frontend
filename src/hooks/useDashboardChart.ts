"use client"

import useSWR from "swr"
import { getDashboardData } from "@/lib/getDashboardData"
import type { AgentPerformance } from "@/components/DashboardChart"

export function useDashboardChart() {
  const { data: agents = [], isLoading, error } = useSWR<AgentPerformance[]>(
    "dashboard-agents",
    () => getDashboardData().then(data => data.agents)
  )

  return { agents, loading: isLoading, error }
}
