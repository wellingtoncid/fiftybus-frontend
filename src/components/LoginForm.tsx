"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"

export default function LoginForm() {
  const { login } = useAuth()
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    try {
      await login(email, password)
      router.push("/dashboard")
    } catch {
      setError("Credenciais inválidas")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      <div>
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          className="w-full p-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Senha</label>
        <input
          type="password"
          className="w-full p-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Entrar
      </button>
    </form>
  )
}
