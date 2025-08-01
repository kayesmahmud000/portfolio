"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { IconMessage, IconUser , IconBriefcaseFilled ,IconSettingsBolt
 } from "@tabler/icons-react";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skill",
      link: "/skill",
      icon: (
        <IconSettingsBolt className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Project",
      link: "/project",
      icon: (
        <IconBriefcaseFilled className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    
    </div>
  );
}
