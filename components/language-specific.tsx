"use client";
import React, { useEffect } from "react";
import Header from "@/components/english/header";
import HeaderES from "@/components/spanish/headerES";
import Home, { Homes } from "../app/page";
import useLanguage from "../app/language";
import LanguageToggleButton from "@/components/language-toggle";
import Footer from "@/components/english/footer";
import FooterES from "@/components/spanish/footerES";

const LanguageSpecificComponent: React.FC = () => {
  const { spanish, setSpanish, toggle, detectLanguage } = useLanguage();

  useEffect(() => {
    const userLang = navigator.language;
    if (userLang.includes("es")) {
      setSpanish(true);
    }
  }, []);

  const HeaderComponent = spanish ? HeaderES : Header;
  const HomeComponent = spanish ? Homes : Home;
  const FooterComponent = spanish ? FooterES : Footer;

  return (
    <>
      <LanguageToggleButton onClick={toggle} text={detectLanguage()} />
      <HeaderComponent />
      <HomeComponent />
      <FooterComponent />
    </>
  );
};

export default LanguageSpecificComponent;
