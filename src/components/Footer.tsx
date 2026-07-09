import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const services = ['Website Development', 'App Development', 'SEO Optimization', 'Social Media Management', 'Digital Marketing', 'Branding & Design'];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600/20 hover:border-blue-500/50 hover:text-blue-400' },
  { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-cyan-600/20 hover:border-cyan-500/50 hover:text-cyan-400' },
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-rose-600/20 hover:border-rose-500/50 hover:text-rose-400' },
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-800/20 hover:border-blue-700/50 hover:text-blue-300' },
  { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:bg-red-600/20 hover:border-red-500/50 hover:text-red-400' },
];

export default function Footer() {
  return (
    <footer className="relative bg-primary-950 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.4) 30%, rgba(245,158,11,0.4) 70%, transparent)' }} />

      <div className="orb orb-cyan w-[400px] h-[400px] -top-32 right-0 opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <a href="#home" className="block mb-5">
              <img src="/WhatsApp_Image_2026-07-06_at_18.03.15.jpeg" alt="Asquare Edits" className="h-12 w-auto object-contain" />
            </a>
            <p className="text-silver-400 text-sm mb-6 leading-relaxed">
              Your affordable digital growth partner. We help businesses succeed with quality digital services at the best prices.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((s) => (
                <motion.a key={s.label} href={s.href} aria-label={s.label}
                  className={`w-9 h-9 rounded-lg flex items-center justify-center text-silver-500 border border-silver-800/60 transition-all duration-300 ${s.color}`}
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <s.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-silver-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-1.5 group">
                    <span className="w-0 group-hover:w-3 h-px bg-cyan-400 transition-all duration-300 overflow-hidden" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-silver-400 hover:text-amber-400 text-sm transition-colors flex items-center gap-1.5 group">
                    <span className="w-0 group-hover:w-3 h-px bg-amber-400 transition-all duration-300 overflow-hidden" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Stay Updated</h4>
            <p className="text-silver-400 text-sm mb-4">Subscribe for tips and digital growth insights.</p>
            <form className="flex flex-col gap-3 mb-6">
              <input type="email" placeholder="Your email address" className="input text-sm bg-white/5 border-silver-700/50 text-white placeholder-silver-500 focus:ring-cyan-400/50 focus:border-cyan-500" />
              <motion.button type="submit" className="btn-primary flex items-center justify-center gap-2 text-sm" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                Subscribe <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>

            <div className="space-y-2.5">
              <a href="mailto:asquareedits18@gmail.com" className="flex items-center gap-2.5 text-silver-400 hover:text-cyan-400 text-sm transition-colors">
                <Mail className="w-4 h-4 text-cyan-400" /> asquareedits18@gmail.com
              </a>
              <a href="tel:+919477760238" className="flex items-center gap-2.5 text-silver-400 hover:text-emerald-400 text-sm transition-colors">
                <Phone className="w-4 h-4 text-emerald-400" /> +91 94777 60238
              </a>
              <div className="flex items-start gap-2.5 text-silver-400 text-sm">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" /> Jhaubqgan Nalir Math, Barrackpore, Kolkata-700120, West Bengal
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-silver-500 text-sm">© {new Date().getFullYear()} Asquare Edits. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-silver-500 hover:text-silver-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-silver-500 hover:text-silver-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
