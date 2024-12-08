"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center text-gray-800 mb-8"
                >
                    About Me
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <p className="text-lg text-gray-600 mb-6">
                        With over 15 years of experience in neurosurgery, I specialize in treating complex brain and
                        spinal cord conditions. My approach combines cutting-edge techniques with compassionate care to
                        ensure the best outcomes for my patients.
                    </p>
                    <p className="text-lg text-gray-600">
                        I am committed to advancing the field of neurosurgery through research and education, regularly
                        contributing to medical journals and mentoring the next generation of surgeons.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
