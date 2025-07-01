import Hero from '@/components/common/Hero';
import StorySection from '@/components/common/StorySection';
import { personal, skills } from '@/lib/data';
import EducationSection from '@/components/sections/EducationSection';
import ValuesSection from '@/components/sections/ValuesSection';
import SkillsSection from '@/components/sections/SkillsSection';

export default function AboutPage() {
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
            <ValuesSection />

            {/* Skills Section */}
            <SkillsSection skills={skills} />

            {/* Education & Courses Section */}
            <EducationSection
                educationData={personal.education}
                coursesData={personal.courses}
                achievementsData={personal.achievements}
            />
        </div>
    );
}