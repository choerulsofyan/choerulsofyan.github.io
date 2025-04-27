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
  // For GitHub Pages, we don't need assetPrefix since we're using a custom domain or username.github.io format
  // When using username.github.io repository, the assets are served from the root
  assetPrefix: '',
};

module.exports = nextConfig;
