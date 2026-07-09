import { motion } from 'framer-motion';
import { MessageSquare, FileText, Palette, Code, TestTube, Rocket } from 'lucide-react';

const steps = [
  { icon: MessageSquare, title: 'Free Consultation', desc: 'Discuss your goals and requirements', color: 'icon-cyan', num: '01', numColor: 'text-cyan-400' },
  { icon: FileText, title: 'Planning', desc: 'Creating a detailed roadmap for success', color: 'icon-gold', num: '02', numColor: 'text-amber-400' },
  { icon: Palette, title: 'Design', desc: 'Crafting stunning visuals and UX', color: 'icon-rose', num: '03', numColor: 'text-rose-400' },
  { icon: Code, title: 'Development', desc: 'Building your solution with care', color: 'icon-emerald', num: '04', numColor: 'text-emerald-400' },
  { icon: TestTube, title: 'Testing', desc: 'Rigorous testing for perfection', color: 'icon-silver', num: '05', numColor: 'text-silver-400' },
  { icon: Rocket, title: 'Launch', desc: 'Deploying and celebrating success', color: 'icon-cyan', num: '06', numColor: 'text-cyan-400' },
];

export default function Process() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-[#0a0f1a] to-primary-950 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle, rgba(6,182,212,0.8) 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
      <div className="orb orb-cyan w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="badge badge-cyan mb-4">Our Process</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            How We{' '}
            <span className="gradient-text-cyan">Work</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-silver-400">
            A streamlined process designed to deliver exceptional results on time.
          </p>
        </motion.div>

        {/* Connecting line */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px z-0"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.3) 20%, rgba(245,158,11,0.3) 50%, rgba(16,185,129,0.3) 80%, transparent)' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div
                className="rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                {/* Step number */}
                <div className={`text-4xl font-black mb-3 opacity-20 ${step.numColor}`}>{step.num}</div>

                <div className={`w-14 h-14 mx-auto rounded-xl ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-silver-400 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
