// Site configuration
export const siteConfig = {
  // În development folosim localhost, în producție folosim URL-ul din env sau Vercel URL
  url: process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')
}

