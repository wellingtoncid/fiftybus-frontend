"use client"

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts"
import { motion } from "framer-motion"

export type AgentPerformance = {
  name: string
  totalBookings: number
  noShowRate: number
}

type Props = {
  agents: AgentPerformance[]
}

export default function DashboardChart({ agents }: Props) {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Desempenho dos Agentes
      </h2>

      {agents.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">Nenhum dado disponível.</p>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-xl bg-white dark:bg-gray-800 p-4 shadow"
        >
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={agents}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1f2937",
                  borderRadius: "0.5rem",
                  color: "#fff",
                  border: "none",
                }}
              />
              <Bar dataKey="totalBookings" fill="#3b82f6" name="Reservas" />
              <Bar dataKey="noShowRate" fill="#ef4444" name="No-Show (%)" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      )}
    </section>
  )
}