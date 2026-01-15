import Gallery, { GallerySection } from "@/components/gallery-component"

const gallerySections: GallerySection[] = [
  {
    images: [
      { src: "/gallery/v2.jpg", alt: "Agneepath event moment" },
    ],
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
      { src: "/gallery/v12.jpg", alt: "Sunset landscape" },
    ],
  },
  {
    images: [
      { src: "/gallery/v14.jpg", alt: "Agneepath event moment" },
    ],
  },
]

export default function GalleryPage() {
  return (
    <>
      <Gallery sections={gallerySections} />

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-[#fefcfb]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-center text-sm text-gray-500">
            Developed by{" "}
            <a
              href="https://github.com/shristi2217"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#242A4A] transition-colors hover:text-[#ff6e1a]"
            >
              Shristi Sharma
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}
