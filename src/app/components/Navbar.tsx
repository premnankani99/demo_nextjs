"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Apply default bright teal theme class
  useEffect(() => {
    document.documentElement.className = "";
    document.documentElement.classList.add("theme-teal");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""} glass-panel`}>
      <div className={styles.container}>
        {/* Elegant Logo */}
        <a href="#" className={styles.logoContainer} onClick={closeMobileMenu}>
          <span className={styles.logoText}>SIT</span>
          <span className={styles.logoSubtitle}>BEAUTY STUDIO</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className={styles.desktopNav}>
          <a href="#philosophy" className={styles.navLink}>The Studio</a>
          <a href="#services" className={styles.navLink}>Services</a>
          <a href="#gallery" className={styles.navLink}>Gallery</a>
          <a href="#vibe-quiz" className={styles.navLink}>Style Quiz</a>
          <a href="#reviews" className={styles.navLink}>Reviews</a>
          


          <a href="#booking" className="gold-button">Book Now</a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button 
          className={`${styles.mobileToggle} ${mobileMenuOpen ? styles.active : ""}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.open : ""} glass-panel`}>
        <nav className={styles.mobileNav}>
          <a href="#philosophy" className={styles.mobileNavLink} onClick={closeMobileMenu}>The Studio</a>
          <a href="#services" className={styles.mobileNavLink} onClick={closeMobileMenu}>Services</a>
          <a href="#gallery" className={styles.mobileNavLink} onClick={closeMobileMenu}>Gallery</a>
          <a href="#vibe-quiz" className={styles.mobileNavLink} onClick={closeMobileMenu}>Style Quiz</a>
          <a href="#reviews" className={styles.mobileNavLink} onClick={closeMobileMenu}>Reviews</a>
          


          <a href="#booking" className="gold-button" onClick={closeMobileMenu}>Book Now</a>
        </nav>
      </div>
    </header>
  );
}
