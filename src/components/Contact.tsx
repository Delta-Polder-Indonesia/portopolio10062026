import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

const info = [
  { icon: Mail, label: 'Email', value: 'hello@cipherslab.com' },
  { icon: Phone, label: 'Telepon', value: '+62 812 3456 7890' },
  { icon: MapPin, label: 'Lokasi', value: 'Jakarta, Indonesia' },
];

export default function Contact() {
  const { ref, inView } = useInView(0.08);
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' });
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 4000); setForm({ name: '', email: '', project: '', message: '' }); };

  const inputCls = 'w-full rounded-xl bg-white/[0.03] border border-kamui-700/30 px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-kamui-500/50 focus:ring-1 focus:ring-kamui-500/30 transition-all';

  return (
    <section id="kontak" className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-kamui-500/[0.03] blur-[180px]" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-sakura-400">Kontak</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Mari <span className="text-gradient">Berkolaborasi</span></h2>
          <p className="mt-2 text-sm text-kamui-500 tracking-widest">一緒に作りましょう</p>
          <p className="mt-4 text-sm sm:text-base text-gray-400">Punya ide proyek? Hubungi kami untuk konsultasi gratis.</p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
          <motion.div initial={{ opacity: 0, x: -36 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }} className="space-y-5 lg:col-span-2">
            <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6">
              <h3 className="font-display text-base font-semibold text-white">Informasi Kontak</h3>
              <div className="mt-5 space-y-4">
                {info.map((it) => (
                  <div key={it.label} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-kamui-600/15"><it.icon className="h-4 w-4 text-kamui-400" /></div>
                    <div><div className="text-[10px] uppercase tracking-wider text-gray-500">{it.label}</div><div className="text-sm font-medium text-gray-200">{it.value}</div></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-kamui-600 to-kamui-800" />
              <img src="images/kamui-mountain.jpg" alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-overlay" />
              <div className="relative">
                <h3 className="font-display text-base font-semibold text-white">Siap Memulai?</h3>
                <p className="mt-1 text-xs text-kamui-200/70">Konsultasi gratis 30 menit.</p>
                <a href="#kontak" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-kamui-800 transition hover:bg-gray-100">
                  Jadwalkan <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 36 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.25 }} className="lg:col-span-3">
            <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <h3 className="font-display text-lg font-semibold text-white">Kirim Pesan</h3>
              <p className="mb-6 text-[10px] text-kamui-500">メッセージを送信</p>

              {sent && <div className="mb-5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-3 text-sm text-emerald-400">✓ Pesan berhasil dikirim!</div>}

              <form onSubmit={submit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div><label className="mb-1.5 block text-xs font-medium text-gray-400">Nama</label><input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Nama lengkap" className={inputCls} /></div>
                  <div><label className="mb-1.5 block text-xs font-medium text-gray-400">Email</label><input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="email@contoh.com" className={inputCls} /></div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-gray-400">Jenis Proyek</label>
                  <select value={form.project} onChange={(e) => setForm({ ...form, project: e.target.value })} className={`${inputCls} appearance-none`}>
                    <option value="" className="bg-[#1a0b22]">Pilih proyek...</option>
                    <option value="web" className="bg-[#1a0b22]">Website</option>
                    <option value="app" className="bg-[#1a0b22]">Mobile App</option>
                    <option value="ec" className="bg-[#1a0b22]">E-Commerce</option>
                    <option value="ui" className="bg-[#1a0b22]">UI/UX</option>
                    <option value="sw" className="bg-[#1a0b22]">Custom Software</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-gray-400">Detail</label>
                  <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Ceritakan proyek Anda..." className={`${inputCls} resize-none`} />
                </div>
                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-kamui-500 to-sakura-400 px-7 py-3.5 text-sm font-semibold text-white transition hover:brightness-110 sm:w-auto">
                  <Send className="h-4 w-4" /> Kirim Pesan
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
