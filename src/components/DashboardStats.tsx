import { motion } from "framer-motion"

export type Stat = {
  label: string
  value: number | string
  icon: React.ComponentType<{ size?: number }>
  color: string
}

export default function DashboardStats({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="p-4 rounded-xl shadow-md bg-white dark:bg-gray-800 flex items-center gap-4"
        >
          <div className={`p-3 rounded-full text-white ${stat.color}`}>
            <stat.icon size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
