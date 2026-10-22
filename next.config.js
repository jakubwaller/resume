/* eslint-env node */

// https://nextjs.org/docs/app/api-reference/config/next-config-js
const nextConfig = {
  compress: true,
  generateEtags: true,
  pageExtensions: ['tsx', 'mdx', 'ts'],
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  trailingSlash: false,
};

module.exports = nextConfig;
