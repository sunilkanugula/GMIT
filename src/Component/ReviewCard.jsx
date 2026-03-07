import React from "react";

/**
 * ReviewCard Component - Individual testimonial card
 *
 * Props:
 * - name: Reviewer's name
 * - company: Reviewer's company
 * - experience: Years of experience
 * - rating: Numeric rating (1-5)
 * - review: Review text content
 * - linkedin: Whether to show LinkedIn badge
 */
const ReviewCard = ({
  name,
  company,
  experience,
  rating,
  review,
  linkedin,
}) => {
  /**
   * Renders star rating icons
   * @param {number} rating - Rating value (can include half stars)
   * @returns {JSX.Element[]} Array of star icons
   */
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <i key={i} className="ri-star-fill text-yellow-400 text-xs"></i>,
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <i key={i} className="ri-star-half-fill text-yellow-400 text-xs"></i>,
        );
      } else {
        stars.push(
          <i key={i} className="ri-star-fill text-slate-200 text-xs"></i>,
        );
      }
    }
    return stars;
  };

  // Get initials from name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div
      className="w-80 rounded-2xl p-5 border border-brand-accent/15 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #f0faff 100%)",
      }}
    >
      {/* Glow */}
      <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-brand-accent/15 blur-xl pointer-events-none" />

      {/* Quote mark */}
      <i className="ri-double-quotes-l text-3xl text-brand-accent/20 absolute top-4 right-4"></i>

      {/* Review text */}
      <p className="text-slate-600 text-sm leading-relaxed mb-5 pr-5">
        {review}
      </p>

      {/* Divider */}
      <div className="h-px bg-brand-accent/10 mb-4" />

      {/* Footer */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-linear-to-br from-brand-dark to-brand-accent text-white font-bold text-xs shrink-0">
          {getInitials(name)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h4 className="text-brand-dark font-bold text-sm truncate">
              {name}
            </h4>
            {linkedin && (
              <i className="ri-linkedin-box-fill text-[#0077b5] text-xs shrink-0"></i>
            )}
          </div>
          <p className="text-brand-accent text-xs font-medium truncate">
            {company}
          </p>
        </div>
        <div className="flex gap-0.5 shrink-0">{renderStars(rating)}</div>
      </div>
    </div>
  );
};

export default ReviewCard;
