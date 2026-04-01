/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images-prod-1.getsquire.com" },
      { protocol: "https", hostname: "api.mapbox.com" },
      { protocol: "https", hostname: "static.wixstatic.com" },
    ],
  },
};
export default nextConfig;
