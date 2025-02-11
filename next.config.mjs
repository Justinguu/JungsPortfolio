/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "**" },
      { protocol: "https", hostname: "github-readme-stats.vercel.app", pathname: "**" },
      { protocol: "https", hostname: "fonts.googleapis.com", pathname: "**" },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
