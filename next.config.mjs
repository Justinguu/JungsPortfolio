/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/JungsPortfolio',
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "**" },
      { protocol: "https", hostname: "github-readme-stats.vercel.app", pathname: "**" },
    ],
  },
};

export default nextConfig;
