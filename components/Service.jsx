"use client";

import { motion } from "framer-motion";
import { Activity, Baby, Brain, SpadeIcon as Spine } from "lucide-react";

const services = [
    {
        title: "Brain Tumor Surgery",
        description: "Specialized in removing complex brain tumors with precision.",
        icon: Brain,
    },
    {
        title: "Spine Surgery",
        description: "Expert in minimally invasive spine surgeries for faster recovery.",
        icon: Spine,
    },
    {
        title: "Neurovascular Surgery",
        description: "Treating aneurysms and other vascular disorders of the brain.",
        icon: Activity,
    },
    {
        title: "Pediatric Neurosurgery",
        description: "Dedicated care for neurological conditions in children.",
        icon: Baby,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-16 md:py-44 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 w-fit ">My Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4">
                                <service.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
