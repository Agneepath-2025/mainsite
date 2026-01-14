import { cn } from "@/lib/utils"

export type GalleryImage = {
  src: string
  alt: string
}

export type GallerySection = {
  type?: "grid"
  images: GalleryImage[]
}

const Gallery = ({ sections }: { sections: GallerySection[] }) => {
  return (
    <section className="py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
       <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
  <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
    GALLERY
  </h2>
  <p className="text-lg text-muted-foreground md:text-xl">
    Moments captured from previous Agneepath events.
  </p>
</div>

        {/* Gallery Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className={cn(
                section.type === "grid" && "grid grid-cols-2 gap-6"
              )}
            >
              {section.images.map((image, imageIndex) => (
                <img
                  key={imageIndex}
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full rounded-lg object-cover"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
