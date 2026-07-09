import { useEffect, useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import FloatingLaptop from './FloatingLaptop';
import FloatingCard from './FloatingCard';
import MouseGlow from './MouseGlow';
import ScrollIndicator from './ScrollIndicator';
import { ArrowRight, MessageCircle } from 'lucide-react';

const lines = ['Grow Your Business', 'Online With Asquare'];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.18 },
  },
};

const lineVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 44,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
    },
  },
};
const trustCategories = ['Restaurants', 'Clinics', 'Salons', 'Real Estate', 'Small Businesses'];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMouse({ x, y });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen w-full overflow-hidden hero-bg pt-20">
      <MouseGlow mouse={mouse} />

      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-beams" />
        <div className="hero-noise" />
        <div className="hero-particles" />
        <div className="absolute left-0 top-16 z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-0 top-32 z-10 h-64 w-64 rounded-full bg-slate-200/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 h-full flex items-center pt-32 lg:pt-40">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="col-span-7 z-20 mt-10 lg:mt-0">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="badge badge-cyan">Local Business Partner</span>
                <span className="text-xs uppercase tracking-[0.35em] text-silver-500">Premium digital growth</span>
              </div>

              <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 leading-tight">
                {lines.map((line) => (
                  <motion.h1 key={line} variants={lineVariant} className="text-[clamp(58px,9vw,120px)] md:text-[clamp(78px,8vw,140px)] font-extrabold tracking-tight text-white leading-[0.92] max-w-3xl">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-slate-200 to-white">{line}</span>
                  </motion.h1>
                ))}
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.9 }} className="mt-6 max-w-2xl">
                <p className="text-xs uppercase tracking-[0.45em] text-silver-400 mb-2">ASQUARE EDITS</p>
                <h2 className="text-xl md:text-2xl font-semibold uppercase tracking-[0.35em] text-silver-200 drop-shadow-[0_14px_45px_rgba(0,212,255,0.08)]">
                  Digital Growth Partner For Local Businesses
                </h2>
              </motion.div>

              <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.9 }} className="mt-8 max-w-2xl text-base md:text-lg text-silver-300 leading-8">
                We help local businesses get more customers through SEO, websites, social media marketing and affordable digital solutions.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, duration: 0.9 }} className="mt-10 grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-3 w-full text-center">
                  <span>Get Free Business Audit</span>
                  <span className="btn-arrow"><ArrowRight size={16} /></span>
                </a>
                <a href="https://wa.me/919477760238?text=Hi%2C%20I%20need%20a%20free%20business%20audit" target="_blank" rel="noreferrer" className="btn-outline-silver inline-flex items-center justify-center gap-3 w-full text-center">
                  <MessageCircle className="w-4 h-4 text-cyan-300" />
                  <span>Chat On WhatsApp</span>
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.9 }} className="mt-12 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-5 shadow-[0_24px_90px_rgba(0,0,0,0.14)]">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Helping Local Businesses Grow Online</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {trustCategories.map((category) => (
                      <span key={category} className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.26em] text-silver-300 shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="col-span-5 relative z-20 flex justify-center lg:justify-end">
            <div className="w-full max-w-xl relative">
              <FloatingLaptop mouse={mouse} />

              <div className="absolute -left-6 -top-4 hidden xl:block">
                <FloatingCard title="Google Ranking" subtitle="+185% Visibility" delay={0.2} mouse={mouse} />
              </div>
              <div className="absolute -right-6 top-14 hidden xl:block">
                <FloatingCard title="Instagram Growth" subtitle="10K+ Reach" delay={0.45} mouse={mouse} />
              </div>
              <div className="absolute left-6 bottom-14 hidden lg:block">
                <FloatingCard title="Website Live" subtitle="Conversion Ready" delay={0.7} mouse={mouse} />
              </div>
              <div className="absolute right-4 bottom-4 hidden lg:block">
                <FloatingCard title="Local SEO" subtitle="More Customers" delay={0.95} mouse={mouse} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30">
        <ScrollIndicator />
      </div>
    </section>
  );
}
