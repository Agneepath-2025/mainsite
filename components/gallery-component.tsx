import Image from "next/image"

type GalleryImage = {
  src: string
  alt: string
}

export type GallerySection = {
  type?: "grid"
  images: GalleryImage[]
}

const Gallery = ({ sections = [] }: { sections?: GallerySection[] }) => {
  return (
    <section className="py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24 flex flex-col items-center">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            GALLERY
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Moments captured from previous Agneepath events.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className={
                section.type === "grid"
                  ? "grid grid-cols-2 gap-6"
                  : "flex flex-col gap-6"
              }
            >
              {section.images.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className="relative w-full overflow-hidden rounded-lg"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={800}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect fill='%23f5f5f5' width='1200' height='800'/%3E%3C/svg%3E"
                    className="w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>

      
    </section>
    
  )
}

export default Gallery
