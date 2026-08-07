import Image from "next/image";

const GALLERY_ITEMS = [
  // COLUMN 1 ITEMS
  { src: "/assets/image_15.jpg", alt: "* Gloria", caption: "* Gloria", aspectRatio: "1.0" },
  { src: "/assets/image_20.jpg", alt: "Wavy brown hair styling", caption: "", aspectRatio: "0.75" },

  // COLUMN 2 ITEMS
  { src: "/assets/image_16.jpg", alt: "* Jeanine", caption: "* Jeanine", aspectRatio: "0.72" },
  { src: "/assets/image_19.jpg", alt: "Male hair stylist close-up", caption: "", aspectRatio: "1.0" },

  // COLUMN 3 ITEMS
  { src: "/assets/image_17.jpg", alt: "* Marisol", caption: "* Marisol", aspectRatio: "1.0" },
  { src: "/assets/image_21.jpg", alt: "Golden hair pony styling", caption: "", aspectRatio: "0.75" },

  // COLUMN 4 ITEMS
  { src: "/assets/image_18.jpg", alt: "Stylist curling client hair", caption: "", aspectRatio: "1.45" },
  { src: "/assets/image_22.jpg", alt: "Salon checkerboard interior", caption: "", aspectRatio: "1.45" },
  { src: "/assets/image_23.jpg", alt: "Blonde hair model waves", caption: "", aspectRatio: "0.75" },
];

export default function GalleryPage() {
  return (
    <div className="gallery-page">
      <div className="gallery-masonry-grid">
        {GALLERY_ITEMS.map((item, idx) => (
          <div key={idx} className="gallery-card">
            <div className="gallery-card-img-wrapper" style={{ aspectRatio: item.aspectRatio }}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 400px"
                className="gallery-img"
              />
            </div>
            {item.caption && (
              <figcaption className="gallery-caption">
                {item.caption}
              </figcaption>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
