"use client"

import useSWR from "swr"
import { getDashboardData } from "@/lib/getDashboardData"
import type { Stat } from "@/components/DashboardStats"

export function useDashboardStats() {
  const { data: stats = [], isLoading, error } = useSWR<Stat[]>(
    "dashboard-stats",
    () => getDashboardData().then(data => data.stats)
  )

  return {
    stats: stats,
    loading: isLoading,
    error,
  }
}
