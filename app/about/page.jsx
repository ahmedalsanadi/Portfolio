//app/about/page.jsx
'use client';
import Hero from '@/components/common/Hero';
import StorySection from '@/components/common/StorySection';
import { useInView } from 'react-intersection-observer';

import {
    Code,
    Database,
    Smartphone,
    Globe,
    Users,
    Target,
    Heart,
} from 'lucide-react';
import { personal, skills } from '@/lib/data';
import EducationSection from '@/components/common/EducationSection';

const values = [
    {
        icon: Code,
        title: 'Clean Code',
        description:
            'Writing maintainable, scalable, and well-documented code that stands the test of time.',
    },
    {
        icon: Users,
        title: 'Collaboration',
        description:
            'Working closely with teams and clients to deliver solutions that exceed expectations.',
    },
    {
        icon: Target,
        title: 'Problem Solving',
        description:
            'Approaching challenges with analytical thinking and innovative solutions.',
    },
    {
        icon: Heart,
        title: 'Passion',
        description:
            'Genuinely loving what I do and continuously learning new technologies.',
    },
];

export default function AboutPage() {
    const { ref: skillsRef, inView: skillsInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: valuesRef, inView: valuesInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <Hero
                variant="about"
                personal={personal}
                badgeText="👨‍💻 About Me"
                title="Passionate"
                description={personal.summary}
                showQuickInfo={true}
                showProfileInitials={false}
            />

            {/* Story Section */}
            <StorySection personal={personal} />

            {/* Values Section */}
            <section ref={valuesRef} className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div
                        className={`text-center mb-16 ${valuesInView ? 'animate-in slide-in-from-bottom duration-1000' : 'opacity-0'}`}>
                        <h2 className="heading-2 text-white mb-4">
                            Core Values
                        </h2>
                        <p className="content-3 text-gray-400 max-w-2xl mx-auto">
                            The principles that guide my work and define my
                            approach to software development
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={value.title}
                                className={`group text-center ${valuesInView ? 'animate-in slide-in-from-bottom duration-1000' : 'opacity-0'}`}
                                style={{ animationDelay: `${index * 150}ms` }}>
                                <div className="relative inline-block mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-r from-[#00BBB1] to-[#00C4F4] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                        <value.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#00BBB1] to-[#00C4F4] rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                                </div>

                                <h3 className="heading-3 text-white mb-4 group-hover:text-[#00BBB1] transition-colors duration-300">
                                    {value.title}
                                </h3>

                                <p className="content-3 text-gray-400">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section
                ref={skillsRef}
                className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
                <div className="max-w-7xl mx-auto">
                    <div
                        className={`text-center mb-16 ${skillsInView ? 'animate-in slide-in-from-bottom duration-1000' : 'opacity-0'}`}>
                        <h2 className="heading-2 text-white mb-4">
                            Technical Skills
                        </h2>
                        <p className="content-3 text-gray-400 max-w-2xl mx-auto">
                            A comprehensive toolkit for building modern web
                            applications and digital solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Frontend Skills */}
                        <div
                            className={`${skillsInView ? 'animate-in slide-in-from-bottom duration-1000' : 'opacity-0'}`}>
                            <div className="flex items-center mb-6">
                                <Code className="h-6 w-6 text-[#00BBB1] mr-3" />
                                <h3 className="heading-3 text-white">
                                    Frontend
                                </h3>
                            </div>
                            <div className="space-y-3">
                                {skills.frontend.map((skill) => (
                                    <div
                                        key={skill}
                                        className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                                        <span className="text-gray-300">
                                            {skill}
                                        </span>
                                        <div className="w-2 h-2 bg-[#00BBB1] rounded-full"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Backend Skills */}
                        <div
                            className={`${skillsInView ? 'animate-in slide-in-from-bottom duration-1000' : 'opacity-0'}`}
                            style={{ animationDelay: '200ms' }}>
                            <div className="flex items-center mb-6">
                                <Database className="h-6 w-6 text-[#00C4F4] mr-3" />
                                <h3 className="heading-3 text-white">
                                    Backend
                                </h3>
                            </div>
                            <div className="space-y-3">
                                {skills.backend.map((skill) => (
                                    <div
                                        key={skill}
                                        className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                                        <span className="text-gray-300">
                                            {skill}
                                        </span>
                                        <div className="w-2 h-2 bg-[#00C4F4] rounded-full"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Skills */}
                        <div
                            className={`${skillsInView ? 'animate-in slide-in-from-bottom duration-1000' : 'opacity-0'}`}
                            style={{ animationDelay: '400ms' }}>
                            <div className="flex items-center mb-6">
                                <Smartphone className="h-6 w-6 text-[#00BBB1] mr-3" />
                                <h3 className="heading-3 text-white">Mobile</h3>
                            </div>
                            <div className="space-y-3">
                                {skills.mobile.map((skill) => (
                                    <div
                                        key={skill}
                                        className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                                        <span className="text-gray-300">
                                            {skill}
                                        </span>
                                        <div className="w-2 h-2 bg-[#00BBB1] rounded-full"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tools Skills */}
                        <div
                            className={`${skillsInView ? 'animate-in slide-in-from-bottom duration-1000' : 'opacity-0'}`}
                            style={{ animationDelay: '600ms' }}>
                            <div className="flex items-center mb-6">
                                <Globe className="h-6 w-6 text-[#00C4F4] mr-3" />
                                <h3 className="heading-3 text-white">Tools</h3>
                            </div>
                            <div className="space-y-3">
                                {skills.tools.map((skill) => (
                                    <div
                                        key={skill}
                                        className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                                        <span className="text-gray-300">
                                            {skill}
                                        </span>
                                        <div className="w-2 h-2 bg-[#00C4F4] rounded-full"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education & Courses Section */}
            <EducationSection
                educationData={personal.education}
                coursesData={personal.courses}
                achievementsData={personal.achievements}
                />
        </div>
    );
}
