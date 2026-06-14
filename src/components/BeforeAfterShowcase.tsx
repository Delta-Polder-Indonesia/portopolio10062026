import { useRef, useState, type PointerEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from './useInView';

export default function BeforeAfterShowcase() {
  const { ref, inView } = useInView(0.15);
  const [pos, setPos] = useState(55);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(10, Math.min(90, ((clientX - rect.left) / rect.width) * 100));
    setPos(x);
  };

  const onPointerDown = (e: PointerEvent) => { dragging.current = true; (e.target as HTMLElement).setPointerCapture(e.pointerId); update(e.clientX); };
  const onPointerMove = (e: PointerEvent) => { if (dragging.current) update(e.clientX); };
  const onPointerUp = () => { dragging.current = false; };

  return (
    <section id="demo-lab" className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0515] via-[#140924] to-[#0d0515]" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10 max-w-3xl sm:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-kamui-400">Demo Interaktif</p>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">Before vs After yang bisa Anda tunjukkan saat pitching</h2>
          <p className="mt-4 text-sm text-gray-300">Geser handle untuk melihat perbedaan kualitas visual.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, delay: 0.1 }}>
          <div
            ref={containerRef}
            className="relative select-none overflow-hidden rounded-2xl sm:rounded-3xl border border-kamui-700/50 touch-none"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
          >
            <div className="relative aspect-[16/9] sm:aspect-[16/8] w-full">
              <img src="/images/kamui-mountain.jpg" alt="Before" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${pos}%` }}>
                <img src="/images/kamui-hero.jpg" alt="After" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" style={{ width: `${containerRef.current?.offsetWidth ?? 1200}px`, maxWidth: 'none' }} />
              </div>
              <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
                <div className="h-full w-0.5 bg-white/80" />
                <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-grab items-center justify-center rounded-full border-2 border-white bg-black/60 text-sm text-white backdrop-blur active:cursor-grabbing">⇄</div>
              </div>
              <span className="absolute left-3 top-3 rounded-full bg-black/50 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-white backdrop-blur">Before</span>
              <span className="absolute right-3 top-3 rounded-full bg-black/50 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-white backdrop-blur">After</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
