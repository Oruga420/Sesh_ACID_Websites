import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2gqo3h0psesgi.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "itin-dev.wanderlogstatic.com",
      },
    ],
  },
};

export default nextConfig;
