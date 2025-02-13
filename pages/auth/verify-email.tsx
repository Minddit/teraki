import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { createClient } from '@/utils/supabase/client'

export default function VerifyEmail() {
  const router = useRouter()
  const [verifying, setVerifying] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  useEffect(() => {
    const verifyEmail = async () => {
      const token = router.query.token
      if (!token || typeof token !== 'string') {
        throw new Error('Invalid verification token')
      }
      try {
        // Verify Supabase token
        const supabase = createClient()
const { data: { user }, error: verifyError } = await supabase.auth.getUser()
        
        if (verifyError) throw verifyError
        if (!user) throw new Error('User not found')

        // Verificăm token-ul în baza de date
        const { data: userData, error: userError } = await supabase
          .from('users')
          .select('email_confirmed')
          .eq('id', user.id)
          .eq('confirmation_token', token)
          .single()

        if (userError || !userData) {
          throw new Error('Invalid verification token')
        }

        if (userData.email_confirmed) {
          throw new Error('Email already verified')
        }

        // Actualizăm statusul în baza de date
        const { error: dbError } = await supabase
          .from('users')
          .update({ 
            email_confirmed: true,
            confirmation_sent_at: null 
          })
          .eq('id', user.id)
          .select()

        if (dbError) throw dbError

        router.push('/auth/login?registration=verified')
      } catch (err) {
        console.error('Error verifying email:', err)
        setError(err instanceof Error ? err.message : 'An error occurred during verification')
      } finally {
        setVerifying(false)
      }
    }

    if (router.isReady) {
      verifyEmail()
    }
  }, [router.isReady, router.query.token])

  return (
    <div className="min-h-screen bg-[#0d0f1b] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#1B1B1B]/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 shadow-xl">
        {verifying ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00e5cc] mx-auto"></div>
            <p className="mt-4 text-white">Verifying email...</p>
          </div>
        ) : error ? (
          <div className="text-center">
            <div className="text-red-500 mb-4">{error}</div>
            <button
              onClick={() => router.push('/auth/login')}
              className="text-[#00e5cc] hover:text-[#00d1ba]"
            >
              Back to Login
            </button>
          </div>
        ) : (
          <div className="text-center">
            <div className="text-[#00e5cc] mb-4">Email verified successfully!</div>
            <p className="text-white mb-4">Redirecting to login page...</p>
          </div>
        )}
      </div>
    </div>
  )
}
