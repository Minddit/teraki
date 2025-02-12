import Cards from "./cards"
import CryptoFlow from "./chart"
import RecentCases from "./recent-cases"
import RecoverySteps from "./recovery-steps"

export default function MiddleSide() {
  return (
    <>
      <section>
        <div className="flex items-center gap-3">
          <h1 className="font-bold text-2xl">Overview</h1>
          <input 
            className="p-[0.5rem_2rem] rounded-lg bg-colorWhite dark:bg-colorWhite_DM text-colorGrayDark outline-none" 
            type="date" 
            defaultValue={new Date().toISOString().split('T')[0]}
          />
        </div>

        {/* Status Cards */}
        <Cards />
        
        {/* Recent Cases */}
        <RecentCases />
        
        {/* Recovery Progress */}
        <CryptoFlow />
      </section>
    </>
  )
}
