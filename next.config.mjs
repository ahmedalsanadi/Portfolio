/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        optimizePackageImports: ['sharp', 'lucide-react'],
    },
    images: {
        // Enable both optimized and unoptimized images
        unoptimized: false,

        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // Allows all HTTPS domains
            },
        ],
    },
};

export default nextConfig;
