"use client"

import DashboardStats from "@/components/DashboardStats"
import DashboardAlerts from "@/components/DashboardAlerts"
import DashboardChart from "@/components/DashboardChart"
import { useDashboardStats } from "@/hooks/useDashboardStats"
import { useDashboardAlerts } from "@/hooks/useDashboardAlerts"
import { useDashboardChart } from "@/hooks/useDashboardChart"
import { motion } from "framer-motion"

export default function DashboardPage() {
  const { stats, loading: loadingStats } = useDashboardStats()
  const { alerts, loading: loadingAlerts } = useDashboardAlerts()
  const { agents, loading: loadingAgents } = useDashboardChart()

  const loading = loadingStats || loadingAlerts || loadingAgents

  if (loading) {
    return (
      <p className="text-center mt-20 text-gray-700 dark:text-gray-300">
        Carregando dashboard...
      </p>
    )
  }

  console.log("Stats recebidos:", stats)

  return (
    <motion.div
      className="space-y-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Visão Geral</h2>
      <DashboardStats stats={stats} />
      <DashboardAlerts alerts={alerts} />
      <DashboardChart agents={agents} />
    </motion.div>
  )
} 