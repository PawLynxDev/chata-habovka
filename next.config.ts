import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    qualities: [100, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-f4ff2aa560894b45a3f4885b56401b38.r2.dev",
      },
      // Staré fotky vo Vercel Blob – ponechané kvôli obsahu spred migrácie na R2.
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
