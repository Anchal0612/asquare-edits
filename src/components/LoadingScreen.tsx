import { motion } from 'framer-motion';

interface LoadingScreenProps { isLoading: boolean; }

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #050505 0%, #0a0f18 50%, #050505 100%)' }}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="orb orb-cyan w-[400px] h-[400px] -top-32 -left-32 opacity-20" />
        <div className="orb orb-gold w-[300px] h-[300px] -bottom-16 -right-16 opacity-15" />
      </div>

      <div className="relative text-center">
        {/* Logo image */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mb-6"
        >
          <img
            src="/WhatsApp_Image_2026-07-06_at_18.03.15.jpeg"
            alt="Asquare Edits"
            className="h-20 w-auto mx-auto object-contain"
          />
        </motion.div>

        {/* Progress bar */}
        <div className="w-48 h-1 mx-auto rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #06b6d4, #fbbf24, #06b6d4)', backgroundSize: '200%' }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-silver-400 text-xs tracking-widest uppercase"
        >
          Loading Experience
        </motion.p>
      </div>
    </motion.div>
  );
}
