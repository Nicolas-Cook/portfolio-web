"use client";
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";

export default function LanguageToggleButton({
  onClick,
  text,
}: {
  onClick: () => void;
  text: string;
}) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Call the passed onClick function
    onClick();

    // Scroll to the top
    scroll.scrollToTop({ duration: 500 });

    // Remove focus from the button
    e.currentTarget.blur();
  };
  return (
    <motion.div
      initial={{ scale: 1, opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <button
        onClick={handleClick}
        className="fixed right-5 h-[4rem]
          rounded-none border border-white border-opacity-40
          bg-white bg-opacity-80 shadow-lg pr-px
          shadow-black/[0.03] backdrop-blur-[0.5rem] 
          sm:top-6 sm:h-[3rem] sm:w-[6rem] sm:rounded-full font-medium text-gray-500
          focus:scale-110 hover:scale-110 active:scale-105 focus:outline-none hover:text-gray-950 dark:bg-gray-900 dark:border-none dark:hover:text-white"
      >
        {text}
      </button>
    </motion.div>
  );
}
