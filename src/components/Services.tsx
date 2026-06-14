import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Palette, Monitor, Smartphone, ShoppingCart, Search, Code2 } from 'lucide-react';

const services = [
  { icon: Palette, title: 'UI/UX Design', jp: 'デザイン', desc: 'Antarmuka intuitif dengan riset pengguna mendalam, wireframing, dan prototyping.', gradient: 'from-violet-500 to-fuchsia-500' },
  { icon: Monitor, title: 'Web Development', jp: 'ウェブ開発', desc: 'Website responsif dengan performa tinggi dan optimasi SEO.', gradient: 'from-kamui-400 to-blue-500' },
  { icon: Smartphone, title: 'Mobile App', jp: 'モバイルアプリ', desc: 'Aplikasi mobile elegan untuk iOS & Android.', gradient: 'from-cyan-400 to-teal-500' },
  { icon: ShoppingCart, title: 'E-Commerce', jp: '電子商取引', desc: 'Toko online dengan sistem pembayaran aman dan UX premium.', gradient: 'from-emerald-400 to-green-500' },
  { icon: Search, title: 'Digital Marketing', jp: 'マーケティング', desc: 'Strategi SEO & pemasaran digital untuk meningkatkan visibility.', gradient: 'from-amber-400 to-orange-500' },
  { icon: Code2, title: 'Custom Software', jp: 'カスタムソフト', desc: 'Software khusus dengan arsitektur scalable.', gradient: 'from-sakura-400 to-rose-500' },
];

export default function Services() {
  const { ref, inView } = useInView(0.08);

  return (
    <section id="layanan" className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,#0d0515,#130a1f 50%,#0d0515)' }} />
      <div className="absolute left-10 top-20 hidden select-none text-[160px] font-bold leading-none text-white/[0.012] lg:block">サービス</div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-kamui-400">Layanan</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">Solusi Digital <span className="text-gradient">Komprehensif</span></h2>
          <p className="mt-2 text-sm text-kamui-500 tracking-widest">包括的なデジタルソリューション</p>
          <p className="mt-4 text-sm sm:text-base text-gray-400">Dari konsep hingga implementasi — layanan end-to-end untuk transformasi digital bisnis Anda.</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.12, delayChildren: 0.2 }
            }
          }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.96 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl glass-card p-6 sm:p-7 hover-lift cursor-default shine-effect"
            >
              <div className={`absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br ${s.gradient} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-[0.12]`} />
              <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${s.gradient} shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-base font-display font-semibold text-white">{s.title}</h3>
              <span className="text-[9px] text-kamui-500">{s.jp}</span>
              <p className="mt-2 text-[13px] leading-relaxed text-gray-400">{s.desc}</p>
              <div className={`absolute bottom-0 inset-x-0 h-px bg-gradient-to-r ${s.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-40`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
