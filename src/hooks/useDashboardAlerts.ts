"use client"

import useSWR from "swr"
import { getDashboardData } from "@/lib/getDashboardData"
import type { Alert } from "@/components/DashboardAlerts"

export function useDashboardAlerts() {
  const { data: alerts = [], isLoading, error } = useSWR<Alert[]>(
    "dashboard-alerts",
    async () => {
      const data = await getDashboardData();
      return data.alerts as Alert[];
    }
  )

  return { alerts, loading: isLoading, error }
}