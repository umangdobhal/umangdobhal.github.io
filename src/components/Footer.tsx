import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-slate-500 dark:text-slate-400">
          © {currentYear} {portfolioData.name}. All rights reserved.
        </div>
        
        <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
          Built with <Heart size={14} className="text-rose-500 fill-rose-500" /> in Fukuoka, Japan
        </div>
        
        <div className="flex items-center gap-6">
          <a href={portfolioData.github} target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors">GitHub</a>
          <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors">Resume</a>
        </div>
      </div>
    </footer>
  );
}
