"use client"

import ThemeToggle from "@/components/ThemeToggle"
import { useAuth } from "@/contexts/AuthContext"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  return (
    <header className="w-full px-4 py-3 flex items-center justify-between bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">Fiftybus</h1>

      <div className="flex items-center gap-4">
        {/* Tema */}
        <ThemeToggle />

        {/* Usuário logado */}
        {user && (
          <span className="text-sm text-gray-700 dark:text-gray-300">
            {user.name}
          </span>
        )}

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="text-sm px-3 py-1 rounded bg-red-600 hover:bg-red-700 text-white"
        >
          Sair
        </button>
      </div>
    </header>
  )
}
  