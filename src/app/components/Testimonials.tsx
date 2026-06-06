"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Testimonials.module.css";

interface Review {
  name: string;
  role: string;
  rating: number;
  text: string;
  time: string;
  avatarText: string;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const autoPlayRef = useRef<(() => void) | null>(null);

  const reviews: Review[] = [
    {
      name: "Anne King",
      role: "Verified Google Local Guide",
      rating: 5,
      text: "I had the best pedicure ever yesterday. It lasted for almost 2 hours and involved 10 different types of cremes, masques and oils. Pure Heaven. The service is incredibly generous and detailed.",
      time: "2 months ago",
      avatarText: "AK"
    },
    {
      name: "Akshat",
      role: "Verified Google Customer",
      rating: 5,
      text: "Humble and expert staff experience. Alex is exceptionally professional at his work. He gave me the most relaxing back massage, a perfect hair trim, and a great haircut. Really enjoyed my visit!",
      time: "3 months ago",
      avatarText: "A"
    },
    {
      name: "Sophia J. (via Peace M)",
      role: "Wedding Guest Reviewer",
      rating: 5,
      text: "Had a great experience with nail extensions. Sophia provided excellent service and did a very neat and beautiful job. The salon is clean and hygienic, and the staff is well trained and professional. Highly recommended!",
      time: "3 months ago",
      avatarText: "NJ"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const setIndex = (index: number) => {
    setActiveIndex(index);
  };

  autoPlayRef.current = handleNext;

  useEffect(() => {
    const play = () => {
      if (autoPlayRef.current) {
        autoPlayRef.current();
      }
    };
    const interval = setInterval(play, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className={styles.section}>
      <div className={styles.container}>
        {/* Top Header */}
        <div className={styles.header}>
          <span className={styles.subtitle}>GUEST VOICES</span>
          <h2 className={styles.title}>Beloved by Our <span className="gold-text">Guests</span></h2>
          <p className={styles.description}>
            With an overall rating of 4.8★ and over 379 detailed reviews, we pride ourselves on 
            creating memorable luxury experiences for every guest in Jaipur.
          </p>
        </div>

        {/* Carousel Window */}
        <div className={`${styles.carouselWrapper} glass-panel`}>
          {/* Giant decorative quotation mark */}
          <div className={styles.quoteIcon}>"</div>

          {/* Cards Frame */}
          <div className={styles.carouselTrack}>
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className={`${styles.reviewCard} ${idx === activeIndex ? styles.activeCard : styles.inactiveCard}`}
              >
                {/* 5-Star Row */}
                <div className={styles.starRow}>
                  {"★".repeat(rev.rating).split("").map((s, sIdx) => (
                    <span key={sIdx} className={styles.star}>★</span>
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className={styles.reviewText}>
                  " {rev.text} "
                </blockquote>

                {/* Author Info block */}
                <div className={styles.authorRow}>
                  <div className={`${styles.avatar} gold-border`}>
                    <span>{rev.avatarText}</span>
                  </div>
                  <div className={styles.authorMeta}>
                    <cite className={styles.authorName}>{rev.name}</cite>
                    <span className={styles.authorRole}>{rev.role} • {rev.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            className={`${styles.arrowBtn} ${styles.prevBtn} glass-panel`}
            onClick={handlePrev}
            aria-label="Previous Review"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <button 
            className={`${styles.arrowBtn} ${styles.nextBtn} glass-panel`}
            onClick={handleNext}
            aria-label="Next Review"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className={styles.dotsRow}>
          {reviews.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${idx === activeIndex ? styles.activeDot : ""}`}
              onClick={() => setIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
