"use client"

export type Alert = {
  id: number
  trip: string
  issue: string
  date: string
}

export default function DashboardAlerts({ alerts }: { alerts: Alert[] }) {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Alertas de Problemas
      </h2>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
          <thead className="border-b border-gray-300 dark:border-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Viagem</th>
              <th className="px-4 py-2 text-left">Problema</th>
              <th className="px-4 py-2 text-left">Data</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map(alert => (
              <tr
                key={alert.id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <td className="px-4 py-2">{alert.trip}</td>
                <td className="px-4 py-2">{alert.issue}</td>
                <td className="px-4 py-2">{alert.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
