//components/layouts/Navigation.jsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Code2, ExternalLink } from 'lucide-react';
import { navigationItems, personal } from '@/lib/data';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-[#030B15]/90 backdrop-blur-md shadow-lg'
                    : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 lg:h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center space-x-3 group">
                        <div className="relative">
                            <Code2 className="h-8 w-8 text-[#00BBB1] group-hover:text-[#00C4F4] transition-colors duration-300" />
                            <div className="absolute inset-0 bg-[#00BBB1] opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300"></div>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-inria text-xl font-bold text-white group-hover:text-[#00BBB1] transition-colors duration-300">
                                {personal.name.split(' ')[0]}{' '}
                                {
                                    personal.name.split(' ')[
                                        personal.name.split(' ').length - 1
                                    ]
                                }
                            </span>
                            <span className="text-xs text-gray-400 group-hover:text-[#00C4F4] transition-colors duration-300">
                                Full-Stack Developer
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                                    pathname === item.href
                                        ? 'text-[#00BBB1]'
                                        : 'text-gray-300 hover:text-white'
                                }`}>
                                {item.name}
                                <span
                                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00BBB1] to-[#00C4F4] transform origin-left transition-transform duration-300 ${
                                        pathname === item.href
                                            ? 'scale-x-100'
                                            : 'scale-x-0 group-hover:scale-x-100'
                                    }`}></span>
                            </Link>
                        ))}

                        {/* CTA Button */}
                        <Link
                            href="/contact"
                            className="relative px-6 py-2 bg-gradient-to-r from-[#00BBB1] to-[#00C4F4] text-white font-medium rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-[#00BBB1]/25">
                            <span className="relative z-10 flex items-center space-x-2">
                                <span>Get In Touch</span>
                                <ExternalLink className="h-4 w-4" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#00C4F4] to-[#00BBB1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-300">
                        {isOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="lg:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-[#030B15]/95 backdrop-blur-md rounded-lg mt-2 border border-gray-800">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-300 ${
                                        pathname === item.href
                                            ? 'text-[#00BBB1] bg-gray-800'
                                            : 'text-gray-300 hover:text-white hover:bg-gray-800'
                                    }`}>
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 mt-2 bg-gradient-to-r from-[#00BBB1] to-[#00C4F4] text-white font-medium rounded-md text-center">
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
