import { projects } from '@/lib/data';
import ProjectDetailPage from './ProjectDetailPage';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.name.toLowerCase().replace(/\s+/g, '-'),
    }));
}

export default function Page({ params }) {
    // Create a safe reference to the slug
    const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

    const project = projects.find(
        (p) => p.name.toLowerCase().replace(/\s+/g, '-') === slug,
    );

    if (!project) {
        return (
            <div className="min-h-screen pt-20 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="heading-1 text-white mb-4">
                        Project Not Found
                    </h1>
                    <p className="content-3 text-gray-400 mb-8">
                        The project you're looking for doesn't exist.
                    </p>
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#00BBB1] to-[#00C4F4] text-white font-medium rounded-lg hover:shadow-lg hover:shadow-[#00BBB1]/25 transition-all duration-300">
                        <ArrowLeft className="h-5 w-5 mr-2" />
                        Back to Portfolio
                    </Link>
                </div>
            </div>
        );
    }

    // Get related projects
    const relatedProjects = projects
        .filter((p) => p.name !== project.name)
        .slice(0, 3)
        .map((p) => ({
            name: p.name,
            slug: p.name.toLowerCase().replace(/\s+/g, '-'),
            min_desc: p.min_desc,
        }));

    return <ProjectDetailPage project={{ ...project, relatedProjects }} />;
}
