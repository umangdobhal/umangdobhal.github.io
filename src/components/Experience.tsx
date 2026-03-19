import React from 'react';
import { motion } from 'motion/react';
import Section from './Section';
import { portfolioData } from '@/data/portfolio';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <Section id="experience" title="Experience" darkBg subtitle="My professional journey in research and software development.">
      <div className="space-y-8">
        {portfolioData.experience.map((exp, i) => (
          <motion.div
            key={exp.role + exp.organization}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass p-8 rounded-2xl border border-slate-200 dark:border-slate-800/50 hover:border-primary/30 transition-colors group"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                  {exp.role}
                </h3>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-slate-500 dark:text-slate-400 text-sm">
                  <span className="flex items-center gap-1 font-medium text-slate-700 dark:text-slate-300">
                    <Briefcase size={14} /> {exp.organization}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> {exp.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {exp.duration}
                  </span>
                </div>
              </div>
            </div>
            
            <ul className="space-y-3">
              {exp.points.map((point, j) => (
                <li key={j} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
