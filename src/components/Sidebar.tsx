"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useAuth } from "@/contexts/AuthContext"

const navItemsByRole = {
  admin: [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/users", label: "Usuários" },
    { href: "/reports", label: "Relatórios" },
  ],
  manager: [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/routes", label: "Rotas" },
    { href: "/alerts", label: "Alertas" },
  ],
  agent: [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/reservations", label: "Reservas" },
    { href: "/trips", label: "Minhas Viagens" },
  ],
  passenger: [
    { href: "/dashboard", label: "Minhas Reservas" },
  ],
  driver: [
    { href: "/dashboard", label: "Minhas Viagens" },
    { href: "/checklists", label: "Checklists" },
  ],
} as const

export default function Sidebar() {
  const pathname = usePathname()
  const { user } = useAuth()

  const role = user?.role ?? "passenger"
  const navItems = navItemsByRole[role] || []

  return (
    <aside className="w-64 h-full border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
      <nav className="flex flex-col gap-2">
        {navItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition",
              pathname === href
                ? "bg-gray-200 dark:bg-gray-700 font-semibold"
                : "text-gray-700 dark:text-gray-300"
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
