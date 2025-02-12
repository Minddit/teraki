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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login Form
        </h2>
        
        {/* Login/Signup Tabs */}
        <div className="flex bg-gray-100 p-1 rounded-lg mb-8">
          <button className="flex-1 py-3 px-6 text-white font-medium bg-blue-600 rounded-lg transition-all">
            Login
          </button>
          <Link href="/auth/register">
            <a className="flex-1 py-3 px-6 text-gray-600 font-medium text-center hover:text-blue-600 transition-colors">
              Signup
            </a>
          </Link>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && (
            <div className="bg-red-100 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
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
              className="w-full px-4 py-3 bg-gray-50 text-gray-900 placeholder:text-gray-400 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-colors"
            />

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 bg-gray-50 text-gray-900 placeholder:text-gray-400 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-colors"
            />
          </div>

          <div className="text-right">
            <Link href="/auth/forgot-password">
              <a className="text-blue-600 hover:text-blue-700 text-sm">
                Forgot password?
              </a>
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            {loading ? 'Signing in...' : 'Login'}
          </button>

          <p className="text-center text-gray-600 text-sm">
            Create an account{' '}
            <Link href="/auth/register">
              <a className="text-blue-600 hover:text-blue-700">
                Signup now
              </a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
