import { RecoveryCase } from "@/types/case"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatCurrency } from "@/lib/utils"

const mockCases: Partial<RecoveryCase>[] = [
  {
    id: "1",
    status: "new",
    amount: 15000,
    currency: "USD",
    createdAt: "2024-02-11T14:30:00Z",
  },
  {
    id: "2",
    status: "analyzing",
    amount: 8500,
    currency: "USD",
    createdAt: "2024-02-10T09:15:00Z",
  },
  {
    id: "3",
    status: "recovering",
    amount: 12000,
    currency: "USD",
    createdAt: "2024-02-09T16:45:00Z",
  },
  {
    id: "4",
    status: "completed",
    amount: 5000,
    currency: "USD",
    createdAt: "2024-02-08T11:20:00Z",
  },
]

function getStatusColor(status: string): string {
  switch (status) {
    case "new":
      return "bg-gray-500"
    case "analyzing":
      return "bg-yellow-500"
    case "recovering":
      return "bg-blue-500"
    case "completed":
      return "bg-green-500"
    case "rejected":
      return "bg-red-500"
    default:
      return "bg-gray-500"
  }
}

function getStatusText(status: string): string {
  switch (status) {
    case "new":
      return "Nou"
    case "analyzing":
      return "În Analiză"
    case "recovering":
      return "În Recuperare"
    case "completed":
      return "Completat"
    case "rejected":
      return "Respins"
    default:
      return status
  }
}

export function RecentCases() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cazuri Recente</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {mockCases.map((caz) => (
            <div key={caz.id} className="flex items-center">
              <div className={`${getStatusColor(caz.status || "")} h-2 w-2 rounded-full`} />
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Caz #{caz.id}
                </p>
                <p className="text-sm text-muted-foreground">
                  {getStatusText(caz.status || "")}
                </p>
              </div>
              <div className="ml-auto font-medium">
                {formatCurrency(caz.amount || 0)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
