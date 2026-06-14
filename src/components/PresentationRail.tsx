import { useEffect, useState } from 'react';

const items = [
  { id: 'beranda', label: 'Intro' },
  { id: 'tentang', label: 'About' },
  { id: 'layanan', label: 'Services' },
  { id: 'portfolio', label: 'Work' },
  { id: 'case-study', label: 'Case' },
  { id: 'demo-lab', label: 'Demo' },
  { id: 'paket', label: 'Deal' },
  { id: 'kontak', label: 'Close' },
];

export default function PresentationRail() {
  const [active, setActive] = useState('beranda');

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    const ob = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit?.target?.id) setActive(hit.target.id);
      },
      { threshold: [0.25, 0.5] }
    );
    els.forEach((el) => ob.observe(el));
    return () => ob.disconnect();
  }, []);

  return (
    <aside className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 2xl:block">
      <div className="glass rounded-full px-2.5 py-3">
        <ul className="space-y-2.5">
          {items.map((i) => (
            <li key={i.id}>
              <a href={`#${i.id}`} aria-label={i.label} className="group flex items-center gap-1.5">
                <span className={`block h-2 w-2 rounded-full transition-all ${active === i.id ? 'bg-sakura-400 shadow-[0_0_10px_rgba(251,113,133,0.8)]' : 'bg-kamui-600 group-hover:bg-kamui-400'}`} />
                <span className={`text-[9px] uppercase tracking-wider transition ${active === i.id ? 'text-sakura-300' : 'text-kamui-600 group-hover:text-kamui-400'}`}>{i.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
