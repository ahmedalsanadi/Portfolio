import InfoSection from '../common/InfoSection';
import { Users, Code, Shield, Zap } from 'lucide-react';

const processSteps = [
    {
        step: '01',
        title: 'Consultation',
        description:
            'We discuss your project requirements, goals, and vision to create a comprehensive plan.',
        icon: Users,
    },
    {
        step: '02',
        title: 'Development',
        description:
            'Agile development process with regular updates and milestones to ensure quality delivery.',
        icon: Code,
    },
    {
        step: '03',
        title: 'Testing',
        description:
            'Rigorous testing across all devices and browsers to ensure optimal performance and reliability.',
        icon: Shield,
    },
    {
        step: '04',
        title: 'Deployment',
        description:
            'Seamless deployment and launch with ongoing support and maintenance as needed.',
        icon: Zap,
    },
];

const ProcessSection = () => {
    return (
        <InfoSection
            title="Development Process"
            subtitle="A streamlined approach that ensures quality delivery and client satisfaction at every step"
            items={processSteps}
            showStepNumber={true}
            cta={{
                label: 'Get Free Consultation',
                href: '/contact',
                tag: 'Ready to start your project?',
            }}
            iconContainerStyle="w-20 h-20"
            withOverlay={true}
        />
    );
};

export default ProcessSection;
