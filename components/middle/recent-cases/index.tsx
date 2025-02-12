import { recentCasesData } from "@data/data"
import CaseItem from "./CaseItem"
import Link from "next/link"

export default function RecentCases() {
  return (
    <>
      <div className="mt-6 mb-8">
        <div className="flex flex-col items-center mb-8">
          <Link href="/dashboard/new-case">
            <button className="px-8 py-3.5 text-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 border border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.5),0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7),0_0_50px_rgba(59,130,246,0.5)] hover:border-blue-300 hover:from-blue-600 hover:to-blue-700 font-semibold">
              <i className="bi bi-plus-lg mr-2 text-lg"></i>
              New Case
            </button>
          </Link>
        </div>

        <div className="grid gap-4">
          {recentCasesData.map((caseItem) => (
            <CaseItem key={caseItem.id} data={caseItem} />
          ))}
        </div>
      </div>
    </>
  )
}
