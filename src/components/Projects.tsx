import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Section from './Section';
import { portfolioData } from '@/data/portfolio';
import { ExternalLink, Github, ChevronDown, ChevronUp, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <Section id="projects" title="Projects" subtitle="A selection of my technical projects in data science and machine learning.">
      <div className="grid gap-6">
        {portfolioData.projects.map((project, i) => {
          const isExpanded = expandedIndex === i;
          
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "glass rounded-2xl border transition-all duration-300 overflow-hidden",
                isExpanded 
                  ? "border-primary/50 shadow-xl shadow-primary/5" 
                  : "border-slate-200 dark:border-slate-800/50 hover:border-primary/30"
              )}
            >
              <div 
                className="p-6 md:p-8 cursor-pointer flex items-start justify-between gap-4"
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 line-clamp-2">
                    {project.shortDesc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.slice(0, 3).map(t => (
                      <span key={t} className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 shrink-0">
                  {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 md:px-8 pb-8 pt-2 border-t border-slate-100 dark:border-slate-800/50">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">Description</h4>
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            {project.fullDesc}
                          </p>
                        </div>
                        
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map(t => (
                                <span key={t} className="px-3 py-1 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">Key Results</h4>
                            <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                              <Trophy size={18} className="shrink-0 mt-0.5" />
                              <p className="text-sm font-medium">{project.results}</p>
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 flex gap-4">
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-sm transition-transform hover:scale-105 active:scale-95"
                          >
                            <Github size={18} /> View Source
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
