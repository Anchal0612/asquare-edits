import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const points = [
  'Affordable premium services without compromise',
  'Fast delivery with transparent timelines',
  'Customer-first approach in every project',
  'Dedicated team of experienced professionals',
  'Full-spectrum digital solutions under one roof',
  'Measurable results and honest reporting',
];

export default function About() {
  return (
    <section id="about" className="section relative" style={{ background: '#070707' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: image collage */}
          <motion.div
            initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative h-[420px] lg:h-[480px]"
          >
            <div className="absolute top-0 left-0 w-[62%] h-[75%] rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
              <img src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent, rgba(7,7,7,0.4))' }} />
            </div>

            <div className="absolute bottom-0 right-0 w-[54%] h-[55%] rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(34,211,238,0.2)', boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}>
              <img src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Office" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,7,7,0.5), transparent)' }} />
            </div>

            {/* stat badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="absolute top-1/2 right-[10%] -translate-y-1/2 rounded-2xl px-5 py-4 text-center"
              style={{ background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.25)', backdropFilter: 'blur(12px)' }}
            >
              <p className="text-3xl font-extrabold text-teal-400">50+</p>
              <p className="text-xs text-gray-400 mt-0.5">Happy Clients</p>
            </motion.div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          >
            <span className="section-badge">Who We Are</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Your Affordable<br />
              <span className="text-teal-gradient">Digital Growth Partner</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Asquare Edits is a full-service digital agency dedicated to helping startups and businesses
              thrive in the digital world. We combine creativity, strategy, and technology to deliver
              outstanding results — all at pricing that makes sense for your business.
            </p>

            <ul className="space-y-3 mb-10">
              {points.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3 text-sm text-gray-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  {p}
                </motion.li>
              ))}
            </ul>

            <a href="#contact" className="btn-teal inline-flex px-8 py-3.5 text-base">
              Start Your Project <span className="ml-1">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
