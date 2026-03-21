import React, { useEffect } from "react";
import Lenis from "lenis";
import NavBar from "../Component/NavBar";
import Main from "../Component/Main";
import Courses from "../Component/Courses";
import Marquee from "../Component/Marquee";
import Reviews from "../Component/Reviews";
import About from "../Component/About";
import WhyChoose from "../Component/WhyChoose";
import Footer from "../Component/Footer";
import SapProgram from "../Component/SapProgram";

/**
 * App Component - Main application container
 *
 * Theme: Light background with brand colors
 * - Primary Dark:  #003462 (navy blue)
 * - Primary Light: #0672ba (bright blue)
 *
 * Features:
 * - Lenis smooth scrolling for enhanced UX
 */
const Home = () => {
  const whatsappNumber = "919959431136";
  const whatsappMessage = encodeURIComponent(
    "Hii GMIT, I need help or assistance."
  );

  // Initialize Lenis smooth scrolling with optimized settings
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      wheelMultiplier: 1,
      lerp: 0.1,
      infinite: false,
    });

    // Animation frame loop for Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <NavBar />
      <Main />
      <Marquee />
      <SapProgram />
      <Courses />
      <Reviews />
      <About />
      <WhyChoose />
      <Footer />
      {/* WhatsApp Floating Button with Animation */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-100 bg-green-500 hover:bg-green-600 rounded-full shadow-lg border-2 border-white flex items-center justify-center transition-all duration-300 animate-popup w-12 h-12 sm:w-13 sm:h-13 cursor-pointer"
        aria-label="Chat on WhatsApp"
        style={{ minWidth: 44, minHeight: 44 }}
      >
        <i className="ri-whatsapp-line text-white text-3xl sm:text-4xl"></i>
      </a>
    </>
  );
};

export default Home;
