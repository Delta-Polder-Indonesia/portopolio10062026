import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import { useReducedMotion } from 'framer-motion';

interface Petal { id: number; left: number; size: number; dur: number; delay: number; opacity: number; drift: number; }

export default function SakuraParticles({ count = 22 }: { count?: number }) {
  const reduced = useReducedMotion();
  const [petals, setPetals] = useState<Petal[]>([]);

  const final = useMemo(() => {
    if (reduced) return 0;
    if (typeof window !== 'undefined' && window.innerWidth < 640) return Math.min(8, count);
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return Math.min(14, count);
    return count;
  }, [count, reduced]);

  useEffect(() => {
    const p: Petal[] = [];
    for (let i = 0; i < final; i++) {
      p.push({ id: i, left: Math.random() * 100, size: 8 + Math.random() * 13, dur: 7 + Math.random() * 9, delay: Math.random() * 14, opacity: 0.4 + Math.random() * 0.45, drift: -28 + Math.random() * 56 });
    }
    setPetals(p);
  }, [final]);

  if (!final) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden">
      {petals.map((p) => (
        <div key={p.id} className="sakura-petal absolute" style={{ left: `${p.left}%`, width: p.size, height: p.size, animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s`, opacity: p.opacity, ['--drift' as string]: `${p.drift}px` } as CSSProperties}>
          <svg viewBox="0 0 20 20" fill="none"><path d="M10 0C10 0 13 5 13 10C13 15 10 20 10 20C10 20 7 15 7 10C7 5 10 0 10 0Z" fill="rgba(251,113,133,0.75)" /><path d="M0 10C0 10 5 7 10 7C15 7 20 10 20 10C20 10 15 13 10 13C5 13 0 10 0 10Z" fill="rgba(233,168,242,0.55)" /></svg>
        </div>
      ))}
    </div>
  );
}
