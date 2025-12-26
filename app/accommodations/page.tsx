export default function AccommodationsPage() {
  return (
    <main className="min-h-screen px-6 py-12 md:px-16">
      {/* Header */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Accommodation & Travel</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Travel and accommodation information for participants.
        </p>
      </section>

      {/* Buttons */}
      <section className="flex flex-col items-center gap-6">
        {/* Travel Schedule Button */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-3"> Travel Schedule</h2>
          <p className="text-gray-600 mb-4">
            View arrival and departure details for the event.
          </p>

          <a
            href="https://docs.google.com/spreadsheets/d/1g4IkiOpeFkf-dH0b8FSKZ1uDoicRNHV5rVANyc8ZyYY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-blue-600 px-8 py-3 text-white text-lg font-medium hover:bg-blue-700 transition"
          >
            Open Travel Schedule
          </a>
        </div>

        {/* Accommodation Button */}
        <div className="text-center mt-10">
          <h2 className="text-2xl font-semibold mb-3">
             Accommodation Allotment
          </h2>
          <p className="text-gray-600 mb-4">
            Accommodation details are available in a private sheet.
          </p>

          <a
            href="https://docs.google.com/spreadsheets/d/1g4IkiOpeFkf-dH0b8FSKZ1uDoicRNHV5rVANyc8ZyYY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-black px-8 py-3 text-white text-lg font-medium hover:bg-gray-800 transition"
          >
            Open Accommodation Sheet
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black mt-20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-center text-sm text-gray-400">
            Developed by{" "}
            <a
              href="https://github.com/shristi2217/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-orange-400 hover:underline transition-colors"
            >
              Shristi Sharma
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
