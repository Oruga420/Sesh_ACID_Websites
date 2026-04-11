import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img1.wsimg.com",
      },
      {
        protocol: "https",
        hostname: "**.wsimg.com",
      },
      {
        protocol: "https",
        hostname: "instagram.*.fna.fbcdn.net",
      },
    ],
  },
};

export default nextConfig;
