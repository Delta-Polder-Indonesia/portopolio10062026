import { type MouseEvent } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';

interface TiltMediaProps {
  src: string;
  alt: string;
  className?: string;
}

export default function TiltMedia({ src, alt, className }: TiltMediaProps) {
  const prefersReducedMotion = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), {
    stiffness: 140,
    damping: 18,
  });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), {
    stiffness: 140,
    damping: 18,
  });

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    mx.set(x);
    my.set(y);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const glareX = useTransform(mx, [-0.5, 0.5], ["30%", "70%"]);
  const glareY = useTransform(my, [-0.5, 0.5], ["30%", "70%"]);
  const glareOpacity = useTransform(useSpring(mx, { stiffness: 100 }), [-0.5, 0, 0.5], [0.15, 0, 0.15]);

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`${className} relative overflow-hidden`}
      style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
        style={prefersReducedMotion ? {} : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
      />
      
      {!prefersReducedMotion && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.12) 0%, transparent 80%)`
            ),
            opacity: glareOpacity,
          }}
        />
      )}
    </motion.div>
  );
}
