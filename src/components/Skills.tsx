import React from 'react';
import { motion } from 'motion/react';
import Section from './Section';
import { portfolioData } from '@/data/portfolio';
import { cn } from '@/lib/utils';

export default function Skills() {
  return (
    <Section id="skills" title="Skills" darkBg subtitle="Technical competencies and tools I use to build intelligent systems.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioData.skills.map((skillGroup, i) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass p-6 rounded-2xl border border-slate-200 dark:border-slate-800/50 h-full"
          >
            <h3 className="text-lg font-display font-bold mb-6 text-primary">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
