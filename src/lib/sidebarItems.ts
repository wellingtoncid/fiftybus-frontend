export type Role = "admin" | "manager" | "agent" | "passenger" | "driver"

export type SidebarItem = {
  label: string
  href: string
  roles: Role[]
}

export const sidebarItems: SidebarItem[] = [
  { label: "Dashboard", href: "/dashboard", roles: ["admin", "manager", "agent"] },
  { label: "Viagens", href: "/trips", roles: ["admin", "manager"] },
  { label: "Reservas", href: "/bookings", roles: ["admin", "manager", "agent"] },
  { label: "Usuários", href: "/users", roles: ["admin", "manager"] },
  { label: "Veículos", href: "/vehicles", roles: ["admin"] },
  { label: "Checklists", href: "/checklists", roles: ["admin", "manager"] },
  { label: "Relatórios", href: "/reports", roles: ["admin", "manager"] },
]
