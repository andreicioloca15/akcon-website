export default function HeroVideoBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        poster="/dji_fly_20250909_160218_261_1767899902514_photo.jpg"
      >
        <source src="/videos/Vid3.mp4" type="video/mp4" />
      </video>

      <div
        className="md:hidden absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(/dji_fly_20250909_160218_261_1767899902514_photo.jpg)`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/80 to-navy-light/85 z-10" />
      <div className="absolute inset-0 bg-navy/40 z-20" />
    </div>
  );
}
