'use client';

import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import {
    Code,
    Database,
    Smartphone,
    Palette,
    Globe,
    Zap,
    Shield,
    Sparkles,
    ArrowRight,
    CheckCircle,
    Star,
    Users,
} from 'lucide-react';
import { services } from '@/lib/data';
import ProcessSection from '@/components/sections/ProcessSection';

const iconMap = {
    Code: Code,
    Database: Database,
    Globe: Globe,
    Smartphone: Smartphone,
    Shield: Shield,
    Zap: Zap,
    Palette: Palette,
    Sparkles: Sparkles,
};

export default function ServicesPage() {
    const { ref: heroRef, inView: heroInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: servicesRef, inView: servicesInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section ref={heroRef} className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <div
                        className={`space-y-8 ${heroInView ? 'animate-in slide-in-from-bottom duration-1000' : 'opacity-0'}`}>
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00BBB1]/20 to-[#00C4F4]/20 rounded-full border border-[#00BBB1]/30">
                            <span className="text-[#00BBB1] text-sm font-medium">
                                🚀 Digital Solutions
                            </span>
                        </div>

                        <h1 className="heading-1 text-white max-w-4xl mx-auto">
                            Comprehensive{' '}
                            <span className="text-gradient">
                                Development Services
                            </span>
                        </h1>

                        <p className="content-2 text-gray-300 max-w-3xl mx-auto">
                            From concept to deployment, I provide end-to-end
                            digital solutions that drive innovation and business
                            success. Let's build something amazing together.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00BBB1] to-[#00C4F4] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00BBB1]/25 transition-all duration-300 hover:scale-105">
                                <span>Start Your Project</span>
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                                href="/portfolio"
                                className="inline-flex items-center px-8 py-4 border border-[#00BBB1] text-[#00BBB1] font-semibold rounded-lg hover:bg-[#00BBB1] hover:text-white transition-all duration-300">
                                <span>View Portfolio</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section
                ref={servicesRef}
                className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {services.map((service, index) => {
                            const IconComponent = iconMap[service.icon];
                            return (
                                <div
                                    key={service.title}
                                    className={`group relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00BBB1]/50 transition-all duration-500 cosmic-glow ${
                                        servicesInView
                                            ? 'animate-in slide-in-from-bottom duration-1000'
                                            : 'opacity-0'
                                    }`}
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                    }}>
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#00BBB1]/5 to-[#00C4F4]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    <div className="relative z-10">
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-6">
                                            <div
                                                className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                                <IconComponent className="h-7 w-7 text-white" />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <h3 className="heading-3 text-white mb-4 group-hover:text-[#00BBB1] transition-colors duration-300">
                                            {service.title}
                                        </h3>

                                        <p className="content-3 text-gray-400 mb-6">
                                            {service.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="mb-6">
                                            <h4 className="text-sm font-semibold text-white mb-3">
                                                Technologies Used
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {service.technologies.map(
                                                    (tech) => (
                                                        <span
                                                            key={tech}
                                                            className="px-3 py-1 bg-[#00BBB1]/20 text-[#00BBB1] text-xs rounded-full border border-[#00BBB1]/30">
                                                            {tech}
                                                        </span>
                                                    ),
                                                )}
                                            </div>
                                        </div>

                                        {/* Features */}
                                        <div className="mb-6">
                                            <h4 className="text-sm font-semibold text-white mb-3">
                                                Key Features
                                            </h4>
                                            <ul className="space-y-2">
                                                {service.features
                                                    .slice(0, 4)
                                                    .map((feature) => (
                                                        <li
                                                            key={feature}
                                                            className="flex items-center text-sm text-gray-400">
                                                            <CheckCircle className="h-4 w-4 text-[#00BBB1] mr-2 flex-shrink-0" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                            </ul>
                                        </div>

                                        {/* CTA */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                                            <Link
                                                href="/contact"
                                                className="text-[#00BBB1] font-medium flex items-center space-x-1 group-hover:text-[#00C4F4] transition-colors duration-300">
                                                <span>Get Quote</span>
                                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <ProcessSection />
        </div>
    );
}
