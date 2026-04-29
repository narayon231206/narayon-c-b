"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSectionChange = (section: string) => {
    if (section === activeSection) return;
    setIsTransitioning(true);
    
    // Smooth timing for the transition
    setTimeout(() => {
      setActiveSection(section);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 200);
    }, 400);
  };

  const renderSection = () => {
    if (activeSection === "home") {
      return (
        <motion.div
          key="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </motion.div>
      );
    }

    return (
      <motion.div
        key={activeSection}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        {activeSection === "about" && <About />}
        {activeSection === "skills" && <Skills />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "contact" && <Contact />}
      </motion.div>
    );
  };

  return (
    <main className="min-h-screen bg-transparent overflow-x-hidden relative">
      <Navbar activeSection={activeSection} setActiveSection={handleSectionChange} />
      
      {/* Sleek Top Progress Bar Loader */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div 
            initial={{ width: "0%", opacity: 1 }}
            animate={{ width: "100%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-[4px] bg-gradient-to-r from-teal-400 via-primary to-teal-400 z-[100] shadow-[0_0_15px_rgba(87,241,219,0.6)]"
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 pt-20">
        <AnimatePresence mode="wait">
          {!isTransitioning && renderSection()}
        </AnimatePresence>
      </div>

      <Footer />
    </main>
  );
}
