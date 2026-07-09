import { motion } from 'framer-motion';
import { Globe, Smartphone, Search, Share2, Palette, Zap, ArrowRight, MessageCircle } from 'lucide-react';

const solutions = [
  {
    id: 1,
    title: 'Business Website Development',
    description: 'Modern SEO-friendly websites that help businesses build trust and generate leads.',
    icon: Globe,
    features: ['Responsive Design', 'SEO Ready', 'Fast Performance'],
    gradient: 'from-cyan-500/20 to-blue-500/10',
    accentColor: 'text-cyan-300',
    glowColor: 'shadow-cyan-500/20',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Custom native and cross-platform applications designed for performance and user engagement.',
    icon: Smartphone,
    features: ['Android/iOS', 'Modern UI', 'Scalable Apps'],
    gradient: 'from-blue-500/20 to-purple-500/10',
    accentColor: 'text-blue-300',
    glowColor: 'shadow-blue-500/20',
  },
  {
    id: 3,
    title: 'SEO Growth',
    description: 'Strategic SEO services to improve your online visibility and attract qualified local customers.',
    icon: Search,
    features: ['Local SEO', 'Google Ranking', 'Analytics'],
    gradient: 'from-emerald-500/20 to-teal-500/10',
    accentColor: 'text-emerald-300',
    glowColor: 'shadow-emerald-500/20',
  },
  {
    id: 4,
    title: 'Social Media Management',
    description: 'Build your brand presence with engaging content and strategic social media growth.',
    icon: Share2,
    features: ['Content Strategy', 'Creative Designs', 'Audience Growth'],
    gradient: 'from-rose-500/20 to-pink-500/10',
    accentColor: 'text-rose-300',
    glowColor: 'shadow-rose-500/20',
  },
  {
    id: 5,
    title: 'Branding & Design',
    description: 'Create a unique brand identity that resonates with your target audience and stands out.',
    icon: Palette,
    features: ['Logo Design', 'Brand Identity', 'Marketing Materials'],
    gradient: 'from-amber-500/20 to-orange-500/10',
    accentColor: 'text-amber-300',
    glowColor: 'shadow-amber-500/20',
  },
  {
    id: 6,
    title: 'Digital Marketing',
    description: 'Targeted advertising campaigns that drive conversions and maximize your marketing ROI.',
    icon: Zap,
    features: ['Google Ads', 'Meta Ads', 'Lead Generation'],
    gradient: 'from-violet-500/20 to-indigo-500/10',
    accentColor: 'text-violet-300',
    glowColor: 'shadow-violet-500/20',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-950/80 to-primary-950 pointer-events-none" />
      <div className="orb orb-cyan w-[600px] h-[600px] -top-32 -right-32 opacity-10" />
      <div className="orb orb-gold w-[500px] h-[500px] bottom-0 -left-32 opacity-8" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="badge badge-cyan mb-4">Our Expertise</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Digital Solutions
            <span className="gradient-text-hero"> Showcase</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-silver-300">
            Discover how our premium digital services help local businesses attract customers, build trust, and scale their operations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.id}
                variants={cardVariants}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${solution.gradient} p-8 shadow-2xl shadow-black/40 transition-all duration-500 hover:border-white/20 hover:shadow-2xl ${solution.glowColor}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <motion.div
                    className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 ${solution.accentColor}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-7 h-7" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">{solution.title}</h3>

                  <p className="text-sm text-silver-300 mb-6 leading-relaxed line-clamp-2">{solution.description}</p>

                  <div className="space-y-2 mb-8">
                    {solution.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full ${solution.accentColor}`} />
                        <span className="text-sm text-silver-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
                    <motion.a
                      href="#contact"
                      className="btn-primary inline-flex items-center justify-center gap-2 w-full text-center py-2.5 text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Explore Service
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href="https://wa.me/919477760238?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20services"
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline-silver inline-flex items-center justify-center gap-2 w-full text-center py-2.5 text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Free Consultation
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
