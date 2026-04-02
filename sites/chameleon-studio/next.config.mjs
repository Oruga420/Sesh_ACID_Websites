/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "chameleonstudio.ca",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
