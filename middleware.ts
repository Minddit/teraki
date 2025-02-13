import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: CookieOptions) {
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  // 1. Verificăm dacă ruta curentă este publică
  const publicPaths = ['/', '/auth/login', '/auth/register', '/auth/verify-email']
  const isPublicRoute = publicPaths.includes(request.nextUrl.pathname)

  // 2. Obținem sesiunea
  const { data: { session } } = await supabase.auth.getSession()

  // 3. Gestionăm rutele publice vs. protejate
  if (!session) {
    // Dacă nu avem sesiune și încercăm să accesăm o rută protejată
    if (!isPublicRoute) {
      return NextResponse.redirect(new URL('/auth/login', request.url))
    }
  } else {
    // Dacă avem sesiune și încercăm să accesăm login/register
    if (request.nextUrl.pathname === '/auth/login' || request.nextUrl.pathname === '/auth/register') {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }

  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
