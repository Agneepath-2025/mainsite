'use client';

export default function ReelSection({ src }: { src: string }) {
  return (
    <section className="w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
    </section>
  );
}
