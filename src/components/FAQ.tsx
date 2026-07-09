import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  { q: 'Why choose Asquare over other agencies?', a: 'We offer premium quality services at the most affordable prices in the market. Our dedicated team ensures fast delivery without compromising on quality. Plus, we provide transparent communication and 24/7 support throughout your project.' },
  { q: 'How long does a typical project take?', a: 'Project timelines vary based on complexity. A simple website takes 1-2 weeks, while more complex web applications may take 4-8 weeks. We always provide a detailed timeline upfront and keep you updated throughout the process.' },
  { q: 'Do you provide SEO services?', a: 'Yes! We offer comprehensive SEO services including on-page optimization, off-page SEO, local SEO, technical SEO audits, and content optimization. All our websites come with basic SEO setup included.' },
  { q: 'Do you offer maintenance and support?', a: 'Absolutely! All our packages include free support for the initial period. After that, we offer affordable monthly maintenance plans that include updates, security patches, backups, and priority support.' },
  { q: 'Can I customize my package?', a: 'Yes! While we offer standard packages, we understand every business is unique. Contact us to discuss your specific needs, and we will create a custom package tailored to your requirements and budget.' },
  { q: 'Is support included after launch?', a: 'Yes, all our packages include post-launch support. Starter includes 1 month, Professional includes 3 months, and Enterprise includes 12 months of priority support. Extended support available at affordable rates.' },
];

const colors = [
  { dot: 'bg-cyan-400', border: 'border-cyan-500/40', hoverBg: 'hover:bg-cyan-50 dark:hover:bg-cyan-900/10' },
  { dot: 'bg-amber-400', border: 'border-amber-500/40', hoverBg: 'hover:bg-amber-50 dark:hover:bg-amber-900/10' },
  { dot: 'bg-emerald-400', border: 'border-emerald-500/40', hoverBg: 'hover:bg-emerald-50 dark:hover:bg-emerald-900/10' },
  { dot: 'bg-rose-400', border: 'border-rose-500/40', hoverBg: 'hover:bg-rose-50 dark:hover:bg-rose-900/10' },
  { dot: 'bg-cyan-400', border: 'border-cyan-500/40', hoverBg: 'hover:bg-cyan-50 dark:hover:bg-cyan-900/10' },
  { dot: 'bg-amber-400', border: 'border-amber-500/40', hoverBg: 'hover:bg-amber-50 dark:hover:bg-amber-900/10' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-silver-50/50 to-white dark:from-primary-950 dark:via-primary-900 dark:to-primary-950 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="badge badge-cyan mb-4">FAQ</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-900 dark:text-white mb-6">
            Frequently Asked{' '}
            <span className="gradient-text-cyan">Questions</span>
          </h2>
          <p className="text-lg text-silver-600 dark:text-silver-400">Got questions? We have got you covered.</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const c = colors[index % colors.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`overflow-hidden rounded-2xl bg-white dark:bg-primary-900/80 border ${c.border} shadow-sm transition-all duration-300`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`w-full flex items-center justify-between p-5 text-left gap-4 transition-colors ${c.hoverBg}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${c.dot}`} />
                    <span className="font-semibold text-primary-900 dark:text-white text-sm sm:text-base">{faq.q}</span>
                  </div>
                  <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0">
                    <ChevronDown className="w-5 h-5 text-silver-500" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1">
                        <div className={`pl-5 border-l-2 ${c.border}`}>
                          <p className="text-silver-600 dark:text-silver-400 text-sm leading-relaxed">{faq.a}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-10">
          <p className="text-silver-500 dark:text-silver-400 text-sm mb-4">Still have questions?</p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            <HelpCircle className="w-4 h-4" /> Ask Us Anything
          </a>
        </motion.div>
      </div>
    </section>
  );
}
