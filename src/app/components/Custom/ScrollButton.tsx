"use client";

import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import useIsMobile from "@/hook/useIsMobile";

const ScrollToggleButton = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
const isMobile =useIsMobile()
  useEffect(() => {
    const handleScroll = () => {
      const banner = document.getElementById("banner");
      if (banner) {
        const bannerBottom = banner.offsetTop + banner.offsetHeight;
        const shouldShow = window.scrollY > bannerBottom - 100;
        setShowScrollUp(shouldShow);
        setIsVisible(true); // show the button once user starts scrolling
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
     
  }, []);
if (isMobile) return null;
  const handleClick = () => {
    if (showScrollUp) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={handleClick}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-red-600 text-white shadow-xl hover:bg-red-700 transition duration-300"
          >
            {showScrollUp ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToggleButton;
