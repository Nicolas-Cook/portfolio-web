import React from "react";

export const LanguageContext = React.createContext({
  spanish: false,
  setSpanish: (_: boolean) => {},
});
