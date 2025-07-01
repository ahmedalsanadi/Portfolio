'use client';

import { useInView } from 'react-intersection-observer';
import {
    Calendar,
    MapPin,
    Award,
    Globe,
    ArrowRight,
    Download,
    Code,
    Database,
} from 'lucide-react';

export default function Hero({
    title,
    subtitle,
    description,
    badgeText,
    personal,
    variant = 'home', // 'home' or 'about'
    showQuickInfo = false,
    showStats = false,
    showButtons = false,
    showProfileInitials = true,
}) {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    // Common gradient colors
    const gradientFrom = 'from-[#00BBB1]';
    const gradientTo = 'to-[#00C4F4]';

    return (
        <section
            ref={ref}
            className={`${variant === 'home' ? 'md:mt-8 py-20' : 'mt-0 py-10'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div
                        className={`space-y-8 ${inView ? 'animate-in slide-in-from-left duration-1000' : 'opacity-0'}`}>
                        <div className="space-y-4">
                            {badgeText && (
                                <div
                                    className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${gradientFrom}/20 ${gradientTo}/20 rounded-full border border-[#00BBB1]/30`}>
                                    <span
                                        className={`text-[#00BBB1] text-sm font-medium`}>
                                        {badgeText}
                                    </span>
                                </div>
                            )}

                            <h1 className="text-3xl md:heading-1 text-white">
                                {title}{' '}
                                {variant === 'home' ? (
                                    <span className="text-gradient">
                                        {personal.name.split(' ').slice(-1)[0]}
                                    </span>
                                ) : (
                                    <span className="text-gradient">
                                        Full-Stack Developer
                                    </span>
                                )}
                            </h1>

                            {variant === 'home' ? (
                                <h2 className="heading-3 text-gray-300">
                                    {subtitle}{' '}
                                    <span className="text-[#00C4F4]">
                                        Digital Solutions Expert
                                    </span>
                                </h2>
                            ) : null}

                            <p className="content-3 text-gray-300">
                                {description}
                            </p>
                        </div>

                        {/* Quick Info - Only for about variant */}
                        {showQuickInfo && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center space-x-3">
                                    <Calendar className="h-5 w-5 text-[#00BBB1]" />
                                    <div>
                                        <div className="text-sm text-gray-400">
                                            Born
                                        </div>
                                        <div className="text-white font-medium">
                                            {personal.dob}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <MapPin className="h-5 w-5 text-[#00BBB1]" />
                                    <div>
                                        <div className="text-sm text-gray-400">
                                            Location
                                        </div>
                                        <div className="text-white font-medium">
                                            {personal.address
                                                .split(',')
                                                .slice(-2)
                                                .join(',')
                                                .trim()}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Award className="h-5 w-5 text-[#00BBB1]" />
                                    <div>
                                        <div className="text-sm text-gray-400">
                                            Experience
                                        </div>
                                        <div className="text-white font-medium">
                                            {personal.stats.yearsExperience}+
                                            Years
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Globe className="h-5 w-5 text-[#00BBB1]" />
                                    <div>
                                        <div className="text-sm text-gray-400">
                                            Languages
                                        </div>
                                        <div className="text-white font-medium">
                                            {Object.keys(personal.languages)
                                                .map(
                                                    (lang) =>
                                                        lang
                                                            .charAt(0)
                                                            .toUpperCase() +
                                                        lang.slice(1),
                                                )
                                                .join(', ')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Stats - Only for home variant */}
                        {showStats && (
                            <div className="flex items-center space-x-6 pt-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">
                                        {personal.stats.yearsExperience}+
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        Years
                                    </div>
                                </div>
                                <div className="w-px h-12 bg-gray-700"></div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">
                                        {personal.stats.projectsCompleted}+
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        Projects
                                    </div>
                                </div>
                                <div className="w-px h-12 bg-gray-700"></div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">
                                        {personal.stats.clientsServed}+
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        Clients
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* CTA Buttons - Only for home variant */}
                        {showButtons && (
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="/portfolio"
                                    className="group relative px-8 py-4 bg-gradient-to-r from-[#00BBB1] to-[#00C4F4] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#00BBB1]/25 hover:scale-105">
                                    <span className="relative z-10 flex items-center justify-center space-x-2">
                                        <span>View My Work</span>
                                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#00C4F4] to-[#00BBB1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </a>

                                <a
                                    href={personal.resume || '#'}
                                    className="group px-8 py-4 border border-[#00BBB1] text-[#00BBB1] font-semibold rounded-lg transition-all duration-300 hover:bg-[#00BBB1] hover:text-white hover:shadow-lg hover:shadow-[#00BBB1]/25"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                   
                                    >
                                    <span className="flex items-center justify-center space-x-2">
                                        <Download className="h-5 w-5" />
                                        <span>Download Resume</span>
                                    </span>
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Profile Image */}
                    <div
                        className={`relative ${inView ? 'animate-in slide-in-from-right duration-1000' : 'opacity-0'}`}>
                        <div className="relative w-full max-w-lg mx-auto">
                            <div
                                className={`aspect-square rounded-2xl overflow-hidden bg-gradient-to-br ${gradientFrom}/20 ${gradientTo}/20 p-8`}>
                                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center relative overflow-hidden">
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${gradientFrom}/10 ${gradientTo}/10`}></div>
                                    {showProfileInitials ? (
                                        <div className="relative z-10 text-6xl font-bold text-white">
                                            {personal.name.split(' ')[0][0]}
                                            {
                                                personal.name.split(' ')[
                                                    personal.name.split(' ')
                                                        .length - 1
                                                ][0]
                                            }
                                        </div>
                                    ) : (
                                        <img
                                            src="/images/personal/profile-3.png"
                                            alt="Profile"
                                            className="w-full h-full object-cover relative z-10"
                                        />
                                    )}
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00BBB1]/20 rounded-full blur-3xl animate-pulse-slow"></div>
                                    <div
                                        className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#00C4F4]/20 rounded-full blur-3xl animate-pulse-slow"
                                        style={{
                                            animationDelay: '1.5s',
                                        }}></div>
                                </div>
                            </div>

                            {/* Floating Elements - Only for home variant */}
                            {variant === 'home' && (
                                <>
                                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-[#00BBB1] to-[#00C4F4] rounded-xl flex items-center justify-center animate-float">
                                        <Code className="h-10 w-10 text-white" />
                                    </div>
                                    <div
                                        className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-[#00C4F4] to-[#00BBB1] rounded-lg flex items-center justify-center animate-float"
                                        style={{ animationDelay: '1s' }}>
                                        <Database className="h-8 w-8 text-white" />
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
