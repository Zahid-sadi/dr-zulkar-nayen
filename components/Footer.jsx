"use client";

import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-cyan-900 text-gray-300 py-8">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">About Us</h3>
                        <p className="mt-4 text-gray-400 text-sm">
                            Dr. Zulkar Nayen is a leading neurosurgeon with over 20 years of experience, dedicated to
                            improving the lives of patients through advanced medical care.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li>
                                <Link href="/" className="hover:text-white transition-colors duration-300">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-white transition-colors duration-300">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-white transition-colors duration-300">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white transition-colors duration-300">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">Contact</h3>
                        <ul className="mt-4 text-sm space-y-2 text-gray-400">
                            <li>Email: info@drzulkar.com</li>
                            <li>Phone: +1 234 567 890</li>
                            <li>Location: 123 Medical St, Dhaka</li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100 mt-8"></div>

                {/* Bottom Footer */}
                <div className="mt-4 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p className="text-gray-400">
                        &copy; {new Date().getFullYear()} Dr. Zulkar Nayen. All rights reserved.
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link href="https://facebook.com" className="hover:text-white transition-colors duration-300">
                            Facebook
                        </Link>
                        <Link href="https://twitter.com" className="hover:text-white transition-colors duration-300">
                            Twitter
                        </Link>
                        <Link href="https://linkedin.com" className="hover:text-white transition-colors duration-300">
                            LinkedIn
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
