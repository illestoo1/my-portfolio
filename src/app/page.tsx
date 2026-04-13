"use client";

import { useEffect, useState } from "react";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Modupe Ephraim Ohinoyi";
  const speed = 100;

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(typing);
    }, speed);
    return () => clearInterval(typing);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 bg-[#0D1117]"
      >
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-widest uppercase text-blue-400 border border-blue-400/30 rounded-full">
            Frontend Developer
          </span>

          {/* Name with typing */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Hi, I'm{" "}
            <span className="text-blue-400">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed mb-10">
            I build modern, responsive web applications that are fast,
            accessible, and crafted with attention to detail.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors duration-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-white/20 hover:border-white/40 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent" />
        </div>
      </section>

      {/* All other sections are siblings, NOT nested inside hero */}
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
