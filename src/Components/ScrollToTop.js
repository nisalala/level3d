// src/Components/ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Get the current route

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top smoothly
  }, [pathname]); // Run when the route changes

  return null;
};

export default ScrollToTop;
