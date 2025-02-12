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
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-blue-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-[32px] p-10 shadow-[0_4px_28px_rgba(0,0,0,0.08)]">
        <h1 className="text-[28px] font-bold text-center text-gray-900 mb-8">
          Login Form
        </h1>
        
        {/* Login/Signup Toggle */}
        <div className="flex bg-gray-50 p-1 rounded-full mb-8">
          <button className="flex-1 py-3 text-white font-medium bg-blue-600 rounded-full transition-all">
            Login
          </button>
          <Link href="/auth/register">
            <a className="flex-1 py-3 text-gray-500 font-medium text-center hover:text-gray-700 transition-colors">
              Signup
            </a>
          </Link>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          {error && (
            <div className="bg-red-50 text-red-500 text-sm px-4 py-3 rounded-full">
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
              className="w-full px-6 h-[60px] text-lg text-gray-600 placeholder:text-gray-400 bg-gray-50 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] focus:outline-none focus:ring-0 border-0"
            />

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-6 h-[60px] text-lg text-gray-600 placeholder:text-gray-400 bg-gray-50 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] focus:outline-none focus:ring-0 border-0"
            />
          </div>

          <div className="text-right">
            <Link href="/auth/forgot-password">
              <a className="text-blue-500 hover:text-blue-600 text-sm">
                Forgot password?
              </a>
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-[60px] bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors"
          >
            {loading ? 'Signing in...' : 'Login'}
          </button>

          <p className="text-center text-gray-600">
            Create an account{' '}
            <Link href="/auth/register">
              <a className="text-blue-500 hover:text-blue-600">
                Signup now
              </a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
