import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, FileText, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 px-6 md:px-12 lg:px-24">
      {/* Background elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-4"
        >
          {portfolioData.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium mb-4"
        >
          {portfolioData.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-2 text-slate-500 dark:text-slate-500 mb-8"
        >
          <MapPin size={18} />
          <span>{portfolioData.location}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mb-10 leading-relaxed"
        >
          {portfolioData.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/10 dark:shadow-white/10"
          >
            View Projects <ArrowRight size={18} />
          </a>
          <a
            href="#publications"
            className="px-8 py-4 rounded-xl border border-slate-200 dark:border-slate-800 font-semibold flex items-center gap-2 transition-all hover:bg-slate-50 dark:hover:bg-slate-900 active:scale-95"
          >
            Publications
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl border border-slate-200 dark:border-slate-800 font-semibold flex items-center gap-2 transition-all hover:bg-slate-50 dark:hover:bg-slate-900 active:scale-95"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex items-center gap-6"
        >
          <a href={portfolioData.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors">
            <Github size={24} />
          </a>
          <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="../public/resume.pdf" download className="text-slate-400 hover:text-primary transition-colors flex items-center gap-1 text-sm font-medium">
            <FileText size={20} /> Resume
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-slate-300 dark:border-slate-700 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
