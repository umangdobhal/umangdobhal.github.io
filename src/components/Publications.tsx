import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Section from './Section';
import { portfolioData } from '@/data/portfolio';
import { ExternalLink, ChevronDown, ChevronUp, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Publications() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <Section 
      id="publications" 
      title="Research & Publications" 
      subtitle="Publications at ACM UbiComp (HASCA 2024 & 2025), UCAmI 2025, and more — focusing on synthetic data, time-series modeling, and healthcare AI."
    >
      <div className="grid gap-6">
        {portfolioData.publications.map((pub, i) => {
          const isExpanded = expandedIndex === i;
          
          return (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative rounded-2xl border transition-all duration-300 overflow-hidden",
                isExpanded 
                  ? "bg-primary/5 border-primary/50 shadow-xl shadow-primary/5" 
                  : "bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-800/50 hover:border-primary/30"
              )}
            >
              <div 
                className="p-6 md:p-8 cursor-pointer flex items-start justify-between gap-4"
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
              >
                <div className="flex-1">
                  
                  {/* Conference + Highlight */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
                      {pub.conference}
                    </span>

                    {pub.highlight && (
                      <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-[10px] font-semibold">
                        {pub.highlight}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                    {pub.title}
                  </h3>

                  <p className="text-slate-500 dark:text-slate-400 text-sm italic">
                    {pub.fullConference}
                  </p>
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
                    <div className="px-6 md:px-8 pb-8 pt-2 border-t border-primary/10">
                      <div className="space-y-6">

                        <div className="relative">
                          <Quote className="absolute -left-4 -top-2 text-primary/10 w-12 h-12 -z-10" />
                          <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
                            Abstract
                          </h4>
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            {pub.abstract}
                          </p>
                        </div>
                        
                        <div className="p-5 rounded-xl bg-primary/5 border border-primary/10">
                          <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
                            Key Contributions
                          </h4>

                          <ul className="text-slate-700 dark:text-slate-300 font-medium space-y-2">
                            {Array.isArray(pub.contribution) ? (
                              pub.contribution.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  <span>{point}</span>
                                </li>
                              ))
                            ) : (
                              <li>{pub.contribution}</li>
                            )}
                          </ul>
                        </div>

                        <div className="pt-2">
                          {pub.link.startsWith("http") ? (
                            <a 
                              href={pub.link} 
                              target="_blank" 
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                            >
                              <ExternalLink size={18} /> View Publication / DOI
                            </a>
                          ) : (
                            <span className="text-sm text-slate-500 italic">
                              DOI coming soon
                            </span>
                          )}
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