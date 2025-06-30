//app/layout.jsx
import './globals.css';
import { Inter, Inria_Serif } from 'next/font/google';
import Navigation from '@/components/layouts/Navigation';
import Footer from '@/components/layouts/Footer';
import ParticleBackground from '@/components/layouts/ParticleBackground';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const inriaSerif = Inria_Serif({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
    variable: '--font-inria-serif',
    display: 'swap',
});
export const metadata = {
    title: 'Ahmed Al-Sanadi - Full-Stack Developer & Digital Solutions Expert',
    description:
        'Highly motivated Software Developer and Full Stack Developer with over 4+ years of experience. Proficient in modern frameworks and technologies with strong expertise in both frontend and backend development.',
    keywords:
        'Full Stack Developer, React, Next.js, Laravel, PHP, JavaScript, Yemen Developer',
    authors: [{ name: 'Ahmed Al-Sanadi' }],
    creator: 'Ahmed Al-Sanadi',
    openGraph: {
        title: 'Ahmed Al-Sanadi - Full-Stack Developer',
        description:
            'Passionate full-stack developer building meaningful digital products with 4+ years of experience.',
        url: 'https://ahmed-al-sanadi.com',
        siteName: 'Ahmed Al-Sanadi Portfolio',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ahmed Al-Sanadi - Full-Stack Developer',
        description:
            'Passionate full-stack developer building meaningful digital products with 4+ years of experience.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico"  />
            </head>
            <body
                className={`${inter.variable} ${inriaSerif.variable} font-sans antialiased overflow-x-hidden`}>
                <div className="relative min-h-screen bg-[#030B15]">
                    <ParticleBackground />
                    <Navigation />
                    <main className="relative z-10">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
