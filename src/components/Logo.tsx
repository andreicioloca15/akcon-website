interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon' | 'white';
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ variant = 'horizontal', className = '', width, height }: LogoProps) {
  const isWhite = variant === 'white';
  const navyColor = isWhite ? '#ffffff' : '#1e3a5f';

  if (variant === 'icon') {
    return (
      <div className={`flex ${className}`}>
        <img
          src="/logo-02 copy.png"
          alt="AKCON"
          className="h-10 w-auto object-contain"
          style={{ height: height ? `${height}px` : '40px' }}
        />
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <img
          src="/logo-02 copy.png"
          alt="AKCON Icon"
          className="h-24 w-auto object-contain mb-4"
        />
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
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/logo-02 copy.png"
        alt="AKCON Icon"
        className="object-contain"
        style={{
          height: height ? `${height}px` : '50px',
          width: 'auto'
        }}
      />
      <span
        className="font-extrabold uppercase leading-none"
        style={{
          color: navyColor,
          letterSpacing: '0.08em',
          fontSize: width ? `${width / 8}px` : '1.75rem',
          fontFamily: 'Montserrat, system-ui, -apple-system, sans-serif',
          fontWeight: 700
        }}
      >
        AKCON
      </span>
    </div>
  );
}
