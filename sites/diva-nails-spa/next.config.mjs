/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'divanailsspa.ca',
      },
    ],
  },
};

export default nextConfig;
