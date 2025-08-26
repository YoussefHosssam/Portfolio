/** @type {import('next').NextConfig} */
const nextConfig = {
  // Netlify compatibility
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  
  // Disable server-side features for static export
  experimental: {
    appDir: true
  },
  
  // Optimize for static hosting
  swcMinify: true,
  
  // Handle static assets
  assetPrefix: '',
  
  // Disable server-side rendering features
  typescript: {
    ignoreBuildErrors: false
  },
  
  eslint: {
    ignoreDuringBuilds: false
  }
}

module.exports = nextConfig 