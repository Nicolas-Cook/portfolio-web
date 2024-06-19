"use client";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import SectionHeading from "../section-heading";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre mi", 1);
  return (
    <motion.section
      className="max-w-[45rem] text-center leading-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>Sobre mi</SectionHeading>
      <p className="mb-3">
        Soy Nicolás Cook, Ingeniero Civil en Computación e Informática de la
        Universidad Mayor. Me destaco como un profesional proactivo, dedicado a
        la constante investigación y aprendizaje para mejorar mis habilidades
        relacionadas con el desarrollo de software. Soy metódico, responsable,
        soporto trabajar bajo presión, comprometido con las deadline, con
        enfoque a la satisfacción de los requerimientos de clientes.
      </p>
    </motion.section>
  );
}
