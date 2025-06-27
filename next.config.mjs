/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        optimizePackageImports: ['sharp'],
    },
    images: { unoptimized: true },
};

export default nextConfig;
