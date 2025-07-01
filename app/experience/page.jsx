'use client';

import { useInView } from 'react-intersection-observer';
import {
    Calendar,
    MapPin,
    ExternalLink,
    Code,
    Award,
    Briefcase,
} from 'lucide-react';
import { personal } from '@/lib/data';
import EducationSection from '@/components/common/EducationSection';

export default function ExperiencePage() {
    const { ref: heroRef, inView: heroInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: projectsRef, inView: projectsInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: workRef, inView: workInView } = useInView({
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
                                🚀 Professional Journey
                            </span>
                        </div>

                        <h1 className="heading-1 text-white max-w-4xl mx-auto">
                            Experience &{' '}
                            <span className="text-gradient">
                                Professional Growth
                            </span>
                        </h1>

                        <p className="content-2 text-gray-300 max-w-3xl mx-auto">
                            {personal.stats.yearsExperience}+ years of building
                            innovative solutions, leading projects, and
                            continuously evolving in the ever-changing world of
                            technology.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <div className="flex items-center space-x-2 text-gray-400">
                                <Calendar className="h-5 w-5 text-[#00BBB1]" />
                                <span>Started: 2020</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-400">
                                <MapPin className="h-5 w-5 text-[#00BBB1]" />
                                <span>
                                    {personal.address
                                        .split(',')
                                        .slice(-1)[0]
                                        .trim()}
                                </span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-400">
                                <Award className="h-5 w-5 text-[#00BBB1]" />
                                <span>{personal.education[0].honors}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Experience Timeline */}
            <section
                ref={projectsRef}
                className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
                <div className="max-w-7xl mx-auto">
                    <div
                        className={`text-center mb-16 ${projectsInView ? 'animate-in slide-in-from-bottom duration-1000' : 'opacity-0'}`}>
                        <h2 className="heading-2 text-white mb-4">
                            Project Experience
                        </h2>
                        <p className="content-3 text-gray-400 max-w-2xl mx-auto">
                            Key projects that shaped my expertise and
                            demonstrated technical leadership
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00BBB1] to-[#00C4F4] hidden md:block"></div>

                        <div className="space-y-12">
                            {personal.experience.map((project, index) => (
                                <div
                                    key={project.title}
                                    className={`group relative ${projectsInView ? 'animate-in slide-in-from-bottom duration-1000' : 'opacity-0'}`}
                                    style={{
                                        animationDelay: `${index * 200}ms`,
                                    }}>
                                    {/* Timeline Dot */}
                                    <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-[#00BBB1] to-[#00C4F4] rounded-full border-4 border-[#030B15] hidden md:block group-hover:scale-125 transition-transform duration-300"></div>

                                    <div className="md:ml-20">
                                        <div className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00BBB1]/50 transition-all duration-500 cosmic-glow">
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#00BBB1]/5 to-[#00C4F4]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                            <div className="relative z-10">
                                                <div className="flex items-start justify-between mb-6">
                                                    <div className="flex-1">
                                                        <h3 className="heading-3 text-white mb-2 group-hover:text-[#00BBB1] transition-colors duration-300">
                                                            {project.title}
                                                        </h3>
                                                        {project.github && (
                                                            <a
                                                                href={
                                                                    project.github
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center space-x-2 text-[#00C4F4] hover:text-[#00BBB1] transition-colors duration-300">
                                                                <ExternalLink className="h-4 w-4" />
                                                                <span className="text-sm">
                                                                    View
                                                                    Repository
                                                                </span>
                                                            </a>
                                                        )}
                                                    </div>

                                                    <div className="flex items-center space-x-2">
                                                        <Code className="h-5 w-5 text-[#00BBB1]" />
                                                        <span className="text-sm text-gray-400">
                                                            Project
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Technologies */}
                                                <div className="mb-6">
                                                    <h4 className="text-sm font-semibold text-white mb-3">
                                                        Technologies Used
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.technologies.map(
                                                            (tech) => (
                                                                <span
                                                                    key={tech}
                                                                    className="px-3 py-1 bg-[#00BBB1]/20 text-[#00BBB1] text-sm rounded-full border border-[#00BBB1]/30">
                                                                    {tech}
                                                                </span>
                                                            ),
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Project Details */}
                                                <div className="space-y-3">
                                                    {project.details.map(
                                                        (
                                                            detail,
                                                            detailIndex,
                                                        ) => (
                                                            <div
                                                                key={
                                                                    detailIndex
                                                                }
                                                                className="flex items-start space-x-3">
                                                                <div className="w-2 h-2 bg-[#00BBB1] rounded-full mt-2 flex-shrink-0"></div>
                                                                <p className="content-3 text-gray-300">
                                                                    {detail}
                                                                </p>
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Work Experience */}
            <section ref={workRef} className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div
                        className={`text-center mb-16 ${workInView ? 'animate-in slide-in-from-bottom duration-1000' : 'opacity-0'}`}>
                        <h2 className="heading-2 text-white mb-4">
                            Professional Experience
                        </h2>
                        <p className="content-3 text-gray-400 max-w-2xl mx-auto">
                            Corporate roles and internships that built my
                            professional foundation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {personal.workExperience.map((work, index) => (
                            <div
                                key={work.role}
                                className={`group p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00BBB1]/50 transition-all duration-500 cosmic-glow ${
                                    workInView
                                        ? 'animate-in slide-in-from-bottom duration-1000'
                                        : 'opacity-0'
                                }`}
                                style={{ animationDelay: `${index * 300}ms` }}>
                                <div className="absolute inset-0 bg-gradient-to-br from-[#00BBB1]/5 to-[#00C4F4]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-12 h-12 bg-gradient-to-r from-[#00BBB1] to-[#00C4F4] rounded-lg flex items-center justify-center">
                                                <Briefcase className="h-6 w-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="heading-3 text-white group-hover:text-[#00BBB1] transition-colors duration-300">
                                                    {work.role}
                                                </h3>
                                                <p className="content-3 text-[#00C4F4]">
                                                    {work.company}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="text-right">
                                            <div className="content-3 text-gray-400">
                                                {work.duration}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        {work.tasks.map((task, taskIndex) => (
                                            <div
                                                key={taskIndex}
                                                className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-[#00BBB1] rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="content-3 text-gray-300">
                                                    {task}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education & Courses */}
            <EducationSection
                educationData={personal.education}
                coursesData={personal.courses}
            />
        </div>
    );
}
