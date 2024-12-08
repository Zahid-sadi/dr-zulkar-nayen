"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="about"
            className="py-0 mt-0 md:mt-5 container mx-auto md:py-44 flex h-fit md:h-[400px] flex-col-reverse md:flex-row items-center justify-center bg-white"
        >
            <div className=" w-full md:1/2 overflow-auto md:overflow-hidden h-72 md:h-auto md:1/2  text-justify mx-auto px-10 md:px-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center text-gray-800 my-8"
                >
                    About Me
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-3xl mx-auto"
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
            <div className="w-full  z-40 rounded-t-full h-80 md:h-auto md:1/2">
                <img
                    className="h-full rounded-t-full p-5 w-full "
                    src="https://images.unsplash.com/photo-1584467735867-4297ae2ebcee?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />
            </div>
        </section>
    );
}
