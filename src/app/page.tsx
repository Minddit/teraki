import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            <span className="block">Crypto Recovery</span>
            <span className="block text-blue-500">Get Your Assets Back</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Professional cryptocurrency recovery services for lost or stolen digital assets.
            Our expert team helps you recover your valuable crypto investments.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link 
              href="/dashboard" 
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg"
            >
              Go to Dashboard
            </Link>
            <Link
              href="/dashboard/cases"
              className="px-8 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white md:text-lg"
            >
              View Cases
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
=======
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
>>>>>>> 933077a4f7bb85d5ad558f268b6adf2676979ce9
}
