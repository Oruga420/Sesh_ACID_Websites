import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.panailshamilton.ca",
      },
      {
        protocol: "http",
        hostname: "www.panailshamilton.ca",
      },
    ],
  },
};

export default nextConfig;
