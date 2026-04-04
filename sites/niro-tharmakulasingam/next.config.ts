import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.realtorniro.com',
      },
      {
        protocol: 'https',
        hostname: 'papiphotos.remax-im.com',
      },
    ],
  },
};

export default nextConfig;
