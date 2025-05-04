
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component that scrolls the window to the top
 * whenever the pathname in the URL changes (i.e., on navigation)
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Automatically scroll to top when route/pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth" // Add smooth scrolling effect
    });
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
