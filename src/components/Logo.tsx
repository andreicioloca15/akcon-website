interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon';
  className?: string;
  width?: number;
  height?: number;
  dark?: boolean;
}

export default function Logo({ variant = 'horizontal', className = '', width, height, dark = false }: LogoProps) {
  const navy = '#1e3a5f';
  const navyLight = '#2a4a6f';
  const gold = '#c9a961';
  const white = '#ffffff';

  const textColor = dark ? white : navy;
  const roofLeftColor = dark ? white : navy;
  const roofRightColor = dark ? white : navyLight;
  const beamColor = dark ? gold : gold;
  const taglineColor = gold;

  const RoofA = ({ size = 42, x = 0, y = 0 }: { size?: number; x?: number; y?: number }) => {
    const scale = size / 42;

    const peakX = x;
    const peakY = y;
    const bottomY = y + (size * 0.95);
    const width = size * 0.75;
    const beamY = y + (size * 0.6);

    return (
      <g>
        <polygon
          points={`${peakX},${peakY} ${peakX - width/2},${bottomY} ${peakX - width/2},${beamY}`}
          fill={roofLeftColor}
        />

        <polygon
          points={`${peakX},${peakY} ${peakX + width/2},${beamY} ${peakX + width/2},${bottomY}`}
          fill={roofRightColor}
        />

        <rect
          x={peakX - width/2}
          y={beamY - (1.5 * scale)}
          width={width}
          height={3 * scale}
          fill={beamColor}
        />

        <line
          x1={peakX - 2 * scale}
          y1={peakY}
          x2={peakX + 2 * scale}
          y2={peakY}
          stroke={beamColor}
          strokeWidth={1.5 * scale}
          strokeLinecap="round"
        />
      </g>
    );
  };

  if (variant === 'icon') {
    const size = width || height || 50;
    return (
      <svg width={size} height={size} viewBox="0 0 50 50" className={className}>
        <RoofA size={42} x={25} y={4} />
      </svg>
    );
  }

  if (variant === 'stacked') {
    const w = width || 280;
    const h = height || 140;
    return (
      <svg width={w} height={h} viewBox="0 0 280 140" className={className}>
        <RoofA size={50} x={140} y={10} />

        <text
          x="140"
          y="90"
          fontFamily="'Montserrat', sans-serif"
          fontSize="48"
          fontWeight="800"
          fill={textColor}
          textAnchor="middle"
          letterSpacing="2.4"
        >
          KCON
        </text>

        <text
          x="140"
          y="112"
          fontFamily="'Montserrat', sans-serif"
          fontSize="13"
          fontWeight="500"
          fill={taglineColor}
          textAnchor="middle"
          letterSpacing="2"
        >
          CONSTRUCȚII ACOPERIȘURI
        </text>
      </svg>
    );
  }

  const w = width || 380;
  const h = height || 70;
  return (
    <svg width={w} height={h} viewBox="0 0 380 70" className={className}>
      <RoofA size={42} x={26} y={8} />

      <text
        x="56"
        y="44"
        fontFamily="'Montserrat', sans-serif"
        fontSize="42"
        fontWeight="800"
        fill={textColor}
        letterSpacing="2.1"
      >
        KCON
      </text>

      <text
        x="56"
        y="58"
        fontFamily="'Montserat', sans-serif"
        fontSize="10"
        fontWeight="500"
        fill={taglineColor}
        letterSpacing="1.5"
      >
        CONSTRUCȚII ACOPERIȘURI
      </text>
    </svg>
  );
}
