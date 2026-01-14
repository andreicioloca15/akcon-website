interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon';
  className?: string;
  width?: number;
  height?: number;
  dark?: boolean;
}

export default function Logo({ variant = 'horizontal', className = '', width, height, dark = false }: LogoProps) {
  // NEW PREMIUM "A AS ROOF" CONCEPT - Brand colors from creative brief
  const navyBlue = '#1e3a5f';
  const darkerNavy = '#152d48';
  const gold = '#c9a961';
  const lighterGold = '#d4b76f';
  const white = '#ffffff';
  const charcoal = '#2d2d2d';

  // Dynamic colors based on dark mode
  const textColor = dark ? white : navyBlue;
  const accentColor = dark ? lighterGold : gold;
  const roofPrimary = dark ? white : navyBlue;
  const roofSecondary = dark ? 'rgba(255,255,255,0.9)' : darkerNavy;
  const beamColor = dark ? lighterGold : gold;

  if (variant === 'icon') {
    const size = width || height || 60;
    return (
      <svg width={size} height={size} viewBox="0 0 120 120" className={className}>
        <defs>
          {/* Navy gradient for left roof slope - adds depth */}
          <linearGradient id={`navySlope-icon-${dark ? 'dark' : 'light'}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={roofPrimary} />
            <stop offset="100%" stopColor={roofSecondary} />
          </linearGradient>

          {/* Gold metallic gradient for beam */}
          <linearGradient id={`goldBeam-icon-${dark ? 'dark' : 'light'}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={beamColor} />
            <stop offset="50%" stopColor={dark ? white : lighterGold} />
            <stop offset="100%" stopColor={beamColor} />
          </linearGradient>

          {/* Subtle shadow for depth */}
          <filter id="iconShadow">
            <feDropShadow dx="0" dy="3" stdDeviation="2" floodOpacity="0.25"/>
          </filter>
        </defs>

        <g transform="translate(60, 20)">
          {/* "A" AS ROOF ICON - The letter A IS the roof itself */}

          {/* Left roof slope with gradient for dimensional depth */}
          <path
            d="M 0,10 L -32,75 L -24,75 L 0,20 Z"
            fill={`url(#navySlope-icon-${dark ? 'dark' : 'light'})`}
            filter="url(#iconShadow)"
          />

          {/* Right roof slope - slightly lighter to show light hitting */}
          <path
            d="M 0,10 L 32,75 L 24,75 L 0,20 Z"
            fill={roofPrimary}
            opacity="0.95"
            filter="url(#iconShadow)"
          />

          {/* Roof peak accent line - gold detail at the top */}
          <line
            x1="-2" y1="10"
            x2="2" y2="10"
            stroke={beamColor}
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Foundation beam (crossbar of "A") in gold - architectural support */}
          <rect
            x="-20" y="52"
            width="40" height="6"
            fill={`url(#goldBeam-icon-${dark ? 'dark' : 'light'})`}
            rx="1"
            filter="url(#iconShadow)"
          />

          {/* Subtle architectural detail - corner supports */}
          <circle cx="-20" cy="55" r="2.5" fill={beamColor} opacity="0.8" />
          <circle cx="20" cy="55" r="2.5" fill={beamColor} opacity="0.8" />

          {/* Foundation base line */}
          <rect
            x="-28" y="75"
            width="56" height="4"
            fill={textColor}
            opacity="0.6"
            rx="1"
          />
        </g>
      </svg>
    );
  }

  if (variant === 'stacked') {
    const w = width || 280;
    const h = height || 200;
    return (
      <svg width={w} height={h} viewBox="0 0 280 200" className={className}>
        <defs>
          <linearGradient id={`navySlope-stack-${dark ? 'dark' : 'light'}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={roofPrimary} />
            <stop offset="100%" stopColor={roofSecondary} />
          </linearGradient>

          <linearGradient id={`goldBeam-stack-${dark ? 'dark' : 'light'}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={beamColor} />
            <stop offset="50%" stopColor={dark ? white : lighterGold} />
            <stop offset="100%" stopColor={beamColor} />
          </linearGradient>

          <filter id="stackShadow">
            <feDropShadow dx="0" dy="3" stdDeviation="3" floodOpacity="0.25"/>
          </filter>
        </defs>

        <g transform="translate(140, 25)">
          {/* "A" AS ROOF - Stacked version */}

          {/* Left roof slope */}
          <path
            d="M 0,8 L -48,90 L -38,90 L 0,25 Z"
            fill={`url(#navySlope-stack-${dark ? 'dark' : 'light'})`}
            filter="url(#stackShadow)"
          />

          {/* Right roof slope */}
          <path
            d="M 0,8 L 48,90 L 38,90 L 0,25 Z"
            fill={roofPrimary}
            opacity="0.95"
            filter="url(#stackShadow)"
          />

          {/* Roof peak detail */}
          <line
            x1="-3" y1="8"
            x2="3" y2="8"
            stroke={beamColor}
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Foundation beam (A crossbar) */}
          <rect
            x="-30" y="62"
            width="60" height="8"
            fill={`url(#goldBeam-stack-${dark ? 'dark' : 'light'})`}
            rx="2"
            filter="url(#stackShadow)"
          />

          {/* Corner details */}
          <circle cx="-30" cy="66" r="3.5" fill={beamColor} opacity="0.8" />
          <circle cx="30" cy="66" r="3.5" fill={beamColor} opacity="0.8" />

          {/* Foundation base */}
          <rect
            x="-42" y="90"
            width="84" height="5"
            fill={textColor}
            opacity="0.6"
            rx="2"
          />
        </g>

        {/* AKCON text */}
        <text
          x="140" y="140"
          fontFamily="'Montserrat', sans-serif"
          fontSize="48"
          fontWeight="800"
          fill={textColor}
          textAnchor="middle"
          letterSpacing="4"
        >
          AKCON
        </text>

        {/* Tagline */}
        <text
          x="140" y="165"
          fontFamily="'Montserrat', sans-serif"
          fontSize="14"
          fontWeight="500"
          fill={accentColor}
          textAnchor="middle"
          letterSpacing="4"
        >
          CONSTRUCȚII ACOPERIȘURI
        </text>
      </svg>
    );
  }

  // Horizontal variant - Primary logo
  const w = width || 420;
  const h = height || 80;
  return (
    <svg width={w} height={h} viewBox="0 0 420 80" className={className}>
      <defs>
        <linearGradient id={`navySlope-horiz-${dark ? 'dark' : 'light'}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={roofPrimary} />
          <stop offset="100%" stopColor={roofSecondary} />
        </linearGradient>

        <linearGradient id={`goldBeam-horiz-${dark ? 'dark' : 'light'}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={beamColor} />
          <stop offset="50%" stopColor={dark ? white : lighterGold} />
          <stop offset="100%" stopColor={beamColor} />
        </linearGradient>

        <filter id="horizShadow">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.25"/>
        </filter>
      </defs>

      <g transform="translate(35, 15)">
        {/* "A" AS ROOF ICON - Horizontal layout */}

        {/* Left roof slope with gradient */}
        <path
          d="M 0,6 L -28,55 L -22,55 L 0,15 Z"
          fill={`url(#navySlope-horiz-${dark ? 'dark' : 'light'})`}
          filter="url(#horizShadow)"
        />

        {/* Right roof slope */}
        <path
          d="M 0,6 L 28,55 L 22,55 L 0,15 Z"
          fill={roofPrimary}
          opacity="0.95"
          filter="url(#horizShadow)"
        />

        {/* Roof peak accent */}
        <line
          x1="-2" y1="6"
          x2="2" y2="6"
          stroke={beamColor}
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Foundation beam (A crossbar) in gold */}
        <rect
          x="-18" y="38"
          width="36" height="5"
          fill={`url(#goldBeam-horiz-${dark ? 'dark' : 'light'})`}
          rx="1"
          filter="url(#horizShadow)"
        />

        {/* Architectural corner details */}
        <circle cx="-18" cy="40.5" r="2" fill={beamColor} opacity="0.8" />
        <circle cx="18" cy="40.5" r="2" fill={beamColor} opacity="0.8" />

        {/* Foundation base */}
        <rect
          x="-25" y="55"
          width="50" height="3"
          fill={textColor}
          opacity="0.6"
          rx="1"
        />
      </g>

      {/* AKCON text with roof icon as the "A" */}
      <text
        x="68" y="42"
        fontFamily="'Montserrat', sans-serif"
        fontSize="38"
        fontWeight="800"
        fill={textColor}
        letterSpacing="2"
      >
        AKCON
      </text>

      {/* Tagline below */}
      <text
        x="68" y="58"
        fontFamily="'Montserrat', sans-serif"
        fontSize="11"
        fontWeight="500"
        fill={accentColor}
        letterSpacing="3.5"
      >
        CONSTRUCȚII ACOPERIȘURI
      </text>
    </svg>
  );
}

/*
===============================================================================
OLD LOGO SYSTEM - KEPT FOR EASY REVERSION
===============================================================================

To revert to the old layered roof design, uncomment the code below and
delete the new "A as roof" implementation above.

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

        <path d="M30 8 L10 35 L14 35 L30 14 L46 35 L50 35 Z"
              fill={`url(#roofGrad1-${dark ? 'dark' : 'light'})`}
              opacity="0.6" />

        <path d="M30 12 L12 38 L16 38 L30 18 L44 38 L48 38 Z"
              fill={`url(#roofGrad2-${dark ? 'dark' : 'light'})`}
              opacity="0.8" />

        <path d="M30 16 L14 42 L18 42 L30 22 L42 42 L46 42 Z"
              fill={goldColor}
              filter="url(#shadow)" />

        <path d="M30 16 L18 42 L22 42 L30 26 L38 42 L42 42 Z"
              fill={roofColor3}
              opacity="0.2" />

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

===============================================================================
*/
