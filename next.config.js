/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.supertonin.com.br', 'savegnagoio.vtexassets.com' ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.cotabest.com.br/**',
      },
      {
        protocol: 'https',
        hostname: 'www.supertonin.com.br/cdn/**',
      },
      {
        protocol: 'https',
        hostname: 'www.savegnagoio.vtexassets.com/**',
      },
      {
        protocol: 'https',
        hostname: 'toninstr.blob.core.windows.net/**',
      },
    ],
},}

module.exports = nextConfig
