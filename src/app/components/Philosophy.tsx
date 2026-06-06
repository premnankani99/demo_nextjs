"use client";

import Image from "next/image";
import styles from "./Philosophy.module.css";

export default function Philosophy() {
  return (
    <section id="philosophy" className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Column: Asymmetrical Polaroid Spaces Grid */}
        <div className={styles.visualColumn}>
          <div className={styles.spacesGrid}>
            
            {/* Polaroid 1: Styling Station */}
            <div className={styles.cardFrame}>
              <div className={styles.imageWrapper}>
                <Image 
                  src="/images/station.png" 
                  alt="Luxe Beauty Studio Styling Stations"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={styles.image}
                  priority
                />
              </div>
              <div className={`${styles.captionCard} glass-panel`}>
                <span className={styles.captionTag}>THE VANITIES</span>
                <p className={styles.captionText}>Warm backlit arched mirrors & dark leather chairs.</p>
              </div>
            </div>

            {/* Polaroid 2: Pedicure Lounge */}
            <div className={styles.cardFrame}>
              <div className={styles.imageWrapper}>
                <Image 
                  src="/images/lounge.png" 
                  alt="Luxe Beauty Studio Pedicure Lounge"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={styles.image}
                />
              </div>
              <div className={`${styles.captionCard} glass-panel`}>
                <span className={styles.captionTag}>THE SPA SANCTUARY</span>
                <p className={styles.captionText}>Black tufted Chesterfield basins filled with fresh marigolds.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Original Editorial Philosophy & Checklist */}
        <div className={styles.copyColumn}>
          <span className={styles.subtitle}>ABOUT Luxe Beauty Studio</span>
          <h2 className={styles.title}>Luxury & <span className="gold-text">Clinical Hygiene</span></h2>
          
          <p className={styles.introParagraph}>
            At Luxe Beauty Studio, we believe self-care is a sacred ceremony, not a checklist. 
            Located in the premium district of C-Scheme, Jaipur, our boutique space is bathed in warm, airy 
            light and meticulously designed to offer a peaceful sanctuary from the city's busy noise.
          </p>
          
          <p className={styles.introParagraph}>
            We pride ourselves on an uncompromising approach to hygiene. All nail clippers, cuticle 
            pushers, and hair shears undergo medical-grade vacuum autoclave sterilization and are 
            unsealed directly in front of you.
          </p>

          {/* Original Beautiful Checklist Grid */}
          <div className={styles.checklist}>
            
            <div className={styles.checkItem}>
              <div className={styles.checkIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <div className={styles.checkContent}>
                <h4>Sterilized Tool Autoclaves</h4>
                <p>100% sterile tools opened from sealed medical pouches for every single manicure and pedicure.</p>
              </div>
            </div>

            <div className={styles.checkItem}>
              <div className={styles.checkIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <div className={styles.checkContent}>
                <h4>Artisan Hair Couture by Alex</h4>
                <p>Signature custom styling, precision hair coloring, and relaxing hot-oil hair rituals.</p>
              </div>
            </div>

            <div className={styles.checkItem}>
              <div className={styles.checkIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <div className={styles.checkContent}>
                <h4>Nail Art & Extensions by Sophia</h4>
                <p>Highly neat, flawless gel extensions, detailed ombre overlays, and custom gems.</p>
              </div>
            </div>

            <div className={styles.checkItem}>
              <div className={styles.checkIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <div className={styles.checkContent}>
                <h4>Quilted Chesterfield Pedicure Lounge</h4>
                <p>Sink into luxury armchairs and custom black tufted leather basins filled with marigolds.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
