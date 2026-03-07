import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  const companies = [
    { name: "Amazon", domain: "amazon.com" },
    { name: "Walmart", domain: "walmart.com" },
    { name: "TCS", domain: "tcs.com" },
    { name: "Rapidops", domain: "rapidops.com" },
    { name: "Microsoft", domain: "microsoft.com" },
    { name: "Google", domain: "google.com" },
    { name: "Meta", domain: "meta.com" },
    { name: "Apple", domain: "apple.com" },
    { name: "Infosys", domain: "infosys.com" },
    { name: "Wipro", domain: "wipro.com" },
  ];

  // Duplicate for seamless infinite loop
  const track = [...companies, ...companies];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      {/* Header */}
      <motion.div
        className="text-center mb-14 px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 border border-brand-accent/40 bg-brand-accent/8 text-brand-accent font-bold tracking-[0.22em] text-[11px] uppercase px-5 py-2 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
          TRUSTED BY INDUSTRY LEADERS
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
        </div>

        {/* Heading */}
        <h3 className="text-2xl md:text-3xl font-extrabold text-brand-dark leading-snug">
          Our alumni work at{" "}
          <span className="relative inline-block text-brand-accent">
            100+ top companies
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-brand-accent/30 rounded-full"></span>
          </span>
        </h3>
      </motion.div>

      {/* Marquee */}
      <motion.div
        className="relative overflow-hidden py-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-36 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-36 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Single animated track — animates to -50% for seamless loop */}
        <div
          className="flex items-center animate-marquee"
          style={{ width: "max-content" }}
        >
          {track.map((company, index) => (
            <div
              key={index}
              className="mx-8 flex items-center gap-3 group cursor-default"
            >
              <img
                src={`https://logo.clearbit.com/${company.domain}`}
                alt={company.name}
                className="w-6 h-6 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <span className="text-slate-400 text-sm font-semibold tracking-wide group-hover:text-brand-dark transition-colors duration-300 select-none whitespace-nowrap">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Marquee;
