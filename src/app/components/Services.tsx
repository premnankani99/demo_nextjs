"use client";

import { useState } from "react";
import styles from "./Services.module.css";

interface ServiceItem {
  name: string;
  price: string;
  duration: string;
  description: string;
  tag?: string;
}

interface CategoryMap {
  [key: string]: ServiceItem[];
}

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<string>("nails");

  const categories = [
    { id: "nails", label: "Nails & Artistry" },
    { id: "hair", label: "Hair & Couture" },
    { id: "spa", label: "Sensory Spa" },
    { id: "bridal", label: "Bridal & Occasion" }
  ];

  const servicesData: CategoryMap = {
    nails: [
      {
        name: "Couture Gel Extensions",
        price: "₹1,999",
        duration: "120 Mins",
        description: "Full-set premium hard gel extensions crafted by Sophia. Choice of classic length, customized shaping, and a glossy, warp-free protective topcoat.",
        tag: "Highly Popular"
      },
      {
        name: "Custom Ombre & Glaze Overlays",
        price: "₹1,499",
        duration: "90 Mins",
        description: "Elegant pastel blends, milky white ombres, and chrome powders hand-rubbed for a high-gloss glazed donut luster.",
        tag: "Trending"
      },
      {
        name: "Signature French Overlay",
        price: "₹1,299",
        duration: "75 Mins",
        description: "Crisp white tips or soft pastel smiles over organic structural gel. A timeless look that lasts up to 4 weeks.",
      },
      {
        name: "Handpainted Art & Rhinestones",
        price: "₹799",
        duration: "45 Mins",
        description: "Detailed handpainted line art, abstract swirls, chrome accents, or 4 signature Swarovski crystals on custom accent nails.",
      }
    ],
    hair: [
      {
        name: "Signature Precision Cut & Blowout",
        price: "₹999",
        duration: "60 Mins",
        description: "A tailored consultation followed by a precision haircut with master stylist Alex. Includes a relaxing stress-relief wash and a signature blowout.",
        tag: "Alex's Specialty"
      },
      {
        name: "Caramel Balayage & Color Melt",
        price: "₹3,499",
        duration: "180 Mins",
        description: "Bespoke handpainted lighteners melted into a glossy caramel chocolate gloss. Restores hydration and leaves hair incredibly shiny.",
        tag: "Signature Service"
      },
      {
        name: "Rejuvenating Keratin Infusion",
        price: "₹2,999",
        duration: "120 Mins",
        description: "Clinical-grade smoothing therapy designed to eliminate frizz and seal layers with botanical proteins. Lasts up to 3 months.",
      },
      {
        name: "Botanical Stress-Relief Scalp Ritual",
        price: "₹1,499",
        duration: "90 Mins",
        description: "Alex's deep-conditioning therapy using organic oils, steam infusion, and a 20-minute relaxing scalp, neck, and shoulder massage.",
      }
    ],
    spa: [
      {
        name: "Pedicure Heaven (10-Step)",
        price: "₹1,799",
        duration: "120 Mins",
        description: "A 2-hour foot ritual involving 10 distinct layers of rich creams, clay masques, hot oils, and a therapeutic massage inside our Chesterfield basins.",
        tag: "Heavenly Experience"
      },
      {
        name: "Ayurvedic Stress-Relief Therapy",
        price: "₹1,299",
        duration: "60 Mins",
        description: "A concentrated back, neck, and shoulder massage using warm organic herbal oils, targeting deep muscle stress.",
      },
      {
        name: "Kesar-Chandan Brightening Facial",
        price: "₹1,999",
        duration: "75 Mins",
        description: "A customized facial using pure fruit enzymes, deep steam extraction, and a calming chilled rosewater and sandalwood hydration masque.",
      },
      {
        name: "Haldi & Ubtan Glow Ritual",
        price: "₹2,499",
        duration: "120 Mins",
        description: "A traditional full-body brightening ritual using turmeric, sandalwood, and gram flour for a flawless bridal glow.",
      }
    ],
    bridal: [
      {
        name: "Signature HD Bridal Makeup",
        price: "₹15,999",
        duration: "180 Mins",
        description: "Flawless HD makeup tailored for Indian brides, complete with luxury lashes, advanced contouring, and long-lasting finish.",
        tag: "Most Requested"
      },
      {
        name: "Haldi / Mehendi Event Look",
        price: "₹7,999",
        duration: "120 Mins",
        description: "A fresh, dewy, and colorful makeup look perfect for daytime wedding festivities. Includes simple hair styling.",
      },
      {
        name: "Pre-Bridal Complete Package",
        price: "₹12,499",
        duration: "3 Days",
        description: "Full body polishing, advanced facial, waxing, spa mani-pedi, and a relaxing massage to prep you for your big day.",
        tag: "Value Package"
      },
      {
        name: "Saree Draping & Hair Styling",
        price: "₹2,499",
        duration: "90 Mins",
        description: "Professional traditional or modern saree draping paired with a floral bun, elegant braid, or bouncy curls.",
      }
    ]
  };

  const handleBookRedirect = (serviceName: string) => {
    // Write preselected service to localStorage and dispatch event
    localStorage.setItem("preselectedService", serviceName);
    window.dispatchEvent(new CustomEvent("preselectService", { detail: serviceName }));
    
    // Smooth scroll to booking section
    const target = document.getElementById("booking");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className={`${styles.section} reveal-section`}>
      <div className={styles.container}>
        {/* Title */}
        <div className={styles.header}>
          <span className={styles.subtitle}>CURATED MENU</span>
          <h2 className={styles.title}>Our Signature <span className="gold-text">Ceremonies</span></h2>
          <p className={styles.description}>
            Explore our curated menu of bespoke beauty offerings. All services are performed by expert 
            technicians in a highly sanitized, peaceful atmosphere using elite product lines.
          </p>
        </div>

        {/* Tab Selection */}
        <div className={styles.tabWrapper}>
          <div className={styles.tabList}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.tabBtn} ${activeCategory === cat.id ? styles.tabActive : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Active Cards Grid */}
        <div className={styles.menuGrid}>
          {servicesData[activeCategory].map((service, index) => (
            <div 
              key={index} 
              className={`${styles.menuCard} glass-panel fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.tag && <span className={styles.cardTag}>{service.tag}</span>}
              
              <div className={styles.cardHeader}>
                <h3 className={styles.serviceName}>{service.name}</h3>
                <span className={styles.servicePrice}>{service.price}</span>
              </div>

              <div className={styles.cardSub}>
                <span className={styles.duration}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  {service.duration}
                </span>
                <span className={styles.hygieneBadge}>autoclave safe</span>
              </div>

              <p className={styles.serviceDesc}>{service.description}</p>

              <button 
                onClick={() => handleBookRedirect(service.name)}
                className={styles.bookBtn}
              >
                Reserve Treatment
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
