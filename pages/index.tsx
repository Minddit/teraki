import Head from "next/head"
import Link from "next/link"
export default function Landing() {
  return (
    <>
      <Head>
        <title>Crypto Recovery - Get Your Lost Crypto Back</title>
        <meta name="description" content="Professional crypto recovery service with 99% success rate. Recover your lost cryptocurrency with just 10% upfront." />
      </Head>

      <main className="min-h-screen bg-[#0d0f1b]">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-cyan-500/5 mix-blend-multiply" />
            <div className="absolute right-0 top-0 -mr-40 -mt-40 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute left-0 bottom-0 -ml-40 -mb-40 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                  Recover Your Lost
                </span>
                <br />
                Cryptocurrency
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                With our 99% success rate and only 10% upfront fee, we help you recover your lost crypto assets.
                Professional service, transparent process, guaranteed results.
              </p>
              <div className="mt-10 flex items-center justify-center gap-6">
                <Link href="/auth/login">
                  <a className="rounded-lg bg-[#00e5cc] px-8 py-3 text-lg font-semibold text-black shadow-sm hover:bg-[#00d1ba] transition-colors">
                    Start Recovery
                  </a>
                </Link>
                <Link href="/auth/login">
                  <a className="text-lg font-semibold text-white hover:text-[#00e5cc] transition-colors">
                    Learn More <span aria-hidden="true">→</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Why Choose Our Service?
              </h2>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="relative bg-[#1B1B1B]/40 backdrop-blur-sm rounded-2xl p-8">
                <div className="absolute -top-4 left-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">99% Success Rate</h3>
                <p className="mt-2 text-gray-300">
                  Our proven track record shows a 99% success rate in crypto recovery operations.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="relative bg-[#1B1B1B]/40 backdrop-blur-sm rounded-2xl p-8">
                <div className="absolute -top-4 left-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">10% Upfront</h3>
                <p className="mt-2 text-gray-300">
                  Start your recovery process with just 10% upfront payment. Pay the rest only after successful recovery.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="relative bg-[#1B1B1B]/40 backdrop-blur-sm rounded-2xl p-8">
                <div className="absolute -top-4 left-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">Secure Process</h3>
                <p className="mt-2 text-gray-300">
                  End-to-end encrypted communication and secure document handling for your peace of mind.
                </p>
              </div>
            </div>
          </div>


        </div>
      </main>
    </>
  )
}
