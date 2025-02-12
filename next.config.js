/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn6.f-cdn.com", "media-exp1.licdn.com", "images.pexels.com"],
  },
};

module.exports = nextConfig;