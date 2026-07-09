import { motion } from 'framer-motion';
import { useState } from 'react';
import { Globe, Smartphone, Search, Share2, TrendingUp, Palette, Mail, MessageSquare, Wrench, ArrowRight } from 'lucide-react';

const serviceCategories = [
  {
    name: 'Development',
    color: 'cyan',
    activeClass: 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30',
    services: [
      { icon: Globe, name: 'Website Development', desc: 'Modern, responsive websites that convert visitors into customers.', color: 'icon-cyan' },
      { icon: Globe, name: 'Web Application', desc: 'Custom web apps tailored to your business needs.', color: 'icon-cyan' },
      { icon: Smartphone, name: 'Mobile App Development', desc: 'Native and cross-platform mobile applications.', color: 'icon-cyan' },
    ],
  },
  {
    name: 'SEO & Social',
    color: 'emerald',
    activeClass: 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30',
    services: [
      { icon: Search, name: 'SEO Optimization', desc: 'Boost your search rankings and organic traffic.', color: 'icon-emerald' },
      { icon: Search, name: 'Local SEO', desc: 'Dominate local search results in your area.', color: 'icon-emerald' },
      { icon: TrendingUp, name: 'Technical SEO', desc: 'Fix technical issues impacting your rankings.', color: 'icon-emerald' },
      { icon: Share2, name: 'Social Media Management', desc: 'Engage your audience with compelling content.', color: 'icon-emerald' },
      { icon: TrendingUp, name: 'Instagram Growth', desc: 'Grow your Instagram presence organically.', color: 'icon-emerald' },
      { icon: Share2, name: 'Facebook Marketing', desc: 'Reach your target audience on Facebook.', color: 'icon-emerald' },
    ],
  },
  {
    name: 'Advertising',
    color: 'amber',
    activeClass: 'bg-amber-500 text-white shadow-lg shadow-amber-500/30',
    services: [
      { icon: TrendingUp, name: 'Google Business Profile', desc: 'Optimize your Google presence for local visibility.', color: 'icon-gold' },
      { icon: TrendingUp, name: 'Google Ads', desc: 'Drive targeted traffic with PPC campaigns.', color: 'icon-gold' },
      { icon: Share2, name: 'Meta Ads', desc: 'Reach customers on Facebook and Instagram.', color: 'icon-gold' },
    ],
  },
  {
    name: 'Design & Brand',
    color: 'rose',
    activeClass: 'bg-rose-500 text-white shadow-lg shadow-rose-500/30',
    services: [
      { icon: Palette, name: 'Branding', desc: 'Build a memorable brand identity.', color: 'icon-rose' },
      { icon: Palette, name: 'Logo Design', desc: 'Professional logos that stand out.', color: 'icon-rose' },
      { icon: Palette, name: 'UI/UX Design', desc: 'User-centered design for better experiences.', color: 'icon-rose' },
      { icon: Palette, name: 'Graphic Design', desc: 'Eye-catching visuals for all platforms.', color: 'icon-rose' },
    ],
  },
  {
    name: 'Content',
    color: 'silver',
    activeClass: 'bg-silver-400 text-primary-900 shadow-lg shadow-silver-400/30',
    services: [
      { icon: Mail, name: 'Content Writing', desc: 'Engaging content that tells your story.', color: 'icon-silver' },
      { icon: Mail, name: 'Email Marketing', desc: 'Nurture leads with targeted campaigns.', color: 'icon-silver' },
      { icon: MessageSquare, name: 'WhatsApp Marketing', desc: 'Connect with customers on WhatsApp.', color: 'icon-silver' },
      { icon: Wrench, name: 'Maintenance & Support', desc: 'Keep your digital assets running smoothly.', color: 'icon-silver' },
    ],
  },
];

const arrowColorMap: Record<string, string> = {
  cyan: 'text-cyan-400 hover:text-cyan-300',
  emerald: 'text-emerald-400 hover:text-emerald-300',
  amber: 'text-amber-400 hover:text-amber-300',
  rose: 'text-rose-400 hover:text-rose-300',
  silver: 'text-silver-300 hover:text-silver-100',
};

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('Development');
  const active = serviceCategories.find((c) => c.name === activeCategory)!;

  return (
    <section id="services" className="section relative overflow-hidden">
      {/* Dark bg with subtle grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      <div className="orb orb-cyan w-[600px] h-[600px] -bottom-32 -left-32 opacity-20" />
      <div className="orb orb-gold w-[400px] h-[400px] top-16 right-0 opacity-15" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="badge badge-cyan mb-4">Our Services</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Digital Solutions for{' '}
            <span className="gradient-text-hero">Every Need</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-silver-400">
            From development to marketing, we offer comprehensive digital services
            to help your business thrive in the digital age.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {serviceCategories.map((cat) => (
            <motion.button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.name
                  ? cat.activeClass
                  : 'bg-silver-800/40 text-silver-300 hover:bg-silver-700/50 border border-silver-700/40'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {cat.name}
            </motion.button>
          ))}
        </div>

        {/* Cards */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {active.services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
              }}
              whileHover={{ background: 'rgba(255,255,255,0.07)' }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(6,182,212,0.08), transparent 70%)' }} />

              <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
              <p className="text-silver-400 text-sm mb-4 leading-relaxed">{service.desc}</p>
              <motion.a
                href="#contact"
                className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${arrowColorMap[active.color]}`}
                whileHover={{ x: 4 }}
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
