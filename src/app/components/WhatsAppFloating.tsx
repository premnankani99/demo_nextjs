"use client";

import { useState } from "react";
import styles from "./WhatsAppFloating.module.css";

export default function WhatsAppFloating() {
  const [hovered, setHovered] = useState(false);

  const whatsappUrl = "https://wa.me/919664471707?text=Hi%20SIT%20Beauty%20Studio%20Jaipur!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20luxury%20session.";

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.floatBtn} whatsapp-pulse-effect`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Inquire on WhatsApp"
    >
      {/* WhatsApp SVG Icon */}
      <svg 
        width="28" 
        height="28" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={styles.icon}
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>

      {/* Floating tooltip bubble */}
      <div className={`${styles.tooltip} ${hovered ? styles.tooltipVisible : ""}`}>
        <span>Chat with SIT Studio</span>
      </div>
    </a>
  );
}
