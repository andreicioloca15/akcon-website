interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon';
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ variant = 'horizontal', className = '', width, height }: LogoProps) {
  if (variant === 'icon') {
    return (
      <img
        src="/logo-icon.svg"
        alt="AKCON Logo"
        className={className}
        width={width || 120}
        height={height || 120}
      />
    );
  }

  if (variant === 'stacked') {
    return (
      <img
        src="/logo-stacked.svg"
        alt="AKCON - Construcții Acoperișuri"
        className={className}
        width={width || 280}
        height={height || 200}
      />
    );
  }

  return (
    <img
      src="/logo-horizontal.svg"
      alt="AKCON - Construcții Acoperișuri"
      className={className}
      width={width || 420}
      height={height || 80}
    />
  );
}
