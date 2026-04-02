// ─── Footer Data ───

const buildLink = (name, fragment) => ({
  name,
  href: fragment ? `/courses#${fragment}` : "/courses",
});

const erpPrimary = [
  "S/4 HANA MM",
  "S/4 HANA SD",
  "S/4 HANA FICO",
  "S/4 HANA ABAP",
  "S/4 HANA TM",
].map((name) => buildLink(name));

const erpSecondary = [
  { name: "Python Full stack", fragment: "python" },
  { name: "Java Full stack", fragment: "java" },
  { name: "Power BI", fragment: "powerbi" },
  { name: "Data science", fragment: "datascience" },
].map(({ name, fragment }) => buildLink(name, fragment));

export { erpPrimary, erpSecondary };

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
