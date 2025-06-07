import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThreeBackground from './components/ThreeBackground';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  useEffect(() => {
    // Initialize smooth scroll behavior
    gsap.set('body', { overflow: 'hidden' });
    gsap.to('body', { overflow: 'auto', duration: 0.1, delay: 0.5 });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-x-hidden">
      <ThreeBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Tools />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;