interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon';
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ variant = 'horizontal', className = '' }: LogoProps) {
  if (variant === 'icon') {
    return (
      <div className={`flex flex-col ${className}`}>
        <span className="text-2xl font-bold text-gray-900">ACKON</span>
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <span className="text-3xl font-bold text-gray-900">ACKON</span>
        <span className="text-xs text-gray-600 uppercase tracking-wider mt-1">Construcții Acoperișuri</span>
      </div>
    );
  }

  return (
    <div className={`flex flex-col ${className}`}>
      <span className="text-2xl font-bold text-gray-900 leading-none">ACKON</span>
      <span className="text-xs text-gray-600 uppercase tracking-wider">Construcții Acoperișuri</span>
    </div>
  );
}
