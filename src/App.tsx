import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { useScrollProgress } from './hooks/useScroll';

import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import About         from './components/About';
import Services      from './components/Services';
import WhyChooseUs   from './components/WhyChooseUs';
import Process       from './components/Process';
import Portfolio     from './components/Portfolio';
import Pricing       from './components/Pricing';
import Testimonials  from './components/Testimonials';
import FAQ           from './components/FAQ';
import Contact       from './components/Contact';
import Footer        from './components/Footer';

import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop   from './components/ScrollToTop';
import CursorGlow    from './components/CursorGlow';
import WhatsAppButton from './components/WhatsAppButton';

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [showToTop, setShowToTop]  = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const fn = () => setShowToTop(window.scrollY > 500);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  if (isLoading) return <LoadingScreen isLoading />;

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <AnimatePresence><LoadingScreen isLoading={isLoading} /></AnimatePresence>
      <CursorGlow />
      <ScrollProgress progress={scrollProgress} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop show={showToTop} />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
