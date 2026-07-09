export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size * 5} height={size} viewBox="0 0 400 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor="#e6f8fb" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.95" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <text x="8" y="56" fontFamily="Poppins, Inter, system-ui, sans-serif" fontWeight="800" fontSize="56" fill="url(#g1)" filter="url(#glow)">
        ASQUARE
      </text>
    </svg>
  );
}
