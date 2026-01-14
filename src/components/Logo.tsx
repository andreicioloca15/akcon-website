interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon';
  className?: string;
  width?: number;
  height?: number;
  dark?: boolean;
}

export default function Logo({ variant = 'horizontal', className = '', width, height, dark = false }: LogoProps) {
  // Premium color scheme
  const primaryDark = '#0a1628';
  const primaryMid = '#1a2f4f';
  const accentGold = '#c9962f';
  const accentBronze = '#8b6914';
  const accentLight = '#f4d88a';

  // Dark mode colors (for footer)
  const textColor = dark ? '#ffffff' : primaryDark;
  const goldColor = dark ? accentLight : accentGold;
  const roofColor1 = dark ? '#f4d88a' : primaryMid;
  const roofColor2 = dark ? '#c9962f' : accentBronze;
  const roofColor3 = dark ? '#ffffff' : primaryDark;

  if (variant === 'icon') {
    const size = width || height || 50;
    return (
      <svg width={size} height={size} viewBox="0 0 60 60" className={className}>
        <defs>
          <linearGradient id={`roofGrad1-${dark ? 'dark' : 'light'}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={roofColor1} />
            <stop offset="100%" stopColor={roofColor2} />
          </linearGradient>
          <linearGradient id={`roofGrad2-${dark ? 'dark' : 'light'}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={roofColor2} />
            <stop offset="100%" stopColor={roofColor3} />
          </linearGradient>
          <filter id="shadow">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3"/>
          </filter>
        </defs>

        {/* Layered roof structure - back layer */}
        <path d="M30 8 L10 35 L14 35 L30 14 L46 35 L50 35 Z"
              fill={`url(#roofGrad1-${dark ? 'dark' : 'light'})`}
              opacity="0.6" />

        {/* Middle layer */}
        <path d="M30 12 L12 38 L16 38 L30 18 L44 38 L48 38 Z"
              fill={`url(#roofGrad2-${dark ? 'dark' : 'light'})`}
              opacity="0.8" />

        {/* Front layer - main roof */}
        <path d="M30 16 L14 42 L18 42 L30 22 L42 42 L46 42 Z"
              fill={goldColor}
              filter="url(#shadow)" />

        {/* Roof ridge detail */}
        <path d="M30 16 L18 42 L22 42 L30 26 L38 42 L42 42 Z"
              fill={roofColor3}
              opacity="0.2" />

        {/* Foundation line */}
        <rect x="14" y="42" width="32" height="3" fill={textColor} opacity="0.8" rx="1" />
      </svg>
    );
  }

  if (variant === 'stacked') {
    const w = width || 240;
    const h = height || 180;
    return (
      <svg width={w} height={h} viewBox="0 0 240 180" className={className}>
        <defs>
          <linearGradient id={`roofGrad1Stack-${dark ? 'dark' : 'light'}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={roofColor1} />
            <stop offset="100%" stopColor={roofColor2} />
          </linearGradient>
          <linearGradient id={`roofGrad2Stack-${dark ? 'dark' : 'light'}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={roofColor2} />
            <stop offset="100%" stopColor={roofColor3} />
          </linearGradient>
          <filter id="shadowStack">
            <feDropShadow dx="0" dy="3" stdDeviation="3" floodOpacity="0.3"/>
          </filter>
        </defs>

        <g transform="translate(120, 20)">
          {/* Layered roof structure */}
          <path d="M0 10 L-50 65 L-42 65 L0 22 L42 65 L50 65 Z"
                fill={`url(#roofGrad1Stack-${dark ? 'dark' : 'light'})`}
                opacity="0.6" />

          <path d="M0 16 L-45 68 L-38 68 L0 28 L38 68 L45 68 Z"
                fill={`url(#roofGrad2Stack-${dark ? 'dark' : 'light'})`}
                opacity="0.8" />

          <path d="M0 22 L-40 71 L-34 71 L0 34 L34 71 L40 71 Z"
                fill={goldColor}
                filter="url(#shadowStack)" />

          <path d="M0 22 L-34 71 L-28 71 L0 40 L28 71 L34 71 Z"
                fill={roofColor3}
                opacity="0.2" />

          <rect x="-40" y="71" width="80" height="4" fill={textColor} opacity="0.8" rx="2" />
        </g>

        <text x="120" y="115" fontFamily="'Montserrat', sans-serif" fontSize="42" fontWeight="800" fill={textColor} textAnchor="middle" letterSpacing="1">
          AKCON
        </text>
        <text x="120" y="135" fontFamily="'Montserrat', sans-serif" fontSize="13" fontWeight="600" fill={goldColor} textAnchor="middle" letterSpacing="3">
          ACOPERIȘURI
        </text>
      </svg>
    );
  }

  // Horizontal variant
  const w = width || 360;
  const h = height || 70;
  return (
    <svg width={w} height={h} viewBox="0 0 360 70" className={className}>
      <defs>
        <linearGradient id={`roofGrad1Horiz-${dark ? 'dark' : 'light'}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={roofColor1} />
          <stop offset="100%" stopColor={roofColor2} />
        </linearGradient>
        <linearGradient id={`roofGrad2Horiz-${dark ? 'dark' : 'light'}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={roofColor2} />
          <stop offset="100%" stopColor={roofColor3} />
        </linearGradient>
        <filter id="shadowHoriz">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3"/>
        </filter>
      </defs>

      <g transform="translate(30, 12)">
        {/* Layered roof structure */}
        <path d="M0 4 L-22 38 L-18 38 L0 10 L18 38 L22 38 Z"
              fill={`url(#roofGrad1Horiz-${dark ? 'dark' : 'light'})`}
              opacity="0.6" />

        <path d="M0 7 L-20 40 L-16 40 L0 13 L16 40 L20 40 Z"
              fill={`url(#roofGrad2Horiz-${dark ? 'dark' : 'light'})`}
              opacity="0.8" />

        <path d="M0 10 L-18 42 L-14 42 L0 16 L14 42 L18 42 Z"
              fill={goldColor}
              filter="url(#shadowHoriz)" />

        <path d="M0 10 L-14 42 L-10 42 L0 20 L10 42 L14 42 Z"
              fill={roofColor3}
              opacity="0.2" />

        <rect x="-18" y="42" width="36" height="3" fill={textColor} opacity="0.8" rx="1" />
      </g>

      <text x="68" y="38" fontFamily="'Montserrat', sans-serif" fontSize="32" fontWeight="800" fill={textColor} letterSpacing="0.5">
        AKCON
      </text>
      <text x="68" y="52" fontFamily="'Montserrat', sans-serif" fontSize="11" fontWeight="600" fill={goldColor} letterSpacing="3">
        ACOPERIȘURI
      </text>
    </svg>
  );
}
