"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Left Column: Spacious Editorial Content */}
        <div className={`${styles.textContent} fade-in`}>
          <div className={styles.taglineRow}>
            <span className={styles.goldBadge}>Luxe Beauty Studio â€¢ Downtown Metro</span>
          </div>
          
          <h1 className={styles.title}>
            Timeless Hair, <br />
            <span className="gold-text">Flawless</span> Nails, <br />
            Reimagined.
          </h1>
          
          <p className={styles.subtitle}>
            Welcome to Metropolisâ€™s sun-drenched sanctuary for boutique hair couture, 
            flawless custom nail extensions, and deeply restorative spa rituals. 
            An award-winning 4.8â˜… standard of absolute perfection.
          </p>

          <div className={styles.ctas}>
            <a href="#booking" className="gold-button">
              Book Appointment
            </a>
            <a href="#services" className="secondary-button">
              Explore Services
            </a>
          </div>

          {/* Clean Trust Card */}
          <div className={styles.trustRow}>
            <div className={styles.starCol}>
              {"â˜…".repeat(5).split("").map((star, idx) => (
                <span key={idx} className={styles.star}>â˜…</span>
              ))}
            </div>
            <div className={styles.trustText}>
              <strong>4.8 Rating</strong> based on 379+ Verified Google Reviews
            </div>
          </div>
        </div>

        {/* Right Column: High-Fashion Framing of their Real Salon Interior */}
        <div className={styles.visualContent}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/homepic.png" 
              alt="Luxe Beauty Studio Teal Reception Lobby" 
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={styles.heroImage}
            />
            {/* Soft Backlit glow block simulating their arched mirrors */}
            <div className={styles.backlightGlow}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
