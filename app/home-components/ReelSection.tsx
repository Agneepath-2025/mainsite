'use client';

export default function ReelSection({
  src,
}: {
  src: string;
}) {
  return (
    <section className="relative w-full h-[calc(100vh-80px)] overflow-hidden">
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
