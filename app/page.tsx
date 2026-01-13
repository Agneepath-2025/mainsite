'use client';

import Runner from './home-components/Runner';
import AboutUsSection from './home-components/about-us';
import Contact from './home-components/Contact';
import CampusMap from './home-components/CampusMap';
import { SectionActivationProvider } from './home-components/SectionActivationContext';
import BackgroundStage from './home-components/BackgroundStage';
import ShadowOverlay from './home-components/ShadowOverlay';
import ReelSection from './home-components/ReelSection';




export default function Home() {
  return (
   <SectionActivationProvider>
  <BackgroundStage />
  <ShadowOverlay />
  <Runner />

  <main className="relative z-20 min-h-screen text-white">

    {/* HERO VIDEO */}
    <ReelSection src="/reel.mp4" />

    {/* ABOUT US — NOW BELOW VIDEO */}
    <div className="max-w-6xl mx-auto px-6 mt-24 space-y-28">
      <section className="rounded-lg p-10 shadow-lg bg-black/20">
        <AboutUsSection />
      </section>

      <section className="rounded-lg p-10 shadow-lg bg-black/20">
        <CampusMap />
      </section>

      <section className="rounded-lg p-10 shadow-lg bg-black/20">
        <Contact />
      </section>
    </div>

  </main>
</SectionActivationProvider>



  );
}
