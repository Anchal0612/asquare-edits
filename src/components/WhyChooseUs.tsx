import { motion } from 'framer-motion';
import { DollarSign, Zap, Star, Search, Smartphone, HeadphonesIcon, Users, MessageCircle } from 'lucide-react';

const features = [
  { icon: DollarSign, title: 'Lowest Pricing', desc: 'Quality services at prices that fit your budget', color: 'icon-emerald', glow: 'rgba(16,185,129,0.15)' },
  { icon: Zap, title: 'Fast Delivery', desc: 'Quick turnaround without compromising quality', color: 'icon-gold', glow: 'rgba(245,158,11,0.15)' },
  { icon: Star, title: 'Premium Quality', desc: 'Top-notch deliverables that exceed expectations', color: 'icon-cyan', glow: 'rgba(6,182,212,0.15)' },
  { icon: Search, title: 'SEO Friendly', desc: 'Built-in SEO optimization for better visibility', color: 'icon-rose', glow: 'rgba(244,63,94,0.15)' },
  { icon: Smartphone, title: 'Mobile Responsive', desc: 'Perfect experience on all devices', color: 'icon-cyan', glow: 'rgba(6,182,212,0.15)' },
  { icon: HeadphonesIcon, title: 'Dedicated Support', desc: '24/7 support whenever you need us', color: 'icon-gold', glow: 'rgba(245,158,11,0.15)' },
  { icon: Users, title: 'Experienced Team', desc: 'Skilled professionals with years of expertise', color: 'icon-emerald', glow: 'rgba(16,185,129,0.15)' },
  { icon: MessageCircle, title: 'Transparent Comms', desc: 'Clear updates and honest feedback throughout', color: 'icon-silver', glow: 'rgba(161,161,170,0.15)' },
];

export default function WhyChooseUs() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-amber-50/20 to-white dark:from-primary-950 dark:via-amber-950/10 dark:to-primary-950 pointer-events-none" />
      <div className="orb orb-gold w-[500px] h-[500px] -top-32 right-0 opacity-10" />
      <div className="orb orb-emerald w-[400px] h-[400px] bottom-0 left-0 opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="badge badge-gold mb-4">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-900 dark:text-white mb-6">
            The Asquare{' '}
            <span className="gradient-text-gold">Advantage</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-silver-600 dark:text-silver-400">
            Discover what sets us apart from the competition and why businesses trust us
            with their digital growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="group text-center p-6 rounded-2xl bg-white dark:bg-primary-900/60 border border-silver-200/60 dark:border-silver-800/40 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <motion.div
                className={`w-16 h-16 mx-auto rounded-2xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 5 }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-base font-semibold text-primary-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-silver-600 dark:text-silver-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
