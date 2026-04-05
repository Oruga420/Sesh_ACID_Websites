/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'www.condosandcastles.com',
        pathname: '/wp-content/**',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
