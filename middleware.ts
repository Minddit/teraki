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

  try {
    // Verificăm sesiunea cu serverul Supabase
    const { data: { user }, error } = await supabase.auth.getUser()
    
    if (error) throw error

    const isAuthPage = request.nextUrl.pathname.startsWith('/auth')
    const isPublicRoute = request.nextUrl.pathname === '/' || isAuthPage

    // Allow access to verify-email page without session
    if (request.nextUrl.pathname === '/auth/verify-email') {
      return response
    }

    // If user is not signed in and trying to access protected routes
    if (!user && !isPublicRoute) {
      return NextResponse.redirect(new URL('/auth/login', request.url))
    }

    // If user is signed in and trying to access auth pages
    if (user && (request.nextUrl.pathname === '/auth/login' || request.nextUrl.pathname === '/auth/register')) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  } catch (error) {
    // În caz de eroare, redirecționăm către login
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
