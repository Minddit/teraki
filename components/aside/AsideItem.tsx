import { menuItemType } from "@/types/types"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function AsideBarItem({ title, iconName, url }: menuItemType) {
  const [isSelected, SetIsSelected] = useState<string>("init")
  const router = useRouter()

  useEffect(() => {
    SetIsSelected(router.pathname.slice(1).toString())
  }, [router.pathname])

  const isActive = url.slice(1) === isSelected

  return (
    <>
      <Link href={url}>
        <a
          href="#"
          className={`flex items-center gap-4 h-[4rem] relative group px-6 rounded-lg mx-2 transition-all duration-300 ${isActive 
            ? 'bg-gray-900 shadow-[0_0_15px_rgba(0,0,0,0.3)]' 
            : 'hover:bg-gray-900/50'}`}>
          <div className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${isActive 
            ? 'bg-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.3)]' 
            : 'bg-gray-800 group-hover:bg-blue-500/10'}`}>
            <i className={`bi ${iconName} text-2xl transition-all duration-300 ${isActive 
              ? 'text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]' 
              : 'text-gray-400 group-hover:text-blue-400'}`}></i>
          </div>

          <div className="space-y-1">
            <h4 className={`text-lg font-semibold tracking-wide transition-all duration-300 ${isActive
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]'
              : 'text-gray-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-green-400'}`}>
              {title}
            </h4>
          </div>
        </a>
      </Link>
    </>
  )
}
