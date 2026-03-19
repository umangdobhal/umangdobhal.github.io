import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Publications from '@/components/Publications';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
