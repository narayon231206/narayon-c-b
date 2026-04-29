"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-slate-950">
      {/* Base Dots - Always Visible & Denser */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle, #57f1db 1.2px, transparent 1px)`,
          backgroundSize: '15px 15px'
        }}
      ></div>

      {/* Interactive Spotlight Dots - Extra Brightness & Denser */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle, #57f1db 1.5px, transparent 1px)`,
          backgroundSize: '15px 15px',
          WebkitMaskImage: `radial-gradient(circle 180px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
          maskImage: `radial-gradient(circle 180px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`
        }}
      ></div>

      {/* Animated Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px]"
      ></motion.div>
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[120px]"
      ></motion.div>
    </div>
  );
};

export default Background;
