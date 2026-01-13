interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon';
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ variant = 'horizontal', className = '', width, height }: LogoProps) {
  const getLogoSrc = () => {
    switch (variant) {
      case 'stacked':
        return '/logo-stacked.svg';
      case 'icon':
        return '/logo-icon.svg';
      case 'horizontal':
      default:
        return '/logo-horizontal.svg';
    }
  };

  const getDefaultDimensions = () => {
    switch (variant) {
      case 'stacked':
        return { width: 140, height: 140 };
      case 'icon':
        return { width: 64, height: 64 };
      case 'horizontal':
      default:
        return { width: 220, height: 60 };
    }
  };

  const dimensions = getDefaultDimensions();
  const logoWidth = width || dimensions.width;
  const logoHeight = height || dimensions.height;

  return (
    <img
      src={getLogoSrc()}
      alt="AKCON - Premium Roofing"
      width={logoWidth}
      height={logoHeight}
      className={className}
      style={{ display: 'block' }}
    />
  );
}
