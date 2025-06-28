//app/page.jsx (home)

'use client';

import { useEffect, useRef } from 'react';
import Hero from '@/components/common/Hero';
import Link from 'next/link';
import {
    ArrowRight,
    Download,
    Code,
    Database,
    Smartphone,
    Palette,
    Globe,
    Zap,
    Shield,
    Sparkles,
    Users,
    Star,
    MapPin,
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { personal, services, stats, featuredProjects } from '@/lib/data';


const iconMap = {
    Code: Code,
    Database: Database,
    Globe: Globe,
    Smartphone: Smartphone,
    Shield: Shield,
    Zap: Zap,
    Palette: Palette,
    Sparkles: Sparkles,
    Star: Star,
    Users: Users,
};

export default function HomePage() {

    const { ref: servicesRef, inView: servicesInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: projectsRef, inView: projectsInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: statsRef, inView: statsInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <div className="min-h-screen pt-2">
            {/* Hero Section */}
            <Hero
                variant="home"
                personal={personal}
                badgeText={`👋 Hello, I'm ${personal.name.split(' ')[0]}`}
                title={`${personal.name.split(' ').slice(0, 3).join(' ')} `}
                subtitle="Full-Stack Developer &"
                description={personal.summary}
                showStats={true}
                showButtons={true}
            />

            {/* Services Section */}
            <section ref={servicesRef} className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div
                        className={`text-center mb-16 ${servicesInView ? 'animate-in slide-in-from-bottom duration-1000' : 'opacity-0'}`}>
                        <h2 className="heading-2 text-white mb-4">
                            Our Services
                        </h2>
                        <p className="content-3 text-gray-400 max-w-2xl mx-auto">
                            Comprehensive digital solutions tailored to your
                            needs. From frontend magic to backend power, we
                            deliver excellence in every pixel and every line of
                            code.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => {
                            const IconComponent = iconMap[service.icon];
                            return (
                                <div
                                    key={service.title}
                                    className={`group relative p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 hover:border-[#00BBB1]/50 transition-all duration-500 hover:scale-105 cosmic-glow ${
                                        servicesInView
                                            ? 'animate-in slide-in-from-bottom duration-1000'
                                            : 'opacity-0'
                                    }`}
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                    }}>
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#00BBB1]/5 to-[#00C4F4]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    <div className="relative z-10">
                                        <div
                                            className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent className="h-6 w-6 text-white" />
                                        </div>

                                        <h3 className="heading-3 text-white mb-3 group-hover:text-[#00BBB1] transition-colors duration-300">
                                            {service.title}
                                        </h3>

                                        <p className="content-3 text-gray-400 mb-4">
                                            {service.description}
                                        </p>

                                        <button className="text-[#00BBB1] text-sm font-medium flex items-center space-x-1 group-hover:text-[#00C4F4] transition-colors duration-300">
                                            <span>Learn More</span>
                                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/services"
                            className="inline-flex items-center px-8 py-3 border border-[#00BBB1] text-[#00BBB1] font-medium rounded-lg hover:bg-[#00BBB1] hover:text-white transition-all duration-300">
                            <span>View All Services</span>
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section
                ref={projectsRef}
                className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
                <div className="max-w-7xl mx-auto">
                    <div
                        className={`flex items-center justify-between mb-16 ${projectsInView ? 'animate-in slide-in-from-bottom duration-1000' : 'opacity-0'}`}>
                        <div>
                            <h2 className="heading-2 text-white mb-4">
                                Latest Works
                            </h2>
                            <p className="content-3 text-gray-400">
                                Featured projects showcasing innovation and
                                technical excellence
                            </p>
                        </div>

                        {/* Interactive Chart */}
                        <div className="hidden lg:block">
                            <div className="w-64 h-32 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-lg p-4 border border-gray-700">
                                <div className="flex items-end justify-between h-full space-x-1">
                                    {[40, 65, 45, 80, 55, 90, 70].map(
                                        (height, index) => (
                                            <div
                                                key={index}
                                                className="bg-gradient-to-t from-[#00BBB1] to-[#00C4F4] rounded-sm flex-1 transition-all duration-500 hover:opacity-80"
                                                style={{ height: `${height}%` }}
                                            />
                                        ),
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {featuredProjects.map((project, index) => (
                            <div
                                key={project.name}
                                className={`group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 hover:border-[#00BBB1]/50 transition-all duration-500 ${
                                    project.featured
                                        ? 'lg:col-span-2 lg:row-span-2'
                                        : ''
                                } ${projectsInView ? 'animate-in slide-in-from-bottom duration-1000' : 'opacity-0'}`}
                                style={{ animationDelay: `${index * 200}ms` }}>
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {project.techs &&
                                            project.techs
                                                .slice(0, 3)
                                                .map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2 py-1 bg-[#00BBB1]/20 text-[#00BBB1] text-xs rounded-full border border-[#00BBB1]/30">
                                                        {tech}
                                                    </span>
                                                ))}
                                    </div>

                                    <h3 className="heading-3 text-white mb-2">
                                        {project.name}
                                    </h3>
                                    <p className="content-3 text-gray-400 mb-4">
                                        {project.description ||
                                            project.min_desc}
                                    </p>

                                    <Link
                                        href={`/portfolio/${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="text-[#00BBB1] font-medium flex items-center space-x-1 group-hover:text-[#00C4F4] transition-colors">
                                        <span>View Project</span>
                                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/portfolio"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00BBB1] to-[#00C4F4] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00BBB1]/25 transition-all duration-300 hover:scale-105">
                            <span>View Full Portfolio</span>
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section
                ref={statsRef}
                className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                {/* World Map Background */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00BBB1]/20 via-transparent to-[#00C4F4]/20"></div>
                    <svg
                        className="w-full h-full"
                        viewBox="0 0 1000 500"
                        xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern
                                id="worldmap"
                                patternUnits="userSpaceOnUse"
                                width="50"
                                height="50">
                                <circle
                                    cx="25"
                                    cy="25"
                                    r="1"
                                    fill="#00BBB1"
                                    opacity="0.3">
                                    <animate
                                        attributeName="opacity"
                                        values="0.3;0.8;0.3"
                                        dur="3s"
                                        repeatCount="indefinite"
                                    />
                                </circle>
                            </pattern>
                        </defs>
                        <rect
                            width="100%"
                            height="100%"
                            fill="url(#worldmap)"
                        />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div
                        className={`text-center mb-16 ${statsInView ? 'animate-in slide-in-from-bottom duration-1000' : 'opacity-0'}`}>
                        <h2 className="heading-2 text-white mb-4">
                            Global Impact
                        </h2>
                        <p className="content-3 text-gray-400">
                            Delivering excellence worldwide with proven results
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => {
                            const IconComponent = iconMap[stat.icon];
                            return (
                                <div
                                    key={stat.label}
                                    className={`text-center group ${statsInView ? 'animate-in slide-in-from-bottom duration-1000' : 'opacity-0'}`}
                                    style={{
                                        animationDelay: `${index * 150}ms`,
                                    }}>
                                    <div className="relative inline-block mb-4">
                                        <div className="w-20 h-20 bg-gradient-to-r from-[#00BBB1] to-[#00C4F4] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                            <IconComponent className="h-8 w-8 text-white" />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#00BBB1] to-[#00C4F4] rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                                    </div>

                                    <div className="content-1 text-white font-bold mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="content-3 text-gray-400">
                                        {stat.label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Location Indicator */}
                    <div className="text-center mt-12">
                        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-full border border-gray-700">
                            <MapPin className="h-5 w-5 text-[#00BBB1] mr-2" />
                            <span className="text-white font-medium">
                                Based in{' '}
                                {personal.address
                                    .split(',')
                                    .slice(-2)
                                    .join(',')
                                    .trim()}
                            </span>
                            <div className="ml-3 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
