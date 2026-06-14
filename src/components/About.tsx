import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Target, Lightbulb, Rocket, Gem } from 'lucide-react';
import TiltMedia from './TiltMedia';

const features = [
  { icon: Target, title: 'Riset Mendalam', jp: '深い研究', desc: 'Pemahaman mendalam tentang pengguna dan pasar sebelum desain dimulai.' },
  { icon: Lightbulb, title: 'Desain Kreatif', jp: '創造的', desc: 'Pendekatan unik terinspirasi seni dan teknologi modern.' },
  { icon: Rocket, title: 'Teknologi Canggih', jp: '最先端技術', desc: 'Stack terdepan untuk performa dan experience terbaik.' },
  { icon: Gem, title: 'Kualitas Premium', jp: 'プレミアム', desc: 'Standar kualitas tinggi di setiap piksel.' },
];

export default function About() {
  const { ref, inView } = useInView(0.12);

  return (
    <section id="tentang" className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-kamui-500/5 blur-[180px]" />
      <div className="absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-sakura-400/5 blur-[160px]" />

      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.85 }} className="relative">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
              <TiltMedia src="/images/kamui-bridge.jpg" alt="Kamui Design" className="aspect-[4/3] w-full sm:aspect-auto sm:h-[420px] lg:h-[480px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-kamui-950/90 via-kamui-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-4xl sm:text-6xl font-display font-bold text-white/10 select-none">神威</div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.5, duration: 0.5 }} className="absolute -bottom-4 right-2 sm:right-6 glass-card rounded-2xl p-4 sm:p-5 max-w-[180px] animate-float-reverse z-10">
              <div className="text-3xl sm:text-4xl font-display font-bold text-gradient">5+</div>
              <div className="text-[11px] text-gray-400 leading-snug mt-1">Tahun solusi digital terdepan</div>
            </motion.div>
            <div className="absolute -left-3 -top-3 h-20 w-20 sm:h-24 sm:w-24 rounded-full border border-kamui-500/20 animate-rotate-slow" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.85, delay: 0.15 }}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-kamui-400">Tentang Kami</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight text-white">
              Spirit <span className="text-gradient">Kamui</span><br />dalam Desain
            </h2>
            <p className="mt-2 text-sm text-kamui-500 tracking-widest">カムイ精神のデザイン</p>
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-gray-400">
              CIPHERSLAB menghadirkan filosofi <span className="text-kamui-300 font-medium">Kamui</span> — kekuatan ilahi dalam keindahan — ke setiap proyek digital. Menggabungkan estetika memukau dengan fungsionalitas tinggi.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
              {features.map((f, i) => (
                <motion.div key={f.title} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.35 + i * 0.1, duration: 0.45 }} className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-5 group hover-lift cursor-default">
                  <f.icon className="mb-2.5 h-5 w-5 text-kamui-400 group-hover:text-sakura-400 transition-colors" />
                  <h3 className="text-[13px] font-semibold text-white">{f.title}</h3>
                  <span className="text-[9px] text-kamui-500">{f.jp}</span>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-gray-500">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
