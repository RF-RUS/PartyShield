/** @type {import('next').NextConfig} */
const nextConfig = {
//  reactStrictMode: true,
  output: 'export',
    images: {
      unoptimized: true, // обязательно для shared-хостинга
    },
}

module.exports = nextConfig

