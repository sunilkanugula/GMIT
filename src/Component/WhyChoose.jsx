import React from "react";
import { motion } from "framer-motion";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import erpImg from "../assets/ERP.jpg";
import projectsImg from "../assets/projects.jpg";
import consultativeImg from "../assets/CONSULTATIVE.jpg";
import placementImg from "../assets/placement_support.jpg";

/**
 * WhyChoose Section Component
 *
 * Features:
 * - Four feature cards highlighting key benefits
 * - Color-coded icons for visual distinction
 * - Responsive grid layout
 */
const WhyChoose = () => {
  // Feature data with associated colors
  const features = [
    {
      icon: "ri-file-text-line",
      color: "#0097dc",
      title: "ERP APPLICATION + BUSINESS PROCESS KNOWLEDGE",
      description:
        "Cost effective guidance on ERP Application knowledge sharing with detailed business process demonstration by highly skilled and recommended ERP consultants",
      image: erpImg,
    },
    {
      icon: "ri-calendar-schedule-line",
      color: "#0097dc",
      title: "REAL TIME PROJECT",
      description:
        "We provide real-time project work to gain practical hands-on experience using ERP",
      image: projectsImg,
    },
    {
      icon: "ri-file-list-3-line",
      color: "#0097dc",
      title: "CONSULTATIVE APPROACH",
      description:
        "Our Consultants are highly experienced and excellent in knowledge who work in close coordination with aspirants throughout the process",
      image: consultativeImg,
    },
    {
      icon: "ri-team-line",
      color: "#0097dc",
      title: "PLACEMENT SUPPORT",
      description:
        "We provide post training placement support, career advisory services and knowledge upgradation through regular industry interaction.",
      image: placementImg,
    },
  ];

  return (
    <section className="py-20 md:py-28 px-6 lg:px-12 bg-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-112.5 h-112.5 rounded-full blur-[120px] pointer-events-none opacity-30"
        style={{ background: "#0097dc" }}
      />
      <div
        className="absolute bottom-0 left-0 w-87.5 h-87.5 rounded-full blur-[100px] pointer-events-none opacity-20"
        style={{ background: "#0097dc" }}
      />

      <div className="max-w-300 w-full mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2.5 border border-brand-accent/40 bg-brand-accent/10 text-brand-accent font-bold tracking-[0.22em] text-[11px] uppercase px-5 py-2 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
            WHY GMIT
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight mb-5">
            Why Choose GMIT for{" "}
            <span className="text-brand-accent">Professional Training?</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            At GMIT, you're immersing yourself in practical, hands-on experience
            taught by industry veterans, grounded in the latest industry
            standards and practices.
          </p>
        </motion.div>

        {/* Feature Cards - Scroll Stack */}
        <ScrollStack
          itemDistance={18}
          itemStackDistance={20}
          stackPosition="80px" // Animation starts when first card touches nav bar (assumed 80px height)
          mobileItemDistance={12}
          mobileItemStackDistance={12}
          mobileStackPosition="108px"
          baseScale={1}
          itemScale={0}
        >
          {features.map((feature, index) => (
            <ScrollStackItem key={index}>
              <div
                className="group flex flex-col md:flex-row bg-white border border-brand-accent/15 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 min-h-65 md:min-h-80"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f0faff 100%)",
                }}
              >
                {/* Left - Image */}
                <div className="md:w-[48%] w-full flex items-center justify-center bg-[#f3f7fa] p-0 md:p-8">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-56 md:h-72 object-cover rounded-2xl md:rounded-2xl shadow-lg"
                    style={{ objectPosition: "center" }}
                  />
                </div>
                {/* Right - Text Content */}
                <div className="flex-1 flex flex-col justify-center px-6 py-7 md:px-10 md:py-0 gap-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 bg-brand-accent/10 border border-brand-accent/30">
                      <i
                        className={`${feature.icon} text-2xl`}
                        style={{ color: feature.color }}
                      ></i>
                    </div>
                    <span className="text-5xl font-black text-brand-dark/[0.07] select-none">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-brand-dark text-2xl md:text-3xl leading-tight mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-2">
                    {feature.description}
                  </p>
                  <div
                    className="h-0.5 mt-2 rounded-full w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: feature.color }}
                  />
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default WhyChoose;
