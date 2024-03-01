import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { IoIosContrast } from "react-icons/io";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <IoIosContrast className="text-base text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-200 cursor-default animate-pulse" />
    );

  if (resolvedTheme === "dark")
    return (
      <FiSun
        className="text-base text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-200 cursor-pointer"
        onClick={() => setTheme("light")}
      />
    );

  if (resolvedTheme === "light")
    return (
      <FiMoon
        className="text-base text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-200 cursor-pointer"
        onClick={() => setTheme("dark")}
      />
    );
}
