<<<<<<< HEAD
'use client';

import { Title, Text } from '@tremor/react';
import StatusCard from '@/components/dashboard/StatusCard';
import RecentCases from '@/components/dashboard/RecentCases';

const statusData = [
  { 
    title: 'New Cases', 
    count: 5, 
    status: 'New',
    trend: { value: 2, text: '+2 from last week' }
  },
  { 
    title: 'In Analysis', 
    count: 8, 
    status: 'In Analysis',
    trend: { value: 1, text: '+1 from last week' }
  },
  { 
    title: 'Active Recovery', 
    count: 12, 
    status: 'Recovery in Progress',
    trend: { value: 3, text: '+3 from last week' }
  },
  { 
    title: 'Completed', 
    count: 25, 
    status: 'Completed',
    trend: { value: 5, text: '+5 from last week' }
  },
  { 
    title: 'Rejected', 
    count: 3, 
    status: 'Rejected',
    trend: { value: -1, text: '-1 from last week' }
  },
] as const;

export default function DashboardPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <div className="mb-8">
        <Title>Recovery Dashboard</Title>
        <Text>Monitor your crypto recovery cases and their progress</Text>
      </div>
      
      {/* Status Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
        {statusData.map((data) => (
          <StatusCard
            key={data.status}
            title={data.title}
            count={data.count}
            status={data.status}
            trend={data.trend}
          />
        ))}
      </div>
      
      {/* Recent Cases */}
      <div className="mt-6">
        <RecentCases />
      </div>
    </main>
  );
=======
import { DashboardStats } from "@/components/dashboard/stats"
import { ProgressChart } from "@/components/dashboard/progress-chart"
import { RecentCases } from "@/components/dashboard/recent-cases"

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
>>>>>>> 933077a4f7bb85d5ad558f268b6adf2676979ce9
}
