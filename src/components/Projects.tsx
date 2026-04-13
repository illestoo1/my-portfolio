"use client";

import React from "react";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  accent: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Netflix Clone",
    description:
      "A Netflix-inspired streaming UI built with JavaScript, featuring movie listings, category browsing, and a responsive layout that mirrors the real platform.",
    tags: ["JavaScript", "CSS", "API Integration"],
    github: "https://github.com/illestoo1/Netflix",
    accent: "from-red-600 to-red-800",
  },
  {
    id: 2,
    title: "Mart — E-Commerce",
    description:
      "A full-featured e-commerce storefront built with TypeScript. Includes product listings, cart functionality, and a clean checkout flow.",
    tags: ["TypeScript", "React", "Tailwind CSS"],
    github: "https://github.com/illestoo1/Mart",
    accent: "from-blue-500 to-blue-700",
  },
  {
    id: 3,
    title: "Agro Admin Dashboard",
    description:
      "Admin panel for an agricultural e-commerce platform. Manages products, orders, and inventory with a clean, data-driven interface.",
    tags: ["React", "TypeScript", "Dashboard"],
    github: "https://github.com/illestoo1/E-commerce_Agro-Admin",
    accent: "from-emerald-500 to-emerald-700",
  },
  {
    id: 4,
    title: "Agro E-Commerce",
    description:
      "Customer-facing storefront for an agri-commerce platform built with TypeScript. Features product discovery, filtering, and order management.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS"],
    github: "https://github.com/illestoo1/Agro-E-commerce",
    accent: "from-lime-500 to-green-700",
  },
  {
    id: 5,
    title: "Hospital Management",
    description:
      "A healthcare management system built with TypeScript. Handles patient records, appointments, and staff management in a structured, accessible UI.",
    tags: ["TypeScript", "React", "Healthcare"],
    github: "https://github.com/illestoo1/Hospital_Management",
    accent: "from-sky-500 to-sky-700",
  },
  {
    id: 6,
    title: "AURA BY A",
    description:
      "A collaborative project built with the Ameerahshub team. A modern, branded web experience with clean UI design and smooth interactions.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Ameerahshub/AURA-BY-A",
    accent: "from-violet-500 to-purple-700",
  },
  {
    id: 7,
    title: "Corestream Website",
    description:
      "Official website for Corestream Networks & Robotics. A professional company site showcasing services, team, and brand identity.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Corestreamng/CorestreamWebsite",
    accent: "from-orange-500 to-orange-700",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-white px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-sm font-medium tracking-widest uppercase text-blue-500 mb-4"
        >
          Projects
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Selected Work
          </h2>
          <a
            href="https://github.com/illestoo1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors whitespace-nowrap"
          >
            View all on GitHub →
          </a>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div
                className={`h-36 bg-gradient-to-br ${project.accent} relative`}
              >
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="text-white/70 text-xs font-medium tracking-widest uppercase">
                    0{project.id}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 bg-gray-50 text-gray-600 rounded-full border border-gray-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1.5"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View on GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-blue-600 hover:text-blue-500 transition-colors flex items-center gap-1"
                    >
                      Live Demo
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-3.5 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Let's Build Something Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
