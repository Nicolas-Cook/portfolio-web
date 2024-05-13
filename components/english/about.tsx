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
        from Universidad Mayor. I have previous experience as a Full-Stack
        Developer at Dimensión S.A., where I collaborated in the development of
        a Factoring web application alongside a team of developers. I also have
        experience as a Data Analyst at Banco Internacional, where I worked with
        the PMO to collect data and generate metrics from it. Furthermore, I
        stand out as a proactive professional, dedicated to constant research
        and learning to improve my software development skills.
      </p>
    </motion.section>
  );
}
