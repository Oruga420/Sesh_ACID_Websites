import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blogto-production2-baselayer-display.blogto.com",
      },
      {
        protocol: "https",
        hostname: "estoescolombiarestaurant.ca",
      },
      {
        protocol: "https",
        hostname: "media.blogto.com",
      },
    ],
  },
};

export default nextConfig;
