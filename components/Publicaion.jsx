"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const publications = [
    {
        title: "Advancements in Minimally Invasive Neurosurgery",
        journal: "Journal of Neurosurgery",
        year: 2022,
        doi: "10.3171/2022.5.JNS22234",
    },
    {
        title: "The Role of AI in Preoperative Planning for Complex Brain Tumors",
        journal: "Neurosurgical Focus",
        year: 2021,
        doi: "10.3171/2021.2.FOCUS20345",
    },
    {
        title: "Long-term Outcomes of Deep Brain Stimulation in Parkinson's Disease",
        journal: "New England Journal of Medicine",
        year: 2020,
        doi: "10.1056/NEJMoa2024678",
    },
];

export default function Publications() {
    return (
        <section id="publications" className="py-16 md:py-44 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Recent Publications</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {publications.map((pub, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-50 rounded-lg shadow-lg overflow-hidden flex flex-col"
                        >
                            <div className="bg-green-500 p-4 flex items-center justify-center">
                                <BookOpen className="w-8 h-8 text-white" />
                            </div>
                            <div className="p-6 flex-grow">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{pub.title}</h3>
                                <p className="text-gray-600 mb-2">{pub.journal}</p>
                                <p className="text-gray-500 mb-4">{pub.year}</p>
                            </div>
                            <div className="bg-gray-100 p-4">
                                <a
                                    href={`https://doi.org/${pub.doi}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-600 hover:underline"
                                >
                                    DOI: {pub.doi}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
