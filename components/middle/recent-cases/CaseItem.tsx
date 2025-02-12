import { RecentCaseType } from "@/types/types"
import Link from "next/link"

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High': return 'bg-red-500'
    case 'Medium': return 'bg-yellow-500'
    case 'Low': return 'bg-green-500'
    default: return 'bg-gray-500'
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'New': return 'text-blue-500'
    case 'In Analysis': return 'text-yellow-500'
    case 'Recovery in Progress': return 'text-purple-500'
    case 'Completed': return 'text-green-500'
    case 'Rejected': return 'text-red-500'
    default: return 'text-gray-500'
  }
}

export default function CaseItem({ data }: { data: RecentCaseType }) {
  const { id, title, date, status, priority, assignee } = data
  return (
    <Link href={`/requests/${id}`}>
      <div className="p-4 bg-colorWhite dark:bg-colorWhite_DM rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <span className={`${getPriorityColor(priority)} w-2 h-2 rounded-full`}></span>
            <h3 className="font-medium">{title}</h3>
          </div>
          <span className="text-sm text-colorGrayDark dark:text-colorGrayDark_DM">{date}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className={`${getStatusColor(status)} text-sm font-medium`}>{status}</span>
            <span className="text-sm text-colorGrayDark dark:text-colorGrayDark_DM">{assignee}</span>
          </div>
          <i className="bi bi-chevron-right text-colorGrayDark dark:text-colorGrayDark_DM"></i>
        </div>
      </div>
    </Link>
  )
}
