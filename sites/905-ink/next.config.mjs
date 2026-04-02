/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "905ink.ca",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
