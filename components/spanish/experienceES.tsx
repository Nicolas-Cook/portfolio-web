"use client";
import { useSectionInView } from "@/lib/hooks";
import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "../section-heading";
import { experienceDataES } from "@/lib/data";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref, inView } = useSectionInView("Experiencia", 0.4);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  useEffect(() => {
    if (inView) {
      setHasBeenInView(true);
    }
  }, [inView]);
  const { theme } = useTheme();
  return (
    <section ref={ref} id="experience" className="mb-20 sm:mb-28">
      <SectionHeading>Experiencia</SectionHeading>
      <VerticalTimeline lineColor="">
        {experienceDataES.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={hasBeenInView}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255,255,255,0.1)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
