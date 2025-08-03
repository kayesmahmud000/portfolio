"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true, // only animate once while scrolling down
    });
  }, []);

  return null;
};

export default AOSInitializer;
