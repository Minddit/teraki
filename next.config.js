/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable strict mode for better development
  reactStrictMode: true,
  
  // Configure image domains
  images: {
    domains: ['teraki.vercel.app'],
  },
  
  // Output as standalone for better deployment
  output: 'standalone',
};

module.exports = nextConfig;
