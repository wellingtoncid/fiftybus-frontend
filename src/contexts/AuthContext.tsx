"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import axios from "axios"
import Cookies from "js-cookie"

interface User {
  id: string
  name: string
  email: string
  role: "admin" | "manager" | "agent" | "passenger" | "driver"
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  loading: boolean
}

type JwtPayload = {
  id: string
  name: string
  email: string
  role: User["role"]
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

function parseJwt(token: string): JwtPayload | null {
  try {
    const base64Url = token.split(".")[1]
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/")
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(c => `%${("00" + c.charCodeAt(0).toString(16)).slice(-2)}`)
        .join("")
    )
    return JSON.parse(jsonPayload)
  } catch {
    return null
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      const userData = parseJwt(token)
      if (userData && userData.id) {
        setUser(userData)
      } else {
        logout()
      }
    }
      setLoading(false)
  }, [])

  async function login(email: string, password: string) {
    setLoading(true)
    try {
      const response = await axios.post("/api/login", { email, password })
      const { token, user } = response.data

      localStorage.setItem("token", token)
      Cookies.set("token", token)

      setUser(user)
    } catch (error) {
      console.error("Erro ao fazer login:", error)
      throw new Error("Erro no login")
    } finally {
      setLoading(false)
    }
  }

  function logout() {
    localStorage.removeItem("token")
    Cookies.remove("token")
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within AuthProvider")
  return context
}
