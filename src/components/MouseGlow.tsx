import { useEffect, useRef } from 'react';

export default function MouseGlow({ mouse }: { mouse: { x: number; y: number } }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cx = `calc(50% + ${mouse.x * 60}px)`;
    const cy = `calc(50% + ${mouse.y * 80}px)`;
    el.style.left = cx;
    el.style.top = cy;
  }, [mouse]);

  return <div ref={ref} className="cursor-glow" />;
}
