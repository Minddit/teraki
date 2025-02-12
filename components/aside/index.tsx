import { menuItemsData } from "@data/data"
import { useDrawer } from "@hooks/AsideBarHook"
import AsideBarItem from "./AsideItem"
import Link from "next/link"

export default function Aside() {
  // get drawer context
  const drawer = useDrawer()

  // display aside bar menu
  const hideAsideBarMenu = () => {
    drawer.setMenuStatus((state) => {
      return !state
    })
  }
  return (
    <>
      <aside
        className={`lg:flex bg-colorLight dark:bg-colorLight_DM flex-col lg:left-[0%] left-[-100%] lg:z-[1] lg:h-[98vh] lg:w-[inherit] pb-6 z-[5] w-[22rem] h-screen fixed top-0 lg:sticky lg:top-[4.5rem] ${
          drawer.isopen ? "left-[0%]" : ""
        } overflow-y-auto lg:sticky lg:top-0 transition-all duration-300 ease-out`}>

        <button className="lg:hidden w-[3rem] h-[3rem] absolute top-2 right-2 z-[6]" onClick={hideAsideBarMenu}>
          <i className="bi bi-x text-3xl"> </i>
        </button>

        <div className="px-6 py-4 mb-4">
          <Link href="/dashboard">
            <h2 className="text-3xl font-extrabold text-[#40A2FF] drop-shadow-[0_0_7px_rgba(64,162,255,0.9),0_0_15px_rgba(64,162,255,0.8),0_0_25px_rgba(64,162,255,0.7),0_0_35px_rgba(64,162,255,0.6)] animate-pulse tracking-wide cursor-pointer hover:text-[#5BB2FF] transition-colors">DASHBOARD</h2>
          </Link>
        </div>

        <div>
          {/** get all menu items and display*/}
          {menuItemsData.map((item, __) => (
            <AsideBarItem
              key={__}
              title={item.title}
              iconName={item.iconName}
              url={item.url}
            />
          ))}
        </div>

        <div className="space-y-6 mt-8">
          {/* Updates Card */}
          <div className="bg-gray-900 rounded-xl text-center p-6 mx-4 lg:mx-2 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
            <div className="w-14 h-14 mx-auto bg-blue-500/20 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <i className="bi bi-arrow-repeat text-3xl text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"></i>
            </div>
            <h4 className="mt-4 mb-3 text-5xl font-bold text-[#40A2FF] drop-shadow-[0_0_10px_rgba(64,162,255,0.8)] tracking-wider">10%</h4>
            <p className="text-gray-300 text-lg leading-relaxed drop-shadow-[0_0_5px_rgba(64,162,255,0.3)]">
              With just 10% of the amount you can recover the entire amount!
            </p>
            <Link href="/dashboard/new-case">
              <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white text-lg font-medium rounded-xl py-4 mt-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:from-blue-600 hover:to-green-600">
                Start Recovery
              </button>
            </Link>
          </div>

          {/* New Card */}
          <div className="bg-gray-900 rounded-xl text-center p-6 mx-4 lg:mx-2 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
            <div className="w-14 h-14 mx-auto bg-purple-500/20 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              <i className="bi bi-shield-check text-3xl text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"></i>
            </div>
            <h4 className="mt-4 mb-3 text-5xl font-bold text-[#B14EFF] drop-shadow-[0_0_10px_rgba(177,78,255,0.8)] tracking-wider">99%</h4>
            <p className="text-gray-300 text-lg leading-relaxed drop-shadow-[0_0_5px_rgba(177,78,255,0.3)]">
              Our success rate is above all crypto recovery companies!
            </p>
            <Link href="/dashboard/new-case">
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-medium rounded-xl py-4 mt-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:from-purple-600 hover:to-pink-600">
                Start Recovery
              </button>
            </Link>
          </div>
        </div>

      </aside>
    </>
  )
}