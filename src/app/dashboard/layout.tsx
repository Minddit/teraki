import { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Crypto Recovery Dashboard",
  description: "Dashboard pentru recuperare fonduri crypto trimise către scameri",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex min-h-screen">
        {/* Sidebar - vom adăuga aici */}
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          {/* Sidebar content */}
        </div>
        
        <div className="flex-1">
          {/* Header - vom adăuga aici */}
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
            <div className="container flex h-14 items-center">
              {/* Header content */}
            </div>
          </header>
          
          <main className="flex-1">
            <div className="container grid gap-12 py-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
