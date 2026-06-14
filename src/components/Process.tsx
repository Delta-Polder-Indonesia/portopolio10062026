import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { MessageSquare, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
  { icon: MessageSquare, num: '壱', title: 'Diskusi & Riset', jp: '相談・調査', desc: 'Memahami visi, target audiens, dan tujuan bisnis.' },
  { icon: PenTool, num: '弐', title: 'Desain & Prototype', jp: 'デザイン・試作', desc: 'Wireframe, mockup, dan prototipe interaktif.' },
  { icon: Code, num: '参', title: 'Pengembangan', jp: '開発', desc: 'Kode berkualitas tinggi dengan teknologi terkini.' },
  { icon: Rocket, num: '四', title: 'Peluncuran', jp: 'ローンチ', desc: 'Pengujian, peluncuran, dan dukungan berkelanjutan.' },
];

export default function Process() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="proses" className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,#0d0515,#100820,#0d0515)' }} />

      <div ref={ref} className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mx-auto mb-14 max-w-2xl text-center sm:mb-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-kamui-400">Proses</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Perjalanan <span className="text-gradient">Kolaboratif</span></h2>
          <p className="mt-2 text-sm text-kamui-500 tracking-widest">協力の旅</p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[60px] left-[12%] right-[12%] h-px line-mask">
            <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ duration: 1.2, delay: 0.4 }} className="h-full origin-left bg-gradient-to-r from-kamui-500/40 via-sakura-400/40 to-kamui-500/40" />
          </div>

          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 48 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.25 + i * 0.15 }} className="group text-center">
                <div className="relative mx-auto mb-5 h-[100px] w-[100px] sm:h-[120px] sm:w-[120px]">
                  <div className="absolute inset-0 rounded-full border border-dashed border-kamui-600/25 animate-rotate-slow" />
                  <div className="absolute inset-3 sm:inset-4 rounded-full glass-card flex flex-col items-center justify-center group-hover:shadow-lg group-hover:shadow-kamui-500/20 transition-all">
                    <span className="text-lg sm:text-xl text-kamui-300 leading-none mb-0.5">{s.num}</span>
                    <s.icon className="h-5 w-5 sm:h-6 sm:w-6 text-kamui-400 group-hover:text-sakura-400 transition-colors" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-kamui-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-sm sm:text-base font-display font-semibold text-white">{s.title}</h3>
                <span className="text-[9px] text-kamui-500">{s.jp}</span>
                <p className="mt-1.5 text-[11px] sm:text-xs text-gray-400 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
