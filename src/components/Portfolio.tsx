import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { ArrowUpRight } from 'lucide-react';
import TiltMedia from './TiltMedia';

const projects = [
  { title: 'FinFlow Dashboard', jp: 'フィンフロー', category: 'UI/UX Design • SaaS', desc: 'Platform keuangan real-time dengan antarmuka intuitif untuk fintech terkemuka.', image: '/images/project1.jpg', tags: ['React', 'Figma', 'D3.js'] },
  { title: 'LuxeCart Commerce', jp: 'ラグジュカート', category: 'Web Dev • E-Commerce', desc: 'Toko online premium dengan rekomendasi AI dan checkout optimal.', image: '/images/project2.jpg', tags: ['Next.js', 'Stripe', 'Tailwind'] },
  { title: 'CloudMetrics Analytics', jp: 'クラウドメトリクス', category: 'Custom Software', desc: 'Platform analitik enterprise dengan monitoring real-time.', image: '/images/project3.jpg', tags: ['TypeScript', 'PostgreSQL', 'AWS'] },
];

export default function Portfolio() {
  const { ref, inView } = useInView(0.05);

  return (
    <section id="portfolio" className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-sakura-400/[0.03] blur-[180px]" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-sakura-400">Portfolio</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Karya <span className="text-gradient">Terbaik</span> Kami</h2>
          <p className="mt-2 text-sm text-kamui-500 tracking-widest">私たちの最高傑作</p>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 60 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: i * 0.15 }} className="group">
              <div className="glass-card overflow-hidden rounded-2xl sm:rounded-3xl hover-lift">
                <div className="grid md:grid-cols-2">
                  <div className={`relative overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                    <TiltMedia src={p.image} alt={p.title} className="aspect-[16/10] w-full md:aspect-auto md:h-full md:min-h-[320px]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-kamui-950/70 via-transparent to-transparent" />
                    <div className="absolute left-3 top-3 z-10 rounded-full glass px-3 py-1 opacity-0 transition-all duration-400 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                      <span className="text-[10px] text-kamui-200 font-medium">{p.jp}</span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10 relative">
                    <div className="absolute right-6 top-5 text-6xl font-display font-bold text-white/[0.025] select-none">0{i + 1}</div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-kamui-400">{p.category}</span>
                    <h3 className="mt-2 text-xl sm:text-2xl font-display font-bold text-white group-hover:text-gradient transition-all duration-500">{p.title}</h3>
                    <p className="mt-3 text-[13px] leading-relaxed text-gray-400">{p.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => <span key={t} className="rounded-full border border-kamui-700/30 bg-kamui-800/30 px-2.5 py-0.5 text-[10px] font-medium text-kamui-300">{t}</span>)}
                    </div>
                    <a href="#kontak" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-kamui-400 transition hover:text-sakura-400 group/l">
                      Lihat Detail <ArrowUpRight className="h-3.5 w-3.5 transition group-hover/l:translate-x-0.5 group-hover/l:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
