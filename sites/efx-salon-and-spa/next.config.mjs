/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'efxsalonandspa.com',
        pathname: '/wp-content/**',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
