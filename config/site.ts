// Site configuration
export const siteConfig = {
  // În development folosim localhost, în producție folosim automat URL-ul Vercel
  url: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'
}

