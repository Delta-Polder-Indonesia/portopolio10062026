import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useInView } from './useInView';
import TiltMedia from './TiltMedia';

const outcomes = [
  { value: '+212%', label: 'Lead Conversion' },
  { value: '-38%', label: 'Bounce Rate' },
  { value: '1.9s', label: 'First Load Time' },
  { value: '+4.1x', label: 'Engagement Time' },
];

const phases = [
  'Audit funnel dan perilaku pengguna dalam 7 hari',
  'Redesign total landing flow berbasis intent pengguna',
  'Prototype interaktif untuk validasi stakeholder',
  'Build production-grade dengan optimasi performa',
];

export default function CaseStudy() {
  const { ref, inView } = useInView(0.15);

  return (
    <section id="case-study" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#100820] via-[#120722] to-[#0d0515]" />
      <div className="absolute right-0 top-20 h-[520px] w-[520px] rounded-full bg-sakura-400/10 blur-[160px]" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-sakura-400">Case Study Unggulan</p>
          <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Senjata Presentasi:
            <span className="text-gradient"> dari estetika jadi performa bisnis</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <motion.article
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="glass-card rounded-3xl p-7 lg:col-span-5"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-kamui-400">Project</p>
            <h3 className="mt-2 font-display text-2xl font-bold text-white">Kamui Commerce Replatform</h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              Rebuild total pengalaman e-commerce untuk brand lifestyle premium. Fokus pada konversi, performa, dan storytelling visual yang bisa langsung dipakai untuk pitching investor.
            </p>

            <div className="mt-7 space-y-3">
              {phases.map((phase, index) => (
                <div key={phase} className="flex items-start gap-3">
                  <span className="mt-0.5 text-xs font-semibold text-kamui-300">0{index + 1}</span>
                  <p className="text-sm text-gray-400">{phase}</p>
                </div>
              ))}
            </div>

            <a
              href="#kontak"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sakura-300 transition hover:text-white"
            >
              Minta format presentasi ini
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.article>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="overflow-hidden rounded-3xl border border-kamui-700/40">
              <TiltMedia
                src="/images/kamui-hero.jpg"
                alt="Showcase Kamui CIPHERSLAB"
                className="h-[280px] w-full sm:h-[360px]"
              />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {outcomes.map((item) => (
                <div key={item.label} className="border-t border-kamui-700/50 pt-4">
                  <p className="font-display text-2xl font-bold text-white">{item.value}</p>
                  <p className="text-xs uppercase tracking-wider text-kamui-400">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
