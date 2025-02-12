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
      <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6">Login Form</h2>
        
        {/* Login/Signup Tabs */}
        <div className="flex bg-gray-50 rounded-xl p-1 mb-8">
          <button className="flex-1 py-3 px-6 rounded-xl bg-[#40E0D0] text-white font-medium">
            Login
          </button>
          <Link href="/auth/register">
            <a className="flex-1 py-3 px-6 text-gray-500 font-medium text-center hover:text-[#40E0D0] transition-colors">
              Signup
            </a>
          </Link>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#40E0D0] focus:ring-[#40E0D0] text-gray-700 text-base transition-colors"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#40E0D0] focus:ring-[#40E0D0] text-gray-700 text-base transition-colors"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="text-right">
            <Link href="/auth/forgot-password">
              <a className="text-[#40E0D0] hover:text-[#3BC8BA] text-sm font-medium">
                Forgot password?
              </a>
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-[#40E0D0] text-white font-medium hover:bg-[#3BC8BA] transition-colors"
          >
            {loading ? 'Signing in...' : 'Login'}
          </button>

          <p className="text-center text-gray-500 text-sm">
            Create an account{' '}
            <Link href="/auth/register">
              <a className="text-[#40E0D0] hover:text-[#3BC8BA] font-medium">
                Signup now
              </a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
