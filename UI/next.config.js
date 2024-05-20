/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    apiBaseUrl: process.env.PUBLIC_NEXTCORE_API_URL,
  },
};

module.exports = nextConfig;
