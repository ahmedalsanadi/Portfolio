/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        optimizePackageImports: ['sharp', 'lucide-react'],
    },
    images: {
        unoptimized: false,
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 828, 1200, 1920],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // Allows all HTTPS domains
            },
        ],
    },
};

export default nextConfig;