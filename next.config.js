/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  basePath,
  trailingSlash: true,
  // Optimize for production
  reactStrictMode: true,
  // Improve performance
  compiler: {
    removeConsole: isProduction,
  },
  // When using username.github.io repository, the assets should be served from the root
  // This ensures CSS and other assets load correctly
  assetPrefix: basePath,
};

module.exports = nextConfig;
