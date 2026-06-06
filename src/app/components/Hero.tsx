"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={`${styles.heroSection} reveal-section`}>
      <div className={styles.container}>
        {/* Left Column: Spacious Editorial Content */}
        <div className={`${styles.textContent} fade-in`}>
          <div className={styles.taglineRow}>
            <span className={styles.goldBadge}>Luxe Beauty Studio • C-Scheme, Jaipur</span>
          </div>
          
          <h1 className={styles.title}>
            Stunning Bridal Makeovers, <br />
            <span className="gold-text">Flawless</span> Nail Art, <br />
            Reimagined.
          </h1>
          
          <p className={styles.subtitle}>
            Welcome to Jaipur's most exclusive sanctuary for exquisite bridal makeup, flawless custom nail artistry, and deeply restorative spa rituals tailored for the modern royal.
          </p>

          <div className={styles.ctas}>
            <a href="#booking" className="gold-button">
              Book Appointment
            </a>
            <a href="#services" className="secondary-button">
              Explore Services
            </a>
          </div>


        </div>

        {/* Right Column: High-Fashion Framing of their Real Salon Interior */}
        <div className={`${styles.visualContent} float-slow`}>
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
