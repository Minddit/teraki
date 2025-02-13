import { useState } from 'react'
import { supabase } from '../../utils/supabase'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Validate passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    // Validate password strength
    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      setLoading(false)
      return
    }

    try {
      // Generate unique confirmation token
      const confirmationToken = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2)
      
      // First check if user exists
      const { data: existingUser } = await supabase
        .from('users')
        .select('email')
        .eq('email', email)
        .single()

      if (existingUser) {
        setError('An account with this email already exists')
        setLoading(false)
        return
      }

      // If no existing user, proceed with registration
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            confirmation_token: confirmationToken
          },
          emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || window.location.origin}/auth/verify-email?token=${confirmationToken}`,
        },
      })

      if (error) throw error

      if (data?.user) {
        try {
          // Create profile in public.users table
          const { error: profileError } = await supabase
            .from('users')
            .insert([{ 
              id: data.user.id,
              email: email,
              created_at: new Date().toISOString(),
              confirmation_token: confirmationToken,
              confirmation_sent_at: new Date().toISOString(),
              email_confirmed: false
            }])

          if (profileError) {
            console.error('Profile creation error:', profileError)
            // Continuăm cu succes chiar dacă inserarea în users eșuează
            // Vom gestiona acest caz la prima autentificare
          }

          setError(null)
          router.push('/auth/login?registration=success')
        } catch (profileError) {
          console.error('Profile creation error:', profileError)
          // Continuăm cu succes chiar dacă inserarea în users eșuează
        }
      } else {
        throw new Error('Registration failed')
      }
    } catch (error) {
      console.error('Registration error:', error)
      setError(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0d0f1b] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#1B1B1B]/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 shadow-xl">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600">
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
        </div>
        <h2 className="mt-6 text-2xl font-bold text-center text-white mb-6">
          Create Account
        </h2>
        
        {/* Login/Signup Tabs */}
        <div className="flex bg-[#1B1B1B] p-1 rounded-lg mb-8">
          <Link href="/">
            <a className="flex-1 py-3 px-6 text-gray-400 font-medium text-center hover:text-[#00e5cc] transition-colors">
              Login
            </a>
          </Link>
          <div className="flex-1 py-3 px-6 text-black font-medium bg-[#00e5cc] rounded-lg transition-all text-center cursor-default">
            Signup
          </div>
        </div>

        <form onSubmit={handleRegister} className="space-y-6">
          {error && (
            <div className="bg-red-900/20 border border-red-500/20 text-red-500 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-[#1B1B1B] text-white placeholder:text-gray-400 rounded-lg border border-gray-700 focus:border-[#00e5cc] focus:ring-[#00e5cc] transition-colors"
            />

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 bg-[#1B1B1B] text-white placeholder:text-gray-400 rounded-lg border border-gray-700 focus:border-[#00e5cc] focus:ring-[#00e5cc] transition-colors"
            />

            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-full px-4 py-3 bg-[#1B1B1B] text-white placeholder:text-gray-400 rounded-lg border border-gray-700 focus:border-[#00e5cc] focus:ring-[#00e5cc] transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-[#00e5cc] text-black font-medium hover:bg-[#00d1ba] transition-colors"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>

          <p className="text-center text-gray-400 text-sm">
            Already have an account?{' '}
            <Link href="/">
              <a className="text-[#00e5cc] hover:text-[#00d1ba]">
                Login now
              </a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
