import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/AI_VIBE',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
