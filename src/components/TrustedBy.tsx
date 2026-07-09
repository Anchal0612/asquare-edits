import { motion } from 'framer-motion';

const companies = [
  { name: 'TechNova', color: 'from-cyan-400 to-cyan-600' },
  { name: 'StartupHub', color: 'from-amber-400 to-amber-600' },
  { name: 'Growthly', color: 'from-emerald-400 to-emerald-600' },
  { name: 'CloudBase', color: 'from-rose-400 to-rose-600' },
  { name: 'DevCore', color: 'from-silver-300 to-silver-500' },
  { name: 'DataSync', color: 'from-cyan-300 to-cyan-500' },
  { name: 'BrandUp', color: 'from-amber-300 to-amber-500' },
];

export default function TrustedBy() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Top / bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/60 via-transparent to-transparent dark:from-primary-950/80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold uppercase tracking-widest text-silver-500 mb-10"
        >
          Trusted by innovative companies worldwide
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group cursor-default"
            >
              <span
                className={`text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${company.color} opacity-40 group-hover:opacity-90 transition-all duration-300`}
              >
                {company.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
