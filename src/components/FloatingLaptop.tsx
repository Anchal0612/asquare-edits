import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';

export default function FloatingLaptop({ mouse }: { mouse: { x: number; y: number } }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch('/lottie/macbook.json')
      .then((r) => {
        if (!r.ok) throw new Error('no lottie');
        return r.json();
      })
      .then((json) => setAnimationData(json))
      .catch(() => setAnimationData(null));
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const tx = mouse.x * 18;
    const ty = mouse.y * 10;
    el.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotateX(${mouse.y * 3}deg) rotateY(${mouse.x * 6}deg)`;
  }, [mouse]);

  return (
    <motion.div initial={{ opacity: 0, y: 40, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.9 }} ref={ref} className="relative laptop float-animation">
      <div className="rounded-2xl shadow-2xl laptop-frame glass-dark overflow-hidden border border-white/10">
        <div className="laptop-screen bg-gradient-to-br from-slate-900/80 to-black p-6 flex items-center justify-center">
          {animationData ? (
            <div style={{ width: '100%', height: '100%' }}>
              <Lottie animationData={animationData} loop autoplay />
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full h-full">
                <div className="macbook-mockup w-full h-full">
                  <div className="macbook-frame rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                    <div className="macbook-screen bg-gradient-to-br from-slate-950/90 to-black p-4 relative">
                      <div className="screen-content w-full h-full rounded-3xl bg-gradient-to-tr from-cyan-600/20 via-slate-950/70 to-black/40 backdrop-blur-sm border border-white/10 overflow-hidden flex flex-col text-white">
                        <div className="flex items-center justify-between px-5 pt-4 text-[0.72rem] uppercase tracking-[0.25em] text-silver-300">
                          <span>Performance Dashboard</span>
                          <span className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-cyan-100">Live</span>
                        </div>

                        <div className="grid gap-3 px-5 py-4 flex-1">
                          <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                            <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-silver-400 mb-3">
                              <span>Google Ranking</span>
                              <span className="text-cyan-300">+185%</span>
                            </div>
                            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                              <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-cyan-300 to-cyan-500" />
                            </div>
                          </div>
                          <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                            <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-silver-400 mb-3">
                              <span>SEO Analytics</span>
                              <span className="text-cyan-300">+120%</span>
                            </div>
                            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-slate-300 to-white/40" />
                            </div>
                          </div>
                          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 grid grid-cols-2 gap-3">
                            <div className="rounded-2xl bg-slate-900/70 p-3">
                              <p className="text-[0.65rem] uppercase tracking-[0.24em] text-silver-400">Social Growth</p>
                              <p className="mt-2 text-lg font-semibold text-white">10K+</p>
                            </div>
                            <div className="rounded-2xl bg-slate-900/70 p-3">
                              <p className="text-[0.65rem] uppercase tracking-[0.24em] text-silver-400">Web Speed</p>
                              <p className="mt-2 text-lg font-semibold text-white">A+</p>
                            </div>
                          </div>
                        </div>

                        <div className="px-5 pb-4">
                          <div className="rounded-3xl bg-white/5 border border-white/10 p-4 grid grid-cols-2 gap-3 text-xs text-silver-300">
                            <div className="space-y-2">
                              <div className="font-semibold text-white">Site Health</div>
                              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                                <div className="h-full w-3/4 rounded-full bg-cyan-300" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="font-semibold text-white">Local Reach</div>
                              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                                <div className="h-full w-5/6 rounded-full bg-cyan-400" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="macbook-hinge h-6 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="laptop-base h-6 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
    </motion.div>
  );
}
