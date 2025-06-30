import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
    ArrowRight,
    ExternalLink,
    Github,
    Eye,
    Star,
    Calendar,
} from 'lucide-react';
import Link from 'next/link';

const ProjectCard = ({ project, index, isInView }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // For small screens, treat all cards equally (no featured styling)
    const isFeaturedLayout = project.featured && isLargeScreen;

    return (
        <div
            className={`group relative overflow-hidden rounded-2xl transition-all duration-500 transform ${
                isFeaturedLayout
                    ? 'lg:col-span-2 lg:row-span-2 h-96 lg:h-full'
                    : 'h-80 lg:h-96'
            } ${
                isInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
            }`}
            style={{
                animationDelay: `${index * 150}ms`,
                background:
                    'linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(31, 41, 55, 0.8) 100%)',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            {/* Simplified Border Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/30 via-teal-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-px">
                <div className="w-full h-full rounded-2xl bg-gray-900"></div>
            </div>

            {/* Main Content Container */}
            <div className="relative h-full flex flex-col overflow-hidden rounded-2xl border border-gray-700/50 group-hover:border-cyan-500/20 transition-colors duration-300">
                {/* Image Section */}
                <div
                    className={`relative overflow-hidden ${isFeaturedLayout ? 'h-48 lg:flex-1' : 'h-48'}`}>
                    {/* Status and Category Badges */}
                    <div className="absolute top-3 left-3 right-3 z-20 flex justify-between">
                        <span
                            className={`px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                                project.status === 'Live'
                                    ? 'bg-green-500/20 text-green-400'
                                    : 'bg-yellow-500/20 text-yellow-400'
                            }`}>
                            {project.status}
                        </span>
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 backdrop-blur-sm">
                            {project.category}
                        </span>
                    </div>

                    {/* Optimized Image with Next.js Image component */}
                    <div className="relative w-full h-full bg-gray-800">
                        <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            sizes={
                                isFeaturedLayout
                                    ? '(max-width: 1024px) 100vw, 66vw'
                                    : '(max-width: 1024px) 100vw, 33vw'
                            }
                            className={`object-cover transition-transform duration-500 ${
                                isHovered ? 'scale-105' : 'scale-100'
                            }`}
                            priority={index < 3}
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        />
                    </div>

                    {/* Simplified Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>

                    {/* Hover Action Icons */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex space-x-3">
                            <a
                                href={project.deploymentLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center hover:bg-cyan-500/30 transition-colors duration-200">
                                <Eye className="w-4 h-4 text-white" />
                            </a>
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center hover:bg-cyan-500/30 transition-colors duration-200">
                                <Github className="w-4 h-4 text-white" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div
                    className={`relative p-4 lg:p-5 ${isFeaturedLayout ? 'flex-shrink-0' : 'flex-1'} flex flex-col justify-between`}>
                    {/* Project Info */}
                    <div className="mb-3">
                        {/* Title with Year */}
                        <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg lg:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                                {project.name}
                            </h3>
                            <div className="flex items-center space-x-1 text-gray-400 text-sm ml-2">
                                <Calendar className="w-3 h-3" />
                                <span>{project.year}</span>
                            </div>
                        </div>

                        {/* Description - Show on large screens or featured projects on large screens */}
                        {isLargeScreen && (
                            <p className="text-gray-400 text-sm leading-relaxed mb-3 line-clamp-2">
                                {project.min_desc}
                            </p>
                        )}

                        {/* Tech Stack - Simplified */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                            {project.techs.slice(0, 3).map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2 py-1 text-xs font-medium rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                    {tech}
                                </span>
                            ))}
                            {project.techs.length > 3 && (
                                <span className="px-2 py-1 text-xs font-medium rounded-md bg-gray-700/50 text-gray-400">
                                    +{project.techs.length - 3}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Action Footer */}
                    <div className="flex items-center justify-between">
                        <Link
                            href={`/portfolio/${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 text-cyan-400 font-medium text-sm hover:text-cyan-300 transition-colors duration-200">
                            <span>View Project</span>
                            <ArrowRight className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform duration-200" />
                        </Link>

                        <div className="flex items-center space-x-1 text-cyan-500">
                            <Star className="w-3 h-3 fill-current" />
                            <span className="text-xs font-medium">4.8</span>
                        </div>
                    </div>
                </div>

                {/* Subtle Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/2 to-blue-500/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
        </div>
    );
};

export default ProjectCard;
