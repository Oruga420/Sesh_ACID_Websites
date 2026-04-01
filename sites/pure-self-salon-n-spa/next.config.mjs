/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.pureselfsalon.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
