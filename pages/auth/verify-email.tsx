import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../../utils/supabase'

export default function VerifyEmail() {
  const router = useRouter()
  const [verifying, setVerifying] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const token = router.query.token as string
        
        if (!token) {
          setError('Token de verificare lipsă')
          setVerifying(false)
          return
        }

        const { data, error: dbError } = await supabase
          .from('users')
          .update({ 
            email_confirmed: true,
            confirmation_token: null,
            confirmation_sent_at: null 
          })
          .match({ confirmation_token: token })
          .select()

        if (dbError) throw dbError

        if (!data || data.length === 0) {
          throw new Error('Token invalid sau expirat')
        }

        router.push('/auth/login?verified=true')
      } catch (err) {
        console.error('Eroare la verificarea emailului:', err)
        setError(err instanceof Error ? err.message : 'A apărut o eroare la verificare')
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
            <p className="mt-4 text-white">Se verifică emailul...</p>
          </div>
        ) : error ? (
          <div className="text-center">
            <div className="text-red-500 mb-4">{error}</div>
            <button
              onClick={() => router.push('/auth/login')}
              className="text-[#00e5cc] hover:text-[#00d1ba]"
            >
              Înapoi la Login
            </button>
          </div>
        ) : (
          <div className="text-center">
            <div className="text-[#00e5cc] mb-4">Email verificat cu succes!</div>
            <p className="text-white mb-4">Vă redirecționăm către pagina de login...</p>
          </div>
        )}
      </div>
    </div>
  )
}
