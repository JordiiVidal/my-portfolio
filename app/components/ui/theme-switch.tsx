import { motion, useAnimation } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const useDarkTheme = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(resolvedTheme === "dark");

  const setDarkTheme = (value: boolean) => {
    setIsDarkTheme(value);
    setTheme(value ? "dark" : "light");
  };

  return { isDarkTheme, setDarkTheme };
};

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setDarkTheme, isDarkTheme } = useDarkTheme();
  const controls = useAnimation();

  const handleClick = () => {
    setDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    setMounted(true);
    controls.start({
      scale: [0.79, 1],
      rotate: isDarkTheme ? [0, 90] : [90, 0],
      transition: {
        ease: "easeInOut",
      },
    });
  }, [isDarkTheme, controls]);

  return (
    <motion.div
      className="text-base text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-200 cursor-pointer"
      onClick={handleClick}
      animate={controls}
    >
      {mounted && isDarkTheme ? <FiSun /> : <FiMoon />}
    </motion.div>
  );
}
