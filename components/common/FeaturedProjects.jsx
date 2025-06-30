import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { featuredProjectsData } from '@/lib/data';
import ProjectCard from '@/components/common/ProjectCard';

const FeaturedProjects = () => {
    const [isInView, setIsInView] = useState(true);

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div
                    className={`flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16 ${
                        isInView
                            ? 'animate-in slide-in-from-bottom duration-1000'
                            : 'opacity-0'
                    }`}>
                    <div className="mb-8 lg:mb-0">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            Latest Works
                            <span className="block w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mt-2"></span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Featured projects showcasing innovation and
                            technical excellence
                        </p>
                    </div>

                    {/* Interactive Mini Chart */}
                    <div className="hidden lg:block">
                        <div className="w-64 h-32 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-4 border border-gray-700/50">
                            <div className="flex items-end justify-between h-full space-x-2">
                                {[40, 65, 45, 80, 55, 90, 70].map(
                                    (height, index) => (
                                        <div
                                            key={index}
                                            className="bg-gradient-to-t from-cyan-500 to-blue-500 rounded-sm flex-1 transition-all duration-1000 hover:opacity-80"
                                            style={{
                                                height: isInView
                                                    ? `${height}%`
                                                    : '0%',
                                                animationDelay: `${index * 100}ms`,
                                            }}
                                        />
                                    ),
                                )}
                            </div>
                            <div className="text-center mt-2">
                                <span className="text-xs text-gray-400">
                                    Project Performance
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {featuredProjectsData.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            isInView={isInView}
                        />
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105">
                        <span className="relative z-10">
                            View Full Portfolio
                        </span>
                        <ArrowRight className="relative z-10 ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />

                        {/* Button Animation Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
