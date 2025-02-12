import Image from "next/image"
import { cardType } from "@/types/types"

export default function CardItem({ data }: { data: cardType }) {
  const { title_icon, title, status, count, trend, color } = data
  return (
    <>
      <div className={`card p-8 rounded-3xl text-white flex flex-col justify-between transition-all duration-500 ease-out h-[15rem] bg-${color}-500/95 backdrop-blur-xl shadow-[0_0_50px_rgba(34,197,94,0.3),0_0_100px_rgba(34,197,94,0.4),0_0_150px_rgba(34,197,94,0.3),0_0_200px_rgba(34,197,94,0.2)] hover:shadow-[0_0_70px_rgba(34,197,94,0.4),0_0_140px_rgba(34,197,94,0.5),0_0_210px_rgba(34,197,94,0.4),0_0_280px_rgba(34,197,94,0.3)] hover:scale-[1.02] border-2 border-green-400/40 hover:border-green-400/60`}>
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <span className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 h-[3.5rem] w-[3.5rem] flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.4),0_0_60px_rgba(34,197,94,0.3)] group-hover:shadow-[0_0_40px_rgba(34,197,94,0.5),0_0_80px_rgba(34,197,94,0.4)] border-2 border-green-400/40 group-hover:border-green-400/60 transition-all duration-500">
              <i className={`${title_icon} text-2xl drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]`}></i>
            </span>
            <div>
              <h2 className="font-bold text-2xl tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{title}</h2>
              <span className="text-base text-white/90 font-medium">{status}</span>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-baseline">
            <h2 className="text-5xl font-bold tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">{count}</h2>
            <span className="ml-3 text-lg font-medium text-white/90">cases</span>
          </div>
          {trend && (
            <div className={`mt-3 text-lg font-medium ${trend.value >= 0 ? 'text-green-100' : 'text-red-100'} drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]`}>
              {trend.value >= 0 ? '↑' : '↓'} {trend.text}
            </div>
          )}
        </div>

        <div className="mt-6 h-2.5 bg-white/20 rounded-full overflow-hidden shadow-[0_0_20px_rgba(34,197,94,0.3),0_0_40px_rgba(34,197,94,0.2)]">
          <div 
            className="h-full bg-green-400/60 rounded-full shadow-[0_0_30px_rgba(34,197,94,0.5),0_0_60px_rgba(34,197,94,0.4)]" 
            style={{ width: `${(count / 100) * 100}%` }}
          />
        </div>
      </div>
    </>
  )
}
