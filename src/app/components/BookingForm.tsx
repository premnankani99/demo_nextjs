"use client";

import React, { useState, useEffect } from "react";
import styles from "./BookingForm.module.css";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "nails-extensions",
    stylist: "no-preference",
    date: "",
    timeSlot: ""
  });

  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);
  const [ticketNumber, setTicketNumber] = useState<string>("");

  useEffect(() => {
    const stored = localStorage.getItem("preselectedService");
    if (stored) {
      mapNameToValue(stored);
      localStorage.removeItem("preselectedService");
    }

    const handlePreselect = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        mapNameToValue(customEvent.detail);
      }
    };

    window.addEventListener("preselectService", handlePreselect);
    return () => window.removeEventListener("preselectService", handlePreselect);
  }, []);

  const mapNameToValue = (name: string) => {
    if (name.includes("Gel Extensions")) {
      setFormData(prev => ({ ...prev, service: "nails-extensions" }));
    } else if (name.includes("Haircut") || name.includes("Cut")) {
      setFormData(prev => ({ ...prev, service: "hair-cut" }));
    } else if (name.includes("Pedicure") || name.includes("Spa")) {
      setFormData(prev => ({ ...prev, service: "spa-pedicure" }));
    } else if (name.includes("Bridal") || name.includes("Makeup") || name.includes("Haldi")) {
      setFormData(prev => ({ ...prev, service: "bridal-makeup" }));
    }
  };

  const timeSlots = [
    "09:30 AM",
    "11:00 AM",
    "12:30 PM",
    "02:30 PM",
    "04:00 PM",
    "05:30 PM",
    "07:00 PM"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const selectTimeSlot = (slot: string) => {
    setFormData(prev => ({ ...prev, timeSlot: slot }));
  };

  const getServiceName = (val: string) => {
    switch(val) {
      case "nails-extensions": return "Couture Gel Extensions";
      case "nails-art": return "Bespoke Custom Nail Art";
      case "hair-cut": return "Signature Haircut & Style";
      case "hair-color": return "Caramel Balayage / Color Melt";
      case "spa-pedicure": return "Pedicure Heaven (10-Step)";
      case "spa-massage": return "Ayurvedic Stress-Relief Therapy";
      case "bridal-makeup": return "Signature HD Bridal Makeup";
      case "bridal-haldi": return "Haldi / Mehendi Event Look";
      default: return "Couture Treatment";
    }
  };

  const getStylistName = (val: string) => {
    switch(val) {
      case "Alex": return "Alex (Master Stylist)";
      case "Sophia": return "Sophia (Nail Artisan)";
      default: return "No Preference (First Available)";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date || !formData.timeSlot) {
      alert("Please fill in all details, date, and preferred time slot.");
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const char = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    setTicketNumber(`LUX-${randomNum}${char}`);
    setBookingSuccess(true);
    
    const section = document.getElementById("booking");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const resetBooking = () => {
    setFormData({
      name: "",
      phone: "",
      service: "nails-extensions",
      stylist: "no-preference",
      date: "",
      timeSlot: ""
    });
    setBookingSuccess(false);
  };

  return (
    <section id="booking" className={`${styles.section} reveal-section`}>
      <div className={styles.container}>
        {!bookingSuccess ? (
          <>
            <div className={styles.formLayout}>
              {/* Left Column: Premium Scheduler Panel */}
              <div className={`${styles.formWrapper} glass-panel`}>
                <span className={styles.formSubtitle}>EXPERIENCE LUXURY</span>
                <h3 className={styles.formTitle}>Request Appointment</h3>

                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="glass-panel"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="glass-panel"
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="service">Desired Service</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="glass-panel"
                      >
                        <option value="nails-extensions">Couture Gel Extensions</option>
                        <option value="nails-art">Bespoke Custom Nail Art</option>
                        <option value="hair-cut">Signature Haircut & Style</option>
                        <option value="hair-color">Caramel Balayage / Color Melt</option>
                        <option value="spa-pedicure">Pedicure Heaven (10-Step)</option>
                        <option value="spa-massage">Ayurvedic Stress-Relief Therapy</option>
                        <option value="bridal-makeup">Signature HD Bridal Makeup</option>
                        <option value="bridal-haldi">Haldi / Mehendi Event Look</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="stylist">Preferred Artist</label>
                      <select
                        id="stylist"
                        name="stylist"
                        value={formData.stylist}
                        onChange={handleInputChange}
                        className="glass-panel"
                      >
                        <option value="no-preference">No Preference (First Available)</option>
                        <option value="Sophia">Sophia (Nail Artisan)</option>
                        <option value="Alex">Alex (Master Stylist)</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="date">Appointment Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="glass-panel"
                    />
                  </div>

                  {/* Time Slots Selector */}
                  <div className={styles.slotsWrapper}>
                    <label>Preferred Time Slot</label>
                    <div className={styles.slotsGrid}>
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          className={`${styles.slotBtn} glass-panel ${
                            formData.timeSlot === slot ? styles.slotActive : ""
                          }`}
                          onClick={() => selectTimeSlot(slot)}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button type="submit" className="gold-button" style={{ width: "100%", marginTop: "1rem" }}>
                    REQUEST RESERVATION
                  </button>
                </form>
              </div>

              {/* Right Column: Contact Details Panel */}
              <div className={styles.contactColumn}>
                <div className={`${styles.studioCard} glass-panel`}>
                  <h4 className={styles.studioCardTitle}>Studio Location & Hours</h4>
                  
                  <div className={styles.contactList}>




                    <div className={styles.contactItem}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      <div>
                        <h5>Working Hours</h5>
                        <p>Open Daily: 9:30 AM — 8:30 PM (Sundays Busy)</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.cardFooter}>
                    <span>Luxe Beauty Studio • C-Scheme, Jaipur</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* CONFIRMATION VOUCHER */
          <div className={`${styles.successContainer} fade-in`}>
            <div className={styles.successHeader}>
              <div className={styles.successIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h3 className={styles.successTitle}>Reservation Requested</h3>
              <p className={styles.successSubtitle}>
                Your styling experience request has been received. Present this digital ticket 
                at our C-Scheme, Jaipur salon reception.
              </p>
            </div>

            {/* Ticket Card */}
            <div className={`${styles.ticketCard} gold-border`}>
              <div className={styles.ticketGlow}></div>
              
              <div className={styles.ticketTop}>
                <div>
                  <span className={styles.ticketLogo}>LUXE</span>
                  <span className={styles.ticketLogoSub}>BEAUTY STUDIO</span>
                </div>
                <div className={styles.ticketStatus}>CONFIRMED PASS</div>
              </div>

              <div className={styles.ticketDivider}>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className={styles.ticketBody}>
                <div className={styles.ticketGrid}>
                  <div className={styles.ticketGroup}>
                    <span className={styles.ticketLabel}>GUEST NAME</span>
                    <span className={styles.ticketValue}>{formData.name}</span>
                  </div>
                  <div className={styles.ticketGroup}>
                    <span className={styles.ticketLabel}>TICKET REF</span>
                    <span className={`${styles.ticketValue} gold-text`}>{ticketNumber}</span>
                  </div>
                  <div className={styles.ticketGroup}>
                    <span className={styles.ticketLabel}>styling treatment</span>
                    <span className={styles.ticketValue}>{getServiceName(formData.service)}</span>
                  </div>
                  <div className={styles.ticketGroup}>
                    <span className={styles.ticketLabel}>stylist artist</span>
                    <span className={styles.ticketValue}>{getStylistName(formData.stylist)}</span>
                  </div>
                  <div className={styles.ticketGroup}>
                    <span className={styles.ticketLabel}>scheduled date</span>
                    <span className={styles.ticketValue}>{formData.date}</span>
                  </div>
                  <div className={styles.ticketGroup}>
                    <span className={styles.ticketLabel}>time slot</span>
                    <span className={styles.ticketValue}>{formData.timeSlot}</span>
                  </div>
                </div>

                <div className={styles.ticketLocation}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>C-Scheme, Jaipur</span>
                </div>
              </div>
            </div>

            <div className={styles.successActions} style={{ marginTop: "2.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
              <button onClick={resetBooking} className="secondary-button">
                BOOK ANOTHER SESSION
              </button>

            </div>
          </div>
        )}
      </div>
    </section>
  );
}
