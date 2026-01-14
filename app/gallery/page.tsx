import Gallery from "@/components/gallery-component"

const gallerySections = [
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

const GalleryPage = () => {
  return <Gallery sections={gallerySections} />
}

export default GalleryPage
