// Centralized data management
import personalData from '@/data/personal-data.json';
import projectsData from '@/data/projects-data.json';

// Personal Information
export const personal = personalData;

// Projects Information
export const projects = projectsData.projects;

// Derived data for better performance
export const skills = {
    frontend: personal.skills.frontend,
    backend: personal.skills.backend,
    mobile: personal.skills.mobileDevelopment,
    tools: [
        ...personal.skills.versionControl,
        ...personal.skills.testing,
        ...personal.skills.deployment,
        ...personal.skills.tools,
    ],
    languages: personal.skills.otherLanguages,
};

export const socialLinks = [
    {
        name: 'GitHub',
        href: personal.contacts.github,
        icon: 'Github',
    },
    {
        name: 'LinkedIn',
        href: personal.contacts.linkedin,
        icon: 'Linkedin',
    },
    {
        name: 'Facebook',
        href: personal.contacts.facebook,
        icon: 'Facebook',
    },
];

export const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' },
];

export const services = [
    {
        icon: 'Code',
        title: 'Frontend Development',
        description:
            'Modern, responsive interfaces using React, Next.js, and cutting-edge CSS frameworks for exceptional user experiences.',
        color: 'from-blue-500 to-cyan-500',
        technologies: personal.skills.frontend,
        features: [
            'Responsive Design',
            'Performance Optimization',
            'SEO Friendly',
            'Accessibility Compliant',
            'Cross-browser Compatibility',
            'Progressive Web Apps',
        ],
    },
    {
        icon: 'Database',
        title: 'Backend Development',
        description:
            'Robust server-side solutions with Laravel, PHP, RESTful APIs, and optimized database architectures.',
        color: 'from-purple-500 to-pink-500',
        technologies: personal.skills.backend,
        features: [
            'RESTful API Development',
            'Database Design & Optimization',
            'Authentication & Authorization',
            'Third-party Integrations',
            'Caching Strategies',
            'Security Implementation',
        ],
    },
    {
        icon: 'Globe',
        title: 'Full-Stack Solutions',
        description:
            'End-to-end web applications combining powerful backends with intuitive frontends for complete digital solutions.',
        color: 'from-green-500 to-teal-500',
        technologies: [
            ...personal.skills.frontend.slice(0, 3),
            ...personal.skills.backend.slice(0, 3),
        ],
        features: [
            'Complete Web Applications',
            'API Development & Integration',
            'Database Architecture',
            'User Authentication',
            'Real-time Features',
            'Deployment & DevOps',
        ],
    },
    {
        icon: 'Smartphone',
        title: 'Mobile Development',
        description:
            'Cross-platform mobile applications using Flutter and Dart for iOS and Android platforms.',
        color: 'from-orange-500 to-red-500',
        technologies: personal.skills.mobileDevelopment,
        features: [
            'Cross-platform Development',
            'Native Performance',
            'Offline Functionality',
            'Push Notifications',
            'App Store Optimization',
            'Analytics Integration',
        ],
    },
    {
        icon: 'Shield',
        title: 'Database Design',
        description:
            'Optimized database structures using MySQL, Oracle, and modern data modeling techniques.',
        color: 'from-indigo-500 to-purple-500',
        technologies: ['MySQL', 'Oracle', 'SQLite', 'Database Modeling'],
        features: [
            'Schema Design & Optimization',
            'Performance Tuning',
            'Data Migration',
            'Backup & Recovery',
            'Security Implementation',
            'Monitoring & Maintenance',
        ],
    },
    {
        icon: 'Zap',
        title: 'API Development',
        description:
            'RESTful services, third-party integrations, and seamless data exchange solutions.',
        color: 'from-pink-500 to-rose-500',
        technologies: ['RESTful APIs', 'JSON', 'AJAX', 'Laravel', 'PHP'],
        features: [
            'RESTful API Design',
            'API Documentation',
            'Rate Limiting & Security',
            'Third-party Integrations',
            'API Testing & Monitoring',
            'Data Exchange Solutions',
        ],
    },
    {
        icon: 'Palette',
        title: 'UI/UX Implementation',
        description:
            'Pixel-perfect designs transformed into responsive, accessible, and performant web interfaces.',
        color: 'from-cyan-500 to-blue-500',
        technologies: ['HTML', 'CSS', 'Tailwind', 'Bootstrap', 'JavaScript'],
        features: [
            'Pixel-perfect Implementation',
            'Responsive Design',
            'Accessibility Standards',
            'Performance Optimization',
            'Cross-browser Compatibility',
            'Animation & Interactions',
        ],
    },
    {
        icon: 'Sparkles',
        title: 'Digital Transformation',
        description:
            'Complete business solutions that modernize workflows and enhance digital presence.',
        color: 'from-emerald-500 to-green-500',
        technologies: [
            'Full-stack',
            'System Integration',
            'Process Automation',
        ],
        features: [
            'Business Process Analysis',
            'System Integration',
            'Legacy Modernization',
            'Workflow Automation',
            'Digital Strategy Consulting',
            'Complete Solution Development',
        ],
    },
];

export const stats = [
    {
        label: 'Years Experience',
        value: `${personal.stats.yearsExperience}+`,
        icon: 'Star',
    },
    {
        label: 'Projects Completed',
        value: `${personal.stats.projectsCompleted}+`,
        icon: 'Code',
    },
    {
        label: 'Happy Clients',
        value: `${personal.stats.clientsServed}+`,
        icon: 'Users',
    },
    {
        label: 'GitHub Repositories',
        value: `${personal.stats.githubRepos}+`,
        icon: 'Database',
    },
];

// Featured projects for homepage
// export const featuredProjects = projects.slice(0, 3).map((project) => ({
//     ...project,
//     image:
//         project.screenshots?.[0] ||
//         'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
//     featured: project.name === 'Movie Streaming App',
// }));

export const featuredProjectsData = [
    {
        id: 1,
        name: 'Movie Streaming App',
        min_desc:
            'A comprehensive streaming platform for movies and shows with advanced filtering and user management',
        techs: ['Next.js', 'React', 'Tailwind CSS', 'Firebase', 'i18next'],
        image: '/images/mockups/movie-mockup.png',
        featured: true,
        category: 'Web App',
        year: '2023',
        status: 'Live',
        githubLink: 'https://github.com/ahmedalsanadi/Movie-Streaming-App',
        deploymentLink: 'https://movie-streaming-app-virid.vercel.app/',
    },

    {
        id: 2,
        name: 'Car Rental Platform',
        min_desc:
            'Modern car rental service with real-time booking and fleet management',
        techs: [
            'Next.js 15',
            'React 18',
            'TypeScript',
            'Tailwind CSS',
            'Shadcn/ui',
        ],

        image: '/images/projects/car-rental/1.png',
        featured: false,
        category: 'E-commerce',
        year: '2025',
        status: 'Live',
        githubLink: 'https://github.com/ahmedalsanadi/car-rental',
        deploymentLink: 'https://car-rental-psi-nine.vercel.app/',
    },
    {
        id: 3,
        name: 'FinBiz Financial Dashboard',
        min_desc:
            'Complete financial analytics dashboard with real-time data visualization',
        techs: [
            'React',
            'React DOM',
            'CSS Modules',
            'AOS',
            'Chart.js',
            'Swiper',
            'React Icons',
        ],
        image: '/images/mockups/finbiz-mockup.png',
        featured: false,
        category: 'Dashboard',
        year: '2024',
        status: 'Development',
        githubLink: 'https://github.com/ahmedalsanadi/FinBiz',
        deploymentLink: 'https://main--finbiz-al-sanadi.netlify.app/',
    },
];
