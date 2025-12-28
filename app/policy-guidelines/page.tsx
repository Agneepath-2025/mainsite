"use client";

import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";

export default function PolicyGuidelinesPage() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[45vh] pt-28 md:pt-32 bg-gradient-to-br from-orange-50 via-white to-yellow-50 flex items-center overflow-hidden">
        <AnimatedHeroBackground />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-orange-600 mb-4">
            Policies & Guidelines
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Please go through the following rules, guidelines, and documents
            carefully before participating.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-8">

          {/* General Guidelines */}
          <div className="border rounded-2xl p-8 bg-orange-50 transition-all duration-300 hover:bg-orange-100 hover:border-orange-400 hover:shadow-md">
            <h2 className="text-2xl font-semibold text-black mb-4">
              General Guidelines
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Participants must carry a valid college ID.</li>
              <li>All events will follow the given schedule strictly.</li>
              <li>Respect fellow participants, volunteers, and officials.</li>
              <li>Misconduct of any kind will lead to disqualification.</li>
            </ul>
          </div>

          {/* Code of Conduct */}
          <div className="border rounded-2xl p-8 bg-orange-50 transition-all duration-300 hover:bg-orange-100 hover:border-orange-400 hover:shadow-md">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Code of Conduct (CoC)
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Maintain discipline and professionalism at all venues.</li>
              <li>Alcohol, drugs, or prohibited substances are strictly banned.</li>
              <li>Any damage to property will be penalized.</li>
              <li>Decisions taken by the organizing committee are final.</li>
            </ul>
          </div>

          {/* Sports Guidelines */}
          <div className="border rounded-2xl p-8 bg-orange-50 transition-all duration-300 hover:bg-orange-100 hover:border-orange-400 hover:shadow-md">
            <h2 className="text-2xl font-semibold text-black mb-3">
              Sports-Specific Guidelines
            </h2>
            <p className="text-gray-600 mb-6">
              Detailed sport-wise rules and guidelines are available in the brochure.
            </p>
            <a
              href="/docs/sports-guidelines.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 transition"
            >
              View Sports Guidelines
            </a>
          </div>

          {/* Rulebook */}
          <div className="border rounded-2xl p-8 bg-orange-50 transition-all duration-300 hover:bg-orange-100 hover:border-orange-400 hover:shadow-md">
            <h2 className="text-2xl font-semibold text-black mb-3">
              Rulebook
            </h2>
            <p className="text-gray-600 mb-6">
              The complete rulebook for all events can be accessed below.
            </p>
            <a
              href="/docs/rulebook.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 transition"
            >
              Open Rulebook
            </a>
          </div>

          {/* Terms & Conditions */}
          <div className="border rounded-2xl p-8 bg-orange-50 transition-all duration-300 hover:bg-orange-100 hover:border-orange-400 hover:shadow-md">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Terms & Conditions
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Registration fees are non-refundable.</li>
              <li>Participants are responsible for their personal belongings.</li>
              <li>The organizers reserve the right to make changes if required.</li>
            </ul>
          </div>

          {/* FAQs */}
          <div className="border rounded-2xl p-8 bg-orange-50 transition-all duration-300 hover:bg-orange-100 hover:border-orange-400 hover:shadow-md">
            <h2 className="text-2xl font-semibold text-black mb-4">
              FAQs
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Q:</strong> Is accommodation provided?
                <br />
                <strong>A:</strong> Yes, accommodation details are available on the Accommodation page.
              </li>
              <li>
                <strong>Q:</strong> Can rules change?
                <br />
                <strong>A:</strong> Yes, organizers may update rules if necessary.
              </li>
            </ul>
          </div>

        </div>
      </section>
    </main>
  );
}
