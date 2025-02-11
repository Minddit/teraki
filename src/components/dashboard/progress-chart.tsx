import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { luna: "Ian", noi: 4, inAnaliza: 3, recuperate: 2 },
  { luna: "Feb", noi: 3, inAnaliza: 4, recuperate: 3 },
  { luna: "Mar", noi: 5, inAnaliza: 3, recuperate: 4 },
  { luna: "Apr", noi: 4, inAnaliza: 5, recuperate: 3 },
  { luna: "Mai", noi: 3, inAnaliza: 4, recuperate: 5 },
  { luna: "Iun", noi: 6, inAnaliza: 3, recuperate: 4 },
]

export function ProgressChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Progres Recuperări</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="luna" />
              <YAxis />
              <Tooltip />
              <Bar 
                dataKey="noi" 
                name="Cazuri Noi" 
                stackId="a" 
                fill="#94a3b8" 
              />
              <Bar 
                dataKey="inAnaliza" 
                name="În Analiză" 
                stackId="a" 
                fill="#0ea5e9" 
              />
              <Bar 
                dataKey="recuperate" 
                name="Recuperate" 
                stackId="a" 
                fill="#22c55e" 
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
