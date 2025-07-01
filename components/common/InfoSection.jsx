'use client';

import { useInView } from 'react-intersection-observer';
import InfoCard from './InfoCard';

import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';

export default function InfoSection({
    id,
    title,
    subtitle,
    items,
    showStepNumber = false,
    cta,
    iconContainerStyle = 'w-20 h-20',
    withOverlay = true,
}) {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section ref={ref} id={id} className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div
                    className={`text-center mb-16 ${
                        inView
                            ? 'animate-in slide-in-from-bottom duration-1000'
                            : 'opacity-0'
                    }`}>
                    <h2 className="heading-2 text-white mb-4">{title}</h2>
                    <p className="content-3 text-gray-400 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, index) => (
                        <InfoCard
                            key={item.title}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            step={
                                showStepNumber
                                    ? item.step || index + 1
                                    : undefined
                            }
                            index={index}
                            animate={inView}
                            iconContainerStyle={iconContainerStyle}
                            withOverlay={withOverlay}
                        />
                    ))}
                </div>

                {/* CTA */}
                {cta && (
                    <div className="text-center mt-16">
                        {cta.tag && (
                            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#00BBB1]/20 to-[#00C4F4]/20 rounded-full border border-[#00BBB1]/30 mb-6">
                                <Star className="h-5 w-5 text-[#00BBB1] mr-2" />
                                <span className="text-[#00BBB1] font-medium">
                                    {cta.tag}
                                </span>
                            </div>
                        )}

                        <Link
                            href={cta.href}
                            className="inline-flex mx-2 items-center px-8 py-4 bg-gradient-to-r from-[#00BBB1] to-[#00C4F4] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00BBB1]/25 transition-all duration-300 hover:scale-105">
                            <span>{cta.label}</span>
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
