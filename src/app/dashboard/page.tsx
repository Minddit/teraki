import { DashboardStats } from "@/components/dashboard/stats"
import { ProgressChart } from "@/components/dashboard/progress-chart"
import { RecentCases } from "@/components/dashboard/recent-cases"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard - Crypto Recovery",
  description: "Vizualizare și gestionare cazuri de recuperare crypto",
}

export default function DashboardPage() {
  // Vom înlocui asta cu date reale mai târziu
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
        <div className="col-span-4">
          <ProgressChart />
        </div>
        <div className="col-span-3">
          <RecentCases />
        </div>
      </div>
    </div>
  )
}
