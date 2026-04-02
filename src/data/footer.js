// ─── Footer Data ───

const erpCourseNames = [
  "S/4 HANA MM",
  "S/4 HANA SD",
  "S/4 HANA FICO",
  "S/4 HANA ABAP",
  "S/4 HANA TM",
  "Python Full stack",
  "Java Full stack",
  "Power BI",
  "Data science",
];

export const erpCourses = erpCourseNames.map((name) => ({
  name,
  href: "/courses",
}));

export const programmingCourses = [
  { name: "Python Full stack", href: "/courses#python" },
  { name: "Java Full stack", href: "/courses#java" },
  { name: "Power BI", href: "/courses#powerbi" },
  { name: "Data science", href: "/courses#datascience" },
];

export const companyLinks = [
  { name: "Success Story", href: "#" },
  { name: "Courses", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact Us", href: "#" },
];

export const socialLinks = [
  { icon: "ri-facebook-fill", href: "#", color: "#1877f2" },
  {
    icon: "ri-instagram-line",
    href: "https://www.instagram.com/gmit.in?utm_source=qr&igsh=MXRxdXdwM2p4M25mag==",
    color: "#e4405f",
  },
  {
    icon: "ri-linkedin-fill",
    href: "https://www.linkedin.com/company/gmitin/",
    color: "#0077b5",
  },
  { icon: "ri-youtube-fill", href: "#", color: "#ff0000" },
  {
    icon: "ri-whatsapp-line",
    href: "https://wa.me/919959431136",
    color: "#25d366",
  },
];
