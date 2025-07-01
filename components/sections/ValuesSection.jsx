
import { useInView } from 'react-intersection-observer';
import { Code, Users, Target, Heart } from 'lucide-react';
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

function ValuesSection() {
    const { ref: valuesRef, inView: valuesInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    return (
        <section ref={valuesRef} className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div
                    className={`text-center mb-16 ${valuesInView ? 'animate-in slide-in-from-bottom duration-1000' : 'opacity-0'}`}>
                    <h2 className="heading-2 text-white mb-4">Core Values</h2>
                    <p className="content-3 text-gray-400 max-w-2xl mx-auto">
                        The principles that guide my work and define my approach
                        to software development
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
    );
}

export default ValuesSection;
