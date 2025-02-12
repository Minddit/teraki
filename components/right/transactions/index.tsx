import { transactionstData } from "@data/data"
import TransactionItem from "./TransactionItem"

export default function Transactions() {
  return (
    <>
      <div className="mt-8">

        <div className="p-6 pb-2">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] animate-pulse">Recent Transactions</h3>
        </div>

        {/*  get and display all transactions */}
        {transactionstData.map((transaction, __) => {
          return <TransactionItem key={__} data={transaction} />
        })}
      </div>
    </>
  )
}
