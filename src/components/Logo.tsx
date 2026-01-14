interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon' | 'white';
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ variant = 'horizontal', className = '' }: LogoProps) {
  const isWhite = variant === 'white';
  const navyColor = isWhite ? '#ffffff' : '#1e3a5f';
  const goldColor = isWhite ? 'rgba(255, 255, 255, 0.7)' : '#c9a961';

  if (variant === 'icon') {
    return (
      <div className={`flex flex-col ${className}`}>
        <span
          className="font-extrabold uppercase leading-none"
          style={{
            color: navyColor,
            letterSpacing: '0.15em',
            fontSize: '2rem',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 800
          }}
        >
          AKCON
        </span>
      </div>
    );
  }

  if (variant === 'stacked' || variant === 'white') {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <span
          className="font-extrabold uppercase leading-none"
          style={{
            color: navyColor,
            letterSpacing: '0.15em',
            fontSize: '3rem',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 800
          }}
        >
          AKCON
        </span>
        <div
          className="w-16 my-3"
          style={{
            height: '1px',
            background: goldColor,
            opacity: 0.5
          }}
        />
        <span
          className="font-light uppercase"
          style={{
            color: goldColor,
            letterSpacing: '0.2em',
            fontSize: '1.05rem',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 300
          }}
        >
          CONSTRUCȚII ACOPERIȘURI
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span
        className="font-extrabold uppercase leading-none"
        style={{
          color: navyColor,
          letterSpacing: '0.15em',
          fontSize: '1.75rem',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontWeight: 800
        }}
      >
        AKCON
      </span>
      <div
        style={{
          width: '1px',
          height: '2rem',
          background: goldColor,
          opacity: 0.6
        }}
      />
      <span
        className="font-light uppercase"
        style={{
          color: goldColor,
          letterSpacing: '0.2em',
          fontSize: '0.7rem',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontWeight: 300
        }}
      >
        CONSTRUCȚII ACOPERIȘURI
      </span>
    </div>
  );
}
