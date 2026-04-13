"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: "vscode-icons:file-type-html" },
      { name: "CSS3", icon: "vscode-icons:file-type-css" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "React", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Tailwind", icon: "logos:tailwindcss-icon" },
    ],
  },
  {
    category: "State & Data",
    skills: [
      { name: "Zustand", icon: "logos:zustand" },
      { name: "Redux", icon: "logos:redux" },
      { name: "Supabase", icon: "logos:supabase-icon" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "logos:github-icon" },
      { name: "Postman", icon: "logos:postman" },
      { name: "Figma", icon: "logos:figma" },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-gray-50 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-sm font-medium tracking-widest uppercase text-blue-500 mb-4"
        >
          Skills
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-14"
        >
          Technologies I Use
        </motion.h2>

        {/* Skill Groups */}
        <div className="space-y-12">
          {skillGroups.map((group, groupIndex) => (
            <div key={group.category}>
              <motion.h3
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: groupIndex * 0.1 }}
                className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-5"
              >
                {group.category}
              </motion.h3>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3"
              >
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    className="flex flex-col items-center gap-2.5 p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-100 hover:shadow-sm transition-all duration-200 cursor-default"
                  >
                    <Icon icon={skill.icon} width={32} height={32} />
                    <p className="text-xs font-medium text-gray-600 text-center leading-tight">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
