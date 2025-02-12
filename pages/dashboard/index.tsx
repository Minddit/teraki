import Head from "next/head"
import PrincipalLayout from "@components/layouts/PrincipalLayout"
import MiddleSide from "@components/middle"

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <MiddleSide />
    </>
  )
}

Dashboard.Layout = PrincipalLayout
