/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '',
  trailingSlash: true,
  // Optimize for production
  // Reduce bundle size
  reactStrictMode: true,
  // Improve performance
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Ensure proper GitHub Pages deployment
  assetPrefix: process.env.NODE_ENV === 'production' ? '/choerulsofyan.github.io' : '',
};

module.exports = nextConfig;
