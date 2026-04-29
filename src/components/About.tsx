"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto" id="about">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.h2 variants={itemVariants} className="text-5xl font-bold text-primary font-space-grotesk">About Me</motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-on-surface-variant leading-relaxed font-inter">
            I am a passionate Frontend Developer and a Computer Science and Technology student. I specialize in building modern, high-performance web applications using Next.js, React.js, and Tailwind CSS.
            <br /><br />
            With a strong foundation in the Vite and JavaScript ecosystem, I focus on delivering seamless user experiences through Server-Side Rendering (SSR) and Image Optimization. I enjoy solving complex logic problems and am committed to writing clean, maintainable code. I am always eager to learn new technologies and collaborate on innovative projects.
          </motion.p>
          
          <div className="space-y-4">
            {[
              { icon: 'web', text: 'Web Application Development', color: 'text-primary' },
              { icon: 'smartphone', text: 'Mobile Application Development', color: 'text-secondary' },
              { icon: 'lightbulb', text: 'Problem Solving', color: 'text-primary' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="glass-card p-6 rounded-xl flex items-center gap-4 cursor-default"
              >
                <span className={`material-symbols-outlined ${item.color}`}>{item.icon}</span>
                <span className="font-space-grotesk text-xl">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] rounded-3xl overflow-hidden glass-card shadow-2xl"
        >
          <Image
            src="/narayon.png"
            alt="Developer Workspace"
            fill
            priority
            className="object-cover opacity-60 transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
