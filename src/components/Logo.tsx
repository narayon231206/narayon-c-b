"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className={`flex items-center gap-3 cursor-pointer group ${className}`}
    >
      <div className="relative w-14 h-14 flex items-center justify-center">
        {/* Artistic Diamond Background */}
        <motion.div 
          animate={{ rotate: [45, 55, 45] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 rounded-xl backdrop-blur-md"
        ></motion.div>
        
        {/* Glowing Aura */}
        <div className="absolute inset-0 bg-primary/10 rounded-xl blur-lg group-hover:bg-primary/20 transition-all duration-500"></div>

        {/* Custom Artistic N */}
        <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-[0_0_15px_rgba(87,241,219,0.5)]">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#57f1db', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#ddb7ff', stopOpacity: 1 }} />
            </linearGradient>
          </defs>

          {/* Stylized N Path */}
          <motion.path
            d="M30 70 L30 30 L70 70 L70 30"
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Decorative Dot */}
          <motion.circle 
            cx="70" cy="20" r="5" 
            fill="#57f1db"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      </div>

      <div className="hidden sm:flex flex-col border-l border-white/10 pl-3">
        <div className="flex items-baseline">
          <span className="text-xl font-black tracking-tighter text-white font-space-grotesk group-hover:text-primary transition-colors">
            NARAYON
          </span>
          <span className="text-primary font-black ml-0.5">.</span>
        </div>
        <span className="text-[8px] uppercase tracking-[0.4em] text-on-surface-variant/50 font-bold">
          Creative Developer
        </span>
      </div>
    </motion.div>
  );
};

export default Logo;
