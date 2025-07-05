"use client"

import { useEffect, useState } from "react"
import { getDashboardStats } from "@/lib/getDashboardData"
import type { Stat } from "@/components/DashboardStats"

export function useDashboardData() {
  const [stats, setStats] = useState<Stat[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const data = await getDashboardStats()
      setStats(data)
      setLoading(false)
    }

    fetchData()
  }, [])

  return { stats, loading }
}
