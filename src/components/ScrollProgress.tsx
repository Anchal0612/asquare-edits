interface ScrollProgressProps { progress: number; }

export default function ScrollProgress({ progress }: ScrollProgressProps) {
  if (progress <= 0 || progress >= 100) return null;
  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 z-[100]" style={{ background: 'rgba(255,255,255,0.04)' }}>
      <div
        className="h-full transition-all duration-100"
        style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #22d3ee, #67e8f9)' }}
      />
    </div>
  );
}
