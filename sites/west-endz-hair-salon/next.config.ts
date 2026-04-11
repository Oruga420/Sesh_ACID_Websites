import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "westendzsalon.com",
      },
      {
        protocol: "http",
        hostname: "westendzsalon.com",
      },
      {
        protocol: "https",
        hostname: "images.fresha.com",
      },
    ],
  },
};

export default nextConfig;
