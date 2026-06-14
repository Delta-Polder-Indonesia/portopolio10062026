import { Heart, ArrowUp } from 'lucide-react';

const cols = {
  Layanan: [
    { label: 'UI/UX Design', href: '#layanan' },
    { label: 'Web Development', href: '#layanan' },
    { label: 'Mobile App', href: '#layanan' },
    { label: 'E-Commerce', href: '#layanan' },
  ],
  Perusahaan: [
    { label: 'Tentang Kami', href: '#tentang' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Proses Kerja', href: '#proses' },
    { label: 'Paket & Harga', href: '#paket' },
  ],
  Lainnya: [
    { label: 'Case Study', href: '#case-study' },
    { label: 'Demo Lab', href: '#demo-lab' },
    { label: 'Kontak', href: '#kontak' },
    { label: 'FAQ', href: '#kontak' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative">
      <div className="h-px bg-gradient-to-r from-transparent via-kamui-700/30 to-transparent" />
      <div style={{ background: 'linear-gradient(180deg,#0d0515,#0a0310)' }}>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5 lg:py-16">
            <div className="lg:col-span-2">
              <a href="#beranda" className="inline-flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-kamui-400 to-sakura-400 text-base font-bold text-white">鉋</div>
                <div className="leading-tight">
                  <span className="font-display text-[15px] font-bold tracking-wide text-white">CIPHERS<span className="text-gradient">LAB</span></span>
                  <span className="block text-[8px] tracking-[0.2em] text-kamui-600 uppercase">Kamui Design System</span>
                </div>
              </a>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">Studio desain digital yang menghadirkan filosofi Kamui — kekuatan dan keindahan — dalam setiap proyek.</p>
              <p className="mt-3 text-xs text-kamui-700">神威デザインシステム</p>
            </div>

            {Object.entries(cols).map(([title, items]) => (
              <div key={title}>
                <h4 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-kamui-400">{title}</h4>
                <ul className="space-y-2.5">
                  {items.map((it) => <li key={it.label}><a href={it.href} className="text-sm text-gray-500 transition hover:text-kamui-300">{it.label}</a></li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-kamui-800/20 py-5 sm:flex-row">
            <p className="flex items-center gap-1 text-xs text-kamui-700">
              © 2025 CIPHERSLAB. Dibuat dengan <Heart className="h-3 w-3 fill-sakura-400 text-sakura-400" /> di Indonesia 🇮🇩
            </p>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group flex h-9 w-9 items-center justify-center rounded-full glass transition hover:bg-kamui-800/30">
              <ArrowUp className="h-4 w-4 text-kamui-500 transition group-hover:text-kamui-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
