import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const POPUP_STORAGE_KEY = "gmit-contact-popup-shown";
const POPUP_DELAY_MS = 50000;

const ContactPopup = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(POPUP_STORAGE_KEY);
    if (alreadyShown) return undefined;

    const timer = window.setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(POPUP_STORAGE_KEY, "true");
    }, POPUP_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-end justify-center bg-slate-950/45 p-4 sm:items-center">
      <div className="relative w-full max-w-md rounded-[2rem] border border-brand-accent/20 bg-white p-7 shadow-2xl shadow-brand-dark/20">
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close contact popup"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-brand-dark"
        >
          <i className="ri-close-line text-xl" />
        </button>

        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-accent/20 bg-brand-accent/8 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-pulse" />
          Need Help?
        </div>

        <h2 className="mb-3 text-3xl font-extrabold text-brand-dark">
          Contact us for quick support
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-slate-500 sm:text-base">
          Need help choosing a course or want to talk to our team? Reach out
          and we will guide you from the start.
        </p>

        <div className="grid gap-3">
          <a
            href="tel:+919004311136"
            className="flex items-center justify-center gap-2 rounded-2xl bg-brand-dark px-5 py-3.5 font-semibold text-white transition-colors hover:bg-brand-accent"
          >
            <i className="ri-phone-line" />
            Call Now
          </a>
          <a
            href="https://wa.me/919004311136?text=Hii%20GMIT%2C%20I%20need%20help%20or%20assistance."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-5 py-3.5 font-semibold text-slate-700 transition-colors hover:border-brand-accent hover:text-brand-accent"
          >
            <i className="ri-whatsapp-line" />
            WhatsApp Us
          </a>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              navigate("/contact");
            }}
            className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-5 py-3.5 font-semibold text-slate-700 transition-colors hover:border-brand-accent hover:text-brand-accent"
          >
            <i className="ri-mail-send-line" />
            Open Contact Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
