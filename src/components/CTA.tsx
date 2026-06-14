import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  const { ref, inView } = useInView(0.15);

  return (
    <section ref={ref} className="relative overflow-hidden py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 40, scale: 0.97 }} animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ duration: 0.8 }} className="relative overflow-hidden rounded-2xl sm:rounded-[2rem]">
          <div className="absolute inset-0">
            <img src="images/kamui-mountain.jpg" alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-kamui-950/95 via-kamui-900/85 to-kamui-950/95" />
          </div>
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-sakura-400/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-kamui-500/10 blur-[100px]" />
          <div className="absolute inset-0 rounded-2xl sm:rounded-[2rem] border border-kamui-500/10" />

          <div className="relative px-6 py-14 text-center sm:px-16 sm:py-20">
            <h2 className="mx-auto max-w-2xl font-display text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
              Siap Membawa Bisnis ke <span className="text-gradient">Level Berikutnya</span>?
            </h2>
            <p className="mt-2 text-sm text-kamui-400 tracking-widest">次のレベルへ</p>
            <p className="mx-auto mt-4 max-w-md text-sm sm:text-base text-gray-300/70">
              150+ klien telah mempercayakan transformasi digital mereka kepada CIPHERSLAB.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#kontak" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-kamui-500 to-sakura-400 px-7 py-3.5 font-semibold text-white shadow-xl shadow-kamui-500/25 transition hover:shadow-kamui-500/50 hover:scale-105">
                Mulai Proyek <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="#portfolio" className="rounded-full glass px-7 py-3.5 font-semibold text-gray-300 transition hover:text-white hover:bg-white/[0.06]">Lihat Karya</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
