"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ['home', 'about', 'skills', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (item: string) => {
    if (item === activeSection) return;
    setActiveSection(item);
    setIsMenuOpen(false);
    // Removed window.scrollTo to prevent "reload" feeling
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 h-20 transition-all duration-300 font-space-grotesk antialiased ${
          scrolled || activeSection !== 'home'
            ? 'bg-slate-950/40 backdrop-blur-xl border-b border-white/5 shadow-2xl' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div onClick={() => handleLinkClick('home')}>
          <Logo />
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((item) => (
            <button 
              key={item}
              type="button"
              onClick={() => handleLinkClick(item)}
              className={`font-medium transition-all duration-300 capitalize relative pb-1 outline-none ${
                activeSection === item ? 'text-teal-400' : 'text-slate-400 hover:text-teal-200'
              }`} 
            >
              {item}
              {activeSection === item && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-400"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
          <button 
            type="button"
            className="ml-4 bg-primary text-on-primary px-6 py-2 rounded-full font-bold glow-primary shadow-lg hover:scale-105 transition-transform"
          >
            Hire Me
          </button>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-teal-400 p-2 focus:outline-none z-[60]"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Sidebar Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[50] md:hidden"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-64 z-[55] bg-slate-900 border-l border-white/10 shadow-2xl flex flex-col p-8 pt-24 gap-6 md:hidden"
            >
              {navLinks.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleLinkClick(item)}
                  className={`text-xl font-bold font-space-grotesk capitalize text-left transition-colors ${
                    activeSection === item ? 'text-teal-400' : 'text-slate-400'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button
                type="button"
                className="mt-4 bg-primary text-on-primary px-6 py-3 rounded-full font-bold text-lg glow-primary shadow-lg"
              >
                Hire Me
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
