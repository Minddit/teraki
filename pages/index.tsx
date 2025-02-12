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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Hero Text */}
              <div className="text-center lg:text-left">
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
                <div className="mt-10 flex items-center justify-center lg:justify-start gap-6">
                  <Link href="/dashboard">
                    <a className="rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 px-8 py-3 text-lg font-semibold text-white shadow-sm hover:from-cyan-600 hover:to-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 transition-all duration-200">
                      Start Recovery
                    </a>
                  </Link>
                  <Link href="/dashboard">
                    <a className="text-lg font-semibold text-white hover:text-cyan-400 transition-colors">
                      Learn More <span aria-hidden="true">→</span>
                    </a>
                  </Link>
                </div>
              </div>

              {/* Right side - Auth Card */}
              <div className="relative bg-[#1B1B1B]/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 shadow-xl">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white text-center">Welcome Back</h3>
                <p className="mt-2 text-gray-400 text-center">Sign in to access your recovery dashboard</p>
                
                <div className="mt-8 space-y-6">
                  <div className="space-y-4">
                    <Link href="/auth/login">
                      <a className="w-full flex justify-center py-3 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold hover:from-cyan-600 hover:to-cyan-700 transition-all duration-200">
                        Sign In
                      </a>
                    </Link>
                    <Link href="/auth/register">
                      <a className="w-full flex justify-center py-3 px-4 rounded-lg border border-cyan-500/50 text-cyan-400 font-semibold hover:bg-cyan-500/10 transition-all duration-200">
                        Create Account
                      </a>
                    </Link>
                  </div>
                  
                  <p className="text-sm text-gray-400 text-center">
                    By signing in, you agree to our{' '}
                    <Link href="/terms">
                      <a className="text-cyan-400 hover:text-cyan-300">Terms of Service</a>
                    </Link>
                    {' '}and{' '}
                    <Link href="/privacy">
                      <a className="text-cyan-400 hover:text-cyan-300">Privacy Policy</a>
                    </Link>
                  </p>
                </div>
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

          {/* Auth Section */}
          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="absolute inset-0">
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-cyan-500/5 to-transparent blur-2xl" />
              <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-cyan-500/5 to-transparent blur-2xl" />
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Auth Card */}
              <div className="relative bg-[#1B1B1B]/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 shadow-xl">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white text-center">Get Started Today</h3>
                <p className="mt-2 text-gray-400 text-center">Create your account to start the recovery process</p>
                
                <div className="mt-8 space-y-6">
                  <div className="space-y-4">
                    <Link href="/auth/login">
                      <a className="w-full flex justify-center py-3 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold hover:from-cyan-600 hover:to-cyan-700 transition-all duration-200">
                        Sign In
                      </a>
                    </Link>
                    <Link href="/auth/register">
                      <a className="w-full flex justify-center py-3 px-4 rounded-lg border border-cyan-500/50 text-cyan-400 font-semibold hover:bg-cyan-500/10 transition-all duration-200">
                        Create Account
                      </a>
                    </Link>
                  </div>
                  
                  <p className="text-sm text-gray-400 text-center">
                    By signing in, you agree to our{' '}
                    <Link href="/terms">
                      <a className="text-cyan-400 hover:text-cyan-300">Terms of Service</a>
                    </Link>
                    {' '}and{' '}
                    <Link href="/privacy">
                      <a className="text-cyan-400 hover:text-cyan-300">Privacy Policy</a>
                    </Link>
                  </p>
                </div>
              </div>

              {/* Right Column - Text Content */}
              <div className="lg:pl-12">
                <h2 className="text-3xl font-bold tracking-tight text-white">
                  Start Your Recovery Journey
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Join thousands of satisfied clients who have successfully recovered their lost cryptocurrency assets through our professional service.
                </p>
                
                <div className="mt-10 space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
                        <svg className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Quick Setup</h3>
                      <p className="mt-2 text-gray-300">Create your account in minutes and start the recovery process immediately.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
                        <svg className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Secure Process</h3>
                      <p className="mt-2 text-gray-300">Your information is protected with enterprise-grade security and encryption.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
                        <svg className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">24/7 Support</h3>
                      <p className="mt-2 text-gray-300">Our expert team is always available to assist you throughout the recovery process.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
