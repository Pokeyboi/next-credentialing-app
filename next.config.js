/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true // (optional: for static export, remove if using Image CDN)
  },
  experimental: {
    // Enable the latest Next.js features if needed
    // appDir: true,
  }
};

module.exports = nextConfig;
