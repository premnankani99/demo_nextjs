"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Left Column: Brand Statement & Map */}
        <div className={styles.brandColumn}>
          <div className={styles.brandHeader}>
            <span className={styles.logoText}>SIT</span>
            <span className={styles.logoSub}>BEAUTY STUDIO</span>
          </div>
          <p className={styles.brandDesc}>
            Jaipur’s premier beauty studio offering couture hair design, impeccable nail extensions, 
            and restorative luxury treatments. We craft personalized ceremonies of self-care.
          </p>

          {/* Interactive Google Map Embed */}
          <div className={`${styles.mapContainer} gold-border`}>
            <iframe
              src="https://maps.google.com/maps?q=SIT%20Beauty%20Studio%20Raja%20Park%20Jaipur&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SIT Beauty Studio Google Maps Location"
            ></iframe>
          </div>
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
            <span className={styles.contactLabel}>STUDIO ADDRESS</span>
            <p className={styles.contactText}>
              404, Gali Number 2, Raja Park, <br />
              Jaipur, Rajasthan 302004
            </p>
          </div>

          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>HOTLINE RESERVATION</span>
            <p className={styles.contactPhone}>096644 71707</p>
          </div>

          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>DAILY HOURS</span>
            <p className={styles.contactText}>9:30 AM – 8:30 PM (Daily)</p>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className={styles.copyrightBar}>
        <div className={styles.copyrightContainer}>
          <p>© {new Date().getFullYear()} SIT Beauty Studio. All Rights Reserved.</p>
          <p className={styles.designerCredit}>
            Designed with <span className={styles.heart}>♥</span> for luxury & prestige
          </p>
        </div>
      </div>
    </footer>
  );
}
