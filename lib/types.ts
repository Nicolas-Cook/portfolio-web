// import { links, linksES } from "./data";
// import useLanguage from "@/app/language";

// const { detectLanguage } = useLanguage();
// const chosenLinks = detectLanguage() === "Español" ? linksES : links;

// export type SectionName = (typeof chosenLinks)[number]["name"];
import { links, linksES } from "./data";
import useLanguage from "@/app/language";

export type SectionName = (typeof links | typeof linksES)[number]["name"];

export const useSectionName = (): SectionName[] => {
  const { detectLanguage } = useLanguage();
  return detectLanguage() === "Español" ? linksES.map(link => link.name) : links.map(link => link.name);
};