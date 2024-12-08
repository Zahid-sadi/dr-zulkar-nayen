"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-screen bg-blue-50">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Image
                            src="/placeholder.svg?height=200&width=200"
                            alt="Dr. Jane Doe"
                            width={200}
                            height={200}
                            className="rounded-full mx-auto mb-8 border-4 border-white shadow-lg"
                        />
                        <h1 className="text-5xl font-bold mb-4 text-gray-800">Dr. Jane Doe</h1>
                        <p className="text-xl text-gray-600">Specialized in Neurosurgery</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
