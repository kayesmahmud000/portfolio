"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import {
  IconMessage,
  IconUser,
  IconBriefcaseFilled,
  IconSettingsBolt,
} from "@tabler/icons-react";
import useIsMobile from "@/hook/useIsMobile";
import { Drawer, DrawerClose, DrawerContent, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import { Button } from "../ui/button";
import { RxCross2 } from "react-icons/rx";
import { IoMenuSharp } from "react-icons/io5";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "My Stack",
      link: "#stack",
      icon: <IconSettingsBolt className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconBriefcaseFilled className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  const isMobile = useIsMobile();

  return (
    <div className="relative w-full z-50">
      {isMobile ? (
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <Button variant="outline" className="text-white border-white">
              <IoMenuSharp size={36} />
            </Button>
          </DrawerTrigger>

          <DrawerContent className="bg-black text-white">
            <div className="flex justify-between items-center p-4 border-b border-white">
               <DrawerTitle className="text-lg font-semibold">Menu</DrawerTitle>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <RxCross2 size={20} />
                </Button>
              </DrawerClose>
            </div>

            <ul className="flex flex-col gap-4 px-6 py-6 text-base">
              {navItems.map((item) => (
                <DrawerClose asChild key={item.name}>
                  <a
                    href={item.link}
                    className="flex items-center gap-2 text-white hover:text-red-400 transition"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </a>
                </DrawerClose>
              ))}
            </ul>
          </DrawerContent>
        </Drawer>
      ) : (
        <FloatingNav navItems={navItems} />
      )}
    </div>
  );
}
