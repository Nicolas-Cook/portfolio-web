"use client";
import React, { useEffect } from "react";
import Header from "@/components/english/header";
import HeaderES from "@/components/spanish/headerES";
import Home from "../app/page";
import useLanguage from "../app/language";
import LanguageToggleButton from "@/components/language-toggle";
import Footer from "@/components/english/footer";
import FooterES from "@/components/spanish/footerES";
import { LanguageContext } from "@/context/LanguageContext";

const LanguageSpecificComponent: React.FC = () => {
  const { spanish, setSpanish, toggle, detectLanguage } = useLanguage();

  useEffect(() => {
    const userLang = navigator.language;
    if (userLang.includes("es")) {
      setSpanish(true);
    }
  }, [setSpanish]);

  const HeaderComponent = spanish ? HeaderES : Header;
  const FooterComponent = spanish ? FooterES : Footer;

  return (
    <LanguageContext.Provider value={{ spanish, setSpanish }}>
      <LanguageToggleButton onClick={toggle} text={detectLanguage()} />
      <HeaderComponent />
      <Home />
      <FooterComponent />
    </LanguageContext.Provider>
  );
};

export default LanguageSpecificComponent;
