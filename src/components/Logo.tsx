interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon' | 'white';
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ variant = 'horizontal', className = '' }: LogoProps) {
  const isWhite = variant === 'white';
  const navyColor = isWhite ? '#ffffff' : '#1e3a5f';

  if (variant === 'icon') {
    return (
      <div className={`flex ${className}`}>
        <span
          className="font-extrabold uppercase leading-none"
          style={{
            color: navyColor,
            letterSpacing: '0.15em',
            fontSize: '2.5rem',
            fontFamily: 'Montserrat, system-ui, -apple-system, sans-serif',
            fontWeight: 700
          }}
        >
          AKCON
        </span>
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex items-center ${className}`}>
        <span
          className="font-extrabold uppercase leading-none"
          style={{
            color: navyColor,
            letterSpacing: '0.15em',
            fontSize: '3.5rem',
            fontFamily: 'Montserrat, system-ui, -apple-system, sans-serif',
            fontWeight: 700
          }}
        >
          AKCON
        </span>
      </div>
    );
  }

  return (
    <div className={`flex ${className}`}>
      <span
        className="font-extrabold uppercase leading-none"
        style={{
          color: navyColor,
          letterSpacing: '0.15em',
          fontSize: '2rem',
          fontFamily: 'Montserrat, system-ui, -apple-system, sans-serif',
          fontWeight: 700
        }}
      >
        AKCON
      </span>
    </div>
  );
}
