"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const projects = [
  { 
    title: 'Keen Keeper', 
    category: 'Web App', 
    image: '/keen.png', 
    tech: ['React', 'CSS', 'JavaScript'],
    link: 'https://keep-keeper-project.netlify.app/'
  },
  { 
    title: 'Digital Tools Store', 
    category: 'Web App', 
    image: '/Digi.png', 
    tech: ['React', 'Firebase', 'Tailwind'],
    link: 'https://digital-tools-webside.netlify.app/'
  },
  { 
    title: 'Book Vibe', 
    category: 'Web App', 
    image: '/book.png', 
    tech: ['React', 'Tailwind', 'JavaScript'],
    link: 'https://inspiring-banoffee-41ef4b.netlify.app/'
  },
  { 
    title: 'English Vocabulary Hub', 
    category: 'Web App', 
    image: '/eng.png', 
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://narayon231206.github.io/English-Vucabulary/'
  },
  { 
    title: 'GitHub Issues Tracker', 
    category: 'Web App', 
    image: '/git.png', 
    tech: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://narayon231206.github.io/GitHub-Issues-Tracker/'
  },
  { 
    title: 'QuikNotes', 
    category: 'Web App', 
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800', 
    tech: ['React', 'Node.js', 'MongoDB'],
    link: '#'
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Auto-play functionality
  React.useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(interval);
  }, [currentIndex, projects.length]);

  return (
    <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto overflow-hidden" id="projects">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold font-space-grotesk mx-auto md:mx-0 flex flex-wrap gap-x-4"
        >
          <span>My</span>
          <span className="text-secondary">Projects</span>
        </motion.h2>
      </div>
      
      <div className="relative h-[600px] flex items-center justify-center perspective-1000">
        <AnimatePresence mode="popLayout">
          {projects.map((project, idx) => {
            // Calculate relative position to current index
            let position = idx - currentIndex;
            
            // Handle wrapping for circular feel
            if (position < -Math.floor(projects.length / 2)) position += projects.length;
            if (position > Math.floor(projects.length / 2)) position -= projects.length;

            const isCenter = position === 0;
            const isVisible = Math.abs(position) <= 2;

            if (!isVisible) return null;

            return (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, scale: 0.8, x: position * 400, rotateY: position * 45 }}
                animate={{ 
                  opacity: 1 - Math.abs(position) * 0.3,
                  scale: 1 - Math.abs(position) * 0.15,
                  x: position * (typeof window !== 'undefined' && window.innerWidth < 768 ? 250 : 350),
                  rotateY: position * -35,
                  z: isCenter ? 0 : -200,
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="absolute w-[90%] md:w-[600px] glass-card rounded-[3rem] overflow-hidden group border border-white/10 hover:border-primary/40 transition-all duration-500 shadow-[0_50px_100px_rgba(0,0,0,0.5)] flex flex-col bg-surface-container-lowest/80 backdrop-blur-2xl"
                style={{ zIndex: 10 - Math.abs(position) }}
              >
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
                  
                  <div className="absolute top-6 left-6">
                    <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold bg-black/40 px-4 py-2 rounded-full backdrop-blur-xl border border-primary/20">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-10 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-4xl font-bold mb-4 font-space-grotesk text-white group-hover:text-primary transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 flex-wrap mb-8">
                      {project.tech.map(t => (
                        <span key={t} className="text-[10px] text-on-surface-variant font-bold bg-white/5 px-4 py-1.5 rounded-full border border-white/5 uppercase tracking-widest">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-2xl font-bold uppercase text-xs tracking-[0.2em] group/btn hover:shadow-[0_0_20px_rgba(87,241,219,0.4)] transition-all"
                    >
                      Explore Project 
                      <span className="material-symbols-outlined text-lg">
                        arrow_outward
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Improved Navigation Buttons */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-20 z-50 pointer-events-none">
          <button 
            onClick={prevSlide}
            className="p-5 bg-white/5 hover:bg-primary hover:text-on-primary rounded-full border border-white/10 backdrop-blur-xl transition-all duration-300 pointer-events-auto shadow-2xl"
          >
            <span className="material-symbols-outlined text-3xl">west</span>
          </button>
          <button 
            onClick={nextSlide}
            className="p-5 bg-white/5 hover:bg-primary hover:text-on-primary rounded-full border border-white/10 backdrop-blur-xl transition-all duration-300 pointer-events-auto shadow-2xl"
          >
            <span className="material-symbols-outlined text-3xl">east</span>
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-2 mt-12">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === idx ? 'w-8 bg-primary' : 'bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
