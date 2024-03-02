import { motion, useAnimation } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const controls = useAnimation();

  const handleClick = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
    controls.start({
      scale: [0.79, 1],
      rotate: resolvedTheme === "dark" ? [0, 90] : [90, 0],
      transition: {
        ease: "easeInOut",
      },
    });
  }, [resolvedTheme, controls]);

  if (!mounted) {
    return <div></div>;
  }
  return (
    <motion.div
      className="text-base text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-200 cursor-pointer"
      onClick={handleClick}
      animate={controls}
    >
      {resolvedTheme === "dark" ? <FiSun /> : <FiMoon />}
    </motion.div>
  );
}
