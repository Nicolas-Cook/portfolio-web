"use client";
import { useState } from "react";

const useLanguage = () => {
  const [spanish, setSpanish] = useState(false);
  const toggle = () => {
    setSpanish((wasSpanish) => !wasSpanish);
  };
  const detectLanguage = () => {
    var text = "";
    if (!spanish) {
      text = "Español";
    } else {
      text = "English";
    }
    return text;
  };
  return { spanish, setSpanish, toggle, detectLanguage };
};

export default useLanguage;
