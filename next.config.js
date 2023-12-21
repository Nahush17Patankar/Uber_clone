/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build', // Use the correct property for output directory
  ignoreBuildErrors: true, // Use the correct property for ignoring build errors
};

module.exports = nextConfig;
