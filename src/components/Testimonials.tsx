import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  { name: 'Andi Pratama', role: 'CEO, TechVentura', text: 'CIPHERSLAB benar-benar mengubah kehadiran digital kami. Desain Kamui mereka meningkatkan konversi kami hingga 3x lipat!', avatar: 'AP' },
  { name: 'Sarah Wijaya', role: 'Founder, BeautyNest', text: 'Tim yang sangat profesional dan kreatif. Mereka memahami visi kami dengan cepat dan menghasilkan website yang melebihi ekspektasi.', avatar: 'SW' },
  { name: 'Rizky Firmansyah', role: 'CTO, DataPulse', text: 'Kualitas kode dan arsitektur yang solid. Dashboard analitik kami kini menjadi keunggulan kompetitif utama berkat CIPHERSLAB.', avatar: 'RF' },
];

export default function Testimonials() {
  const { ref, inView } = useInView(0.1);

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center,rgba(130,108,142,0.06),transparent 70%)' }} />

      <div ref={ref} className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-kamui-400">Testimoni</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Suara <span className="text-gradient">Klien</span> Kami</h2>
          <p className="mt-2 text-sm text-kamui-500 tracking-widest">お客様の声</p>
        </motion.div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.12 }} className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 hover-lift group relative">
              <Quote className="absolute right-4 top-4 h-8 w-8 text-kamui-500/10 group-hover:text-kamui-500/20 transition-colors" />
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-[13px] italic leading-relaxed text-gray-300">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-kamui-800/30 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-kamui-500 to-sakura-400 text-xs font-bold text-white shadow-lg shadow-kamui-500/20">{t.avatar}</div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-[11px] text-kamui-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
