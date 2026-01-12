import { useEffect, useState } from 'react';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  duration: number;
}

export default function HeroVideoBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const desktopMedia: MediaItem[] = [
    { type: 'image', src: '/dji_fly_20250725_174044_171_1767900943954_photo.jpg', duration: 5000 },
    { type: 'image', src: '/dji_fly_20250725_174154_175_1767900940021_photo.jpg', duration: 5000 },
    { type: 'image', src: '/dji_fly_20250909_160218_261_1767899902514_photo.jpg', duration: 5000 },
    { type: 'image', src: '/dji_fly_20251203_101628_298_1767899813998_photo.jpg', duration: 5000 },
    { type: 'video', src: '/videos/Vid3.mp4', duration: 10000 },
  ];

  const mobileMedia: MediaItem[] = desktopMedia.filter(item => item.type === 'image');

  const media = isMobile ? mobileMedia : desktopMedia;

  useEffect(() => {
    if (media.length === 0) return;

    const currentItem = media[currentIndex];
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % media.length);
    }, currentItem.duration);

    return () => clearTimeout(timer);
  }, [currentIndex, media]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {media.map((item, index) => {
        const isActive = index === currentIndex;

        if (item.type === 'video') {
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity ${
                isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              style={{
                transitionDuration: '1000ms',
                willChange: 'opacity',
              }}
            >
              <video
                autoPlay
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                }}
              >
                <source src={item.src} type="video/mp4" />
              </video>
            </div>
          );
        }

        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity ${
              isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            style={{
              transitionDuration: '1000ms',
              willChange: 'opacity, transform',
            }}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${item.src})`,
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                animation: isActive && !isMobile ? `subtleZoom ${item.duration}ms ease-out forwards` : 'none',
              }}
            />
          </div>
        );
      })}

      <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/80 to-navy-light/85 z-10" />
      <div className="absolute inset-0 bg-navy/40 z-20" />

      <style>
        {`
          @keyframes subtleZoom {
            0% {
              transform: scale(1) translateZ(0);
            }
            100% {
              transform: scale(1.05) translateZ(0);
            }
          }
        `}
      </style>
    </div>
  );
}
