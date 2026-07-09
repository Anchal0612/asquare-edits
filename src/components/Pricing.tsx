import { motion } from 'framer-motion';
import { Check, SearchIcon, Instagram, Globe, Sparkles, ArrowRight } from 'lucide-react';

const plans = [
  {
    id: 1,
    icon: SearchIcon,
    title: 'Local SEO Growth',
    priceDisplay: '₹100',
    priceTime: '/day',
    description: 'Boost your Google visibility for local searches',
    gradient: 'from-cyan-500/20 to-blue-500/10',
    border: 'border-cyan-500/30',
    accentColor: 'text-cyan-300',
    glowColor: 'shadow-cyan-500/20',
    btnColor: 'bg-cyan-500 hover:bg-cyan-400',
    features: [
      'Google Business Profile Optimization',
      'Local SEO',
      'Keyword Research',
      'Ranking Improvement',
      'Monthly Reports',
    ],
    cta: 'Get SEO Audit',
    popular: false,
  },
  {
    id: 2,
    icon: Instagram,
    title: 'Social Media Growth',
    priceDisplay: '₹2000',
    priceTime: '/month',
    description: 'Grow your Instagram presence and engagement',
    gradient: 'from-rose-500/20 to-pink-500/10',
    border: 'border-rose-500/30',
    accentColor: 'text-rose-300',
    glowColor: 'shadow-rose-500/20',
    btnColor: 'bg-rose-500 hover:bg-rose-400',
    features: [
      'Instagram Management',
      'Content Strategy',
      'Creative Posts',
      'Reels Strategy',
      'Growth Reports',
    ],
    cta: 'Grow My Brand',
    popular: false,
  },
  {
    id: 3,
    icon: Globe,
    title: 'Business Website',
    priceDisplay: '₹4999',
    priceTime: 'one-time',
    description: 'Professional SEO-friendly website for your business',
    gradient: 'from-amber-500/20 to-orange-500/10',
    border: 'border-amber-500/30',
    accentColor: 'text-amber-300',
    glowColor: 'shadow-amber-500/20',
    btnColor: 'bg-amber-500 hover:bg-amber-400',
    features: [
      'Professional Website',
      'Mobile Responsive',
      'SEO Friendly',
      'WhatsApp Integration',
      'Contact Form',
    ],
    cta: 'Build My Website',
    popular: false,
  },
  {
    id: 4,
    icon: Sparkles,
    title: 'Complete Digital Growth',
    priceDisplay: 'Custom',
    priceTime: 'pricing',
    description: 'All-in-one digital transformation for your business',
    gradient: 'from-violet-500/25 to-purple-500/15',
    border: 'border-violet-400/50',
    accentColor: 'text-violet-300',
    glowColor: 'shadow-violet-500/30',
    btnColor: 'bg-violet-500 hover:bg-violet-400',
    features: [
      'SEO Optimization',
      'Professional Website',
      'Social Media Management',
      'Google Ads Campaigns',
      'Branding & Design',
    ],
    cta: 'Request Quote',
    popular: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Pricing() {
  return (
    <section id="pricing" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-950/80 to-primary-950 pointer-events-none" />
      <div className="orb orb-cyan w-[600px] h-[600px] top-0 -right-48 opacity-12" />
      <div className="orb orb-gold w-[500px] h-[500px] bottom-0 -left-32 opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="badge badge-cyan mb-4">Affordable Pricing</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Digital Services
            <span className="gradient-text-hero"> For Local Businesses</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-silver-300">
            Transparent, affordable pricing designed for local businesses in India. No hidden fees, no long-term contracts.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
        >
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.id}
                variants={cardVariants}
                className={`group relative overflow-hidden rounded-3xl border ${plan.border} bg-gradient-to-br ${plan.gradient} p-8 shadow-2xl shadow-black/40 transition-all duration-500 flex flex-col ${ plan.popular ? 'md:col-span-2 lg:col-span-1 md:row-span-2 lg:row-span-1' : ''} hover:border-white/25 ${ plan.glowColor} hover:shadow-2xl`}
              >
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg shadow-violet-500/40 z-20"
                  >
                    <Sparkles className="w-4 h-4" /> Most Popular
                  </motion.div>
                )}

                {/* Premium gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Animated accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <motion.div
                    className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 ${ plan.accentColor}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-7 h-7" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">{plan.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-silver-300 mb-6">{plan.description}</p>

                  {/* Pricing */}
                  <div className="mb-8 pb-8 border-b border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-white">{plan.priceDisplay}</span>
                      <span className="text-sm text-silver-400 font-medium">{plan.priceTime}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 ${ plan.accentColor}`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-silver-300 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href={plan.popular ? '#contact' : plan.id === 1 ? '#contact' : '#contact'}
                    className={`w-full py-3.5 rounded-xl font-semibold text-white transition-all duration-300 ${ plan.btnColor} shadow-lg shadow-black/20 flex items-center justify-center gap-2 group/btn`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 text-center">
          <p className="text-silver-400 text-base mb-6">
            💡 <span className="text-silver-200 font-semibold">Custom packages available</span> for specific business needs
          </p>
          <motion.button
            className="btn-outline-silver inline-flex items-center gap-2"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Schedule a Free Consultation
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
