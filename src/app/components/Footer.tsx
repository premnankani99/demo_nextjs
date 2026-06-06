"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer} reveal-section`}>
      <div className={styles.container}>
        
        {/* Left Column: Brand Statement & Map */}
        <div className={styles.brandColumn}>
          <div className={styles.brandHeader}>
            <span className={styles.logoText}>LUXE</span>
            <span className={styles.logoSub}>BEAUTY STUDIO</span>
          </div>
          <p className={styles.brandDesc}>
            Jaipur's premier beauty studio offering couture hair design, impeccable nail extensions, 
            and restorative luxury treatments. We craft personalized ceremonies of self-care.
          </p>

        </div>

        {/* Center Column: Quick Navigation Links */}
        <div className={styles.linksColumn}>
          <h4 className={styles.colTitle}>The Experience</h4>
          <nav className={styles.nav}>
            <a href="#philosophy" className={styles.link}>The Studio</a>
            <a href="#services" className={styles.link}>Services</a>
            <a href="#gallery" className={styles.link}>Gallery</a>
            <a href="#vibe-quiz" className={styles.link}>Style Quiz</a>
            <a href="#reviews" className={styles.link}>Reviews</a>
            <a href="#booking" className={styles.link}>Book Now</a>
          </nav>
        </div>

        {/* Right Column: Contact Details */}
        <div className={styles.contactColumn}>
          <h4 className={styles.colTitle}>Visit the Studio</h4>
          
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>LOCATION</span>
            <p className={styles.contactText}>C-Scheme, Jaipur</p>
          </div>

          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>DAILY HOURS</span>
            <p className={styles.contactText}>9:30 AM — 8:30 PM (Daily)</p>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className={styles.copyrightBar}>
        <div className={styles.copyrightContainer}>
          <p>© {new Date().getFullYear()} Luxe Beauty Studio. All Rights Reserved.</p>
          <p className={styles.designerCredit}>
            Designed with <span className={styles.heart}>♥</span> for luxury & prestige
          </p>
        </div>
      </div>
    </footer>
  );
}
