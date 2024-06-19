"use client";
import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "../section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 1);
  return (
    <motion.section
      className="mb-1 max-w-[45rem] text-center leading-8 sm:mb-1 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am Nicolás Cook, a Civil Engineer in Computer Science and Informatics
        from Universidad Mayor. I stand out as a proactive professional
        dedicated to continuous research and learning to enhance my software
        development skills. I am methodical, responsible, able to work under
        pressure, committed to meeting deadlines, and focused on satisfying
        client requirements.
      </p>
    </motion.section>
  );
}
