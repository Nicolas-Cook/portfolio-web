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
        Universidad Mayor. Poseo experiencia previa como Desarrollador
        Full-Stack en la empresa Dimensión S.A., donde colaboré en el desarrollo
        de una aplicación web de Factoring junto a un equipo de desarrolladores.
        También poseo experiencia como Analista de Datos en el Banco
        Internacional, donde trabajé con la PMO para recolectar datos y generar
        métricas a partir de estos. Asimismo, me destaco como un profesional
        proactivo, dedicado a la constante investigación y aprendizaje para
        mejorar mis habilidades relacionadas con el desarrollo de software.
      </p>
    </motion.section>
  );
}
