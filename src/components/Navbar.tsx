import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Paket', href: '#paket' },
  { label: 'Kontak', href: '#kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'glass-strong shadow-2xl shadow-black/30' : ''}`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#beranda" className="flex items-center gap-2.5 group">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-kamui-400 to-sakura-400 text-white font-bold text-base group-hover:animate-pulse-glow">鉋</div>
            <div className="leading-tight">
              <span className="font-display text-[15px] font-bold tracking-wide text-white">CIPHERS<span className="text-gradient">LAB</span></span>
              <span className="block text-[8px] tracking-[0.25em] text-kamui-400 uppercase">Kamui Design</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="group relative px-4 py-2 text-[13px] font-medium text-gray-300 hover:text-white transition-colors">
                {l.label}
                <span className="absolute inset-x-2 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-kamui-400 to-sakura-400 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="#kontak" className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-kamui-500 to-sakura-400 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-kamui-600/25 transition hover:shadow-kamui-500/50 hover:brightness-110">
              Mulai Proyek
            </a>
            <button onClick={() => setOpen(!open)} aria-label="Menu" className="lg:hidden rounded-lg p-2 text-gray-300 hover:text-white hover:bg-white/5 transition">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col bg-[#0d0515]/98 backdrop-blur-2xl pt-[80px] px-6 pb-10"
          >
            <nav className="flex flex-1 flex-col justify-center gap-1">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-4 rounded-2xl px-4 py-4 text-2xl font-display font-semibold text-gray-100 transition active:bg-white/5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-kamui-400" />
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <a href="#kontak" onClick={() => setOpen(false)} className="mt-4 block rounded-full bg-gradient-to-r from-kamui-500 to-sakura-400 py-4 text-center text-lg font-semibold text-white">
              Mulai Proyek
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
