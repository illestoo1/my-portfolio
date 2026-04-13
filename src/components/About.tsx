"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "4+", label: "Years Experience" },
  { number: "20+", label: "Projects Delivered" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "10+", label: "Technologies" },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-sm font-medium tracking-widest uppercase text-blue-500 mb-4"
        >
          About Me
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12 max-w-2xl"
        >
          I'm Modupe — a frontend developer based in Nigeria.
        </motion.h2>

        {/* Description grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 text-gray-600 leading-relaxed">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg"
          >
            With 4 years of experience at Corestream Networks & Robotics, I
            build scalable, high-performing web applications using React,
            TypeScript, and Next.js — transforming ideas into clean, elegant
            digital solutions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg"
          >
            I specialise in creating seamless and intuitive user experiences
            across agriculture, finance, healthcare, and education sectors. My
            approach is to write clean, maintainable code that serves both user
            needs and business objectives.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 text-center">
              <p className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">
                {stat.number}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
