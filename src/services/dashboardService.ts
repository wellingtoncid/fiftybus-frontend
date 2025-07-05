import { api } from "@/lib/api"
import { Stat } from "@/components/DashboardStats"

export async function getDashboardStats(): Promise<Stat[]> {
  const res = await api.get("/admin-reports/stats")
  return res.data.stats
}
