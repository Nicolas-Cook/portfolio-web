import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { AiFillCode } from "react-icons/ai";
import { LuGraduationCap } from "react-icons/lu";
import Placeholder from "../public/Placeholder.png"
import Project1 from "../public/Project1.png"
import Project2 from "../public/Project2.png"

export const links = [
  {
    name: "Home",
    hash: "home",
  },
  {
    name: "About",
    hash: "about",
  },
  {
    name: "Projects",
    hash: "projects",
  },
  {
    name: "Skills",
    hash: "skills",
  },
  {
    name: "Experience",
    hash: "experience",
  },
  {
    name: "Contact",
    hash: "contact",
  },
];

export const linksES = [
  {
    name: "Inicio",
    hash: "home",
  },
  {
    name: "Sobre mi",
    hash: "about",
  },
  {
    name: "Proyectos",
    hash: "projects",
  },
  {
    name: "Habilidades",
    hash: "skills",
  },
  {
    name: "Experiencia",
    hash: "experience",
  },
  {
    name: "Contacto",
    hash: "contact",
  },
];

export const experienceData = [
  {
    title: "Bachelor's Degree",
    location: "Santiago, Chile",
    description:
      "I graduated after studying Civil Engineering in Computer Science and Informatics for 6 years at Universidad Mayor.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Data Analyst",
    location: "Santiago, Chile",
    description:
      "I worked as a Data Analyst for my second profesional internship in Banco Internacional. I also build a ETL system for my applied thesis proyect.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2022",
  },
    {
    title: "Full-stack Developer",
    location: "Santiago, Chile",
    description:
      "I worked as a Full-stack Developer at Dimension S.A. for my first internship for 3 months. I worked with a team of developers on a factoring web application.",
    icon: React.createElement(AiFillCode),
    date: "2021 - 2021",
  },


] as const;

export const experienceDataES = [
  {
    title: "Título",
    location: "Santiago, Chile",
    description:
      "Me gradué después de 6 años de estudios como Ingeniero Civil en Computación e Informática en la Universidad Mayor.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Analista de Datos",
    location: "Santiago, Chile",
    description:
      "Trabajé como Analista de Datos para mi segunda práctica profesional en Banco Internacional. También construí un sistema ETL para mi proyecto de título aplicado.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2022",
  },  
  {
    title: "Desarrollador Full-stack",
    location: "Santiago, Chile",
    description:
      "Trabajé como Desarrollador Full-stack en Dimension S.A. para mi primera práctica profesional durante 3 meses. Trabajé con un equipo de desarrolladores en una aplicación web de factoring.",
    icon: React.createElement(AiFillCode),
    date: "2021 - 2021",
  }
] as const;

export const projectsData = [
  {
    title: "Portfolio",
    description: "This is a portfolio I made by following a course to learn React and have a project with it.",
    tags: ["React", "Tailwind", "Next.js", "Typescript", "Framer Motion"],
    imageUrl: Project1
  },
  {
    title: "Operational Dashboard",
    description: "This was my applied thesis proyect. It is a system that extracts, transforms and loads data to LookerStudio to create an operational dashboard.",
    tags: ["Apache NiFi", "BigQuery", "LookerStudio"],
    imageUrl: Project2
  },
  // {
  //   title: "Placeholder",
  //   description: "Place holder description for projects data",
  //   tags: ["Place", "holder", "tags"],
  //   imageUrl: Placeholder
  // }
] as const;

export const projectsDataES = [
  {
    title: "Portafolio",
    description: "Portafolio hecho siguendo un curso de React para mostrar proyectos y aprender más tecnologías",
    tags: ["React", "Tailwind", "Next.js", "Typescript", "Framer Motion"],
    imageUrl: Project1
  },
  {
    title: "Dashboard Operacional",
    description: "Proyecto aplicado de título. Consiste en un sistema que extrae, transforma y carga data a LookerStudio para crear un dashboard operacional",
    tags: ["Apache NiFi", "BigQuery", "LookerStudio"],
    imageUrl: Project2
  },
  // {
  //   title: "Placeholder",
  //   description: "Place holder descripción del proyecto",
  //   tags: ["Place", "holder", "tags"],
  //   imageUrl: Placeholder
  // }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Python",
  "Django",
  "Framer Motion",
  "Ruby on Rails",
  "MVC",
  "C#",
  "Java",
  "PostgreSQL",
  "BigQuery",
  "LookerStudio"
] as const;
