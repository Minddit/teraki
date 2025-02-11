import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard - Crypto Recovery",
  description: "Vizualizare și gestionare cazuri de recuperare crypto",
}

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Card-uri pentru statistici */}
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-medium">Total Cazuri Active</h3>
            </div>
            <div className="text-2xl font-bold">12</div>
          </div>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-medium">Fonduri Recuperate</h3>
            </div>
            <div className="text-2xl font-bold">$24,500</div>
          </div>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-medium">Rata de Succes</h3>
            </div>
            <div className="text-2xl font-bold">75%</div>
          </div>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-medium">Cazuri în Analiză</h3>
            </div>
            <div className="text-2xl font-bold">5</div>
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          {/* Grafic pentru progres - vom adăuga aici */}
        </div>
        <div className="col-span-3">
          {/* Listă cu cazuri recente - vom adăuga aici */}
        </div>
      </div>
    </div>
  )
}
