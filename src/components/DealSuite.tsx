import { motion } from 'framer-motion';
import { Check, Clock3, Rocket } from 'lucide-react';
import { useInView } from './useInView';

const tiers = [
  { name: 'Launch', price: 'Mulai 18jt', desc: 'Naik kelas cepat dengan landing premium.', items: ['UI system inti', 'Landing high-conversion', 'Basic SEO + analytics'] },
  { name: 'Growth', price: 'Mulai 35jt', desc: 'Scale-up dan demo investor.', items: ['Multi-page website', 'Case study storytelling', 'A/B CTA optimization'], featured: true },
  { name: 'Flagship', price: 'Custom', desc: 'End-to-end dengan strategi funnel lengkap.', items: ['UX research mendalam', 'Design + build + content', 'Performance + CRO sprint'] },
];

const timeline = [
  { day: 'Hari 1-2', text: 'Kickoff, goal mapping, scope final.' },
  { day: 'Hari 3-5', text: 'Moodboard, visual direction, UI route.' },
  { day: 'Hari 6-10', text: 'Design system, build, animasi.' },
  { day: 'Hari 11-14', text: 'QA, speed tuning, launch.' },
];

export default function DealSuite() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="paket" className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0619] via-[#140924] to-[#0d0515]" />
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-kamui-500/8 blur-[150px]" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65 }} className="mb-10 max-w-3xl sm:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-kamui-300">Paket & Pricing</p>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">Paket, deliverables, dan kickoff timeline siap deal</h2>
          <p className="mt-4 text-sm text-gray-300">Jelas scope-nya, jelas output-nya, jelas kapan mulai jalan.</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.article key={t.name} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-2xl sm:rounded-3xl border p-5 sm:p-6 transition hover:border-kamui-500/40 ${t.featured ? 'border-sakura-300/50 bg-gradient-to-b from-sakura-500/10 to-kamui-900/30' : 'border-kamui-700/30 bg-black/20'}`}>
              <p className="text-[10px] uppercase tracking-wider text-kamui-400">{t.name}</p>
              <h3 className="mt-1.5 font-display text-2xl sm:text-3xl font-bold text-white">{t.price}</h3>
              <p className="mt-2 text-[13px] text-gray-300">{t.desc}</p>
              <ul className="mt-5 space-y-2">
                {t.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] text-gray-300">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sakura-300" />{item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.25 }} className="mt-6 sm:mt-8 grid gap-6 rounded-2xl sm:rounded-3xl border border-kamui-700/30 bg-black/20 p-5 sm:p-7 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-3 flex items-center gap-2 text-kamui-300"><Clock3 className="h-4 w-4" /><span className="text-[10px] uppercase tracking-[0.2em]">Kickoff 14 Hari</span></div>
            <ul className="space-y-2.5">
              {timeline.map((t) => (
                <li key={t.day} className="grid gap-0.5 sm:grid-cols-[100px_1fr] sm:gap-2">
                  <span className="text-sm font-semibold text-white">{t.day}</span>
                  <span className="text-[13px] text-gray-300">{t.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-kamui-700/30 pt-5 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
            <div className="mb-3 flex items-center gap-2 text-sakura-300"><Rocket className="h-4 w-4" /><span className="text-[10px] uppercase tracking-[0.2em]">Closing</span></div>
            <p className="text-[13px] leading-relaxed text-gray-300">Mulai dari paket Growth, lalu scale ke Flagship setelah sprint pertama.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="#kontak" className="rounded-full bg-gradient-to-r from-kamui-500 to-sakura-400 px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110">Lock Slot Proyek</a>
              <a href="#case-study" className="rounded-full border border-kamui-500/50 px-5 py-2.5 text-sm font-semibold text-kamui-200 transition hover:border-sakura-300">Review Case Study</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
