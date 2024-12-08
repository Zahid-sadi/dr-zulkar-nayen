"use client";

import { motion } from "framer-motion";

const Achievements = () => {
    const achievements = [
        {
            title: "20+ Years of Experience",
            description: "Dedicated to neurosurgery and helping patients.",
            icon: "🩺",
        },
        {
            title: "5,000+ Successful Surgeries",
            description: "Proven expertise in complex surgical procedures.",
            icon: "✅",
        },
        {
            title: "30+ Research Publications",
            description: "Contributions to advancements in neurology.",
            icon: "📚",
        },
        {
            title: "100+ Awards & Honors",
            description: "Recognized for excellence in medical practice.",
            icon: "🏆",
        },
    ];

    return (
        <section id="achievements" className="py-16 md:py44 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-gray-800"
                >
                    Achievements
                </motion.h2>
                <p className="mt-4 text-gray-600 text-lg">
                    Highlights of an extraordinary journey in the field of medicine.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="bg-white shadow-lg p-6 rounded-lg border border-gray-200 hover:shadow-xl transition-all"
                        >
                            <div className="text-5xl mb-4 text-blue-500">{achievement.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800">{achievement.title}</h3>
                            <p className="mt-2 text-gray-600">{achievement.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
