import React from 'react';
import { motion } from 'motion/react';
import Section from './Section';
import { portfolioData } from '@/data/portfolio';
import { GraduationCap, BookOpen } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8"
          >
            {portfolioData.about}
          </motion.p>

          <div className="space-y-6">
            <h3 className="text-xl font-display font-bold flex items-center gap-2">
              <GraduationCap className="text-primary" /> Education
            </h3>
            <div className="space-y-8">
              {portfolioData.education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-8 border-l border-slate-200 dark:border-slate-800"
                >
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-primary" />
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h4 className="font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                    <span className="text-sm font-semibold text-primary">{edu.duration}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-1">{edu.institution}, {edu.location}</p>
                  {edu.gpa && <p className="text-sm font-medium text-slate-500">GPA: {edu.gpa}</p>}
                  {edu.percentage && <p className="text-sm font-medium text-slate-500">Percentage: {edu.percentage}</p>}
                  {edu.focus && (
                    <p className="text-sm text-slate-500 mt-2 italic flex items-start gap-2">
                      <BookOpen size={14} className="mt-1 shrink-0" />
                      Focus: {edu.focus}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-secondary opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-slate-800 shadow-2xl">
            <img
              src={profileImg}
              alt={portfolioData.name}
              className="w-full h-full object-cover transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
