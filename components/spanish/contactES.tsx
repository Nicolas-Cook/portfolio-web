"use client";
import React from "react";
import SectionHeading from "../section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtnES from "./submit-btnES";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contacto");
  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>Contáctame</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-gray-300">
        Contáctame directamete a{" "}
        <a className="underline" href="mailto:nicolas.cook@outlook.cl">
          nicolas.cook@outlook.cl
        </a>{" "}
        o a través de este formulario.
      </p>
      <form
        className="mt-8 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Mensaje enviado!");
        }}
      >
        <input
          name="email"
          type="email"
          required
          maxLength={500}
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white/25 dark:placeholder:text-white"
          placeholder="Tu email"
        />
        <textarea
          name="message"
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white/25 dark:placeholder:text-white"
          placeholder="Tu mensaje"
          required
          maxLength={5000}
        />
        <SubmitBtnES />
      </form>
    </motion.section>
  );
}
