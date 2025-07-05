"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"
import LoginForm from "@/components/LoginForm"

export default function LoginPage() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push("/dashboard")
    }
  }, [user, router])

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Entrar no Fiftybus</h1>
        <LoginForm />
      </div>
    </main>
  )
}
