"use client"

import useSWR from "swr"
import { getDashboardAlerts } from "@/lib/getDashboardData"
import type { Alert } from "@/components/DashboardAlerts"

export function useDashboardAlerts() {
  const { data: alerts = [], isLoading, error } = useSWR<Alert[]>(
    "dashboard-alerts",
    getDashboardAlerts
  )

  return { alerts, loading: isLoading, error }
}