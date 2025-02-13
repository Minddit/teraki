// Site configuration
export const siteConfig = {
  // Folosim automat VERCEL_URL în producție și localhost în development
  url: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'
}

