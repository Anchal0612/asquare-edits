import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  return (
    <div className="flex items-center justify-center">
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }} className="w-8 h-12 rounded-2xl border-2 border-white/20 flex items-start justify-center p-2">
        <motion.div className="w-2 h-2 rounded-full bg-white/60" animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.2 }} />
      </motion.div>
    </div>
  );
}
