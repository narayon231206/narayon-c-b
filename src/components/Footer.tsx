"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Footer = () => {
  const socialLinks = [
    { 
      name: 'Github', 
      url: 'https://github.com/narayon231206?tab=repositories',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      )
    },
    { 
      name: 'Linkedin', 
      url: 'https://www.linkedin.com/in/narayon-chandra-barman-b9492a390/',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/narayon.chandra.barman.268107',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
  ];

  return (
    <footer className="relative py-24 px-6 overflow-hidden border-t border-white/5">
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-4 tracking-tighter leading-none">
              Let&apos;s talk about <br />
              your <span className="text-primary">next big thing.</span>
            </h2>
            <p className="text-on-surface-variant text-xl font-inter max-w-md mt-6 opacity-80">
              Ready to take your digital presence to the next level?
            </p>
          </div>

          <div className="flex gap-4 md:gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  y: -8, 
                  scale: 1.1,
                  backgroundColor: 'rgba(87, 241, 219, 0.15)',
                  borderColor: 'rgba(87, 241, 219, 0.5)' 
                }}
                className="w-14 h-14 md:w-16 md:h-16 rounded-2xl border border-white/10 flex items-center justify-center text-on-surface-variant transition-all duration-300 group shadow-lg"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <Logo />
            <div className="h-4 w-[1px] bg-white/20 hidden md:block"></div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/60 font-inter">
              © 2024 — Engineered for Precision
            </p>
          </div>

          <div className="flex items-center gap-8 text-[10px] uppercase tracking-[0.3em] text-on-surface-variant/40 font-inter font-bold">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <div className="flex items-center gap-2">
              <span className="text-primary">✦</span> NARAYON CHANDRA BARMAN
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
