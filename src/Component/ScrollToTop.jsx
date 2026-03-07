import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

/**
 * ScrollToTop component
 * Ensures the page scrolls to the top on route change, including with Lenis smooth scroll.
 */
export default function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    // Try Lenis if available, else fallback to window.scrollTo
    let didScroll = false;
    if (window.Lenis || window.lenis) {
      try {
        (window.Lenis || window.lenis).scrollTo(0, { immediate: true });
        didScroll = true;
      } catch {}
    }
    if (!didScroll) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location.pathname]);
  return null;
}
