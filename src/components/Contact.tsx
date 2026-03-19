import React from 'react';
import { motion } from 'motion/react';
import Section from './Section';
import { portfolioData } from '@/data/portfolio';
import { Mail, Linkedin, Github, ExternalLink, Send } from 'lucide-react';

export default function Contact() {
  return (
    <Section id="contact" title="Get in Touch" subtitle="I'm always open to discussing research collaborations, data science projects, or potential opportunities.">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8 text-center">
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Feel free to reach out through any of these platforms. I'll do my best to get back to you as soon as possible.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            <a 
              href={`mailto:${portfolioData.email}`}
              className="flex flex-col items-center gap-4 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 hover:bg-primary/5 transition-all group"
            >
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-primary group-hover:text-white transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Email</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white break-all">{portfolioData.email}</p>
              </div>
            </a>

            <a 
              href={portfolioData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-4 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 hover:bg-primary/5 transition-all group"
            >
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-primary group-hover:text-white transition-colors">
                <Linkedin size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">LinkedIn</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">umangdobhal</p>
              </div>
            </a>

            <a 
              href={portfolioData.github}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-4 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 hover:bg-primary/5 transition-all group"
            >
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-primary group-hover:text-white transition-colors">
                <Github size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">GitHub</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">umangdobhal</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
