/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        optimizePackageImports: ['sharp', 'lucide-react'],
    },
    images: { unoptimized: true },
};

export default nextConfig;
