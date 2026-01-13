interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon';
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ variant = 'horizontal', className = '', width, height }: LogoProps) {
  const navy = '#1e3a5f';
  const gold = '#d4a574';
  const navyLight = '#2d4a6f';

  if (variant === 'icon') {
    const size = width || height || 40;
    return (
      <svg width={size} height={size} viewBox="0 0 40 32" className={className}>
        <defs>
          <linearGradient id="roofGradientIcon" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={navyLight} />
            <stop offset="100%" stopColor={navy} />
          </linearGradient>
        </defs>
        <path d="M20,2 L2,30 L38,30 Z" fill="url(#roofGradientIcon)" />
        <line x1="2" y1="30" x2="20" y2="2" stroke={gold} strokeWidth="2" />
        <line x1="20" y1="2" x2="38" y2="30" stroke={gold} strokeWidth="2" />
      </svg>
    );
  }

  if (variant === 'stacked') {
    const w = width || 200;
    const h = height || 160;
    return (
      <svg width={w} height={h} viewBox="0 0 200 160" className={className}>
        <defs>
          <linearGradient id="roofGradientStacked" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={navyLight} />
            <stop offset="100%" stopColor={navy} />
          </linearGradient>
        </defs>
        <g transform="translate(100, 20)">
          <path d="M0,-2 L-45,42 L45,42 Z" fill="url(#roofGradientStacked)" />
          <line x1="-45" y1="42" x2="0" y2="-2" stroke={gold} strokeWidth="2.5" />
          <line x1="0" y1="-2" x2="45" y2="42" stroke={gold} strokeWidth="2.5" />
        </g>
        <text x="100" y="90" fontFamily="Inter, system-ui, sans-serif" fontSize="32" fontWeight="700" fill={navy} textAnchor="middle" letterSpacing="0.5">
          AKCON
        </text>
        <text x="100" y="110" fontFamily="Inter, system-ui, sans-serif" fontSize="11" fontWeight="500" fill={gold} textAnchor="middle" letterSpacing="2" style="text-transform: uppercase">
          CONSTRUCȚII ACOPERIȘURI
        </text>
      </svg>
    );
  }

  const w = width || 320;
  const h = height || 60;
  return (
    <svg width={w} height={h} viewBox="0 0 320 60" className={className}>
      <defs>
        <linearGradient id="roofGradientHoriz" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={navyLight} />
          <stop offset="100%" stopColor={navy} />
        </linearGradient>
      </defs>
      <g transform="translate(20, 14)">
        <path d="M0,0 L-18,32 L18,32 Z" fill="url(#roofGradientHoriz)" />
        <line x1="-18" y1="32" x2="0" y2="0" stroke={gold} strokeWidth="2" />
        <line x1="0" y1="0" x2="18" y2="32" stroke={gold} strokeWidth="2" />
      </g>
      <text x="58" y="33" fontFamily="Inter, system-ui, sans-serif" fontSize="28" fontWeight="700" fill={navy} letterSpacing="0.5">
        AKCON
      </text>
      <text x="58" y="47" fontFamily="Inter, system-ui, sans-serif" fontSize="11" fontWeight="500" fill={gold} letterSpacing="2" style="text-transform: uppercase">
        CONSTRUCȚII ACOPERIȘURI
      </text>
    </svg>
  );
}
