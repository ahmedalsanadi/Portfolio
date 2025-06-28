'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Github,
    Linkedin,
    Facebook,
    Clock,
    CheckCircle,
    AlertCircle,
} from 'lucide-react';
import { personal, socialLinks } from '@/lib/data';

const projectTypes = [
    'Web Application',
    'Mobile App',
    'E-commerce Site',
    'Landing Page',
    'Full-Stack Solution',
    'API Development',
    'Database Design',
    'Other',
];

const budgetRanges = [
    'Under $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+',
    "Let's discuss",
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        projectType: '',
        budget: '',
        message: '',
        timeline: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const { ref: heroRef, inView: heroInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: formRef, inView: formInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { ref: infoRef, inView: infoInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                subject: '',
                projectType: '',
                budget: '',
                message: '',
                timeline: '',
            });

            // Reset status after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        }, 2000);
    };

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: personal.email,
            href: `mailto:${personal.email}`,
            color: 'from-blue-500 to-cyan-500',
        },
        {
            icon: Phone,
            label: 'Phone',
            value: personal.phone,
            href: `tel:${personal.phone}`,
            color: 'from-green-500 to-teal-500',
        },
        {
            icon: MapPin,
            label: 'Location',
            value: personal.address.split(',').slice(-2).join(',').trim(),
            href: null,
            color: 'from-purple-500 to-pink-500',
        },
    ];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section ref={heroRef} className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <div
                        className={`space-y-8 ${heroInView ? 'animate-in slide-in-from-bottom duration-1000' : 'opacity-0'}`}>
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00BBB1]/20 to-[#00C4F4]/20 rounded-full border border-[#00BBB1]/30">
                            <span className="text-[#00BBB1] text-sm font-medium">
                                💬 Get In Touch
                            </span>
                        </div>

                        <h1 className="heading-1 text-white max-w-4xl mx-auto">
                            Let's Build Something{' '}
                            <span className="text-gradient">
                                Amazing Together
                            </span>
                        </h1>

                        <p className="content-2 text-gray-300 max-w-3xl mx-auto">
                            Ready to bring your ideas to life? I'm here to help
                            you create exceptional digital solutions that drive
                            results and exceed expectations.
                        </p>

                        <div className="flex items-center justify-center space-x-6 text-gray-400">
                            <div className="flex items-center space-x-2">
                                <Clock className="h-5 w-5 text-[#00BBB1]" />
                                <span>Usually responds within 24 hours</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span>Available for new projects</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Information */}
                    <div ref={infoRef} className="lg:col-span-1">
                        <div
                            className={`space-y-8 ${infoInView ? 'animate-in slide-in-from-left duration-1000' : 'opacity-0'}`}>
                            <div>
                                <h2 className="heading-2 text-white mb-6">
                                    Contact Information
                                </h2>
                                <p className="content-3 text-gray-400 mb-8">
                                    Feel free to reach out through any of these
                                    channels. I'm always excited to discuss new
                                    opportunities and innovative projects.
                                </p>
                            </div>

                            {/* Contact Methods */}
                            <div className="space-y-6">
                                {contactInfo.map((contact, index) => (
                                    <div
                                        key={contact.label}
                                        className="group"
                                        style={{
                                            animationDelay: `${index * 200}ms`,
                                        }}>
                                        {contact.href ? (
                                            <a
                                                href={contact.href}
                                                className="flex items-center space-x-4 p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00BBB1]/50 transition-all duration-300 cosmic-glow">
                                                <div
                                                    className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                                    <contact.icon className="h-6 w-6 text-white" />
                                                </div>
                                                <div>
                                                    <div className="text-sm text-gray-400">
                                                        {contact.label}
                                                    </div>
                                                    <div className="text-white font-medium group-hover:text-[#00BBB1] transition-colors duration-300">
                                                        {contact.value}
                                                    </div>
                                                </div>
                                            </a>
                                        ) : (
                                            <div className="flex items-center space-x-4 p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700">
                                                <div
                                                    className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center`}>
                                                    <contact.icon className="h-6 w-6 text-white" />
                                                </div>
                                                <div>
                                                    <div className="text-sm text-gray-400">
                                                        {contact.label}
                                                    </div>
                                                    <div className="text-white font-medium">
                                                        {contact.value}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div>
                                <h3 className="heading-3 text-white mb-4">
                                    Connect With Me
                                </h3>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social) => {
                                        const IconComponent =
                                            social.icon === 'Github'
                                                ? Github
                                                : social.icon === 'Linkedin'
                                                  ? Linkedin
                                                  : Facebook;
                                        return (
                                            <a
                                                key={social.name}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-[#00BBB1] hover:to-[#00C4F4] transition-all duration-300 group">
                                                <IconComponent className="h-6 w-6" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Availability Status */}
                            <div className="p-6 bg-gradient-to-br from-green-900/20 to-green-800/20 rounded-xl border border-green-700/50">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    <h4 className="text-white font-semibold">
                                        Currently Available
                                    </h4>
                                </div>
                                <p className="text-green-300 text-sm">
                                    {personal.availability.freelance
                                        ? 'Open for freelance projects'
                                        : 'Not available for new projects'}
                                </p>
                                <p className="text-green-400 text-sm mt-1">
                                    Next availability:{' '}
                                    {personal.availability.nextAvailable}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div ref={formRef} className="lg:col-span-2">
                        <div
                            className={`${formInView ? 'animate-in slide-in-from-right duration-1000' : 'opacity-0'}`}>
                            <div className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700">
                                <h2 className="heading-2 text-white mb-6">
                                    Start Your Project
                                </h2>
                                <p className="content-3 text-gray-400 mb-8">
                                    Tell me about your project and let's discuss
                                    how we can bring your vision to life.
                                </p>

                                {/* Success/Error Messages */}
                                {submitStatus === 'success' && (
                                    <div className="mb-6 p-4 bg-green-900/20 border border-green-700/50 rounded-lg flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-green-400" />
                                        <p className="text-green-300">
                                            Message sent successfully! I'll get
                                            back to you soon.
                                        </p>
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="mb-6 p-4 bg-red-900/20 border border-red-700/50 rounded-lg flex items-center space-x-3">
                                        <AlertCircle className="h-5 w-5 text-red-400" />
                                        <p className="text-red-300">
                                            Something went wrong. Please try
                                            again.
                                        </p>
                                    </div>
                                )}

                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6">
                                    {/* Name and Email */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-white mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00BBB1] focus:ring-1 focus:ring-[#00BBB1] transition-colors duration-300"
                                                placeholder="Your full name"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium text-white mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00BBB1] focus:ring-1 focus:ring-[#00BBB1] transition-colors duration-300"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-medium text-white mb-2">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00BBB1] focus:ring-1 focus:ring-[#00BBB1] transition-colors duration-300"
                                            placeholder="Brief description of your project"
                                        />
                                    </div>

                                    {/* Project Type and Budget */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                htmlFor="projectType"
                                                className="block text-sm font-medium text-white mb-2">
                                                Project Type
                                            </label>
                                            <select
                                                id="projectType"
                                                name="projectType"
                                                value={formData.projectType}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00BBB1] focus:ring-1 focus:ring-[#00BBB1] transition-colors duration-300">
                                                <option value="">
                                                    Select project type
                                                </option>
                                                {projectTypes.map((type) => (
                                                    <option
                                                        key={type}
                                                        value={type}>
                                                        {type}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="budget"
                                                className="block text-sm font-medium text-white mb-2">
                                                Budget Range
                                            </label>
                                            <select
                                                id="budget"
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00BBB1] focus:ring-1 focus:ring-[#00BBB1] transition-colors duration-300">
                                                <option value="">
                                                    Select budget range
                                                </option>
                                                {budgetRanges.map((range) => (
                                                    <option
                                                        key={range}
                                                        value={range}>
                                                        {range}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Timeline */}
                                    <div>
                                        <label
                                            htmlFor="timeline"
                                            className="block text-sm font-medium text-white mb-2">
                                            Project Timeline
                                        </label>
                                        <input
                                            type="text"
                                            id="timeline"
                                            name="timeline"
                                            value={formData.timeline}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00BBB1] focus:ring-1 focus:ring-[#00BBB1] transition-colors duration-300"
                                            placeholder="When do you need this completed?"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-white mb-2">
                                            Project Details *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00BBB1] focus:ring-1 focus:ring-[#00BBB1] transition-colors duration-300 resize-vertical"
                                            placeholder="Please describe your project in detail. Include any specific requirements, features, or goals you have in mind..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full px-8 py-4 bg-gradient-to-r from-[#00BBB1] to-[#00C4F4] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00BBB1]/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
                                        <span className="flex items-center justify-center space-x-2">
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                    <span>Sending...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="h-5 w-5" />
                                                    <span>Send Message</span>
                                                </>
                                            )}
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
