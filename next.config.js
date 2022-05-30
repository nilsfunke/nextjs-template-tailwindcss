const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
    loader: 'custom',
  },
  swcMinify: true,
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/datenschutz': { page: '/datenschutz' },
      '/impressum': { page: '/impressum' },
    };
  },
};

module.exports = withBundleAnalyzer(nextConfig);
