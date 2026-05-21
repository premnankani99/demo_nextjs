"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./BeforeAfterSlider.module.css";

export default function BeforeAfterSlider() {
  const [sliderposition, setSliderposition] = useState<number>(50);
  const [containerWidth, setContainerWidth] = useState<number>(500);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef<boolean>(false);

  // ResizeObserver to track container pixel width and prevent image squeezing
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    observer.observe(containerRef.current);
    
    // Set initial width
    setContainerWidth(containerRef.current.getBoundingClientRect().width);

    return () => observer.disconnect();
  }, []);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderposition(position);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      isDragging.current = false;
    };
    window.addEventListener("mouseup", handleGlobalMouseUp);
    window.addEventListener("touchend", handleGlobalMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("touchend", handleGlobalMouseUp);
    };
  }, []);

  return (
    <section id="transformations" className={styles.section}>
      <div className={styles.container}>
        {/* Header Block */}
        <div className={styles.header}>
          <span className={styles.subtitle}>STUDIO TRANSFORMATIONS</span>
          <h2 className={styles.title}>The Art of the <span className="gold-text">Makeover</span></h2>
          <p className={styles.description}>
            Drag the divider to witness how we restore hydration, shine, and flawless color 
            to dry hair, using signature structural glaze treatments at Luxe Beauty Studio.
          </p>
        </div>

        {/* Drag Canvas */}
        <div 
          ref={containerRef}
          className={`${styles.sliderCanvas} gold-border`}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          style={{ "--slider-pos": `${sliderposition}%`, "--container-width": `${containerWidth}px` } as React.CSSProperties}
        >
          {/* AFTER Image (Clean, Radiant Background) */}
          <div className={styles.imageContainer}>
            <Image 
              src="/images/homepic.png" 
              alt="After treatment caramel hair transformation" 
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              priority
              className={styles.image}
            />
            <div className={`${styles.badge} ${styles.afterBadge}`}>AFTER: GLOSS LUSTER</div>
          </div>

          {/* BEFORE Image (Desaturated overlay) */}
          <div className={`${styles.imageContainer} ${styles.beforeContainer}`}>
            <div className={styles.beforeImgWrapper}>
              <Image 
                src="/images/homepic.png" 
                alt="Before treatment dry hair transformation" 
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                priority
                className={`${styles.image} ${styles.beforeImage}`}
              />
            </div>
            <div className={`${styles.badge} ${styles.beforeBadge}`}>BEFORE: DULL & DRY</div>
          </div>

          {/* Drag Divider Bar */}
          <div className={styles.divider}>
            <div className={`${styles.handle} glass-panel`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="8 18 2 12 8 6"/>
                <polyline points="16 6 22 12 16 18"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Dynamic Instructional Pill */}
        <div className={styles.tipRow}>
          <span>ÃƒÂ¢Ã¢â‚¬Â Ã‚Â DRAG TO VISUALIZE ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢</span>
        </div>
      </div>
    </section>
  );
}
