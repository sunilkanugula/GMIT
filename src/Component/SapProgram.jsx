import React from "react";
import { motion } from "framer-motion";
import studentImg from "../assets/student2.png";

const modules = [
  {
    title: "SD",
    subtitle: "Sales and Distribution",
    className: "bg-sky-100",
  },
  {
    title: "FICO",
    subtitle: "Financial Accounting and Controlling",
    className: "bg-rose-100",
  },
  {
    title: "MM",
    subtitle: "Materials Management",
    className: "bg-amber-100",
  },
  {
    title: "ABAP",
    subtitle: "Advanced Business Application Programming",
    className: "bg-emerald-100",
  },
];

const highlights = [
  "Real-time training by an industry expert",
  "Detailed explanation of every core subject",
  "Live projects for practical exposure",
  "1-on-1 mentorship, coaching, and career services",
  "Mock interviews and resume preparation",
  "Guaranteed placement assistance",
];

const SapProgram = () => {
  const primaryNumber = "+919959431136";
  const secondaryNumber = "+918328301707";
  const whatsappNumber = "919959431136";
  const whatsappMessage = encodeURIComponent(
    "Hii GMIT, I need help or assistance with the SAP S/4 HANA job oriented program."
  );

  return (
    <section className="py-20 md:py-28 px-6 lg:px-12 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.2] pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(0,151,220,0.16),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(0,52,98,0.08),_transparent_28%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <div className="inline-flex items-center gap-2.5 border border-brand-accent/30 bg-white text-brand-accent font-bold tracking-[0.22em] text-[11px] uppercase px-5 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
              Job Oriented Program
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight mb-5">
              SAP S/4 HANA training built for{" "}
              <span className="text-brand-accent">real jobs</span>
            </h2>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mb-7">
              Transform your career with SAP expertise through classroom or
              online training, real-time trainers, live project work, and
              hands-on placement assistance.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center rounded-full bg-brand-dark text-white px-4 py-2 text-sm font-semibold">
                100% Job Oriented
              </span>
              <span className="inline-flex items-center rounded-full bg-yellow-300 text-brand-dark px-4 py-2 text-sm font-semibold">
                Classroom | Online
              </span>
              <span className="inline-flex items-center rounded-full bg-white border border-slate-200 text-slate-700 px-4 py-2 text-sm font-semibold">
                15+ Years Real-Time Trainers
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {modules.map((module) => (
                <div
                  key={module.title}
                  className={`rounded-3xl p-5 border border-white/70 shadow-sm ${module.className}`}
                >
                  <p className="text-3xl md:text-4xl font-black text-brand-dark mb-2">
                    {module.title}
                  </p>
                  <p className="text-sm md:text-base text-slate-700 leading-snug">
                    {module.subtitle}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-white border border-slate-200 px-4 py-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="ri-check-line text-brand-accent" />
                  </div>
                  <p className="text-slate-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="rounded-[2rem] overflow-hidden bg-linear-to-br from-brand-dark via-brand-accent to-sky-300 p-1 shadow-2xl">
              <div className="rounded-[calc(2rem-4px)] bg-white min-h-full">
                <div className="px-8 pt-8 pb-6">
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div>
                      <p className="text-sm uppercase tracking-[0.22em] text-brand-accent font-bold mb-2">
                        Software Training Program
                      </p>
                      <p className="text-3xl md:text-4xl font-extrabold text-brand-dark">
                        Register for a free live demo
                      </p>
                    </div>
                    <div className="w-18 h-18 rounded-full bg-yellow-300 text-brand-dark flex items-center justify-center text-center text-xs font-black leading-tight shrink-0">
                      100%
                      <br />
                      JOB
                    </div>
                  </div>

                  <div className="rounded-3xl bg-slate-50 border border-slate-200 p-5 mb-6">
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">
                      Training provided in
                    </p>
                    <p className="text-3xl md:text-4xl font-black text-brand-accent mb-2">
                      SAP S/4 HANA
                    </p>
                    <p className="text-slate-700 font-semibold">
                      SD | FICO | MM | ABAP
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl bg-green-500 hover:bg-green-600 text-white px-6 py-4 font-bold text-center transition-colors"
                    >
                      WhatsApp for Demo
                    </a>
                    <a
                      href={`tel:${primaryNumber}`}
                      className="rounded-2xl border border-brand-dark/20 text-brand-dark hover:bg-brand-dark hover:text-white px-6 py-4 font-bold text-center transition-colors"
                    >
                      Call Us Now
                    </a>
                  </div>

                  <div className="space-y-3 text-sm md:text-base">
                    <a
                      href={`tel:${primaryNumber}`}
                      className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 border border-slate-200 px-4 py-3 text-slate-700"
                    >
                      <span className="font-semibold">Primary Contact</span>
                      <span className="font-black text-brand-dark">
                        +91 995 9431 136
                      </span>
                    </a>
                    <a
                      href={`tel:${secondaryNumber}`}
                      className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 border border-slate-200 px-4 py-3 text-slate-700"
                    >
                      <span className="font-semibold">Secondary Contact</span>
                      <span className="font-black text-brand-dark">
                        +91 832 8301 707
                      </span>
                    </a>
                  </div>
                </div>

                <div className="relative bg-linear-to-r from-brand-dark to-brand-accent min-h-48 px-8 pt-6 overflow-hidden">
                  <div className="max-w-[16rem] pr-10 pb-24 sm:pb-12">
                    <p className="text-yellow-300 font-black text-sm tracking-[0.22em] uppercase mb-2">
                      Program Promise
                    </p>
                    <p className="text-white text-2xl md:text-3xl font-extrabold leading-tight">
                      Guided learning with live support and placement focus.
                    </p>
                  </div>

                  <img
                    src={studentImg}
                    alt="GMIT SAP program student"
                    className="w-36 sm:w-40 md:w-44 absolute bottom-0 right-3 sm:right-5 object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SapProgram;
