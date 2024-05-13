"use client";
import React, { useEffect, useRef } from "react";
import SectionHeading from "../section-heading";
import { projectsDataES } from "@/lib/data";
import Project from "./projectES";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Proyectos");
  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>Mis proyectos</SectionHeading>
      <div>
        {projectsDataES.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
