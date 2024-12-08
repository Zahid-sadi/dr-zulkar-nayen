"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [ formState, setFormState ] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formState);
    };

    return (
        <section id="contact" className="py-16 md:py-44 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Get in Touch</h2>
                <div className="flex flex-wrap -mx-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0"
                    >
                        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                                    required
                                ></textarea>
                            </div>
                            <div className="flex items-center justify-end">
                                <motion.button
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.25 }}
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline flex items-center"
                                >
                                    <Send className="w-4 h-4 mr-2" />
                                    Send Message
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full lg:w-1/2 px-4"
                    >
                        <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <Phone className="w-6 h-6 text-blue-500 mr-4" />
                                    <span className="text-gray-700">+880 123-4567</span>
                                </li>
                                <li className="flex items-center">
                                    <Mail className="w-6 h-6 text-blue-500 mr-4" />
                                    <a
                                        href="mailto:dr.janedoe@example.com"
                                        className="text-gray-700 hover:text-blue-500"
                                    >
                                        dr.zulkarnayen@gmail.com
                                    </a>
                                </li>
                                <li className="flex items-start">
                                    <MapPin className="w-6 h-6 text-blue-500 mr-4 mt-1" />
                                    <span className="text-gray-700">
                                        123 khilgaon
                                        <br />
                                        Dhaka, CA 90210
                                        <br />
                                        Bangladesh
                                    </span>
                                </li>
                            </ul>
                            <div className="mt-8">
                                <h4 className="text-xl font-semibold text-gray-800 mb-4">Office Hours</h4>
                                <ul className="space-y-2 text-gray-700">
                                    <li>Sunday - Thursday : 9:00 AM - 5:00 PM</li>
                                    <li>Saturday: 10:00 AM - 2:00 PM</li>
                                    <li>Friday: Closed</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
