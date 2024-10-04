/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.PROTOKOL,
        hostname: process.env.HOST_NAME,
      },
    ],
  },
};

export default nextConfig;
