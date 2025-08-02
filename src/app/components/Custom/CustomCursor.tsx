"use client";

import useIsMobile from "@/hook/useIsMobile";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const lastPosition = useRef({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
 const isMobile =useIsMobile()
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const dx = e.clientX - lastPosition.current.x;
      const dy = e.clientY - lastPosition.current.y;
     
      if (dx !== 0 || dy !== 0) {
        setIsMoving(true);
        const newAngle = Math.atan2(dy, dx) * (180 / Math.PI);
        setAngle(newAngle);
        lastPosition.current = { x: e.clientX, y: e.clientY };

        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          setIsMoving(false);
        }, 200);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
   
  }, [cursorX, cursorY]);
 if (isMobile) return null;
  return (
    <>
      {/* 🔆 Soft Light Under Glow (Only when moving) */}
      {isMoving && (
        <motion.div
          className="pointer-events-none fixed top-0 left-0 z-[9998] bg-red-700 opacity-10 blur-[60px]"
          style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
            width: 100,
            height: 100,
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}

      {/* 🔥 Glowing Flame Outer */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] bg-red-700 opacity-20 blur-xl"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          rotate: isMoving ? `${angle}deg` : "0deg",
          width: isMoving ? 80 : 30,
          height: isMoving ? 40 : 30,
          borderRadius: isMoving ? "50% 50% 50% 50%" : "50%",
        }}
      />

    <motion.div
  className="pointer-events-none fixed top-0 left-0 z-[9999] bg-red-700"
  style={{
    translateX: cursorXSpring,
    translateY: cursorYSpring,
    rotate: isMoving ? `${angle + 180}deg` : "0deg", // 🔄 flip flame
    width: isMoving ? 32 : 16,
    height: isMoving ? 16 : 16,
    borderRadius: isMoving ? "80% 30% 50% 50%" : "50%", // 🛠️ reversed shape
  }}
/>
    </>
  );
};

export default CustomCursor;
