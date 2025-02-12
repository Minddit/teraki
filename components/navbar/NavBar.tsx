import { useDrawer } from "@hooks/AsideBarHook"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import PopoverMenu from "./PopoverMenu"

// Definim keyframes pentru animația de scroll
const scrollKeyframes = `
@keyframes scroll {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
`;

export default function NavBar() {
  const [currentTheme, setCurrentTheme] = useState<string>("")
  // get drawer contex
  const drawer = useDrawer()

  useEffect(() => {
    if (localStorage.theme && localStorage.theme === "light") {
      setCurrentTheme("light")
    } else {
      setCurrentTheme("dark")
    }
  }, [])

  // update theme
  const setTheme = (theme: string) => {
    document.documentElement.classList.add(`${theme}`)
    document.documentElement.classList.remove(
      `${theme === "dark" ? "light" : "dark"}`
    )

    setCurrentTheme(`${theme}`)
    localStorage.theme = `${theme}`
  }

  //handle displaying drawer
  const showAsideBarMenu = () => {
    drawer.setMenuStatus((state) => {
      return !state
    })
  }

  return (
    <>
      <style>{scrollKeyframes}</style>
      <nav className="w-screen bg-colorWhite dark:bg-colorWhite_DM py-[0.5rem] sticky top-0 z-[3]">
        <div className="flex justify-between items-center w-[96%] m-auto">
          {/** logo */}
          <Link href="/">
            <Image
              className="cursor-pointer"
              width={40}
              height={25}
              src="/images/logo.png"
              alt="logo"
            />
          </Link>
          {/* Breaking News Ticker */}
          <div className="relative bg-[#111] rounded-lg w-[50vw] overflow-hidden">
            <div className="flex items-center gap-2 py-2 px-4 whitespace-nowrap animate-[scroll_30s_linear_infinite]">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                <span className="text-red-500 font-bold">LIVE</span>
              </span>
              <span className="text-[#40A2FF] font-semibold mx-4">
                Recovered 5.2 BTC from Scammer Wallet
              </span>
              <span className="text-green-400 mx-4">
                150 ETH traced to mixing service
              </span>
              <span className="text-[#40A2FF] mx-4">
                New recovery method discovered
              </span>
              <span className="text-green-400 mx-4">
                Success rate increased to 85%
              </span>
              <span className="text-[#40A2FF] mx-4">
                Real-time blockchain monitoring active
              </span>
            </div>
          </div>
          {/* Right side controls */}
          <div className="flex items-center justify-between gap-8">
            {/** toggle theme buttons */}
            <div className="flex bg-colorLight dark:bg-colorLight_DM w-[5rem] h-[2rem] rounded-full cursor-pointer">
              <i
                className={`bi bi-brightness-high-fill text-sm w-1/2 h-full flex items-center justify-center ${
                  currentTheme === "light" ? "active-theme" : ""
                }`}
                onClick={() => {
                  setTheme("light");
                }}></i>
              <i
                className={`bi bi-moon-fill text-sm w-1/2 h-full flex items-center justify-center ${
                  currentTheme === "dark" ? "active-theme" : ""
                }`}
                onClick={() => {
                  setTheme("dark");
                }}></i>
            </div>
            {/** Auth buttons */}
            <div className="flex items-center gap-4">
              <Link href="/auth/login">
                <a className="text-gray-700 dark:text-gray-300 hover:text-[#00e5cc] transition-colors font-medium">
                  Login
                </a>
              </Link>
              <Link href="/auth/register">
                <a className="bg-[#00e5cc] text-black px-6 py-2 rounded-lg hover:bg-[#00d1ba] transition-colors font-medium">
                  Register
                </a>
              </Link>
            </div>
            {/** button to display aside bar menu */}
            <button className="lg:hidden" onClick={showAsideBarMenu}>
              <i
                className={`bi bi-list w-1/2 h-full flex items-center justify-center text-lg`}></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
