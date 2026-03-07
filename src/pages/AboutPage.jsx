import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";

const stats = [
  { value: "2020", label: "Est. Year" },
  { value: "1M+", label: "Students" },
  { value: "100+", label: "Companies" },
  { value: "100%", label: "Online" },
];

const pillars = [
  {
    icon: "ri-rocket-2-line",
    title: "Our Mission",
    body: "GMIT is your gateway to the digital economy — empowering professionals worldwide with cutting-edge skills to excel in today's fast-paced business environment.",
  },
  {
    icon: "ri-eye-line",
    title: "Our Vision",
    body: "To become the world's most trusted platform for professional upskilling, creating a global community of industry-ready talent that drives innovation.",
  },
  {
    icon: "ri-medal-line",
    title: "Excellence First",
    body: "We continuously update our curriculum to reflect the latest industry trends, ensuring every graduate is an in-demand professional ready for tomorrow's challenges.",
  },
  {
    icon: "ri-community-line",
    title: "Thriving Community",
    body: "Join over a million learners who've transformed their careers with GMIT — whether advancing in your role or pivoting to a new field entirely.",
  },
];

const values = [
  {
    icon: "ri-lightbulb-line",
    title: "Innovation",
    desc: "We embrace new technologies and teaching methods to deliver the best learning experience.",
  },
  {
    icon: "ri-hand-heart-line",
    title: "Student First",
    desc: "Every decision we make starts with what's best for our learners and their careers.",
  },
  {
    icon: "ri-shield-check-line",
    title: "Integrity",
    desc: "We maintain transparency in our processes and deliver on every promise we make.",
  },
  {
    icon: "ri-team-line",
    title: "Collaboration",
    desc: "We believe in the power of community, mentorship, and learning together.",
  },
];

const timeline = [
  {
    year: "2020",
    title: "Founded",
    desc: "GMIT was born with a mission to make professional training accessible and practical.",
  },
  {
    year: "2021",
    title: "First 10K Students",
    desc: "Crossed 10,000 enrolled students within the first year with SAP training programs.",
  },
  {
    year: "2022",
    title: "MSME Certified",
    desc: "Received official certification from the Ministry of MSME, Government of India.",
  },
  {
    year: "2023",
    title: "100+ Hiring Partners",
    desc: "Partnered with over 100 companies for placement support and industry collaboration.",
  },
  {
    year: "2024",
    title: "1 Million+ Learners",
    desc: "Crossed the milestone of 1 million students trained across multiple domains.",
  },
];

const AboutPage = () => {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.5, smooth: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <NavBar />

      {/* ───── Hero ───── */}
      <section className="relative bg-brand-dark pt-28 pb-20 px-6 lg:px-12 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute bottom-0 left-1/4 w-125 h-125 bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2.5 border border-white/30 bg-white/10 text-white font-bold tracking-[0.22em] text-[11px] uppercase px-5 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              OUR STORY
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
              About{" "}
              <span className="relative inline-block text-brand-accent">
                Us
                <span className="absolute -bottom-1 left-0 w-full h-0.75 bg-brand-accent rounded-full" />
              </span>
            </h1>

            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              We're on a mission to bridge the gap between education and
              industry, one learner at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ───── Stats Bar ───── */}
      <section className="bg-slate-50 py-10 px-6 lg:px-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="rounded-2xl py-6 text-center border border-brand-accent/15"
              style={{
                background:
                  "linear-gradient(135deg, #ffffff 0%, #e8f7fd 60%, #d0eefa 100%)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-3xl md:text-4xl font-black text-brand-dark leading-none mb-1">
                {stat.value}
              </p>
              <p className="text-slate-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───── Mission & Pillars ───── */}
      <section className="py-16 px-6 lg:px-12 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.25] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-0 right-0 w-105 h-105 bg-brand-accent/6 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Drives <span className="text-brand-accent">Us</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-5">
            {pillars.map(({ icon, title, body }, i) => (
              <motion.div
                key={title}
                className="flex gap-4 p-6 rounded-2xl border border-slate-100 hover:border-brand-accent/25 hover:shadow-md transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f0faff 100%)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <i className={`${icon} text-brand-accent text-xl`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark mb-1">
                    {title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Our Values ───── */}
      <section className="bg-brand-dark py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Core <span className="text-brand-accent">Values</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((val, i) => (
              <motion.div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-brand-accent/15 flex items-center justify-center mb-4">
                  <i className={`${val.icon} text-brand-accent text-2xl`} />
                </div>
                <h3 className="text-white font-bold mb-2">{val.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Journey / Timeline ───── */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our <span className="text-brand-accent">Journey</span>
          </motion.h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-accent/20" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex gap-6 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-brand-accent/15 border-2 border-brand-accent flex items-center justify-center shrink-0 z-10">
                    <span className="text-brand-accent font-bold text-xs">
                      {item.year}
                    </span>
                  </div>
                  <div className="pb-2">
                    <h3 className="font-bold text-slate-900 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mt-1">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── CTA Banner ───── */}
      <section className="mx-6 lg:mx-12 mb-16">
        <motion.div
          className="max-w-7xl mx-auto bg-brand-accent rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Want to be part of our story?
            </h3>
            <p className="text-white/80">
              Join the GMIT community and start your transformation today.
            </p>
          </div>
          <button className="bg-white text-brand-accent px-8 py-3.5 rounded-xl font-bold hover:bg-slate-50 transition-colors shrink-0 flex items-center gap-2">
            Get Started <i className="ri-arrow-right-line" />
          </button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
