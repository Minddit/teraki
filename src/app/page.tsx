import { DashboardStats } from "@/components/dashboard/stats"
import { ProgressChart } from "@/components/dashboard/progress-chart"
import { RecentCases } from "@/components/dashboard/recent-cases"

export default function Home() {
  const mockStats = {
    totalCases: 25,
    activeCases: 12,
    recoveredAmount: 24500,
    successRate: 75.5
  }

  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      
      <DashboardStats stats={mockStats} />
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <ProgressChart className="lg:col-span-4" />
        <RecentCases className="lg:col-span-3" />
      </div>
    </div>
  )
}
