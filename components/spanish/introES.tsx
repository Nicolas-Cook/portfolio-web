"use client";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import React, { useEffect } from "react";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  const { ref } = useSectionInView("Inicio");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/yo.png"
              alt="yo"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.3rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-2xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👍
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="">
          Hola, soy <strong>Nicolás,</strong>{" "}
          <strong>ingeniero de software</strong> con{" "}
          <strong>1 año de experiencia.</strong> Estoy en constante busca de
          nuevos retos y aprender nuevas tecnologías.
        </span>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={-100}
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          className="group bg-gray-800 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contáctame{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </ScrollLink>
        <a
          className="group bg-white rounded-full px-7 py-3 flex items-center gap-2 outline-none focus:scale-110 hover:scale-110 active:scale-105 cursor-pointer borderBlack dark:bg-gray-800"
          href="/Nicolas Cook CV.pdf"
          download={true}
        >
          Descarga CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />{" "}
        </a>
        <a
          className="bg-white rounded-full px-5 py-3 flex items-center gap-2 outline-none focus:scale-110 hover:scale-110 active:scale-105 cursor-pointer borderBlack dark:bg-gray-800"
          href="https://www.linkedin.com/in/nicol%C3%A1s-cook-4452bb1b8/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white rounded-full px-5 py-3 flex items-center gap-2 outline-none focus:scale-110 hover:scale-110 active:scale-105 cursor-pointer borderBlack dark:bg-gray-800"
          href="https://github.com/Nicolas-Cook"
          target="_blank"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
