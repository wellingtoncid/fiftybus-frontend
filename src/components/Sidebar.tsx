"use client"

import { useAuth } from "@/contexts/AuthContext"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  Bus,
  Shield,
  LogOut,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"

export default function Sidebar() {
  const { user, logout } = useAuth()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const links = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
      roles: ["admin", "manager", "agent"],
    },
    {
      href: "/users",
      label: "Usuários",
      icon: Users,
      roles: ["admin"],
    },
    {
      href: "/trips",
      label: "Viagens",
      icon: Bus,
      roles: ["admin", "manager"],
    },
    {
      href: "/checklist",
      label: "Checklists",
      icon: Shield,
      roles: ["admin", "manager", "agent"],
    },
  ]

  return (
    <>
      {/* Mobile Header */}
      <div className="sm:hidden flex justify-between items-center p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 z-50 relative">
        <button
          onClick={() => setOpen(true)}
          className="text-gray-800 dark:text-white"
        >
          <Menu size={24} />
        </button>
        <span className="text-lg font-bold text-gray-800 dark:text-white">
          Fiftybus
        </span>
        <div className="w-6" />
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 z-50
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          sm:static sm:translate-x-0 sm:h-screen sm:block
        `}
      >
        {/* Mobile Close */}
        <div className="flex sm:hidden items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <span className="text-lg font-bold text-gray-800 dark:text-white">
            Fiftybus
          </span>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-800 dark:text-white"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="space-y-2 p-4">
          {links.map((link) => {
            if (!user?.role || !link.roles.includes(user.role)) return null

            const isActive = pathname === link.href
            const Icon = link.icon

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-md font-medium transition w-full
                  ${
                    isActive
                      ? "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                onClick={() => setOpen(false)} // fecha no mobile ao clicar
              >
                <Icon size={18} />
                {link.label}
              </Link>
            )
          })}

          <button
            onClick={() => {
              logout()
              setOpen(false)
              window.location.href = "/login"
            }}
            className="mt-4 flex items-center gap-2 px-3 py-2 rounded-md text-red-600 hover:bg-red-100 dark:hover:bg-red-800 transition w-full"
          >
            <LogOut size={18} />
            Sair
          </button>
        </nav>
      </aside>
    </>
  )
}
