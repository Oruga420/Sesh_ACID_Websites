import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "itin-dev.wanderlogstatic.com",
      },
    ],
  },
};

export default nextConfig;
