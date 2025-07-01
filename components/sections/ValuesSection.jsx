'use client';
import { Code, Users, Target, Heart } from 'lucide-react';
import InfoSection from '../common/InfoSection';

const coreValues = [
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
    return (
        <InfoSection
            title="Core Values"
            subtitle="The principles that guide my work and define my approach to software development"
            items={coreValues}
            showStepNumber={false}
            iconContainerStyle="w-16 h-16"
            withOverlay={false}
        />
    );
}

export default ValuesSection;
