import React from "react";
import { motion } from "framer-motion";
import ReviewCard from "./ReviewCard";

/**
 * Reviews Section Component
 *
 * Features:
 * - Two rows of testimonials with opposite scroll directions
 * - Auto-scrolling animation with pause on hover
 * - Light theme with subtle background
 */
const Reviews = () => {
  // Reviews data
  const reviewsData = [
    {
      name: "Dhanraj Deore",
      company: "Cognizant Technology Services",
      experience: "2 Years Exp",
      review:
        "GMIT is the better platform to learn things related to SAP. This platform helped me improve my skills and career.",
      rating: 5,
      linkedin: true,
    },
    {
      name: "Diganth K",
      company: "VF Corporation",
      experience: "2 Years Exp",
      review:
        "It was a great platform to build my career in a positive way. I believe it was the best choice in my journey.",
      rating: 5,
      linkedin: true,
    },
    {
      name: "Shrevas Raj",
      company: "Decathlon Sports India",
      experience: "5 Years Exp",
      review:
        "If you are willing to start your career in SAP or already working in SAP and want to improve skills, this platform helps a lot.",
      rating: 5,
      linkedin: true,
    },
    {
      name: "Aishwarya Lohare",
      company: "Genpact",
      experience: "2 Years Exp",
      review:
        "GMIT platform not only gives knowledge but also provides a chance to develop skills and confidence.",
      rating: 5,
      linkedin: true,
    },
    {
      name: "Akshith Kulkarni",
      company: "Enventure",
      experience: "2 Years Exp",
      review:
        "Great platform to learn SAP. The teaching is excellent and we get many opportunities to ask questions.",
      rating: 5,
      linkedin: true,
    },
    {
      name: "Mathapati Rachayya",
      company: "Mindtree Bangalore",
      experience: "Fresher",
      review:
        "GMIT is the best learning platform especially for freshers who want real-time experience.",
      rating: 5,
      linkedin: true,
    },
    {
      name: "Sadanand More",
      company: "Flash Electronics India Pvt Ltd",
      experience: "1 Year Exp",
      review:
        "Sharing my real-time experience about GMIT. Very few institutes provide this level of training.",
      rating: 5,
      linkedin: true,
    },
    {
      name: "Manivel",
      company: "Deloitte India",
      experience: "6 Years Exp",
      review:
        "GMIT is the better platform to learn SAP and mentors guide you in the best possible way.",
      rating: 5,
      linkedin: true,
    },
    {
      name: "Lakshmikantha S",
      company: "Entune IT Solutions",
      experience: "4 Years Exp",
      review:
        "This is the place where you become a pro with proper guidance and motivational support.",
      rating: 5,
      linkedin: true,
    },
    {
      name: "Jeevan Alivera",
      company: "Infosys Ltd",
      experience: "1 Year Exp",
      review:
        "I came from a mechanical background and joined GMIT to learn SAP MM along with real industry exposure.",
      rating: 5,
      linkedin: true,
    },
    {
      name: "Sankranth S Kambli",
      company: "TechCatalyst Software Pvt Ltd",
      experience: "5 Years Exp",
      review:
        "GMIT supported and mentored me to enhance my SAP knowledge with great exposure.",
      rating: 5,
      linkedin: true,
    },
    {
      name: "Bhavana T M",
      company: "Reliance Jio",
      experience: "6 Years Exp",
      review:
        "Thank you GMIT for providing meaningful training and support to shape my career.",
      rating: 5,
      linkedin: true,
    },
    {
      name: "Jeevan Naik",
      company: "Sellcraft Global Solution Pvt Ltd",
      experience: "5 Years Exp",
      review:
        "GMIT helped me with SAP Material Management with in-depth knowledge which was extremely helpful.",
      rating: 5,
      linkedin: true,
    },
    {
      name: "Anjali Reddy",
      company: "Capgemini",
      experience: "1 Year Exp",
      review:
        "GMIT provided great teachers who are already working as consultants in reputed MNCs.",
      rating: 5,
      linkedin: true,
    },
  ];

  // Split reviews into two rows for animation
  const reviewsRow1 = reviewsData.slice(0, 7);
  const reviewsRow2 = reviewsData.slice(7);

  return (
    <section className="py-20 md:py-24 bg-brand-dark overflow-hidden">
      {/* Section Header */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2.5 border border-white/30 bg-white/10 text-white font-bold tracking-[0.22em] text-[11px] uppercase px-5 py-2 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
          HEAR FROM OUR STUDENTS
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          We Help <span className="text-brand-accent">Learners</span> Become
          Industry-
          <br />
          Ready Developers.
        </h2>
      </motion.div>

      {/* Row 1 - Moving Left */}
      <div className="relative mb-5">
        <div className="flex animate-scroll-left">
          {[...reviewsRow1, ...reviewsRow1].map((review, index) => (
            <div key={index} className="shrink-0 w-80 mx-2">
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Moving Right */}
      <div className="relative">
        <div className="flex animate-scroll-right">
          {[...reviewsRow2, ...reviewsRow2].map((review, index) => (
            <div key={index} className="shrink-0 w-80 mx-2">
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 15s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 15s linear infinite;
        }
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Reviews;
