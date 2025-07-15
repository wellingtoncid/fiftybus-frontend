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

      {alerts.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">Nenhum alerta encontrado.</p>
      ) : (
        <>
          {/* Cards no mobile */}
          <div className="grid gap-4 sm:hidden">
            {alerts.map(alert => (
              <div
                key={alert.id}
                className="bg-yellow-100 dark:bg-yellow-900/20 p-4 rounded-xl shadow hover:shadow-lg transition"
              >
                <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-100">
                  {alert.issue}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  {alert.trip} — {alert.date}
                </p>
              </div>
            ))}
          </div>

          {/* Tabela em telas maiores */}
          <div className="overflow-x-auto rounded-lg shadow-md hidden sm:block">
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
        </>
      )}
    </section>
  )
}
