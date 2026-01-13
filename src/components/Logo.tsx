interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon';
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ variant = 'horizontal', className = '', width, height }: LogoProps) {
  const navy = '#1e3a5f';
  const gold = '#d4a574';
  const navyDark = '#152a43';
  const navyLight = '#2a4a6f';

  if (variant === 'icon') {
    const size = width || height || 64;
    return (
      <svg width={size} height={size} viewBox="0 0 64 64" className={className}>
        <defs>
          <linearGradient id="roofGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={navyLight} />
            <stop offset="100%" stopColor={navy} />
          </linearGradient>
          <linearGradient id="roofShadow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={navyDark} />
            <stop offset="100%" stopColor={navy} />
          </linearGradient>
        </defs>

        <path d="M32 10 L52 32 L48 32 L48 52 L16 52 L16 32 L12 32 Z" fill="url(#roofGradient)" />

        <path d="M32 10 L12 32 L16 32 L32 18 Z" fill={navyDark} opacity="0.3" />

        <path d="M32 10 L52 32 L48 32 L32 18 Z" fill="url(#roofShadow)" />

        <line x1="32" y1="10" x2="52" y2="10" stroke={gold} strokeWidth="2" strokeLinecap="round" />

        <path d="M20 38 L28 38 M36 38 L44 38 M24 44 L32 44 M40 44 L44 44" stroke={navyLight} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (variant === 'stacked') {
    const w = width || 180;
    const h = height || 180;
    return (
      <svg width={w} height={h} viewBox="0 0 180 180" className={className}>
        <defs>
          <linearGradient id="roofGradientStacked" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={navyLight} />
            <stop offset="100%" stopColor={navy} />
          </linearGradient>
          <linearGradient id="roofShadowStacked" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={navyDark} />
            <stop offset="100%" stopColor={navy} />
          </linearGradient>
        </defs>

        <g transform="translate(90, 30)">
          <path d="M0 0 L35 35 L30 35 L30 60 L-30 60 L-30 35 L-35 35 Z" fill="url(#roofGradientStacked)" />
          <path d="M0 0 L-35 35 L-30 35 L0 10 Z" fill={navyDark} opacity="0.3" />
          <path d="M0 0 L35 35 L30 35 L0 10 Z" fill="url(#roofShadowStacked)" />
          <line x1="0" y1="0" x2="35" y2="0" stroke={gold} strokeWidth="3" strokeLinecap="round" />
          <path d="M-20 45 L-10 45 M5 45 L15 45 M-15 52 L0 52 M10 52 L20 52" stroke={navyLight} strokeWidth="2" strokeLinecap="round" />
        </g>

        <text x="90" y="115" fontFamily="Montserrat, sans-serif" fontSize="32" fontWeight="700" fill={navy} textAnchor="middle">
          AKCON
        </text>
        <text x="90" y="138" fontFamily="Montserrat, sans-serif" fontSize="11" fontWeight="500" fill={gold} textAnchor="middle" letterSpacing="0.5">
          CONSTRUCȚII
        </text>
        <text x="90" y="152" fontFamily="Montserrat, sans-serif" fontSize="11" fontWeight="500" fill={gold} textAnchor="middle" letterSpacing="0.5">
          ACOPERIȘURI
        </text>
      </svg>
    );
  }

  const w = width || 280;
  const h = height || 70;
  return (
    <svg width={w} height={h} viewBox="0 0 280 70" className={className}>
      <defs>
        <linearGradient id="roofGradientHoriz" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={navyLight} />
          <stop offset="100%" stopColor={navy} />
        </linearGradient>
        <linearGradient id="roofShadowHoriz" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={navyDark} />
          <stop offset="100%" stopColor={navy} />
        </linearGradient>
      </defs>

      <g transform="translate(35, 15)">
        <path d="M0 0 L28 28 L24 28 L24 45 L-24 45 L-24 28 L-28 28 Z" fill="url(#roofGradientHoriz)" />
        <path d="M0 0 L-28 28 L-24 28 L0 8 Z" fill={navyDark} opacity="0.3" />
        <path d="M0 0 L28 28 L24 28 L0 8 Z" fill="url(#roofShadowHoriz)" />
        <line x1="0" y1="0" x2="28" y2="0" stroke={gold} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M-16 35 L-8 35 M4 35 L12 35 M-12 40 L0 40 M8 40 L16 40" stroke={navyLight} strokeWidth="1.5" strokeLinecap="round" />
      </g>

      <text x="80" y="38" fontFamily="Montserrat, sans-serif" fontSize="28" fontWeight="700" fill={navy} letterSpacing="1">
        AKCON
      </text>
      <text x="80" y="54" fontFamily="Montserrat, sans-serif" fontSize="10" fontWeight="500" fill={gold} letterSpacing="0.8">
        CONSTRUCȚII ACOPERIȘURI
      </text>
    </svg>
  );
}
