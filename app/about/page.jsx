'use client';

import { useInView } from 'react-intersection-observer';
import {
    Calendar,
    MapPin,
    Award,
    Code,
    Database,
    Smartphone,
    Globe,
    Users,
    Target,
    Heart,
} from 'lucide-react';
import { personal, skills } from '@/lib/data';

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
    const { ref: heroRef, inView: heroInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: storyRef, inView: storyInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: skillsRef, inView: skillsInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: educationRef, inView: educationInView } = useInView({
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
            <section ref={heroRef} className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div
                            className={`space-y-8 ${heroInView ? 'animate-in slide-in-from-left duration-1000' : 'opacity-0'}`}>
                            <div className="space-y-4">
                                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00BBB1]/20 to-[#00C4F4]/20 rounded-full border border-[#00BBB1]/30">
                                    <span className="text-[#00BBB1] text-sm font-medium">
                                        👨‍💻 About Me
                                    </span>
                                </div>

                                <h1 className="heading-1 text-white">
                                    Passionate{' '}
                                    <span className="text-gradient">
                                        Full-Stack Developer
                                    </span>
                                </h1>

                                <p className="content-2 text-gray-300">
                                    Building meaningful digital products with
                                    clean code, collaboration, and lifelong
                                    learning
                                </p>
                            </div>

                            {/* Quick Info */}
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
                        </div>

                        {/* Profile Image */}
                        <div
                            className={`relative ${heroInView ? 'animate-in slide-in-from-right duration-1000' : 'opacity-0'}`}>
                            <div className="relative w-full max-w-lg mx-auto">
                                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#00BBB1]/20 to-[#00C4F4]/20 p-8">
                                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#00BBB1]/10 to-[#00C4F4]/10"></div>
                                        <div className="relative z-10 text-6xl font-bold text-white">
                                            {personal.name.split(' ')[0][0]}
                                            {
                                                personal.name.split(' ')[
                                                    personal.name.split(' ')
                                                        .length - 1
                                                ][0]
                                            }
                                        </div>
                                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00BBB1]/20 rounded-full blur-3xl animate-pulse-slow"></div>
                                        <div
                                            className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#00C4F4]/20 rounded-full blur-3xl animate-pulse-slow"
                                            style={{
                                                animationDelay: '1.5s',
                                            }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section
                ref={storyRef}
                className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
                <div className="max-w-4xl mx-auto">
                    <div
                        className={`${storyInView ? 'animate-in slide-in-from-bottom duration-1000' : 'opacity-0'}`}>
                        <h2 className="heading-2 text-white mb-8 text-center">
                            My Story
                        </h2>

                        <div className="prose prose-lg max-w-none">
                            <p className="content-2 text-gray-300 mb-6 leading-relaxed">
                                {personal.aboutMe}
                            </p>

                            <p className="content-2 text-gray-300 mb-6 leading-relaxed">
                                With over {personal.stats.yearsExperience} years
                                of experience in software development, I've had
                                the privilege of working on diverse projects
                                ranging from mobile applications to complex
                                full-stack web solutions. My journey began with
                                a curiosity about how technology can solve
                                real-world problems, and it has evolved into a
                                deep commitment to creating solutions that make
                                a difference.
                            </p>

                            <p className="content-2 text-gray-300 leading-relaxed">
                                I hold a {personal.education[0].degree} with{' '}
                                {personal.education[0].honors}, achieving a CGPA
                                of {personal.education[0].cgpa}. This academic
                                foundation, combined with hands-on experience
                                across {personal.stats.projectsCompleted}+
                                projects, has equipped me with both theoretical
                                knowledge and practical skills to tackle complex
                                technical challenges.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

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

            {/* Education Section */}
            <section ref={educationRef} className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div
                        className={`text-center mb-16 ${educationInView ? 'animate-in slide-in-from-bottom duration-1000' : 'opacity-0'}`}>
                        <h2 className="heading-2 text-white mb-4">Education</h2>
                        <p className="content-3 text-gray-400">
                            Academic foundation that shaped my technical
                            expertise
                        </p>
                    </div>

                    <div className="space-y-8">
                        {personal.education.map((edu, index) => (
                            <div
                                key={edu.degree}
                                className={`group relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00BBB1]/50 transition-all duration-500 ${
                                    educationInView
                                        ? 'animate-in slide-in-from-bottom duration-1000'
                                        : 'opacity-0'
                                }`}
                                style={{ animationDelay: `${index * 300}ms` }}>
                                <div className="absolute inset-0 bg-gradient-to-br from-[#00BBB1]/5 to-[#00C4F4]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <h3 className="heading-3 text-white mb-2 group-hover:text-[#00BBB1] transition-colors duration-300">
                                                {edu.degree}
                                            </h3>
                                            {edu.institution && (
                                                <p className="content-3 text-[#00C4F4] mb-2">
                                                    {edu.institution}
                                                </p>
                                            )}
                                            <p className="content-3 text-gray-400">
                                                {edu.graduationDate}
                                            </p>
                                        </div>

                                        <div className="text-right">
                                            <div className="content-2 text-white font-semibold">
                                                {edu.grade}
                                            </div>
                                            {edu.cgpa && (
                                                <div className="text-sm text-gray-400">
                                                    CGPA: {edu.cgpa}
                                                </div>
                                            )}
                                            {edu.honors && (
                                                <div className="inline-flex items-center px-3 py-1 mt-2 bg-gradient-to-r from-[#00BBB1]/20 to-[#00C4F4]/20 rounded-full border border-[#00BBB1]/30">
                                                    <Award className="h-4 w-4 text-[#00BBB1] mr-2" />
                                                    <span className="text-[#00BBB1] text-sm font-medium">
                                                        {edu.honors}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
