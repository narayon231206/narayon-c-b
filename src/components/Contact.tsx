"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sendEmail } from '@/app/actions';

const Contact = () => {
  const [isPending, setIsPending] = useState(false);
  const [feedback, setFeedback] = useState<{ success: boolean; message: string } | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);
    setFeedback(null);

    const formData = new FormData(event.currentTarget);
    console.log("Client-side form data:", Object.fromEntries(formData.entries()));
    const result = await sendEmail(formData);

    setIsPending(false);
    setFeedback(result);

    if (result.success) {
      (event.target as HTMLFormElement).reset();
    }
  };

  return (
    <section className="py-24 px-4 md:px-12 bg-surface-container-low/30" id="contact">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-3xl border-primary/20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-space-grotesk">
          Contact <span className="text-primary">Me</span>
        </h2>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-xs font-medium mb-2 text-primary uppercase tracking-widest font-inter">Name</label>
              <input
                name="name"
                required
                className="w-full bg-surface-container-highest/50 border border-white/10 rounded-xl px-6 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-outline-variant"
                placeholder="Your Name"
                type="text"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-xs font-medium mb-2 text-primary uppercase tracking-widest font-inter">Email</label>
              <input
                name="email"
                required
                className="w-full bg-surface-container-highest/50 border border-white/10 rounded-xl px-6 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-outline-variant"
                placeholder="hello@example.com"
                type="email"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-xs font-medium mb-2 text-primary uppercase tracking-widest font-inter">Message</label>
            <textarea
              name="message"
              required
              className="w-full bg-surface-container-highest/50 border border-white/10 rounded-xl px-6 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-outline-variant h-[calc(100%-2.5rem)] min-h-[150px]"
              placeholder="How can I help you?"
              rows={5}
            ></textarea>
          </motion.div>
          
          <div className="md:col-span-2 text-center mt-4">
            <button 
              disabled={isPending}
              className={`bg-secondary-container text-white font-bold py-4 px-12 rounded-full text-lg glow-secondary hover:scale-105 transition-all w-full md:w-auto flex items-center justify-center gap-2 mx-auto ${isPending ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isPending ? (
                <>
                  <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                  Sending...
                </>
              ) : 'Send a message'}
            </button>
            
            {feedback && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 font-medium ${feedback.success ? 'text-primary' : 'text-error'}`}
              >
                {feedback.message}
              </motion.p>
            )}
          </div>
        </form>

        <div className="mt-16 flex justify-center gap-12">
          {[
            { 
              name: 'Github', 
              url: 'https://github.com/narayon231206?tab=repositories',
              icon: (
                <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              )
            },
            { 
              name: 'Linkedin', 
              url: 'https://www.linkedin.com/in/narayon-chandra-barman-b9492a390/',
              icon: (
                <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              )
            },
            { 
              name: 'Facebook', 
              url: 'https://www.facebook.com/narayon.chandra.barman.268107',
              icon: (
                <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              )
            }
          ].map((link, index) => (
            <motion.a 
              key={link.name}
              whileHover={{ y: -8, scale: 1.1, color: '#57f1db' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="text-on-surface-variant transition-all duration-300" 
              href={link.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
