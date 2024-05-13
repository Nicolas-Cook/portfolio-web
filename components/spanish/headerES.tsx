"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { linksES } from "@/lib/data";
import { Link as ScrollLink } from "react-scroll";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem]
        w-full rounded-none border border-white border-opacity-40
        bg-white bg-opacity-80 shadow-lg
        shadow-black/[0.03] backdrop-blur-[0.5rem] 
        sm:top-6 sm:h-[3.25rem] sm:w-[40rem] sm:rounded-full  dark:bg-gray-900 dark:border-black/35 dark:bg-opacity-80"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {linksES.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <ScrollLink
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition cursor-pointer dark:text-gray-400 dark:hover:text-gray-200",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                to={link.hash}
                smooth={true} // Enable smooth scrolling
                duration={500} // Duration of the scroll animation
                offset={-100} // Leave a margin from the top
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-50 rounded-full absolute inset-0 -z-10 dark:bg-gray-700"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </ScrollLink>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
