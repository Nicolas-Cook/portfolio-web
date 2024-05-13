import { links, linksES } from "./data";
import useLanguage from "@/app/language";

const { detectLanguage } = useLanguage();
const chosenLinks = detectLanguage() === 'Español' ? linksES : links;

export type SectionName = (typeof chosenLinks)[number]["name"];