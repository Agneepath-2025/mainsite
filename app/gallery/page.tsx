import Gallery, { GallerySection } from "@/components/gallery-component"

const gallerySections: GallerySection[] = [
  {
    images: [{ src: "/gallery/v2.jpg", alt: "Agneepath event moment" }],
  },
  {
    type: "grid",
    images: [
      { src: "/gallery/v9.jpg", alt: "Agneepath event moment" },
      { src: "/gallery/v4.jpg", alt: "Agneepath event moment" },
      { src: "/gallery/v5.jpg", alt: "Agneepath event moment" },
      { src: "/gallery/v11.jpg", alt: "Agneepath event moment" },
    ],
  },
  {
    type: "grid",
    images: [
      { src: "/gallery/v7.jpg", alt: "Agneepath event moment" },
      { src: "/gallery/v6.jpg", alt: "Agneepath event moment" },
      { src: "/gallery/v10.jpg", alt: "Agneepath event moment" },
      { src: "/gallery/v12.jpg", alt: "Agneepath event moment" },
    ],
  },
  {
    images: [{ src: "/gallery/v14.jpg", alt: "Agneepath event moment" }],
  },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fefcfb]">
      
      {/* PAGE CONTENT */}
      <main className="flex-grow">
        <Gallery sections={gallerySections} />
      </main>

      {/* FOOTER */}
      <footer className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-center text-sm text-gray-500">
            Developed by{" "}
            <span className="font-semibold text-[#242A4A]">
              Shristi Sharma
            </span>
          </p>
        </div>
      </footer>

    </div>
  )
}
