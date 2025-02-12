import { useState } from 'react'
import { supabase } from '../../utils/supabase'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      // Redirect to dashboard on success
      router.push('/dashboard')
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0d0f1b] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#151823] rounded-xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Login Form
        </h2>
        
        {/* Login/Signup Tabs */}
        <div className="flex bg-[#1B1B1B] p-1 rounded-lg mb-8">
          <button className="flex-1 py-3 px-6 text-white font-medium bg-[#00e5cc] rounded-lg transition-all">
            Login
          </button>
          <Link href="/auth/register">
            <a className="flex-1 py-3 px-6 text-gray-400 font-medium text-center hover:text-[#00e5cc] transition-colors">
              Signup
            </a>
          </Link>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
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
          </div>

          <div className="text-right">
            <Link href="/auth/forgot-password">
              <a className="text-[#00e5cc] hover:text-[#00d1ba] text-sm font-medium">
                Forgot password?
              </a>
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-[#00e5cc] text-black font-medium hover:bg-[#00d1ba] transition-colors"
          >
            {loading ? 'Signing in...' : 'Login'}
          </button>

          <p className="text-center text-gray-400 text-sm">
            Create an account{' '}
            <Link href="/auth/register">
              <a className="text-[#00e5cc] hover:text-[#00d1ba] font-medium">
                Signup now
              </a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
