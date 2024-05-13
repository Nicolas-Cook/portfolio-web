import "./globals.css";
import React, { useEffect, useState } from "react";
import ActiveSectionContextProvider from "@/context/active-section-context";
import LanguageSpecificComponent from "@/components/language-specific";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

export default function RootLayout() {
  return (
    <html>
      <body
        className={`bg-gray-300 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-800 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#f0babc] absolute top-[-6rem] -z-10 right-[11rem] h-[34.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w[68.75rem] dark:bg-[#946264]"></div>
        <div className="bg-[#bebef3] absolute top-[-1rem] -z-10 right-[-35rem] h-[34.25rem] w-[50rem] rounded-full blur-[10rem] sm:w[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[15rem] 2xl:left-[-5rem] dark:bg-[#676393]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <LanguageSpecificComponent />
            <Toaster position="top-center" />
          </ActiveSectionContextProvider>
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
