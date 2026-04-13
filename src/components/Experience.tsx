"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Corestream Networks & Robotics Limited",
    role: "Frontend Developer",
    date: "2021 — Present",
    location: "Jos, Plateau State, Nigeria",
    points: [
      "Built and maintained scalable web applications using React.js, TypeScript, Next.js, and Tailwind CSS across multiple industry verticals.",
      "Implemented state management solutions with Zustand and Redux, improving application performance and maintainability.",
      "Collaborated with cross-functional teams to deliver products in agriculture, finance, healthcare, and education sectors.",
      "Led UI/UX improvements resulting in better accessibility and mobile-first responsive designs.",
      "Participated in code reviews, sprint planning, and Agile ceremonies within a fast-paced team environment.",
    ],
  },
  {
    company: "All-Safe",
    role: "Frontend Developer — Internship",
    date: "April 2025 — July 2025",
    location: "Remote",
    points: [
      "Built responsive, interactive web pages using React.js, Tailwind CSS, and TypeScript.",
      "Improved website performance by optimising components and reducing load time by 20%.",
      "Integrated REST APIs in collaboration with backend developers to ensure smooth data flow.",
      "Implemented accessible, mobile-first UI designs and participated in Agile standups and code reviews.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-gray-50 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-sm font-medium tracking-widest uppercase text-blue-500 mb-4"
        >
          Experience
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12"
        >
          Where I've Worked
        </motion.h2>

        {/* Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-blue-100 hover:shadow-sm transition-all duration-300"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-0.5">
                    {exp.company}
                  </h3>
                  <p className="text-blue-600 font-medium text-sm sm:text-base">
                    {exp.role}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{exp.location}</p>
                </div>
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-gray-500 bg-gray-100 rounded-full whitespace-nowrap self-start">
                  {exp.date}
                </span>
              </div>

              {/* Points */}
              <ul className="space-y-3">
                {exp.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-600 text-sm sm:text-base"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
