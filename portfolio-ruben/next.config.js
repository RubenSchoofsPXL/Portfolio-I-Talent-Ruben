/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  assetPrefix: isProd ? '/Portfolio-I-Talent-Ruben/' : '',
  reactStrictMode: true,
}

module.exports = nextConfig
