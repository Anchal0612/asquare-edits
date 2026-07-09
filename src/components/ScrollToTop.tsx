import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

interface ScrollToTopProps { show: boolean; }

export default function ScrollToTop({ show }: ScrollToTopProps) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!show) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg"
      style={{ background: 'linear-gradient(135deg, #06b6d4, #0891b2)', boxShadow: '0 4px 20px rgba(6,182,212,0.4)' }}
      whileHover={{ scale: 1.1, boxShadow: '0 6px 28px rgba(6,182,212,0.6)' }}
      whileTap={{ scale: 0.9 }}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </motion.button>
  );
}
