/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/JungsPortfolio',
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "**" },
      { protocol: "https", hostname: "github-readme-stats.vercel.app", pathname: "**" },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  // Add this to ensure styles are included in the static export
  assetPrefix: '/JungsPortfolio'
};

export default nextConfig;
