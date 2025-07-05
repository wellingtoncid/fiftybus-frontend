import { ReactNode } from "react"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-full flex-col">
      {/* Navbar no topo */}
      <Navbar />

      {/* Conteúdo com Sidebar e página */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <main className="flex-1 overflow-auto p-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
          {children}
        </main>
      </div>
    </div>
  )
}

