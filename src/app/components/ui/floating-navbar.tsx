"use client";
import type { JSX } from "react";

import {
  motion,
  AnimatePresence,
  
} from "framer-motion";
import { cn } from "@/lib/utils";


type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  

  return (
    <AnimatePresence mode="wait">
      <motion.div
         initial={{ opacity: 1, y: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.3 }}
  className={cn(
    "flex max-w-2xl fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[...] z-[5000] pr-2 pl-2 py-2 items-center justify-around md:space-x-4",
    className
  )}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-white items-center flex  space-x-1   hover:text-red-600 transition-colors duration-300"
            )}
          >
            <span className=" hover:text-red-600 transition-colors duration-300">{navItem.icon}</span>
            <span className="text-sm">{navItem.name}</span>
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
