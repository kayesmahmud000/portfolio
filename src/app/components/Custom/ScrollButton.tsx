"use client";

import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";
import useIsMobile from "@/hook/useIsMobile";

const ScrollToggleButton = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Icon switch: ⬇️ if near top, ⬆️ if scrolled down
      if (scrollY > window.innerHeight / 2) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger on mount

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
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed bottom-8 right-30 z-50"
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
  );
};

export default ScrollToggleButton;
