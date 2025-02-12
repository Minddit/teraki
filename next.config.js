/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  // Disable static exports as we need server-side functionality
  // output: 'export',
  
  // Enable strict mode for better development
  reactStrictMode: true,
  
  // Configure image domains if needed
  images: {
    domains: [],
  },
}

module.exports = nextConfig
=======
  images: {
    domains: ['teraki.vercel.app'],
  },
  assetPrefix: '',
  output: 'standalone',
};

module.exports = nextConfig;
>>>>>>> 933077a4f7bb85d5ad558f268b6adf2676979ce9
