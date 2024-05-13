import { links, linksES } from "./data";
// import useLanguage from "@/app/language";

// const { detectLanguage } = useLanguage();
// const chosenLinks = detectLanguage() === "Español" ? linksES : links;
const combinedLinks = [...links, ...linksES];

export type SectionName = (typeof combinedLinks)[number]["name"];
// export type SectionName = (typeof chosenLinks)[number]["name"];