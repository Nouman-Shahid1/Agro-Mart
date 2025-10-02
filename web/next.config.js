/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.NODE_ENV === 'production' 
          ? '/api/:path*' 
          : 'http://localhost:8080/:path*'
      }
    ]
  },
  images: {
    domains: ['localhost', 'your-vercel-domain.vercel.app']
  }
}

module.exports = nextConfig