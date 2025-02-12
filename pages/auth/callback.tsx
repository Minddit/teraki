import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../../utils/supabase'

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN') {
        // User has confirmed their email and is signed in
        router.push('/dashboard')
      }
    })

    return () => {
      authListener?.subscription.unsubscribe()
    }
  }, [router])

  return (
    <div className="min-h-screen bg-[#0d0f1b] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#1B1B1B]/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 shadow-xl text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#00e5cc] mx-auto mb-4"></div>
        <h2 className="text-xl text-white">Verifying your email...</h2>
        <p className="mt-2 text-gray-400">Please wait while we complete the verification process.</p>
      </div>
    </div>
  )
}
