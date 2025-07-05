import useSWR from "swr"
import { getDashboardStats } from "@/lib/getDashboardData"

export function useDashboardStats() {
  const { data, error, isLoading } = useSWR("dashboard-stats", getDashboardStats)

  return {
    stats: data || [],
    isLoading,
    loading: isLoading,
    error,
  }
}