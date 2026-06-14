import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      let start = 0;
      const step = Math.ceil(target / 40);
      const id = setInterval(() => { start += step; if (start >= target) { start = target; clearInterval(id); } setVal(start); }, 35);
      ob.disconnect();
    }, { threshold: 0.5 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [target]);
  return <span ref={ref}>{val}{suffix}</span>;
}

export default function Hero() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1000], [0, reduced ? 0 : 160]);
  const headY = useTransform(scrollY, [0, 600], [0, reduced ? 0 : -50]);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const bgX = useSpring(useTransform(mx, [-0.5, 0.5], [20, -20]), { stiffness: 100, damping: 22 });
  const glowX = useSpring(useTransform(mx, [-0.5, 0.5], [-60, 60]), { stiffness: 80, damping: 26 });
  const glowY = useSpring(useTransform(my, [-0.5, 0.5], [-30, 30]), { stiffness: 80, damping: 26 });

  const move = (e: MouseEvent<HTMLElement>) => {
    if (reduced) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const leave = () => { mx.set(0); my.set(0); };

  return (
    <section id="beranda" className="relative min-h-[100svh] overflow-hidden" onMouseMove={move} onMouseLeave={leave}>
      <motion.div style={{ y: bgY, x: bgX }} className="absolute -inset-8">
        <img src="images/kamui-hero.jpg" alt="" className="h-full w-full object-cover" fetchPriority="high" />
      </motion.div>

      <motion.div aria-hidden className="pointer-events-none absolute left-1/2 top-1/3 h-[50vmin] w-[50vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sakura-400/25 blur-[130px] animate-breathing" style={reduced ? {} : { x: glowX, y: glowY }} />
      <div aria-hidden className="pointer-events-none absolute -right-24 bottom-1/4 h-[40vmin] w-[40vmin] rounded-full bg-kamui-500/20 blur-[120px] animate-breathing" style={{ animationDelay: '2s' }} />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-kamui-950/55 to-[#0d0515]" />
      <div className="absolute inset-0 bg-gradient-to-r from-kamui-950/60 via-transparent to-kamui-950/60" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(192,68,211,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(192,68,211,0.3) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />

      <div className="relative z-10 flex min-h-[100svh] items-center">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <motion.div style={{ y: headY }} className="max-w-3xl pt-20 pb-32 sm:pt-24 sm:pb-36">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-sakura-400 animate-glow-pulse" />
              <span className="text-xs font-medium tracking-widest uppercase text-kamui-200">CIPHERSLAB • Kamui Design</span>
            </motion.div>

            <div className="overflow-hidden py-1">
              <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }} className="font-display text-[clamp(2.6rem,8vw,7rem)] font-bold leading-[0.92] tracking-tight text-white">
                KAMUI
                <span className="block text-gradient">Website</span>
                <span className="block text-gradient">Experience</span>
              </motion.h1>
            </div>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }} className="mt-6 max-w-xl text-[clamp(0.95rem,2.2vw,1.15rem)] leading-relaxed text-gray-200/80">
              Desain <span className="text-shimmer font-semibold">UI/UX sinematik</span> untuk brand yang ingin tampil premium, modern, dan siap dipamerkan ke klien maupun investor.
            </motion.p>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }} className="mt-8 flex flex-wrap gap-4">
              <a href="#case-study" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-kamui-500 to-sakura-400 px-6 py-3 sm:px-7 sm:py-3.5 font-semibold text-white shadow-xl shadow-kamui-700/30 transition-all duration-500 hover:shadow-kamui-500/60 hover:scale-105 text-sm sm:text-base">
                Lihat Showreel <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="#kontak" className="group rounded-full border border-white/20 bg-white/5 backdrop-blur px-6 py-3 sm:px-7 sm:py-3.5 font-semibold text-white transition-all duration-500 hover:bg-white/10 hover:border-white/40 text-sm sm:text-base">
                Booking Konsultasi
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }} className="absolute bottom-0 inset-x-0 z-20 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 sm:py-5">
          {[
            { target: 150, suffix: '+', label: 'Proyek' },
            { target: 98, suffix: '%', label: 'Kepuasan' },
            { target: 5, suffix: '+', label: 'Tahun' },
            { target: 24, suffix: '/7', label: 'Support' },
          ].map((s) => (
            <div key={s.label} className="text-center min-w-0">
              <div className="font-display text-lg sm:text-2xl font-bold text-white"><Counter target={s.target} suffix={s.suffix} /></div>
              <div className="text-[10px] sm:text-xs text-kamui-400 tracking-wider uppercase truncate">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
