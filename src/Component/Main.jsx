import React from "react";
import { motion } from "framer-motion";
import studentImg from "../assets/student2.png";
import { useNavigate } from "react-router-dom";

/**
 * Main Hero Section Component
 *
 * Features:
 * - Grid background with light gradient overlay
 * - Brand colors: #003563 (primary dark), #0097dc (primary light)
 * - Decorative blur elements for visual interest
 */
const Main = () => {
  const navigate = useNavigate();
  const orbitBadges = [
    {
      key: "facebook",
      icon: "ri-facebook-fill",
      label: "FB",
      href: "#",
      badgeClassName: "bg-white text-blue-600 shadow-blue-200/60",
      labelName: "Facebook",
      orbitSize: "74%",
      offset: "-9.8rem",
      duration: "28s",
      angle: "24deg",
    },
    {
      key: "instagram",
      icon: "ri-instagram-line",
      label: "1k+",
      href: "https://www.instagram.com/gmit.in?utm_source=qr&igsh=MXRxdXdwM2p4M25mag==",
      badgeClassName: "bg-white text-pink-500 shadow-pink-200/60",
      labelName: "Instagram",
      orbitSize: "92%",
      offset: "-12.1rem",
      duration: "20s",
      angle: "-40deg",
    },
    {
      key: "linkedin",
      icon: "ri-linkedin-fill",
      label: "22k+",
      href: "https://www.linkedin.com/company/gmitin/",
      badgeClassName: "bg-white text-sky-600 shadow-sky-200/60",
      labelName: "LinkedIn",
      orbitSize: "110%",
      offset: "-14.5rem",
      duration: "24s",
      angle: "60deg",
    },
    {
      key: "youtube",
      icon: "ri-youtube-fill",
      label: "9.5k+",
      href: "#",
      badgeClassName: "bg-white text-red-500 shadow-red-200/60",
      labelName: "YouTube",
      orbitSize: "128%",
      offset: "-16.9rem",
      duration: "22s",
      angle: "154deg",
    },
  ];

  return (
    <section
      className="w-full min-h-screen relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #dff1ff 0%, #cfeaff 45%, #eaf6ff 100%)",
      }}
    >
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0, 151, 220, 0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Top-left color blob */}
      <div
        className="absolute -top-32 -left-32 w-125 h-125 rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(0, 151, 220, 0.18)" }}
      />
      {/* Bottom-right color blob */}
      <div
        className="absolute -bottom-24 -right-24 w-100 h-100 rounded-full blur-[80px] pointer-events-none"
        style={{ background: "rgba(0, 151, 220, 0.14)" }}
      />

      {/* Bottom fade to white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(234,246,255,0.84) 60%, rgba(234,246,255,1) 100%)",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 w-full min-h-screen flex items-center px-6 lg:px-20 pt-6">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="flex items-center gap-2 mt-20 lg:mt-0 mb-7 "
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-1.5 sm:gap-2 bg-brand-dark/8 border border-brand-dark/15 text-brand-dark text-[10px] sm:text-xs font-bold tracking-[0.05em] sm:tracking-[0.1em] lg:tracking-[0.2em] uppercase px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex-wrap justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
                Training{" "}
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>{" "}
                Placement{" "}
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>{" "}
                Projects
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Master SAP &amp; Tech{" "}
              <span className="relative whitespace-nowrap">
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 300 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 6C60 2 120 1 150 1C180 1 240 2 298 6"
                    stroke="#0097dc"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-brand-accent">With Experts</span>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-slate-500 text-base md:text-lg max-w-xl leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Join a growing community of students preparing for real-world tech
              careers at GMIT India's most trusted SAP training platform.
            </motion.p>

            {/* Avatars + Social Proof */}
            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex -space-x-3">
                {[
                  "https://randomuser.me/api/portraits/men/32.jpg",
                  "https://randomuser.me/api/portraits/women/44.jpg",
                  "https://randomuser.me/api/portraits/men/86.jpg",
                  "https://randomuser.me/api/portraits/women/68.jpg",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Student"
                    className="w-9 h-9 rounded-full border-2 border-white shadow-sm"
                  />
                ))}
              </div>
              <div className="text-sm">
                <span className="text-brand-dark font-extrabold">10k+</span>
                <span className="text-slate-500"> students enrolled</span>
              </div>
            </motion.div>

            {/* Quick stats strip */}
            <motion.div
              className="flex flex-wrap gap-3 mb-9"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                { icon: "ri-graduation-cap-line", text: "500+ Placed" },
                { icon: "ri-book-open-line", text: "6+ Programs" },
                { icon: "ri-shield-check-line", text: "100% Certified" },
              ].map(({ icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-full"
                >
                  <i className={`${icon} text-brand-accent`}></i>
                  {text}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                className="bg-brand-dark hover:bg-brand-accent text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-dark/25 flex items-center gap-2 text-base"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  window.dispatchEvent(new Event("open-login-modal"))
                }
              >
                Get Started
                <i className="ri-arrow-right-line"></i>
              </motion.button>
              <motion.button
                className="border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-base"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/courses")}
              >
                Browse Courses
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side” Student Image */}
          <motion.div
            className="flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-lg min-h-[28rem] sm:min-h-[34rem] flex items-end justify-center">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-[18rem] h-[18rem] sm:w-[24rem] sm:h-[24rem]">
                  <div className="absolute inset-[12%] rounded-full border border-brand-accent/26" />
                  <div className="absolute inset-[-2%] rounded-full border border-brand-accent/23" />
                  <div className="absolute -inset-[16%] rounded-full border border-brand-accent/20" />
                  <div className="absolute -inset-[30%] rounded-full border border-brand-accent/16" />
                  <div
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, #003462 1px, transparent 1px)",
                      backgroundSize: "9px 9px",
                      maskImage:
                        "radial-gradient(circle at center, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.45) 55%, transparent 76%)",
                    }}
                  />
                  <div className="absolute top-[22%] left-[18%] w-3 h-3 rounded-full bg-sky-300 shadow-[0_0_18px_rgba(125,211,252,0.8)]" />
                  <div className="absolute top-[62%] left-[26%] w-2.5 h-2.5 rounded-full bg-yellow-300 shadow-[0_0_16px_rgba(253,224,71,0.8)]" />
                  <div className="absolute top-[38%] right-[12%] w-3 h-3 rounded-full bg-rose-400 shadow-[0_0_18px_rgba(251,113,133,0.7)]" />
                  <div className="absolute bottom-[18%] left-[46%] w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]" />
                  <div className="absolute top-[49%] left-[29%] w-5 h-5 rounded-md border border-amber-300/70 bg-amber-200/15 rotate-12" />
                </div>
              </div>

              <div className="absolute left-0 top-1/2 -translate-y-1/2 rounded-[1.75rem] bg-white/70 backdrop-blur-md border border-white/80 shadow-xl px-5 py-4 max-w-[15rem] sm:max-w-[16rem]">
                <p className="text-sm sm:text-base italic text-brand-dark leading-relaxed">
                  Trusted by 25K daily active learners and 5,000+ successful
                  enrolments.
                </p>
              </div>

              <div className="absolute inset-0 z-[5] pointer-events-none">
                {orbitBadges.map((badge) => (
                <a
                  key={badge.key}
                  href={badge.href}
                  target={badge.href !== "#" ? "_blank" : undefined}
                  rel={badge.href !== "#" ? "noopener noreferrer" : undefined}
                  aria-label={`Visit GMIT on ${badge.labelName}`}
                  className="hero-orbit absolute inset-0 pointer-events-none"
                  style={{
                    "--orbit-size": badge.orbitSize,
                    "--orbit-duration": badge.duration,
                    "--orbit-angle": badge.angle,
                    "--orbit-offset": badge.offset,
                  }}
                >
                  <div className="hero-orbit-node pointer-events-auto">
                    <div className="hero-orbit-position">
                      <div className="hero-orbit-upright">
                        <div className="hero-orbit-content">
                          <div
                            className={`rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-xl ${badge.badgeClassName}`}
                          >
                            <div className="flex flex-col items-center leading-none">
                              <i className={`${badge.icon} text-2xl sm:text-3xl`} />
                              <span className="mt-1 rounded-full bg-white text-[11px] sm:text-xs font-bold text-slate-700 px-2 py-1 shadow-sm">
                                {badge.label}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                ))}
              </div>

              <div className="absolute bottom-10 inset-x-10 h-16 rounded-full bg-brand-accent/10 blur-2xl" />
              <img
                src={studentImg}
                alt="Student learning"
                className="w-full max-w-[24rem] sm:max-w-[28rem] lg:max-w-[30rem] h-auto object-cover relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Main;
