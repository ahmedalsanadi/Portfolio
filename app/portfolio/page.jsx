// app/portfolio/page.jsx
'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import {
    Github,
    ExternalLink,
    Search,
    ArrowRight,
    Code,
    Database,
    Smartphone,
    Globe,
} from 'lucide-react';
import { projects } from '@/lib/data';
import Image from 'next/image';

const categories = [
    { name: 'All', value: 'all', icon: Globe },
    { name: 'Web Apps', value: 'web', icon: Code },
    { name: 'Mobile', value: 'mobile', icon: Smartphone },
    { name: 'Full-Stack', value: 'fullstack', icon: Database },
];

export default function PortfolioPage() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const { ref: heroRef, inView: heroInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: projectsRef, inView: projectsInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const filteredProjects = projects.filter((project) => {
        const matchesSearch =
            project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description
                .toLowerCase()
                .includes(searchTerm.toLowerCase());

        if (activeFilter === 'all') return matchesSearch;

        const projectTechs = project.techs?.join(' ').toLowerCase() || '';

        switch (activeFilter) {
            case 'web':
                return (
                    matchesSearch &&
                    (projectTechs.includes('react') ||
                        projectTechs.includes('next') ||
                        projectTechs.includes('html'))
                );
            case 'mobile':
                return matchesSearch && projectTechs.includes('flutter');
            case 'fullstack':
                return (
                    matchesSearch &&
                    (projectTechs.includes('laravel') ||
                        projectTechs.includes('php') ||
                        projectTechs.includes('mysql'))
                );
            default:
                return matchesSearch;
        }
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
                                💼 My Work
                            </span>
                        </div>

                        <h1 className="heading-1 text-white max-w-4xl mx-auto">
                            Featured{' '}
                            <span className="text-gradient">
                                Projects & Case Studies
                            </span>
                        </h1>

                        <p className="content-2 text-gray-300 max-w-3xl mx-auto">
                            A showcase of innovative solutions, technical
                            excellence, and creative problem-solving across web
                            development, mobile applications, and full-stack
                            systems.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter and Search */}
            <section className="py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
                        {/* Category Filters */}
                        <div className="flex flex-wrap gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category.value}
                                    onClick={() =>
                                        setActiveFilter(category.value)
                                    }
                                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                                        activeFilter === category.value
                                            ? 'bg-gradient-to-r from-[#00BBB1] to-[#00C4F4] text-white shadow-lg'
                                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`}>
                                    <category.icon className="h-4 w-4" />
                                    <span>{category.name}</span>
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00BBB1] focus:ring-1 focus:ring-[#00BBB1] transition-colors duration-300"
                            />
                        </div>
                    </div>

                    {/* Projects Count */}
                    <div className="mb-8">
                        <p className="text-gray-400">
                            Showing{' '}
                            <span className="text-[#00BBB1] font-semibold">
                                {filteredProjects.length}
                            </span>{' '}
                            projects
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section ref={projectsRef} className="pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.name}
                                className={`group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 hover:border-[#00BBB1]/50 transition-all duration-500 hover:scale-105 cosmic-glow ${
                                    projectsInView
                                        ? 'animate-in slide-in-from-bottom duration-1000'
                                        : 'opacity-0'
                                }`}
                                style={{ animationDelay: `${index * 100}ms` }}>
                                <div className="absolute inset-0 bg-gradient-to-br from-[#00BBB1]/5 to-[#00C4F4]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Project Image */}
                                <div className="aspect-video overflow-hidden">
                                    {project.screenshots &&
                                    project.screenshots[0] ? (
                                        <Image
                                            src={project.screenshots[0]}
                                            alt={project.name}
                                            width={800}
                                            height={450}
                                            quality={90}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            priority={index < 3} // Prioritize loading first 3 images
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                                            <Code className="h-12 w-12 text-gray-600" />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                                </div>
                                {/* Project Content */}
                                <div className="relative z-10 p-6">
                                    {/* Technologies */}
                                    {project.techs && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.techs
                                                .slice(0, 3)
                                                .map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2 py-1 bg-[#00BBB1]/20 text-[#00BBB1] text-xs rounded-full border border-[#00BBB1]/30">
                                                        {tech}
                                                    </span>
                                                ))}
                                            {project.techs.length > 3 && (
                                                <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                                                    +{project.techs.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    )}

                                    <h3 className="heading-3 text-white mb-3 group-hover:text-[#00BBB1] transition-colors duration-300">
                                        {project.name}
                                    </h3>

                                    <p className="content-3 text-gray-400 mb-6 line-clamp-3">
                                        {project.description ||
                                            project.min_desc}
                                    </p>

                                    {/* Action Buttons */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex space-x-3">
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-[#00BBB1] transition-all duration-300">
                                                    <Github className="h-4 w-4" />
                                                </a>
                                            )}
                                            {project.deployment && (
                                                <a
                                                    href={project.deployment}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-[#00C4F4] transition-all duration-300">
                                                    <ExternalLink className="h-4 w-4" />
                                                </a>
                                            )}
                                        </div>

                                        <Link
                                            href={`/portfolio/${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="text-[#00BBB1] font-medium flex items-center space-x-1 group-hover:text-[#00C4F4] transition-colors duration-300">
                                            <span>View Details</span>
                                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* No Results */}
                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Search className="h-8 w-8 text-gray-600" />
                            </div>
                            <h3 className="heading-3 text-white mb-4">
                                No projects found
                            </h3>
                            <p className="content-3 text-gray-400 mb-6">
                                Try adjusting your search terms or filters to
                                find what you're looking for.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setActiveFilter('all');
                                }}
                                className="px-6 py-3 bg-gradient-to-r from-[#00BBB1] to-[#00C4F4] text-white font-medium rounded-lg hover:shadow-lg hover:shadow-[#00BBB1]/25 transition-all duration-300">
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
