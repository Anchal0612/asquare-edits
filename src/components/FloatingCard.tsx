import { motion } from 'framer-motion';
import { TrendingUp, Instagram, MonitorPlay, MapPin } from 'lucide-react';

const cardConfig: Record<string, { icon: typeof TrendingUp; gradient: string; meta: string }> = {
  'Google Ranking': { icon: TrendingUp, gradient: 'from-cyan-500/20 to-blue-500/10', meta: 'Higher visibility on Google results for local searches.' },
  'Instagram Growth': { icon: Instagram, gradient: 'from-fuchsia-500/20 to-pink-500/10', meta: 'More reach, engagement, and brand recognition for your local audience.' },
  'Website Live': { icon: MonitorPlay, gradient: 'from-slate-400/20 to-slate-600/10', meta: 'A conversion-ready website that performs beautifully on every device.' },
  'Local SEO': { icon: MapPin, gradient: 'from-emerald-500/20 to-teal-500/10', meta: 'Customers find your business faster with location-first SEO.' },
};

const defaultConfig = { icon: TrendingUp, gradient: 'from-cyan-500/20 to-blue-500/10', meta: 'Premium growth metrics designed for local brands.' };

export default function FloatingCard({ title, subtitle, delay = 0, mouse }: { title: string; subtitle: string; delay?: number; mouse: { x: number; y: number } }) {
  const depth = 14 + (Math.abs(mouse.x) + Math.abs(mouse.y)) * 8;
  const tx = mouse.x * depth;
  const ty = mouse.y * depth;
  const config = cardConfig[title] || defaultConfig;
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className={`glass-card px-5 py-5 bg-gradient-to-br ${config.gradient}`}
      style={{ transform: `translate3d(${tx}px, ${ty}px, 0)` }}
    >
      <div className="glass-card-content">
        <div className="flex items-center gap-3 mb-3">
          <Icon className="w-5 h-5 text-cyan-300" />
          <div className="glass-card-pill">{subtitle}</div>
        </div>
        <div className="glass-card-title">{title}</div>
        <div className="glass-card-meta">{config.meta}</div>
      </div>
    </motion.div>
  );
}
