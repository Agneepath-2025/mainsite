import { cn } from "@/lib/utils";
import Image from "next/image";

export type GalleryImage = {
  src: string
  alt: string
}

export type GallerySection = {
  type?: "grid" | undefined
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
                <div key={imageIndex} className="relative h-64 w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="rounded-lg object-cover"
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
