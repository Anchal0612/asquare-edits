import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, Clock } from 'lucide-react';

const contactInfo = [
  { icon: Mail, title: 'Email Us', content: 'asquareedits18@gmail.com', link: 'mailto:asquareedits18@gmail.com', color: 'icon-cyan', border: 'border-cyan-500/30 hover:border-cyan-400/60' },
  { icon: Phone, title: 'Call Us', content: '+91 94777 60238', link: 'tel:+919477760238', color: 'icon-emerald', border: 'border-emerald-500/30 hover:border-emerald-400/60' },
  { icon: MapPin, title: 'Visit Us', content: 'Jhaubqgan Nalir Math, Barrackpore, Kolkata-700120, West Bengal', link: 'https://www.google.com/maps?q=Jhaubqgan%20Nalir%20Math%2C%20Barrackpore%2C%20Kolkata-700120%2C%20West%20Bengal&output=embed', color: 'icon-gold', border: 'border-amber-500/30 hover:border-amber-400/60' },
  { icon: Clock, title: 'Working Hours', content: 'Mon - Sat: 10AM - 7PM', link: '#', color: 'icon-rose', border: 'border-rose-500/30 hover:border-rose-400/60' },
];

const services = ['Website Development', 'Mobile App Development', 'SEO Optimization', 'Social Media Management', 'Digital Marketing', 'Branding & Design', 'Content Writing', 'Other'];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-[#060c14] to-primary-950 pointer-events-none" />
      <div className="orb orb-cyan w-[600px] h-[600px] -top-32 -left-32 opacity-15" />
      <div className="orb orb-gold w-[500px] h-[500px] bottom-0 -right-32 opacity-10" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="badge badge-cyan mb-4">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something{' '}
            <span className="gradient-text-hero">Amazing</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-silver-400">
            Ready to start your project? Get in touch and let's discuss how we can help your business grow.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(6,182,212,0.2)', backdropFilter: 'blur(16px)' }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-silver-300 mb-2">Full Name</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" className="input bg-white/5 border-silver-700/60 text-white placeholder-silver-500 focus:ring-cyan-400/50 focus:border-cyan-500" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-silver-300 mb-2">Email</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" className="input bg-white/5 border-silver-700/60 text-white placeholder-silver-500 focus:ring-cyan-400/50 focus:border-cyan-500" required />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-silver-300 mb-2">Phone</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 94777 60238" className="input bg-white/5 border-silver-700/60 text-white placeholder-silver-500 focus:ring-cyan-400/50 focus:border-cyan-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-silver-300 mb-2">Service Required</label>
                  <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="input bg-primary-900/80 border-silver-700/60 text-white focus:ring-cyan-400/50 focus:border-cyan-500" required>
                    <option value="">Select a service</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-silver-300 mb-2">Message</label>
                <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your project..." rows={5} className="input bg-white/5 border-silver-700/60 text-white placeholder-silver-500 focus:ring-cyan-400/50 focus:border-cyan-500 resize-none" required />
              </div>

              <motion.button type="submit" className="w-full btn-primary py-4 text-base flex items-center justify-center gap-2" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                Send Message <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`rounded-2xl p-5 border ${info.border} transition-all duration-300 hover:-translate-y-0.5 group`}
                  style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}
                >
                  <div className={`w-10 h-10 rounded-xl ${info.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-xs text-silver-500 mb-1">{info.title}</p>
                  <p className="font-semibold text-white text-sm">{info.content}</p>
                </motion.a>
              ))}
            </div>

            {/* Map */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden h-80" 
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <iframe 
                src="https://www.google.com/maps?q=Jhaubqgan%20Nalir%20Math%2C%20Barrackpore%2C%20Kolkata-700120%2C%20West%20Bengal&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 'none' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/919477760238?text=Hi! I am interested in your services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 group"
              style={{ background: 'linear-gradient(135deg, rgba(22,163,74,0.2), rgba(22,163,74,0.08))', border: '1px solid rgba(22,163,74,0.35)' }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-0.5">Chat on WhatsApp</h4>
                <p className="text-sm text-silver-400">Get instant response from our team</p>
              </div>
              <div className="ml-auto text-green-400 text-2xl font-bold opacity-30">→</div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
