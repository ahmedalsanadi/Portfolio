'use client';

import { useInView } from 'react-intersection-observer';

export default function StorySection({
    title = 'My Story',
    paragraphs = [],
    personal = {},
    animation = true,
    centered = true,
    gradientBackground = true,
    maxWidth = '4xl',
}) {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    // Default paragraphs if none provided
    const defaultParagraphs = [
        personal.aboutMe || '',
        `With over ${personal.stats?.yearsExperience || '0'} years of experience in software development, I've had the privilege of working on diverse projects ranging from mobile applications to complex full-stack web solutions. My journey began with a curiosity about how technology can solve real-world problems, and it has evolved into a deep commitment to creating solutions that make a difference.`,
        `I hold a ${personal.education?.[0]?.degree || 'degree'} with ${personal.education?.[0]?.honors || 'honors'}, achieving a CGPA of ${personal.education?.[0]?.cgpa || 'CGPA'}. This academic foundation, combined with hands-on experience across ${personal.stats?.projectsCompleted || '0'}+ projects, has equipped me with both theoretical knowledge and practical skills to tackle complex technical challenges.`,
    ];

    const contentToRender =
        paragraphs.length > 0 ? paragraphs : defaultParagraphs;

    return (
        <section
            ref={animation ? ref : null}
            className={`py-20 px-4 sm:px-6 lg:px-8 ${gradientBackground ? 'bg-gradient-to-b from-transparent to-gray-900/20' : ''}`}>
            <div className={`max-w-${maxWidth} mx-auto`}>
                <div
                    className={
                        animation
                            ? `${inView ? 'animate-in slide-in-from-bottom duration-1000' : 'opacity-0'}`
                            : ''
                    }>
                    <h2
                        className={`heading-2 text-white mb-8 ${centered ? 'text-center' : ''}`}>
                        {title}
                    </h2>

                    <div className="prose prose-lg max-w-none">
                        {contentToRender.map((paragraph, index) => (
                            <p
                                key={index}
                                className="content-2 text-gray-300 mb-6 leading-relaxed last:mb-0">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
