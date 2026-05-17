"use client";

import { useState } from "react";
import styles from "./VibeQuiz.module.css";

interface Question {
  id: number;
  questionText: string;
  choices: {
    text: string;
    points: { nails: number; hair: number; spa: number };
  }[];
}

interface Score {
  nails: number;
  hair: number;
  spa: number;
}

export default function VibeQuiz() {
  const [step, setStep] = useState<number>(0); // 0: Intro, 1-3: Questions, 4: Result
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [score, setScore] = useState<Score>({ nails: 0, hair: 0, spa: 0 });
  const [selectedChoiceIdx, setSelectedChoiceIdx] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      questionText: "What is your primary beauty objective for this salon visit?",
      choices: [
        {
          text: "Immaculate, long-lasting nails that act as a bold accessory.",
          points: { nails: 3, hair: 0, spa: 0 }
        },
        {
          text: "A dramatic hair makeover, rich caramel tones, or a precision haircut.",
          points: { nails: 0, hair: 3, spa: 0 }
        },
        {
          text: "Deep, sensory detaching and absolute stress relief.",
          points: { nails: 0, hair: 0, spa: 3 }
        }
      ]
    },
    {
      id: 2,
      questionText: "What is the key inspiration for your desired aesthetic?",
      choices: [
        {
          text: "High-contrast editorial glamour, Swarovski crystals, and glossy finishes.",
          points: { nails: 2, hair: 1, spa: 0 }
        },
        {
          text: "Understated, quiet luxury, soft layers, and neutral-nude tones.",
          points: { nails: 1, hair: 2, spa: 1 }
        },
        {
          text: "Natural botanical wellness, organic oils, and warm water marigold foot baths.",
          points: { nails: 0, hair: 0, spa: 3 }
        }
      ]
    },
    {
      id: 3,
      questionText: "Which environment matches your definition of absolute luxury?",
      choices: [
        {
          text: "A chic, vibrant metropolitan loft with glowing mirrors and curated beats.",
          points: { nails: 2, hair: 2, spa: 0 }
        },
        {
          text: "A sun-drenched beachside boutique filled with warm linens and fresh breeze.",
          points: { nails: 1, hair: 1, spa: 2 }
        },
        {
          text: "A serene, silent sanctuary in nature, scented with rosewater and cedar.",
          points: { nails: 0, hair: 0, spa: 3 }
        }
      ]
    }
  ];

  const handleStart = () => {
    setStep(1);
    setCurrentQIndex(0);
    setScore({ nails: 0, hair: 0, spa: 0 });
    setSelectedChoiceIdx(null);
  };

  const handleChoiceSelect = (choiceIdx: number) => {
    setSelectedChoiceIdx(choiceIdx);
  };

  const handleNext = () => {
    if (selectedChoiceIdx === null) return;

    // Aggregate score
    const points = questions[currentQIndex].choices[selectedChoiceIdx].points;
    setScore((prev) => ({
      nails: prev.nails + points.nails,
      hair: prev.hair + points.hair,
      spa: prev.spa + points.spa
    }));

    // Transition state
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
      setSelectedChoiceIdx(null);
    } else {
      setStep(2); // Result phase
    }
  };

  const getPersona = () => {
    const { nails, hair, spa } = score;
    const maxVal = Math.max(nails, hair, spa);

    if (maxVal === nails) {
      return {
        title: "The Glamour Icon",
        package: "Couture Gel Extensions & Custom Art",
        description: "You thrive on meticulous details and view beauty as a bold form of self-expression. You deserve custom gel extensions layered with exquisite chrome glazes and Swarovski crystals hand-sculpted by Nandini.",
        treatments: ["Couture Gel Extensions (120 Mins)", "Custom Ombre & Chrome Glaze (90 Mins)"]
      };
    } else if (maxVal === hair) {
      return {
        title: "The Timeless Royal",
        package: "Signature Precision Cut & Caramel Balayage",
        description: "You appreciate classic structures combined with high-fashion textures. You deserve a precision haircut and caramel balayage melt by Ajay, restoring glossy layers and vibrant bounce to your hair.",
        treatments: ["Signature Cut & Blowout (60 Mins)", "Caramel Balayage Melt (180 Mins)"]
      };
    } else {
      return {
        title: "The Zen Indulgent",
        package: "10-Step Pedicure Heaven & Scalp Ritual",
        description: "Your priority is sensory renewal, quiet solitude, and physical decompression. Treat yourself to our legendary 10-step pedicure heaven in our black tufted leather Chesterfield armchairs, paired with Ajay's botanical scalp spa.",
        treatments: ["Pedicure Heaven (120 Mins)", "Botanical Scalp Spa & Massage (90 Mins)"]
      };
    }
  };

  const handlePreFillBooking = (packageName: string) => {
    // Write preselected service to localStorage and dispatch event
    localStorage.setItem("preselectedService", packageName);
    window.dispatchEvent(new CustomEvent("preselectService", { detail: packageName }));
    
    // Smooth scroll to booking section
    const target = document.getElementById("booking");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const persona = getPersona();

  return (
    <section id="vibe-quiz" className={styles.section}>
      <div className={styles.container}>
        {step === 0 && (
          /* STEP 0: INTRO SCREEN */
          <div className={`${styles.card} glass-panel fade-in`}>
            <span className={styles.subtitle}>PERSONAL ADVISOR</span>
            <h2 className={styles.title}>Match Your <span className="gold-text">Vibe</span></h2>
            <p className={styles.description}>
              Unsure which boutique treatment fits your current style objectives? 
              Answer three curated questions to discover your custom salon persona and receive 
              a tailored recommendation from our master artists.
            </p>
            <button onClick={handleStart} className="gold-button">
              BEGIN STYLE CONSULTATION
            </button>
          </div>
        )}

        {step === 1 && (
          /* STEP 1: ACTIVE QUESTIONS CARD */
          <div className={`${styles.card} glass-panel fade-in`}>
            <div className={styles.progressRow}>
              <span>QUESTION {currentQIndex + 1} OF {questions.length}</span>
              <div className={styles.progressBar}>
                <div 
                  className={styles.progressFill} 
                  style={{ width: `${((currentQIndex + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <h3 className={styles.questionTitle}>
              {questions[currentQIndex].questionText}
            </h3>

            <div className={styles.choicesList}>
              {questions[currentQIndex].choices.map((choice, idx) => (
                <button
                  key={idx}
                  className={`${styles.choiceBtn} ${selectedChoiceIdx === idx ? styles.choiceSelected : ""}`}
                  onClick={() => handleChoiceSelect(idx)}
                >
                  <span className={styles.choiceMarker}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className={styles.choiceText}>{choice.text}</span>
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={selectedChoiceIdx === null}
              className={`${styles.nextBtn} gold-button`}
              style={{ opacity: selectedChoiceIdx === null ? 0.5 : 1, width: "100%", marginTop: "1rem" }}
            >
              CONTINUE CONSULTATION
            </button>
          </div>
        )}

        {step === 2 && (
          /* STEP 2: BEAUTIFUL RESULT DECK */
          <div className={`${styles.resultCard} glass-panel fade-in`}>
            <span className={styles.subtitle}>YOUR STYLE ARCHETYPE</span>
            <h2 className={styles.resultTitle}>{persona.title}</h2>
            
            <p className={styles.resultDesc}>
              {persona.description}
            </p>

            <div className={`${styles.recommendationBox} gold-border`}>
              <span className={styles.boxTag}>RECOMMENDED EXPERIENCE</span>
              <h4 className={styles.boxTitle}>{persona.package}</h4>
              
              <ul className={styles.boxList}>
                {persona.treatments.map((t, idx) => (
                  <li key={idx} className={styles.boxListItem}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.resultActions}>
              <button 
                onClick={() => handlePreFillBooking(persona.package)}
                className="gold-button"
              >
                PRE-FILL APPOINTMENT BOOKING
              </button>
              <button 
                onClick={handleStart}
                className="secondary-button"
              >
                RETAKE STYLE QUIZ
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
