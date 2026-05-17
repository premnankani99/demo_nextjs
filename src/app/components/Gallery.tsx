"use client";

import Image from "next/image";
import styles from "./Gallery.module.css";

interface GalleryItem {
  src: string;
  alt: string;
  tag: string;
  title: string;
  desc: string;
}

export default function Gallery() {
  const galleryItems: GalleryItem[] = [
    {
      src: "/images/interior.png",
      alt: "SIT Beauty Studio Turquoise Reception Counter",
      tag: "THE STUDIO SPACE",
      title: "Turquoise Slatted Lobby",
      desc: "Our vibrant signature teal reception lounge crafted with modern slatted wood paneling, circular backlit branding, and warm spotlighting."
    },
    {
      src: "/images/station.png",
      alt: "SIT Beauty Studio Arched Backlit mirrors",
      tag: "styling stations",
      title: "Arched Vanity Mirrors",
      desc: "A bright row of warm LED-backlit arched mirror systems and clean clinical vanity drawers for hair colorings and precision cuts."
    },
    {
      src: "/images/lounge.png",
      alt: "SIT Beauty Studio Chesterfield Pedicure armchairs",
      tag: "pedicure lounge",
      title: "Chesterfield Spa Armchairs",
      desc: "Luxury deep-quilted black leather Chesterfield armchairs overlooking custom black tufted pedicure wash basins."
    },
    {
      src: "/images/nails.png",
      alt: "SIT Beauty Studio Elite gel extensions work",
      tag: "artisan nails",
      title: "Couture Gel Extensions",
      desc: "Immaculate pastel pink gel overlays, hand-sculpted rhinestone attachments, and abstract line art made by Nandini."
    },
    {
      src: "/images/hair.png",
      alt: "SIT Beauty Studio Caramel color melt hair work",
      tag: "hair couture",
      title: "Chocolate Caramel Balayage",
      desc: "Precision custom lighteners melted into signature chocolate caramel layers and finished with a voluminous blowout by Ajay."
    },
    {
      src: "/images/pedicure.png",
      alt: "SIT Beauty Studio copper pedicure setup with marigolds",
      tag: "sensory therapies",
      title: "Rose Petal Copper Soak",
      desc: "Hammered antique-copper pedicure baths filled with warm milk, Epsom mineral salts, and fresh marigold petals."
    }
  ];

  return (
    <section id="gallery" className={styles.section}>
      <div className={styles.container}>
        {/* Header Block */}
        <div className={styles.header}>
          <span className={styles.subtitle}>STUDIO GALLERY & WORK</span>
          <h2 className={styles.title}>Visualizing the <span className="gold-text">Prestige</span></h2>
          <p className={styles.description}>
            A curated lookbook showcasing our clinical, sun-drenched Raja Park interiors and the 
            exquisite hair, nail, and pedicure treatments crafted by our resident artists.
          </p>
        </div>

        {/* Polaroid Asymmetric Masonry Grid */}
        <div className={styles.masonryGrid}>
          {galleryItems.map((item, idx) => (
            <div 
              key={idx} 
              className={`${styles.polaroidCard} fade-in`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={styles.imageWrapper}>
                <Image 
                  src={item.src} 
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.image}
                />
                
                {/* Floating tags */}
                <span className={styles.itemTag}>{item.tag}</span>
              </div>
              
              <div className={styles.cardDetails}>
                <h4 className={styles.cardTitle}>{item.title}</h4>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
