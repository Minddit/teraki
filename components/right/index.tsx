import RecoverySteps from "./recovery-steps"
import Transactions from "./transactions"

export default function RightSide() {
  return (
    <>
      <section>
        {/* Recovery Steps */}
        <RecoverySteps />

        {/* transactions */}
        <Transactions />
      </section>
    </>
  )
}
