/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  experimental: {
    serverActions: true
  }
}

export default nextConfig
