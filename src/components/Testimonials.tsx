import { motion } from 'framer-motion';
import { Star, Quote, UtensilsCrossed, Zap, Coffee, Palette } from 'lucide-react';
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};
const testimonials = [
  {
    name: 'Sima Das',
    role: 'Owner, Maa Siddheshwari Food Corner',
    businessType: 'Restaurant / Food Business',
    icon: UtensilsCrossed,
    content: 'Asquare Edits helped us create a better online presence for our food business. Their digital solutions were affordable, professional, and helped customers discover our business easily.',
    rating: 5,
    accentColor: 'border-orange-500/40',
    quoteColor: 'text-orange-300',
    glowColor: 'shadow-orange-500/20',
    gradient: 'from-orange-500/15 to-amber-500/10',
  },
  {
    name: 'Abhishek',
    role: 'Owner, L.S Electricals',
    businessType: 'Electrical Shop',
    icon: Zap,
    content: 'Asquare Edits helped us improve our online presence and understand how digital marketing can support our business growth. Their service was professional, affordable, and reliable.',
    rating: 5,
    accentColor: 'border-cyan-500/40',
    quoteColor: 'text-cyan-300',
    glowColor: 'shadow-cyan-500/20',
    gradient: 'from-cyan-500/15 to-blue-500/10',
  },
  {
    name: 'Amit Kumar',
    role: 'Owner, Local Cafe',
    businessType: 'Cafe / Food Business',
    icon: Coffee,
    content: 'Best investment I made for my business. Our social media presence has grown 300% and revenue increased significantly. Thank you Asquare team!',
    rating: 5,
    accentColor: 'border-amber-500/40',
    quoteColor: 'text-amber-300',
    glowColor: 'shadow-amber-500/20',
    gradient: 'from-amber-500/15 to-yellow-500/10',
  },
  {
    name: 'Sneha Gupta',
    role: 'Founder, Fashion Boutique',
    businessType: 'Fashion / E-commerce',
    icon: Palette,
    content: 'The digital solutions they provided for our boutique are smooth and user-friendly. Our customers love our new online presence! Great communication and support throughout.',
    rating: 5,
    accentColor: 'border-rose-500/40',
    quoteColor: 'text-rose-300',
    glowColor: 'shadow-rose-500/20',
    gradient: 'from-rose-500/15 to-pink-500/10',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-950/80 to-primary-950 pointer-events-none" />
      <div className="orb orb-cyan w-[600px] h-[600px] bottom-0 right-0 opacity-12" />
      <div className="orb orb-gold w-[500px] h-[500px] -top-32 left-0 opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="badge badge-cyan mb-4">Trusted By Local Businesses</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Success Stories From
            <span className="gradient-text-hero"> Our Clients</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-silver-400">
            Real businesses, real results. See how we've helped local entrepreneurs grow their presence online.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((t, index) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.name}
                variants={itemVariants}
                className={`group relative rounded-3xl p-8 border ${t.accentColor} ${t.glowColor} transition-all duration-500 overflow-hidden hover:border-white/30`}
                style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01)), linear-gradient(to bottom right, ${t.gradient.split(' ').pop()})` }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top accent glow line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Premium corner accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${t.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-bl-full pointer-events-none`} />

                <div className="relative z-10">
                  {/* Header with category and icon */}
                  <div className="flex items-center justify-between mb-6">
                    <motion.div
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 border ${t.accentColor} backdrop-blur-sm`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Icon className={`w-3.5 h-3.5 ${t.quoteColor}`} />
                      <span className="text-silver-200">{t.businessType}</span>
                    </motion.div>
                    <Quote className={`w-8 h-8 opacity-40 ${t.quoteColor}`} />
                  </div>

                  {/* Star rating */}
                  <div className="flex gap-1.5 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-silver-200 mb-8 leading-relaxed text-[15px] font-light">"{t.content}"</p>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

                  {/* Client info with icon avatar */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.gradient} border ${t.accentColor} flex items-center justify-center flex-shrink-0 group/avatar`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className={`w-7 h-7 ${t.quoteColor}`} />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-white text-base">{t.name}</h4>
                      <p className="text-sm text-silver-400">{t.role}</p>
                    </div>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${t.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-emerald-400" />
              ))}
            </div>
            <span className="text-sm text-silver-300">
              <span className="font-semibold text-white">4+</span> Local Businesses Transformed
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
