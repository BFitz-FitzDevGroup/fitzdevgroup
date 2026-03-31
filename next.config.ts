import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // www → apex
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.fitzdevgroup.com' }],
        destination: 'https://fitzdevgroup.com/:path*',
        permanent: true,
      },
      // Legacy URLs from old site
      {
        source: '/website/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.htm',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig