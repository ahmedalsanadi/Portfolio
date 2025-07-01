'use client';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

function EducationSection({
    educationData,
    coursesData,
    achievementsData = [],
}) {
    const { ref: coursesRef, inView: coursesInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section
            ref={coursesRef}
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
            <div className="max-w-7xl mx-auto">
                <div
                    className={`text-center mb-16 ${coursesInView ? 'animate-in slide-in-from-bottom duration-1000' : 'opacity-0'}`}>
                    <h2 className="heading-2 text-white mb-4">
                        Education & Continuous Learning
                    </h2>
                    <p className="content-3 text-gray-400 max-w-2xl mx-auto">
                        Academic foundation and ongoing professional development
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Education */}
                    <div
                        className={`${coursesInView ? 'animate-in slide-in-from-left duration-1000' : 'opacity-0'}`}>
                        <div className="flex items-center space-x-3 mb-8">
                            <GraduationCap className="h-6 w-6 text-[#00BBB1]" />
                            <h3 className="heading-3 text-white">Education</h3>
                        </div>

                        <div className="space-y-6">
                            {educationData.map((edu, index) => (
                                <div
                                    key={edu.degree}
                                    className="group p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00BBB1]/50 transition-all duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#00BBB1]/5 to-[#00C4F4]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    <div className="relative z-10">
                                        <h4 className="heading-3 text-white mb-2 group-hover:text-[#00BBB1] transition-colors duration-300">
                                            {edu.degree}
                                        </h4>
                                        {edu.institution && (
                                            <p className="content-3 text-[#00C4F4] mb-2">
                                                {edu.institution}
                                            </p>
                                        )}
                                        <div className="flex items-center justify-between">
                                            <p className="content-3 text-gray-400">
                                                {edu.graduationDate}
                                            </p>
                                            <div className="text-right">
                                                <div className="content-2 text-white font-semibold">
                                                    {edu.grade}
                                                </div>
                                                {edu.cgpa && (
                                                    <div className="text-sm text-gray-400">
                                                        CGPA: {edu.cgpa}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        {edu.honors && (
                                            <div className="mt-3">
                                                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-[#00BBB1]/20 to-[#00C4F4]/20 rounded-full border border-[#00BBB1]/30">
                                                    <Award className="h-4 w-4 text-[#00BBB1] mr-2" />
                                                    <span className="text-[#00BBB1] text-sm font-medium">
                                                        {edu.honors}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Courses & Certifications */}
                    <div
                        className={`${coursesInView ? 'animate-in slide-in-from-right duration-1000' : 'opacity-0'}`}>
                        <div className="flex items-center space-x-3 mb-8">
                            <BookOpen className="h-6 w-6 text-[#00C4F4]" />
                            <h3 className="heading-3 text-white">
                                Courses & Certifications
                            </h3>
                        </div>

                        <div className="space-y-4">
                            {coursesData.map((course, index) => (
                                <div
                                    key={course}
                                    className="group p-4 bg-gradient-to-br from-gray-900/30 to-gray-800/30 rounded-lg border border-gray-700 hover:border-[#00C4F4]/50 transition-all duration-300"
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                    }}>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-[#00C4F4] rounded-full flex-shrink-0"></div>
                                        <p className="content-3 text-gray-300 group-hover:text-white transition-colors duration-300">
                                            {course}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Optional: Achievements */}
                {achievementsData.length > 0 && (
                    <div className="mt-16">
                        <div className="text-center mb-12">
                            <h3 className="heading-3 text-white mb-4">
                                Key Achievements
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {achievementsData.map((achievement, index) => (
                                <div
                                    key={achievement}
                                    className={`group text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00BBB1]/50 transition-all duration-500 ${
                                        coursesInView
                                            ? 'animate-in slide-in-from-bottom duration-1000'
                                            : 'opacity-0'
                                    }`}
                                    style={{
                                        animationDelay: `${index * 200}ms`,
                                    }}>
                                    <div className="w-12 h-12 bg-gradient-to-r from-[#00BBB1] to-[#00C4F4] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Award className="h-6 w-6 text-white" />
                                    </div>
                                    <p className="content-3 text-gray-300 group-hover:text-white transition-colors duration-300">
                                        {achievement}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default EducationSection;
