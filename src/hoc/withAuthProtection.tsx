import { useAuth } from "@/contexts/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import type { ComponentType, JSX } from "react"

export function withAuthProtection<P extends object>(
  WrappedComponent: ComponentType<P>
): ComponentType<P> {
  return function ProtectedComponent(props: P): JSX.Element | null {
    const { user, loading } = useAuth()
    const router = useRouter()

    useEffect(() => {
      if (!loading && !user) {
        router.push("/login")
      }
    }, [loading, user, router])

    if (loading || !user) return null

    return <WrappedComponent {...props} />
  }
}
