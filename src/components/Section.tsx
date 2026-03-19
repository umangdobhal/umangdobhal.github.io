import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  darkBg?: boolean;
}

export default function Section({ id, title, subtitle, children, className, darkBg }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'section-padding relative',
        darkBg ? 'bg-slate-50 dark:bg-slate-900/30' : 'bg-white dark:bg-slate-950',
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            {title}<span className="text-primary">.</span>
          </motion.h2>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 dark:text-slate-400 max-w-2xl"
            >
              {subtitle}
            </motion.p>
          )}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 bg-primary mt-6 rounded-full"
          />
        </div>
        {children}
      </div>
    </section>
  );
}
