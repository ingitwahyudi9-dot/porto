import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Tools from './components/Tools';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'tools', 'project', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navigation activeSection={activeSection} />

      <motion.div
        className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-teal-500 to-purple-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <Hero />
      <About />
      <Tools />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
