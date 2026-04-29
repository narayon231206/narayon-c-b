"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 md:px-12 pt-24 md:pt-0" id="home">
      <div className="relative z-10 text-center max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="mb-8 relative inline-block cursor-pointer group"
        >
          {/* Glowing Aura - Enhanced */}
          <div className="absolute -inset-8 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
          
          <div style={{ transform: "translateZ(50px)" }} className="relative">
            <Image
              src="/narayon.png"
              alt="Narayon Chandra Barman"
              width={300}
              height={300}
              className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-white/10 object-cover shadow-2xl transition-all duration-500 group-hover:border-primary group-hover:scale-105"
              priority
            />
          </div>
          
          {/* Outer Animated Ring 1 - Brighter */}
          <div className="absolute -inset-3 rounded-full border-2 border-dashed border-primary animate-[spin_15s_linear_infinite] opacity-100 shadow-[0_0_20px_#57f1db66]"></div>
          
          {/* Outer Animated Ring 2 (Reverse) - Brighter */}
          <div className="absolute -inset-6 rounded-full border-2 border-secondary/60 animate-[spin_20s_linear_reverse_infinite] opacity-80 shadow-[0_0_15px_#ddb7ff4d]"></div>

          {/* Floating Dots/Particles (Visual Polish) */}
          <div className="absolute -top-4 -right-4 w-4 h-4 bg-primary rounded-full animate-bounce delay-100 opacity-50"></div>
          <div className="absolute -bottom-2 -left-6 w-3 h-3 bg-secondary rounded-full animate-bounce delay-300 opacity-50"></div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 font-space-grotesk tracking-tight"
        >
          Hi. I&apos;m <span className="text-primary">Narayon Chandra Barman</span>, a freelance Frontend Developer
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-on-surface-variant mb-10 max-w-2xl mx-auto font-inter"
        >
          Crafting beautiful, high-performance, and user-centric web experiences with modern technologies. Let&apos;s transform your ideas into digital reality.
        </motion.p>

        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-primary text-on-primary font-bold px-12 py-4 rounded-full text-lg glow-primary shadow-xl"
        >
          Hire me!
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
