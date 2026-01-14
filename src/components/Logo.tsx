interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon';
  className?: string;
  width?: number;
  height?: number;
  dark?: boolean;
}

export default function Logo({ variant = 'horizontal', className = '', width, height, dark = false }: LogoProps) {
  const navy = '#1e3a5f';
  const navyDark = '#152d48';
  const gold = '#c9a961';
  const white = '#ffffff';

  const textColor = dark ? white : navy;
  const roofLeftColor = dark ? white : navyDark;
  const roofRightColor = dark ? white : navy;
  const beamColor = dark ? white : navy;
  const taglineColor = dark ? gold : gold;

  const RoofA = ({ size = 32, x = 0, y = 0 }: { size?: number; x?: number; y?: number }) => {
    const scale = size / 32;
    const tileWidth = 3.5 * scale;
    const tileHeight = 2.5 * scale;
    const tileGap = 0.4 * scale;

    const leftSlope = [];
    const rightSlope = [];

    for (let row = 0; row < 9; row++) {
      const startY = 6 * scale + row * (tileHeight - tileGap);
      const rowOffset = row % 2 === 0 ? 0 : -tileWidth / 2;

      for (let col = 0; col < 4; col++) {
        const tileX = x - (16 * scale) + (row * 1.9 * scale) + col * tileWidth + rowOffset;
        const tileY = y + startY;

        if (tileX < x - 2 * scale) {
          leftSlope.push(
            <rect
              key={`left-${row}-${col}`}
              x={tileX}
              y={tileY}
              width={tileWidth}
              height={tileHeight}
              fill={roofLeftColor}
              opacity={0.9}
              rx={0.3 * scale}
            />
          );
        }
      }

      for (let col = 0; col < 4; col++) {
        const tileX = x + (2 * scale) - (row * 1.9 * scale) + col * tileWidth + rowOffset;
        const tileY = y + startY;

        if (tileX > x + 2 * scale && tileX < x + (16 * scale)) {
          rightSlope.push(
            <rect
              key={`right-${row}-${col}`}
              x={tileX}
              y={tileY}
              width={tileWidth}
              height={tileHeight}
              fill={roofRightColor}
              opacity={0.95}
              rx={0.3 * scale}
            />
          );
        }
      }
    }

    return (
      <g>
        <path
          d={`M ${x} ${y + 4 * scale} L ${x - 15 * scale} ${y + 28 * scale} L ${x - 15 * scale} ${y + 30 * scale} L ${x} ${y + 6 * scale} Z`}
          fill={roofLeftColor}
          opacity={0.3}
        />

        <path
          d={`M ${x} ${y + 4 * scale} L ${x + 15 * scale} ${y + 28 * scale} L ${x + 15 * scale} ${y + 30 * scale} L ${x} ${y + 6 * scale} Z`}
          fill={roofRightColor}
          opacity={0.3}
        />

        {leftSlope}
        {rightSlope}

        <line
          x1={x - 1.5 * scale}
          y1={y + 4 * scale}
          x2={x + 1.5 * scale}
          y2={y + 4 * scale}
          stroke={beamColor}
          strokeWidth={1.2 * scale}
          strokeLinecap="round"
          opacity={0.9}
        />

        <rect
          x={x - 10 * scale}
          y={y + 18 * scale}
          width={20 * scale}
          height={2.5 * scale}
          fill={beamColor}
          rx={0.4 * scale}
        />

        <line
          x1={x - 10 * scale}
          y1={y + 19.2 * scale}
          x2={x + 10 * scale}
          y2={y + 19.2 * scale}
          stroke={textColor}
          strokeWidth={0.3 * scale}
          opacity={0.3}
        />

        <rect
          x={x - 16 * scale}
          y={y + 30 * scale}
          width={32 * scale}
          height={1 * scale}
          fill={textColor}
          opacity={0.4}
          rx={0.2 * scale}
        />

        <path
          d={`M ${x - 15 * scale} ${y + 28 * scale} Q ${x - 15 * scale} ${y + 30 * scale} ${x - 14 * scale} ${y + 30.5 * scale}`}
          fill="none"
          stroke={textColor}
          strokeWidth={0.3 * scale}
          opacity={0.3}
        />
        <path
          d={`M ${x + 15 * scale} ${y + 28 * scale} Q ${x + 15 * scale} ${y + 30 * scale} ${x + 14 * scale} ${y + 30.5 * scale}`}
          fill="none"
          stroke={textColor}
          strokeWidth={0.3 * scale}
          opacity={0.3}
        />
      </g>
    );
  };

  if (variant === 'icon') {
    const size = width || height || 50;
    return (
      <svg width={size} height={size} viewBox="0 0 60 60" className={className}>
        <RoofA size={48} x={30} y={6} />
      </svg>
    );
  }

  if (variant === 'stacked') {
    const w = width || 280;
    const h = height || 200;
    return (
      <svg width={w} height={h} viewBox="0 0 280 200" className={className}>
        <RoofA size={64} x={140} y={20} />

        <text
          x="140"
          y="130"
          fontFamily="'Montserrat', sans-serif"
          fontSize="48"
          fontWeight="800"
          fill={textColor}
          textAnchor="middle"
          letterSpacing="2.4"
        >
          <tspan>KCON</tspan>
        </text>

        <text
          x="140"
          y="158"
          fontFamily="'Montserrat', sans-serif"
          fontSize="14"
          fontWeight="500"
          fill={taglineColor}
          textAnchor="middle"
          letterSpacing="2.1"
        >
          CONSTRUCȚII ACOPERIȘURI
        </text>
      </svg>
    );
  }

  const w = width || 420;
  const h = height || 80;
  return (
    <svg width={w} height={h} viewBox="0 0 420 80" className={className}>
      <RoofA size={42} x={32} y={14} />

      <text
        x="64"
        y="50"
        fontFamily="'Montserrat', sans-serif"
        fontSize="42"
        fontWeight="800"
        fill={textColor}
        letterSpacing="2.1"
      >
        KCON
      </text>

      <text
        x="64"
        y="65"
        fontFamily="'Montserrat', sans-serif"
        fontSize="11"
        fontWeight="500"
        fill={taglineColor}
        letterSpacing="1.65"
      >
        CONSTRUCȚII ACOPERIȘURI
      </text>
    </svg>
  );
}
