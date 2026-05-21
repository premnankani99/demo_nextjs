import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import VibeQuiz from "./components/VibeQuiz";

import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      {/* Floating Header */}
      <Navbar />

      {/* Main Experience Layout */}
      <main>
        {/* Parallax Hero section */}
        <Hero />

        {/* Brand Philosophy & Pillars */}
        <Philosophy />

        {/* DEDICATED VISUAL GALLERY GRID (All 6 physical salon images) */}
        <Gallery />

        {/* CURATED SERVICES TAB GRID */}
        <Services />

        {/* BEFORE & AFTER Restorative Visualizer */}
        <BeforeAfterSlider />

        {/* Dynamic VIBE-MATCH Quiz finder */}
        <VibeQuiz />


        {/* Premium Reservation Form Panel */}
        <BookingForm />
      </main>

      {/* Footer & Live Maps location */}
      <Footer />

    </>
  );
}
