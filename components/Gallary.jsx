"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const images = [
    {
        src: "https://images.unsplash.com/photo-1710074213374-e68503a1b795?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Operating Room",
    },
    {
        src: "https://images.unsplash.com/photo-1725399633864-ae5493e9f1bb?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Brain Scan",
    },
    {
        src: "https://images.unsplash.com/photo-1573511860302-28c524319d2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Brain Scan",
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1730133802568-6ae51d2bae98?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Brain Scan",
    },
    {
        src: "https://images.unsplash.com/photo-1566669419640-ae09e20a18d8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Brain Scan",
    },
];

export default function Gallery() {
    const [ hoveredIndex, setHoveredIndex ] = useState(null);

    return (
        <section id="gallery" className="py-16 md:py-44 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Gallery</h2>
                <div className=" grid grid-col-1 md:grid-cols-3 lg:grid-col-4  gap-10">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            className="relative overflow-hidden rounded-lg h-96 shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                width={100}
                                height={50}
                                className="w-full h-full object-cover"
                            />
                            <motion.div
                                className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <p className="text-white text-lg font-semibold">{image.alt}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
