/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  assetPrefix: isProd ? '/Portfolio-I-Talent-Ruben/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
