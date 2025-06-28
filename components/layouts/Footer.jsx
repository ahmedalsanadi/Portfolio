'use client';

import Link from 'next/link';
import {
    Github,
    Linkedin,
    Facebook,
    Mail,
    Phone,
    MapPin,
    ExternalLink,
} from 'lucide-react';
import { personal, socialLinks, navigationItems } from '@/lib/data';

const quickLinks = navigationItems.filter((item) => item.name !== 'Home');

export default function Footer() {
    const socialIcons = {
        Github: Github,
        Linkedin: Linkedin,
        Facebook: Facebook,
    };

    return (
        <footer className="relative z-10 bg-gradient-to-b from-transparent to-[#020810] border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-[#00BBB1] to-[#00C4F4] rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">
                                    {personal.name.split(' ')[0][0]}
                                </span>
                            </div>
                            <div>
                                <h3 className="font-inria text-xl font-bold text-white">
                                    {personal.name.split(' ')[0]}{' '}
                                    {
                                        personal.name.split(' ')[
                                            personal.name.split(' ').length - 1
                                        ]
                                    }
                                </h3>
                                <p className="text-[#00BBB1] text-sm">
                                    Full-Stack Developer
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-md">
                            {personal.summary.substring(0, 200)}...
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-gray-400">
                                <Mail className="h-4 w-4 text-[#00BBB1]" />
                                <a
                                    href={`mailto:${personal.email}`}
                                    className="hover:text-white transition-colors">
                                    {personal.email}
                                </a>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-400">
                                <Phone className="h-4 w-4 text-[#00BBB1]" />
                                <a
                                    href={`tel:${personal.phone}`}
                                    className="hover:text-white transition-colors">
                                    {personal.phone}
                                </a>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-400">
                                <MapPin className="h-4 w-4 text-[#00BBB1]" />
                                <span>
                                    {personal.address
                                        .split(',')
                                        .slice(-2)
                                        .join(',')
                                        .trim()}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-inria text-lg font-semibold text-white mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-[#00BBB1] transition-colors duration-300 flex items-center space-x-1 group">
                                        <span>{link.name}</span>
                                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="font-inria text-lg font-semibold text-white mb-4">
                            Connect
                        </h4>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => {
                                const IconComponent = socialIcons[social.icon];
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-[#00BBB1] hover:to-[#00C4F4] transition-all duration-300 group">
                                        <IconComponent className="h-5 w-5" />
                                    </a>
                                );
                            })}
                        </div>

                        <div className="mt-6">
                            <h5 className="text-white font-medium mb-2">
                                Current Status
                            </h5>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-sm text-gray-400">
                                    {personal.availability.freelance
                                        ? 'Available for Freelance'
                                        : 'Currently Unavailable'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()}{' '}
                        {personal.name.split(' ')[0]}{' '}
                        {
                            personal.name.split(' ')[
                                personal.name.split(' ').length - 1
                            ]
                        }
                        . All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0 flex items-center space-x-6">
                        <span className="text-sm text-gray-400">
                            Built with
                        </span>
                        <div className="flex items-center space-x-2">
                            <span className="text-[#00BBB1] text-sm font-medium">
                                Next.js
                            </span>
                            <span className="text-gray-600">•</span>
                            <span className="text-[#00C4F4] text-sm font-medium">
                                Tailwind CSS
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
