'use client';

import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import {
    ArrowLeft,
    Github,
    ExternalLink,
    ChevronLeft,
    ChevronRight,
    Code,
} from 'lucide-react';
import { useState } from 'react';

export default function ProjectDetailPage({ project }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const { ref: heroRef, inView: heroInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: detailsRef, inView: detailsInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const nextImage = () => {
        if (project.screenshots && project.screenshots.length > 1) {
            setCurrentImageIndex((prev) =>
                prev === project.screenshots.length - 1 ? 0 : prev + 1,
            );
        }
    };

    const prevImage = () => {
        if (project.screenshots && project.screenshots.length > 1) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? project.screenshots.length - 1 : prev - 1,
            );
        }
    };

    return (
        <div className="min-h-screen pt-20">
            {/* Back Button */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Link
                    href="/portfolio"
                    className="inline-flex items-center text-gray-400 hover:text-[#00BBB1] transition-colors duration-300">
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Back to Portfolio
                </Link>
            </div>

            {/* Hero Section */}
            <section ref={heroRef} className="px-4 sm:px-6 lg:px-8 pb-20">
                <div className="max-w-7xl mx-auto">
                    <div
                        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${heroInView ? 'animate-in slide-in-from-bottom duration-1000' : 'opacity-0'}`}>
                        {/* Project Info */}
                        <div className="space-y-8">
                            <div>
                                <h1 className="heading-1 text-white mb-4">
                                    {project.name}
                                </h1>
                                <p className="content-2 text-gray-300 mb-6">
                                    {project.description || project.min_desc}
                                </p>

                                {/* Technologies */}
                                {project.techs && (
                                    <div className="mb-8">
                                        <h3 className="text-sm font-semibold text-white mb-3">
                                            Technologies Used
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techs.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-[#00BBB1]/20 text-[#00BBB1] text-sm rounded-full border border-[#00BBB1]/30">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    {project.deployment && (
                                        <a
                                            href={project.deployment}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#00BBB1] to-[#00C4F4] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00BBB1]/25 transition-all duration-300 hover:scale-105">
                                            <ExternalLink className="h-5 w-5 mr-2" />
                                            View Live Demo
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center px-8 py-4 border border-[#00BBB1] text-[#00BBB1] font-semibold rounded-lg hover:bg-[#00BBB1] hover:text-white transition-all duration-300">
                                            <Github className="h-5 w-5 mr-2" />
                                            View Source Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Project Images */}
                        <div className="relative">
                            {project.screenshots &&
                            project.screenshots.length > 0 ? (
                                <div className="relative">
                                    <div className="aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900">
                                        <img
                                            src={
                                                project.screenshots[
                                                    currentImageIndex
                                                ]
                                            }
                                            alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                                            className="w-full h-full object-cover "
                                        />
                                    </div>

                                    {/* Image Navigation */}
                                    {project.screenshots.length > 1 && (
                                        <>
                                            <button
                                                onClick={prevImage}
                                                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300">
                                                <ChevronLeft className="h-6 w-6" />
                                            </button>
                                            <button
                                                onClick={nextImage}
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300">
                                                <ChevronRight className="h-6 w-6" />
                                            </button>

                                            {/* Image Indicators */}
                                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                                {project.screenshots.map(
                                                    (_, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() =>
                                                                setCurrentImageIndex(
                                                                    index,
                                                                )
                                                            }
                                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                                index ===
                                                                currentImageIndex
                                                                    ? 'bg-[#00BBB1]'
                                                                    : 'bg-white/50'
                                                            }`}
                                                        />
                                                    ),
                                                )}
                                            </div>
                                        </>
                                    )}
                                </div>
                            ) : (
                                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center">
                                    <Code className="h-16 w-16 text-gray-600" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Details */}
            <section
                ref={detailsRef}
                className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
                <div className="max-w-7xl mx-auto">
                    <div
                        className={`${detailsInView ? 'animate-in slide-in-from-bottom duration-1000' : 'opacity-0'}`}>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-12">
                                {/* Project Overview */}
                                <div>
                                    <h2 className="heading-2 text-white mb-6">
                                        Project Overview
                                    </h2>
                                    <div className="prose prose-lg max-w-none">
                                        <p className="content-3 text-gray-300 leading-relaxed mb-6">
                                            {project.description ||
                                                project.min_desc}
                                        </p>

                                        {/* Additional project details based on project name */}
                                        {project.name ===
                                            'Movie Streaming App' && (
                                            <div className="space-y-4">
                                                <p className="content-3 text-gray-300 leading-relaxed">
                                                    This comprehensive streaming
                                                    platform showcases advanced
                                                    React and Next.js
                                                    capabilities, featuring
                                                    real-time movie data
                                                    integration with TMDB API,
                                                    user authentication through
                                                    Firebase, and multi-language
                                                    support for global
                                                    accessibility.
                                                </p>
                                                <p className="content-3 text-gray-300 leading-relaxed">
                                                    Key features include
                                                    personalized watchlists,
                                                    advanced search and
                                                    filtering, responsive design
                                                    for all devices, and
                                                    optimized performance for
                                                    smooth streaming
                                                    experiences.
                                                </p>
                                            </div>
                                        )}

                                        {project.name ===
                                            'FinBiz Financial Dashboard' && (
                                            <div className="space-y-4">
                                                <p className="content-3 text-gray-300 leading-relaxed">
                                                    A sophisticated financial
                                                    dashboard built with React
                                                    and Chart.js, featuring
                                                    interactive data
                                                    visualizations, real-time
                                                    analytics, and a modern,
                                                    intuitive user interface
                                                    designed for financial
                                                    professionals and
                                                    businesses.
                                                </p>
                                                <p className="content-3 text-gray-300 leading-relaxed">
                                                    The dashboard includes
                                                    comprehensive charting
                                                    capabilities, responsive
                                                    design, smooth animations,
                                                    and optimized performance
                                                    for handling large datasets.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Key Features */}
                                <div>
                                    <h3 className="heading-3 text-white mb-6">
                                        Key Features
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {getProjectFeatures(project.name).map(
                                            (feature, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-start space-x-3 p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-lg border border-gray-700">
                                                    <div className="w-2 h-2 bg-[#00BBB1] rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="content-3 text-gray-300">
                                                        {feature}
                                                    </span>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </div>

                                {/* Technical Implementation */}
                                {project.techs && (
                                    <div>
                                        <h3 className="heading-3 text-white mb-6">
                                            Technical Implementation
                                        </h3>
                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                            {project.techs.map((tech) => (
                                                <div
                                                    key={tech}
                                                    className="p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-lg border border-gray-700 text-center group hover:border-[#00BBB1]/50 transition-all duration-300">
                                                    <div className="text-2xl mb-2">
                                                        ⚡
                                                    </div>
                                                    <div className="content-3 text-gray-300 group-hover:text-white transition-colors duration-300">
                                                        {tech}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-8">
                                {/* Project Info */}
                                <div className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700">
                                    <h3 className="heading-3 text-white mb-6">
                                        Project Info
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400">
                                                Type
                                            </span>
                                            <span className="text-white">
                                                {getProjectType(project)}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400">
                                                Status
                                            </span>
                                            <span className="text-green-400">
                                                Completed
                                            </span>
                                        </div>
                                        {project.techs && (
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-400">
                                                    Technologies
                                                </span>
                                                <span className="text-white">
                                                    {project.techs.length}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Quick Actions */}
                                <div className="space-y-4">
                                    {project.deployment && (
                                        <a
                                            href={project.deployment}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#00BBB1] to-[#00C4F4] text-white font-medium rounded-lg hover:shadow-lg hover:shadow-[#00BBB1]/25 transition-all duration-300">
                                            <ExternalLink className="h-5 w-5 mr-2" />
                                            Live Demo
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full flex items-center justify-center px-6 py-3 border border-[#00BBB1] text-[#00BBB1] font-medium rounded-lg hover:bg-[#00BBB1] hover:text-white transition-all duration-300">
                                            <Github className="h-5 w-5 mr-2" />
                                            Source Code
                                        </a>
                                    )}
                                </div>

                                {/* Related Projects */}
                                <div>
                                    <h3 className="heading-3 text-white mb-4">
                                        More Projects
                                    </h3>
                                    <div className="space-y-3">
                                        {project.relatedProjects?.map(
                                            (relatedProject) => (
                                                <Link
                                                    key={relatedProject.name}
                                                    href={`/portfolio/${relatedProject.slug}`}
                                                    className="block p-3 bg-gradient-to-br from-gray-900/30 to-gray-800/30 rounded-lg border border-gray-700 hover:border-[#00BBB1]/50 transition-all duration-300 group">
                                                    <div className="text-white font-medium group-hover:text-[#00BBB1] transition-colors duration-300">
                                                        {relatedProject.name}
                                                    </div>
                                                    <div className="text-sm text-gray-400 mt-1">
                                                        {
                                                            relatedProject.min_desc
                                                        }
                                                    </div>
                                                </Link>
                                            ),
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Helper functions
function getProjectFeatures(projectName) {
    const features = {
        'Movie Streaming App': [
            'Real-time movie data integration',
            'User authentication & profiles',
            'Multi-language support',
            'Advanced search & filtering',
            'Personalized watchlists',
            'Responsive design',
            'Firebase integration',
            'SEO optimization',
        ],
        'FinBiz Financial Dashboard': [
            'Interactive data visualizations',
            'Real-time analytics',
            'Chart.js integration',
            'Responsive design',
            'Modern UI/UX',
            'Performance optimization',
            'Smooth animations',
            'Professional styling',
        ],
        'Car Rental': [
            'Car browsing & filtering',
            'Rental management',
            'Modern UI components',
            'TypeScript integration',
            'Responsive design',
            'Shadcn/ui components',
            'Next.js 15 features',
            'Performance optimization',
        ],
        'Twitter App': [
            'Social media functionality',
            'Real-time interactions',
            'User authentication',
            'Tweet management',
            'Responsive design',
            'Database integration',
            'Modern UI/UX',
            'Full-stack architecture',
        ],
        'Pixel Positions Job Application Site': [
            'Job posting system',
            'Application management',
            'Employer profiles',
            'Role-based access control',
            'Laravel backend',
            'MySQL database',
            'Responsive design',
            'Professional UI',
        ],
        'Biccas Landing Site': [
            'Modern landing page',
            'Responsive design',
            'Clean UI/UX',
            'Performance optimization',
            'Cross-browser compatibility',
            'Professional styling',
            'Figma design implementation',
            'HTML/CSS/JavaScript',
        ],
    };

    return (
        features[projectName] || [
            'Modern web application',
            'Responsive design',
            'Clean code architecture',
            'Performance optimization',
            'User-friendly interface',
            'Cross-browser compatibility',
        ]
    );
}

function getProjectType(project) {
    if (project.techs) {
        const techs = project.techs.join(' ').toLowerCase();
        if (techs.includes('flutter')) return 'Mobile App';
        if (techs.includes('laravel') || techs.includes('php'))
            return 'Full-Stack Web App';
        if (techs.includes('react') || techs.includes('next'))
            return 'Frontend Web App';
        if (techs.includes('html') && techs.includes('css'))
            return 'Landing Page';
    }
    return 'Web Application';
}
