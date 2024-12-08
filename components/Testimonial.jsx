"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
    {
        name: "John",
        text: "Dr. Zulkar Nayen's expertise and care were instrumental in my recovery. I cannot thank him enough.",
    },
    {
        name: "Sarah ",
        text: "The level of professionalism and compassion I experienced was truly exceptional. Dr. Doe is a gifted surgeon.",
    },
    {
        name: "Abdullah",
        text: "I felt confident and at ease throughout my treatment. Dr. Doe's skill is matched only by her kindness.",
    },
];

export default function Testimonials() {
    const [ currentIndex, setCurrentIndex ] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-16 md:py-44 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Patient Testimonials</h2>
                <div className="relative max-w-3xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <p className="text-xl text-gray-600 mb-4 italic">
                                &ldquo;{testimonials[currentIndex].text}&ldquo;
                            </p>
                            <p className="text-lg font-semibold text-gray-800"> {testimonials[currentIndex].name}</p>
                        </motion.div>
                    </AnimatePresence>
                    <div className="flex justify-center mt-8 space-x-4">
                        <button
                            onClick={prevTestimonial}
                            className="bg-gray-200 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="bg-gray-200 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
