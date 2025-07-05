"use client"
import {
  ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar
} from "recharts"

export type AgentPerformance = {
  name: string
  reservations: number
}

export default function DashboardChart({ agents }: { agents: AgentPerformance[] }) {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Desempenho dos Agentes
      </h2>
      <div className="w-full h-60 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={agents} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis stroke="#8884d8" />
            <Tooltip />
            <Bar dataKey="reservations" fill="#8884d8" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
